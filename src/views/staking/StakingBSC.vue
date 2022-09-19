<template>
  <div class="overflow-hidden">
    <section id="info" class="pt-150 tertiary-bg">
      <div class="container">
        <div
          class="row align-items-center justify-content-between border-bottom"
        >
          <div class="col-md-6 col-sm-12 text-md-left text-center">
            <h1 class="text-white align-middle mb-5">
              <img
                src="img/redesign/staking.png"
                class="img-fluid staking-img my-auto align-middle"
              />
              <span class="my-auto align-middle"> MYŌBU STAKING</span>
            </h1>
          </div>
        </div>
      </div>
    </section>
    <section class="ptb-100">
      <div class="container">
        <div class="row">
          <div class="col">
            <p class="mt-4" style="font-weight: bold; font-size: 18px">
              The BSC Staking contract is broken. Please follow the steps below
              to withdraw your tokens. Sorry for the inconvenience:
            </p>
            <p>
              Visit
              <a
                href="https://bscscan.com/address/0x2fdceabdd77423dfa7ff06eea7fbeab5f4b74a0e#writeContract"
                target="_blank"
                rel="noreferrer"
                >https://bscscan.com/address/0x2fdceabdd77423dfa7ff06eea7fbeab5f4b74a0e#writeContract</a
              >
            </p>
            <p>
              Connect your wallet (that you had staked with), using metamask or
              walletconnect. <br />And then Write the contract under #11.
              <code>emergency withdraw</code>.
            </p>
            <p>
              For normal Myobu staked tokens, just enter <code>0</code> into the
              <code>_pid</code> field, and push <code>Write</code>. Confirm the
              transaction, and your tokens will be returned to you.
            </p>
            <p>
              If you staked LP, you will enter <code>1</code> and do the same
              thing.
            </p>
            <p>
              Just to be clear: _pid (stands for pool id): <code>0</code> for
              myobu, <code>1</code> for lp
            </p>
            <p>
              Sorry about the inconvenience, I had hoped to find a solution, but
              there doesn't appear to be one, and it is time that you can get
              your tokens back fairly
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Web3 from "web3";
import ABI from "../../helpers/myobuAbi";

const chefAbi = ABI.chefBSCAbi;

const contractAddress = ABI.contractBSCAddress;
const chefAddress = ABI.chefBSCAddress;

