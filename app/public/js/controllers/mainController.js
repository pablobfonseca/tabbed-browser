(function() {
  'use strict';

  angular.module('browser')
  .controller('MainController', MainController);

  MainController.$inject = ['$sce', 'prompt', 'windowFactory', '$scope']

  function MainController($sce, prompt, windowFactory, $scope) {
    var self = this;

    $scope.tabs = [
      {
        url: "http://sitepoint.com.br"
      }
    ];

    return {
      trustSrc: trustSrc,
      newTab: newTab,
      closeTab: closeTab,
      minimize: minimize,
      toggleKioskMode: toggleKioskMode,
      close: close
    }

    function trustSrc (src) {
      return $sce.trustAsResourceUrl(src);
    }

    function newTab () {
      prompt.urlPrompt("Please enter a url", "")
      .then(function (url) {
        var tab = {url: url, active:true}
        $scope.tabs.push(tab);
      }, function () {
        alert("Error opening site!");
      });
    };

    function closeTab () {
      $scope.tabs.splice(index, 1);
    };

    function minimize () {
      windowFactory.minimize();
    };

    function toggleKioskMode () {
      windowFactory.toggleKioskMode();
    };

    function close () {
      windowFactory.close();
    };
  }

})();
