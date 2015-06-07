'use strict';

angular.module('TrustRpiWallet', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'ngStorage',
    'ui.bootstrap'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider
            .otherwise('/dashboard');
        $stateProvider
            .state('dashboard', {
                url: '/dashboard',
                controller: 'DashboardCtrl',
                templateUrl: 'views/dashboard.html'
            })
            .state('send', {
                url: '/send',
                controller: 'SendCtrl',
                templateUrl: 'views/send.html'
            })
            .state('receive', {
                url: '/receive',
                controller: 'ReceiveCtrl',
                templateUrl: 'views/receive.html'
            })
            .state('transactions', {
                url: '/transactions',
                controller: 'TransactionsCtrl',
                templateUrl: 'views/transactions.html'
            })
            .state('minting', {
                url: '/minting',
                controller: 'MintingCtrl',
                templateUrl: 'views/minting.html'
            })
            .state('addressbook', {
                url: '/addressbook',
                controller: 'AddressbookCtrl',
                templateUrl: 'views/addressbook.html'
            })
            .state('addnode', {
                url: '/addnode',
                controller: 'AddNodeCtrl',
                templateUrl: 'views/addnode.html'
            })
            .state('peerinfo', {
                url: '/peerinfo',
                controller: 'PeerInfoCtrl',
                templateUrl: 'views/peerinfo.html'
            })
            .state('options', {
                url: '/options',
                controller: 'OptionsCtrl',
                templateUrl: 'views/options.html'
            })
            .state('about', {
                url: '/about',
                controller: 'AboutCtrl',
                templateUrl: 'views/about.html'
            })
            .state('contribute', {
                url: '/contribute',
                controller: 'ContributeCtrl',
                templateUrl: 'views/contribute.html'
            })
            .state('txidinfo', {
                url: '/txid/:txid',
                controller: 'TXIDCtrl',
                templateUrl: 'views/txid.html'
            })
            .state('addressinfo', {
                url: '/address/:address',
                controller: 'AddressInfoCtrl',
                templateUrl: 'views/address.html'
            })
            .state('blockinfo', {
                url: '/block/:block',
                controller: 'BlockInfoCtrl',
                templateUrl: 'views/block.html'
            })
            .state('verifymessage', {
                url: '/verifymessage',
                controller: 'VerifyMessageCtrl',
                templateUrl: 'views/verifymessage.html'
            })
            .state('signmessage', {
                url: '/signmessage',
                controller: 'SignMessageCtrl',
                templateUrl: 'views/signmessage.html'
            })
            .state('lockwallet', {
                url: '/lockwallet',
                controller: 'LockWalletCtrl',
                templateUrl: 'views/lockwallet.html'
            })
            .state('unlockwallet', {
                url: '/unlockwallet',
                controller: 'UnlockWalletCtrl',
                templateUrl: 'views/unlockwallet.html'
            })
            .state('settxfee', {
                url: '/settxfee',
                controller: 'SetTXFeeCtrl',
                templateUrl: 'views/settxfee.html'
            })
            .state('move', {
                url: '/move',
                controller: 'MoveCtrl',
                templateUrl: 'views/move.html'
            })
            .state('console', {
                url: '/console',
                controller: 'ConsoleCtrl',
                templateUrl: 'views/console.html'
            })
  })
    .controller('MainCtrl', function ($scope, $rootScope, $localStorage, TrustPlusd) {

        TrustPlusd.getServerInfo()
            .then(function(response){
                $localStorage.serverList = response;
                $scope.serverList = response;
            });

        $scope.changeServer = function(index){
            TrustPlusd.setServerIndex(index);
            $localStorage.chosenServer = $localStorage.serverList[index];
            $localStorage.chosenServerIndex = index;

            $scope.chosenServer = $localStorage.serverList[index];
            TrustPlusd.getInfo()
                .then(function (response) {
                    $rootScope.getInfo = response;
                }
            );
            TrustPlusd.listTransactions()
                .then(function(response){
                    $rootScope.listTransactions = response;
                });
        };

        if($localStorage.chosenServerIndex) {
            TrustPlusd.setServerIndex($localStorage.chosenServerIndex);
        } else {
            TrustPlusd.setServerIndex(0);
        }

        $localStorage.chosenServer = $localStorage.serverList[0];
        $scope.chosenServer = $localStorage.serverList[0];

        $localStorage.app = $rootScope.app;

        $scope.refreshInfo = function() {
            TrustPlusd.getInfo()
                .then(function (response) {
                    $rootScope.getInfo = response;
                }
            );
            console.log("recentTransactions ");
            TrustPlusd.listTransactions(10)
                .then(function(response){
                    $rootScope.listTransactions = response;
                });
        };

        $scope.refreshInfo();
    }
)
    .run(function($rootScope){
        $rootScope.app = {
            name: 'RaspberryPi Wallet',
            version: '0.1.5 (12MAY2015)',
            curTitle: ''
        };
    });
