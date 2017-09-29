myApp.service('DataService', ['$http', function ($http) {
    console.log('DataService is loaded');

    self.data = { info: {} }
    self.getData = function (classId) {
        $http({
            method: 'GET',
            url: '/dashboard/data',
            params: {
                class: classId
            }
        }).then(function (response) {
            self.data.info = response.data;
        });
    };
}]);