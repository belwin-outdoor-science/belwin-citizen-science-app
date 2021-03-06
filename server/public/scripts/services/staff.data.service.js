myApp.service('DataService', ['$http', function ($http) {
  console.log('DataService is loaded');
  var self = this;

  self.allClasses = false;
  
  // data for individual classes
  self.bur = { data: [], notes: [] };
  self.pin = { data: [], notes: [] };
  self.buckthorn = { data: [], notes: [] };
  self.milkweed = { data: [], notes: [] };
  self.dark = { data: [], notes: [] };
  self.eastern = { data: [], notes: [] };
  self.ground = { data: [], notes: [] };
  self.northern = { data: [], notes: [] };
  self.paper = { data: [], notes: [] };
  self.quaking = { data: [], notes: [] };
  self.ruby = { data: [], notes: [] };

  var placeholderData = {}
  var sortedArray = [];
  var found = false;

self.dataInit = function() {
  self.bur = { data: [], notes: [] };
  self.pin = { data: [], notes: [] };
  self.buckthorn = { data: [], notes: [] };
  self.milkweed = { data: [], notes: [] };
  self.dark = { data: [], notes: [] };
  self.eastern = { data: [], notes: [] };
  self.ground = { data: [], notes: [] };
  self.northern = { data: [], notes: [] };
  self.paper = { data: [], notes: [] };
  self.quaking = { data: [], notes: [] };
  self.ruby = { data: [], notes: [] };
}

  self.getBur = function (classNum) {
    $http.get('/dashboard/bur/' + classNum).then(function (response) {
      self.bur.data = self.sortData(response.data)
      var sortedArray = [];      
    }).then(function () {
      //new get call to pull notes
      $http.get('/dashboard/bur/notes/' + classNum).then(function (response) {
        self.bur.notes = response.data;
      })
    });
  } //end get bur


  self.getBuckthorn = function (classNum) {
    $http.get('/dashboard/buckthorn/' + classNum).then(function (response) {
      self.buckthorn.data = self.sortData(response.data)
      var sortedArray = [];
      
    }).then(function () {
      //new get call to pull notes
      $http.get('/dashboard/buckthorn/notes/' + classNum).then(function (response) {
        self.buckthorn.notes = response.data;
      })
    });
  }

  self.getMilkweed = function (classNum) {
    $http.get('/dashboard/milkweed/' + classNum).then(function (response) {
      self.milkweed.data = self.sortData(response.data)
      var sortedArray = [];
      
      // console.log('get route common_milkweed: ', self.milkweed);
    }).then(function () {
      //new get call to pull notes
      $http.get('/dashboard/milkweed/notes/' + classNum).then(function (response) {
        self.milkweed.notes = response.data;
      })
    });
  }

  self.getDark = function (classNum) {
    $http.get('/dashboard/dark/' + classNum).then(function (response) {
      self.dark.data = self.sortData(response.data)
      var sortedArray = [];
      
      // console.log('get route dark_eyed_junco: ', self.dark);
    }).then(function () {
      //new get call to pull notes
      $http.get('/dashboard/dark/notes/' + classNum).then(function (response) {
        self.dark.notes = response.data;
      })
    });
  }

  self.getEastern = function (classNum) {
    $http.get('/dashboard/eastern/' + classNum).then(function (response) {
      self.eastern.data = self.sortData(response.data)
      var sortedArray = [];
      
      // console.log('get route eastern_bluebird: ', self.eastern);
    }).then(function () {
      //new get call to pull notes
      $http.get('/dashboard/eastern/notes/' + classNum).then(function (response) {
        self.eastern.notes = response.data;
      })
    });
  }

  self.getGround = function (classNum) {
    $http.get('/dashboard/ground/' + classNum).then(function (response) {
      self.ground.data = self.sortData(response.data)
      var sortedArray = [];
      
      // console.log('get route ground_squirrel: ', self.ground);
    }).then(function () {
      //new get call to pull notes
      $http.get('/dashboard/ground/notes/' + classNum).then(function (response) {
        self.ground.notes = response.data;
      })
    });
  }

  self.getNorthern = function (classNum) {
    $http.get('/dashboard/northern/' + classNum).then(function (response) {
      self.northern.data = self.sortData(response.data)
      var sortedArray = [];
      
      // console.log('get route northern_red_oak: ', self.northern);
    }).then(function () {
      //new get call to pull notes
      $http.get('/dashboard/northern/notes/' + classNum).then(function (response) {
        console.log('response.data', response.data)
        self.northern.notes = response.data;
        console.log('get northern notes', self.northern.notes)
      })
    });
  }

  self.getPaper = function (classNum) {
    $http.get('/dashboard/paper/' + classNum).then(function (response) {
      self.paper.data = self.sortData(response.data)
      var sortedArray = [];
      
      // console.log('get route paper_birch: ', self.paper);
    }).then(function () {
      //new get call to pull notes
      $http.get('/dashboard/paper/notes/' + classNum).then(function (response) {
        self.paper.notes = response.data;
      })
    });
  }

  self.getQuaking = function (classNum) {
    $http.get('/dashboard/quaking/' + classNum).then(function (response) {
      self.quaking.data = self.sortData(response.data)
      var sortedArray = [];
      
      // console.log('get route quaking_aspen: ', self.quaking);
    }).then(function () {
      //new get call to pull notes
      $http.get('/dashboard/quaking/notes/' + classNum).then(function (response) {
        self.quaking.notes = response.data;
      })
    });
  }

  self.getRuby = function (classNum) {
    $http.get('/dashboard/ruby/' + classNum).then(function (response) {
      self.ruby.data = self.sortData(response.data)
      var sortedArray = [];
      
      // console.log('get route ruby_throated_hummingbird: ', self.ruby);
    }).then(function () {
      //new get call to pull notes
      $http.get('/dashboard/ruby/notes/' + classNum).then(function (response) {
        self.ruby.notes = response.data;
      })
    });;
  }

  self.getPin = function (classNum) {
    $http.get('/dashboard/pin/' + classNum).then(function (response) {
      self.pin.data = self.sortData(response.data)
      var sortedArray = [];      
    }).then(function () {
      //new get call to pull notes
      $http.get('/dashboard/pin/notes/' + classNum).then(function (response) {
        self.pin.notes = response.data;
      })
    });
  }

  self.selectTable = function (table, tableName) {
    self.selectTable.selectTable = table;
    self.selectTableName.selectTableName = tableName;
    console.log('select table:', self.selectTable)
  }

  self.sortData = function (array) {
    // console.log('in self.sortData, array is', array)
    var i = 0;
    var j = 0;
    var array = array;
    var sortedArray = [];
    for (i = 0; i < 3; i++) { //assigns data to each table column
      tableCol = i + 1; //col is 1 indexed
      for (j = 0; j < array.length; j++) { //loop through responses to find site to col match      
        if (array[j].site == tableCol && found == false) {
          sortedArray[i] = array[j];
          found = true;
        }
      }
      //if match then push, if no match then push dummy var
      if (found == false) {
        sortedArray.push(placeholderData)
      }
      found = false;
    };
    return sortedArray;
  }



}]);