myApp.controller('StudentController', ['UserService', '$mdDialog', '$mdSidenav', function (UserService, $mdDialog, $mdSidenav) {
    console.log('StudentController Loaded');

    var vm = this;
    vm.userService = UserService;
    vm.userObject = UserService.userObject;
    vm.class = "";
    vm.appSetup = true;
    
    vm.openLeftMenu = function () {
        $mdSidenav('left').toggle();
    };
    

    
      vm.submit = function() {
        console.log('selected class is', vm.class)
        vm.appSetup = false;
      }
}]);