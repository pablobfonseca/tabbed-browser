angular.module('browser')
.directive('iframeTab', iframeTab);

function iframeTab() {

  return {
    restrict: 'E',
    scope: {
      name: '='
    },
    replace: true,
    controller: 'MainController',
    controllerAs: 'main',
    template: '<uib-tab ng-repeat="tab in tabs" active="tab.active">' +
              '<uib-tab-heading>{{tab.url}} <i class="fa fa-times close-tab"' +
              'ng-click="main.closeTab($index)"></i></uib-tab-heading>' +
              '<iframe src="{{main.trustSrc(tab.url)}}"' +
              'style="width:100%; height:100%" nwdisable nwfaketop></iframe>' +
              '</uib-tab>'
  };
}
