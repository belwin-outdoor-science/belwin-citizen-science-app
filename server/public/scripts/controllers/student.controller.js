myApp.controller('StudentController', ['StudentService', 'UserService', '$mdDialog', '$mdSidenav', function (StudentService, UserService, $mdDialog, $mdSidenav) {
    console.log('StudentController Loaded');

    var vm = this;
    vm.userService = UserService;
    vm.studentService = StudentService;
    vm.userObject = UserService.userObject;
    vm.class = "";
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


    vm.showDialog = function($event) {
        console.log('$event:', $event);
        // vm.currentSpecimenQuestions (assign questions based on species element clicked)
        $mdDialog.show({
            targetEvent: $event,
            controller: 'StudentController',
            controllerAs: 'sc',
            templateUrl: '/views/templates/observations.html'
        });
    }

    vm.selectedOrganism = ""


    vm.selectOrganism = function(organism){
        vm.selectedOrganism = organism;
        console.log('select organism:', organism)
    }
      vm.submit = function () {
        console.log('selected class is', vm.class)
        vm.appSetup = false;
       
        for (var organism in vm.allData) { 
          vm.allData[organism].map(function(object) {
            object.class = vm.class;
          });
        }
      }

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
}]);