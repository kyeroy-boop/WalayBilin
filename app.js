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

function onScanSuccess (decodedText, decodedResult) {
document.getElementById('scan-result-register').innerText = decodedText;
html5QrcodeScanner.clear();

}
let html5QrcodeScanner = new Html5QrcodeScanner("reader-register", {
  fps: 10, qrbox: {width:250, height:250}},
);

html5QrcodeScanner.render(onScanSuccess);