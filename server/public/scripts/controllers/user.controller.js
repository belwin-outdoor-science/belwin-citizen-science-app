myApp.controller('UserController', ['UserService', 'StaffService', function(UserService, StaffService) {
  console.log('UserController created');
  var vm = this;
  vm.userService = UserService;
  vm.userObject = UserService.userObject;
  vm.StaffService = StaffService;

  StaffService.getUsers();
}]);
