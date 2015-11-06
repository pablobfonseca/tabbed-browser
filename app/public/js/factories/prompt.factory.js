(function(){
  'use strict';

  angular.module('browser')
  .factory('prompt', prompt);

  prompt.$inject = ['$window', '$q'];

  function prompt($window, $q) {
    var self = this;

    return {
      urlPrompt: urlPrompt
    }

    function urlPrompt(message, defaultValue) {
      self.defer = $q.defer();
      self.response = $window.prompt(message, defaultValue);

      if (self.response === null) {
        self.defer.reject();
      } else {
        self.defer.resolve(self.response);
      }

      return(self.defer.promise);
    };
  }

})();
