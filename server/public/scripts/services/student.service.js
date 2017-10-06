myApp.service('StudentService', ['$http', function ($http) {
    console.log('StudentService loaded');
    var self = this;
    self.postCallbackMessages = [];
    self.selectedOrganism = {
        selectedOrganism: ""
    };
    self.selectedOrganismText = {
        selectedOrganismText: ""
    };
    self.class = {
        class: ''
    };
    self.site = {
        site: ""
    };
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

    self.addBurOak = function (studentData) {
        console.log('addBurOak called');
        burOakPromise = $http.post('/student_data/bur_oak', studentData).then(function (response) {
            if (response.data) {
                //console.log('student service -- addBurOak -- success: ', response.data);
                //clear out student data
                clearAllData("bur_oak"); //function defined at bottom
                //store 'success' in self.postCallbackMessages for error handling below in checkIfAllPostsAreDoneErrorHandling function.
                self.postCallbackMessages.push('success');
                //needs to be called in every success/err callback because it needs to run after all 10
                //posts have finished.
                checkIfAllPostsAreDoneAndErrorHandling();
                return response;
            }
        }, function (err) {
            console.log('student service addBurOak error', err);
            //store 'error' in self.postCallbackMessages for error handling in checkIfAllPostsAreDoneErrorHandling
            self.postCallbackMessages.push('error');
            console.log(self.postCallbackMessages);
            checkIfAllPostsAreDoneAndErrorHandling();
            return err;
        });
    }

    self.addCommonBuckthorn = function (studentData) {
        commonBuckthornPromise = $http.post('/student_data/common_buckthorn', studentData).then(function (response) {
            if (response.data) {
                //console.log('student service -- addCommonBuckthorn -- success: ', response.data);
                clearAllData("common_buckthorn"); //function defined at bottom
                self.postCallbackMessages.push('success');
                checkIfAllPostsAreDoneAndErrorHandling();
            }
        }, function (err) {
            self.postCallbackMessages.push('error');
            console.log('student service addCommonBuckthorn error', err);
            checkIfAllPostsAreDoneAndErrorHandling();
        });
    }

    self.addCommonMilkweed = function (studentData) {
        commonMilkweedPromise = $http.post('/student_data/common_milkweed', studentData).then(function (response) {
            if (response.data) {
                //console.log('student service -- addCommonMilkweed -- success: ', response.data);
                clearAllData("common_milkweed"); //function defined at bottom
                self.postCallbackMessages.push('success');
                checkIfAllPostsAreDoneAndErrorHandling();
            }
        }, function (err) {
            self.postCallbackMessages.push('error');
            console.log('student service addCommonMilkweed error', err);
            checkIfAllPostsAreDoneAndErrorHandling();
        });
    }

    self.addEasternBluebird = function (studentData) {
        easternBluebirdPromise = $http.post('/student_data/eastern_bluebird', studentData).then(function (response) {
            if (response.data) {
                //console.log('student service -- addEasternBluebird -- success: ', response.data);
                clearAllData("eastern_bluebird"); //function defined at bottom
                self.postCallbackMessages.push('success');
                checkIfAllPostsAreDoneAndErrorHandling();
            }
        }, function (err) {
            self.postCallbackMessages.push('error');
            console.log('student service addEasternBluebird error', err);
            checkIfAllPostsAreDoneAndErrorHandling();
        });
    }

    self.addGroundSquirrel = function (studentData) {
        groundSquirrelPromise = $http.post('/student_data/ground_squirrel', studentData).then(function (response) {
            if (response.data) {
                //console.log('student service -- addGroundSquirrel -- success: ', response.data);
                clearAllData("ground_squirrel"); //function defined at bottom
                self.postCallbackMessages.push('success');
                checkIfAllPostsAreDoneAndErrorHandling();
            }
        }, function (err) {
            self.postCallbackMessages.push('error');
            console.log('student service addGroundSquirrel error', err);
            checkIfAllPostsAreDoneAndErrorHandling();
        });
    }

    self.addDarkEyedJunco = function (studentData) {
        darkEyedJuncoPromise = $http.post('/student_data/dark_eyed_junco', studentData).then(function (response) {
            if (response.data) {
                //console.log('student service -- addDarkEyedJunco -- success: ', response.data);
                clearAllData("dark_eyed_junco"); //function defined at bottom
                self.postCallbackMessages.push('success');
                checkIfAllPostsAreDoneAndErrorHandling();
            }
        }, function (err) {
            self.postCallbackMessages.push('error');
            console.log('student service addDarkEyedJunco error', err);
            checkIfAllPostsAreDoneAndErrorHandling();
        });
    }

    self.addPaperBirch = function (studentData) {
        paperBirchPromise = $http.post('/student_data/paper_birch', studentData).then(function (response) {
            if (response.data) {
                //console.log('student service -- addPaperBirch -- success: ', response.data);
                clearAllData("paper_birch"); //function defined at bottom
                self.postCallbackMessages.push('success');
                checkIfAllPostsAreDoneAndErrorHandling();
            }
        }, function (err) {
            self.postCallbackMessages.push('error');
            console.log('student service addPaperBirch error', err);
            checkIfAllPostsAreDoneAndErrorHandling();
        });
    }

    self.addQuakingAspen = function (studentData) {
        quakingAspenPromise = $http.post('/student_data/quaking_aspen', studentData).then(function (response) {
            if (response.data) {
                //console.log('student service -- addQuakingAspen -- success: ', response.data);
                clearAllData("quaking_aspen"); //function defined at bottom
                self.postCallbackMessages.push('success');
                checkIfAllPostsAreDoneAndErrorHandling();
            }
        }, function (err) {
            self.postCallbackMessages.push('error');
            console.log('student service addQuakingAspen error', err);
            checkIfAllPostsAreDoneAndErrorHandling();
        });
    }

    self.addNorthernRedOak = function (studentData) {
        northernRedOakPromise = $http.post('/student_data/northern_red_oak', studentData).then(function (response) {
            if (response.data) {
                //console.log('student service -- addNorthernRedOak -- success: ', response.data);
                clearAllData("northern_red_oak"); //function defined at bottom
                self.postCallbackMessages.push('success');
                checkIfAllPostsAreDoneAndErrorHandling();
            }
        }, function (err) {
            self.postCallbackMessages.push('error');
            console.log('student service addNorthernRedOak error', err);
            checkIfAllPostsAreDoneAndErrorHandling();
        });
    }

    self.addrubyThroatedHummingbird = function (studentData) {
        rubyThroatedHummingbirdPromise = $http.post('/student_data/ruby_throated_hummingbird', studentData).then(function (response) {
            if (response.data) {
                //console.log('student service -- addrubyThroatedHummingbird -- success: ', response.data);
                clearAllData("ruby_throated_hummingbird"); //function defined at bottom
                self.postCallbackMessages.push('success');
                checkIfAllPostsAreDoneAndErrorHandling();
            }
        }, function (err) {
            self.postCallbackMessages.push('error');
            console.log('student service addrubyThroatedHummingbird error', err);
            checkIfAllPostsAreDoneAndErrorHandling();
        });
    }

    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all

    //Can't get promise.all to return the reason for an error when testing it with burOakPromise
    //and I purposely engineered a 500 error.  I get an error message from angular and from the
    //post callback in services only.

    //posts all student data stored in self.allData
    self.postAllData = function () {
        //need to figure out why local storage isn't working here
        if (confirm("Are you sure you want to submit your data now?  Make sure you are at Belwin Center.") == true) {
            self.allData = JSON.parse(self.storage.getItem('allData'));
            //call all post functions defined above
            self.addBurOak(self.allData.bur_oak);
            self.addCommonBuckthorn(self.allData.common_buckthorn);
            self.addCommonMilkweed(self.allData.common_milkweed);
            self.addEasternBluebird(self.allData.eastern_bluebird);
            self.addGroundSquirrel(self.allData.ground_squirrel);
            self.addDarkEyedJunco(self.allData.dark_eyed_junco);
            self.addPaperBirch(self.allData.paper_birch);
            self.addQuakingAspen(self.allData.quaking_aspen);
            self.addNorthernRedOak(self.allData.northern_red_oak);
            self.addrubyThroatedHummingbird(self.allData.ruby_throated_hummingbird);
            //if successful
            // swal(
            //     'Your data was uploaded successfully.'
            //   )
        } else {
            //optional message to display on page.
            //document.getElementById("messageToUser").innerHTML = txt;
        }
    }

    //this function is called in the success and fail parts of each post request
    function checkIfAllPostsAreDoneAndErrorHandling() {
        //there are 10 post requests, so once they have all been pushed to the postCallbackMessages array,
        //it is checked for any 'error' logs.
        if (self.postCallbackMessages.length == 10) {
            console.log('checking postCallbackMessages');
            for (var i = 0; i < self.postCallbackMessages.length; i++) {
                //if 'error', alert the user so they can try to upload data again.
                //data is cleared out in the success parts of the post, so they can just hit the submit button again.
                var message = self.postCallbackMessages[i];
                if (message == 'error') {
                    // swal(
                    //     'Error uploading data.  Try again.'
                    // );
                    alert('Error uploading data. Try again'); //I was worried they might try to upload data while not connected
                    //to wifi and the sweet alert would break the app.
                    self.postCallbackMessages = [];
                }
            }
        }
    }
    //clears out self.allData except for site number
    function clearAllData(organism) {
        self.allData[organism].forEach(function (dataObj, i) {
            for (var question in dataObj) {
                if (question !== 'site') {
                    self.allData[organism][i][question] = '';
                }
            }
        });
        //clear local storage
        self.storage.clear();
    }


    self.storage = window.localStorage;
    //functions from start.page.html
    //start.page.html: on clicking start, clears local storage
    self.clearLocalStorage = function () {
        // add alert that you will clear data?
        // if (confirm("Are you .") == true) {
        self.storage.clear();
    }
    //start.page.html: variable disables continue button if true
    self.isThereLocalStorage = false;
    if (self.storage.getItem('allData')) {
        self.isThereLocalStorage = true;
    }

    //student-view.html on clicking species name, calls this function
    self.selectOrganism = function (organism, organismText) {
        //student-view on clicking the species name, set the selected organism variable name for use in ng-repeats
        self.selectedOrganism.selectedOrganism = organism;
        //student-view on clicking the species name, set the selected organism variable text for displaying on dom
        self.selectedOrganismText.selectedOrganismText = organismText;
        console.log('select organism:', self.selectedOrganism)
    }

    self.setClass = function () {
        for (var organism in self.allData) {
            console.log('self.class.class', self.class.class);

            self.allData[organism].map(function (object) {
                object.class = self.class.class;
                return object;
            });
        }
        console.log('class set');
        console.log(self.allData);
    }

    //student-view: on clicking organism site number button "bur oak 1" for example, call setSite
    self.setSite = function (site) {
        console.log("site:", site, self.allData);
        //sets site to zero index for use in ng-repeats on student-view;
        self.site.site = parseInt(site) - 1;
    }

    //student-view > md-dialog observations: on clicking reset button:
    self.resetForm = function () {
        //loops through self.allData and resets all variables except class and site.
        //can't reset class because they may return to this table and enter data and class is set only at the 
        //ver start of the session.
        for (var question in self.allData[self.selectedOrganism.selectedOrganism][self.site.site]) {
            if (question !== 'class' || question !== 'site') {
                self.allData[self.selectedOrganism.selectedOrganism][self.site.site][question] = "";
            }
        }
        //store in local storage
        var allDataString = JSON.stringify(self.allData);
        self.storage.setItem('allData', allDataString);
    }

    //all student data
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
                fruit_or_seed_consumption: '',
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
                dead_nestlings_or_fledglings: '',
                individuals_at_feeding_station: '',
                notes: ''
            },
            {
                class: '',
                site: '2',
                active_individuals: '',
                feeding: '',
                fruit_or_seed_consumption: '',
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
                dead_nestlings_or_fledglings: '',
                individuals_at_feeding_station: '',
                notes: ''
            },
            {
                class: '',
                site: '3',
                active_individuals: '',
                feeding: '',
                fruit_or_seed_consumption: '',
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
                dead_nestlings_or_fledglings: '',
                individuals_at_feeding_station: '',
                notes: ''
            }
        ],
        dark_eyed_junco: [{
                class: '',
                site: '1',
                active_individuals: '',
                feeding: '',
                fruit_or_seed_consumption: '',
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
                dead_nestlings_or_fledglings: '',
                individuals_at_feeding_station: '',
                notes: ''
            },
            {
                class: '',
                site: '2',
                active_individuals: '',
                feeding: '',
                fruit_or_seed_consumption: '',
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
                dead_nestlings_or_fledglings: '',
                individuals_at_feeding_station: '',
                notes: ''
            },
            {
                class: '',
                site: '3',
                active_individuals: '',
                feeding: '',
                fruit_or_seed_consumption: '',
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
                dead_nestlings_or_fledglings: '',
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
                flower_visitation: '',
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
                dead_nestlings_or_fledglings: '',
                individuals_at_feeding_station: '',
                notes: ''
            },
            {
                class: '',
                site: '2',
                active_individuals: '',
                feeding: '',
                insect_consumption: '',
                flower_visitation: '',
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
                dead_nestlings_or_fledglings: '',
                individuals_at_feeding_station: '',
                notes: ''
            },
            {
                class: '',
                site: '3',
                active_individuals: '',
                feeding: '',
                insect_consumption: '',
                flower_visitation: '',
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
                dead_nestlings_or_fledglings: '',
                individuals_at_feeding_station: '',
                notes: ''
            }
        ]
    };


    //CR: Adding controller elements here fo now
    self.questionsByOrganism = {
        questions: {}
    };
    var questionArray = [];

    self.questionCreator = function () {
        for (var organism in self.allData) {
            questionArray = [];
            for (var question in self.allData[organism][0]) {
                var questionObj = {};
                if (question !== 'class' && question !== 'site') {
                    questionObj.property = question;
                    question = question.replace(/_/g, ' ');
                    question = question.charAt(0).toUpperCase() + question.slice(1);
                    questionObj.text = question;
                    questionArray.push(questionObj);
                }
            }
            self.questionsByOrganism.questions[organism] = questionArray;
        }
    }

}]);