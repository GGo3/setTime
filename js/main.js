const btn1El = document.querySelector('.btn-1');
const btn2El = document.querySelector('.btn-2');
const btn3El = document.querySelector('.btn-3');
const block1El = document.querySelector('.block1');
const block2El = document.querySelector('.block2');
const block3El = document.querySelector('.block3');




const loadingBtnsInTurn = (el, time, callback) => {
  setTimeout(() => {
    el.style.opacity = '1';
    el.style.height = '100px';
    if (callback) callback();
  }, time);
}

loadingBtnsInTurn(btn1El, 0, () => {
  loadingBtnsInTurn(btn2El, 3121, () => {
    btn1El.textContent = 'Btn1';
    btn1El.addEventListener('click', () => {block1El.classList.toggle('show');});
    loadingBtnsInTurn(btn3El, 3101, () => {
      btn2El.textContent = 'Btn2';
      btn2El.addEventListener('click', () => {block2El.classList.toggle('show');});
      loadingBtnsInTurn(btn3El, 3101, () => {
        btn3El.textContent = 'Btn3';
        btn3El.addEventListener('click', () => {block3El.classList.toggle('show');});
      });
    });
  });
});


