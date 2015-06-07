'use strict';

angular.module('TrustRpiWallet')
    .controller('PeerInfoCtrl', function ($scope, $rootScope, TrustPlusd) {
        $rootScope.app.curTitle = "Peer Info";

        TrustPlusd.getPeerInfo()
            .then(function(response){
                console.log(response.data);
                $scope.peers = response.data;
            })
    }
);
