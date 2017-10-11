myApp.service('StudentDataService', ['$http', function ($http) {
    console.log('StudentDataService loaded');

    var self = this;
    self.allData = {
        //plants
        bur_oak: [{
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
        pin_oak: [{
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
    
    var NUM_SITES = 3;
    self.questionsByOrganism = {
        questions: {}
    };

    self.organismsArray = [];

    self.submittedData = {};

    //this array of images is sorted through in the student-view.html. Only one is displayed at a time.
    self.imageArray = [{
        organismName: 'bur_oak',
        file: 'assets/bur-oak.jpg'
    },
    {
        organismName: 'pin_oak',
        file: 'assets/pin-oak.jpg'
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



   

    createOrganismsArray();
    questionCreator();

    //creates self.organismsArray, which is used in the ng-repeat in student-view.html
    function createOrganismsArray() {
        for (organism in self.allData) {
            self.organismsArray.push(organism);
        }
    }

    //populates self.questionsByOrganism, which is used in the ng-repeat in student-view.html
    function questionCreator() {
        for (var organism in self.allData) {
            var questionArray = [];
            for (var question in self.allData[organism][0]) {
                var questionObj = {};
                if (question !== 'class' && question !== 'site') {
                    questionObj.property = question;
                    question = question.replace(/_/g, ' ');
                    question = question.charAt(0).toUpperCase() + question.slice(1);
                    questionObj.text = question;
                    questionArray.push(questionObj);
                }
            }
            self.questionsByOrganism.questions[organism] = questionArray;
        }
    }

}]);