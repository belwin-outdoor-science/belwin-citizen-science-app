myApp.service('StudentDataDisplayService', ['$http', '$location', '$mdDialog', 'StudentDataService', function ($http, $location, $mdDialog, StudentDataService) {
    console.log('StudentDataDisplayService loaded');
    var self = this;
    self.studentDataService = StudentDataService;
self.selectedCategory = {
    selectedCategory: ''
}
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
}]);