myApp.controller('StudentController', ['UserService', '$mdDialog', function(UserService, $mdDialog) {
    console.log('StudentController Loaded');
    
    var vm = this;
    vm.userService = UserService;
    vm.userObject = UserService.userObject;

 	

}]);