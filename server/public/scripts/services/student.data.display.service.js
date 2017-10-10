myApp.service('StudentDataDisplayService', ['$http', '$location', '$mdDialog', 'StudentDataService', function ($http, $location, $mdDialog, StudentDataService) {
    console.log('StudentDataDisplayService loaded');
    var self = this;
    self.studentDataService = StudentDataService;

}]);