myApp.service('DataService', ['$http', function ($http) {
  console.log('DataService is loaded');
  var self = this;
  // self.data = { info: {}   }

  
  self.bur = { info: {}};
  self.getBur = function () {
    $http.get('/dashboard/bur').then(function (response) {
      self.bur.info = response.data;
      // console.log('get route bur_oak: ', self.bur);
    });
  }
  self.getBuckthorn = function () {
    $http.get('/dashboard/buckthorn').then(function (response) {
      self.buckthorn = response.data;
      // console.log('get route common_buckthorn: ', self.buckthorn);
    });
  }
  self.getMilkweed = function () {
    $http.get('/dashboard/milkweed').then(function (response) {
      self.milkweed = response.data;
      // console.log('get route common_milkweed: ', self.milkweed);
    });
  }
  self.getDark = function () {
    $http.get('/dashboard/dark').then(function (response) {
      self.dark = response.data;
      // console.log('get route dark_eyed_junco: ', self.dark);
    });
  }
  self.getEastern = function () {
    $http.get('/dashboard/eastern').then(function (response) {
      self.eastern = response.data;
      // console.log('get route eastern_bluebird: ', self.eastern);
    });
  }
  self.getGround = function () {
    $http.get('/dashboard/ground').then(function (response) {
      self.ground = response.data;
      // console.log('get route ground_squirrel: ', self.ground);
    });
  }
  self.getNorthern = function () {
    $http.get('/dashboard/northern').then(function (response) {
      self.northern = response.data;
      // console.log('get route northern_red_oak: ', self.northern);
    });
  }
  self.getPaper = function () {
    $http.get('/dashboard/paper').then(function (response) {
      self.paper = response.data;
      // console.log('get route paper_birch: ', self.paper);
    });
  }
  self.getQuaking = function () {
    $http.get('/dashboard/quaking').then(function (response) {
      self.quaking = response.data;
      // console.log('get route quaking_aspen: ', self.quaking);
    });
  }
  self.getRuby = function () {
    $http.get('/dashboard/ruby').then(function (response) {
      self.ruby = response.data;
      // console.log('get route ruby_throated_hummingbird: ', self.ruby);
    });
  }

  self.getBur();
  self.getBuckthorn();
  self.getMilkweed();
  self.getDark();
  self.getEastern();
  self.getGround();
  self.getNorthern();
  self.getPaper();
  self.getQuaking();
  self.getRuby();
  
  // console.log('bur oak:', self.bur.info);

}]);