export default {
  name: "StakingBSC",
  data: function () {
    return {
      isObservationEnabled: false,
      user: null,
      contract: null,
      contractChef: null,
      ethCtr: null,
      ethPerBlock: 0,
      totalAllocPoint: 0,
      size: 0,
      ethPrice: 0,
      myobuPrice: 0,
      chainId: 1,
      pools: {
        1: {
          poolId: 1,
          name: "Myobu",
          link: "/staking/stake/myobu-bsc",
          manageLink: "/staking/bsc/manage/1",
          icon: false,
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
          rewardsETH: 0,
          dr: 0,
          tlv: 0,
          apy: 0,
        },
        0: {
          poolId: 0,
          name: "Myobu / wBNB LP",
          link: "/staking/stake/myobu-wbnb",
          manageLink: "/staking/bsc/manage/0",
          icon: "img/bnb.png",
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
          rewardsETH: 0,
          dr: 0,
          tlv: 0,
          apy: 0,
        },
      },
    };
  },
  methods: {
    beautifyNumbers: function (number) {
      if (number > 1000000000) {
        return Math.round((number / 1000000000) * 100) / 100 + "B";
      } else if (number > 1000000) {
        return Math.round((number / 1000000) * 100) / 100 + "M";
      } else if (number > 1000) {
        return Math.round((number / 1000) * 100) / 100 + "K";
      } else {
        return Math.round(number * 100) / 100;
      }
    },
    beautifyRewards: function (number) {
      if (number === 0) {
        return 0.0;
      } else if (number < 0.0001) {
        return "< 0.0001";
      } else {
        return this.format(number, 6);
      }
    },
    beautifyWallet: function (address) {
      return address.slice(0, 10) + "..." + address.slice(-4);
    },
    format: function (number, digits = 0) {
      return new Intl.NumberFormat("en-US", {
        minimumFractionDigits: digits,
        maximumFractionDigits: digits,
      }).format(number);
    },
    start: async function () {
      /*****************************************/
      /* Detect the MetaMask Ethereum provider */
      /*****************************************/
      // this returns the provider, or null if it wasn't detected
      //const provider = await detectEthereumProvider();
      /*
      const provider = window.ethereum;

      if (provider) {
        this.startApp(provider); // Initialize your app
      }
      */
      /***********************************************************/
      /* Handle user accounts and accountsChanged (per EIP-1193) */
      /***********************************************************/
      /*
      window.ethereum
          .request({method: 'eth_accounts'})
          .then(this.handleAccountsChanged)
          .catch((err) => {
            // Some unexpected error.
            // For backwards compatibility reasons, if no accounts are available,
            // eth_accounts will return an empty array.
            console.error(err);
          });
          */
    },
    startApp: function (provider) {
      // If the provider returned by detectEthereumProvider is not the same as
      // window.ethereum, something is overwriting it, perhaps another wallet.
      if (provider !== window.ethereum) {
        console.error("Do you have multiple wallets installed?");
      }

      let web3js = new Web3(provider);

      web3js.eth
        .getChainId()
        .then((id) => {
          this.chainId = id;

          if (id != 56) {
            alert("Not connected to BSC Mainnet !" + id);
          } else {
            let connected = false;
            while (!connected) {
              try {
                this.contract = new web3js.eth.Contract(
                  ABI.myobuBSCAbi,
                  contractAddress
                );
                this.contractChef = new web3js.eth.Contract(
                  chefAbi,
                  chefAddress
                );
                if (this.chainId !== 3) {
                  this.usdtCtr = new web3js.eth.Contract(
                    ABI.usdtAbi,
                    ABI.usdtPair
                  );
                }
                this.uniPair = new web3js.eth.Contract(ABI.bscAbi, ABI.bscPair);
                this.lpToken = this.uniPair;

                connected = true;
              } catch (error) {
                console.log(error);
              }
            }
            this.refreshTotalSupply();
          }
        })
        .catch((err) => console.log("Chain select: " + err));
    },
    withdraw: async function (poolId) {
      return this.contractChef.methods
        .withdraw(poolId, this.pools[poolId].userInfo.amount.toString())
        .send({ from: this.user, value: 0 })
        .on("receipt", function () {
          console.log("Successful");
        })
        .on("error", function () {
          console.log("Failed");
        });
    },
    getUser: async function () {
      for (let key in this.pools) {
        let pool = this.pools[key];
        this.contractChef.methods
          .userInfo(pool.poolId, this.user)
          .call()
          .then((res) => {
            this.pools[key].userInfo = res;
          })
          .catch((err) => console.log("getUser: " + err));
      }

      return true;
    },
    getPoolInfo: async function () {
      for (let key in this.pools) {
        let pool = this.pools[key];
        this.contractChef.methods
          .poolInfo(pool.poolId)
          .call()
          .then((res) => {
            this.pools[key].poolInfo = res;
          })
          .catch((err) => console.log("getPoolInfo: " + err));
      }
      return true;
    },
    getSize: function () {
      return this.contract.methods
        .balanceOf(this.user)
        .call()
        .then((res) => {
          this.size = res / 10 ** 9;
        })
        .catch((err) => console.log("getSize: " + err));
    },
    getMyobuPrice: async function () {
      return this.uniPair.methods
        .getReserves()
        .call()
        .then((res) => {
          if (this.chainId === 56) {
            this.myobuPriceEth = res[1] / 10 ** 18 / (res[0] / 10 ** 9);
          } else {
            this.myobuPriceEth = res[0] / 10 ** 18 / (res[1] / 10 ** 9);
          }
          this.myobuPrice = this.myobuPriceEth * this.ethPrice;
        })
        .catch((err) => console.log("getUniPairReserves: " + err));
    },
    getDailyRewards: async function () {
      await this.contractChef.methods
        .ETHPerBlock()
        .call()
        .then((res) => {
          this.ethPerBlock = res / 10 ** 18;
        })
        .catch((err) => console.log("EthPerBlock: " + err));

      await this.contractChef.methods
        .totalAllocPoint()
        .call()
        .then((res) => {
          this.totalAllocPoint = res;
        })
        .catch((err) => console.log("totalAllocPoint: " + err));

      for (let key in this.pools) {
        let pool = this.pools[key];
        this.pools[pool.poolId].dr =
          (28800 *
            this.ethPerBlock *
            this.ethPrice *
            this.pools[pool.poolId].poolInfo.allocPoint) /
          this.totalAllocPoint;
        this.pools[pool.poolId].apy =
          this.pools[pool.poolId].tlv === 0
            ? 0
            : ((this.pools[pool.poolId].dr * 365) /
                this.pools[pool.poolId].tlv) *
              100;
      }
    },
    getRewardsETH: function () {
      for (let key in this.pools) {
        let pool = this.pools[key];
        this.contractChef.methods
          .pendingRewards(pool.poolId, this.user)
          .call()
          .then((res) => {
            this.pools[pool.poolId].rewardsETH = parseFloat(res[1]) / 10 ** 18;
          })
          .catch((err) => console.log("pendingRewards: " + err));
      }
    },
    getDeposit: function () {
      this.contractChef.methods
        .userInfo(1, this.user)
        .call()
        .then((res) => {
          this.pools[1].deposit = res["amount"] / 10 ** 9;
        })
        .catch((err) => console.log("getDeposit: " + err));

      this.contractChef.methods
        .userInfo(0, this.user)
        .call()
        .then((res) => {
          this.pools[0].deposit = res["amount"] / 10 ** 18;
        });
    },
    getEthPrice: async function () {
      if (this.chainId === 56) {
        this.ethPrice = 500;
      } else {
        return this.usdtCtr.methods
          .getReserves()
          .call()
          .then((res) => {
            this.ethPrice = res[1] / 10 ** 9 / (res[0] / 10 ** 18);
          })
          .catch((err) => console.log("getEthPrice: " + err));
      }

      return true;
    },
    getTLV: async function () {
      var pairAddressBalance;

      for (let key in this.pools) {
        let pool = this.pools[key];
        if (pool.poolId === 1) {
          await this.contract.methods
            .balanceOf(ABI.chefBSCAddress)
            .call()
            .then((res) => {
              pairAddressBalance = res / 10 ** 9;
            })
            .catch((err) => console.log("getTLV: " + err));

          this.pools[pool.poolId].tlv = pairAddressBalance * this.myobuPrice;
        } else {
          var balanceOfStakingContract;
          var totalSupply;

          await this.contract.methods
            .balanceOf(ABI.bscPair)
            .call()
            .then((res) => {
              pairAddressBalance = res / 10 ** 9;
            })
            .catch((err) => console.log("getTLV2: " + err));

          await this.lpToken.methods
            .balanceOf(ABI.chefBSCAddress)
            .call()
            .then((res) => {
              balanceOfStakingContract = res / 10 ** 9;
            })
            .catch((err) => console.log("getTLV3: " + err));

          await this.lpToken.methods
            .totalSupply()
            .call()
            .then((res) => {
              totalSupply = res / 10 ** 9;
            })
            .catch((err) => console.log("getTLV4: " + err));

          this.pools[pool.poolId].tlv =
            (2 *
              this.myobuPrice *
              pairAddressBalance *
              balanceOfStakingContract) /
            totalSupply;
          // 2*myobuprice*myobu.balanceof(pair address)*lptoken.balanceOf(stakingcontract)/lptoken.totalsupply
        }
      }
    },
    handleAccountsChanged: function (accounts) {
      if (accounts.length === 0) {
        this.connect();
      } else if (accounts[0] !== this.user) {
        this.user = accounts[0];
      }
    },
    refreshTotalSupply: async function () {
      await this.getUser();
      await this.getPoolInfo();
      await this.getEthPrice();
      await this.getMyobuPrice();
      this.getRewardsETH();
      this.getDeposit();
      await this.getTLV();
      await this.getDailyRewards();
      // eslint-disable-next-line
      this.getSize().finally((r) => {
        let t = this;
        setTimeout(function () {
          t.refreshTotalSupply();
        }, 500);
      });
    },
    connect() {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then(this.handleAccountsChanged)
        .catch((err) => {
          if (err.code === 4001) {
            // EIP-1193 userRejectedRequest error
            // If this happens, the user rejected the connection request.
            console.log("Please connect to MetaMask.");
          } else {
            console.error(err);
          }
        });
    },
  },
  mounted() {
    this.start();
    window.ethereum.on("accountsChanged", this.handleAccountsChanged);
  },
};
</script>

<style scoped>
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
  font-family: "MerriweatherSansRoman", sans-serif;
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

#ETH {
  color: #ffffff !important;
}

.pools-mobile img {
  padding: 5px;
  margin-right: 10px;
  max-width: 20px;
}

.pools-mobile img.img-rounded {
  border-radius: 50%;
  margin: 10px;
  border: solid 1px #9075f9;
  max-width: 35px;
}

.bordered {
  border: solid 1px #9075f9;
  background: rgba(251, 251, 251, 0.1);
  margin: 10px;
  padding-bottom: 15px;
}

.border-bottom {
  border: none !important;
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