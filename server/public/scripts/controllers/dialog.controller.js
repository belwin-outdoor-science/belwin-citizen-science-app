myApp.controller('DialogController', function(StudentService) {
    console.log('DialogController created');
    var vm = this;
    vm.StudentService = StudentService;
  
    vm.continueStatus = StudentService.continueStatus;
  });
  