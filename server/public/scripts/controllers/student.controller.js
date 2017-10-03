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
    vm.selectedOrganismText = StudentService.selectedOrganismText;



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



    vm.submit = function () {
        console.log('selected class is', vm.class.class)
        vm.appSetup = false;
    }

}]);

// Type

// PLANTS
// MAMMALS
// BIRDS
// Species

// Belwin Citizen Science
// You are in: Class 1

// {
//     "bur_oak": [{
//         "property": "class",
//         "text": "Class"
//     }, {
//         "property": "site",
//         "text": "Site"
//     }, {
//         "property": "breaking_leaf_buds",
//         "text": "Breaking leaf buds"
//     }, {
//         "property": "leaves",
//         "text": "Leaves"
//     }, {
//         "property": "increasing_leaf_size",
//         "text": "Increasing leaf size"
//     }, {
//         "property": "colored_leaves",
//         "text": "Colored leaves"
//     }, {
//         "property": "falling_leaves",
//         "text": "Falling leaves"
//     }, {
//         "property": "flowers_or_flower_buds",
//         "text": "Flowers or flower buds"
//     }, {
//         "property": "open_flowers",
//         "text": "Open flowers"
//     }, {
//         "property": "pollen_release",
//         "text": "Pollen release"
//     }, {
//         "property": "fruits",
//         "text": "Fruits"
//     }, {
//         "property": "ripe_fruits",
//         "text": "Ripe fruits"
//     }, {
//         "property": "recent_fruit_or_seed_drop",
//         "text": "Recent fruit or seed drop"
//     }, {
//         "property": "notes",
//         "text": "Notes"
//     }],
//     "common_buckthorn": [{
//         "property": "class",
//         "text": "Class"
//     }, {
//         "property": "site",
//         "text": "Site"
//     }, {
//         "property": "breaking_leaf_buds",
//         "text": "Breaking leaf buds"
//     }, {
//         "property": "leaves",
//         "text": "Leaves"
//     }, {
//         "property": "increasing_leaf_size",
//         "text": "Increasing leaf size"
//     }, {
//         "property": "colored_leaves",
//         "text": "Colored leaves"
//     }, {
//         "property": "falling_leaves",
//         "text": "Falling leaves"
//     }, {
//         "property": "flowers_or_flower_buds",
//         "text": "Flowers or flower buds"
//     }, {
//         "property": "open_flowers",
//         "text": "Open flowers"
//     }, {
//         "property": "pollen_release",
//         "text": "Pollen release"
//     }, {
//         "property": "fruits",
//         "text": "Fruits"
//     }, {
//         "property": "ripe_fruits",
//         "text": "Ripe fruits"
//     }, {
//         "property": "recent_fruit_or_seed_drop",
//         "text": "Recent fruit or seed drop"
//     }, {
//         "property": "notes",
//         "text": "Notes"
//     }],
//     "northern_red_oak": [{
//         "property": "class",
//         "text": "Class"
//     }, {
//         "property": "site",
//         "text": "Site"
//     }, {
//         "property": "breaking_leaf_buds",
//         "text": "Breaking leaf buds"
//     }, {
//         "property": "leaves",
//         "text": "Leaves"
//     }, {
//         "property": "increasing_leaf_size",
//         "text": "Increasing leaf size"
//     }, {
//         "property": "colored_leaves",
//         "text": "Colored leaves"
//     }, {
//         "property": "falling_leaves",
//         "text": "Falling leaves"
//     }, {
//         "property": "flowers_or_flower_buds",
//         "text": "Flowers or flower buds"
//     }, {
//         "property": "open_flowers",
//         "text": "Open flowers"
//     }, {
//         "property": "pollen_release",
//         "text": "Pollen release"
//     }, {
//         "property": "fruits",
//         "text": "Fruits"
//     }, {
//         "property": "ripe_fruits",
//         "text": "Ripe fruits"
//     }, {
//         "property": "recent_fruit_or_seed_drop",
//         "text": "Recent fruit or seed drop"
//     }, {
//         "property": "notes",
//         "text": "Notes"
//     }],
//     "common_milkweed": [{
//         "property": "class",
//         "text": "Class"
//     }, {
//         "property": "site",
//         "text": "Site"
//     }, {
//         "property": "initial_growth",
//         "text": "Initial growth"
//     }, {
//         "property": "leaves",
//         "text": "Leaves"
//     }, {
//         "property": "flowers_or_flower_buds",
//         "text": "Flowers or flower buds"
//     }, {
//         "property": "open_flowers",
//         "text": "Open flowers"
//     }, {
//         "property": "fruits",
//         "text": "Fruits"
//     }, {
//         "property": "ripe_fruits",
//         "text": "Ripe fruits"
//     }, {
//         "property": "recent_fruit_or_seed_drop",
//         "text": "Recent fruit or seed drop"
//     }, {
//         "property": "notes",
//         "text": "Notes"
//     }],
//     "paper_birch": [{
//         "property": "class",
//         "text": "Class"
//     }, {
//         "property": "site",
//         "text": "Site"
//     }, {
//         "property": "breaking_leaf_buds",
//         "text": "Breaking leaf buds"
//     }, {
//         "property": "leaves",
//         "text": "Leaves"
//     }, {
//         "property": "increasing_leaf_size",
//         "text": "Increasing leaf size"
//     }, {
//         "property": "colored_leaves",
//         "text": "Colored leaves"
//     }, {
//         "property": "falling_leaves",
//         "text": "Falling leaves"
//     }, {
//         "property": "flowers_or_flower_buds",
//         "text": "Flowers or flower buds"
//     }, {
//         "property": "open_flowers",
//         "text": "Open flowers"
//     }, {
//         "property": "pollen_release",
//         "text": "Pollen release"
//     }, {
//         "property": "fruits",
//         "text": "Fruits"
//     }, {
//         "property": "ripe_fruits",
//         "text": "Ripe fruits"
//     }, {
//         "property": "recent_fruit_or_seed_drop",
//         "text": "Recent fruit or seed drop"
//     }, {
//         "property": "notes",
//         "text": "Notes"
//     }],
//     "quaking_aspen": [{
//         "property": "class",
//         "text": "Class"
//     }, {
//         "property": "site",
//         "text": "Site"
//     }, {
//         "property": "breaking_leaf_buds",
//         "text": "Breaking leaf buds"
//     }, {
//         "property": "leaves",
//         "text": "Leaves"
//     }, {
//         "property": "increasing_leaf_size",
//         "text": "Increasing leaf size"
//     }, {
//         "property": "colored_leaves",
//         "text": "Colored leaves"
//     }, {
//         "property": "falling_leaves",
//         "text": "Falling leaves"
//     }, {
//         "property": "flowers_or_flower_buds",
//         "text": "Flowers or flower buds"
//     }, {
//         "property": "open_flowers",
//         "text": "Open flowers"
//     }, {
//         "property": "pollen_release",
//         "text": "Pollen release"
//     }, {
//         "property": "fruits",
//         "text": "Fruits"
//     }, {
//         "property": "ripe_fruits",
//         "text": "Ripe fruits"
//     }, {
//         "property": "recent_fruit_or_seed_drop",
//         "text": "Recent fruit or seed drop"
//     }, {
//         "property": "notes",
//         "text": "Notes"
//     }],
//     "ground_squirrel": [{
//         "property": "class",
//         "text": "Class"
//     }, {
//         "property": "site",
//         "text": "Site"
//     }, {
//         "property": "active_individuals",
//         "text": "Active individuals"
//     }, {
//         "property": "feeding",
//         "text": "Feeding"
//     }, {
//         "property": "young_individuals",
//         "text": "Young individuals"
//     }, {
//         "property": "dead_individuals",
//         "text": "Dead individuals"
//     }, {
//         "property": "notes",
//         "text": "Notes"
//     }],
//     "eastern_bluebird": [{
//         "property": "class",
//         "text": "Class"
//     }, {
//         "property": "site",
//         "text": "Site"
//     }, {
//         "property": "active_individuals",
//         "text": "Active individuals"
//     }, {
//         "property": "feeding",
//         "text": "Feeding"
//     }, {
//         "property": "fruit_seed_consumption",
//         "text": "Fruit seed consumption"
//     }, {
//         "property": "insect_consumption",
//         "text": "Insect consumption"
//     }, {
//         "property": "calls_or_song",
//         "text": "Calls or song"
//     }, {
//         "property": "singing_individuals",
//         "text": "Singing individuals"
//     }, {
//         "property": "territorial_individuals",
//         "text": "Territorial individuals"
//     }, {
//         "property": "courtship",
//         "text": "Courtship"
//     }, {
//         "property": "mating",
//         "text": "Mating"
//     }, {
//         "property": "nest_building",
//         "text": "Nest building"
//     }, {
//         "property": "occupied_nest",
//         "text": "Occupied nest"
//     }, {
//         "property": "nestlings",
//         "text": "Nestlings"
//     }, {
//         "property": "fledged_young",
//         "text": "Fledged young"
//     }, {
//         "property": "dead_individuals",
//         "text": "Dead individuals"
//     }, {
//         "property": "dead_nestlings_or_fledlings",
//         "text": "Dead nestlings or fledlings"
//     }, {
//         "property": "individuals_at_feeding_station",
//         "text": "Individuals at feeding station"
//     }, {
//         "property": "notes",
//         "text": "Notes"
//     }],
//     "dark_eyed_junco": [{
//         "property": "class",
//         "text": "Class"
//     }, {
//         "property": "site",
//         "text": "Site"
//     }, {
//         "property": "active_individuals",
//         "text": "Active individuals"
//     }, {
//         "property": "feeding",
//         "text": "Feeding"
//     }, {
//         "property": "fruit_seed_consumption",
//         "text": "Fruit seed consumption"
//     }, {
//         "property": "insect_consumption",
//         "text": "Insect consumption"
//     }, {
//         "property": "calls_or_song",
//         "text": "Calls or song"
//     }, {
//         "property": "singing_individuals",
//         "text": "Singing individuals"
//     }, {
//         "property": "territorial_individuals",
//         "text": "Territorial individuals"
//     }, {
//         "property": "courtship",
//         "text": "Courtship"
//     }, {
//         "property": "mating",
//         "text": "Mating"
//     }, {
//         "property": "nest_building",
//         "text": "Nest building"
//     }, {
//         "property": "occupied_nest",
//         "text": "Occupied nest"
//     }, {
//         "property": "nestlings",
//         "text": "Nestlings"
//     }, {
//         "property": "fledged_young",
//         "text": "Fledged young"
//     }, {
//         "property": "dead_individuals",
//         "text": "Dead individuals"
//     }, {
//         "property": "dead_nestlings_or_fledlings",
//         "text": "Dead nestlings or fledlings"
//     }, {
//         "property": "individuals_at_feeding_station",
//         "text": "Individuals at feeding station"
//     }, {
//         "property": "notes",
//         "text": "Notes"
//     }],
//     "ruby_throated_hummingbird": [{
//         "property": "class",
//         "text": "Class"
//     }, {
//         "property": "site",
//         "text": "Site"
//     }, {
//         "property": "active_individuals",
//         "text": "Active individuals"
//     }, {
//         "property": "feeding",
//         "text": "Feeding"
//     }, {
//         "property": "insect_consumption",
//         "text": "Insect consumption"
//     }, {
//         "property": "flower_consumption",
//         "text": "Flower consumption"
//     }, {
//         "property": "calls_or_song",
//         "text": "Calls or song"
//     }, {
//         "property": "singing_individuals",
//         "text": "Singing individuals"
//     }, {
//         "property": "territorial_individuals",
//         "text": "Territorial individuals"
//     }, {
//         "property": "courtship",
//         "text": "Courtship"
//     }, {
//         "property": "mating",
//         "text": "Mating"
//     }, {
//         "property": "nest_building",
//         "text": "Nest building"
//     }, {
//         "property": "occupied_nest",
//         "text": "Occupied nest"
//     }, {
//         "property": "nestlings",
//         "text": "Nestlings"
//     }, {
//         "property": "fledged_young",
//         "text": "Fledged young"
//     }, {
//         "property": "dead_individuals",
//         "text": "Dead individuals"
//     }, {
//         "property": "dead_nestlings_or_fledlings",
//         "text": "Dead nestlings or fledlings"
//     }, {
//         "property": "individuals_at_feeding_station",
//         "text": "Individuals at feeding station"
//     }, {
//         "property": "notes",
//         "text": "Notes"
//     }]
// }["bur_oak", "common_buckthorn", "northern_red_oak", "common_milkweed", "paper_birch", "quaking_aspen", "ground_squirrel", "eastern_bluebird", "dark_eyed_junco", "ruby_throated_hummingbird"]