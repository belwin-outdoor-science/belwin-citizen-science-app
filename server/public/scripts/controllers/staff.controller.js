myApp.controller('StaffController', ['StaffService', '$routeParams', function (StaffService, $routeParams) {
    console.log('Staff Controller is sourced in');
    var vm = this;
    vm.data = StaffService;
    StaffService.getUserInfo();
}])