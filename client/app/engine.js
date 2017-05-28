// ./client/app/engine.js
/**
 * @author https://github.com/plediii
 */
module.exports = app;
function app (options) {
  var eio = require('engine.io-client');
  var dualapi = require('dualapi').use(require('dual-engine.io-client'));

  var addBtn = document.getElementById('add');
  var statusText = document.getElementById('status');
  var addend = document.getElementById('addend');
  var d;

  var disconnect = {
    server: function () {
      statusText.innerText = 'not connected';
      addBtn.disabled = true;
    }
  };

  var connect = {
    server: function () {
      addBtn.disabled = false;
      statusText.innerText = 'connected';
      d.request(['server', 'addend'])
        .spread(function (body, options) {
          if (options.statusCode === 200) {
            addend.innerText = '' + body;
          } else {
            console.error('' + options.statusCode + ' Server did not return addend');
          }
        });
    }
  };

  function serviceAddEnd (body) {
    addend.innerText = '' + body;
  }

  function global (body, ctxt) {
    console.log(ctxt.from.join('/'), '->', ctxt.to.join('/'), ':', body);
  }

  var service = {
    '**'       : global,
    addend     : serviceAddEnd,
    connect    : connect,
    disconnect : disconnect
  };

  d = dualapi()
    .mount(service);

  d.engineio(eio, ['server'], options);

  addBtn.onclick = function () {
    d.send(['server', 'add']);
  };

}
