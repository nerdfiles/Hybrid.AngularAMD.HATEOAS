// ./client/scripts/service/user.js
/**
 * @ngdoc service
 * @name app.core.login:user
 * @description User Service Module.
 */
define([
  'interface'
], user);

function user (__interface__) {
  'use strict';

  __interface__.factory('UserService', [
    UserService
  ]);

  function UserService () {
    var service = {
      userLogin : userLogin,
      userGet   : userGet,
      usersGet  : usersGet
    };

    ////////////

    function userLogin () {
    }

    function userGet () {
    }

    function usersGet () {
    }

    return service;
  }
}
