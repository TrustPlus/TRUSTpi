'use strict';

angular.module('TrustRpiWallet')
    .controller('TransactionsCtrl', function ($scope, $rootScope, $http, $localStorage, $state, $stateParams, TrustPlusd) {
        $rootScope.app.curTitle = "Transactions";

        TrustPlusd.listAllTransactions()
            .then(function(response){
                $scope.transactions = response;
                $localStorage.transactions = response;
            });

        $state.reload = function reload() {
            $state.transitionTo($state.current, $stateParams, { reload: true, inherit: true, notify: true });
        };
    }
);
