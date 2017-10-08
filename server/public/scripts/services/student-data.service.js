myApp.service('StudentDataService', ['$http', function ($http) {
    console.log('StudentDataService loaded');

    var self = this;
    self.allData = {};
    var NUM_SITES = 3;
    //this array of images is sorted through in the student-view.html. Only one is displayed at a time.
    self.imageArray = [{
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
    ];


    var representativeOrganisms = ['bur_oak', 'common_buckthorn', 'common_milkweed', 'ground_squirrel', 'eastern_bluebird', 'ruby_throated_hummingbird'];
    self.getTableColumns = function () {
        representativeOrganisms.forEach(function (organism) {
            getRequest(organism);
        });
    }

    function getRequest(organism) {
        $http.get('/data/' + organism).then(function (response) {
            self.allData[organism] = [];
            var organismObject = {};
            response.data.forEach(function (question) {
                if (question.column_name != 'id' && question.column_name != 'recorded') {
                    organismObject[question.column_name] = '';
                console.log('table column get, question: ');        
                console.log(question.column_name);
                     
                }
            });
            
            for (var i = 0; i < NUM_SITES; i++) {
                organismObject.site = (i + 1).toString(10);
                self.allData[organism].push(organismObject);
                console.log('organismObject');
                console.log(organismObject);
            }
            //organisms grouped by same questions:
            // bur_oak, paper_birch, northern_red_oak, 
            //common_buckthorn, 
            // common_milkweed
            // ground_squirrel
            // eastern_bluebird, dark_eyed_junco
            // ruby_throated_hummingbird
            if (organism == 'bur_oak') {
                var similarToBur_oak = ['paper_birch', 'northern_red_oak'];
                similarToBur_oak.forEach(function (species) {
                    self.allData[species] = [];
                    for (var i = 0; i < NUM_SITES; i++) {
                        self.allData[species].push(organismObject);
                    }
                });
            }
            if (organism == 'eastern_bluebird') {

                self.allData['dark_eyed_junco'] = [];
                for (var i = 0; i < NUM_SITES; i++) {
                    self.allData['dark_eyed_junco'].push(organismObject);
                }
            }

            //self.allData[organism] = response.data;
            // console.log('get route successful: ', self.userInfo);
        });
    }


    // self.allData = {
    //     //plants
    //     bur_oak: [{
    //         class: '',
    //         site: '1',
    //         breaking_leaf_buds: '',
    //         leaves: '',
    //         increasing_leaf_size: '',
    //         colored_leaves: '',
    //         falling_leaves: '',
    //         flowers_or_flower_buds: '',
    //         open_flowers: '',
    //         pollen_release: '',
    //         fruits: '',
    //         ripe_fruits: '',
    //         recent_fruit_or_seed_drop: '',
    //         notes: ''
    //     },
    //     {
    //         class: '',
    //         site: '2',
    //         breaking_leaf_buds: '',
    //         leaves: '',
    //         increasing_leaf_size: '',
    //         colored_leaves: '',
    //         falling_leaves: '',
    //         flowers_or_flower_buds: '',
    //         open_flowers: '',
    //         pollen_release: '',
    //         fruits: '',
    //         ripe_fruits: '',
    //         recent_fruit_or_seed_drop: '',
    //         notes: ''
    //     },
    //     {
    //         class: '',
    //         site: '3',
    //         breaking_leaf_buds: '',
    //         leaves: '',
    //         increasing_leaf_size: '',
    //         colored_leaves: '',
    //         falling_leaves: '',
    //         flowers_or_flower_buds: '',
    //         open_flowers: '',
    //         pollen_release: '',
    //         fruits: '',
    //         ripe_fruits: '',
    //         recent_fruit_or_seed_drop: '',
    //         notes: ''
    //     }
    //     ],
    //     common_buckthorn: [{
    //         class: '',
    //         site: '1',
    //         breaking_leaf_buds: '',
    //         leaves: '',
    //         increasing_leaf_size: '',
    //         colored_leaves: '',
    //         falling_leaves: '',
    //         flowers_or_flower_buds: '',
    //         open_flowers: '',
    //         fruits: '',
    //         ripe_fruits: '',
    //         recent_fruit_or_seed_drop: '',
    //         notes: ''
    //     },
    //     {
    //         class: '',
    //         site: '2',
    //         breaking_leaf_buds: '',
    //         leaves: '',
    //         increasing_leaf_size: '',
    //         colored_leaves: '',
    //         falling_leaves: '',
    //         flowers_or_flower_buds: '',
    //         open_flowers: '',
    //         fruits: '',
    //         ripe_fruits: '',
    //         recent_fruit_or_seed_drop: '',
    //         notes: ''
    //     },
    //     {
    //         class: '',
    //         site: '3',
    //         breaking_leaf_buds: '',
    //         leaves: '',
    //         increasing_leaf_size: '',
    //         colored_leaves: '',
    //         falling_leaves: '',
    //         flowers_or_flower_buds: '',
    //         open_flowers: '',
    //         fruits: '',
    //         ripe_fruits: '',
    //         recent_fruit_or_seed_drop: '',
    //         notes: ''
    //     }
    //     ],
    //     northern_red_oak: [{
    //         class: '',
    //         site: '1',
    //         breaking_leaf_buds: '',
    //         leaves: '',
    //         increasing_leaf_size: '',
    //         colored_leaves: '',
    //         falling_leaves: '',
    //         flowers_or_flower_buds: '',
    //         open_flowers: '',
    //         pollen_release: '',
    //         fruits: '',
    //         ripe_fruits: '',
    //         recent_fruit_or_seed_drop: '',
    //         notes: ''
    //     },
    //     {
    //         class: '',
    //         site: '2',
    //         breaking_leaf_buds: '',
    //         leaves: '',
    //         increasing_leaf_size: '',
    //         colored_leaves: '',
    //         falling_leaves: '',
    //         flowers_or_flower_buds: '',
    //         open_flowers: '',
    //         pollen_release: '',
    //         fruits: '',
    //         ripe_fruits: '',
    //         recent_fruit_or_seed_drop: '',
    //         notes: ''
    //     },
    //     {
    //         class: '',
    //         site: '3',
    //         breaking_leaf_buds: '',
    //         leaves: '',
    //         increasing_leaf_size: '',
    //         colored_leaves: '',
    //         falling_leaves: '',
    //         flowers_or_flower_buds: '',
    //         open_flowers: '',
    //         pollen_release: '',
    //         fruits: '',
    //         ripe_fruits: '',
    //         recent_fruit_or_seed_drop: '',
    //         notes: ''
    //     }
    //     ],
    //     common_milkweed: [{
    //         class: '',
    //         site: '1',
    //         initial_growth: '',
    //         leaves: '',
    //         flowers_or_flower_buds: '',
    //         open_flowers: '',
    //         fruits: '',
    //         ripe_fruits: '',
    //         recent_fruit_or_seed_drop: '',
    //         notes: ''
    //     },
    //     {
    //         class: '',
    //         site: '2',
    //         initial_growth: '',
    //         leaves: '',
    //         flowers_or_flower_buds: '',
    //         open_flowers: '',
    //         fruits: '',
    //         ripe_fruits: '',
    //         recent_fruit_or_seed_drop: '',
    //         notes: ''
    //     },
    //     {
    //         class: '',
    //         site: '3',
    //         initial_growth: '',
    //         leaves: '',
    //         flowers_or_flower_buds: '',
    //         open_flowers: '',
    //         fruits: '',
    //         ripe_fruits: '',
    //         recent_fruit_or_seed_drop: '',
    //         notes: ''
    //     }
    //     ],
    //     paper_birch: [{
    //         class: '',
    //         site: '1',
    //         breaking_leaf_buds: '',
    //         leaves: '',
    //         increasing_leaf_size: '',
    //         colored_leaves: '',
    //         falling_leaves: '',
    //         flowers_or_flower_buds: '',
    //         open_flowers: '',
    //         pollen_release: '',
    //         fruits: '',
    //         ripe_fruits: '',
    //         recent_fruit_or_seed_drop: '',
    //         notes: ''
    //     },
    //     {
    //         class: '',
    //         site: '2',
    //         breaking_leaf_buds: '',
    //         leaves: '',
    //         increasing_leaf_size: '',
    //         colored_leaves: '',
    //         falling_leaves: '',
    //         flowers_or_flower_buds: '',
    //         open_flowers: '',
    //         pollen_release: '',
    //         fruits: '',
    //         ripe_fruits: '',
    //         recent_fruit_or_seed_drop: '',
    //         notes: ''
    //     },
    //     {
    //         class: '',
    //         site: '3',
    //         breaking_leaf_buds: '',
    //         leaves: '',
    //         increasing_leaf_size: '',
    //         colored_leaves: '',
    //         falling_leaves: '',
    //         flowers_or_flower_buds: '',
    //         open_flowers: '',
    //         pollen_release: '',
    //         fruits: '',
    //         ripe_fruits: '',
    //         recent_fruit_or_seed_drop: '',
    //         notes: ''
    //     }
    //     ],
    //     quaking_aspen: [{
    //         class: '',
    //         site: '1',
    //         breaking_leaf_buds: '',
    //         leaves: '',
    //         increasing_leaf_size: '',
    //         colored_leaves: '',
    //         falling_leaves: '',
    //         flowers_or_flower_buds: '',
    //         open_flowers: '',
    //         pollen_release: '',
    //         fruits: '',
    //         ripe_fruits: '',
    //         recent_fruit_or_seed_drop: '',
    //         notes: ''
    //     },
    //     {
    //         class: '',
    //         site: '2',
    //         breaking_leaf_buds: '',
    //         leaves: '',
    //         increasing_leaf_size: '',
    //         colored_leaves: '',
    //         falling_leaves: '',
    //         flowers_or_flower_buds: '',
    //         open_flowers: '',
    //         pollen_release: '',
    //         fruits: '',
    //         ripe_fruits: '',
    //         recent_fruit_or_seed_drop: '',
    //         notes: ''
    //     },
    //     {
    //         class: '',
    //         site: '3',
    //         breaking_leaf_buds: '',
    //         leaves: '',
    //         increasing_leaf_size: '',
    //         colored_leaves: '',
    //         falling_leaves: '',
    //         flowers_or_flower_buds: '',
    //         open_flowers: '',
    //         pollen_release: '',
    //         fruits: '',
    //         ripe_fruits: '',
    //         recent_fruit_or_seed_drop: '',
    //         notes: ''
    //     }
    //     ],
    //     //mammals
    //     ground_squirrel: [{
    //         class: '',
    //         site: '1',
    //         active_individuals: '',
    //         feeding: '',
    //         young_individuals: '',
    //         dead_individuals: '',
    //         notes: ''
    //     },
    //     {
    //         class: '',
    //         site: '2',
    //         active_individuals: '',
    //         feeding: '',
    //         young_individuals: '',
    //         dead_individuals: '',
    //         notes: ''
    //     },
    //     {
    //         class: '',
    //         site: '3',
    //         active_individuals: '',
    //         feeding: '',
    //         young_individuals: '',
    //         dead_individuals: '',
    //         notes: ''
    //     }
    //     ],
    //     eastern_bluebird: [{
    //         class: '',
    //         site: '1',
    //         active_individuals: '',
    //         feeding: '',
    //         fruit_or_seed_consumption: '',
    //         insect_consumption: '',
    //         calls_or_song: '',
    //         singing_individuals: '',
    //         territorial_individuals: '',
    //         courtship: '',
    //         mating: '',
    //         nest_building: '',
    //         occupied_nest: '',
    //         nestlings: '',
    //         fledged_young: '',
    //         dead_individuals: '',
    //         dead_nestlings_or_fledglings: '',
    //         individuals_at_feeding_station: '',
    //         notes: ''
    //     },
    //     {
    //         class: '',
    //         site: '2',
    //         active_individuals: '',
    //         feeding: '',
    //         fruit_or_seed_consumption: '',
    //         insect_consumption: '',
    //         calls_or_song: '',
    //         singing_individuals: '',
    //         territorial_individuals: '',
    //         courtship: '',
    //         mating: '',
    //         nest_building: '',
    //         occupied_nest: '',
    //         nestlings: '',
    //         fledged_young: '',
    //         dead_individuals: '',
    //         dead_nestlings_or_fledglings: '',
    //         individuals_at_feeding_station: '',
    //         notes: ''
    //     },
    //     {
    //         class: '',
    //         site: '3',
    //         active_individuals: '',
    //         feeding: '',
    //         fruit_or_seed_consumption: '',
    //         insect_consumption: '',
    //         calls_or_song: '',
    //         singing_individuals: '',
    //         territorial_individuals: '',
    //         courtship: '',
    //         mating: '',
    //         nest_building: '',
    //         occupied_nest: '',
    //         nestlings: '',
    //         fledged_young: '',
    //         dead_individuals: '',
    //         dead_nestlings_or_fledglings: '',
    //         individuals_at_feeding_station: '',
    //         notes: ''
    //     }
    //     ],
    //     dark_eyed_junco: [{
    //         class: '',
    //         site: '1',
    //         active_individuals: '',
    //         feeding: '',
    //         fruit_or_seed_consumption: '',
    //         insect_consumption: '',
    //         calls_or_song: '',
    //         singing_individuals: '',
    //         territorial_individuals: '',
    //         courtship: '',
    //         mating: '',
    //         nest_building: '',
    //         occupied_nest: '',
    //         nestlings: '',
    //         fledged_young: '',
    //         dead_individuals: '',
    //         dead_nestlings_or_fledglings: '',
    //         individuals_at_feeding_station: '',
    //         notes: ''
    //     },
    //     {
    //         class: '',
    //         site: '2',
    //         active_individuals: '',
    //         feeding: '',
    //         fruit_or_seed_consumption: '',
    //         insect_consumption: '',
    //         calls_or_song: '',
    //         singing_individuals: '',
    //         territorial_individuals: '',
    //         courtship: '',
    //         mating: '',
    //         nest_building: '',
    //         occupied_nest: '',
    //         nestlings: '',
    //         fledged_young: '',
    //         dead_individuals: '',
    //         dead_nestlings_or_fledglings: '',
    //         individuals_at_feeding_station: '',
    //         notes: ''
    //     },
    //     {
    //         class: '',
    //         site: '3',
    //         active_individuals: '',
    //         feeding: '',
    //         fruit_or_seed_consumption: '',
    //         insect_consumption: '',
    //         calls_or_song: '',
    //         singing_individuals: '',
    //         territorial_individuals: '',
    //         courtship: '',
    //         mating: '',
    //         nest_building: '',
    //         occupied_nest: '',
    //         nestlings: '',
    //         fledged_young: '',
    //         dead_individuals: '',
    //         dead_nestlings_or_fledglings: '',
    //         individuals_at_feeding_station: '',
    //         notes: ''
    //     }
    //     ],
    //     ruby_throated_hummingbird: [{
    //         class: '',
    //         site: '1',
    //         active_individuals: '',
    //         feeding: '',
    //         insect_consumption: '',
    //         flower_visitation: '',
    //         calls_or_song: '',
    //         singing_individuals: '',
    //         territorial_individuals: '',
    //         courtship: '',
    //         mating: '',
    //         nest_building: '',
    //         occupied_nest: '',
    //         nestlings: '',
    //         fledged_young: '',
    //         dead_individuals: '',
    //         dead_nestlings_or_fledglings: '',
    //         individuals_at_feeding_station: '',
    //         notes: ''
    //     },
    //     {
    //         class: '',
    //         site: '2',
    //         active_individuals: '',
    //         feeding: '',
    //         insect_consumption: '',
    //         flower_visitation: '',
    //         calls_or_song: '',
    //         singing_individuals: '',
    //         territorial_individuals: '',
    //         courtship: '',
    //         mating: '',
    //         nest_building: '',
    //         occupied_nest: '',
    //         nestlings: '',
    //         fledged_young: '',
    //         dead_individuals: '',
    //         dead_nestlings_or_fledglings: '',
    //         individuals_at_feeding_station: '',
    //         notes: ''
    //     },
    //     {
    //         class: '',
    //         site: '3',
    //         active_individuals: '',
    //         feeding: '',
    //         insect_consumption: '',
    //         flower_visitation: '',
    //         calls_or_song: '',
    //         singing_individuals: '',
    //         territorial_individuals: '',
    //         courtship: '',
    //         mating: '',
    //         nest_building: '',
    //         occupied_nest: '',
    //         nestlings: '',
    //         fledged_young: '',
    //         dead_individuals: '',
    //         dead_nestlings_or_fledglings: '',
    //         individuals_at_feeding_station: '',
    //         notes: ''
    //     }
    //     ]
    // };
}]);