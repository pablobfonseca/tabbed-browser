(function() {
  'use strict';

  angular.module('browser')
  .controller('MainController', MainController);

  function MainController(){
    var self = this;

    self.people = [];
    self.person = {};
    self.add = function() {
      self.people.push(self.person);
      self.person = {};
    };
  }

})();
