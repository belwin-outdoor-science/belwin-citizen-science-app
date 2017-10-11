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
            '<h1>{{sc.studentService.selectedOrganismText.selectedOrganismText}} {{sc.studentService.site.site+1}}</h1>' +
            '<h2>Do you see...</h2> ' +
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
            '<h2 ng-if="question.text != \'Notes\' " flex style="max-width:300px; max-height: 300px; padding:15px;">{{question.text}}?</h2>' +
            '<md-radio-group flex layout="row" ng-if="question.text != \'Notes\' " ng-model="sc.studentDataService.allData[sc.studentService.selectedOrganism.selectedOrganism][sc.studentService.site.site][question.property]">' +
            '<md-radio-button value="yes" flex class="md-primary">Y</md-radio-button>' +
            '<md-radio-button value="no" flex class="md-primary">N</md-radio-button>' +
            '<md-radio-button value="maybe"  flex class="md-primary">?</md-radio-button>' +
            '</md-radio-group>' +
            '<md-input-container ng-if="question.text == \'Notes\' " id="textarea">' +
            '<label id="notes">Notes:</label>' +
            '<textarea rows="3" cols="50" ng-model="sc.studentDataService.allData[sc.studentService.selectedOrganism.selectedOrganism][sc.studentService.site.site][question.property]"></textarea>' +
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
        }).finally(function () {
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

    vm.checkLocalOnLoad = function () {
        console.log('onload function working, offline storage:', vm.studentService.showStartContinue.showStartContinue)
        if (vm.studentService.showStartContinue.showStartContinue) {
            // vm.showContinueDialog();
        }
    }

    vm.showContinueDialog = function () {
    
        $mdDialog.show({
            // targetEvent: $event,
            controller: 'StudentController',
            controllerAs: 'sc',
            template: '<div id="continueSavedData">' +
            '<p>It looks like you were already collecting some data - do you want to start over?</p>' +
            '</div>',
            clickOutsideToClose: false
        // }).finally(function () {
            // console.log('I get called on escape and clickoutside, allData: ');
            // //add data to local storage on close of the dialog
            // var allDataString = JSON.stringify(vm.studentDataService.allData);
            // vm.studentService.storage.setItem('allData', allDataString);
            // //console.log(allDataString);
            // var testing = JSON.parse(StudentService.storage.getItem('allData'));
            // console.log('storage: ');
            // console.log(testing);


        });
    }

    // for back button to re-set class selection
    vm.resetClassSelection = function () {
        location.reload();
        $location.path('#/');
    };

    document.onload = vm.checkLocalOnLoad();
}]);