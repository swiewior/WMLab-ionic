angular.module('app.controllers', [])

.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('tensileTestCtrl', ['$scope', '$stateParams', '$cordovaSQLite',
// The following is the constructor function for this page's controller.
// See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $cordovaSQLite) {
  // $scope.$on("$ionicView.loaded", function() {
  //   alert("hello");
  // });
  
    $scope.prepareDatabase = prepareDatabase;
  
    function prepareDatabase() {
        var db = $cordovaSQLite.openDB({ name: "my.db" });
        
        db.transaction(function(tx) {
          tx.executeSql('CREATE TABLE IF NOT EXISTS test (id PRIMARY KEY, input_id references input(id), output_id references output(id), date, completed)');
          tx.executeSql('CREATE TABLE IF NOT EXISTS input (id primary key, tab_id references input_tab(id), l0, d0, du, lu, pm, pel, peh, pu)');
          tx.executeSql('CREATE TABLE IF NOT EXISTS input_tab (id primary key, P, l1, l2)');
          tx.executeSql('CREATE TABLE IF NOT EXISTS output (id primary key, tab_id references output_tab(id), so, su, a10, z, rh, rel, reh, rm, ru, e)');
          tx.executeSql('CREATE TABLE IF NOT EXISTS output_tab (id primary key, dl1, dl2, dl_sr, s_dl, p)');
          
        }, function(error) {
          console.log('Transaction ERROR: ' + error.message);
        }, function() {
          console.log('Populated database OK');
        });
    }
  
    /*    var db = $cordovaSQLite.openDB({ name: "my.db" });
  
    $scope.add = function() {
      var query = "INSERT INTO test_table (data, data_num) VALUES (?,?)";
      $cordovaSQLite.execute(db, query, ["test", 100]).then(function(res) {
        console.log("insertId: " + res.insertId);
      }, function (err) {
        console.error(err);
      });
    };
  
  $scope.ctrl = this;
  
  $scope.ctrl.add = add;
  $scope.ctrl.data = [
    {
      name: "AiA",
      code: "AI101",
      limit: 25000,
      account: "Life Insurance"
    },
    {
      name: "Cargills",
      code: "CF001",
      limit: 30000,
      account: "Food City"
    }
  ];
  
  ////////
  function add(index) {
    window.alert("Added: " + index);
  }*/
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
