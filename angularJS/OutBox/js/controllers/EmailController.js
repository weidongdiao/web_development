app.controller('EmailController', ['$scope', 'emails', '$routeParams', function($scope, emails, $routeParams) {

    // Calls the emails service success function, then returns the data. Since we use $routePatams.id, we can pass in which email from data to display. This works because we use $routeParams :id route in the app.js file, in the .config.
    emails.success(function(data) {
        $scope.email = data[$routeParams.id];
    });
}]);
