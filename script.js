const tabs = document.querySelectorAll('.market-tabs .tab');
const priceValue = document.querySelector('.price-value span:first-child');
const priceChange = document.querySelector('.price-change');
const symbolName = document.querySelector('.symbol');
const descText = document.querySelector('.desc');

const marketData = {
  '주식': {
    symbol: 'AAPL',
    desc: '실시간 호가 / 주식',
    price: '186.45',
    change: '+1.32 (0.71%)',
    trend: 'positive',
  },
  '코인': {
    symbol: 'BTC',
    desc: '실시간 호가 / 코인',
    price: '63,280,000',
    change: '+2.48%',
    trend: 'positive',
  },
  '코글': {
    symbol: 'KGL',
    desc: '실시간 호가 / 코글',
    price: '4,320',
    change: '-0.92%',
    trend: 'negative',
  },
};

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tabs.forEach((item) => item.classList.remove('active'));
    tab.classList.add('active');
    const data = marketData[tab.textContent.trim()];
    if (!data) return;

    symbolName.textContent = data.symbol;
    descText.textContent = data.desc;
    priceValue.textContent = data.price;
    priceChange.textContent = data.change;
    priceChange.classList.toggle('positive', data.trend === 'positive');
    priceChange.classList.toggle('negative', data.trend === 'negative');
  });
});
