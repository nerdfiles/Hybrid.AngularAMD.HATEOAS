var fs = require('fs');
var _ = require('lodash');

module.exports = function (app) {

  app.get('/api/v0/orders/:id?', function (request, response, next) {
    var id = request.params.id || null;
    var _json;
    var json;

    if (id) {
      try {
        _json = JSON.parse(fs.readFileSync(__dirname + '/../mocks/orders/' + id + '.json', 'utf8'));
        _.extend(_json, { status: 200 });
      } catch (e) {
        _json = { status: 404, error: e };
      } finally {
        json = _json;
      }
    } else if (!id) {
      json = {
        status: 200
      }

      return response
        .status(json.status)
        .json(
          {
            _links: {
              self: {
                href: 'api/v0/orders'
              }
            },
            _embedded: {
              'api/v0/orders': [
                {
                  id: 42,
                  title: 'Some item'
                }
              ]
            }
          }
        )
    }

    response
      .setHeader('Content-Type', 'application/json');

    response
      .status(json.status)
      .send(JSON.stringify(json, null, 3));
  });

  app.get('/api/v0/api-gateway/fugvjdxtri', function (request, response, next) {
    response.setHeader('Content-Type', 'application/json');
    var json = JSON.parse(fs.readFileSync(__dirname + '/../mocks/api-gateway.json', 'utf8'));
    response.send(JSON.stringify(json, null, 3));
  });

};
