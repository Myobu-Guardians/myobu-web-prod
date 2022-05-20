<template>
  <div class="overflow-hidden">
    <section id="info" class="pt-150 mb-5 tertiary-bg">
      <div class="container">
        <div class="row align-items-center justify-content-betweens">
          <div class="col-md-6 col-sm-12 text-md-left text-center">
            <h1 class="text-white my-auto align-middle"><img src="img/redesign/staking.png"
                                                             class="img-fluid staking-img my-auto align-middle"> <span
                class="my-auto align-middle"> MYŌBU STAKING</span></h1>
          </div>
          <div class="col-md-6 col-sm-12 mt-3 mt-md-0 text-md-right text-center">
            <div v-if="user === null">
              <button @click="connect" class="btn">Connect wallet</button>
            </div>
            <div v-else>
              <span :model="user" class="wallet align-items-center">
                {{ beautifyWallet(user) }} <img src="img/redesign/checked.png" class="check">
              </span>
            </div>
          </div>
        </div>
        <div class="row align-items-center justify-content-between mt-2">
          <div class="col-md-6 col-sm-12 text-md-left text-center pb-0 pb-md-5">
            <router-link to="/staking" class="highlight">&lt; Staking overview</router-link>
          </div>
          <div class="col-md-6 pb-5 mt-5 mt-md-0 text-md-right text-center">
            <div v-if="user === null">
            </div>
            <div v-else>
              Balance: {{ format(size, 9) }} Myōbu
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="pb-100 pt-5">
      <div class="container">
        <div class="row align-items-center justify-content-between">
          <div class="col-md-4 col-lg-4 offset-md-2 col-6 offset-sm-0">
            LOCK FOR: <span class="highlight">{{ lockDuration.value }} Weeks</span>
          </div>
          <div class="col-md-4 col-lg-4 col-6 offset-sm-0 text-right">
            WEIGHT: <span class="highlight">{{ lockWeight }}</span>
          </div>
          <div class="col-md-2"></div>
        </div>
        <div class="row mt-5">
          <div class="col-md-8 offset-md-2 col-12 offset-sm-0">
            <Slider v-model="lockDuration.value" v-bind="lockDuration" :max="52" :min="1"></Slider>
          </div>
        </div>
        <div class="row align-items-center mt-3 justify-content-between">
          <div class="col-md-4 col-lg-4 offset-md-2 col-6 offset-sm-0">
            1 Week
          </div>
          <div class="col-md-4 col-lg-4 col-6 offset-sm-0 text-right">
            52 Weeks
          </div>
          <div class="col-md-2"></div>
        </div>
        <div class="row align-items-center mt-3 justify-content-between">
          <div class="col-md-4 col-lg-4 offset-md-2 offset-lg-2">
            TOKEN AMOUNT:
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-md-8 offset-md-2 col-12 offset-sm-0">
            <div class="input-group">
              <input type="number" class="form-control input" v-model="ethAmount"
                     placeholder="0.0" @keyup="updateMyobuAmount">
              <div class="input-group-addon">
                <img src="img/eth.png" width="40" height="40">
              </div>
            </div>
          </div>
          <div class="col-md-8 offset-md-2 col-12 offset-sm-0">
            Balance: {{ format(ethBalance, 2) }} ETH <a class="highlight underline" @click="updateEth">(MAX)</a>
          </div>
        </div>
        <div class="row align-items-center mt-3 justify-content-between text-center">
          <div class="col-md-12">
            +
          </div>
        </div>
        <div class="row align-items-center mt-3 justify-content-between">
          <div class="col-md-8 col-lg-8 offset-md-2 offset-lg-2 col-12 offset-sm-0 text-center">
            <div class="input-group">
              <input type="number" :max="size" min="0" class="form-control"
                     v-model="tokenAmount.value" placeholder="0.0" @keyup="updateEthAmount">
              <div class="input-group-addon">
                <img src="img/redesign/favicon.png" width="40" height="40">
              </div>
            </div>
          </div>
          <div class="col-md-8 offset-md-2 col-12 offset-sm-0">
            Balance: {{ format(size) }} Myōbu <a class="highlight underline" @click="updateMyobu">(MAX)</a>
          </div>
        </div>
        <div class="row align-items-center mt-3 justify-content-between mb-0 pb-0">
          <div class="col-md-4 col-lg-4 offset-md-2 offset-lg-4 text-center">
            <span class="highlight text-xl">{{ format(apy, 2) }} %</span>
          </div>
        </div>
        <div class="row align-items-center justify-content-between mt-0 pt-0">
          <div class="col-md-4 col-lg-4 offset-md-2 offset-lg-4 text-center text-xl">
            EST APY
          </div>
        </div>
        <div class="row align-items-center mt-3 justify-content-between">
          <div class="col-md-12 text-center text-white">
            Locking your stake increases your token weight by up to 3x
          </div>
        </div>
        <div class="row align-items-center mt-3 justify-content-between">
          <div class="col-md-4 col-lg-4 offset-md-2 offset-lg-4 text-center">
            <div v-if="parseFloat(size) < parseFloat(tokenAmount.value)">
              <button class="btn staking red" disabled="disabled">Insufficient MYOBU balance</button>
            </div>
            <div v-else-if="parseFloat(ethAmount) > parseFloat(ethBalance)">
              <button class="btn staking red" disabled="disabled">Insufficient ETH balance</button>
            </div>
            <div v-else>
              <div v-if="authorized == 1">
                <VueLoadingButton aria-label="Stake" class="btn staking purple" @click.native="stake"
                                  :loading="stakeLoading" :styled="true">Stake
                </VueLoadingButton>
              </div>
              <div v-else>
                <VueLoadingButton aria-label="Stake" class="btn staking purple" @click.native="approve"
                                  :loading="approveLoading" :styled="true">Allow MyōbuChef to use your Myōbu
                </VueLoadingButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Web3 from "web3";
