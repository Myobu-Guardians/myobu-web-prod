<template>
  <div class="overflow-hidden">
    <section id="info" class="pt-150 mb-5 tertiary-bg">
      <div class="container">
        <div class="row align-items-center justify-content-betweens">
          <div class="col-md-6 col-sm-12 text-md-left text-center">
            <h1 class="text-white my-auto align-middle"><img src="img/redesign/staking.png"
                                                             class="img-fluid staking-img my-auto align-middle"> <span
                class="my-auto align-middle"> MANAGE</span></h1>
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

    <section v-if="pools[$route.params.id].userInfo.amount > 0" class="ptb-100 stake">
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <div class="row">
              <div class="col-12 bordered mr-0 ml-0">
                <div class="row pl-3 pt-3">
                  <div class="col-6">
                    <div>Balance</div>
                    <div class="highlight">{{ format(size) }} Myobu</div>
                  </div>
                  <div class="col-6">
                    <div>Staked</div>
                    <div class="highlight">{{
                        parseFloat($route.params.id) === 1 ? beautifyNumbers(pools[$route.params.id].userInfo.amount / 10 ** 9) : pools[$route.params.id].userInfo.amount / 10 ** 18
                      }} {{ parseFloat($route.params.id) === 1 ? "Myōbu" : "Cake-LP"}}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <section id="withdrawals">
              <h3 class="mt-5 text-white">Withdraw</h3>
              <div class="row mt-5 mb-5">
                <div class="col-12">
                  <Slider v-model="tokenAmount.value" v-bind="tokenAmount"
                          :max="parseFloat(pools[$route.params.id].deposit)"></Slider>
                </div>
              </div>
              <div class="row mt-5">
                <div class="col-12 text-center">
                  <div v-if="(pools[$route.params.id].userInfo.lockedUntil - new Date().getTime() / 1000) > 0">
                    <vue-countdown
                        :time="(pools[$route.params.id].userInfo.lockedUntil - new Date().getTime() / 1000) * 1000">
                      <template slot-scope="props">
                        Unlocks in
                        <span class="highlight">{{ props.days }} D - {{ props.hours }} H - {{
                            props.minutes
                          }} M - {{ props.seconds }} S</span>
                      </template>
                    </vue-countdown>
                  </div>
                  <div v-else>
                    <div class="row">
                      <div class="col-4 offset-4">
                        <VueLoadingButton aria-label="Withdraw" class="btn staking purple" @click.native="withdraw($route.params.id)" :loading="withdrawLoading" :styled="true">Claim & Withdraw</VueLoadingButton>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div class="col-md-4 text-center">
            <div class="bordered py-4 px-4">
              Earned<br>
              <span class="highlight">{{ beautifyRewards(pools[$route.params.id].rewardsETH) }} BNB</span>
<!--              <button class="btn staking" @click="claimETH($route.params.id)">Claim</button>-->
              <VueLoadingButton aria-label="Claim" class="btn staking purple" @click.native="claimETH($route.params.id)" :loading="claimLoading" :styled="true">Claim</VueLoadingButton>
              <VueLoadingButton v-if="$route.params.id == 1 && (pools[$route.params.id].userInfo.lockedUntil - new Date().getTime() / 1000) > 0" aria-label="Reinvest" class="btn staking purple" @click.native="reinvestEth" :loading="reinvestLoading" :styled="true">Reinvest</VueLoadingButton>

<!--              <button-->
<!--                  v-if="$route.params.id == 1 && (pools[$route.params.id].userInfo.lockedUntil - new Date().getTime() / 1000) > 0"-->
<!--                  class="btn staking purple" @click="reinvestEth">Reinvest-->
<!--              </button>-->
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="ptb-100 stake" v-else>
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            You don't have any staked tokens<br>
            <router-link to="/staking-bsc">Go back</router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Web3 from "web3";
import ABI from '../../helpers/myobuAbi'
import Slider from '@vueform/slider/dist/slider.vue2.js'
import VueLoadingButton from 'vue-loading-button'

const chefAbi = ABI.chefBSCAbi

const contractAddress = ABI.contractBSCAddress;
const chefAddress = ABI.chefBSCAddress;
import VueCountdown from "@chenfengyuan/vue-countdown";

