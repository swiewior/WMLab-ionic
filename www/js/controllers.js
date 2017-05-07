angular.module('app.controllers', [])

.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('tensileTestCtrl', ['$scope', '$stateParams', '$localStorage',
  '$sessionStorage',
function ($scope, $stateParams, $localStorage) {
  
  $localStorage = $localStorage.$default({
    counter: 0,
    tests: [],
  });
  
  $scope.$storage = $localStorage;
  
  $scope.create = create;
  
  function create() {
    $localStorage.counter += 1;
    var counter = $localStorage.counter;
    
  
    var test = {
      id: counter,
      date: "2017-05-07",
      completed: "no",
      l0: null,
      d0: null,
      du: null,
      lu: null,
      pm: null,
      pel: null,
      peh: null,
      pu: null,
      input: [],
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
      output: []
    };
    
    $localStorage.tests.push(test);
    $localStorage.current = $localStorage.tests.length - 1;
  }
}])

.controller('wizardStep1Ctrl', ['$scope', '$stateParams', '$localStorage',
function ($scope, $stateParams, $localStorage) {
  $scope.$storage = $localStorage;
}])

.controller('wizardStep2Ctrl', ['$scope', '$stateParams','$localStorage',
function ($scope, $stateParams, $localStorage) {
  $scope.$storage = $localStorage;
  
  $scope.add = function (data) {
    $localStorage.tests[$localStorage.current].input.push(data)
  };
  
  $scope.remove = function (data) {
    $localStorage.tests[$localStorage.current].input.splice(
      $localStorage.tests[$localStorage.current].input.indexOf(data), 1);
  }
}])

.controller('wizardStep3Ctrl', ['$scope', '$stateParams', '$localStorage', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $localStorage) {
  $scope.$storage = $localStorage;

}])

.controller('wizardStep4Ctrl', ['$scope', '$stateParams', '$localStorage', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $localStorage) {
  $scope.$storage = $localStorage;

}])

.controller('wizardStep5Ctrl', ['$scope', '$stateParams', '$localStorage', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $localStorage) {


}])


.controller('inputSummaryCtrl', ['$scope', '$stateParams', '$localStorage', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $localStorage) {
  $scope.$storage = $localStorage;

}])

.controller('resultsCtrl', ['$scope', '$stateParams', '$localStorage', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $localStorage) {
  $scope.$storage = $localStorage;
  //var $d0, $du, $l0, $lu, $s0, $pel, $peh, $pm, $pu, $su, $a10, $z, $rel, $reh, $rm, $ru, $dl1, $dl2, $dl, $sdl, $p;
  
  function calculate() {
    $d0 = $localStorage.tests[$localStorage.current].d0;
    $s0 = pi() * pow($d0, 2) / 4;
  
    $du = $localStorage.tests[$localStorage.current].du;
    $su = pi() * pow($du, 2) / 4;
  
    $l0 = $localStorage.tests[$localStorage.current].l0;
    $lu = $localStorage.tests[$localStorage.current].lu;
    $a10 = ($lu - $l0) / $l0 * 100;
  
    $z = ($s0 - $su) / $s0 * 100;
  
    $pel = $localStorage.tests[$localStorage.current].pel;
    $rel = $pel / $s0;
  
    $peh = $localStorage.tests[$localStorage.current].peh;
    $reh = $peh / $s0;
  
    $pm = $localStorage.tests[$localStorage.current].pm;
    $rm = $pm * 10 / $s0;
  
    $pu = $localStorage.tests[$localStorage.current].pu;
    $ru = $pu / $su;
  
    $localStorage.tests[$localStorage.current].s0 = $s0;
    $localStorage.tests[$localStorage.current].su = $su;
    $localStorage.tests[$localStorage.current].a10 = $a10;
    $localStorage.tests[$localStorage.current].z = $z;
    $localStorage.tests[$localStorage.current].rel = $rel;
    $localStorage.tests[$localStorage.current].reh = $reh;
    $localStorage.tests[$localStorage.current].rm = $rm;
    $localStorage.tests[$localStorage.current].ru = $ru;
  
    $input_tab = $localStorage.tests[$localStorage.current].input;
    for($i = 0; $i < $input_tab.length(); $i++) {
      $p[$i] = $input_tab[$i].p;
      $dl1[$i] = $input_tab[$i].l1;
      $dl2[$i] = $input_tab[$i].l2;
    
      if($i !== 0) {
        $dl1[$i] -= $input_tab[$i - 1].l1;
        $dl2[$i] -= $input_tab[$i - 1].l2;
      }
    
      $dl[$i] = ($dl1[$i] + $dl2[$i]) / (2 * 100);
      $sdl[$i] = $dl[$i];
    
      if($i !== 0)
        $sdl[$i] += $sdl[$i-1];
  
      $row = {
        p: $p[$i],
        dl1: $dl1[$i],
        dl2: $dl2[$i],
        dl_sr: $dl[$i],
        s_dl: $sdl[$i]
      };
      
      $localStorage.tests[$localStorage.current].result.push($row)
    }
  }


}])
