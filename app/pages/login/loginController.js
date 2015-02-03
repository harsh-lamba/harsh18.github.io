/*
#	Author : Harsh Kumar Lamba
#	Date : 29nd Jan 2014
#	Description : Login controller module
*/

'use strict'

angular.module('hisabKitabLoginController', []).
	controller('loginController', ['$scope', function($scope){
		var userSecureData = {};
		$scope.formSubmitted = false;
		$scope.submitLoginForm = function(isFormValid){
			//turning formsubmission true
			$scope.formSubmitted = true;
			$scope.isFormValid = isFormValid;
			console.log(isFormValid);
			//Access service to store data into DB....(for now it is Session storage).
		};
	}]);