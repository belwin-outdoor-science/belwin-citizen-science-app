myApp.controller('StartController', ['StudentService', 'UserService', function (StudentService, UserService) {
    console.log('StudentController Loaded');
    var self = this;
    self.studentService = StudentService;
    self.userService = UserService;

}]);