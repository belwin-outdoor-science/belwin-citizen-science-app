myApp.controller('DataController', ['DataService', '$routeParams', function (DataService, $routeParams) {
    var vm = this;
    vm.classNum = DataService.classNum;
    vm.classNum = $routeParams.classNum;
    // vm.data = DataService;
    // vm.buckthorn = DataService;

    // DataService.getData();
    // DataService.getBuckthorn();
}]);