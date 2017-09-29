myApp.controller('StudentController', ['UserService', '$mdDialog', '$mdSidenav', function (UserService, $mdDialog, $mdSidenav) {
    console.log('StudentController Loaded');

    var vm = this;
    vm.userService = UserService;
    vm.userObject = UserService.userObject;
    vm.class = "";
    vm.appSetup = true;
    
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
    vm.forbQuestions = ['Initial growth', 'Leaves', 'Flowers or flower buds', 'Open flowers', 'Fruits', 'Ripe fruits', 'Recent fruits or seed drop'];
    vm.birdQuestions = ['Active individuals', 'Feeding', 'Fruit/seed consumption', 'Insect consumption', 'Calls or song', 'Singing individuals', 'Territorial individuals', 'Courtship', 'Mating', 'Nest building', 'Occupied nest', 'Nestlings', 'Fledged young', 'Dead individuals', 'Dead nestlings or fledglings', 'Individuals at a feeding station'];
    vm.mammalQuestions = ['Active individuals', 'Feeding', 'Young individuals', 'Dead individuals'];

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


    
      vm.submit = function() {
        console.log('selected class is', vm.class)
        vm.appSetup = false;
      }
}]);