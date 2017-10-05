var myApp = angular.module('myApp', ['ngRoute', 'ngMaterial']);

/// Routes ///
myApp.config(function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
  console.log('myApp -- config')
  $routeProvider
    .when('/register', {
      templateUrl: '/views/templates/register.html',
      controller: 'LoginController as lc',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/login', {
      templateUrl: '/views/templates/login.html',
      controller: 'LoginController as lc'
    })
    .when('/dashboard', {
      templateUrl: '/views/templates/dashboard.html',
      controller: 'StaffController as vm',
      resolve: {
        getuser: function (UserService) {
          return UserService.getuser();
        }
      }
    })
    .when('/data/:classNum', {
      templateUrl: '/views/templates/data.html',
      controller: 'DataController as dc',
      resolve: {
        getuser: function (UserService) {
          return UserService.getuser();
        }
      }
    })
    .when('/data/', {
      templateUrl: '/views/partials/allData.html',
      controller: 'DataController as dc',
      resolve: {
        getuser: function (UserService) {
          return UserService.getuser();
        }
      }
    })
    .when('/user', {
      templateUrl: '/views/templates/user.html',
      controller: 'UserController as uc',
      resolve: {
        getuser: function (UserService) {
          return UserService.getuser();
        }
      }
    })
    .when('/student', {
      templateUrl: '/views/templates/student-view.html',
      controller: 'StudentController as sc'
    })
    .when('/info', {
      templateUrl: '/views/templates/info.html',
      controller: 'StudentController as sc',
      resolve: {
        getuser: function (UserService) {
          return UserService.getuser();
        }
      }
    })
    .otherwise({
      redirectTo: '/student'
    });
});

onOffDetector = function() {
  console.log('you went offline')
}

doNotReload = function() {
  return "Dude, are you sure you want to leave? Think of the kittens!";
}

window.addEventListener("beforeunload", doNotReload);