// ./client/app/service/user.js
/**
 * @ngdoc service
 * @name app.core.login:user
 * @description User Service Module.
 */
function user (__interface__) {
  'use strict';

  /**
   * @ngdoc service
   * @name UserService
   * @memberOf app.core.login:user
   */
  __interface__
    .factory('UserService', [
      UserService
    ]);

  /**
   * @function UserService
   * @returns {object} A service API for users.
   */
  function UserService () {
    var service = {
      userLogin : userLogin,
      userGet   : userGet,
      usersGet  : usersGet
    };

    return service;

    ////////////

    function userLogin () {
    }

    function userGet () {
    }

    function usersGet () {
    }

  }
}

define(['interface'], user);
