// ./client/scripts/directive/manifest/index.js
/**
 * @ngdoc overview
 * @name app.core.directive:manifest
 * @description Application Manifest directive.
 */
define([
  'angularAMD',
  'ngload!external/service/package'
], manifest);
function manifest (angularAMD) {
  function ManifestController ($scope, PackageService) {
    PackageService.get().then(PackagetLoadCompleted, PackageLoadFailed);
    function PackagetLoadCompleted (content) { $scope.vm.package = content; }
    function PackageLoadFailed (error) { console.log('⚠️ Could not load project manifest'); }
  }
  angularAMD.directive('appManifest', [appManifest]);
  function appManifest () {
    var directive = {
      scope : {},
      templateUrl  : 'assets/scripts/directive/manifest/index.html',
      controllerAs : 'vm',
      controller   : ['$scope', 'PackageService', ManifestController],
      link         : link
    };
    return directive;
    ////////////
    function link ($scope, $element, $attrs, $ctrl) {
    }
  }

}

