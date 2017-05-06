angular.module('ngStorage', [])

.factory ('StorageService', function ($localStorage) {
  $localStorage = $localStorage.$default({
    data: []
  });
  
  var _getAll = function () {
    return $localStorage.data;
  };
  var _add = function (thing) {
    $localStorage.data.push(thing);
  };
  var _remove = function (thing) {
    $localStorage.data.splice($localStorage.data.indexOf(thing), 1);
  };
  return {
    getAll: _getAll,
    add: _add,
    remove: _remove
  };
});
