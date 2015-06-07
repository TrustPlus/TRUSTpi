'use strict';

angular.module('TrustRpiWallet')
    .controller('LockWalletCtrl', function ($scope, $rootScope, $localStorage, TrustPlusd) {
        $rootScope.app.curTitle = "Lock Wallet";

        $scope.walletLock = function() {

            $localStorage.chosenServer.locked = true;
            $localStorage.chosenServer.stakingOnly = false;

            TrustPlusd.walletLock()
                .then(function (response) {
                    console.log(response);
                    $scope.response = response.data;
                })
        }
    }
);
