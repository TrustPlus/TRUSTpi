'use strict';

angular.module('TrustRpiWallet')
    .controller('DashboardCtrl', function ($scope, $rootScope, $http, TrustPlusd) {
        $rootScope.app.curTitle = "Dashboard";

    }
);
