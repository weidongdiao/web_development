app.controller('HomeController', ['$scope', 'emails', function($scope, emails) {

    // Calls the emails success function, and once it has it, returns the data into the $scope.emails variable, which is then available in a view.
    emails.success(function(data) {
        $scope.emails = data;
    });
}]);
