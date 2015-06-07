'use strict';

angular.module('TrustRpiWallet')
    .controller('MintingCtrl', function ($scope, $rootScope, $localStorage, TrustPlusd) {
        $rootScope.app.curTitle = "Minting";

        TrustPlusd.listMinting()
            .then(function(response){
                $localStorage.listMinting = response;
                $rootScope.listMinting = response;
            });
    }
);
