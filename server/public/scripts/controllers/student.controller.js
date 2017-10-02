myApp.controller('StudentController', ['StudentService', 'UserService', '$mdDialog', '$mdSidenav', function (StudentService, UserService, $mdDialog, $mdSidenav) {
    console.log('StudentController Loaded');

    var vm = this;
    vm.userService = UserService;
    vm.studentService = StudentService;
    vm.userObject = UserService.userObject;
    vm.class = { class: '' };
    vm.appSetup = true;
    vm.allData = StudentService.allData

    vm.openLeftMenu = function () {
        $mdSidenav('left').toggle();
    };

    vm.burOakOne = {
        breaking_leaf_buds: "",
        leaves: "",
        increasing_leaf_size: "",
        colored_leaves: "",
        falling_leaves: "",
        flowers_or_flower_buds: "",
        open_flowers: "",
        pollen_release: "",
        fruits: "",
        ripe_fruits: "",
        recent_fruit_or_seed_drop: "",
        notes: ""
    };

    vm.deciduousTreeQuestions = ['Breaking leaf buds', 'Leaves', 'Increasing leaf size', 'Colored leaves', 'Falling leaves', 'Flowers or flower buds', 'Open flowers', 'Pollen release', 'Fruits', 'Ripe fruits', 'Recent fruit or seed drop'];


    vm.showDialog = function ($event) {
        console.log('$event:', $event);
        // vm.currentSpecimenQuestions (assign questions based on species element clicked)
        $mdDialog.show({
            targetEvent: $event,
            controller: 'StudentController',
            controllerAs: 'sc',
            templateUrl: '/views/templates/observations.html'
        });
    }

    vm.selectedOrganism = StudentService.selectedOrganism;
    vm.selectedOrganismText = StudentService.selectedOrganismText ;



    vm.selectOrganism = StudentService.selectOrganism
    vm.submit = StudentService.submit

    //assign site number with an ng-click

    //send dynamically information to the observation form

    vm.organisms = Object.keys(vm.allData);

    // ng-model names
    vm.questionsByOrganism = {};
    var questionArray = [];
    for (var organism in vm.allData) {
        questionArray = [];
        for (var question in vm.allData[organism][0]) {
            var questionObj = {};
            if (question !== 'class' || question !== 'site_number') {
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
            console.log('ok, we can send the data') //and then send it
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

    vm.site = "";
    vm.setSite = function (site) {
        console.log("site:", site, vm.allData);
        vm.site = site;
    }

    vm.submit = function () {
        console.log('selected class is', vm.class.class)
        vm.appSetup = false;
    }

}]);