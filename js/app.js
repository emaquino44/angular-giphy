/* globals angular */
var GiphyApp = angular.module("GiphyApp", []);

GiphyApp.controller('Giphy', ['$scope', '$http', function($scope, $http) {

    $scope.giphyList = [];

    $scope.search = function() {
        var req = {
            url: 'http://api.giphy.com/v1/gifs/search',
            method: 'GET',
            params: {
                q: $scope.searchTerm,
                api_key: 'dc6zaTOxFJmzC',
                limit: 10
            }
        };

        $http(req).then(function(res) {
            $scope.giphyList = res.data.data;
        });
    };

    var debounce = null;
    $scope.$watch('searchTerm', function(newVal, oldVal) {
        if (debounce) clearTimeout(debounce);
        debounce = setTimeout(function() {
            // console.log('Ran Search');
            $scope.search();
        }, 1000);
    });

}]);
