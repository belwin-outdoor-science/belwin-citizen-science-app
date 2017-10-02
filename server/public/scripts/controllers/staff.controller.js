myApp.controller('StaffController', ['StaffService', 'DataService', function (StaffService, DataService) {
    console.log('Staff Controller is sourced in');
    var vm = this;
    vm.user = StaffService;
    vm.data = DataService;
    StaffService.getUserInfo();
    vm.data.getBur();
    vm.data.getBuckthorn();
    vm.data.getMilkweed();
    vm.data.getDark();
    vm.data.getEastern();
    vm.data.getGround();
    vm.data.getNorthern();
    vm.data.getPaper();
    vm.data.getQuaking();
    vm.data.getRuby();

    console.log('vm.data:', vm.data);
    
}])