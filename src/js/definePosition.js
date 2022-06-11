export default function definePosition() {
  const goblined = document.querySelector('.goblined');
  let exId = 999;
  if (goblined) {
    exId = goblined.getAttribute('id');
    goblined.classList.remove('goblined');
  }
  const cells = document.querySelectorAll('.cell');
  const cellsArr = [...cells];
  let id = 0;
  do id = Math.round(Math.random() * (cellsArr.length - 1));
  while (id === exId);
  const cell = document.getElementById(id);
  cell.classList.add('goblined');
}