import Slider from '@vueform/slider/dist/slider.vue2.js'
import ABI from '../../helpers/myobuAbi.js'
import VueLoadingButton from 'vue-loading-button'

const chefAbi = ABI.chefAbi

const contractAddress = ABI.contractAddress;
const chefAddress = ABI.chefAddress;

const poolId = 0;

export default {
  name: "StakingCreateMyobuETH",
  components: {Slider, VueLoadingButton},
  data: function () {
    return {
      isObservationEnabled: false,
      user: null,
      contract: null,
      contractChef: null,
      userInfo: {
        boostPointsBP: 0,
        lockTimeBoost: 0,
        lockedUntil: 0,
        claimableRWT: 0,
        claimableETH: 0,
        amount: 0,
        weightedBalance: 0,
        rewardDebt: 0,
        ETHrewardDebt: 0,
      },
      userInfo2: {
        boostPointsBP: 0,
        lockTimeBoost: 0,
        lockedUntil: 0,
        claimableRWT: 0,
        claimableETH: 0,
        amount: 0,
        weightedBalance: 0,
        rewardDebt: 0,
        ETHrewardDebt: 0,
      },
      poolInfo: {
        lpToken: 0,
        allocPoint: 0,
        lastRewardBlock: 0,
        accRwtPerShare: 0,
        accETHPerShare: 0,
        weightedBalance: 0,
      },
      ethCtr: null,
      uniPair: null,
      stakeLoading: false,
      approveLoading: false,
      chainId: 1,
      requiredSize: 250000000,
      size: 0,
      sizeRaw: 0,
      ethBalance: 0,
      answer: '',
      result: '',
      allowance: 0,
      deposit: 0,
      authorized: 0,
      myobuPriceEth: 0,
      myobuPrice: 0,
      ethPrice: 0,
      dr: 0,
      lockDuration: {
        value: 1
      },
      ethAmount: 0,
      tokenAmount: {
        value: '',
        format: {
          decimals: 0,
          thousand: ','
        }
      },
      lockWeight: 1,
      picked: 25,
      apy: 0
    }
  },
  methods: {
    beautifyWallet: function (address) {
      return address.slice(0, 10) + '...' + address.slice(-4)
    },
    format: function (number, decimals = 0) {
      return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
      }).format(number)
    },
    stake: async function () {

      let tokens = parseFloat((this.tokenAmount.value * 10 ** 9).toPrecision(9)).toString()
      let ethAmountMin = Math.floor(this.ethAmount * 10 ** 18 * 0.90).toString()
      let tokenAmountMin = (this.tokenAmount.value * 10 ** 9 * 0.90).toString()
      let lockDuration = this.lockDuration.value * 604800
      let ethToSend = (this.tokenAmount.value * this.myobuPriceEth * 10 ** 18).toString()

      if (parseFloat(tokens) > this.sizeRaw) {
        tokens = (this.sizeRaw).toString()
      }

      let t = this;
      this.stakeLoading = true

      return this.contractChef.methods.addLiquidityNoFeeAndStake(tokens, ethAmountMin, tokenAmountMin, lockDuration)
          .send({from: this.user, value: Math.ceil(ethToSend)})
          .on("receipt", function () {
            t.$notification.success("You successfully staked " + tokens + " Myōbu", {timer: 10});
            t.tokenAmount.value = 0
            t.stakeLoading = false
          })
          .on("error", function () {
            t.$notification.error("An error occurred while trying to stake Myōbu", {timer: 10});
            t.stakeLoading = false
          });
    },
    getEthBalance: function () {
      var t = this;
      this.ethCtr.eth.getBalance(this.user, function (err, res) {
        if (err) {
          console.log(err)
        } else {
          t.ethBalance = res / 10 ** 18
        }
      })
    },
    updateEth: function () {
      this.ethAmount = this.ethBalance
      this.updateMyobuAmount()
    },
    updateMyobu: function () {
      this.tokenAmount.value = this.size
      this.updateEthAmount()
    },
    updateEthAmount: function () {
      this.ethAmount = (this.tokenAmount.value * this.myobuPriceEth).toFixed(18)
    },
    updateMyobuAmount: function () {
      this.tokenAmount.value = (this.ethAmount / this.myobuPriceEth).toFixed(9)
    },
    approve: async function () {
      this.approveLoading = true
      let t = this

      return this.contract.methods.approve(chefAddress, "1000000000000000000000").send({
        from: this.user,
        value: 0
      }).on("receipt", function () {
        t.approveLoading = false
      }).on("error", function () {
        t.approveLoading = false
      })
    },
    start: async function () {
      /*****************************************/
      /* Detect the MetaMask Ethereum provider */
      /*****************************************/

      // this returns the provider, or null if it wasn't detected
      //const provider = await detectEthereumProvider();
      const provider = window.ethereum;

      if (provider) {
        this.startApp(provider); // Initialize your app
      }


      /***********************************************************/
      /* Handle user accounts and accountsChanged (per EIP-1193) */
      /***********************************************************/

      window.ethereum
          .request({method: 'eth_accounts'})
          .then(this.handleAccountsChanged)
          .catch((err) => {
            // Some unexpected error.
            // For backwards compatibility reasons, if no accounts are available,
            // eth_accounts will return an empty array.
            console.error(err);
          });
    },
    startApp: function (provider) {
      // If the provider returned by detectEthereumProvider is not the same as
      // window.ethereum, something is overwriting it, perhaps another wallet.
      if (provider !== window.ethereum) {
        console.error('Do you have multiple wallets installed?');
      }

      const testnet = 'https://mainnet.infura.io/v3/88eb5088b29d46f48d1c8cac0b8914fc';

      //connect to the contract
      let web3js = new Web3(provider);
      this.contract = new web3js.eth.Contract(ABI.myobuAbi, contractAddress);
      this.contractChef = new web3js.eth.Contract(chefAbi, chefAddress);
      this.uniPair = new web3js.eth.Contract(ABI.uniAbi, ABI.uniPair);
      if (this.chainId !== 3) {
        this.usdtCtr = new web3js.eth.Contract(ABI.usdtAbi, ABI.usdtPair);
      }
      this.ethCtr = new Web3(new Web3.providers.HttpProvider(testnet));
      this.lpToken = this.uniPair


      web3js.eth.getChainId().then((id) => {
        this.chainId = id
        if (id != 1) {
          alert('Not connected to Ethereum Mainnet !' + id);
        } else {
          //recursively get total supply
          this.refreshTotalSupply();
        }
      });
    },
    getSize: function () {
      return this.contract.methods.balanceOf(this.user).call().then(res => {
        this.size = (res / Math.pow(10, 9)).toFixed(9)
        this.sizeRaw = res
      })
    },
    getUserInfo: function () {
      return this.contractChef.methods.userInfo(poolId, this.user).call().then(res => {
        this.userInfo = res
      })
    },
    getUserInfo2: function () {
      return this.contractChef.methods.userInfo(1, this.user).call().then(res => {
        this.userInfo2 = res
      })
    },
    getPoolInfo: function () {
      return this.contractChef.methods.poolInfo(poolId).call().then(res => {
        this.poolInfo = res
      })
    },
    getMyobuPrice: function () {
      return this.uniPair.methods.getReserves().call().then(res => {
        if (this.chainId === 3) {
          this.myobuPriceEth = (res[1] / 10 ** 18) / (res[0] / 10 ** 9)
        } else {
          this.myobuPriceEth = (res[0] / 10 ** 18) / (res[1] / 10 ** 9)
        }

        this.myobuPrice = this.myobuPriceEth * this.ethPrice
      })
    },
    calcApy: async function () {
      if (this.tokenAmount.value === 0 || this.tokenAmount.value === '') {
        this.apy = 0;
        return
      }

      var lpAddressBalance
      var lpSupply

      await this.contract.methods.balanceOf(ABI.lpToken).call().then((res) => {
        lpAddressBalance = res / 10 ** 18
      })

      await this.lpToken.methods.totalSupply().call().then((res) => {
        lpSupply = res / 10 ** 9;
      })

      let lpPrice = 2 * lpAddressBalance * this.myobuPrice / lpSupply
      let lpRatio = lpSupply / lpAddressBalance

      this.apy = this.dr * (this.userInfo.amount / 10 ** 18 + this.tokenAmount.value * lpRatio) * this.lockWeight / ((this.poolInfo.weightedBalance / 10 ** 18 - this.userInfo.weightedBalance / 10 ** 18 + (this.userInfo.amount / 10 ** 9 + this.tokenAmount.value * lpRatio) * this.lockWeight)) / ((this.userInfo.amount / 10 ** 9 + this.tokenAmount.value * lpRatio) * lpPrice) * 100
    },
    getDailyRewards: async function () {
      let ethPerBlock
      let totalAllocPoint

      await this.contractChef.methods.ETHPerBlock().call().then((res) => {
        ethPerBlock = res / 10 ** 18
      })

      await this.contractChef.methods.totalAllocPoint().call().then((res) => {
        totalAllocPoint = res
      })

      this.dr = 6300 * ethPerBlock * this.ethPrice * this.poolInfo.allocPoint / totalAllocPoint
    },
    getEthPrice: async function () {
      if (this.chainId === 1) {
        this.ethPrice = 4200
      } else {
        return this.usdtCtr.methods.getReserves().call().then(res => {
          this.ethPrice = res[1] / 10 ** 9 / res[0] / 10 ** 9
        })
      }

      return true
    },
    getAuthorized: function () {
      return this.contract.methods.allowance(this.user, chefAddress).call().then(res => {
        this.allowance = res / 10 ** 9
        this.authorized = (this.allowance !== 0 && this.allowance >= parseFloat(this.tokenAmount.value || 0) + this.deposit) ? 1 : 0
      })
    },
    getDeposit: function () {
      return this.contractChef.methods.userInfo(1, this.user).call().then(res => {
        this.deposit = res['amount'] / 10 ** 9
      })
    },
    handleAccountsChanged: function (accounts) {
      if (accounts.length === 0) {
        this.connect();
      } else if (accounts[0] !== this.user) {
        this.user = accounts[0];
        this.getSize();
      }
    },
    connect() {
      window.ethereum
          .request({method: 'eth_requestAccounts'})
          .then(this.handleAccountsChanged)
          .catch((err) => {
            if (err.code === 4001) {
              // EIP-1193 userRejectedRequest error
              // If this happens, the user rejected the connection request.
              console.log('Please connect to MetaMask.');
            } else {
              console.error(err);
            }
          });
    },
    refreshTotalSupply: async function () {
      await this.getMyobuPrice()
      await this.getEthPrice()
      await this.getDailyRewards()
      this.getUserInfo()
      this.getUserInfo2()
      this.getPoolInfo()
      this.getDeposit()
      this.getAuthorized()
      this.getEthBalance()
      // eslint-disable-next-line
      this.getSize().finally(r => {
        let t = this
        setTimeout(t.refreshTotalSupply, 500);
      });
    }
  },
  mounted() {
    this.start()
    window.ethereum.on('accountsChanged', this.handleAccountsChanged);
  },
  watch: {
    lockDuration: {
      handler: function (val) {
        if (val['value'] === 1) {
          this.lockWeight = 1;
          return;
        }
        this.lockWeight = 1 + Math.round((val['value'] / 52) * 2 * 100) / 100
        this.calcApy()
      },
      deep: true
    },
    tokenAmount: {
      handler: function () {
        this.getAuthorized()
        this.calcApy()
      },
      deep: true
    },
    ethAmount: {
      handler: function () {
        this.getAuthorized()
        this.calcApy()
      },
    },
    lockWeight: {
      handler: function () {
        // this.calcApy()
      }
    }
  }
}
</script>

