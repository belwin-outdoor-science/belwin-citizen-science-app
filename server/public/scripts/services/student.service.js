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
    self.classSelected = { classSelected: false };
    self.class = {
        class: ''
    };
    self.site = {
        site: ""
    };
    self.showStartContinue = { showStartContinue: true };
    self.storage = window.localStorage;
    self.allData = self.studentDataService.allData;
    var organisms = ['bur_oak', 'common_buckthorn', 'common_milkweed', 'eastern_bluebird', 'ground_squirrel', 'dark_eyed_junco', 'paper_birch', 'quaking_aspen', 'northern_red_oak', 'ruby_throated_hummingbird', 'pin_oak'];
    //on page refresh, if there's local storage, we store it in self.lastSession and this shows a message on student-view.html
    self.lastSession = JSON.parse(self.storage.getItem('allData'));
    console.log('self.lastSession: ');
    console.log(self.lastSession);

    //START NEW
    //called from student-view.html.  
    self.clearLocalStorage = function () {
        // add alert that you will clear data?
        // if (confirm("Are you .") == true) {
        console.log('clearLocalStorageCalled');
        self.showStartContinue.showStartContinue = false;
        self.storage.clear(); 
        console.log('clearLocalStorage called.');
    }

    //if there's no local storage, cascades events that will build up StudentDataService.allData
    if (self.lastSession == null || self.lastSession == undefined) {
        self.showStartContinue.showStartContinue = false;
        self.clearLocalStorage();
    }

    //CONTINUE
    //called from student-view.html.  Continue button.
    self.continueSession = function () {
        self.classSelected.classSelected = true;
        self.showStartContinue.showStartContinue = false;
        //self.lastSession is passed so that after table names have been received,
        //StudentDataService.allData is given the value of 'allData' from local storage.
        StudentDataService.allData = self.lastSession;
    }

    //this sets the class
    self.setClass = function () {
        for (var organism in self.allData) {
            self.classSelected.classSelected = true;
            console.log('allData: ');
            console.log(StudentDataService.allData);
            
            StudentDataService.allData[organism].map(function (object) {
                object.class = StudentDataService.allData.bur_oak[0].class;
                return object;
            });
        }
    }

    //student-view: on clicking organism site number button "bur oak 1" for example, call setSite
    self.setSite = function (site) {
        //sets site to zero index for use in ng-repeats on student-view;
        self.site.site = parseInt(site) - 1;
    }


    self.submitData = function () {
        if (navigator.onLine) {
            //console.log('ok, we can send the data')
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
        var allDataString = JSON.stringify(StudentDataService.allData);
        self.storage.setItem('allData', allDataString);
    }


    //posts all student data stored in self.allData
    self.postAllData = function () {

        self.studentDataService.submittedData = self.studentDataService.allData;
        var submittedDataString = JSON.stringify(StudentDataService.allData);
        self.storage.setItem('submittedData', submittedDataString);

        //need to figure out why local storage isn't working here
        // var studentDataArray = [self.allData.bur_oak, self.allData.common_buckthorn, self.allData.common_milkweed, self.allData.eastern_bluebird, self.allData.ground_squirrel, self.allData.dark_eyed_junco, self.allData.paper_birch, self.allData.quaking_aspen, self.allData.northern_red_oak, self.allData.ruby_throated_hummingbird];
        var allDataFiltered = {};
        if (confirm("Are you sure you want to submit your data now?  Make sure you are at Belwin Center.") == true) {
            //finally realized I can't redefine self.allData here.  For some reason, it will just
            //be an empty object like it's defined initially in studentDataService, so I used 
            //var allData
            var allData = JSON.parse(self.storage.getItem('allData'));
            //remove any empty data objects.
            var numberOfOrganisms = 0;
            organisms.forEach(function (organism, i) {
                if (allData[organism] != undefined) {
                    allDataFiltered[organism] = allData[organism].filter(function (object, i) {
                        var theresData = checkForData(object);
                        if (theresData) {
                            numberOfOrganisms++;
                        }
                        return theresData;
                    });
                }
            });
            //post requests
            console.log('allDataFiltered: ');
            console.log(allDataFiltered);
            var i = 0;
            for (organism in allDataFiltered) {
                if (allDataFiltered[organism].length > 0) {
                    postOneOrganism(organism, allDataFiltered[organism], numberOfOrganisms);
                } else {
                    i++;
                    if (i > 9) {
                        alert('There\'s no data to send');
                    }
                }
            }

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
    function postOneOrganism(organismUnderscored, studentData, numberOfOrganisms) {
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
                checkIfAllPostsAreDoneAndErrorHandling(numberOfOrganisms);
            }
        }, function (err) {
            console.log('student service ' + organismUnderscored + ' error', err);
            //store 'error' in self.postCallbackMessages for error handling in checkIfAllPostsAreDoneErrorHandling
            self.postCallbackMessages.push('error');
            checkIfAllPostsAreDoneAndErrorHandling(numberOfOrganisms);
        });
    }
    //this function is called in the success and fail parts of each post request
    function checkIfAllPostsAreDoneAndErrorHandling(numberOfOrganisms) {
        //there are 10 post requests, so once they have all been pushed to the postCallbackMessages array,
        //it is checked for any 'error' logs.
        if (self.postCallbackMessages.length == numberOfOrganisms) {
            if (self.postCallbackMessages.indexOf('error') >= 0) {
                alert('Error uploading data. Try again');  //I was worried they might try to upload data while not connected
                //to wifi and the sweet alert would break the app.
                self.postCallbackMessages = [];
            } else {
                //clear local storage and allData
                self.storage.removeItem('allData');
                console.log('post successful');
                $location.path('/success');
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
        //self.storage.clear();
        //self.allData = StudentDataService.allData;
    }

    //student-view.html on clicking species name, calls this function
    self.selectOrganism = function (organism, organismText) {
        //student-view on clicking the species name, set the selected organism variable name for use in ng-repeats
        self.selectedOrganism.selectedOrganism = organism;
        //student-view on clicking the species name, set the selected organism variable text for displaying on dom
        self.selectedOrganismText.selectedOrganismText = organismText;
        console.log('select organism:', self.selectedOrganism)
    }


    //shows the main student view after the class is set
    
}]);