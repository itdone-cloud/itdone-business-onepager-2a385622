(function () {
  var d = new Date().getDay();
  var row = document.querySelector('tr[data-day="' + d + '"]');
  if (row) row.classList.add('today');
  var y = document.getElementById('yr');
  if (y) y.textContent = new Date().getFullYear();
})();
