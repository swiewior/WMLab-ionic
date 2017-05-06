angular.module('app.controllers', [])

.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('tensileTestCtrl', ['$scope', '$stateParams', 'StorageService', '$localStorage',
  '$sessionStorage',
// The following is the constructor function for this page's controller.
// See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, StorageService, $localStorage, $sessionStorage) {
  
  $scope.$storage = $localStorage;
  
  $scope.create = create;
  
  function create() {
    var counter = $localStorage.counter;
    $localStorage.counter += 1;
  
    var test = {
      id: counter,
      date: "2017-05-07",
      completed: "no",
      l0: 100,
      d0: 10.20,
      du: 5.50,
      lu: 125,
      pm: 3700,
      pel: 27600,
      peh: 31300,
      pu: 28000,
      iput: [{id: 1, p: 100, l1: 0, l2: 0}],
      s0: null,
      su: null,
      a10: null,
      z: null,
      rh: null,
      rel: null,
      reh: null,
      rm: null,
      ru: null,
      e: null,
      output: [{id: null, p: null, l1: null, l2: null}],
    };
    
    $localStorage.tests.push(test);
    
    $localStorage.test = $localStorage.tests[counter-1];
  }
  
}])

.controller('wizardStep1Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('wizardStep3Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('wizardStep4Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('wizardStep5Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('wizardStep2Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('inputSummaryCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('resultsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
