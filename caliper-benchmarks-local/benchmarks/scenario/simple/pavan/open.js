'use strict';

module.exports.info  = 'Template callback';

const contractID = 'token';
const version = '1.0';

let bc, ctx, clientArgs, clientIdx;

module.exports.init = async function(blockchain, context, args) {
    bc = blockchain;
    ctx = context;
    clientArgs = args;
    clientIdx = context.clientIdx.toString();
    for (let i=0; i<clientArgs.assets; i++) {
        try {
            const assetID = `${clientIdx}_${i}`;
            console.log(`Client ${clientIdx}: Creating asset ${assetID}`);
            const myArgs = {
                chaincodeFunction: 'initCurrency',
                invokerIdentity: 'Admin@org1.example.com',
                chaincodeArguments: [assetID,assetID,'1000','skyhuihui','false']
            };
            await bc.bcObj.invokeSmartContract(ctx, contractID, version, myArgs);
        } catch (error) {
            console.log(`Client ${clientIdx}: Smart Contract threw with error: ${error}` );
        }
    }
};

module.exports.run = function() {
    const randomId = Math.floor(Math.random()*clientArgs.assets);
    const myArgs = {
        chaincodeFunction: 'balance',
        invokerIdentity: 'Admin@org1.example.com',
        chaincodeArguments: ['skyhuihui','22']
    };
    return bc.bcObj.querySmartContract(ctx, contractID, version, myArgs);
};

module.exports.end = async function() {
};