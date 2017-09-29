myApp.controller('DataController', ['DataService', '$routeParams', function (DataService, $routeParams) {
    var vm = this;
    vm.data = DataService;

    console.log('$routeParams', $routeParams);

    DataService.getData();
}]);