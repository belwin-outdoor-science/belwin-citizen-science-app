myApp.service('StudentService', ['$http', '$location', '$mdDialog', 'StudentDataService', function ($http, $location, $mdDialog, StudentDataService) {
    console.log('StudentService loaded');
    var self = this;
    self.studentDataService = StudentDataService;
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

    self.studentDataService.getTableColumns();
    self.allData = self.studentDataService.allData;

    var organisms = ['bur_oak', 'common_buckthorn', 'common_milkweed', 'eastern_bluebird', 'ground_squirrel', 'dark_eyed_junco', 'paper_birch', 'quaking_aspen', 'northern_red_oak', 'ruby_throated_hummingbird'];
    //************TO DO**************
    //recreate self.allData after posting in clearAllData function
    //get site recorded correctly somehow
    function postOneOrganism(organismUnderscored, studentData) {
        organisms.forEach
        $http.post('/student_data/' + organismUnderscored, studentData).then(function (response) {
            if (response.data) {
                //console.log('student service -- addBurOak -- success: ', response.data);
                //clear out student data
                clearAllData(organismUnderscored);  //function defined at bottom
                //store 'success' in self.postCallbackMessages for error handling below in checkIfAllPostsAreDoneErrorHandling function.
                self.postCallbackMessages.push('success');
                //needs to be called in every success/err callback because it needs to run after all 10
                //posts have finished.
                checkIfAllPostsAreDoneAndErrorHandling();
            }
        }, function (err) {
            console.log('student service ' + organismUnderscored + ' error', err);
            //store 'error' in self.postCallbackMessages for error handling in checkIfAllPostsAreDoneErrorHandling
            self.postCallbackMessages.push('error');
            checkIfAllPostsAreDoneAndErrorHandling();
        });
    }

    //posts all student data stored in self.allData
    self.postAllData = function () {
        //need to figure out why local storage isn't working here
        // var studentDataArray = [self.allData.bur_oak, self.allData.common_buckthorn, self.allData.common_milkweed, self.allData.eastern_bluebird, self.allData.ground_squirrel, self.allData.dark_eyed_junco, self.allData.paper_birch, self.allData.quaking_aspen, self.allData.northern_red_oak, self.allData.ruby_throated_hummingbird];
        var allDataFiltered = [];
        if (confirm("Are you sure you want to submit your data now?  Make sure you are at Belwin Center.") == true) {
            self.allData = JSON.parse(self.storage.getItem('allData'));
            //remove any empty data objects.
            organisms.forEach(function (organism, i) {
                //var numThingsDeleted = 0;
                //**********Note to self: I don't like this.  Rewrite to store in an object like self.allData
                var oneOrganismFiltered = self.allData[organism].filter(function (object, i) {
                    var theresData = checkForData(object);
                    // console.log('theresData');
                    // console.log(theresData, "organism: ", organism);

                    return theresData;
                });
                allDataFiltered.push(oneOrganismFiltered);
            });
            console.log(' data array after splicing');

            console.log(allDataFiltered);
            //post requests
            organisms.forEach(function (organism, i) {
                console.log('organism: ', organism);
                console.log(allDataFiltered[i]);

                if (allDataFiltered[i].length > 0) {
                    console.log('this is what we are sending ' + organism);
                    console.log(allDataFiltered[i]);
                    postOneOrganism(organism, allDataFiltered[i]);
                }
            });
        } else {
            //optional message to display on page.
            //document.getElementById("messageToUser").innerHTML = txt;
        }
    }

    function checkForData(object) {
        for (var property in object) {
            if (property !== 'class' &&
                property !== 'site' &&
                object[property] !== '') {
                //there's at least one data entry
                return true;
            }
        }
        return false;
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
                    alert('Error uploading data. Try again');  //I was worried they might try to upload data while not connected
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

    //CR: Adding old controller elements here for now
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

    self.submitData = function () {
        if (navigator.onLine) {
            console.log('ok, we can send the data')
            //and then send it
            self.postAllData();
        } else {
            $mdDialog.show(
                $mdDialog.alert()
                    .parent(angular.element(document.querySelector('#popupContainer')))
                    .clickOutsideToClose(true)
                    .title('Device Offline')
                    .textContent('Get closer to the building, then try again!')
                    .ariaLabel('Alert Dialog Demo')
                    .ok('Ok!')
                    .openFrom('#left')
                //.targetEvent(ev)
            )
        }
    }

    //this sets the class
    self.setClass = function () {
        for (var organism in self.allData) {
            // console.log('self.class.class', self.class.class);
            // console.log('self.allData');
            // console.log(self.allData);
            self.allData[organism].map(function (object) {
                object.class = self.class.class;
                return object;
            });
        }
    }


    //student-view: on clicking organism site number button "bur oak 1" for example, call setSite
    self.setSite = function (site) {
        console.log("site and allData:", site, self.allData);
        //sets site to zero index for use in ng-repeats on student-view;
        self.site.site = parseInt(site) - 1;
        console.log('self.allData');
        console.log(self.allData);
        
    }

    //student-view > md-dialog observations: on clicking reset button:
    self.resetForm = function () {
        //loops through self.allData and resets all variables except class and site.
        //can't reset class because they may return to this table and enter data and class is set only at the 
        //ver start of the session.
        for (var question in self.studentDataService.allData[self.selectedOrganism.selectedOrganism][self.site.site]) {
            if (question !== 'class' || question !== 'site') {
                self.allData[self.selectedOrganism.selectedOrganism][self.site.site][question] = "";
            }
        }
        //store in local storage
        var allDataString = JSON.stringify(self.allData);
        self.storage.setItem('allData', allDataString);
    }

    //shows the main student view after the class is set
    self.appSetup = true;
    self.submit = function () {
        console.log('selected class is', self.class.class)
        self.appSetup = false;
    }
}]);