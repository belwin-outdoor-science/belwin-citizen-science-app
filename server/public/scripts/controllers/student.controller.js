myApp.controller('StudentController', ['StudentService', 'UserService', '$mdDialog', '$mdSidenav', function (StudentService, UserService, $mdDialog, $mdSidenav) {
    console.log('StudentController Loaded');



    var vm = this;
    vm.userService = UserService;
    vm.studentService = StudentService;
    vm.userObject = UserService.userObject;
    vm.class = {
        class: ''
    };
    vm.appSetup = true;
    vm.allData = StudentService.allData

    console.log('All data:', vm.allData);

    vm.selectedOrganism = StudentService.selectedOrganism;
    vm.selectedOrganismText = StudentService.selectedOrganismText;

    vm.selectOrganism = StudentService.selectOrganism
    vm.submit = StudentService.submit

    vm.postAllData = StudentService.postAllData

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
                '<h2>Do you see...</h2> ' +
                '<br>' +
                '<div ng-repeat="question in sc.questionsByOrganism[sc.selectedOrganism.selectedOrganism]" class="row" ng-class-odd= "\'odd\'"' +
                'ng-class-even="\'even\'">' +
                '<div flex layout="row" layout-padding layout-align="start center">' +
                '<h2 ng-if="question.text != \'Notes\' " flex style="max-width:300px; max-height: 300px; padding:15px;">{{question.text}}?</h2>' +
                '<md-radio-group flex layout="row" ng-if="question.text != \'Notes\' " ng-model="sc.studentService.allData[sc.selectedOrganism.selectedOrganism][sc.studentService.site.site][question.property]">' +
                '<md-radio-button value="yes" ng-model="sc.studentService.allData[organism][sc.studentService.site.site][question.property]"' +
                'flex class="md-primary">Y</md-radio-button>' +
                '<md-radio-button value="no" ng-model="sc.studentService.allData[organism][sc.studentService.site.site][question.property]"' +
                'flex class="md-primary">N</md-radio-button>' +
                '<md-radio-button value="maybe" ng-model="sc.studentService.allData[organism][sc.studentService.site.site][question.property]"' +
                'flex class="md-primary">?</md-radio-button>' +
                '</md-radio-group>' +
                '<md-input-container ng-if="question.text == \'Notes\' " id="textarea">' +
                '<label id="notes">Notes:</label>' +
                '<textarea rows="3" cols="50" ng-model="sc.allData[organism][sc.studentService.site.site][question.property]"></textarea>' +
                '</md-input-container>' +
                '</div>' +
                '</div>' +
                '</form>' +
                '<md-button ng-click="sc.studentService.resetForm();">Reset</md-button>' +
                '<md-button ng-click="sc.closeDialog()">Save and Close</md-button>' +
                '</div>',
            clickOutsideToClose: true
        });
    }
    vm.closeDialog = function () {
        console.log('close button clicked')
        $mdDialog.hide();
    }

    // ng-model names
    vm.questionsByOrganism = {};
    var questionArray = [];


    for (var organism in vm.allData) {
        questionArray = [];
        for (var question in vm.allData[organism][0]) {
            var questionObj = {};
            if (question !== 'class' && question !== 'site') {
                questionObj.property = question;
                question = question.replace(/_/g, ' ');
                question = question.charAt(0).toUpperCase() + question.slice(1);
                questionObj.text = question;
                questionArray.push(questionObj);
            }
        }
        vm.questionsByOrganism[organism] = questionArray;
    }

    vm.submitData = function () {
        if (navigator.onLine) {
            console.log('ok, we can send the data')
            //and then send it
            vm.postAllData();
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

    vm.submit = function () {
        console.log('selected class is', vm.class.class)
        vm.appSetup = false;
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

}]);