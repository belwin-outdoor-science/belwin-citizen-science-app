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

    vm.allBur = DataService.allBur;
    // vm.data = DataService;
    vm.allBur = DataService.allBur;
    vm.allBuckthorn = DataService.allBuckthorn;
    vm.allDark = DataService.allDark;
    vm.allEastern = DataService.allEastern;
    vm.allGround = DataService.allGround;
    vm.allMilkweed = DataService.allMilkweed;
    vm.allNorthern = DataService.allNorthern;
    vm.allPaper = DataService.allPaper;
    vm.allQuaking = DataService.allQuaking;
    vm.allRuby = DataService.allRuby;


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

    vm.getAll = function (species) {
        vm.showAll = true;
        if (species == "Bur Oak") {
            DataService.getAllBur();
            vm.partial = "all-bur-oak-table.html"
        } else if (species == "Common Buckthorn") {
            DataService.getAllBuckthorn();
            vm.partial = "all-common-buckthorn-table.html";
        } else if (species == "Red Oak") {
            DataService.getAllNorthern();
            vm.partial = "all-northern-red-oak-table.html";
        } else if (species == "Paper Birch") {
            DataService.getAllPaper();
            vm.partial = "all-paper-birch-table.html";
        } else if (species == "Quaking Aspen") {
            DataService.getAllQuaking()
            vm.partial = "all-quaking-aspen-table.html"
        } else if (species == "Milkweed") {
            vm.partial = "all-common-milkweed-table.html"
            DataService.getAllMilkweed()
        } else if (species == "Ground Squirrel") {
            vm.partial = "all-ground-squirrel-table.html"
            DataService.getAllGround()
        } else if (species == "Ruby Throated Hummingbird") {
            vm.partial = "all-ruby-throated-hummingbird-table.html"
            DataService.getAllRuby()
        } else if (species == "Dark-eyed Junco") {
            vm.partial = "all-dark-eyed-junco-table.html"
            DataService.getAllDark()
        } else if (species == "Eastern Bluebird") {
            vm.partial = "all-eastern-bluebird-table.html"
            DataService.getAllEastern()
        }
    }
}]);

