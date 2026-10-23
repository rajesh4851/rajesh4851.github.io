// day / night — shares the same saved choice as the homepage
const toggleBtn = document.getElementById('toggle');
function setNight(on) {
  document.body.classList.toggle('night', on);
  toggleBtn.textContent = on ? '☀️' : '🌙';
  try { localStorage.setItem('night', on ? '1' : '0'); } catch (e) {}
}
let saved = null;
try { saved = localStorage.getItem('night'); } catch (e) {}
setNight(saved === '1');
toggleBtn.addEventListener('click', () => setNight(!document.body.classList.contains('night')));
