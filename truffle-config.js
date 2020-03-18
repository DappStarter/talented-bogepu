require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('./src/lib/hdwalletprovider');

let mnemonic = 'inner arena bone table edge rare remain evil guess clog bubble gesture'; 
let testAccounts = [
"0x58cfa50d01cc52924662e70811cfeb02a5a445682e2d1c0147499f8e5eb37e54",
"0x1333b6511fb2cce1220b6bec66df75ba85db62142818d1843c59e1b5207318f6",
"0x40a93b3a679cd3d70cdc1986eeefecc895281b827fb3d06cd6263559f2d0d3e9",
"0x97066f5b01df459730a5edb968f1ff0272a4727e4620d518d949c3878a4424fa",
"0x5bc4a96fcfe871ca711eb6601c2ca7522d2943ba086a4b41056aea6ad0fca8f8",
"0x371ee0888ebd3ffdfeab41dcea22ad9bea7fb3c857e3247679dc10c41169f6bd",
"0x929fee31128ff7f605865f7a8a89ff9237ea992a4eb9bb9c54852d4ca8fee58a",
"0x74018b226c535b4828cd2a47e09cf03911d4379b9a3daf098e4b9aa137dba23a",
"0xbf83e7a6945b74d2e21778cf7c55626537effe126a944c5cc0c3c4266e03da3f",
"0xbefa5da94a520c307fc673f119d109487d85d010f69ae3cd1153bfcec76355fa"
]; 
let devUri = 'https://api.baobab.klaytn.net:8651';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '1001',
            gas: '8500000',
            gasPrice: null,
        }
    },
    compilers: {
        solc: {
            version: '^0.5.6'
        }
    }
};
