(function(){
  'use strict';

  angular.module('browser')
  .factory('windowFactory', windowFactory);

  windowFactory.$inject = ['gui'];

  function windowFactory(gui) {
    return gui.Window.get();
  }
})();
