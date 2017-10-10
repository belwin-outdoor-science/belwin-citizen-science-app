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

    //take these out after table is built
    self.selectedCategory.selectedCategory = 'plants';

    self.selectedOrganism.selectedOrganism = 'bur_oak';
    self.selectCategory = function (category) {
        // self.selectedCategory.selectedCategory = category;
        console.log('selectCategory clicked');

    }

    self.selectOrganism = function (organism) {
        // self.selectedOrganism.selectedOrganism = organism.underscore;


        console.log('selected organism: ');
        console.log(self.selectedOrganism.selectedOrganism);

    }

    self.questionsByOrganism = { "questions": { "paper_birch": [{ "property": "breaking_leaf_buds", "text": "Breaking leaf buds" }, { "property": "leaves", "text": "Leaves" }, { "property": "increasing_leaf_size", "text": "Increasing leaf size" }, { "property": "colored_leaves", "text": "Colored leaves" }, { "property": "falling_leaves", "text": "Falling leaves" }, { "property": "flowers_or_flower_buds", "text": "Flowers or flower buds" }, { "property": "open_flowers", "text": "Open flowers" }, { "property": "pollen_release", "text": "Pollen release" }, { "property": "fruits", "text": "Fruits" }, { "property": "ripe_fruits", "text": "Ripe fruits" }, { "property": "recent_fruit_or_seed_drop", "text": "Recent fruit or seed drop" }, { "property": "notes", "text": "Notes" }], "quaking_aspen": [{ "property": "breaking_leaf_buds", "text": "Breaking leaf buds" }, { "property": "leaves", "text": "Leaves" }, { "property": "increasing_leaf_size", "text": "Increasing leaf size" }, { "property": "colored_leaves", "text": "Colored leaves" }, { "property": "falling_leaves", "text": "Falling leaves" }, { "property": "flowers_or_flower_buds", "text": "Flowers or flower buds" }, { "property": "open_flowers", "text": "Open flowers" }, { "property": "pollen_release", "text": "Pollen release" }, { "property": "fruits", "text": "Fruits" }, { "property": "ripe_fruits", "text": "Ripe fruits" }, { "property": "recent_fruit_or_seed_drop", "text": "Recent fruit or seed drop" }, { "property": "notes", "text": "Notes" }], "northern_red_oak": [{ "property": "breaking_leaf_buds", "text": "Breaking leaf buds" }, { "property": "leaves", "text": "Leaves" }, { "property": "increasing_leaf_size", "text": "Increasing leaf size" }, { "property": "colored_leaves", "text": "Colored leaves" }, { "property": "falling_leaves", "text": "Falling leaves" }, { "property": "flowers_or_flower_buds", "text": "Flowers or flower buds" }, { "property": "open_flowers", "text": "Open flowers" }, { "property": "pollen_release", "text": "Pollen release" }, { "property": "fruits", "text": "Fruits" }, { "property": "ripe_fruits", "text": "Ripe fruits" }, { "property": "recent_fruit_or_seed_drop", "text": "Recent fruit or seed drop" }, { "property": "notes", "text": "Notes" }], "ruby_throated_hummingbird": [{ "property": "active_individuals", "text": "Active individuals" }, { "property": "feeding", "text": "Feeding" }, { "property": "insect_consumption", "text": "Insect consumption" }, { "property": "flower_visitation", "text": "Flower visitation" }, { "property": "calls_or_song", "text": "Calls or song" }, { "property": "singing_individuals", "text": "Singing individuals" }, { "property": "territorial_individuals", "text": "Territorial individuals" }, { "property": "courtship", "text": "Courtship" }, { "property": "mating", "text": "Mating" }, { "property": "nest_building", "text": "Nest building" }, { "property": "occupied_nest", "text": "Occupied nest" }, { "property": "nestlings", "text": "Nestlings" }, { "property": "fledged_young", "text": "Fledged young" }, { "property": "dead_individuals", "text": "Dead individuals" }, { "property": "dead_nestlings_or_fledglings", "text": "Dead nestlings or fledglings" }, { "property": "individuals_at_feeding_station", "text": "Individuals at feeding station" }, { "property": "notes", "text": "Notes" }], "bur_oak": [{ "property": "breaking_leaf_buds", "text": "Breaking leaf buds" }, { "property": "leaves", "text": "Leaves" }, { "property": "increasing_leaf_size", "text": "Increasing leaf size" }, { "property": "colored_leaves", "text": "Colored leaves" }, { "property": "falling_leaves", "text": "Falling leaves" }, { "property": "flowers_or_flower_buds", "text": "Flowers or flower buds" }, { "property": "open_flowers", "text": "Open flowers" }, { "property": "pollen_release", "text": "Pollen release" }, { "property": "fruits", "text": "Fruits" }, { "property": "ripe_fruits", "text": "Ripe fruits" }, { "property": "recent_fruit_or_seed_drop", "text": "Recent fruit or seed drop" }, { "property": "notes", "text": "Notes" }], "common_buckthorn": [{ "property": "breaking_leaf_buds", "text": "Breaking leaf buds" }, { "property": "leaves", "text": "Leaves" }, { "property": "increasing_leaf_size", "text": "Increasing leaf size" }, { "property": "colored_leaves", "text": "Colored leaves" }, { "property": "falling_leaves", "text": "Falling leaves" }, { "property": "flowers_or_flower_buds", "text": "Flowers or flower buds" }, { "property": "open_flowers", "text": "Open flowers" }, { "property": "fruits", "text": "Fruits" }, { "property": "ripe_fruits", "text": "Ripe fruits" }, { "property": "recent_fruit_or_seed_drop", "text": "Recent fruit or seed drop" }, { "property": "notes", "text": "Notes" }], "common_milkweed": [{ "property": "initial_growth", "text": "Initial growth" }, { "property": "leaves", "text": "Leaves" }, { "property": "flowers_or_flower_buds", "text": "Flowers or flower buds" }, { "property": "open_flowers", "text": "Open flowers" }, { "property": "fruits", "text": "Fruits" }, { "property": "ripe_fruits", "text": "Ripe fruits" }, { "property": "recent_fruit_or_seed_drop", "text": "Recent fruit or seed drop" }, { "property": "notes", "text": "Notes" }], "eastern_bluebird": [{ "property": "active_individuals", "text": "Active individuals" }, { "property": "feeding", "text": "Feeding" }, { "property": "fruit_or_seed_consumption", "text": "Fruit or seed consumption" }, { "property": "insect_consumption", "text": "Insect consumption" }, { "property": "calls_or_song", "text": "Calls or song" }, { "property": "singing_individuals", "text": "Singing individuals" }, { "property": "territorial_individuals", "text": "Territorial individuals" }, { "property": "courtship", "text": "Courtship" }, { "property": "mating", "text": "Mating" }, { "property": "nest_building", "text": "Nest building" }, { "property": "occupied_nest", "text": "Occupied nest" }, { "property": "nestlings", "text": "Nestlings" }, { "property": "fledged_young", "text": "Fledged young" }, { "property": "dead_individuals", "text": "Dead individuals" }, { "property": "dead_nestlings_or_fledglings", "text": "Dead nestlings or fledglings" }, { "property": "individuals_at_feeding_station", "text": "Individuals at feeding station" }, { "property": "notes", "text": "Notes" }], "ground_squirrel": [{ "property": "active_individuals", "text": "Active individuals" }, { "property": "feeding", "text": "Feeding" }, { "property": "young_individuals", "text": "Young individuals" }, { "property": "dead_individuals", "text": "Dead individuals" }, { "property": "notes", "text": "Notes" }], "dark_eyed_junco": [{ "property": "active_individuals", "text": "Active individuals" }, { "property": "feeding", "text": "Feeding" }, { "property": "fruit_or_seed_consumption", "text": "Fruit or seed consumption" }, { "property": "insect_consumption", "text": "Insect consumption" }, { "property": "calls_or_song", "text": "Calls or song" }, { "property": "singing_individuals", "text": "Singing individuals" }, { "property": "territorial_individuals", "text": "Territorial individuals" }, { "property": "courtship", "text": "Courtship" }, { "property": "mating", "text": "Mating" }, { "property": "nest_building", "text": "Nest building" }, { "property": "occupied_nest", "text": "Occupied nest" }, { "property": "nestlings", "text": "Nestlings" }, { "property": "fledged_young", "text": "Fledged young" }, { "property": "dead_individuals", "text": "Dead individuals" }, { "property": "dead_nestlings_or_fledglings", "text": "Dead nestlings or fledglings" }, { "property": "individuals_at_feeding_station", "text": "Individuals at feeding station" }, { "property": "notes", "text": "Notes" }] } };
    //for ng-repeat of one organisms data:


    self.allData = {
        //plants
        bur_oak: [{
            class: '1',
            site: '1',
            breaking_leaf_buds: 'yes',
            leaves: 'no',
            increasing_leaf_size: 'maybe',
            colored_leaves: 'yes',
            falling_leaves: '',
            flowers_or_flower_buds: '',
            open_flowers: '',
            pollen_release: '',
            fruits: '',
            ripe_fruits: '',
            recent_fruit_or_seed_drop: '',
            notes: ''
        },
        {
            class: '',
            site: '2',
            breaking_leaf_buds: '',
            leaves: '',
            increasing_leaf_size: '',
            colored_leaves: '',
            falling_leaves: '',
            flowers_or_flower_buds: '',
            open_flowers: '',
            pollen_release: '',
            fruits: '',
            ripe_fruits: '',
            recent_fruit_or_seed_drop: '',
            notes: ''
        },
        {
            class: '',
            site: '3',
            breaking_leaf_buds: '',
            leaves: '',
            increasing_leaf_size: '',
            colored_leaves: '',
            falling_leaves: '',
            flowers_or_flower_buds: '',
            open_flowers: '',
            pollen_release: '',
            fruits: '',
            ripe_fruits: '',
            recent_fruit_or_seed_drop: '',
            notes: ''
        }
        ],
        common_buckthorn: [{
            class: '',
            site: '1',
            breaking_leaf_buds: '',
            leaves: '',
            increasing_leaf_size: '',
            colored_leaves: '',
            falling_leaves: '',
            flowers_or_flower_buds: '',
            open_flowers: '',
            fruits: '',
            ripe_fruits: '',
            recent_fruit_or_seed_drop: '',
            notes: ''
        },
        {
            class: '',
            site: '2',
            breaking_leaf_buds: '',
            leaves: '',
            increasing_leaf_size: '',
            colored_leaves: '',
            falling_leaves: '',
            flowers_or_flower_buds: '',
            open_flowers: '',
            fruits: '',
            ripe_fruits: '',
            recent_fruit_or_seed_drop: '',
            notes: ''
        },
        {
            class: '',
            site: '3',
            breaking_leaf_buds: '',
            leaves: '',
            increasing_leaf_size: '',
            colored_leaves: '',
            falling_leaves: '',
            flowers_or_flower_buds: '',
            open_flowers: '',
            fruits: '',
            ripe_fruits: '',
            recent_fruit_or_seed_drop: '',
            notes: ''
        }
        ],
        northern_red_oak: [{
            class: '',
            site: '1',
            breaking_leaf_buds: '',
            leaves: '',
            increasing_leaf_size: '',
            colored_leaves: '',
            falling_leaves: '',
            flowers_or_flower_buds: '',
            open_flowers: '',
            pollen_release: '',
            fruits: '',
            ripe_fruits: '',
            recent_fruit_or_seed_drop: '',
            notes: ''
        },
        {
            class: '',
            site: '2',
            breaking_leaf_buds: '',
            leaves: '',
            increasing_leaf_size: '',
            colored_leaves: '',
            falling_leaves: '',
            flowers_or_flower_buds: '',
            open_flowers: '',
            pollen_release: '',
            fruits: '',
            ripe_fruits: '',
            recent_fruit_or_seed_drop: '',
            notes: ''
        },
        {
            class: '',
            site: '3',
            breaking_leaf_buds: '',
            leaves: '',
            increasing_leaf_size: '',
            colored_leaves: '',
            falling_leaves: '',
            flowers_or_flower_buds: '',
            open_flowers: '',
            pollen_release: '',
            fruits: '',
            ripe_fruits: '',
            recent_fruit_or_seed_drop: '',
            notes: ''
        }
        ],
        common_milkweed: [{
            class: '',
            site: '1',
            initial_growth: '',
            leaves: '',
            flowers_or_flower_buds: '',
            open_flowers: '',
            fruits: '',
            ripe_fruits: '',
            recent_fruit_or_seed_drop: '',
            notes: ''
        },
        {
            class: '',
            site: '2',
            initial_growth: '',
            leaves: '',
            flowers_or_flower_buds: '',
            open_flowers: '',
            fruits: '',
            ripe_fruits: '',
            recent_fruit_or_seed_drop: '',
            notes: ''
        },
        {
            class: '',
            site: '3',
            initial_growth: '',
            leaves: '',
            flowers_or_flower_buds: '',
            open_flowers: '',
            fruits: '',
            ripe_fruits: '',
            recent_fruit_or_seed_drop: '',
            notes: ''
        }
        ],
        paper_birch: [{
            class: '',
            site: '1',
            breaking_leaf_buds: '',
            leaves: '',
            increasing_leaf_size: '',
            colored_leaves: '',
            falling_leaves: '',
            flowers_or_flower_buds: '',
            open_flowers: '',
            pollen_release: '',
            fruits: '',
            ripe_fruits: '',
            recent_fruit_or_seed_drop: '',
            notes: ''
        },
        {
            class: '',
            site: '2',
            breaking_leaf_buds: '',
            leaves: '',
            increasing_leaf_size: '',
            colored_leaves: '',
            falling_leaves: '',
            flowers_or_flower_buds: '',
            open_flowers: '',
            pollen_release: '',
            fruits: '',
            ripe_fruits: '',
            recent_fruit_or_seed_drop: '',
            notes: ''
        },
        {
            class: '',
            site: '3',
            breaking_leaf_buds: '',
            leaves: '',
            increasing_leaf_size: '',
            colored_leaves: '',
            falling_leaves: '',
            flowers_or_flower_buds: '',
            open_flowers: '',
            pollen_release: '',
            fruits: '',
            ripe_fruits: '',
            recent_fruit_or_seed_drop: '',
            notes: ''
        }
        ],
        quaking_aspen: [{
            class: '',
            site: '1',
            breaking_leaf_buds: '',
            leaves: '',
            increasing_leaf_size: '',
            colored_leaves: '',
            falling_leaves: '',
            flowers_or_flower_buds: '',
            open_flowers: '',
            pollen_release: '',
            fruits: '',
            ripe_fruits: '',
            recent_fruit_or_seed_drop: '',
            notes: ''
        },
        {
            class: '',
            site: '2',
            breaking_leaf_buds: '',
            leaves: '',
            increasing_leaf_size: '',
            colored_leaves: '',
            falling_leaves: '',
            flowers_or_flower_buds: '',
            open_flowers: '',
            pollen_release: '',
            fruits: '',
            ripe_fruits: '',
            recent_fruit_or_seed_drop: '',
            notes: ''
        },
        {
            class: '',
            site: '3',
            breaking_leaf_buds: '',
            leaves: '',
            increasing_leaf_size: '',
            colored_leaves: '',
            falling_leaves: '',
            flowers_or_flower_buds: '',
            open_flowers: '',
            pollen_release: '',
            fruits: '',
            ripe_fruits: '',
            recent_fruit_or_seed_drop: '',
            notes: ''
        }
        ],
        //mammals
        ground_squirrel: [{
            class: '',
            site: '1',
            active_individuals: '',
            feeding: '',
            young_individuals: '',
            dead_individuals: '',
            notes: ''
        },
        {
            class: '',
            site: '2',
            active_individuals: '',
            feeding: '',
            young_individuals: '',
            dead_individuals: '',
            notes: ''
        },
        {
            class: '',
            site: '3',
            active_individuals: '',
            feeding: '',
            young_individuals: '',
            dead_individuals: '',
            notes: ''
        }
        ],
        eastern_bluebird: [{
            class: '',
            site: '1',
            active_individuals: '',
            feeding: '',
            fruit_or_seed_consumption: '',
            insect_consumption: '',
            calls_or_song: '',
            singing_individuals: '',
            territorial_individuals: '',
            courtship: '',
            mating: '',
            nest_building: '',
            occupied_nest: '',
            nestlings: '',
            fledged_young: '',
            dead_individuals: '',
            dead_nestlings_or_fledglings: '',
            individuals_at_feeding_station: '',
            notes: ''
        },
        {
            class: '',
            site: '2',
            active_individuals: '',
            feeding: '',
            fruit_or_seed_consumption: '',
            insect_consumption: '',
            calls_or_song: '',
            singing_individuals: '',
            territorial_individuals: '',
            courtship: '',
            mating: '',
            nest_building: '',
            occupied_nest: '',
            nestlings: '',
            fledged_young: '',
            dead_individuals: '',
            dead_nestlings_or_fledglings: '',
            individuals_at_feeding_station: '',
            notes: ''
        },
        {
            class: '',
            site: '3',
            active_individuals: '',
            feeding: '',
            fruit_or_seed_consumption: '',
            insect_consumption: '',
            calls_or_song: '',
            singing_individuals: '',
            territorial_individuals: '',
            courtship: '',
            mating: '',
            nest_building: '',
            occupied_nest: '',
            nestlings: '',
            fledged_young: '',
            dead_individuals: '',
            dead_nestlings_or_fledglings: '',
            individuals_at_feeding_station: '',
            notes: ''
        }
        ],
        dark_eyed_junco: [{
            class: '',
            site: '1',
            active_individuals: '',
            feeding: '',
            fruit_or_seed_consumption: '',
            insect_consumption: '',
            calls_or_song: '',
            singing_individuals: '',
            territorial_individuals: '',
            courtship: '',
            mating: '',
            nest_building: '',
            occupied_nest: '',
            nestlings: '',
            fledged_young: '',
            dead_individuals: '',
            dead_nestlings_or_fledglings: '',
            individuals_at_feeding_station: '',
            notes: ''
        },
        {
            class: '',
            site: '2',
            active_individuals: '',
            feeding: '',
            fruit_or_seed_consumption: '',
            insect_consumption: '',
            calls_or_song: '',
            singing_individuals: '',
            territorial_individuals: '',
            courtship: '',
            mating: '',
            nest_building: '',
            occupied_nest: '',
            nestlings: '',
            fledged_young: '',
            dead_individuals: '',
            dead_nestlings_or_fledglings: '',
            individuals_at_feeding_station: '',
            notes: ''
        },
        {
            class: '',
            site: '3',
            active_individuals: '',
            feeding: '',
            fruit_or_seed_consumption: '',
            insect_consumption: '',
            calls_or_song: '',
            singing_individuals: '',
            territorial_individuals: '',
            courtship: '',
            mating: '',
            nest_building: '',
            occupied_nest: '',
            nestlings: '',
            fledged_young: '',
            dead_individuals: '',
            dead_nestlings_or_fledglings: '',
            individuals_at_feeding_station: '',
            notes: ''
        }
        ],
        ruby_throated_hummingbird: [{
            class: '',
            site: '1',
            active_individuals: '',
            feeding: '',
            insect_consumption: '',
            flower_visitation: '',
            calls_or_song: '',
            singing_individuals: '',
            territorial_individuals: '',
            courtship: '',
            mating: '',
            nest_building: '',
            occupied_nest: '',
            nestlings: '',
            fledged_young: '',
            dead_individuals: '',
            dead_nestlings_or_fledglings: '',
            individuals_at_feeding_station: '',
            notes: ''
        },
        {
            class: '',
            site: '2',
            active_individuals: '',
            feeding: '',
            insect_consumption: '',
            flower_visitation: '',
            calls_or_song: '',
            singing_individuals: '',
            territorial_individuals: '',
            courtship: '',
            mating: '',
            nest_building: '',
            occupied_nest: '',
            nestlings: '',
            fledged_young: '',
            dead_individuals: '',
            dead_nestlings_or_fledglings: '',
            individuals_at_feeding_station: '',
            notes: ''
        },
        {
            class: '',
            site: '3',
            active_individuals: '',
            feeding: '',
            insect_consumption: '',
            flower_visitation: '',
            calls_or_song: '',
            singing_individuals: '',
            territorial_individuals: '',
            courtship: '',
            mating: '',
            nest_building: '',
            occupied_nest: '',
            nestlings: '',
            fledged_young: '',
            dead_individuals: '',
            dead_nestlings_or_fledglings: '',
            individuals_at_feeding_station: '',
            notes: ''
        }
        ]
    };

    self.tableRows = {};
    formatDataDisplay();
    // { organism: {question: [question, site 1 yes, site 1 no, site 1 ?, site 2 yes...] ...}}
    function formatDataDisplay() {
            //add each question as the first item in the array of table rows;
            //example: {bur_oak: ['breaking_buds']}
    
        //for (organism in self.allData) {
            // self.allData[organism].forEach(function (organismAtOneSite, i) {
            //     self.tableRows[organism] = {};
            //     for (question in organismAtOneSite) {
                    
            //         var row = [];
            //         row.push(question);
            //         var observation = organismAtOneSite[question];
            //         switch (observation) {
            //             case 'yes':
            //                 row.push('x');
            //                 row.push(' ');
            //                 row.push(' ');
            //                 break;
            //             case 'no':
            //                 row.push(' ');
            //                 row.push('x');
            //                 row.push(' ');
            //                 break;
            //             case 'maybe':
            //                 row.push(' ');
            //                 row.push(' ');
            //                 row.push('x');
            //                 break;
            //             default:
            //                 row.push(' ');
            //                 row.push(' ');
            //                 row.push(' ');
            //         }
            //         self.tableRows[organism][question] = row;
            //     }
            // });
        //}
    }
    console.log('self.tableRows');
    console.log(self.tableRows);
    
    
}]);