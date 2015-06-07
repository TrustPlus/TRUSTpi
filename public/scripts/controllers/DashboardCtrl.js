'use strict';

angular.module('TrustRpiWallet')
    .controller('DashboardCtrl', function ($scope, $rootScope, $http, paycoind) {
        $rootScope.app.curTitle = "Dashboard";

    }
);
