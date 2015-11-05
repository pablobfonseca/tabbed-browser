(function() {
  'use strict';

  angular.module('browser', ['ui.bootstrap', 'ngSanitize']);

  // Init module
  angular.element(document.getElementsByTagName('html')[0]);
  // Add module in html
  angular.element().ready(function () {
    // Bootstrap the app manually
    angular.bootstrap(document, ['browser']);
  });
})();
