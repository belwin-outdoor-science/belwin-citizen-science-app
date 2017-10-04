myApp.service('DataService', ['$http', function ($http) {
  console.log('DataService is loaded');
  var self = this;
  // self.data = { info: {}   }

  self.bur = {data: [], notes: []};
  self.buckthorn = {data: [], notes: []};
  self.milkweed = {data: [], notes: []};
  self.dark = {data: [], notes: []};
  self.eastern = {data: [], notes: []};
  self.ground = {data: [], notes: []};
  self.northern = {data: [], notes: []};
  self.paper= {data: [], notes: []};
  self.quaking = {data: [], notes: []};
  self.ruby = {data: [], notes: []};

 

  self.getBur = function (classNum) {
    $http.get('/dashboard/bur/' + classNum).then(function (response) {
      self.bur.data = response.data;
     // console.log('get route bur_oak: ', self.bur);
    }).then(function(){
      //new get call to pull notes
      $http.get('/dashboard/bur/notes/' + classNum).then(function (response) {
        self.bur.notes = response.data;
       // console.log('get route bur_oak: ', self.bur);
      })
    });
  }
  self.getBuckthorn = function (classNum) {
    $http.get('/dashboard/buckthorn/' + classNum).then(function (response) {
      self.buckthorn.data = response.data;
     // console.log('get route common_buckthorn: ', self.buckthorn);
    });
  }
  self.getMilkweed = function (classNum) {
    $http.get('/dashboard/milkweed/' + classNum).then(function (response) {
      self.milkweed.data = response.data;
      // console.log('get route common_milkweed: ', self.milkweed);
    });
  }
  self.getDark = function (classNum) {
    $http.get('/dashboard/dark/' + classNum).then(function (response) {
      self.dark.data = response.data;
      // console.log('get route dark_eyed_junco: ', self.dark);
    });
  }
  self.getEastern = function (classNum) {
    $http.get('/dashboard/eastern/' + classNum).then(function (response) {
      self.eastern.data = response.data;
      // console.log('get route eastern_bluebird: ', self.eastern);
    });
  }
  self.getGround = function (classNum) {
    $http.get('/dashboard/ground/' + classNum).then(function (response) {
      self.ground.data = response.data;
      // console.log('get route ground_squirrel: ', self.ground);
    });
  }
  self.getNorthern = function (classNum) {
    $http.get('/dashboard/northern/' + classNum).then(function (response) {
      self.northern.data = response.data;
      // console.log('get route northern_red_oak: ', self.northern);
    });
  }
  self.getPaper = function (classNum) {
    $http.get('/dashboard/paper/' + classNum).then(function (response) {
      self.paper.data = response.data;
      // console.log('get route paper_birch: ', self.paper);
    });
  }
  self.getQuaking = function (classNum) {
    $http.get('/dashboard/quaking/' + classNum).then(function (response) {
      self.quaking.data = response.data;
      // console.log('get route quaking_aspen: ', self.quaking);
    });
  }
  self.getRuby = function (classNum) {
    $http.get('/dashboard/ruby/' + classNum).then(function (response) {
      self.ruby.data = response.data;
      // console.log('get route ruby_throated_hummingbird: ', self.ruby);
    });
  }


}]);