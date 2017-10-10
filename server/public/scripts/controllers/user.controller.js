myApp.controller('UserController', ['UserService', 'StaffService', '$routeParams', '$mdDialog', function (UserService, StaffService, $routeParams, $mdDialog) {
  console.log('UserController created');
  var vm = this;
  vm.userService = UserService;
  vm.userObject = UserService.userObject;
  vm.StaffService = StaffService;

  console.log('$routeParams', $routeParams);

  StaffService.getUsers();

  vm.deleteUser = function (user) {
    if (user.deleteable === false) {
      console.log('You cant do this!');
      $mdDialog.show(
        $mdDialog.alert()
          .parent(angular.element(document.querySelector('#popupContainer')))
          .clickOutsideToClose(true)
          .title('You cannot delete this user!!')
          .textContent('Sorry!')
          .ariaLabel('Alert Dialog Demo')
          .ok('Ok!')
          .openFrom('#left')
      )
    } else {
        StaffService.deleteUser(user.id)
    }
  };


  vm.status = '  ';
  vm.showConfirm = function (ev, user) {
    console.log('user: ', user);
    var confirm = $mdDialog.confirm()
      .title('ARE YOU SURE YOU WANT TO DELETE THIS USER?')
      .targetEvent(ev)
      .ok('Yep!')
      .cancel('Nevermind');
    $mdDialog.show(confirm).then(function () {
      console.log('ev: ', ev);
      vm.deleteUser(user);
    }, function () {
      vm.status = 'Okay lets leave it there';
    });
  };

}]);
