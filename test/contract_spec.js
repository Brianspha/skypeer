/*global artifacts, contract, it*/
/**/
// For documentation please see https://framework.embarklabs.io/docs/contracts_testing.html
const Token = artifacts.require("ERC20");
const Sablier = artifacts.require("Sablier");
const bigNumber = require("bignumber.js");
const intialAmount = new bigNumber(6000000 * 10 ** 18).toFixed();

let accounts1,
  tokenAmount,
  startDate,
  balance,
  endDate,
  deposit,
  streamId,
  keys,
  tokenID,
  decimals;
config(
  {
    contracts: {
      deploy: {
        ERC20: {
          args: ["Test", "TE", 18, intialAmount],
        },
        CTokenManager: {
          args: [],
        },
        Sablier: {
          deps: ["ERC20"],
          args: ["$CTokenManager"],
        },
      },
    },
  },
  (err, accs) => {
    accounts = accs;
  }
);

contract("ERC720", async () => {
  it("should transfer 100000000000000000000000", async () => {
    var receipt = await Token.methods
      .transfer(
        accounts[1],
        new bigNumber(9900000000000000000000 * 10 ** 18).toFixed()
      )
      .send({
        gas: 6000000,
        from: accounts[0],
      });
    assert.strictEqual(receipt != null, true);
    // console.log('receipt: ', receipt.events.Approval.returnValues)
  });
});

contract("SkyPeer", async function() {
  it("should start a stream", async function() {
    tokenAmount = new bigNumber(Math.round(Math.random() * 300));
    tokenAmount = tokenAmount.multipliedBy(new bigNumber(10).pow(18));
    var startDate = new bigNumber(
      new Date(new Date().setMinutes(new Date().getMinutes() + 5)).getTime()
    );
    startDate = startDate.decimalPlaces(0).toFixed();
    var currentDate = new Date();
    currentDate.setHours(new Date().getHours() + 12);
    currentDate.setMinutes(new Date().getMinutes() + 12);
    var endDate = new bigNumber(currentDate.getTime());
    endDate = endDate.decimalPlaces(0).toFixed(0);
    var timeDelta = new bigNumber(startDate - endDate);
    console.log("timeDelta: ", timeDelta);
    startDate = Math.round(startDate);
    endDate = Math.round(endDate);
    console.log("startDate: ", startDate);
    console.log("endDate: ", endDate);
    console.log("tokenAmount: ", tokenAmount);
    var timeDelta = new bigNumber(endDate - startDate);
    console.log("timeDelta: ", timeDelta);
    deposit = calculateDeposit(timeDelta, tokenAmount);
    var bal = await Token.methods.balanceOf(accounts[2]).call({ gas: 6000000 });
    console.log(deposit, bal, bal > deposit);
    console.log(
      `accounts[1],
    deposit,
    startDate,
    endDate`,
      accounts[2],
      deposit,
      startDate,
      endDate
    );
    var approved = await Token.methods
      .approve(
        Sablier.options.address,
        new bigNumber(9900000000000000000000 * 10 ** 18).toFixed()
      )
      .send({
        gas: 6000000,
        from: accounts[0],
      });
    var streamReceipt = await Sablier.methods
      .createStream(
        accounts[2],
        deposit,
        Token.options.address,
        startDate,
        endDate
      )
      .send({
        gas: 6000000,
        from: accounts[0],
      });
    streamId = streamReceipt.events.CreateStream.returnValues.streamId;
    console.log("streamReceipt: ", streamReceipt);
    await increaseTime(1613921832081);
    var bal = await Sablier.methods.balanceOf(streamId, accounts[2]).call({
      gas: 6000000,
      from: accounts[0],
    });
    console.log("user balance: ", new bigNumber(bal).div(10 ** 18).toFixed());
  });
  it("should check user balance", async function() {
    await increaseTime(1613921832081);
    var bal = await Token.methods
      .balanceOf( accounts[2])
      .call({ gas: 6000000 });
    console.log("user balance: ", new bigNumber(bal).div(10 ** 18).toFixed());
    assert.strictEqual(bal > 0, true);
  });
});

function calculateDeposit(delta, deposit) {
  var diff = deposit.minus(deposit.minus(deposit.mod(delta)));
  deposit = new bigNumber(deposit).minus(diff);
  console.log("deposit.toFixed(): ", deposit.toFixed());
  return deposit.toFixed();
}
