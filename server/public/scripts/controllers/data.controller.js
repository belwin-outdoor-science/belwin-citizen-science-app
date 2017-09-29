myApp.controller('DataController', ['StaffService', '$routeParams', function (StaffService, $routeParams) {
    var vm = this;
    vm.data = StaffService;

    console.log('$routeParams', $routeParams);

    StaffService.getData($routeParams.class);
}]);