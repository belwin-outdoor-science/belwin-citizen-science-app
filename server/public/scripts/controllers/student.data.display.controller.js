myApp.controller('StudentDataDisplayController', ['StudentDataDisplayService', 'StudentDataService', 'UserService', '$mdDialog', '$mdSidenav', function (StudentDataDisplayService, StudentDataService, UserService, $mdDialog, $mdSidenav) {
    console.log('StudentDataDisplayController Loaded');

    var self = this;
    self.studentDataDisplayService = StudentDataDisplayService;

    
}]);