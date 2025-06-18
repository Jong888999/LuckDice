const coinEl = document.getElementById('coin');
const resultEl = document.getElementById('result');
const flipBtn = document.getElementById('flipBtn');
const resetBtn = document.getElementById('resetBtn');
const countDuoEl = document.getElementById('count-duo');
const countKongEl = document.getElementById('count-kong');
const audioFlip = document.getElementById('audio-flip');
const audioDuo = document.getElementById('audio-duo');
const audioKong = document.getElementById('audio-kong');

const coinFaces = ['多', '空'];
let countDuo = 0;
let countKong = 0;

flipBtn.onclick = function() {
  coinEl.classList.add('flipping');
  resultEl.textContent = '';
  audioFlip.currentTime = 0;
  audioFlip.play();
  setTimeout(() => {
    const side = Math.random() < 0.5 ? 0 : 1;
    coinEl.textContent = coinFaces[side];
    resultEl.textContent = coinFaces[side];
    if (side === 0) {
      countDuo++;
      countDuoEl.textContent = countDuo;
      audioDuo.currentTime = 0;
      audioDuo.play();
    } else {
      countKong++;
      countKongEl.textContent = countKong;
      audioKong.currentTime = 0;
      audioKong.play();
    }
    coinEl.classList.remove('flipping');
  }, 2500);
};

resetBtn.onclick = function() {
  countDuo = 0;
  countKong = 0;
  countDuoEl.textContent = '0';
  countKongEl.textContent = '0';
  resultEl.textContent = '';
  coinEl.textContent = '🪙';
}; 