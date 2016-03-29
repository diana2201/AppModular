angular.module("app").config(function($routeProvider, $locationProvider) {

  $locationProvider.html5Mode({enabled:true});

  $routeProvider.when('/login', {
    templateUrl: 'modules/common/pages/login.html',
    controller: 'LoginController'
  });

  $routeProvider.when('/home', {
    templateUrl: 'modules/common/pages/home.html',
    module:'CommonApp',
    controller: 'HomeController'
  });

  /*$routeProvider.when('/pqr', {
    templateUrl: '/modules/pqr/pages/pqr.html',
    module:'PqrApp',
    controller: 'PqrController'
  });

  $routeProvider.when('/ctc', {
    templateUrl: '/modules/ctc/pages/ctc.html',
    module:'CtcApp',
    controller: 'CtcController'
  });
*/
  $routeProvider.otherwise({ redirectTo: '/login' });

});
