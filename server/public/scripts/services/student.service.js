myApp.service('StudentService', ['$http', function ($http) {
    console.log('StudentService loaded');
    var self = this;
    // bur_oak
    // common_buckthorn
    // common_milkweed
    // eastern_bluebird
    // ground_squirrel
    // dark_eyed_junco
    // paper_birch
    // quaking_aspen
    // northern_red_oak
    // ruby_throated_hummingbird

    //PROBLEM: how to handle errors with 10 simultaneous requests.
    //IDEAS:
    //1. Store 
    self.addBurOak = function (studentData) {
        
        $http.post('/student_data/bur_oak', card).then(function (response) {
            if (response.data) {
                onsole.log('student service -- addBurOak -- success: ', response.data);
                swal(
                    'That card is aboard now!',
                    'OK',
                    'success'
                )
                $location.path('/edit'); // http://localhost:5000/#/user

            } else {
                console.log('card service addACard error', response);
                self.message = "Error adding card!!";
            }
        });
    }
}]);