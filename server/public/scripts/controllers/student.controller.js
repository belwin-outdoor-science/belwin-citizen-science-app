myApp.controller('StudentController', ['UserService', '$mdDialog', '$mdSidenav', function (UserService, $mdDialog, $mdSidenav) {
    console.log('StudentController Loaded');

    var vm = this;
    vm.userService = UserService;
    vm.userObject = UserService.userObject;
    vm.openLeftMenu = function () {
        $mdSidenav('left').toggle();
    };
    

}]);