<template>
  <section class="promo-section ptb-100 dark-bg-text secondary-bg" id="tokenomics">
    <div class="container">
      <div class="row">
        <div class="col-md-12 text-center">
          <img src="img/redesign/tokenomics.png" class="img-fluid" style="max-width: 30%">
          <div class="clearfix"></div>
          <div class="mt-5">
            <h1 class="text-white">TOKENOMICS</h1>
          </div>
        </div>
        <div class="col-md-12">
          <div class="row equal">
<!--            <div class="col-md-4 col-lg-4">-->
<!--              <div class="single-promo single-promo-hover single-promo-1 rounded text-center primary-bg">-->
<!--                <img src="img/redesign/tokenomics-symbol.svg">-->
<!--                <h5>TRANSFERABILITY</h5>-->
<!--                <ul class="list-tokenomics">-->
<!--                  <li>Taxless transfer of tokens</li>-->
<!--                  <li>Allows staking and leads to a more advanced ecosystem</li>-->
<!--                  <li>Cross chain bridging, e.g. BSC, Polygon, Fantom, PulseChain</li>-->
<!--                </ul>-->
<!--              </div>-->
<!--            </div>-->
            <div class="col-md-6 col-lg-6">
              <div class="single-promo single-promo-hover single-promo-1 rounded text-center primary-bg">
                <img src="img/redesign/tokenomics-supply.svg">
                <h5>DEVELOPMENT FEES</h5>
                <ul class="list-tokenomics">
                  <li>Max. 10% (current {{ buyTax }}%) on buys and max. 10% (current {{ sellTax }}%) on sells</li>
                  <li>Fees classified into different buckets (development, staking, play-to-earn, DAO, Shrine)</li>
                </ul>
              </div>
            </div>
            <div class="col-md-6 col-lg-6">
              <div class="single-promo single-promo-hover single-promo-1 rounded text-center primary-bg">
                <img src="img/redesign/tokenomics-redistribution.svg">
                <h5>BETTER TRADEABILITY</h5>
                <ul class="list-tokenomics">
                  <li>Support for more tradable DEX pairs (e.g. USDT/USDC/wBTC on Sushiswap)</li>
                  <li>Custom functions added to allow tax less liquidity add/removal</li>
                  <li>User interface to be added to future dashboard</li>
                </ul>
              </div>
            </div>
<!--          <div class="row equal mt-4">-->
<!--            <div class="col-md-4 col-lg-4">-->
<!--              <div class="single-promo single-promo-hover single-promo-1 rounded text-center primary-bg">-->
<!--                <img src="img/redesign/tokenomics-launch.svg">-->
<!--                <h5>REMOVAL OF REFLECTION</h5>-->
<!--                <ul class="list-tokenomics">-->
<!--                  <li>RFI removal to avoid disproportionate sell pressure from large holders</li>-->
<!--                  <li>Staking to receive ETH funded by taxes</li>-->
<!--                  <li>Rewards automatically given to stakers (e.g. free Fountain Of Fortune tickets)</li>-->
<!--                </ul>-->
<!--              </div>-->
<!--            </div>-->
            <div class="col-md-6 col-lg-6">
              <div class="single-promo single-promo-hover single-promo-1 rounded text-center primary-bg">
                <img src="img/redesign/tokenomics-safe.svg">
                <h5>REMOVAL OF SELL LIMITS</h5>
                <ul class="list-tokenomics">
                  <li>Removal of sell limits and cooldowns to build a more mature ecosystem</li>
                  <li>Necessary for CEX listings</li>
                  <li>Allows arbitrage</li>
                </ul>
              </div>
            </div>
            <div class="col-md-6 col-lg-6">
              <div class="single-promo single-promo-hover single-promo-1 rounded text-center primary-bg">
                <img src="img/redesign/tokenomics-fee.svg">
                <h5>GOVERNANCE/DAO</h5>
                <ul class="list-tokenomics">
                  <li>Internal snapshot capabilities added to $MYOBU to allow future DAO functionalities</li>
                  <li>DAO governance over community DAO fund and/or certain parameters of the ecosystem</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-12 mt-5">
          <img src="img/redesign/self-funded@2x.png" class="img-fluid">
        </div>
      </div>
    </div>
  </section>
</template>

<style type="text/css">
.list-tokenomics {
  font-size: 14px;
  color: white;
  text-align: left;
}

.list-tokenomics li {
  margin-bottom: 15px;
  list-style-position: outside;
  margin-left: 2em;
}

