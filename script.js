const diceEl = document.getElementById('dice');
const resultEl = document.getElementById('result');
const rollBtn = document.getElementById('rollBtn');

const diceUnicode = ['⚀','⚁','⚂','⚃','⚄','⚅'];

rollBtn.onclick = function() {
  diceEl.classList.add('rolling');
  resultEl.textContent = '';
  setTimeout(() => {
    const num = Math.floor(Math.random() * 6) + 1;
    diceEl.textContent = diceUnicode[num-1];
    resultEl.textContent = num <= 3 ? '做多' : '做空';
    diceEl.classList.remove('rolling');
  }, 700);
}; 