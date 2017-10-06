myApp.service('StudentDataService', ['$http', '$location',  function ($http, $location) {
    console.log('StudentDataService loaded');

    var self = this;

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
]
}]);