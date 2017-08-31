(function(){

'use strict';

angular.module('chessnut')
.service('UserService', UserService);

UserService.$inject = ['$cookies', '$http', 'ProductionBaseUrl', 'DevBaseUrl'];
function UserService($cookies, $http, ProductionBaseUrl, DevBaseUrl){
	var service = this;
	var dummy_user_id = 0; //current logged in user set on the server side
	service.user = {};
	service.games = {};

	service.getUser = function(){
		return $http({
			method: 'GET',
			url: DevBaseUrl + '/users/' + dummy_user_id
		})
		.then(function(response){
			console.log(response);
			service.user = response.data;
		})
		.catch(function(error){
			console.log(error);
		});
	};

	service.getGames = function(){
		return $http({
			method: 'GET',
			url: DevBaseUrl + // server side work...
		})
		.then(function(response){
			console.log(response);
			service.games = response.data;
		})
		.catch(function(error){
			console.warn(error);
		});
	};
};

})(); //IIFE