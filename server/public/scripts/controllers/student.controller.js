myApp.controller('StudentController', ['StudentService', 'StudentDataService', 'UserService', '$mdDialog', '$mdSidenav', '$location', function (StudentService, StudentDataService, UserService, $mdDialog, $mdSidenav, $location) {
    console.log('StudentController Loaded');

    var vm = this;
    //services intialize on page load
    vm.userService = UserService;
    vm.userObject = UserService.userObject;
    vm.studentService = StudentService;
    vm.studentDataService = StudentDataService;



    vm.showDialog = function ($event) {
        console.log('$event:', $event);
        // vm.currentSpecimenQuestions (assign questions based on species element clicked)
        $mdDialog.show({
            targetEvent: $event,
            controller: 'StudentController',
            controllerAs: 'sc',
            template: '<div id="observationDataEntry" layout="column" layout-align="start center">' +
            '<form ng-submit="sc.studentService.postAllData()">' +
            '<br>' +
            '<div layout="column" layout-align="start center">' +
            '<h1 style="font-family:Varela;">{{sc.studentService.selectedOrganismText.selectedOrganismText}} {{sc.studentService.site.site+1}}</h1>' +
            '<h2 style="font-family:Varela;">Do you see...</h2> ' +
            '<md-button class="markEverythingButton" ng-click="sc.markAll()">Mark Everything No</md-button><br>' +
            '</div>' +


            // ' <div flex layout="row" layout-padding layout-align="start center"><h2 flex style="max-width:300px; max-height: 300px; padding:15px;">Mark everything at once:</h2>' +
            // '<md-radio-group flex layout="row" ng-change="sc.markAll()" ng-model="sc.markAllData">' +

            // '<md-radio-button value="yes" flex class="md-primary">Y</md-radio-button>' +
            // '<md-radio-button value="no" flex class="md-primary">N</md-radio-button>' +
            // '<md-radio-button value="maybe" flex class="md-primary">?</md-radio-button>' +
            // '</md-radio-group></div>' +

            '<div ng-repeat="question in sc.studentDataService.questionsByOrganism.questions[sc.studentService.selectedOrganism.selectedOrganism]" class="row" ng-class-odd="\'odd\'"' +
            'ng-class-even="\'even\'">' +
            '<div flex layout="row" layout-padding layout-align="start center">' +
            '<h2 style="font-family:Varela;" ng-if="question.text != \'Notes\' " flex style="max-width:300px; max-height: 300px; padding:15px;">{{question.text}}?</h2>' +
            '<md-radio-group flex layout="row" ng-if="question.text != \'Notes\' " ng-model="sc.studentDataService.allData[sc.studentService.selectedOrganism.selectedOrganism][sc.studentService.site.site][question.property]">' +
            '<md-radio-button value="yes" flex class="md-primary" style="font-family:Varela;">Y</md-radio-button>' +
            '<md-radio-button value="no" flex class="md-primary" style="font-family:Varela;">N</md-radio-button>' +
            '<md-radio-button value="maybe"  flex class="md-primary" style="font-family:Varela;">?</md-radio-button>' +
            '</md-radio-group>' +
            '<md-input-container ng-if="question.text == \'Notes\' " id="textarea">' +
            '<label id="notes" style="font-family:Varela;">Notes:</label>' +
            '<textarea md-no-autogrow rows="4" cols="50" ng-model="sc.studentDataService.allData[sc.studentService.selectedOrganism.selectedOrganism][sc.studentService.site.site][question.property]"></textarea>' +
            '</md-input-container>' +
            '</div>' +
            '</div>' +
            '</form>' +
            '<br>' +
            '<div layout="row" layout-align="end center">' +
            '<md-button class= "formResetButton" ng-click="sc.studentService.resetForm();">Reset</md-button>' +
            '<md-button class= "formCloseButton"ng-click="sc.closeDialog()">Save and Close</md-button>' +
            '</div>' +
            '</div>',
            clickOutsideToClose: true
        }).catch(function () {
            console.log('I get called on escape and clickoutside, allData: ');
            //add data to local storage on close of the dialog
            var allDataString = JSON.stringify(vm.studentDataService.allData);
            vm.studentService.storage.setItem('allData', allDataString);
            //console.log(allDataString);
            var testing = JSON.parse(StudentService.storage.getItem('allData'));
            console.log('storage: ');
            console.log(testing);


        });
    }
    vm.closeDialog = function () { //this is the save and close button on the student data dialog
        //console.log('close button clicked')
        //save data to local storage
        var allDataString = JSON.stringify(vm.studentDataService.allData);
        vm.studentService.storage.setItem('allData', allDataString);
        $mdDialog.hide();
    }

    vm.markAll = function () {
        for (i = 0; i < vm.studentDataService.questionsByOrganism.questions[vm.studentService.selectedOrganism.selectedOrganism].length - 1; i++) {
            currentProperty = vm.studentDataService.questionsByOrganism.questions[vm.studentService.selectedOrganism.selectedOrganism][i].property;
            vm.studentDataService.allData[vm.studentService.selectedOrganism.selectedOrganism][vm.studentService.site.site][currentProperty] = "no"
        }
    }

    //checks for local storage and shows continue dialog if needed
    vm.checkLocalOnLoad = function () {
        console.log('onload function working, offline storage:', vm.studentService.showStartContinue.showStartContinue)
        if (vm.studentService.showStartContinue.showStartContinue) {
            vm.showContinueDialog();
        }
    }

    //prompts user to start over or continue with data in local storage
    vm.showContinueDialog = function () {
        var confirm = $mdDialog.confirm()
            .title('It looks like you were already collecting some data today')
            .textContent('Do you want to start where you left off or start over completely?')
            .ariaLabel('Continue from last save?')
           // .targetEvent(ev)
            .ok('Please start over')
            .cancel('Keep using my old data');

        $mdDialog.show(confirm).then(function () {
          //  vm.status = 'You decided to start over.';
            console.log('You decided to start over.')
            StudentService.clearLocalStorage();
        }, function () {
          //  vm.status = 'You decided to continue.';
            console.log('You decided to continue.')
            StudentService.continueSession()
        });
    };


    // for back button to re-set class selection
    vm.resetClassSelection = function () {
        location.reload();
        $location.path('#/');
    };

 document.onload = vm.checkLocalOnLoad() //checks for local storage on page load
}]);