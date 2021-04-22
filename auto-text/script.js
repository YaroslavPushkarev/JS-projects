const btn = document.getElementById('btn')
const wrap = document.getElementById('wrap');

btn.addEventListener('click', () => {
  createNotification()
})

function createNotification() {
  const notif = document.createElement('div');
  notif.classList.add('toast');

  notif.innerText = "This notif";

  wrap.appendChild(notif);

  setTimeout(() => {
    notif.remove();
  }, 3000);
}
