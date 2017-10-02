myApp.service('DataService', ['$http', function ($http) {
  console.log('DataService is loaded');
  var self = this;
  // self.data = { info: {}   }
  self.getData = function () {
    $http.get('/dashboard/bur').then(function (response) {
      self.oak = response.data;
      console.log('get route bur_oak: ', self.oak);
    });
  }
  self.getBuckthorn = function () {
    $http.get('/dashboard/buckthorn').then(function (response) {
      self.buckthorn = response.data;
      console.log('get route common_buckthorn: ', self.buckthorn);
    });
  }

  self.getData();

  // console.log('bur oak:', self.oak);
  
}]);