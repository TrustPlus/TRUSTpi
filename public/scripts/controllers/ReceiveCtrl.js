'use strict';

angular.module('TrustRpiWallet')
    .controller('ReceiveCtrl', function ($scope, $rootScope, $localStorage, TrustPlusd) {
        $rootScope.app.curTitle = "Receive";

        $scope.listaccounts = function() {
            TrustPlusd.listAccounts()
                .then(function (response) {
                    $scope.accounts = response;
                    $localStorage.accounts = response;
                });
        };

        $scope.newReceiveAddress = function(label){
            TrustPlusd.getNewAddress(label)
                .then(function(response){
                    console.log(response);
                    $scope.listaccounts();
                });
        };

        $scope.listaccounts();
    }
);
