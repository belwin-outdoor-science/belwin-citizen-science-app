myApp.controller('UserController', ['UserService', 'StaffService', '$routeParams', '$mdDialog', function (UserService, StaffService, $routeParams, $mdDialog) {
  console.log('UserController created');
  var vm = this;
  vm.userService = UserService;
  vm.userObject = UserService.userObject;
  vm.StaffService = StaffService;

  console.log('$routeParams', $routeParams);

  StaffService.getUsers();

  vm.deleteUser = function (userId) {
    StaffService.deleteUser(userId);
  };

  vm.status = '  ';
    vm.showConfirm = function(ev, user) {
      console.log('user: ', user);
        var confirm = $mdDialog.confirm()
        .title('ARE YOU SURE YOU WANT TO DELETE THIS USER?')
        .targetEvent(ev)
        .ok('Yep!')
        .cancel('Nevermind');
        $mdDialog.show(confirm).then(function() {
            // vm.status = 'Deleted!';
            console.log('ev: ', ev);
            vm.deleteUser(user.id);
          }, function() {
            vm.status = 'Okay lets leave it there';
          });
    };

}]);