<style scoped>

label input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

label span.btn {
  margin-right: 10px;
  background-color: #201530;
  border: 2px solid #201530;
  border-radius: 20px;
  width: 10em;
}

label span.btn:hover {
  border: 2px solid #9075f9;
}

.container {
  font-family: 'MerriweatherSansRoman', sans-serif;
  font-size: 16px;
  font-weight: 800;
  color: #cdbdff;
}

.wallet {
  color: white;
  border-radius: 10px;
  border: solid 2px #9075f9;
  padding: 13px 13px 12px 20px;
  font-size: 14px;
}

.btn.disconnect {
  padding: 13px 13px 12px 20px;
  margin-top: 0;
  border: 2px solid #e83e8c;
  border-radius: 10px;
}

.btn.disconnect:hover {
  background-color: #e83e8c;
  color: #ffffff;
}

.wallet .check {
  height: 14px;
  margin-bottom: -2px;
  vertical-align: baseline;
}

table {
  color: #ffffff;
  font-size: 14px;
  font-family: 'MerriweatherSansRoman', sans-serif;
}

table tr td {
  border: none;
}

table tr:nth-child(even) td {
  padding-top: 0;
}

table tr:nth-child(odd) td {
  padding-bottom: 0;
  color: #cdbdff;
  font-weight: 800;
  font-size: 20px;
}

