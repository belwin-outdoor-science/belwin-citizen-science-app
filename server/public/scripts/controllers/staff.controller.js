myApp.controller('StaffController', ['StaffService', 'DataService', 'UserService', function (StaffService, DataService, UserService) {
    console.log('Staff Controller is sourced in');
    var vm = this;
    vm.user = StaffService;
    vm.data = DataService;
    vm.userService = UserService;
    vm.userObject = UserService.userObject;
    StaffService.getUserInfo();

    // vm.data.getBur();
    // vm.data.getBuckthorn();
    // vm.data.getMilkweed();
    // vm.data.getDark();
    // vm.data.getEastern();
    // vm.data.getGround();
    // vm.data.getNorthern();
    // vm.data.getPaper();
    // vm.data.getQuaking();
    // vm.data.getRuby();
    
}])