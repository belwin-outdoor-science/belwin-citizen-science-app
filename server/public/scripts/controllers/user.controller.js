myApp.controller('UserController', ['UserService', 'StaffService', '$routeParams', function (UserService, StaffService, $routeParams) {
  console.log('UserController created');
  var vm = this;
  vm.userService = UserService;
  vm.userObject = UserService.userObject;
  vm.StaffService = StaffService;

  console.log('$routeParams', $routeParams);

  StaffService.getUsers();

  vm.deleteUser = function () {
    console.log('userId:', $routeParams.id);
    StaffService.deleteUser($routeParams.id);
  };

}]);
