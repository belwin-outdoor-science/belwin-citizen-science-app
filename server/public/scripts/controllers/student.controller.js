myApp.controller('StudentController', ['StudentService', 'UserService', '$mdDialog', '$mdSidenav', function (StudentService, UserService, $mdDialog, $mdSidenav) {
    console.log('StudentController Loaded');

    var vm = this;
    //services intialize on page load
    vm.userService = UserService;
    vm.studentService = StudentService;
    vm.userObject = UserService.userObject;
    
    //main data object. accounts for all 10 species types
    vm.allData = StudentService.allData

    //these variables change $mdDialog form content depending on what species is selected. Also these Organism dictate which orgaism in displayed on the dom.
    //This selectedOrganism is initialized by button click in the student nav species buttons.
    vm.selectedOrganism = StudentService.selectedOrganism;
    vm.selectedOrganismText = StudentService.selectedOrganismText;
    //This is creates all the questions that are displayed in the $mdDialog
    StudentService.questionCreator();

    vm.selectOrganism = StudentService.selectOrganism
    vm.submit = StudentService.submit

    //adds contents of $mdDialog form to allData object. Updates only sspecific species and relative site
    vm.postAllData = StudentService.postAllData

    //account for all species arrays in allData object
    vm.organisms = Object.keys(vm.allData);

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
                '<h2>{{sc.selectedOrganismText.selectedOrganismText}} {{sc.studentService.site.site+1}}</h2>' +
                '<h2>Do you see...</h2> ' +
                '<br>' +
                '<div ng-repeat="question in sc.studentService.questionsByOrganism.questions[sc.selectedOrganism.selectedOrganism]" class="row" ng-class-odd="\'odd\'"' +
                'ng-class-even="\'even\'">' +
                '<div flex layout="row" layout-padding layout-align="start center">' +
                '<h2 ng-if="question.text != \'Notes\' " flex style="max-width:300px; max-height: 300px; padding:15px;">{{question.text}}?</h2>' +
                '<md-radio-group flex layout="row" ng-if="question.text != \'Notes\' " ng-model="sc.studentService.allData[sc.selectedOrganism.selectedOrganism][sc.studentService.site.site][question.property]">' +
                '<md-radio-button value="yes" flex class="md-primary">Y</md-radio-button>' +
                '<md-radio-button value="no" flex class="md-primary">N</md-radio-button>' +
                '<md-radio-button value="maybe"  flex class="md-primary">?</md-radio-button>' +
                '</md-radio-group>' +
                '<md-input-container ng-if="question.text == \'Notes\' " id="textarea">' +
                '<label id="notes">Notes:</label>' +
                '<textarea rows="3" cols="50" ng-model="sc.allData[sc.selectedOrganism.selectedOrganism][sc.studentService.site.site][question.property]"></textarea>' +
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




    //this array of images is sorted through in the student-view.html. Only one is displayed at a time.
    vm.imageArray = [{
            organismName: 'bur_oak',
            file: 'assets/bur-oak.jpg'
        },
        {
            organismName: 'common_buckthorn',
            file: 'assets/common-buckthorn.jpg'
        },
        {
            organismName: 'common_milkweed',
            file: 'assets/common-milkweed.jpg'
        },
        {
            organismName: 'dark_eyed_junco',
            file: 'assets/dark-eyed-junco.jpg'
        },
        {
            organismName: 'eastern_bluebird',
            file: 'assets/eastern-bluebird.jpg'
        },
        {
            organismName: 'ground_squirrel',
            file: 'assets/ground-squirrel.jpg'
        },
        {
            organismName: 'paper_birch',
            file: 'assets/paper-birch.jpg'
        },
        {
            organismName: 'quaking_aspen',
            file: 'assets/quaking-aspen.jpg'
        },
        {
            organismName: 'northern_red_oak',
            file: 'assets/red-oak.jpg'
        },
        {
            organismName: 'ruby_throated_hummingbird',
            file: 'assets/ruby-throated-hummingbird.jpg'
        }
    ]

    // checks if user is logged in on the student views, not completely working yet 
    // if (vm.userObject.userName){ 
    //     console.log('user is logged in as:', vm.userObject.userName);
    // } else {
    //     console.log('user is NOT logged in');
    // }
}]);