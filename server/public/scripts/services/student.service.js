myApp.service('StudentService', ['$http', function ($http) {
    console.log('StudentService loaded');
    var self = this;

    //initializing promise variables because they need to be global
    var burOakPromise, commonBuckthornPromise, commonMilkweedPromise, easternBluebirdPromise,
        groundSquirrelPromise, darkEyedJuncoPromise, paperBirchPromise, quakingAspenPromise,
        northernRedOakPromise, rubyThroatedHummingbirdPromise;

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
    //Luke's reccomendation: 
    //1. save a promise from each $http request in a variable.
    //http://www.dwmkerr.com/promises-in-angularjs-the-definitive-guide/
    //2. Promise.all will handle all errors.  If there is an error, Promise.all
    //will return { <state>: "rejected", <reason>: something } for the reason that the
    //first error ocurred.
    //3. What do we do if some requests fail and others don't? 
    //Values for the student data will be cleared out in the success "if" of the request,
    //so if there is an error, students can just hit the submit button again and only the
    //unsuccessful requests will be resent.

    // practice call
    var burOakData = {
        class: 'class 1',
        species_number: '1',
        breaking_leaf_buds: 'Yes',
        leaves: 'Yes',
        increasing_leaf_size: 'Yes',
        colored_leaves: 'Yes',
        falling_leaves: 'Yes',
        flowers_or_flower_buds: 'Yes',
        open_flowers: 'Yes',
        pollen_release: 'Yes',
        fruits: 'Yes',
        ripe_fruits: 'Yes',
        recent_fruit_or_seed_drop: 'Yes',
        notes: 'I\'m a bur oak I\'m a bur oak I\'m a bur oak I\'m a bur oak'
    }

    var allBurOaksData = [
        {
            class: 'class 1',
            species_number: '1',
            breaking_leaf_buds: 'Yes',
            leaves: 'Yes',
            increasing_leaf_size: 'Yes',
            colored_leaves: 'Yes',
            falling_leaves: 'Yes',
            flowers_or_flower_buds: 'Yes',
            open_flowers: 'Yes',
            pollen_release: 'Yes',
            fruits: 'Yes',
            ripe_fruits: 'Yes',
            recent_fruit_or_seed_drop: 'Yes',
            notes: 'I\'m a bur oak I\'m a bur oak I\'m a bur oak I\'m a bur oak'
        },
        {
            class: 'class 1',
            species_number: '2',
            breaking_leaf_buds: 'Yes',
            leaves: 'Yes',
            increasing_leaf_size: 'Yes',
            colored_leaves: 'Yes',
            falling_leaves: 'Yes',
            flowers_or_flower_buds: 'Yes',
            open_flowers: 'Yes',
            pollen_release: 'Yes',
            fruits: 'Yes',
            ripe_fruits: 'Yes',
            recent_fruit_or_seed_drop: 'Yes',
            notes: 'I\'m a bur oak I\'m a bur oak I\'m a bur oak I\'m a bur oak'
        },
        {
            class: 'class 1',
            species_number: '3',
            breaking_leaf_buds: 'Yes',
            leaves: 'Yes',
            increasing_leaf_size: 'Yes',
            colored_leaves: 'Yes',
            falling_leaves: 'Yes',
            flowers_or_flower_buds: 'Yes',
            open_flowers: 'Yes',
            pollen_release: 'Yes',
            fruits: 'Yes',
            ripe_fruits: 'Yes',
            recent_fruit_or_seed_drop: 'Yes',
            notes: 'I\'m a bur oak I\'m a bur oak I\'m a bur oak I\'m a bur oak'
        }
    ];
 

    self.postAllData = function (dataObject) {
        addBurOak(dataObject);
        //call other add functions
    }

    self.addBurOak = function (studentData) {
        console.log('addBurOak called');

        burOakPromise = $http.post('/student_data/bur_oak', studentData).then(function (response) {
            if (response.data) {
                console.log('student service -- addBurOak -- success: ', response.data);
                //clear out student data
            }
        }, function (err) {
            console.log('student service addBurOak error', err);
        });
        console.log('burOakPromise');
        console.log(burOakPromise);
    }
    self.addBurOak(allBurOaksData);
    self.addCommonBuckthorn = function (studentData) {
        commonBuckthornPromise = $http.post('/student_data/common_buckthorn', studentData).then(function (response) {
            if (response.data) {
                console.log('student service -- addCommonBuckthorn -- success: ', response.data);
            }
        }, function (err) {
            console.log('student service addCommonBuckthorn error', err);
        });
    }

    self.addCommonMilkweed = function (studentData) {
        commonMilkweedPromise = $http.post('/student_data/common_milkweed', studentData).then(function (response) {
            if (response.data) {
                console.log('student service -- addCommonMilkweed -- success: ', response.data);

            }
        }, function (err) {
            console.log('student service addCommonMilkweed error', err);
        });
    }

    self.addEasternBluebird = function (studentData) {
        easternBluebirdPromise = $http.post('/student_data/eastern_bluebird', studentData).then(function (response) {
            if (response.data) {
                console.log('student service -- addEasternBluebird -- success: ', response.data);

            }
        }, function (err) {
            console.log('student service addEasternBluebird error', err);
        });
    }

    self.addGroundSquirrel = function (studentData) {
        groundSquirrelPromise = $http.post('/student_data/ground_squirrel', studentData).then(function (response) {
            if (response.data) {
                console.log('student service -- addGroundSquirrel -- success: ', response.data);

            }
        }, function (err) {
            console.log('student service addGroundSquirrel error', err);
        });
    }

    self.addDarkEyedJunco = function (studentData) {
        darkEyedJuncoPromise = $http.post('/student_data/dark_eyed_junco', studentData).then(function (response) {
            if (response.data) {
                console.log('student service -- addDarkEyedJunco -- success: ', response.data);

            }
        }, function (err) {
            console.log('student service addDarkEyedJunco error', err);
        });
    }

    self.addPaperBirch = function (studentData) {
        paperBirchPromise = $http.post('/student_data/paper_birch', studentData).then(function (response) {
            if (response.data) {
                console.log('student service -- addPaperBirch -- success: ', response.data);

            }
        }, function (err) {
            console.log('student service addPaperBirch error', err);
        });
    }

    self.addQuakingAspen = function (studentData) {
        quakingAspenPromise = $http.post('/student_data/quaking_aspen', studentData).then(function (response) {
            if (response.data) {
                console.log('student service -- addQuakingAspen -- success: ', response.data);

            }
        }, function (err) {
            console.log('student service addQuakingAspen error', err);
        });
    }

    self.addNorthernRedOak = function (studentData) {
        northernRedOakPromise = $http.post('/student_data/northern_red_oak', studentData).then(function (response) {
            if (response.data) {
                console.log('student service -- addNorthernRedOak -- success: ', response.data);

            }
        }, function (err) {
            console.log('student service addNorthernRedOak error', err);
        });
    }

    self.addrubyThroatedHummingbird = function (studentData) {
        rubyThroatedHummingbirdPromise = $http.post('/student_data/ruby_throated_hummingbird', studentData).then(function (response) {
            if (response.data) {
                console.log('student service -- addrubyThroatedHummingbird -- success: ', response.data);

            }
        }, function (err) {
            console.log('student service addrubyThroatedHummingbird error', err);
        });
    }
    var allPromises = [burOakPromise, commonBuckthornPromise, commonMilkweedPromise, easternBluebirdPromise,
        groundSquirrelPromise, darkEyedJuncoPromise, paperBirchPromise, quakingAspenPromise,
        northernRedOakPromise, rubyThroatedHummingbirdPromise];
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
    console.log('burOakPromise');
    console.log(burOakPromise);


    commonBuckthornPromise = 3;
    //Can't get promise.all to return the reason for an error when testing it with burOakPromise
    //and I purposely engineered a 500 error.  I get an error message from angular and from the
    //post callback in services only.

    Promise.all([burOakPromise, commonBuckthornPromise])
        .then(function (values) {
            console.log('promise.all values');

            console.log(values);
        }, function (reason) {
            console.log('promise.all reason');

            console.log(reason)
        });
}]);