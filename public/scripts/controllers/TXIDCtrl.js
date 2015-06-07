'use strict';

angular.module('TrustRpiWallet')
    .controller('TXIDCtrl', function ($scope, $rootScope, $stateParams, TrustPlusd) {
        $rootScope.app.curTitle = "TXID Info";

        $scope.txid = $stateParams.txid;

        TrustPlusd.getRawTransaction($scope.txid)
            .then(function(response){
                $scope.rawtrans = response.data;

                TrustPlusd.decodeRawTransaction(response.data)
                    .then(function(response){
                        $scope.decodedtrans = response.data;
                    })

            });

        TrustPlusd.getTransaction($scope.txid)
            .then(function(response){
                $scope.gettransaction = response.data;
            });
    }
);
