app.controller('galleryController', function($scope) {
    $scope.headingTitle = "Photo Gallery Items";
});

app.controller('contactusController', function($scope) {
    $scope.headingTitle = "Contact Info";
});

app.controller('myCtrl', function($scope) {
    $scope.myBtnClickEvent = function() {
    	$scope.firstName = $scope.firstname;
		$scope.lastName = $scope.lastname;    
    };
});
