<template>
  <div>
    <div
      class="dropdown"
      style="display: inline-block; z-index: 99999; overflow: visible"
    >
      <button class="btn btn-purple mr-2 buy-btn" data-toggle="dropdown">
        🦄 BUY MYŌBU
      </button>
      <div class="dropdown-menu dropdown-menu-right" style="overflow: auto">
        <a
          href="https://app.uniswap.org/#/swap?use=V2&inputCurrency=ETH&outputCurrency=0xdfdd3459d4f87234751696840092ee20c970fb07"
          target="_blank"
          class="dropdown-item"
          >Uniswap</a
        >
        <a
          href="https://pancakeswap.finance/swap?outputCurrency=0x4ef06d1a55962f29d362c53c864a4f0c791dcb9e"
          target="_blank"
          class="dropdown-item"
          >Pancakeswap</a
        >
        <a
          href="https://www.hotbit.io/exchange?symbol=MYOBU_USDT"
          target="_blank"
          class="dropdown-item"
          >Hotbit</a
        >
        <!-- https://buy.routelay.com?apiKey=dc804946-723d-4a72-81d9-f97b664c208d&to=myobu&primaryColor=9075f9&mode=buy&isDarkTheme=false&cl=myobu -->
        <a
          href="https://buy.routelay.com/?primaryColor=9075f9&mode=buy&isDarkTheme=false&cl=myobu"
          target="_blank"
          class="dropdown-item"
          >Routely (by Fiat)</a
        >
      </div>
    </div>
    <a href="https://app.multichain.org/#/router" target="_blank">
      <button class="btn btn-purple brigde-btn mt-2 mt-lg-0">🌉 BRIDGE</button>
    </a>
  </div>
</template>