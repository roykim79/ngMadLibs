angular.module('myApp', [])
	.controller('MyCtrl', function($scope){
		$scope.submit = function(){
			if ($scope.myForm.$valid) {
				$scope.submitted = true;
			}
		};
		$scope.startOver = function(){
			$scope.submitted = false;
			
			$scope.maleName = "";
			$scope.dirtyTask = "";
			$scope.obnoxiousCelebrity = "";
			$scope.jobTitle = "";
			$scope.celebrity = "";
			$scope.hugeNumber = "";
			$scope.tediousTask = "";
			$scope.uselessSkill = "";
			$scope.adjective = "";
		};
	});