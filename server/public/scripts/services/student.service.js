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
        class: '1',
        site: '1',
        breaking_leaf_buds: 'yes',
        leaves: 'yes',
        increasing_leaf_size: 'yes',
        colored_leaves: 'yes',
        falling_leaves: 'yes',
        flowers_or_flower_buds: 'yes',
        open_flowers: 'yes',
        pollen_release: 'yes',
        fruits: 'yes',
        ripe_fruits: 'yes',
        recent_fruit_or_seed_drop: 'yes',
        notes: ''
    }

    var allBurOaksData = [{
        class: '1',
        site: '1',
        breaking_leaf_buds: 'yes',
        leaves: 'yes',
        increasing_leaf_size: 'yes',
        colored_leaves: 'yes',
        falling_leaves: 'yes',
        flowers_or_flower_buds: 'yes',
        open_flowers: 'yes',
        pollen_release: 'yes',
        fruits: 'yes',
        ripe_fruits: 'no',
        recent_fruit_or_seed_drop: 'no',
        notes: 'imaburoak'
    },
    {
        class: '1',
        site: '1',
        breaking_leaf_buds: 'yes',
        leaves: 'yes',
        increasing_leaf_size: 'yes',
        colored_leaves: 'yes',
        falling_leaves: 'yes',
        flowers_or_flower_buds: 'yes',
        open_flowers: 'yes',
        pollen_release: 'yes',
        fruits: 'yes',
        ripe_fruits: 'no',
        recent_fruit_or_seed_drop: 'no',
        notes: 'imaburoak'
    },
    {
        class: '1',
        site: '1',
        breaking_leaf_buds: 'yes',
        leaves: 'yes',
        increasing_leaf_size: 'yes',
        colored_leaves: 'yes',
        falling_leaves: 'yes',
        flowers_or_flower_buds: 'yes',
        open_flowers: 'yes',
        pollen_release: 'yes',
        fruits: 'yes',
        ripe_fruits: 'no',
        recent_fruit_or_seed_drop: 'no',
        notes: 'imaburoak'
    }
    ];


    self.postAllData = function (dataObject) {
        console.log('submitted data: ');
        console.log(self.allData)
        //call other add functions
    }


    self.addBurOak = function (studentData) {
        console.log('addBurOak called');

        burOakPromise = $http.post('/student_data/bur_oak', studentData).then(function (response) {
            if (response.data) {
                console.log('student service -- addBurOak -- success: ', response.data);
                //clear out student data
                return response;
            }
        }, function (err) {
            console.log('student service addBurOak error', err);
            return err;
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
        northernRedOakPromise, rubyThroatedHummingbirdPromise
    ];
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
    console.log('burOakPromise');
    console.log(burOakPromise);


    commonBuckthornPromise = 3;
    //Can't get promise.all to return the reason for an error when testing it with burOakPromise
    //and I purposely engineered a 500 error.  I get an error message from angular and from the
    //post callback in services only.

    var allPromises = Promise.all([burOakPromise, commonBuckthornPromise])
        .then(values => { 
            console.log(values);
          }, reason => {
            console.log(reason)
        //     function (values) {
        //     console.log('promise.all values');

        //     console.log(values);
        // }, function (reason) {
        //     console.log('promise.all reason');

        //     console.log(reason)
        });
    console.log('promise.all ');
    console.log(allPromises);



    //Charly's data solution
    self.allData = {
        //plants
        bur_oak: [{
            class: '',
            site: '1',
            breaking_leaf_buds: '',
            leaves: '',
            increasing_leaf_size: '',
            colored_leaves: '',
            falling_leaves: '',
            flowers_or_flower_buds: '',
            open_flowers: '',
            pollen_release: '',
            fruits: '',
            ripe_fruits: '',
            recent_fruit_or_seed_drop: '',
            notes: ''
        },
        {
            class: '',
            site: '2',
            breaking_leaf_buds: '',
            leaves: '',
            increasing_leaf_size: '',
            colored_leaves: '',
            falling_leaves: '',
            flowers_or_flower_buds: '',
            open_flowers: '',
            pollen_release: '',
            fruits: '',
            ripe_fruits: '',
            recent_fruit_or_seed_drop: '',
            notes: ''
        },
        {
            class: '',
            site: '3',
            breaking_leaf_buds: '',
            leaves: '',
            increasing_leaf_size: '',
            colored_leaves: '',
            falling_leaves: '',
            flowers_or_flower_buds: '',
            open_flowers: '',
            pollen_release: '',
            fruits: '',
            ripe_fruits: '',
            recent_fruit_or_seed_drop: '',
            notes: ''
        }
        ],
        common_buckthorn: [{
            class: '',
            site: '1',
            breaking_leaf_buds: '',
            leaves: '',
            increasing_leaf_size: '',
            colored_leaves: '',
            falling_leaves: '',
            flowers_or_flower_buds: '',
            open_flowers: '',
            pollen_release: '',
            fruits: '',
            ripe_fruits: '',
            recent_fruit_or_seed_drop: '',
            notes: ''
        },
        {
            class: '',
            site: '2',
            breaking_leaf_buds: '',
            leaves: '',
            increasing_leaf_size: '',
            colored_leaves: '',
            falling_leaves: '',
            flowers_or_flower_buds: '',
            open_flowers: '',
            pollen_release: '',
            fruits: '',
            ripe_fruits: '',
            recent_fruit_or_seed_drop: '',
            notes: ''
        },
        {
            class: '',
            site: '3',
            breaking_leaf_buds: '',
            leaves: '',
            increasing_leaf_size: '',
            colored_leaves: '',
            falling_leaves: '',
            flowers_or_flower_buds: '',
            open_flowers: '',
            pollen_release: '',
            fruits: '',
            ripe_fruits: '',
            recent_fruit_or_seed_drop: '',
            notes: ''
        }
        ],
        northern_red_oak: [{
            class: '',
            site: '1',
            breaking_leaf_buds: '',
            leaves: '',
            increasing_leaf_size: '',
            colored_leaves: '',
            falling_leaves: '',
            flowers_or_flower_buds: '',
            open_flowers: '',
            pollen_release: '',
            fruits: '',
            ripe_fruits: '',
            recent_fruit_or_seed_drop: '',
            notes: ''
        },
        {
            class: '',
            site: '2',
            breaking_leaf_buds: '',
            leaves: '',
            increasing_leaf_size: '',
            colored_leaves: '',
            falling_leaves: '',
            flowers_or_flower_buds: '',
            open_flowers: '',
            pollen_release: '',
            fruits: '',
            ripe_fruits: '',
            recent_fruit_or_seed_drop: '',
            notes: ''
        },
        {
            class: '',
            site: '3',
            breaking_leaf_buds: '',
            leaves: '',
            increasing_leaf_size: '',
            colored_leaves: '',
            falling_leaves: '',
            flowers_or_flower_buds: '',
            open_flowers: '',
            pollen_release: '',
            fruits: '',
            ripe_fruits: '',
            recent_fruit_or_seed_drop: '',
            notes: ''
        }
        ],
        common_milkweed: [{
            class: '',
            site: '1',
            initial_growth: '',
            leaves: '',
            flowers_or_flower_buds: '',
            open_flowers: '',
            fruits: '',
            ripe_fruits: '',
            recent_fruit_or_seed_drop: '',
            notes: ''
        },
        {
            class: '',
            site: '2',
            initial_growth: '',
            leaves: '',
            flowers_or_flower_buds: '',
            open_flowers: '',
            fruits: '',
            ripe_fruits: '',
            recent_fruit_or_seed_drop: '',
            notes: ''
        },
        {
            class: '',
            site: '3',
            initial_growth: '',
            leaves: '',
            flowers_or_flower_buds: '',
            open_flowers: '',
            fruits: '',
            ripe_fruits: '',
            recent_fruit_or_seed_drop: '',
            notes: ''
        }
        ],
        paper_birch: [{
            class: '',
            site: '1',
            breaking_leaf_buds: '',
            leaves: '',
            increasing_leaf_size: '',
            colored_leaves: '',
            falling_leaves: '',
            flowers_or_flower_buds: '',
            open_flowers: '',
            pollen_release: '',
            fruits: '',
            ripe_fruits: '',
            recent_fruit_or_seed_drop: '',
            notes: ''
        },
        {
            class: '',
            site: '2',
            breaking_leaf_buds: '',
            leaves: '',
            increasing_leaf_size: '',
            colored_leaves: '',
            falling_leaves: '',
            flowers_or_flower_buds: '',
            open_flowers: '',
            pollen_release: '',
            fruits: '',
            ripe_fruits: '',
            recent_fruit_or_seed_drop: '',
            notes: ''
        },
        {
            class: '',
            site: '3',
            breaking_leaf_buds: '',
            leaves: '',
            increasing_leaf_size: '',
            colored_leaves: '',
            falling_leaves: '',
            flowers_or_flower_buds: '',
            open_flowers: '',
            pollen_release: '',
            fruits: '',
            ripe_fruits: '',
            recent_fruit_or_seed_drop: '',
            notes: ''
        }
        ],
        quaking_aspen: [{
            class: '',
            site: '1',
            breaking_leaf_buds: '',
            leaves: '',
            increasing_leaf_size: '',
            colored_leaves: '',
            falling_leaves: '',
            flowers_or_flower_buds: '',
            open_flowers: '',
            pollen_release: '',
            fruits: '',
            ripe_fruits: '',
            recent_fruit_or_seed_drop: '',
            notes: ''
        },
        {
            class: '',
            site: '2',
            breaking_leaf_buds: '',
            leaves: '',
            increasing_leaf_size: '',
            colored_leaves: '',
            falling_leaves: '',
            flowers_or_flower_buds: '',
            open_flowers: '',
            pollen_release: '',
            fruits: '',
            ripe_fruits: '',
            recent_fruit_or_seed_drop: '',
            notes: ''
        },
        {
            class: '',
            site: '3',
            breaking_leaf_buds: '',
            leaves: '',
            increasing_leaf_size: '',
            colored_leaves: '',
            falling_leaves: '',
            flowers_or_flower_buds: '',
            open_flowers: '',
            pollen_release: '',
            fruits: '',
            ripe_fruits: '',
            recent_fruit_or_seed_drop: '',
            notes: ''
        }
        ],
        //mammals
        ground_squirrel: [{
            class: '',
            site: '1',
            active_individuals: '',
            feeding: '',
            young_individuals: '',
            dead_individuals: '',
            notes: ''
        },
        {
            class: '',
            site: '2',
            active_individuals: '',
            feeding: '',
            young_individuals: '',
            dead_individuals: '',
            notes: ''
        },
        {
            class: '',
            site: '3',
            active_individuals: '',
            feeding: '',
            young_individuals: '',
            dead_individuals: '',
            notes: ''
        }
        ],
        eastern_bluebird: [{
            class: '',
            site: '1',
            active_individuals: '',
            feeding: '',
            fruit_seed_consumption: '',
            insect_consumption: '',
            calls_or_song: '',
            singing_individuals: '',
            territorial_individuals: '',
            courtship: '',
            mating: '',
            nest_building: '',
            occupied_nest: '',
            nestlings: '',
            fledged_young: '',
            dead_individuals: '',
            dead_nestlings_or_fledlings: '',
            individuals_at_feeding_station: '',
            notes: ''
        },
        {
            class: '',
            site: '2',
            active_individuals: '',
            feeding: '',
            fruit_seed_consumption: '',
            insect_consumption: '',
            calls_or_song: '',
            singing_individuals: '',
            territorial_individuals: '',
            courtship: '',
            mating: '',
            nest_building: '',
            occupied_nest: '',
            nestlings: '',
            fledged_young: '',
            dead_individuals: '',
            dead_nestlings_or_fledlings: '',
            individuals_at_feeding_station: '',
            notes: ''
        },
        {
            class: '',
            site: '3',
            active_individuals: '',
            feeding: '',
            fruit_seed_consumption: '',
            insect_consumption: '',
            calls_or_song: '',
            singing_individuals: '',
            territorial_individuals: '',
            courtship: '',
            mating: '',
            nest_building: '',
            occupied_nest: '',
            nestlings: '',
            fledged_young: '',
            dead_individuals: '',
            dead_nestlings_or_fledlings: '',
            individuals_at_feeding_station: '',
            notes: ''
        }
        ],
        dark_eyed_junco: [{
            class: '',
            site: '1',
            active_individuals: '',
            feeding: '',
            fruit_seed_consumption: '',
            insect_consumption: '',
            calls_or_song: '',
            singing_individuals: '',
            territorial_individuals: '',
            courtship: '',
            mating: '',
            nest_building: '',
            occupied_nest: '',
            nestlings: '',
            fledged_young: '',
            dead_individuals: '',
            dead_nestlings_or_fledlings: '',
            individuals_at_feeding_station: '',
            notes: ''
        },
        {
            class: '',
            site: '2',
            active_individuals: '',
            feeding: '',
            fruit_seed_consumption: '',
            insect_consumption: '',
            calls_or_song: '',
            singing_individuals: '',
            territorial_individuals: '',
            courtship: '',
            mating: '',
            nest_building: '',
            occupied_nest: '',
            nestlings: '',
            fledged_young: '',
            dead_individuals: '',
            dead_nestlings_or_fledlings: '',
            individuals_at_feeding_station: '',
            notes: ''
        },
        {
            class: '',
            site: '3',
            active_individuals: '',
            feeding: '',
            fruit_seed_consumption: '',
            insect_consumption: '',
            calls_or_song: '',
            singing_individuals: '',
            territorial_individuals: '',
            courtship: '',
            mating: '',
            nest_building: '',
            occupied_nest: '',
            nestlings: '',
            fledged_young: '',
            dead_individuals: '',
            dead_nestlings_or_fledlings: '',
            individuals_at_feeding_station: '',
            notes: ''
        }
        ],
        ruby_throated_hummingbird: [{
            class: '',
            site: '1',
            active_individuals: '',
            feeding: '',
            insect_consumption: '',
            flower_consumption: '',
            calls_or_song: '',
            singing_individuals: '',
            territorial_individuals: '',
            courtship: '',
            mating: '',
            nest_building: '',
            occupied_nest: '',
            nestlings: '',
            fledged_young: '',
            dead_individuals: '',
            dead_nestlings_or_fledlings: '',
            individuals_at_feeding_station: '',
            notes: ''
        },
        {
            class: '',
            site: '2',
            active_individuals: '',
            feeding: '',
            insect_consumption: '',
            flower_consumption: '',
            calls_or_song: '',
            singing_individuals: '',
            territorial_individuals: '',
            courtship: '',
            mating: '',
            nest_building: '',
            occupied_nest: '',
            nestlings: '',
            fledged_young: '',
            dead_individuals: '',
            dead_nestlings_or_fledlings: '',
            individuals_at_feeding_station: '',
            notes: ''
        },
        {
            class: '',
            site: '3',
            active_individuals: '',
            feeding: '',
            insect_consumption: '',
            flower_consumption: '',
            calls_or_song: '',
            singing_individuals: '',
            territorial_individuals: '',
            courtship: '',
            mating: '',
            nest_building: '',
            occupied_nest: '',
            nestlings: '',
            fledged_young: '',
            dead_individuals: '',
            dead_nestlings_or_fledlings: '',
            individuals_at_feeding_station: '',
            notes: ''
        }
        ]
    };

    self.selectedOrganism = {
        selectedOrganism: ""
    };
    self.selectedOrganismText = {
        selectedOrganismText: ""
    };
    self.class = {
        class: ''
    };


    self.selectOrganism = function (organism, organismText) {
        self.selectedOrganism.selectedOrganism = organism;
        self.selectedOrganismText.selectedOrganismText = organismText;
        console.log('select organism:', self.selectedOrganism)
    }
    self.setClass = function () {


        for (var organism in self.allData) {
            self.allData[organism].map(function (object) {
                object.class = self.class.class;
            });
        }
    }

    self.site = {
        site: ""
    };
    self.setSite = function (site) {
        console.log("site:", site, self.allData);
        self.site.site = parseInt(site) - 1;
    }
}]);