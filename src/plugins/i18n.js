import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
    'en': {
        home: 'Home',
        tax: 'Tax',
        howToBuy: 'How to buy',
        audit: 'Audit',
        forum: 'Forum',
        dashboard: 'Dashboard',
        whitepaper: 'Fox paper',
        welcomeMsg: 'Myōbu are celestial fox spirits with white fur and full, fluffy tails reminiscent of ripe grain. They are holy creatures, and bring happiness and blessings to those around them. ',
        buyUniswap: 'Buy on Uniswap',
        priceChart: 'Price chart',
        tokenomics: 'Tokenomics',
        trillion: 'Trillion',
        tokenSymbol: 'Token symbol',
        totalSupply: 'Total supply',
        redRateText: 'Redistribution rate increases on consecutive sells',
        fairLaunch: 'Fair launch',
        fairLaunchText: 'No presale. No developers tokens',
        safe: 'Safe',
        safeText: 'Liquidity locked and ownership renounced',
        devFee: 'Dev fee',
        devFeeText: '6% on buys, 5% on the 1st sell, 10% on the 2nd - 4th sells',
        antiDumpTitle: '$MYOBU anti-dump protection',
        antiDumpText1: 'Myōbu was designed to reward holders and discourage dumping. Learning from the mistakes of past so-called "anti-whale" tokens with fixed transaction and wallet limits that become useless as the number of pooled tokens decrease over time, we have introduced a dynamic sell limit that\'s based on price impact. ',
        antiDumpText2: 'Each sell is limited to 2.9% price impact to prevent whale dumps. Only 4 sells with increasing sell cooldowns and taxation rates on consecutive sells are allowed within a 24 hours period to prevent serial dumping. ',
        howToBuyTitle: 'How to buy $MYOBU using crypto',
        step1Title: 'Create a MetaMask Wallet',
        step1Text: '$MYOBU token is available on the Ethereum blockchain. MetaMask is the market leader in ERC20 (Ethereum) wallets.',
        step2Title: 'Send $ETH to MetaMask',
        step2Text: 'Buy Ethereum through MetaMask or transfer it to your MetaMask wallet address from another wallet (e.g. Coinbase or Binance).',
        step3Title: 'Visit Uniswap',
        step3Text: 'The safest place to buy $MYOBU is on Uniswap. Visit Uniswap and click “connect wallet” MetaMask will ask for your signature, go ahead and sign it.',
        step4Title: 'Swap $ETH for $MYOBU',
        step4Text: 'Set your slippage to 10% and enter the amount of $ETH you would like to swap for $MYOBU. Click Connect Wallet then Swap.',
        roadmap: 'Roadmap',
        phase1: 'Phase 1',
        websiteLaunch: 'Website launch',
        kTg: '1,000 Telegram members',
        kHolders: '1,000 Holders',
        mc5: '$5M Market Cap',
        marketingCmpgn: 'Marketing campaigns',
        phase2: 'Phase 2',
        blog: 'Blog launch',
        k5Holders: '5,000 holders',
        k5Tg: '5,000 Telegram members',
        cg: 'Coingecko Listing',
        cmc: 'Coinmarketcap Listing',
        phase3: 'Phase 3',
        swap: 'MyobuSwap',
        k15Holders: '15,000 holders',
        k15Tg: '15,000 Telegram members',
        nft: 'NFTs',
        myobuIsSafe: 'Myōbu is safe',
        myobuIsSafeText1: 'According to',
        myobuIsSafeText2: 'Myōbu passed all the security tests upon audit, and is completely safe.',
        madeByDevs: 'Made by developers, powered by community',
        allRightsReserved: 'All rights reserved',
        language: 'Language',
        shop: 'Shop',
    },
    'cn': {
        home: '主页',
        tax: '税',
        howToBuy: '如何购买',
        audit: '审计',
        forum: 'Forum',
        dashboard: 'Dashboard',
        whitepaper: 'Fox paper',
        welcomeMsg: '天狐精灵Myōbu有着白色的皮毛和丰满蓬松的尾巴，这些特征让人不禁联想到成熟的谷物，所以它被人们认为是可以带来快乐和祝福的神圣生物。',
        buyUniswap: '在 Uniswap 上购买',
        priceChart: '价格图表',
        tokenomics: '代币经济学',
        trillion: '万亿',
        tokenSymbol: '令牌符号',
        totalSupply: '总供应量',
        redRateText: '持币者在 24 小时内多次出售代币会被收取递增的阶梯税率，详情请继续浏览',
        fairLaunch: '公平发布',
        fairLaunchText: '没有预售，开发者不持有代币',
        safe: '安全',
        safeText: 'Uniswap 资金池已经锁定，管理权限已经丢弃。 ',
        devFee: '开发者费用',
        devFeeText: '购买时开发团队收取交易额 6%；24 小时内第 1 次卖出代币时开发团队收取交易额的 5%，第 2-4 次卖出时收取 10%',
        antiDumpTitle: '$MYOBU 反抛售保护',
        antiDumpText1: 'Myōbu 的设计机制旨在奖励持币者并防止抛售。我们从过去所谓的“反鲸鱼”代币的错误中吸取教训：这些代币都具有固定的交易额和钱包限制，随着流动池中代币数量的减少，他们的“反鲸鱼”机制将变得毫无用处。而我们则选择利用价格影响率来限制动态抛售。',
        antiDumpText2: '每次卖出的价格影响率会被限制在 2.9% 以内，以防止大户抛售。在 24 小时内只允许卖出 4 次，且每次卖出后的冻结时间和税率都会增加，这样就防止了连续抛售。',
        howToBuyTitle: '如何购买 $MYOBU',
        step1Title: '创建一个 MetaMask 钱包',
        step1Text: '$MYOBU token 是基于以太坊的代币。MetaMask 是最好的 ERC20（以太坊）持币钱包之一。',
        step2Title: '发送 $ETH 到 MetaMask 钱包',
        step2Text: '您可以在 MetaMask 上购买 ETH，或者从别的可信任的钱包发送到 Metamask 钱包上（例如 Coinbase 或者 Binance）。',
        step3Title: '浏览 Uniswap 网页',
        step3Text: '最安全的方式是在 Uniswap 上购买。  浏览 Uniswap，然后点击“连接钱包”，Metamask 会需要你的授权，然后登陆您的帐号。',
        step4Title: '用 $ETH 兑换 $Myobu',
        step4Text: '设定滑点为 10%，然后输入你想兑换的数量， 点击链接钱包后进行交易。',
        roadmap: '发展规划',
        phase1: '第一阶段',
        websiteLaunch: '官网发布',
        kTg: '1000 个 Telegram 群组成员',
        kHolders: '1000 个持币者',
        mc5: '$五百万市值',
        marketingCmpgn: '市场营销',
        phase2: '第二阶段',
        blog: '博客发布',
        k5Holders: '5,000 个持币者',
        k5Tg: '5,000 个 Telegram 群组成员',
        cg: '被 Coingecko 收录',
        cmc: '被 Coinmarketcap 收录',
        phase3: '第三阶段',
        swap: 'MyobuSwap 交易平台',
        k15Holders: '15,000 个持币者',
        k15Tg: '15,000 个 Telegram 群组成员',
        nft: 'NFT（非同质化代币）',
        myobuIsSafe: 'Myōbu 是安全的',
        myobuIsSafeText1: '根据 ',
        myobuIsSafeText2: '的说法，Myōbu 经审核通过了所有安全测试，完全安全。',
        madeByDevs: '由开发人员制作，由社区提供支持',
        allRightsReserved: '版权所有',
        language: '语言'
    },
    'es': {
        home: 'Inicio',
        tax: 'Tasa de distribucion',
        howToBuy: 'Como comprar',
        audit: 'Auditoria',
        forum: 'Forum',
        dashboard: 'Dashboard',
        whitepaper: 'Fox paper',
        welcomeMsg: 'Los myōbu son espíritus de zorros celestiales con pelaje blanco y colas llenas y esponjosas que recuerdan al grano maduro. Son criaturas santas y traen felicidad y bendiciones a quienes los rodean. ',
        buyUniswap: 'Comprar en Uniswap',
        priceChart: 'Grafico de precios',
        tokenomics: 'Tokenomia',
        trillion: 'Trillon',
        tokenSymbol: 'Simbolo',
        totalSupply: 'Acciones en circulacion',
        redRateText: 'La tasa de redistribución aumenta en ventas consecutivas',
        fairLaunch: 'Lanzamiento justo',
        fairLaunchText: 'Sin preventa. Sin tokens de desarrolladores',
        safe: 'Seguro',
        safeText: 'Liquidez bloqueada y renuncia de propiedad',
        devFee: 'Tarifa de desarrollo',
        devFeeText: '6% en compras, 5% en la primer venta, 10% en la segunda, tercera y cuarta venta',
        antiDumpTitle: '$MYOBU protección Anti-Dumping',
        antiDumpText1: 'Myōbu fue diseñado para recompensar a los holders y desalentar a quienes quieran Dumpearlo. Aprendiendo de los errores del pasado y de los llamados tokens "anti-ballena" con transacciones fijas y límites en las wallets, los cuales se vuelven inútiles a medida que la cantidad de tokens en el pool disminuye con el tiempo, hemos introducido un límite de venta dinámico que se basa en el impacto del precio. ',
        antiDumpText2: 'Cada venta está limitada a un impacto de precio del 2.9% asi evitamos que las ballenas hagan Dump. Solo se permiten 4 ventas con incremento de espera y aumento en la tasa de colaboracion, en un lapso de 24 horas para prevenir el Dumpeo serial. ',
        howToBuyTitle: 'Como comprar $MYOBU',
        step1Title: 'Crear una Billetera (Wallet) en MetaMask',
        step1Text: '$MYOBU esta disponible en el blockchain de Ethereum. MetaMask es el lider en billeteras ERC20 (Ethereum).',
        step2Title: 'Enviar $ETH a MetaMask',
        step2Text: 'Comprar Ethereum con tu MetaMask o transferirle desde otra wallet (Ejemplo. Coinbase o Binance).',
        step3Title: 'Ir a Uniswap',
        step3Text: 'El lugar mas seguro para comprar $MYOBU es Uniswap. Ve a uniswap y dale Click a “conectar wallet” Metamask te pedira tu firma, firmala para comtinuar.',
        step4Title: 'Cambia $ETH por $MYOBU',
        step4Text: 'Coloca el slippage al 10% y escribe la cantidad de $ETH que quieres cambiar por $MYOBU. Dale Click a conectar Wallet y luego a Swap.',
        roadmap: 'Roadmap',
        phase1: 'Fase 1',
        websiteLaunch: 'Lanzamiento del Website',
        kTg: '1,000 miembros en Telegram',
        kHolders: '1,000 Holders',
        mc5: '$5M de mercado de capitalizacion',
        marketingCmpgn: 'Campañas de marketing',
        phase2: 'Fase 2',
        blog: 'Lanzamiento del Blog',
        k5Holders: '5,000 holders',
        k5Tg: '5,000 Miembros en Telegram',
        cg: 'Listado en Coingecko',
        cmc: 'Listado en Coinmarketcap',
        phase3: 'Fase 3',
        swap: 'MyobuSwap',
        k15Holders: '15,000 holders',
        k15Tg: '15,000 Miembros en Telegram',
        nft: 'NFTs',
        myobuIsSafe: 'Myōbu es seguro',
        myobuIsSafeText1: 'Segun',
        myobuIsSafeText2: 'Myōbu paso todas las pruebas de seguridad tras la auditoria y es completamente seguro.',
        madeByDevs: 'Creado por desarrolladores, impulsado por la comunidad',
        allRightsReserved: 'Todos los derechos reservados',
        language: 'Idioma'
    },
    'kr': {
        home: '홈',
        tax: '세금',
        howToBuy: '구매 방법',
        audit: '보안 감사',
        forum: 'Forum',
        dashboard: 'Dashboard',
        whitepaper: 'Fox paper',
        welcomeMsg: '묘부는 잘 익은 곡식을 연상시키는 하얀 털과 푹신한 꼬리를 지닌 천상의 여우 정령입니다. 그들은 신성한 생명체로, 주위 사람들에게 행복과 축복을 가져다 줍니다.',
        buyUniswap: '유니스왑에서 매수하기',
        priceChart: '가격 차트',
        tokenomics: '토크노믹스',
        trillion: '조',
        tokenSymbol: '토큰 기호',
        totalSupply: '총 공급량',
        redRateText: '연달아 매도하면 재분배 세금이 증가합니다',
        fairLaunch: '페어 론칭',
        fairLaunchText: '사전판매 및 개발자 토큰이 없습니다',
        safe: '안전',
        safeText: '유동성 잠금 및 소유권 재선언',
        devFee: '개발자 세금',
        devFeeText: '모든 매수 시 6%, 1차 매도 시 5%, 2~4차 매도시 10%',
        antiDumpTitle: '$MYOBU의 덤핑 제한',
        antiDumpText1: '묘부는 소유자들에게 보상하고 덤핑을 막기 위해 디자인되었습니다. 과거의 이른바 "안티-고래" 토큰이 채택했던 "고정 거래 한도"는 시간이 지날수록 유동성 풀 속 토큰의 수가 줄어들면서 무용지물이 되었습니다. 묘부는 그 단점을 극복하기 위해 가격 영향을 바탕으로 작동하는 역동적인 매도 한계를 도입했습니다.',
        antiDumpText2: '대량 매도를 방지하기 위해, 가격 영향 2.9% 이내 범위 안에서만 매도가 허용됩니다. 연쇄 덤핑 방지를 위해 24시간 동안 4번만 매도할 수 있습니다. 매도 횟수가 많아질수록 쿨다운 시간이 늘어나고 재분배 세금도 높아집니다.',
        howToBuyTitle: '$MYOBU 구매 방법',
        step1Title: '메타마스크 지갑 만들기',
        step1Text: '$$MYOBU 토큰은 이더리움 블록체인에서 사용할 수 있습니다. 메타마스크는 ERC20(이더리움) 지갑 시장의 선두주자입니다.',
        step2Title: '메타마스크에 $ETH 전송',
        step2Text: '메타마스크를 통해 이더리움을 구입하거나 다른 지갑(바이낸스, 업비트, 빗썸 등)에서 메타마스크 지갑 주소로 이더리움을 전송합니다.',
        step3Title: '유니스왑 열기',
        step3Text: '유니스왑을 이용해 안전하게 묘부를 매수할 수 있습니다. 유니스왑을 방문하여 "지갑 연결"을 클릭하면 메타마스크가 서명을 요청할 것입니다. 계속하여 서명하십시오.',
        step4Title: '$ETH을 $MYOBU로 교환합니다.',
        step4Text: '슬리피지를 10%로 설정하고 $MYOBU로 교환하고자 하는 $ETH 금액을 입력하십시오. [지갑 연결]을 누른 후 [스왑]을 누릅니다.',
        roadmap: '로드맵',
        phase1: '1단계',
        websiteLaunch: '웹 사이트 론칭',
        kTg: '텔레그램 회원 1000명',
        kHolders: '소유자 1,000명',
        mc5: '시가총액  5백만 달러',
        marketingCmpgn: '마케팅 캠페인 전개',
        phase2: '2단계',
        blog: '블로그 론칭',
        k5Holders: '소유자 5,000명',
        k5Tg: '텔레그램 회원 5000명',
        cg: '코인게코 상장',
        cmc: '코인마켓캡 상장',
        phase3: '3단계',
        swap: '묘부스왑',
        k15Holders: '소유자 15,000명 ',
        k15Tg: '텔레그램 회원 15,000 명',
        nft: 'NFT 마켓',
        myobuIsSafe: '묘부는 안전합니다',
        myobuIsSafeText1: '묘부의 보안 감사는',
        myobuIsSafeText2: '에 의해 시행되었습니다. 묘부는 모든 보안 테스트를 통과했으며, 완전히 안전합니다',
        madeByDevs: '개발자가 만들고, 커뮤니티가 이끌어나갑니다.',
        allRightsReserved: 'All rights reserved',
        language: '언어'
    },
    'de': {
        home: 'Startseite',
        tax: 'Steuer',
        howToBuy: 'Token kaufen',
        audit: 'Audit',
        forum: 'Forum',
        dashboard: 'Dashboard',
        whitepaper: 'Fox paper',
        welcomeMsg: 'Myōbu ist ein heiliger Fuchsgeist mit weißem Fell und vollem flauschigem Schwanz, der an reifes Getreide erinnert. Sie werden als heilig erachtet und bringen Glück und Segen für Menschen in unmittelbarer Umgebung',
        buyUniswap: 'Auf Uniswap kaufen',
        priceChart: 'Preisgrafik',
        tokenomics: 'Tokenomics',
        trillion: 'Billionen',
        tokenSymbol: 'Tokensymbol',
        totalSupply: 'Tokenmenge',
        redRateText: 'Umverteilungsrate an Investoren erhöht sich mit jedem konsekutiven Verkauf',
        fairLaunch: 'Faire Markteinführung ',
        fairLaunchText: 'Kein Vorverkauf. Entwickler halten keine $MYOBU Token',
        safe: 'Sicher',
        safeText: 'Liquidität gesichert und Codeeigentum aufgegeben',
        devFee: 'Entwicklergebühren',
        devFeeText: '6% bei Kauf, 5% beim ersten Verkauf, 10% beim 2ten – 4ten Verkauf',
        antiDumpTitle: '$MYOBU Anti-Dump Schutz',
        antiDumpText1: 'Myōbu wurde entwickelt um Halter zu belohnen und Panikverkäufe zu verhindern. Wir haben aus den Fehlern von sogenannten „Anti-Wal“ Token gelernt, die fixe Transaktions- und Verkaufslimite hatten. Diese wurden ineffektiv je schneller die Menge der gepoolten Tokens abnahm. Wir haben deshalb ein dynamisches Verkaufslimit eingeführt, das vom Preiseinfluss abhängig ist.',
        antiDumpText2: 'Jeder Verkauf ist limitiert auf einen Preiseinfluss von maximal 2.9%, um Massenverkäufe durch Wale zu verhindern. Nur 4 aufeinanderfolgende Verkäufe mit zunehmender Verkaufswartezeit und Steuerrate sind erlaubt innerhalb von 24 Stunden, um einen rapiden Preisverfall zu verhindern.',
        howToBuyTitle: 'Wie man $MYOBU kaufen kann',
        step1Title: 'Erstelle einen MetaMask Geldbeutel',
        step1Text: '$MYOBU Token ist ausschließlich auf der Ethereum Blockchain verfügbar. MetaMask ist der Marktführer bei ERC20 (Ethereum) Geldbeuteln.',
        step2Title: 'Sende $ETH zu MetaMask',
        step2Text: 'Kaufe $ETH durch MetaMask oder transferiere es zu deiner MetaMask Geldbeuteladresse von einem anderen Geldbeutel (z.B. Coinbase oder Binance).',
        step3Title: 'Besuche Uniswap',
        step3Text: 'Der sicherste Anbieter um $MYOBU zu kaufen ist Uniswap. Klicke bei Uniswap auf “Mit einer Wallet verbinden”. MetaMask wird dich um eine Signatur bitten. Klicke auf „weiter“ und signiere es.',
        step4Title: 'Tausche $ETH für $MYOBU',
        step4Text: 'Setze deinen Slippage auf 10% und füge die Menge an $ETH ein, die du für $MYOBU eintauschen möchtest. Klicke anschließend „Swap“.',
        roadmap: 'Roadmap',
        phase1: 'Phase 1',
        websiteLaunch: 'Website Einführung',
        kTg: '1.000 Telegram Mitglieder',
        kHolders: '1.000 Investoren',
        mc5: '$5 Millionen Marktkapitalisierung',
        marketingCmpgn: 'Marketingkampagnen',
        phase2: 'Phase 2',
        blog: 'Blog Start durch Community',
        k5Holders: '5.000 Investoren',
        k5Tg: '5.000 Telegram Mitglieder',
        cg: 'Coingecko Notierung',
        cmc: 'Coinmarketcap Notierung',
        phase3: 'Phase 3',
        swap: 'MyobuSwap',
        k15Holders: '15.000 Eigentümer',
        k15Tg: '15.000 Telegram Mitglieder',
        nft: 'NFTs',
        myobuIsSafe: 'Myōbu ist sicher',
        myobuIsSafeText1: 'Auf Basis von',
        myobuIsSafeText2: 'hat Myōbu alle Sicherheitstest bestanden und ist komplett sicher.',
        madeByDevs: 'Von Entwicklern erstellt, durch Community gestärkt',
        allRightsReserved: 'Alle Rechte vorbehalten',
        language: 'Sprache'
    },
    'tr': {
        home: 'Anasayfa',
        tax: 'İşlem ücreti',
        howToBuy: 'Nasıl alırım',
        audit: 'Güvenilirlik onayı',
        forum: 'Forum',
        dashboard: 'Dashboard',
        whitepaper: 'Fox paper',
        welcomeMsg: 'Myóbu; beyaz kürklü ve olgun tahıllara benzeyen dolgun, kabarık kuyruklu kutsal tilki ruhlarıdır. Onlar kutsal yaratıklardır ve etraflarındakilere mutluluk ile bereket getirirler.',
        buyUniswap: 'Uniswap kullanarak alınabilir',
        priceChart: 'Fiyat grafiği',
        tokenomics: 'Token dağılımı',
        trillion: 'Trilyon',
        tokenSymbol: 'Token sembolü',
        totalSupply: 'Toplam arz',
        redRateText: 'Peşpeşe yapılan her satış, otomatik farm ile elde ettiğiniz token kazanım oranını arttırır',
        fairLaunch: 'Myóbu adil token dağılımına sahiptir.',
        fairLaunchText: 'Ön satış yapılmadı. Token sahiplerinde tek bir adet bile token yoktur',
        safe: 'Güvenilir',
        safeText: 'Liquidity kilitlendi ve token sahipleri haklarından vazgeçtiler. (Myóbu topluluğa ait)',
        devFee: 'Her işlemde ekibe düşen pay',
        devFeeText: '6% her alımdan, 5% 1. satıştan, 10% 2. ve 4. satıştan alınıyor',
        antiDumpTitle: '$MYOBU rug pull korunmasına sahiptir.',
        antiDumpText1: 'Myóbu, token sahiplerini ödüllendirmek için ve ani düşüşleri önlemek için tasarlandı. Sabit işlem ve cüzdan limitleri ile birleştirilmiş tokenlerin sayısı zamanla azaldıkça işe yaramaz hale gelen eski sözde "balina karşıtı" jetonların hatalarından ders alarak, fiyat etkisine dayalı dinamik bir satış limiti getirdik. ',
        antiDumpText2: 'Her satış fiyatın balina etkisiyle düşmesini önlemek amacıyla, %2.9 fiyat kaymasına sahiptir. Peşpeşe yapılan satışları önlemek ve fiyat düşüşünü önlemek amacıyla, kişilere 24 saat içerisinde ve belirli zaman aralıklarıyla sadece 4 satış izni verlir.',
        howToBuyTitle: '$MYOBU nasıl alınır?',
        step1Title: 'Metamask, Trustwallet veya başka bir cüzdan oluşturun.',
        step1Text: '$MYOBU token sadece Ethereum ağından satın alınabilir. MetaMask, Ethereum ağında (Erc20) işlem yapan lider cüzdandır. Trustwallet vb diğer cüzdanlar ile de Ethereum ağında işlem yapabilirsiniz.',
        step2Title: 'Cüzdanınıza $ETH gönderin ya da bulundurun.',
        step2Text: 'Borsa hesabınızdan (Binance, Paribu, Btcturk) $ETH satın alın ve bunu cüzdanınıza (Metamask, Trustwallet) transfer edin.',
        step3Title: 'Cüzdanınızdan (Metamask, Trustwallet) Uniswap\'a giriş yapın.',
        step3Text: '$MYOBU token şimdilik sadece Uniswap aracılığıyla alınmaktadır. Uniswap\'a girin ve "cüzdan bağla" butonuna tıklayın. MetaMask ya da Trustwallet sizden izin isteyecektir, gerekli izinleri verin.',
        step4Title: '$ETH \' nizi kullanarak $MYOBU satın alın.',
        step4Text: 'Slippage ayarlarınızı 10% yapın ve ne kadar $ETH \' lik $MYOBU alacağınızı ilgili bölüme girin. Al ya da dönüştür butonuna basarak alımı gerçekleştirin.',
        roadmap: '#MYOBU yol haritası',
        phase1: '1. Kısım',
        websiteLaunch: 'Website oluşturuldu ve aktif edildi.',
        kTg: '1,000 Telegram üyesi',
        kHolders: '1,000 Cüzdan sahibi',
        mc5: '$5M Market değeri',
        marketingCmpgn: 'Proje pazarlamaları ve reklam çalışmaları',
        phase2: '2. Kısım',
        blog: 'Blog sayfası oluşturuldu ve aktif edildi.',
        k5Holders: '5,000 Cüzdan sahibi',
        k5Tg: '5,000 Telegram üyesi',
        cg: 'Coingecko listelenmesi',
        cmc: 'Coinmarketcap listelenmesi',
        phase3: '3. Bölüm',
        swap: 'MyobuSwap oluşturuldu ve aktif edildi',
        k15Holders: '15,000 Cüzdan sahibi',
        k15Tg: '15,000 Telegram üyesi',
        nft: 'NFT çalışmaları',
        myobuIsSafe: 'Myōbu güvenilirdir.',
        myobuIsSafeText1: 'Herkese uygundur.',
        myobuIsSafeText2: 'Myōbu, audit tarafından yapılan tüm güvenilirlik testlerini geçti ve güvenli şekilde tamamladı.',
        madeByDevs: 'Geliştiriciler tarafından yapıldı, topluluğu ile güçlendi.',
        allRightsReserved: 'Tüm hakları saklıdır',
        language: 'Dil',
    },
    'jp': {
        home: 'ホーム',
        tax: '税',
        howToBuy: '購入方法',
        audit: 'セキュリティ監査',
        forum: 'Forum',
        dashboard: 'Dashboard',
        welcomeMsg: 'Myobuは白く美しい体毛と、よく熟した穀物を連想させるふんわりとした尻尾を持つ稲荷神に仕えるキツネの精霊です。 彼らは神聖な生き物として周りの人々に幸福と祝福をもたらします。.',
        buyUniswap: 'Uniswapで購入する',
        priceChart: '価格チャート',
        tokenomics: 'トークノミクス',
        trillion: '兆',
        tokenSymbol: 'トークンシンボル',
        totalSupply: '総供給量',
        redRateText: '連続で売却をすると配当率が増加します。',
        fairLaunch: 'フェアローンチ',
        fairLaunchText: '先行販売や開発者のトークンはありません。',
        safe: '安全',
        safeText: '流動性はロックされており所有権は放棄されています。',
        devFee: '開発費',
        devFeeText: '購入で6%、1回目の売却は5%、2~4回目の売却は10%です。',
        antiDumpTitle: '$MYOBUのダンプ制限',
        antiDumpText1: 'Myobuは所有者に報酬を付与することでダンプを防ぐ様に設計されました。プールされたトークン数が時間とともに減少するにつれて役に立たなくなる固定トランザクションとウォレット制限を持つ、いわゆる過去の「アンチクジラ」トークンの誤りから学習し、価格の影響に基づいて動的な売却制限を導入しました。',
        antiDumpText2: '大量の売却を防ぐため、売却は 2.9% の影響範囲内で、連続ダンプ防止のため、24時間で4回のみに制限されています。 また、売却の回数が多くなるほどクールダウン時間が増加し配当率も高くなります。',
        howToBuyTitle: '$MYOBUの購入方法',
        step1Title: 'メタマスクウォレットを作成してください。',
        step1Text: '$MYOBUトークンはEthereumブロックチェーンで交換できます。 メタマスクは、ERC20(Ethereum)ウォレットのマーケットリーダーです。',
        step2Title: 'メタマスクに$ETHを転送（購入）してください。',
        step2Text: 'メタマスクを介してEthereumを購入するか、他のウォレット(バイナンス、GMOコイン、BitBankなど)からメタマスクウォレットアドレスへイーサリアムを送金します。',
        step3Title: 'Uniswapにアクセスします。',
        step3Text: '$ MYOBUを購入するのに最も安全なサイトはUniswapです。Uniswapにアクセスし「ウォレットの接続」をクリックします。MetaMaskが署名を求めるので、先に進んで署名します。',
        step4Title: '$ETHを$MYOBUに交換します。',
        step4Text: 'スリッページを10％に設定し、$ MYOBUと交換したい$ ETHの金額を入力します。[ウォレットの接続]、[スワップ]の順にクリックします。',
        roadmap: 'ロードマップ',
        phase1: 'フェーズ１',
        websiteLaunch: 'ウェブサイトの立ち上げ',
        kTg: 'テレグラムグループの会員1000人',
        kHolders: '1,000人のホルダー',
        mc5: '時価総額5百万ドル',
        marketingCmpgn: 'マーケティングキャンペーンの展開',
        phase2: 'フェーズ２',
        blog: 'ブログの開設',
        k5Holders: '5,000人のホルダー',
        k5Tg: 'テレグラムグループの会員5000人',
        cg: 'Coingeckoへリスト',
        cmc: 'Coinmarketcapへリスト',
        phase3: 'フェーズ３',
        swap: 'Myobu Swap',
        k15Holders: '15,000人のホルダー ',
        k15Tg: 'テレグラムグループの会員15000人',
        nft: 'NFTマーケット',
        myobuIsSafe: 'Myobuは安全です',
        myobuIsSafeText1: 'Myobuのセキュリティ監査は',
        myobuIsSafeText2: 'によって施行されました。 Myobuはすべてのセキュリティテストに合格しているので安全です。',
        madeByDevs: '開発者がつくり、コミュニティがリードしていきます。',
        allRightsReserved: 'All rights reserved',
        language: '言語'
    }

};

const i18n = new VueI18n({
    locale: 'en', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages, // set locale messages
});

export default i18n;