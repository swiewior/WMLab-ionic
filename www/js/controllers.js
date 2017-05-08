angular.module('app.controllers', [])

.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('tensileTestCtrl', ['$scope', '$stateParams', '$localStorage', '$location',
function ($scope, $stateParams, $localStorage, $location) {
  $scope.$storage = $localStorage;
  
  $localStorage.$default({
    counter: 0,
    tests: []
  });
  
  $scope.edit = function ($index) {
    $localStorage.current = $index;
  };
  
  $scope.remove = function ($index) {
    $localStorage.tests.splice(
      $index, 1);
    $localStorage.counter--;
  };
  
  $scope.result = function ($index) {
    $localStorage.current = $index;
    $location.path('/menu/result');
  };
  
  $scope.create = function () {
    $localStorage.counter = $localStorage.tests.length + 1;
    var counter = $localStorage.counter;
    
    var date = new Date();
    
    var test = {
      id: counter,
      date: date,
      completed: "no",
      input: [],
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
    var temp = angular.copy(data);
    $localStorage.tests[$localStorage.current].input.push(temp)
  };
  
  $scope.remove = function (data) {
    $localStorage.tests[$localStorage.current].input.splice(
      $localStorage.tests[$localStorage.current].input.indexOf(data), 1);
  }
}])

.controller('wizardStep3Ctrl', ['$scope', '$stateParams', '$localStorage',
function ($scope, $stateParams, $localStorage) {
  $scope.$storage = $localStorage;

}])

.controller('wizardStep4Ctrl', ['$scope', '$stateParams', '$localStorage',
function ($scope, $stateParams, $localStorage) {
  $scope.$storage = $localStorage;
}])

.controller('wizardStep5Ctrl', ['$scope', '$stateParams', '$localStorage',
function ($scope, $stateParams, $localStorage) {
}])


.controller('inputSummaryCtrl', ['$scope', '$stateParams', '$localStorage', '$location',
function ($scope, $stateParams, $localStorage, $location) {
  $scope.$storage = $localStorage;
  
  $scope.add = function (data) {
    var temp = angular.copy(data);
    $localStorage.tests[$localStorage.current].input.push(temp)
  };
  
  $scope.remove = function (index) {
    $localStorage.tests[$localStorage.current].input.splice(
      index, 1);
  };
  
  $scope.validate = function () {
    var arr = ['l0', 'd0', 'du', 'lu', 'pm', 'pel', 'peh', 'pu', 'input'];
    var test = $localStorage.tests[$localStorage.current];
    for (i in arr) {
      if(test.hasOwnProperty(arr[i])){
        if (test[arr[i]] == null) {
          test.completed = 'no';
          alert("Fill all inputs");
          return
        }
      }
    }
    test.completed = 'yes';
    $location.path('/menu/result');
  }
}])

.controller('resultsCtrl', ['$scope', '$stateParams', '$localStorage', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $localStorage) {
  $scope.$storage = $localStorage;
  sortInput();
  calculate();
  
  $(document).ready(function() {
    document.getElementById("flot-line-chart").style.height = "300px";
    var offset = 0;
    plot();
  });
  
  function sortInput() {
    var input = $localStorage.tests[$localStorage.current].input;
    input.sort( function(a, b) {
      return a.p - b.p;
    });
  }
  
  function calculate() {
    $d0 = $localStorage.tests[$localStorage.current].d0;
    s0 = Math.PI * Math.pow($d0, 2) / 4;
  
    $du = $localStorage.tests[$localStorage.current].du;
    su = Math.PI * Math.pow($du, 2) / 4;
  
    $l0 = $localStorage.tests[$localStorage.current].l0;
    $lu = $localStorage.tests[$localStorage.current].lu;
    a10 = ($lu - $l0) / $l0 * 100;
  
    z = (s0 - su) / s0 * 100;
  
    $pel = $localStorage.tests[$localStorage.current].pel;
    rel = $pel / s0;
  
    $peh = $localStorage.tests[$localStorage.current].peh;
    reh = $peh / s0;
  
    $pm = $localStorage.tests[$localStorage.current].pm;
    rm = $pm * 10 / s0;
  
    $pu = $localStorage.tests[$localStorage.current].pu;
    ru = $pu / su;
  
    $localStorage.tests[$localStorage.current].s0 = s0.toFixed(2);
    $localStorage.tests[$localStorage.current].su = su.toFixed(2);
    $localStorage.tests[$localStorage.current].a10 = a10.toFixed(2);
    $localStorage.tests[$localStorage.current].z = z.toFixed(2);
    $localStorage.tests[$localStorage.current].rel = rel.toFixed(2);
    $localStorage.tests[$localStorage.current].reh = reh.toFixed(2);
    $localStorage.tests[$localStorage.current].rm = rm.toFixed(2);
    $localStorage.tests[$localStorage.current].ru = ru.toFixed(2);
  
    $localStorage.tests[$localStorage.current].output = [];
    input_tab = $localStorage.tests[$localStorage.current].input;
    var $p = [], $dl1 = [], $dl2 = [], $dl = [], $sdl = [];
    for (i = 0; i < input_tab.length; i++) {
    
      $p[i] = input_tab[i].p;
      $dl1[i] = input_tab[i].l1;
      $dl2[i] = input_tab[i].l2;
    
      if (i !== 0) {
        $dl1[i] -= input_tab[i - 1].l1;
        $dl2[i] -= input_tab[i - 1].l2;
      }
    
      $dl[i] = ($dl1[i] + $dl2[i]) / (2 * 100);
      $sdl[i] = $dl[i];
    
      if (i !== 0)
        $sdl[i] += $sdl[i - 1];
    
      row = {
        p: $p[i],
        dl1: $dl1[i],
        dl2: $dl2[i],
        dl_sr: $dl[i].toFixed(3),
        sdl: $sdl[i].toFixed(3)
      };
    
      $localStorage.tests[$localStorage.current].output.push(row)
    }
  }
  
  function plot() {
    var p = [];
    var output = $localStorage.tests[$localStorage.current].output;
    for (var row in output) {
      if (output.hasOwnProperty(row)) {
        p.push([
          output[row].sdl,
          output[row].p
        ]);
      }
      
    }
    
    var options = {
      series: {
        lines: {
          show: true
        },
        points: {
          show: true
        }
      },
      grid: {
        hoverable: true //IMPORTANT! this is needed for tooltip to work
      },
      tooltip: true,
      tooltipOpts: {
        content: "P(%x.3) =  %y.2",
        shifts: {
          x: -60,
          y: 25
        }
      },
      axisLabels: {
        show: true
      },
      xaxes: [{
        axisLabel: 'l [mm]',
      }],
      yaxes: [{
        position: 'left',
        axisLabel: 'P [kN]',
      }]
    };
  
    var plotObj = $.plot($("#flot-line-chart"), [ {
        data: p,
        label: "P(l)"
      }],
      options);
  }
}])
