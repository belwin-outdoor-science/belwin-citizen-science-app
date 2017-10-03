myApp.controller('DataController', ['DataService', '$routeParams', function (DataService, $routeParams) {
    var vm = this;
    vm.classNum = $routeParams.classNum;
    vm.bur = DataService.bur;

    // vm.data = DataService;
    // vm.buckthorn = DataService;

    // DataService.getData();
    // DataService.getBuckthorn();

    vm.getDetails = function(species) {
        console.log('getting', species, 'data for class', vm.classNum)
        if (species == "Bur Oak") {
            DataService.getBur(vm.classNum);
        }
    }
}]);

