myApp.service('StudentService', ['$http', '$location', '$mdDialog', 'StudentDataService', function ($http, $location, $mdDialog, StudentDataService) {
    console.log('StudentService loaded');
    var self = this;
    var NUMBER_OF_ORGANISMS = Object.keys(StudentDataService.allData).length;
    self.studentDataService = StudentDataService;
    self.postCallbackMessages = [];
    self.selectedOrganism = {
        selectedOrganism: ""
    };
    self.selectedOrganismText = {
        selectedOrganismText: ""
    };
    self.classSelected = {
        classSelected: false
    };
    self.class = {
        class: ''
    };
    self.site = {
        site: ""
    };
    self.showStartContinue = {
        showStartContinue: true
    };
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
        //bur_oak[0] is used because that is used for the ng-model of the radio buttons on the class select in student-view.html
        if (StudentDataService.allData.bur_oak[0].class === '') {
            $mdDialog.show(
                $mdDialog.alert()
                    .parent(angular.element(document.querySelector('#popupContainer')))
                    .clickOutsideToClose(true)
                    .title('No class selected')
                    .textContent('You have not selected a class. Choose a class number to continue.')
                    .ariaLabel('Alert Dialog Demo')
                    .ok('Ok!')
                    .openFrom('#left')
                //.targetEvent(ev)
            )
            return;
        } else {
            //loop through allData and assign the class number
            for (var organism in self.allData) {
                //classSelected is used in an ng-show in 
                self.classSelected.classSelected = true;

                StudentDataService.allData[organism].map(function (object) {
                    //get today's date and change to a string
                    var todaysDate = new Date();
                    var todaysDateString = pgFormatDate(todaysDate);
                    console.log('todaysDateString');
                    console.log(todaysDateString);
                    //assign today's date to each object in allData
                    object.date = todaysDateString;
                    object.class = StudentDataService.allData.bur_oak[0].class;
                    return object;
                });
                console.log('allData in setClass');
                console.log(StudentDataService.allData);
            }
        }
    }

    //student-view: on clicking organism site number button "bur oak 1" for example, call setSite
    self.setSite = function (site) {
        //sets site to zero index for use in ng-repeats on student-view;
        self.site.site = parseInt(site) - 1;
    }


    self.submitData = function () {
        //post the data if online
        if (navigator.onLine) {
            self.postAllData();
        } else {
            $mdDialog.show(
                $mdDialog.alert()
                    .parent(angular.element(document.querySelector('#popupContainer')))
                    .clickOutsideToClose(true)
                    .title('Device Offline')
                    .textContent('Your data was not submitted. Get close to the building and try again.')
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
        //store data from current session in submittedData, for use in student.data.view
        self.studentDataService.submittedData = self.studentDataService.allData;
        var submittedDataString = JSON.stringify(StudentDataService.allData);
        self.storage.setItem('submittedData', submittedDataString);

        //need to figure out why local storage isn't working here
        // var studentDataArray = [self.allData.bur_oak, self.allData.common_buckthorn, self.allData.common_milkweed, self.allData.eastern_bluebird, self.allData.ground_squirrel, self.allData.dark_eyed_junco, self.allData.paper_birch, self.allData.quaking_aspen, self.allData.northern_red_oak, self.allData.ruby_throated_hummingbird];
        var allDataFiltered = {};

        var confirm = $mdDialog.confirm()
            .title('Are you all done?')
            // .textContent('Are you all done?')
            .ariaLabel('Ready to submit?')
            // .targetEvent(ev)
            .ok('Yes! Send my data')
            .cancel('Not Yet');

        $mdDialog.show(confirm).then(function () {
            var allData = JSON.parse(self.storage.getItem('allData'));
            //redefine empty objects in allData as [].
            var numberOfOrganisms = 0;
            organisms.forEach(function (organism, i) {
                if (allData[organism] != undefined) {
                    var organismHasData = false;
                    allDataFiltered[organism] = allData[organism].filter(function (object, i) {
                        var theresData = checkForData(object);
                        if (theresData) {
                            organismHasData = true;
                        }
                        return theresData;
                    });
                    //count the number of organisms submitted for use in checkIfAllPostsAreDoneAndErrorHandling function.
                    if (organismHasData) {
                        numberOfOrganisms++;
                    }
                }
            });
            //post requests
            console.log('allDataFiltered: ');
            console.log(allDataFiltered);
            var i = 0;
            for (var organism in allDataFiltered) {
                if (allDataFiltered[organism].length > 0) {
                    postOneOrganism(organism, allDataFiltered[organism], numberOfOrganisms);
                } else {
                    //count number of organisms that have no data in 'i':
                    i++;
                    //if all ten organisms have no data, then there's no data to send.
                    if (i >= NUMBER_OF_ORGANISMS) {
                        alert('There\'s no data to send');
                    }
                }
            }
        }, function () {
            console.log('You are not ready')
        });
    }

    function checkForData(object) {
        for (var property in object) {
            if (property !== 'class' &&
                property !== 'site' &&
                property !== 'date' &&
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
                //clear out student data--replaces all properties in each {} in allData with '' except site.
                clearAllData(organismUnderscored); //function defined at bottom
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
        console.log('StudentService: made it to checkIfAllPostsAreDoneAndErrorHandling')
        // console.log('numberOfOrganisms', numberOfOrganisms, 'self.postCallbackMessages', self.postCallbackMessages)
        //there are 10 post requests, so once they have all been pushed to the postCallbackMessages array,
        //it is checked for any 'error' logs.
        if (self.postCallbackMessages.length == numberOfOrganisms) {
            if (self.postCallbackMessages.indexOf('error') >= 0) {
                alert('Error uploading data. Try again'); //I was worried they might try to upload data while not connected
                //to wifi and the sweet alert would break the app.
                self.postCallbackMessages = [];
                console.log("in (self.postCallbackMessages.indexOf('error') >= 0)")
            } else {
                //clear local storage and allData
                self.storage.removeItem('allData');
                var testing = JSON.parse(self.storage.getItem('allData'));
                console.log('allData after removing it: ');
                console.log(self.allData);
                console.log('post successful');
                $location.path('/success');
            }
        }
    }
    //clears out self.allData except for site number
    function clearAllData(organism) {
        StudentDataService.allData[organism].forEach(function (dataObj, i) {
            for (var question in dataObj) {
                if (question !== 'site') {
                    StudentDataService.allData[organism][i][question] = '';
                }
            }
        });
        //clears class 
        self.studentDataService.allData.bur_oak[0].class = ""
    }

    //student-view.html on clicking species name, calls this function
    self.selectOrganism = function (organism, organismText) {
        //student-view on clicking the species name, set the selected organism variable name for use in ng-repeats
        self.selectedOrganism.selectedOrganism = organism;
        //student-view on clicking the species name, set the selected organism variable text for displaying on dom
        self.selectedOrganismText.selectedOrganismText = organismText;
        console.log('select organism:', self.selectedOrganism);
    }

    //success.html
    //can't use ng-href because the page needs to be loaded in order for it to bring you back to selecting
    //the class for some reason.
    self.loadStudentPage = function () {
        self.classSelected.classSelected = false;
        self.storage.clear();
        self.selectedOrganism.selectedOrganism = '';
        $location.path('#/');
    }

    function pgFormatDate(date) {
        // via https://stackoverflow.com/questions/44988104/remove-time-and-timezone-from-string-dates/44997832#44997832
        if (typeof date != "string") {
            date = date.toDateString();
        }

        if (date) {
            if (moment(date.substring(4, 15), 'MMM DD YYYY').isValid() && date.substring(4, 15).length === 11) {
                // this handles dates like: "Fri Jul 06 2017 22:10:08 GMT-0500 (CDT)"    
                return moment(date.substring(4, 15), 'MMM DD YYYY').format('YYYY-MM-DD');
            } else if (moment(date.substring(0, 10), "YYYY-MM-DD").isValid() && date.substring(0, 10).length === 10) {
                // this handles dates like: "2017-07-06T02:59:12.037Z" and "2017-07-06"
                return date.substring(0, 10);
            } else {
                throw 'Date not formatted correctly';
            }
        } else {
            throw 'Date must exists for availability to insert'
        }
    }
}]);