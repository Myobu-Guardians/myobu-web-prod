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
            <router-link to="/staking-bsc" class="highlight">&lt; Staking overview</router-link>
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
          <div class="col-md-4 col-lg-4 col-6 text-right">
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
          <div class="col-md-4 col-lg-4 text-right col-6 offset-sm-0">
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
            <Slider v-model="tokenAmount.value" v-bind="tokenAmount" :max="size"></Slider>
          </div>
        </div>
        <div class="row align-items-center mt-3 justify-content-between">
          <div class="col-md-8 col-lg-8 offset-md-2 offset-lg-2 text-center">
            <label for="one">
              <input type="radio" id="one" :value="size * 0.25" v-model="tokenAmount.value">
              <span class="btn">25%</span>
            </label>
            <label for="two">
              <input type="radio" id="two" :value="size * 0.50" v-model="tokenAmount.value">
              <span class="btn">50%</span>
            </label>
            <label for="three">
              <input type="radio" id="three" :value="size * 0.75" v-model="tokenAmount.value">
              <span class="btn">75%</span>
            </label>
            <label for="four">
              <input type="radio" id="four" :value="size" v-model="tokenAmount.value">
              <span class="btn">100%</span>
            </label>
          </div>
        </div>
        <div class="row align-items-center mt-3 justify-content-between">
          <div class="col-md-8 col-lg-8 offset-md-2 offset-lg-2 text-center">
            <input type="number" :max="size" min="0" class="form-control" v-model="tokenAmount.value">
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
<!--        <div class="row">-->
<!--          <div class="col-md-12">-->
<!--            <code>-->
<!--&lt;!&ndash;              this.apy = (this.dr * 365 * ((parseFloat(this.tokenAmount.value || 0) + this.userInfo.amount / 10 ** 9) *&ndash;&gt;-->
<!--&lt;!&ndash;              this.lockWeight / (this.poolInfo.weightedBalance / 10 ** 9 - this.userInfo.weightedBalance / 10 ** 9 +&ndash;&gt;-->
<!--&lt;!&ndash;              this.lockWeight * (this.userInfo.amount / 10 ** 9 + parseFloat(this.tokenAmount.value || 0)))) /&ndash;&gt;-->
<!--&lt;!&ndash;              ((this.userInfo.amount / 10 ** 9 + parseFloat(this.tokenAmount.value || 0)) * this.myobuPrice)) * 100&ndash;&gt;-->

<!--              DR: {{ dr }}<br>-->
<!--              TAV: {{ tokenAmount.value }}<br>-->
<!--              UIA: {{ userInfo.amount}}<br>-->
<!--              LW: {{lockWeight}}<br>-->
<!--              PIWB: {{poolInfo.weightedBalance}}<br>-->
<!--              UIWB: {{userInfo.weightedBalance}}<br>-->
<!--              MP: {{myobuPrice}}<br>-->
<!--            </code>-->
<!--          </div>-->
<!--        </div>-->
      </div>
    </section>
  </div>
</template>

<script>
import Web3 from "web3";
import Slider from '@vueform/slider/dist/slider.vue2.js'
import ABI from '../../helpers/myobuAbi.js'
import VueLoadingButton from 'vue-loading-button'

const chefAbi = ABI.chefBSCAbi

const contractAddress = ABI.contractBSCAddress;
const chefAddress = ABI.chefBSCAddress;

const poolId = 1;

