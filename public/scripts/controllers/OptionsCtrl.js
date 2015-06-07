'use strict';

angular.module('TrustRpiWallet')
    .controller('OptionsCtrl', function ($scope, $rootScope, TrustPlusd) {
        $rootScope.app.curTitle = "Options";

        $scope.addserver = function(){
            TrustPlusd.addserver($scope.newserver)
                .then(function(response){
                    console.log(response);
                });
        }

    }
);
