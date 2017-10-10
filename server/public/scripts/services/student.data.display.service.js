myApp.service('StudentDataDisplayService', ['$http', '$location', '$mdDialog', 'StudentDataService', function ($http, $location, $mdDialog, StudentDataService) {
    console.log('StudentDataDisplayService loaded');
    var self = this;
    self.studentDataService = StudentDataService;
    self.selectedCategory = {
        selectedCategory: ''
    };
    self.selectedOrganism = {
        selectedOrganism: ''
    };
    self.organisms = {
        plants: [
            { underscore: 'bur_oak', space: 'Bur oak' },
            { underscore: 'quaking_aspen', space: 'Quaking aspen' },
            { underscore: 'common_buckthorn', space: 'Common buckthron' },
            { underscore: 'paper_birch', space: 'Paper birch' },
            { underscore: 'milkweed', space: 'Milkweed' },
            { underscore: 'red_oak', space: 'Red oak' }
        ],
        mammals: [
            { underscore: 'ground_squirrel', space: 'Ground squirrel' }
        ],
        birds: [
            { underscore: 'ruby_throated_hummingbird', space: 'Ruby-throated hummingbird' },
            { underscore: 'dark_eyed_junco', space: 'Dark-eyed junco' },
            { underscore: 'eastern_bluebird', space: 'Eastern bluebird' }
        ]
    }

    

    self.selectCategory = function (category) {
        self.selectedCategory.selectedCategory = category;
        console.log('selectCategory clicked');

    }

    self.selectOrganism = function (organism) {
        self.selectedOrganism.selectedOrganism = organism.underscore;
        console.log('selected organism: ');
        console.log(self.selectedOrganism.selectedOrganism);
        
    }

}]);