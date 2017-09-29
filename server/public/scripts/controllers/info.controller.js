myApp.controller('InfoController', function(UserService) {
  console.log('InfoController created');
  var vm = this;
  vm.userService = UserService;
  vm.class = "";

  vm.submit = function() {
    console.log('selected class is', vm.class)
  }
});
