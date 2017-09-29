myApp.service('DataService', ['$http', function ($http) {
    console.log('DataService is loaded');
    var self = this;
    // self.data = { info: {}   }
    
    self.getData = function () {
        $http.get('/dashboard/bur').then(function (response) {
          self.data = response.data;
          console.log('get route successful: ', self.data);
        });
      }
}]);