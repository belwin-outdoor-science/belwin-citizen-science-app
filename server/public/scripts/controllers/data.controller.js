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
    vm.ground = DataService.ground;
    vm.ruby = DataService.ruby;
    vm.dark = DataService.dark;
    vm.eastern = DataService.eastern;
    // vm.all = DataService.all;
    // vm.data = DataService;



    vm.getDetails = function (species) {
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
            DataService.getMilkweed(vm.classNum)
        } else if (species == "Ground Squirrel") {
            vm.partial = "ground-squirrel-table.html"
            DataService.getGround(vm.classNum)
        } else if (species == "Ruby Throated Hummingbird") {
            vm.partial = "ruby-throated-hummingbird-table.html"
            DataService.getRuby(vm.classNum)
        } else if (species == "Dark-eyed Junco") {
            vm.partial = "dark-eyed-junco-table.html"
            DataService.getDark(vm.classNum)
        } else if (species == "Eastern Bluebird") {
            vm.partial = "eastern-bluebird-table.html"
            DataService.getEastern(vm.classNum)
        }
    }


}]);

