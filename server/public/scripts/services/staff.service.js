myApp.service('StaffService', ['$http', function ($http) {
    console.log('StaffService is loaded');
  
    var self = this;
    self.userInfo = {};
  
    self.getUserInfo = function () {
      $http.get('/dashboard').then(function (response) {
        self.userInfo = response.data;
        console.log('get route successful: ', self.userInfo);
      });
    }
  
  
  }]);
  