.list-tokenomics li:before {
  display: inline-block;
  background-size: 10px 10px;
  background-image: linear-gradient(45deg, #cdbdff, #cdbdff);
  /*background-image: url("../../assets/img/redesign/checked@2x.png");*/
  background-repeat: no-repeat;
  width: 10px;
  height: 10px;
  content: "";
  margin-right: 10px;
  margin-left: -20px;
  vertical-align: middle;
  /*border-radius: 50%;*/
}
</style>

<script>

var Web3 = require('web3');

const abi = [{"inputs":[{"internalType":"address payable","name":"addr1","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"newDAOContract","type":"address"}],"name":"DAOChanged","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"impact","type":"uint256"},{"internalType":"uint256","name":"buyFee","type":"uint256"},{"internalType":"uint256","name":"sellFee","type":"uint256"},{"internalType":"uint256","name":"transferFee","type":"uint256"}],"indexed":false,"internalType":"struct IMyobu.Fees","name":"newFees","type":"tuple"}],"name":"FeesChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"teamFee","type":"uint256"}],"name":"FeesTaken","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"pair","type":"address"},{"indexed":false,"internalType":"uint256","name":"amountMyobu","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amountToken","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"liquidity","type":"uint256"}],"name":"LiquidityAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"pair","type":"address"},{"indexed":false,"internalType":"uint256","name":"amountToken","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amountETH","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"liquidity","type":"uint256"}],"name":"LiquidityAddedETH","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"pair","type":"address"},{"indexed":false,"internalType":"uint256","name":"amountMyobu","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amountToken","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"liquidity","type":"uint256"}],"name":"LiquidityRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"pair","type":"address"},{"indexed":false,"internalType":"uint256","name":"amountToken","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amountETH","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amountRemoved","type":"uint256"}],"name":"LiquidityRemovedETH","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"newMyobuSwap","type":"address"}],"name":"MyobuSwapChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"}],"name":"Snapshot","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"newTaxAddress","type":"address"}],"name":"TaxAddressChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address[]","name":"addresses","type":"address[]"}],"name":"TaxedTransferAddedFor","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address[]","name":"addresses","type":"address[]"}],"name":"TaxedTransferRemovedFor","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DAO","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"pair","type":"address"},{"internalType":"address","name":"router","type":"address"}],"name":"addDEX","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"addLiquidity","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"snapshotId","type":"uint256"}],"name":"balanceOfAt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"currentFees","outputs":[{"components":[{"internalType":"uint256","name":"impact","type":"uint256"},{"internalType":"uint256","name":"buyFee","type":"uint256"},{"internalType":"uint256","name":"sellFee","type":"uint256"},{"internalType":"uint256","name":"transferFee","type":"uint256"}],"internalType":"struct IMyobu.Fees","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getCurrentSnapshotId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"manualsend","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"manualswap","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"myobuSwap","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"pair","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountTokenB","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountTokenBMin","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"internalType":"struct IMyobu.AddLiquidityParams","name":"params","type":"tuple"}],"name":"noFeeAddLiquidity","outputs":[{"internalType":"uint256","name":"amountMyobu","type":"uint256"},{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"pair","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amountTokenOrLP","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"internalType":"struct IMyobu.LiquidityETHParams","name":"params","type":"tuple"}],"name":"noFeeAddLiquidityETH","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"pair","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amountLP","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountTokenBMin","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"internalType":"struct IMyobu.RemoveLiquidityParams","name":"params","type":"tuple"}],"name":"noFeeRemoveLiquidity","outputs":[{"internalType":"uint256","name":"amountMyobu","type":"uint256"},{"internalType":"uint256","name":"amountToken","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"pair","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amountTokenOrLP","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"internalType":"struct IMyobu.LiquidityETHParams","name":"params","type":"tuple"}],"name":"noFeeRemoveLiquidityETH","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"openTrading","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"pair","type":"address"}],"name":"removeDEX","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"notTaxed","type":"address[]"}],"name":"removeTaxedTransferFor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"setTo","type":"bool"}],"name":"setAntiLiqBot","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newDAO","type":"address"}],"name":"setDAO","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"impact","type":"uint256"},{"internalType":"uint256","name":"buyFee","type":"uint256"},{"internalType":"uint256","name":"sellFee","type":"uint256"},{"internalType":"uint256","name":"transferFee","type":"uint256"}],"internalType":"struct IMyobu.Fees","name":"newFees","type":"tuple"}],"name":"setFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newMyobuSwap","type":"address"}],"name":"setMyobuSwap","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IUniswapV2Router","name":"newRouter","type":"address"}],"name":"setSwapRouter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"newTaxAddress","type":"address"}],"name":"setTaxAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"taxedTransfer_","type":"address[]"}],"name":"setTaxedTransferFor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"snapshot","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"pair","type":"address"}],"name":"taxedPair","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"snapshotId","type":"uint256"}],"name":"totalSupplyAt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]
// Set up Infura as your RPC connection
const web3 = new Web3('https://mainnet.infura.io/v3/88eb5088b29d46f48d1c8cac0b8914fc')
const contractAddress = '0xDfDd3459D4F87234751696840092ee20C970Fb07'
const contract = new web3.eth.Contract(abi, contractAddress)

export default {
  name: "tokenomics",
  data: function(){
    return {
      buyTax: 3,
      sellTax: 7,
    }
  },
  methods: {
    getTaxes: function(){
      contract.methods.currentFees().call().then((res) => {
        this.buyTax = res.buyFee
        this.sellTax = res.sellFee
      });
    }
  },
  mounted() {
    this.getTaxes()
  }
};
</script>