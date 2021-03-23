require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'grace seek surge trip film birth museum uncle install beach system gather'; 
let testAccounts = [
"0x0ca6e4cefe5c664ccab22928edcdf407a358e9e988d5f594282076f5b7b7ead2",
"0x35c543ce0b503a69e50b643aa046f217364036873c6cbd5174881d140ed0b34d",
"0x7fd258f02fc118e51d69fb5f5f7b91fcdf12aee65fd6fec63e4e59f10563bcb8",
"0x034131e9d30a229f2fb5733e1654f360191a64baf1ec83e195317879aa59ff64",
"0xa6d7048aaead014b717ca9094d4c1b3255487792e8d59b3755d5e03ac597edae",
"0xf3a3f9ad27911dd5d33b72e3b1bec8259ea648686910be26937060bdacb3b298",
"0xd838936f8a317ef4a2f37ee31367ad771ce9900f26b9356f1ab65d81eb17fb7b",
"0xacbd13e6d95bf08808fe5b7008786a162546fa97e9046bda791450001b7657fb",
"0x9e9d1dfcf144bd57fd040fbc4fe872e06283af63d571a602c96d22941598cc9d",
"0x01a153ad70996e0354e5da076100cfd2f337caf0285dab917ae640925a609883"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

