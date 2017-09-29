myApp.service('StudentService', ['$http', function ($http) {
    console.log('StudentService loaded');
    var self = this;
    // bur_oak
    // common_buckthorn
    // common_milkweed
    // eastern_bluebird
    // ground_squirrel
    // dark_eyed_junco
    // paper_birch
    // quaking_aspen
    // northern_red_oak
    // ruby_throated_hummingbird

    //PROBLEM: how to handle errors with 10 simultaneous requests.
    //IDEAS:
    //1. Store error messages and table name in array of objects [{tableName: bur_oak, err: response}]
    //2. when array length = # tables (10), trigger errorHandling function to give user a success/error message
    // with which tables had errors.
    //3. Somehow allow user to resubmit data only for tables that had problems.
    //Complication: what if it times out?  Will the errorHandling function run?
    self.addBurOak = function (studentData) {
        $http.post('/student_data/bur_oak', card).then(function (response) {
            if (response.data) {
                console.log('student service -- addBurOak -- success: ', response.data);
                
            } else {
                console.log('student service addBurOak error', response);
                self.message = "Error adding bur_oak!!";
            }
        });
    }

    self.addCommonBuckthorn = function (studentData) {
        $http.post('/student_data/common_buckthorn', card).then(function (response) {
            if (response.data) {
                console.log('student service -- addCommonBuckthorn -- success: ', response.data);
                
            } else {
                console.log('student service addCommonBuckthorn error', response);
                self.message = "Error adding common_buckthorn!!";
            }
        });
    }

    self.addCommonMilkweed = function (studentData) {
        $http.post('/student_data/common_milkweed', card).then(function (response) {
            if (response.data) {
                console.log('student service -- addCommonMilkweed -- success: ', response.data);
                
            } else {
                console.log('student service addCommonMilkweed error', response);
                self.message = "Error adding common_milkweed!!";
            }
        });
    }

    self.addEasternBluebird = function (studentData) {
        $http.post('/student_data/eastern_bluebird', card).then(function (response) {
            if (response.data) {
                console.log('student service -- addEasternBluebird -- success: ', response.data);
                
            } else {
                console.log('student service addEasternBluebird error', response);
                self.message = "Error adding eastern_bluebird!!";
            }
        });
    }

    self.addGroundSquirrel = function (studentData) {
        $http.post('/student_data/ground_squirrel', card).then(function (response) {
            if (response.data) {
                console.log('student service -- addGroundSquirrel -- success: ', response.data);
                
            } else {
                console.log('student service addGroundSquirrel error', response);
                self.message = "Error adding ground_squirrel!!";
            }
        });
    }

    self.addDarkEyedJunco = function (studentData) {
        $http.post('/student_data/dark_eyed_junco', card).then(function (response) {
            if (response.data) {
                console.log('student service -- addDarkEyedJunco -- success: ', response.data);
                
            } else {
                console.log('student service addDarkEyedJunco error', response);
                self.message = "Error adding dark_eyed_junco!!";
            }
        });
    }

    self.addPaperBirch = function (studentData) {
        $http.post('/student_data/paper_birch', card).then(function (response) {
            if (response.data) {
                console.log('student service -- addPaperBirch -- success: ', response.data);
                
            } else {
                console.log('student service addPaperBirch error', response);
                self.message = "Error adding paper_birch!!";
            }
        });
    }

    self.addQuakingAspen = function (studentData) {
        $http.post('/student_data/quaking_aspen', card).then(function (response) {
            if (response.data) {
                console.log('student service -- addQuakingAspen -- success: ', response.data);
                
            } else {
                console.log('student service addQuakingAspen error', response);
                self.message = "Error adding quaking_aspen!!";
            }
        });
    }



    self.addNorthernRedOak = function (studentData) {
        $http.post('/student_data/northern_red_oak', card).then(function (response) {
            if (response.data) {
                console.log('student service -- addNorthernRedOak -- success: ', response.data);
                
            } else {
                console.log('student service addNorthernRedOak error', response);
                self.message = "Error adding northern_red_oak!!";
            }
        });
    }

    self.addrubyThroatedHummingbird = function (studentData) {
        $http.post('/student_data/ruby_throated_hummingbird', card).then(function (response) {
            if (response.data) {
                console.log('student service -- addrubyThroatedHummingbird -- success: ', response.data);
                
            } else {
                console.log('student service addrubyThroatedHummingbird error', response);
                self.message = "Error adding ruby_throated_hummingbird!!";
            }
        });
    }
        // bur_oak
    // common_buckthorn
    // common_milkweed
    // eastern_bluebird
    // ground_squirrel
    // dark_eyed_junco
    // paper_birch
    // quaking_aspen
    // northern_red_oak
    // ruby_throated_hummingbird
}]);