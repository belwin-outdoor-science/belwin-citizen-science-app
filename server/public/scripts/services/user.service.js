myApp.factory('UserService', function($http, $location){
  console.log('UserService Loaded');

  var userObject = {};

  return {
    userObject : userObject,

    getuser : function(){
      console.log('UserService -- getuser');
      $http.get('/user').then(function(response) {
          if(response.data.username) {
              // user has a curret session on the server
              userObject.userName = response.data.username;
              console.log('UserService -- getuser -- User Data: ', userObject.userName);
          } else {
              console.log('UserService -- getuser -- failure');
              // user has no session, bounce them back to the login page
              $location.path("/login");
          }
      },function(response){
        console.log('UserService -- getuser -- failure: ', response);
        $location.path("/login");
      });
    },

    logout : function() {
      console.log('UserService -- logout');
      $http.get('/user/logout').then(function(response) {
        console.log('UserService -- logout -- logged out');
        location.reload(); // refreshes page to clear username from cache, if not, then the username will remain after logout
        $location.path("/student");
      });
    }
  };
});
