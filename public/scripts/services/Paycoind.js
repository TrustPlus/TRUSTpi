angular.module('TrustRpiWallet')
    .factory('TrustPlusd', function($http, $q) {
        var service = {
            checkWallet: checkWallet,
            decodeRawTransaction: decodeRawTransaction, // <hex string>
            dumpPrivKey: dumpPrivKey, // <trustaddress>
            getAccount: getAccount, // <trustaddress>
            getAccountAddress: getAccountAddress,
            getAddressesByAccount: getAddressesByAccount,
            getBlock: getBlock, // <hash> [txinfo] [txdetails]
            getBalance: getBalance, // [account] [minconf=1]
            getBlockCount: getBlockCount,
            getBlockHash: getBlockHash, // <index>
            getBlockTemplate: getBlockTemplate, // [params]
            getCheckpoint: getCheckpoint,
            getConnectionCount: getConnectionCount,
            getDifficulty: getDifficulty,
            getGenerate: getGenerate,
            getHashesPerSec: getHashesPerSec,
            getInfo: getInfo,
            getMiningInfo: getMiningInfo,
            getNetworkGHps: getNetworkGHps,
            getNewAddress: getNewAddress, // [account]
            getPeerInfo: getPeerInfo,
            getRawMemPool: getRawMemPool,
            getRawTransaction: getRawTransaction, // <txid> [verbose=0]
            getReceivedByAccount: getReceivedByAccount, // <account> [minconf=1]
            getReceivedByAddress: getReceivedByAddress, // <trustaddress> [minconf=1]
            getTransaction: getTransaction,
            getTxOut: getTxOut, // "txid" n (includemempool)
            getWork: getWork, // [data]
            help: help,
            importPrivKey: importPrivKey, // <trustprivkey> [label]
            keyPoolRefill: keyPoolRefill,
            listAccounts: listAccounts,
            listAddressGroupings: listAddressGroupings,
            listMinting: listMinting, //[count=-1] [from=0]
            listReceivedByAccount: listReceivedByAccount, //[minconf=1] [includeempty=false]
            listReceivedByAddress: listReceivedByAddress, // [minconf=1] [includeempty=false]
            listSinceBlock: listSinceBlock, //[blockhash] [target-confirmations]
            listTransactions: listTransactions, //[account] [count=10] [from=0]
            listUnspent: listUnspent, //[minconf=1] [maxconf=9999999] ["address",...]
            makeKeyPair: makeKeyPair, //[prefix]
            move: move,// <fromaccount> <toaccount> <amount> [minconf=1] [comment]
            repairWallet: repairWallet,
            reserveBalance: reserveBalance,// [<reserve> [amount]]
            sendAlert: sendAlert, // <message> <privatekey> <minver> <maxver> <priority> <id> [cancelupto]
            sendFrom: sendFrom, // <fromaccount> <totrustaddress> <amount> [minconf=1] [comment] [comment-to]
            sendMany: sendMany,//<fromaccount> {address:amount,...} [minconf=1] [comment]
            sendRawTransaction: sendRawTransaction, //<hex string> [checkinputs=0]
            sendToAddress: sendToAddress,// <trustaddress> <amount> [comment] [comment-to]
            setAccount: setAccount, //<trustaddress> <account>
            setGenerate: setGenerate, // <generate> [genproclimit]
            setTxFee: setTxFee, //<amount>
            signMessage: signMessage, //<trustaddress> <message>
            signRawTransaction: signRawTransaction, // <hex string> [{"txid":txid,"vout":n,"scriptPubKey":hex},...] [<privatekey1>,...] [sighashtype="ALL"]
            stop: stop,
            submitBlock: submitBlock, //<hex data> [optional-params-obj]
            validateAddress: validateAddress, // <trustaddress>
            verifyMessage: verifyMessage, // <trustaddress> <signature> <message>
            walletLock: walletLock,
            walletPassphrase: walletPassphrase, // <passphrase> <timeout> [mintonly]
            walletPassphraseChange: walletPassphraseChange, // <oldpassphrase> <newpassphrase>

            listAllTransactions: listAllTransactions,
            listAddressTransactions: listAddressTransactions,
            saveSendAddress: saveSendAddress,
            unlock: unlock,
            saveDataJSON: saveDataJSON,
            addServer: addServer,
            serverIndex: -1,
            basicInfo: {},
            getServerInfo: getServerInfo,
            setServerIndex: setServerIndex
        };

        function checkWallet() {
            return {
                error: {
                    msg: "Not implemented yet"
                }
            };

            //var deferred = $q.defer();
            //
            //var payload = {
            //    index:service.serverIndex
            //};
            //
            //$http.post('/api/',payload)
            //    .then(function(response){
            //        deferred.resolve(response);
            //    });
            //
            //return deferred.promise;
        }

        function decodeRawTransaction(rawtrans){
            var deferred = $q.defer();

            var payload = {
                index: service.serverIndex,
                rawtrans: rawtrans
            };

            $http.post('/api/decoderawtransaction',payload)
                .then(function(response){
                    deferred.resolve(response);
                });
            return deferred.promise;
        }

        function dumpPrivKey() {
            return {
                error: {
                    msg: "Not implemented yet"
                }
            };
            //var deferred = $q.defer();
            //
            //var payload = {
            //    index:service.serverIndex
            //};
            //
            //$http.post('/api/',payload)
            //    .then(function(response){
            //        deferred.resolve(response);
            //    });
            //
            //return deferred.promise;
        }

        function getAccount() {
            return {
                error: {
                    msg: "Not implemented yet"
                }
            };
            //var deferred = $q.defer();
            //
            //var payload = {
            //    index:service.serverIndex
            //};
            //
            //$http.post('/api/',payload)
            //    .then(function(response){
            //        deferred.resolve(response);
            //    });
            //
            //return deferred.promise;
        }

        function getAccountAddress() {
            return {
                error: {
                    msg: "Not implemented yet"
                }
            };
            //var deferred = $q.defer();
            //
            //var payload = {
            //    index:service.serverIndex
            //};
            //
            //$http.post('/api/',payload)
            //    .then(function(response){
            //        deferred.resolve(response);
            //    });
            //
            //return deferred.promise;
        }

        function getAddressesByAccount() {
            return {
                error: {
                    msg: "Not implemented yet"
                }
            };
            //var deferred = $q.defer();
            //
            //var payload = {
            //    index:service.serverIndex
            //};
            //
            //$http.post('/api/',payload)
            //    .then(function(response){
            //        deferred.resolve(response);
            //    });
            //
            //return deferred.promise;
        }

        function getBlock() {
            return {
                error: {
                    msg: "Not implemented yet"
                }
            };
            //var deferred = $q.defer();
            //
            //var payload = {
            //    index:service.serverIndex
            //};
            //
            //$http.post('/api/',payload)
            //    .then(function(response){
            //        deferred.resolve(response);
            //    });
            //
            //return deferred.promise;
        }

        function getBalance() {
            return {
                error: {
                    msg: "Not implemented yet"
                }
            };
            //var deferred = $q.defer();
            //
            //var payload = {
            //    index:service.serverIndex
            //};
            //
            //$http.post('/api/',payload)
            //    .then(function(response){
            //        deferred.resolve(response);
            //    });
            //
            //return deferred.promise;
        }

        function getTransaction(txid) {
            var deferred = $q.defer();

            var payload = {
                index: service.serverIndex,
                txid: txid
            };

            $http.post('/api/gettransaction', payload)
                .then(function (response) {
                    deferred.resolve(response);
                });

            return deferred.promise;
        }

        function getRawTransaction(txid) {
            var deferred = $q.defer();

            var payload = {
                index: service.serverIndex,
                txid: txid
            };

            $http.post('/api/getrawtransaction', payload)
                .then(function (response) {
                    deferred.resolve(response);
                });
            return deferred.promise;
        }

        function getNewAddress(label) {
            var deferred = $q.defer();

            var payload = {
                index: service.serverIndex,
                account: label
            };

            $http.post('/api/getnewaddress', payload)
                .then(function (response) {
                    deferred.resolve(response);
                });
            return deferred.promise;
        }

        function getPeerInfo() {
            var deferred = $q.defer();

            $http.post('/api/peerinfo', {index: service.serverIndex})
                .then(function (response) {
                    deferred.resolve(response);
                });
            return deferred.promise;
        }

        function unlock(passphrase, timeout, stakingOnly) {
            var deferred = $q.defer();

            if(stakingOnly == null)
                stakingOnly = false;

            var payload = {
                index: service.serverIndex,
                passphrase: passphrase,
                timeout: timeout,
                stakingOnly: stakingOnly
            };

            $http.post('/api/unlock', payload)
                .then(function (response) {
                    console.log('/api/unlock response');
                    console.log(response);
                    deferred.resolve(response);
                });

            return deferred.promise;
        }

        function walletLock() {
            var deferred = $q.defer();
            $http.post('/api/walletlock', {index: service.serverIndex})
                .then(function (response) {
                    console.log("wallet lock response");
                    console.log(response);
                    deferred.resolve(response);
                });

            return deferred.promise;
        }

        function sendToAddress(sendPayload) {

            var deferred = $q.defer();

            console.log(sendPayload);

            sendPayload.amount = parseFloat(sendPayload.amount);

            var payload = {
                index: service.serverIndex,
                trustaddress: sendPayload.trustaddress,
                amount: sendPayload.amount
            };

            if (sendPayload.passphrase) {
                payload.passphrase = sendPayload.passphrase;
            }

            $http.post('/api/sendtoaddress', payload)
                .then(function (response) {
                    deferred.resolve(response.data);
                });

            return deferred.promise;
        }

        function saveSendAddress(address, label) {
            var deferred = $q.defer();

            var payload = {
                index: service.serverIndex,
                label: label,
                address: address
            };

            $http.post('/api/addtoaddressbook', payload)
                .then(function (response) {

                    deferred.resolve(response.data);
                });

            return deferred.promise;
        }

        function saveDataJSON() {

        }

        function addServer(newserver) {
            var deferred = $q.defer();
            $http.post('/api/addserver', newserver)
                .then(function (response) {
                    deferred.resolve(response.data);
                });
            return deferred.promise;
        }

        function listAllTransactions() {
            var deferred = $q.defer();

            var payload = {
                index: service.serverIndex,
                account: '*'
            };

            $http.post('/api/listalltransactions', payload)
                .then(function (response) {
                    deferred.resolve(response.data);
                });

            return deferred.promise;
        }

        function listAddressTransactions(address) {
            var deferred = $q.defer();
            $http.post('/api/listaddresstransactions', {'index': service.serverIndex, 'address': address})
                .then(function (response) {
                    deferred.resolve(response.data);
                });

            return deferred.promise;
        }

        function setServerIndex(index) {
            service.serverIndex = index;
        }

        function getInfo() {

            var deferred = $q.defer();

            $http.post('/api/getinfo', {'index': service.serverIndex})
                .then(function (response) {
                    service.basicInfo = response.data;
                    deferred.resolve(response.data);
                });
            return deferred.promise;
        }

        function listTransactions(qty) {
            var deferred = $q.defer();

            if (qty == null)
                qty = 10;

            $http.post('/api/listrecenttransactions', {'index': service.serverIndex, qty: parseInt(qty)})
                .then(function (response) {
                    deferred.resolve(response.data);
                });

            return deferred.promise;
        }

        function listAccounts() {
            var deferred = $q.defer();
            $http.post('/api/listaccounts', {'index': service.serverIndex})
                .then(function (response) {
                    var accounts = response.data;

                    var payload = {
                        'index': service.serverIndex,
                        'account': ''
                    };

                    accounts.forEach(function (key) {
                        payload.account = key.name;

                        $http.post('/api/getaddressesbyaccount', {'index': service.serverIndex, 'account': key.name})
                            .then(function (response) {
                                key.addresses = response.data;
                            });
                    });

                    deferred.resolve(accounts);
                });

            return deferred.promise;
        }

        function getServerInfo() {
            var deferred = $q.defer();
            $http.post('/api/getserverlist', {'index': service.serverIndex})
                .then(function (response) {
                    deferred.resolve(response.data);
                });

            return deferred.promise;
        }

        function listMinting() {
            var deferred = $q.defer();

            $http.post('/api/listminting', {'index': service.serverIndex})
                .then(function (response) {
                    deferred.resolve(response.data);
                });

            return deferred.promise;
        }

        function getBlockCount() {
            return {
                error: {
                    msg: "Not implemented yet"
                }
            };
            //var deferred = $q.defer();
            //
            //var payload = {
            //    index:service.serverIndex
            //};
            //
            //$http.post('/api/',payload)
            //    .then(function(response){
            //        deferred.resolve(response);
            //    });
            //
            //return deferred.promise;
        }

        function getBlockHash() {
            return {
                error: {
                    msg: "Not implemented yet"
                }
            };
            //var deferred = $q.defer();
            //
            //var payload = {
            //    index:service.serverIndex
            //};
            //
            //$http.post('/api/',payload)
            //    .then(function(response){
            //        deferred.resolve(response);
            //    });
            //
            //return deferred.promise;
        }

        function getBlockTemplate() {
            return {
                error: {
                    msg: "Not implemented yet"
                }
            };
            //var deferred = $q.defer();
            //
            //var payload = {
            //    index:service.serverIndex
            //};
            //
            //$http.post('/api/',payload)
            //    .then(function(response){
            //        deferred.resolve(response);
            //    });
            //
            //return deferred.promise;
        }

        function getCheckpoint() {
            return {
                error: {
                    msg: "Not implemented yet"
                }
            };
            //var deferred = $q.defer();
            //
            //var payload = {
            //    index:service.serverIndex
            //};
            //
            //$http.post('/api/',payload)
            //    .then(function(response){
            //        deferred.resolve(response);
            //    });
            //
            //return deferred.promise;
        }

        function getConnectionCount() {
            return {
                error: {
                    msg: "Not implemented yet"
                }
            };
            //var deferred = $q.defer();
            //
            //var payload = {
            //    index:service.serverIndex
            //};
            //
            //$http.post('/api/',payload)
            //    .then(function(response){
            //        deferred.resolve(response);
            //    });
            //
            //return deferred.promise;
        }

        function getDifficulty() {
            return {
                error: {
                    msg: "Not implemented yet"
                }
            };
            //var deferred = $q.defer();
            //
            //var payload = {
            //    index:service.serverIndex
            //};
            //
            //$http.post('/api/',payload)
            //    .then(function(response){
            //        deferred.resolve(response);
            //    });
            //
            //return deferred.promise;
        }

        function getGenerate() {
            return {
                error: {
                    msg: "Not implemented yet"
                }
            };
            //var deferred = $q.defer();
            //
            //var payload = {
            //    index:service.serverIndex
            //};
            //
            //$http.post('/api/',payload)
            //    .then(function(response){
            //        deferred.resolve(response);
            //    });
            //
            //return deferred.promise;
        }

        function getHashesPerSec() {
            return {
                error: {
                    msg: "Not implemented yet"
                }
            };
            //var deferred = $q.defer();
            //
            //var payload = {
            //    index:service.serverIndex
            //};
            //
            //$http.post('/api/',payload)
            //    .then(function(response){
            //        deferred.resolve(response);
            //    });
            //
            //return deferred.promise;
        }

        function getMiningInfo() {
            return {
                error: {
                    msg: "Not implemented yet"
                }
            };
            //var deferred = $q.defer();
            //
            //var payload = {
            //    index:service.serverIndex
            //};
            //
            //$http.post('/api/',payload)
            //    .then(function(response){
            //        deferred.resolve(response);
            //    });
            //
            //return deferred.promise;
        }

        function getNetworkGHps() {
            return {
                error: {
                    msg: "Not implemented yet"
                }
            };
            //var deferred = $q.defer();
            //
            //var payload = {
            //    index:service.serverIndex
            //};
            //
            //$http.post('/api/',payload)
            //    .then(function(response){
            //        deferred.resolve(response);
            //    });
            //
            //return deferred.promise;
        }

        function getRawMemPool() {
            return {
                error: {
                    msg: "Not implemented yet"
                }
            };
            //var deferred = $q.defer();
            //
            //var payload = {
            //    index:service.serverIndex
            //};
            //
            //$http.post('/api/',payload)
            //    .then(function(response){
            //        deferred.resolve(response);
            //    });
            //
            //return deferred.promise;
        }

        function getReceivedByAccount() {
            return {
                error: {
                    msg: "Not implemented yet"
                }
            };
            //var deferred = $q.defer();
            //
            //var payload = {
            //    index:service.serverIndex
            //};
            //
            //$http.post('/api/',payload)
            //    .then(function(response){
            //        deferred.resolve(response);
            //    });
            //
            //return deferred.promise;
        }

        function getTxOut() {
            return {
                error: {
                    msg: "Not implemented yet"
                }
            };
            //var deferred = $q.defer();
            //
            //var payload = {
            //    index:service.serverIndex
            //};
            //
            //$http.post('/api/',payload)
            //    .then(function(response){
            //        deferred.resolve(response);
            //    });
            //
            //return deferred.promise;
        }

        function getReceivedByAddress() {
            return {
                error: {
                    msg: "Not implemented yet"
                }
            };
            //var deferred = $q.defer();
            //
            //var payload = {
            //    index:service.serverIndex
            //};
            //
            //$http.post('/api/',payload)
            //    .then(function(response){
            //        deferred.resolve(response);
            //    });
            //
            //return deferred.promise;
        }

        function getWork() {
            return {
                error: {
                    msg: "Not implemented yet"
                }
            };
            //var deferred = $q.defer();
            //
            //var payload = {
            //    index:service.serverIndex
            //};
            //
            //$http.post('/api/',payload)
            //    .then(function(response){
            //        deferred.resolve(response);
            //    });
            //
            //return deferred.promise;
        }

        function help() {
            return {
                error: {
                    msg: "Not implemented yet"
                }
            };
            //var deferred = $q.defer();
            //
            //var payload = {
            //    index:service.serverIndex
            //};
            //
            //$http.post('/api/',payload)
            //    .then(function(response){
            //        deferred.resolve(response);
            //    });
            //
            //return deferred.promise;
        }

        function importPrivKey() {
            return {
                error: {
                    msg: "Not implemented yet"
                }
            };
            //var deferred = $q.defer();
            //
            //var payload = {
            //    index:service.serverIndex
            //};
            //
            //$http.post('/api/',payload)
            //    .then(function(response){
            //        deferred.resolve(response);
            //    });
            //
            //return deferred.promise;
        }

        function keyPoolRefill() {
            return {
                error: {
                    msg: "Not implemented yet"
                }
            };
            //var deferred = $q.defer();
            //
            //var payload = {
            //    index:service.serverIndex
            //};
            //
            //$http.post('/api/',payload)
            //    .then(function(response){
            //        deferred.resolve(response);
            //    });
            //
            //return deferred.promise;
        }

        function listAddressGroupings() {
            return {
                error: {
                    msg: "Not implemented yet"
                }
            };
            //var deferred = $q.defer();
            //
            //var payload = {
            //    index:service.serverIndex
            //};
            //
            //$http.post('/api/',payload)
            //    .then(function(response){
            //        deferred.resolve(response);
            //    });
            //
            //return deferred.promise;
        }

        function listReceivedByAccount() {
            return {
                error: {
                    msg: "Not implemented yet"
                }
            };
            //var deferred = $q.defer();
            //
            //var payload = {
            //    index:service.serverIndex
            //};
            //
            //$http.post('/api/',payload)
            //    .then(function(response){
            //        deferred.resolve(response);
            //    });
            //
            //return deferred.promise;
        }

        function listReceivedByAddress() {
            return {
                error: {
                    msg: "Not implemented yet"
                }
            };
            //var deferred = $q.defer();
            //
            //var payload = {
            //    index:service.serverIndex
            //};
            //
            //$http.post('/api/',payload)
            //    .then(function(response){
            //        deferred.resolve(response);
            //    });
            //
            //return deferred.promise;
        }

        function listSinceBlock() {
            return {
                error: {
                    msg: "Not implemented yet"
                }
            };
            //var deferred = $q.defer();
            //
            //var payload = {
            //    index:service.serverIndex
            //};
            //
            //$http.post('/api/',payload)
            //    .then(function(response){
            //        deferred.resolve(response);
            //    });
            //
            //return deferred.promise;
        }

        function listUnspent() {
            return {
                error: {
                    msg: "Not implemented yet"
                }
            };
            //var deferred = $q.defer();
            //
            //var payload = {
            //    index:service.serverIndex
            //};
            //
            //$http.post('/api/',payload)
            //    .then(function(response){
            //        deferred.resolve(response);
            //    });
            //
            //return deferred.promise;
        }

        function makeKeyPair() {
            return {
                error: {
                    msg: "Not implemented yet"
                }
            };
            //var deferred = $q.defer();
            //
            //var payload = {
            //    index:service.serverIndex
            //};
            //
            //$http.post('/api/',payload)
            //    .then(function(response){
            //        deferred.resolve(response);
            //    });
            //
            //return deferred.promise;
        }

        function move() {
            return {
                error: {
                    msg: "Not implemented yet"
                }
            };
            //var deferred = $q.defer();
            //
            //var payload = {
            //    index:service.serverIndex
            //};
            //
            //$http.post('/api/',payload)
            //    .then(function(response){
            //        deferred.resolve(response);
            //    });
            //
            //return deferred.promise;
        }

        function repairWallet() {
            return {
                error: {
                    msg: "Not implemented yet"
                }
            };
            //var deferred = $q.defer();
            //
            //var payload = {
            //    index:service.serverIndex
            //};
            //
            //$http.post('/api/',payload)
            //    .then(function(response){
            //        deferred.resolve(response);
            //    });
            //
            //return deferred.promise;
        }

        function reserveBalance() {
            return {
                error: {
                    msg: "Not implemented yet"
                }
            };
            //var deferred = $q.defer();
            //
            //var payload = {
            //    index:service.serverIndex
            //};
            //
            //$http.post('/api/',payload)
            //    .then(function(response){
            //        deferred.resolve(response);
            //    });
            //
            //return deferred.promise;
        }

        function sendAlert() {
            return {
                error: {
                    msg: "Not implemented yet"
                }
            };
            //var deferred = $q.defer();
            //
            //var payload = {
            //    index:service.serverIndex
            //};
            //
            //$http.post('/api/',payload)
            //    .then(function(response){
            //        deferred.resolve(response);
            //    });
            //
            //return deferred.promise;
        }

        function sendFrom() {
            return {
                error: {
                    msg: "Not implemented yet"
                }
            };
            //var deferred = $q.defer();
            //
            //var payload = {
            //    index:service.serverIndex
            //};
            //
            //$http.post('/api/',payload)
            //    .then(function(response){
            //        deferred.resolve(response);
            //    });
            //
            //return deferred.promise;
        }

        function sendMany() {
            return {
                error: {
                    msg: "Not implemented yet"
                }
            };
            //var deferred = $q.defer();
            //
            //var payload = {
            //    index:service.serverIndex
            //};
            //
            //$http.post('/api/',payload)
            //    .then(function(response){
            //        deferred.resolve(response);
            //    });
            //
            //return deferred.promise;
        }

        function sendRawTransaction() {
            return {
                error: {
                    msg: "Not implemented yet"
                }
            };
            //var deferred = $q.defer();
            //
            //var payload = {
            //    index:service.serverIndex
            //};
            //
            //$http.post('/api/',payload)
            //    .then(function(response){
            //        deferred.resolve(response);
            //    });
            //
            //return deferred.promise;
        }

        function setAccount() {
            return {
                error: {
                    msg: "Not implemented yet"
                }
            };
            //var deferred = $q.defer();
            //
            //var payload = {
            //    index:service.serverIndex
            //};
            //
            //$http.post('/api/',payload)
            //    .then(function(response){
            //        deferred.resolve(response);
            //    });
            //
            //return deferred.promise;
        }

        function setGenerate() {
            return {
                error: {
                    msg: "Not implemented yet"
                }
            };
            //var deferred = $q.defer();
            //
            //var payload = {
            //    index:service.serverIndex
            //};
            //
            //$http.post('/api/',payload)
            //    .then(function(response){
            //        deferred.resolve(response);
            //    });
            //
            //return deferred.promise;
        }

        function setTxFee() {
            return {
                error: {
                    msg: "Not implemented yet"
                }
            };
            //var deferred = $q.defer();
            //
            //var payload = {
            //    index:service.serverIndex
            //};
            //
            //$http.post('/api/',payload)
            //    .then(function(response){
            //        deferred.resolve(response);
            //    });
            //
            //return deferred.promise;
        }

        function signMessage() {
            return {
                error: {
                    msg: "Not implemented yet"
                }
            };
            //var deferred = $q.defer();
            //
            //var payload = {
            //    index:service.serverIndex
            //};
            //
            //$http.post('/api/',payload)
            //    .then(function(response){
            //        deferred.resolve(response);
            //    });
            //
            //return deferred.promise;
        }

        function signRawTransaction() {
            return {
                error: {
                    msg: "Not implemented yet"
                }
            };
            //var deferred = $q.defer();
            //
            //var payload = {
            //    index:service.serverIndex
            //};
            //
            //$http.post('/api/',payload)
            //    .then(function(response){
            //        deferred.resolve(response);
            //    });
            //
            //return deferred.promise;
        }

        function stop() {
            return {
                error: {
                    msg: "Not implemented yet"
                }
            };
            //var deferred = $q.defer();
            //
            //var payload = {
            //    index:service.serverIndex
            //};
            //
            //$http.post('/api/',payload)
            //    .then(function(response){
            //        deferred.resolve(response);
            //    });
            //
            //return deferred.promise;
        }

        function submitBlock() {
            return {
                error: {
                    msg: "Not implemented yet"
                }
            };
            //var deferred = $q.defer();
            //
            //var payload = {
            //    index:service.serverIndex
            //};
            //
            //$http.post('/api/',payload)
            //    .then(function(response){
            //        deferred.resolve(response);
            //    });
            //
            //return deferred.promise;
        }

        function validateAddress() {
            return {
                error: {
                    msg: "Not implemented yet"
                }
            };
            //var deferred = $q.defer();
            //
            //var payload = {
            //    index:service.serverIndex
            //};
            //
            //$http.post('/api/',payload)
            //    .then(function(response){
            //        deferred.resolve(response);
            //    });
            //
            //return deferred.promise;
        }

        function verifyMessage() {
            return {
                error: {
                    msg: "Not implemented yet"
                }
            };
            //var deferred = $q.defer();
            //
            //var payload = {
            //    index:service.serverIndex
            //};
            //
            //$http.post('/api/',payload)
            //    .then(function(response){
            //        deferred.resolve(response);
            //    });
            //
            //return deferred.promise;
        }

        function walletPassphrase() {
            return {
                error: {
                    msg: "Not implemented yet"
                }
            };
            //var deferred = $q.defer();
            //
            //var payload = {
            //    index:service.serverIndex
            //};
            //
            //$http.post('/api/',payload)
            //    .then(function(response){
            //        deferred.resolve(response);
            //    });
            //
            //return deferred.promise;
        }

        function walletPassphraseChange() {
            return {
                error: {
                    msg: "Not implemented yet"
                }
            };
            //var deferred = $q.defer();
            //
            //var payload = {
            //    index:service.serverIndex
            //};
            //
            //$http.post('/api/',payload)
            //    .then(function(response){
            //        deferred.resolve(response);
            //    });
            //
            //return deferred.promise;
        }

        return service;
    }
);
