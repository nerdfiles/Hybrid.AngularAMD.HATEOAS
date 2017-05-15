/*jslint node: true */
/* global -Promise */

var dualapi = require('dualapi')
  .use(require('dual-engine.io'));

module.exports = function () {
  'use strict';

  var dual = dualapi();

  var addend = 0;
  var mountConfig = {
		'**': function (body, ctxt) {
			console.log(ctxt.from.join('/'), '->', ctxt.to.join('/'), ':', body);
		},
    add: function () {
			addend++;
			dual.send({
			  to   : ['engineio', '*', 'addend'],
			  body : addend
			});
		},
    addend: function (body, ctxt) {
			ctxt.return(addend);
		},
    error: function (ctxt) {
			console.error(ctxt.body);
			if (ctxt.body.message.stack) {
			  console.error(ctxt.body.message.stack);
			}
		}
  };

  dual.mount(mountConfig);
  return dual;
};
