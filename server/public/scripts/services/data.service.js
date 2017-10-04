myApp.service('DataService', ['$http', function ($http) {
  console.log('DataService is loaded');
  var self = this;
  // self.data = { info: {}   }

  self.bur = {data: []};
  // self.getBuckthorn();
  // self.getMilkweed();
  // self.getDark();
  // self.getEastern();
  // self.getGround();
  // self.getNorthern();
  // self.getPaper();
  // self.getQuaking();
  // self.getRuby();
 

  self.getBur = function (classNum) {
    $http.get('/dashboard/bur/' + classNum).then(function (response) {
      self.bur.data = response.data;
      console.log('get route bur_oak: ', self.bur);
    });
  }
  self.getBuckthorn = function (classNum) {
    $http.get('/dashboard/buckthorn/' + classNum).then(function (response) {
      self.buckthorn = response.data;
      // console.log('get route common_buckthorn: ', self.buckthorn);
    });
  }
  self.getMilkweed = function (classNum) {
    $http.get('/dashboard/milkweed/' + classNum).then(function (response) {
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
  self.getNorthern = function (classNum) {
    $http.get('/dashboard/northern/' + classNum).then(function (response) {
      self.northern = response.data;
      // console.log('get route northern_red_oak: ', self.northern);
    });
  }
  self.getPaper = function (classNum) {
    $http.get('/dashboard/paper/' + classNum).then(function (response) {
      self.paper = response.data;
      // console.log('get route paper_birch: ', self.paper);
    });
  }
  self.getQuaking = function (classNum) {
    $http.get('/dashboard/quaking/' + classNum).then(function (response) {
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
  self.getAllData = function () {
    $http.get('/dashboard/allData').then(function (response) {
      self.all = response.data;
      console.log('get route allData: ', self.all);
    });
  }
  self.getAllData();
  // self.getBur();
  // self.getBuckthorn();
  // self.getMilkweed();
  // self.getDark();
  // self.getEastern();
  // self.getGround();
  // self.getNorthern();
  // self.getPaper();
  // self.getQuaking();
  // self.getRuby();
  
  // console.log('bur oak:', self.bur.info);

}]);