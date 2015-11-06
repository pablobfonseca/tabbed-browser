(function(){
  'use strict';

  angular.module('browser')
  .factory('gui', gui);

  function gui() {
    return require('nw.gui');
  }
})();
