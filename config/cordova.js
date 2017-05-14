// ./config/cordova.js
/**
 * @name
 * @description
 */
module.exports = function (grunt) {

  var objectInterface = {

    options: {
        path : 'native',
        cli  : 'cordova'
    },

    cordova: {
        options: {
            command   : ['create','platform','plugin','build'],
            platforms : ['ios','android'],
            plugins   : ['device','dialogs'],
            path      : 'client',
            id        : 'io.cordova.hellocordova',
            name      : 'HelloCordova'
        }
    },

    create: {
        options: {
            command : 'create',
            id      : 'com.hybridAngularAmdHateoas',
            name    : 'hybridAngularAmdHateoas'
        }
    },

    add_platforms: {
        options: {
            command   : 'platform',
            action    : 'add',
            platforms : ['ios', 'android']
        }
    },

    add_plugins: {
        options: {
            command : 'plugin',
            action  : 'add',
            plugins : [
                'battery-status',
                'camera',
                'console',
                'contacts',
                'device',
                'device-motion',
                'device-orientation',
                'dialogs',
                'file',
                'geolocation',
                'globalization',
                'inappbrowser',
                'media',
                'media-capture',
                'network-information',
                'splashscreen',
                'vibration'
            ]
        }
    },

    remove_plugin: {
        options: {
            command : 'plugin',
            action  : 'rm',
            plugins : [
                'battery-status'
            ]
        }
    },

    build_ios: {
        options: {
            command   : 'build',
            platforms : ['ios']
        }
    },

    build_android: {
        options: {
            command   : 'build',
            platforms : ['android']
        }
    },

    emulate_android: {
        options: {
            command   : 'emulate',
            platforms : ['android'],
            args      : ['--target','Nexus5']
        }
    },

    add_facebook_plugin: {
        options: {
            args    : [
              '--variable',
              'APP_ID=fbXXXXXXXX',
              '--variable',
              'APP_NAME=hybridAngularAmdHateoas'
            ],
            command : 'plugin',
            action  : 'add',
            plugins : [
                'com.phonegap.plugins.facebookconnect'
            ]
        }
    }
  };

  return objectInterface;
};
