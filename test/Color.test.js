/* eslint-disable no-undef */
const Color = artifacts.require("./Color.sol");

require('chai')
    .use(require('chai-as-promised'))
    .should();
   
contract('Color', (accounts) => {
    let contract;

    describe('deployment',async () => {
        it('deploys successfully', async () => {
            contract = await Color.deployed();
            const address = contract.address;
            assert.notEqual(address, 0x0);
            assert.notEqual(address, '');
            assert.notEqual(address, null);
            assert.notEqual(address, undefined);
        });
    });
});    