export default {
  name: "StakingBSCManage",
  components: {VueCountdown, Slider, VueLoadingButton},
  data: function () {
    let t = this
    return {
      isObservationEnabled: false,
      user: null,
      contract: null,
      contractChef: null,
      ethPerBlock: 0,
      totalAllocPoint: 0,
      claimLoading: false,
      withdrawLoading: false,
      reinvestLoading: false,
      size: 0,
      sizeRaw: 0,
      ethPrice: 0,
      myobuPrice: 0,
      chainId: 1,
      tokenAmount: {
        value: 0,
        step: -1,
        format: function (value) {
          if(parseFloat(t.$route.params.id) === 0) {
            return `${parseFloat((value / 10 ** 18).toPrecision(18)).toString()}`
          } else {
            return `${t.format(value / 10 ** 9, 9)}`
          }
        }
      },
      lockDuration: {
        value: 1
      },
      pools: {
        1: {
          poolId: 1,
          name: "Myobu",
          link: '/staking/stake/myobu',
          manageLink: '/staking/manage/1',
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
          deposit: 0,
          depositBeautified: 0,
          rewardsETH: 0,
          dr: 0,
          tlv: 0,
          apy: 0,
        },
        0: {
          poolId: 0,
          name: "Myobu / WETH LP",
          link: "/staking/stake/myobu-eth",
          manageLink: '/staking/manage/0',
          poolInfo: {
            lpToken: 0,
            allocPoint: 0,
            lastRewardBlock: 0,
            accRwtPerShare: 0,
            accETHPerShare: 0,
            weightedBalance: 0,
          },
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
          deposit: 0,
          depositBeautified: 0,
          rewardsETH: 0,
          dr: 0,
          tlv: 0,
          apy: 0,
        }
      }
    }
  },
  methods: {
    beautifyNumbers: function (number) {
      if (number > 1000000000) {
        return Math.round(number / 1000000000 * 100) / 100 + 'B'
      } else if (number > 1000000) {
        return Math.round(number / 1000000 * 100) / 100 + 'M'
      } else if (number > 1000) {
        return Math.round(number / 1000 * 100) / 100 + 'K'
      } else {
        return Math.round(number * 100) / 100;
      }
    },
    beautifyRewards: function (number) {
      if (number === 0) {
        return 0.00;
      } else if (number < 0.0001) {
        return '< 0.0001'
      } else {
        return this.format(number, 6)
      }
    },
    getDeposit: function () {

      this.contractChef.methods.userInfo(1, this.user).call().then(res => {
        this.pools[1].deposit = res['amount']
        this.pools[1].depositBeautified = res['amount'] / 10 ** 9
      }).catch(err => console.log("getDeposit: " + err))

      this.contractChef.methods.userInfo(0, this.user).call().then(res => {
        this.pools[0].deposit = parseFloat(res['amount']).toPrecision(18)
        this.pools[0].depositBeautified = parseFloat(this.pools[0].deposit / 10 ** 18).toString()

        // console.log(this.pools[0].depositBeautified)
      })
    },
    beautifyWallet: function (address) {
      return address.slice(0, 10) + '...' + address.slice(-4)
    },
    format: function (number, digits = 0) {
      return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: digits,
        maximumFractionDigits: digits
      }).format(number)
    },
    claimETH: async function (poolId) {
      let t = this;
      this.claimLoading = true

      return this.contractChef.methods.deposit(poolId, 0, 0)
          .send({from: this.user, value: 0})
          .on("receipt", function () {
            t.$notification.success("Successfully claimed BNB rewards", {timer: 10});
            t.claimLoading = false
          })
          .on("error", function () {
            t.$notification.error("An error occurred while trying to claim earned BNB", {timer: 10});
            t.claimLoading = false
          });
    },
    reinvestEth: async function () {
      let t = this;
      this.reinvestLoading = true

      return this.contractChef.methods.reinvestETHRewards("0")
          .send({from: this.user, value: 0})
          .on("receipt", function () {
            t.$notification.success("You successfully reinvested " + t.pools[t.$route.params.id].rewardsETH + " BNB", {timer: 10});
            t.reinvestLoading = false
          })
          .on("error", function () {
            t.$notification.error("An error occurred while trying to reinvest earned BNB", {timer: 10});
            t.reinvestLoading = false
          });
    },
    withdraw: async function (poolId) {
      let amount = this.tokenAmount.value

      if (parseFloat(amount) > parseFloat(this.pools[poolId].deposit)) amount = this.pools[poolId].deposit

      let t = this
      this.withdrawLoading = true

      return this.contractChef.methods.withdraw(poolId, (amount).toString())
          .send({from: this.user, value: 0})
          .on("receipt", function () {
            t.$notification.success("Successfully withdrawn deposit", {timer: 10});
            t.tokenAmount.value = 0
            t.withdrawLoading = false
          })
          .on("error", function () {
            t.$notification.error("An error occurred while trying to withdraw deposit", {timer: 10});
            t.withdrawLoading = false
          });
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
    startApp: async function (provider) {
      // If the provider returned by detectEthereumProvider is not the same as
      // window.ethereum, something is overwriting it, perhaps another wallet.
      if (provider !== window.ethereum) {
        console.error('Do you have multiple wallets installed?');
      }

      let web3js = new Web3(provider);

      await web3js.eth.getChainId().then((id) => {
        this.chainId = id

        if (id != 56) {
          alert('Not connected to BSC Mainnet !' + id);
        } else {
          //connect to the contract
          this.contract = new web3js.eth.Contract(ABI.myobuBSCAbi, contractAddress);
          this.contractChef = new web3js.eth.Contract(chefAbi, chefAddress);
          if (this.chainId !== 56) {
            this.usdtCtr = new web3js.eth.Contract(ABI.usdtAbi, ABI.usdtPair);
          }
          this.uniPair = new web3js.eth.Contract(ABI.bscAbi, ABI.bscPair);
          this.lpToken = this.uniPair

          this.refreshTotalSupply();
        }
      });
    },
    getUser: async function () {
      for (let key in this.pools) {
        let pool = this.pools[key]
        this.contractChef.methods.userInfo(pool.poolId, this.user).call().then(res => {
          this.pools[key].userInfo = res
        })
      }

      return true
    },
    getPoolInfo: async function () {
      for (let key in this.pools) {
        let pool = this.pools[key]
        this.contractChef.methods.poolInfo(pool.poolId).call().then(res => {
          this.pools[key].poolInfo = res
        })
      }
      return true
    },
    getSize: function () {
      return this.contract.methods.balanceOf(this.user).call().then(res => {
        this.size = res / 10 ** 9
        this.sizeRaw = res
      })
    },
    getMyobuPrice: async function () {
      return this.uniPair.methods.getReserves().call().then(res => {
        if (this.chainId === 3) {
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

      for (let key in this.pools) {
        let pool = this.pools[key]
        this.pools[pool.poolId].dr = 28800 * this.ethPerBlock * this.ethPrice * this.pools[pool.poolId].poolInfo.allocPoint / this.totalAllocPoint
        this.pools[pool.poolId].apy = this.pools[pool.poolId].tlv === 0 ? 0 : this.pools[pool.poolId].dr * 365 / this.pools[pool.poolId].tlv * 100
      }
    },
    getRewardsETH: function () {
      for (let key in this.pools) {
        let pool = this.pools[key]
        this.contractChef.methods.pendingRewards(pool.poolId, this.user).call().then(res => {
          this.pools[pool.poolId].rewardsETH = (parseFloat(res[1]) / 10 ** 18)
        })
      }
    },
    getEthPrice: async function () {
      if (this.chainId === 56) {
        this.ethPrice = 500
      } else {
        return this.usdtCtr.methods.getReserves().call().then(res => {
          this.ethPrice = res[1] / 10 ** 9 / res[0] / 10 ** 9
        })
      }

      return true
    },
    getTLV: async function () {
      var pairAddressBalance;

      for (let key in this.pools) {
        let pool = this.pools[key]
        if (pool.poolId === 1) {
          await this.contract.methods.balanceOf(ABI.chefAddress).call().then((res) => {
            pairAddressBalance = res / 10 ** 9
          })

          this.pools[pool.poolId].tlv = pairAddressBalance * this.myobuPrice
        } else {
          var balanceOfStakingContract;
          var totalSupply;

          await this.contract.methods.balanceOf(ABI.lpToken).call().then((res) => {
            pairAddressBalance = res / 10 ** 9
          })

          await this.lpToken.methods.balanceOf(ABI.chefAddress).call().then((res) => {
            balanceOfStakingContract = res / 10 ** 9;
          })

          await this.lpToken.methods.totalSupply().call().then((res) => {
            totalSupply = res / 10 ** 9;
          })


          this.pools[pool.poolId].tlv = 2 * this.myobuPrice * pairAddressBalance * balanceOfStakingContract / totalSupply
          // 2*myobuprice*myobu.balanceof(pair address)*lptoken.balanceOf(stakingcontract)/lptoken.totalsupply
        }
      }
    },
    handleAccountsChanged: function (accounts) {
      if (accounts.length === 0) {
        this.connect();
      } else if (accounts[0] !== this.user) {
        this.user = accounts[0];
        this.getSize();
      }
    },
    refreshTotalSupply: async function () {
      await this.getUser()
      await this.getPoolInfo()
      await this.getEthPrice()
      await this.getMyobuPrice()
      this.getRewardsETH()
      this.getDeposit()
      await this.getTLV()
      await this.getDailyRewards()
      // eslint-disable-next-line
      this.getSize().finally(r => {
        let t = this
        setTimeout(function () {
          t.refreshTotalSupply()
        }, 500);
      });
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
    }
  },
  mounted() {
    this.start()
    window.ethereum.on('accountsChanged', this.handleAccountsChanged);
  }
}
</script>

<style scoped>

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
  margin-bottom: -2px;
  vertical-align: baseline;
  height: 14px;
}

.pool-row {
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

.pool-row .focus {
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
  padding-bottom: 50px
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
  padding: 5px 100px;
  line-height: 2.5;
  border-radius: 10px;
  margin-bottom: 10px;
}

.btn.staking.purple {
  background-color: #9075f9;
}

.table tbody + tbody {
  border-top: none;
}

.lock-info {
  border: solid 1px #9075f9;
  background: rgba(251, 251, 251, 0.1) !important;
}

.lock-info td {
  font-size: 12px !important;
  padding-bottom: 0.75rem !important;
}

.lock-info .btn {
  margin-top: 2px;
  padding: 2px 10px;
  margin-right: 0;
  border-radius: 0;
}

.stake {
  color: #ffffff !important;
  min-height: 50vh;
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
  padding-bottom: 10px;
}

.btn.staking {
  width: 100%;
  line-height: 1.5;
  padding: 5px 0;
}

@media (min-width: 320px) and (max-width: 992px) {
  #info {
    padding-top: 150px !important;
  }
}

</style>