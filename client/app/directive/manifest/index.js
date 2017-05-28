// ./client/app/directive/manifest/index.js
/**
 * @ngdoc overview
 * @name app.core.directive:manifest
 * @description Application Manifest directive.
 */
function manifest (angularAMD) {
  'use strict';

  /**
   * @ngdoc directive
   * @memberOf app.core.index:manifest
   * @name appManifest
   * @description A pseudo application manifest file which might be used
   * to generate proper application manifest files.
   */
  angularAMD
    .directive('appManifest', [appManifest]);

  /**
   * @function ManifestController
   * @param $scope
   * @param PackageService
   * @returns {undefined}
   */
  function ManifestDirectiveController ($scope, PackageService) {

    PackageService.get().then(PackagetLoadCompleted, PackageLoadFailed);

    /**
     * @function PackagetLoadCompleted
     * @param {object} content A JSON package file.
     * @returns {*} undefined
     */
    function PackagetLoadCompleted (content) { $scope.vm.package = content; }

    /**
     * @function PackageLoadFailed
     * @param {object} error An error document.
     * @returns {*} undefined
     */
    function PackageLoadFailed (error) { console.log('⚠️ Could not load project manifest'); }
  }

  /**
   * @function appManifest
   * @returns {object} An AngularJS directive.
   */
  function appManifest () {
    var directive = {
      scope : {},
      templateUrl  : 'assets/app/directive/manifest/index.html',
      controllerAs : 'vm',
      controller   : ['$scope', 'PackageService', ManifestDirectiveController],
      link         : link
    };
    return directive;
    ////////////
    function link ($scope, $element, $attrs, $ctrl) {
    }
  }

}

define([
  'angularAMD',
  'css!../../../app/config/manifest',
  'ngload!external/service/package'
], manifest);
