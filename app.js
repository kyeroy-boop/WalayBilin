const moderegister = document.getElementById('mode-register');
const report = document.getElementById('report');
const goToReportbtn = document.querySelector('.btn_goto_report');
const goToRegisterbtn = document.querySelector('.btn_goto_register');

goToReportbtn.addEventListener('click', function(){
  moderegister.classList.add('hidden');
  report.classList.remove('hidden');
})

goToRegisterbtn.addEventListener('click', function(){
  report.classList.add('hidden');
  moderegister.classList.remove('hidden');
})