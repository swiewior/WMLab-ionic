angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
  
  

  .state('menu', {
    url: '/menu',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('tensileTest', {
    url: '/list',
    templateUrl: 'templates/tensileTest.html',
    controller: 'tensileTestCtrl'
  })

  .state('menu.wizardStep1', {
    url: '/step1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/wizardStep1.html',
        controller: 'wizardStep1Ctrl'
      }
    }
  })

  .state('menu.wizardStep3', {
    url: '/step3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/wizardStep3.html',
        controller: 'wizardStep3Ctrl'
      }
    }
  })

  .state('menu.wizardStep4', {
    url: '/step4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/wizardStep4.html',
        controller: 'wizardStep4Ctrl'
      }
    }
  })

  .state('menu.wizardStep5', {
    url: '/step5',
    views: {
      'side-menu21': {
        templateUrl: 'templates/wizardStep5.html',
        controller: 'wizardStep5Ctrl'
      }
    }
  })

  .state('menu.wizardStep2', {
    url: '/step2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/wizardStep2.html',
        controller: 'wizardStep2Ctrl'
      }
    }
  })

  .state('menu.inputSummary', {
    url: '/input',
    views: {
      'side-menu21': {
        templateUrl: 'templates/inputSummary.html',
        controller: 'inputSummaryCtrl'
      }
    }
  })

  .state('menu.results', {
    url: '/result',
    views: {
      'side-menu21': {
        templateUrl: 'templates/results.html',
        controller: 'resultsCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/list')



});
