myApp.controller('StudentController', ['StudentService', 'StudentDataService','UserService', '$mdDialog', '$mdSidenav', function (StudentService, StudentDataService, UserService, $mdDialog, $mdSidenav) {
    console.log('StudentController Loaded');

    var vm = this;
    //services intialize on page load
    vm.userService = UserService;
    vm.userObject = UserService.userObject;
    vm.studentService = StudentService;
    vm.studentDataService = StudentDataService;

    //This is creates all the questions that are displayed in the $mdDialog
    StudentService.questionCreator();

    vm.showDialog = function ($event) {
        console.log('$event:', $event);
        // vm.currentSpecimenQuestions (assign questions based on species element clicked)
        $mdDialog.show({
            targetEvent: $event,
            controller: 'StudentController',
            controllerAs: 'sc',
            template: '<div id="observationDataEntry">' +
                '<form ng-submit="sc.studentService.postAllData()">' +
                '<br>' +
                '<h2>{{sc.studentService.selectedOrganismText.selectedOrganismText}} {{sc.studentService.site.site+1}}</h2>' +
                '<h2>Do you see...</h2> ' +
                '<br>' +
                '<div ng-repeat="question in sc.studentService.questionsByOrganism.questions[sc.studentService.selectedOrganism.selectedOrganism]" class="row" ng-class-odd="\'odd\'"' +
                'ng-class-even="\'even\'">' +
                '<div flex layout="row" layout-padding layout-align="start center">' +
                '<h2 ng-if="question.text != \'Notes\' " flex style="max-width:300px; max-height: 300px; padding:15px;">{{question.text}}?</h2>' +
                '<md-radio-group flex layout="row" ng-if="question.text != \'Notes\' " ng-model="sc.studentService.allData[sc.studentService.selectedOrganism.selectedOrganism][sc.studentService.site.site][question.property]">' +
                '<md-radio-button value="yes" flex class="md-primary">Y</md-radio-button>' +
                '<md-radio-button value="no" flex class="md-primary">N</md-radio-button>' +
                '<md-radio-button value="maybe"  flex class="md-primary">?</md-radio-button>' +
                '</md-radio-group>' +
                '<md-input-container ng-if="question.text == \'Notes\' " id="textarea">' +
                '<label id="notes">Notes:</label>' +
                '<textarea rows="3" cols="50" ng-model="sc.studentService.allData[sc.studentService.selectedOrganism.selectedOrganism][sc.studentService.site.site][question.property]"></textarea>' +
                '</md-input-container>' +
                '</div>' +
                '</div>' +
                '</form>' +
                '<md-button ng-click="sc.studentService.resetForm();">Reset</md-button>' +
                '<md-button ng-click="sc.closeDialog()">Save and Close</md-button>' +
                '</div>',
            clickOutsideToClose: true
        })  .finally(function() {
            console.log('I get called on escape and clickoutside');
            //add data to local storage on close of the dialog
            var allDataString = JSON.stringify(StudentService.allData);
            StudentService.storage.setItem('allData', allDataString);
            var test = StudentService.storage.getItem('allData');
        });
    }
    vm.closeDialog = function () { //this is the save and close button on the student data dialog
        console.log('close button clicked')
        //save data to local storage
        var allDataString = JSON.stringify(StudentService.allData);
        StudentService.storage.setItem('allData', allDataString);
        $mdDialog.hide();
    }

}]);