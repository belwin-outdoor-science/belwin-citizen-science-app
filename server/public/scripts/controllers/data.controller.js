myApp.controller('DataController', ['DataService', '$routeParams', function (DataService, $routeParams) {
    var vm = this;
    vm.partial = "placeholder-table.html";
    vm.classNum = $routeParams.classNum;
    vm.bur = DataService.bur;
    vm.buckthorn = DataService.buckthorn;
    vm.northern = DataService.northern;
    vm.paper = DataService.paper;
    vm.quaking = DataService.quaking;
    vm.milkweed = DataService.milkweed;

    // vm.data = DataService;
    // vm.buckthorn = DataService;

    // DataService.getData();
    // DataService.getBuckthorn();

    vm.getDetails = function(species) {
        vm.showData = true;
        console.log('getting', species, 'data for class', vm.classNum)
        if (species == "Bur Oak") {
            DataService.getBur(vm.classNum);
            vm.partial = "bur-oak-table.html"
        } else if (species == "Common Buckthorn") {
            DataService.getBuckthorn(vm.classNum);
            vm.partial = "common-buckthorn-table.html";
        } else if (species == "Red Oak") {
            DataService.getNorthern(vm.classNum);
            vm.partial = "northern-red-oak-table.html";
        } else if (species == "Paper Birch") {
            DataService.getPaper(vm.classNum);
            vm.partial = "paper-birch-table.html";
        } else if (species == "Quaking Aspen") {
            DataService.getQuaking(vm.classNum)
            vm.partial = "quaking-aspen-table.html"
        } else if (species == "Milkweed") {
            vm.partial = "common-milkweed-table.html"
        }
    }
}]);

