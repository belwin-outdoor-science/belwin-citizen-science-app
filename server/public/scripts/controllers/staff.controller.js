myApp.controller('StaffController', ['StaffService', 'DataService', '$routeParams', function (StaffService, DataService, $routeParams) {
    console.log('Staff Controller is sourced in');
    var vm = this;
    vm.user = StaffService;
    vm.data = DataService;
    StaffService.getUserInfo();
    DataService.getData();
}])