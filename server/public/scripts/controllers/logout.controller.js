myApp.controller('LogoutController', function($http, $location, UserService) { 
    console.log('LogoutController loaded')
    var vm = this;
    vm.userService = UserService;



});
    