export default {
  name: "StakingBSCCreate",
  components: {Slider, VueLoadingButton},
  data: function () {
    return {
      isObservationEnabled: false,
      user: null,
      contract: null,
      contractChef: null,
      ethPerBlock: 0,
      totalAllocPoint: 0,
      stakeLoading: false,
      approveLoading: false,
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
      poolInfo: {
        lpToken: 0,
        allocPoint: 0,
        lastRewardBlock: 0,
        accRwtPerShare: 0,
        accETHPerShare: 0,
        weightedBalance: 0,
      },
      uniPair: null,
      ethCtr: null,
      requiredSize: 250000000,
      size: 0,
      dr: 0,
      chainId: 1,
      answer: '',
      result: '',
      allowance: 0,
      deposit: 0,
      authorized: 0,
      ethPrice: 0,
      myobuPrice: 0,
      lockDuration: {
        value: 1
      },
      tokenAmount: {
        value: 0,
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
    stake: function () {
      let t = this;
      this.stakeLoading = true

      return this.contractChef.methods.deposit(poolId, (Math.floor(this.tokenAmount.value * 10 ** 9)).toString(), this.lockDuration.value * 604800) //60480
          .send({from: this.user, value: 0})
          .on("receipt", function () {
            t.$notification.success("You successfully staked " + t.tokenAmount.value + " Myōbu", {timer: 10});
            t.tokenAmount.value = 0
            t.stakeLoading = false
          })
          .on("error", function () {
            t.$notification.error("An error occurred while trying to stake Myōbu", {timer: 10});
            t.stakeLoading = false
          })
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

      //connect to the contract
      let web3js = new Web3(provider);
      this.contract = new web3js.eth.Contract(ABI.myobuBSCAbi, contractAddress);
      this.contractChef = new web3js.eth.Contract(chefAbi, chefAddress);
      // this.usdtCtr = new web3js.eth.Contract(ABI.usdtAbi, ABI.usdtPair);
      this.uniPair = new web3js.eth.Contract(ABI.bscAbi, ABI.bscPair);


      web3js.eth.getChainId().then((id) => {
        this.chainId = id
        if (id != 56) {
          alert('Not connected to BSC Mainnet !' + id);
        } else {
          this.refreshTotalSupply();
        }
      });
    },
    getSize: async function () {
      return this.contract.methods.balanceOf(this.user).call().then(res => {
        this.size = res / 10 ** 9
      })
    },
    getUserInfo: async function () {
      return this.contractChef.methods.userInfo(1, this.user).call().then(res => {
        this.userInfo = res
      })
    },
    getPoolInfo: async function () {
      return this.contractChef.methods.poolInfo(1).call().then(res => {
        this.poolInfo = res
      })
    },
    getMyobuPrice: async function () {
      return this.uniPair.methods.getReserves().call().then(res => {
        if (this.chainId === 56) {
          this.myobuPriceEth = (res[1] / 10 ** 18) / (res[0] / 10 ** 9)
        } else {
          this.myobuPriceEth = (res[0] / 10 ** 18) / (res[1] / 10 ** 9)
        }
        this.myobuPrice = this.myobuPriceEth * this.ethPrice
      })
    },
    getDailyRewards: async function () {
      await this.contractChef.methods.ETHPerBlock().call().then((res) => {
        this.ethPerBlock = res / 10 ** 18
      })

      await this.contractChef.methods.totalAllocPoint().call().then((res) => {
        this.totalAllocPoint = res
      })

      this.dr = 28800 * this.ethPerBlock * this.ethPrice * this.poolInfo.allocPoint / this.totalAllocPoint
    },
    getEthPrice: function () {
      this.ethPrice = 500
      // return this.usdtCtr.methods.getReserves().call().then(res => {
      //   this.ethPrice = res[1] / 10 ** 9 / res[0] / 10 ** 9
      // })
    },
    calcApy: function () {
      if (this.tokenAmount.value === 0 || this.tokenAmount.value === '') {
        this.apy = 0;
        return
      }
      this.apy = (this.dr * 365 * ((parseFloat(this.tokenAmount.value || 0) + this.userInfo.amount / 10 ** 9) * this.lockWeight / (this.poolInfo.weightedBalance / 10 ** 9 - this.userInfo.weightedBalance / 10 ** 9 + this.lockWeight * (this.userInfo.amount / 10 ** 9 + parseFloat(this.tokenAmount.value || 0)))) / ((this.userInfo.amount / 10 ** 9 + parseFloat(this.tokenAmount.value || 0)) * this.myobuPrice)) * 100
      console.log(this.apy)
    },
    getAuthorized: async function () {
      return this.contract.methods.allowance(this.user, chefAddress).call().then(res => {
        this.allowance = res / 10 ** 9
        this.authorized = (this.allowance !== 0 && this.allowance >= parseFloat(this.tokenAmount.value || 0) + this.deposit) ? 1 : 0
      })
    },
    getDeposit: async function () {
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
      await this.getUserInfo()
      await this.getPoolInfo()
      await this.getDailyRewards()
      await this.getDeposit()
      await this.getAuthorized()
      // eslint-disable-next-line
      this.getSize().finally(r => {
        let t = this
        setTimeout(function () {
          t.refreshTotalSupply()
        }, 500);
      });
    },
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
    lockWeight: {
      handler: function () {
        console.log(123333)
        this.calcApy()
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
  color: #9075f9;
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

  #info {
    padding-top: 150px !important;
  }
}
</style>