.highlight {
  color: #9075f9 !important;
}

.border-bottom {
  border-bottom: solid 1px #44305d;
}

.staking-img {
  height: 1em;
}

.rounded img {
  border-radius: 50%;
  padding: 10px;
  max-width: 75px;
  border: solid 1px #9075f9;
}

.btn.staking {
  padding: 15px 50px;
  line-height: 1.5;
  border-radius: 10px;
}

.btn.staking.purple {
  background-color: #9075f9;
}

.text-xl {
  font-size: 30px;
}

input[type="number"] {
  background-color: #201530;
  border: 1px solid #9075f9;
  color: #ffffff;
}

input[type="number"] {
  -webkit-appearance: textfield;
  -moz-appearance: textfield;
  appearance: textfield;
}

input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
}

.input-group input {
  border-right: none;
}

.input-group .input-group-addon {
  background-color: #201530;
  border: 1px solid #9075f9;
  border-left: none;
  padding: 0;
  vertical-align: middle;
}

.input-group .input-group-addon img {
  margin-top: 7px;
  margin-bottom: -1px;
  margin-right: 10px;
}

.underline {
  color: #e83e8c !important;
  cursor: pointer;
}

@media (min-width: 320px) and (max-width: 992px) {
  #ETH {
    color: #ffffff !important;
  }

  .pools-mobile img {
    border-radius: 50%;
    padding: 5px;
    margin: 10px;
    max-width: 35px;
    border: solid 1px #9075f9;
  }

  .bordered {
    border: solid 1px #9075f9;
    background: rgba(251, 251, 251, 0.1);
    margin: 10px;
  }

  .border-bottom {
    border: none !important;
  }

  .btn.staking {
    width: 100%;
    line-height: 1.5;
    padding: 5px 0;
  }

  .input-group .input-group-addon {
    background-color: #201530;
    border: 1px solid #9075f9;
    border-left: none;
    padding: 0;
    vertical-align: middle;
  }

  .input-group .input-group-addon img {
    margin-top: 5px;
    margin-bottom: -3px;
    margin-right: 10px;
  }

  #info {
    padding-top: 150px !important;
  }
}
</style>