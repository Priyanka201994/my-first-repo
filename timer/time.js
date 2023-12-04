let id;
let totalsec;

function start() {
  let h = document.getElementById("hr");
  let m = document.getElementById("min");
  let s = document.getElementById("sec");
  let inText = document.getElementById("innerText");
  totalsec = Number(h.value) * 3600 + Number(m.value) * 60 + Number(s.value);
  
  if (totalsec <= 0) {
    alert("please enter a valid time");
  }
  id = setInterval(() => {
   if (totalsec<=0)
   {
    clearInterval(id)
   }
    let hour = Math.floor(Number(totalsec) / 3600);
  let minutes = Math.floor((Number(totalsec) % 3600) / 60);
  let seconds1 = Math.floor((Number(totalsec) % 3600) % 60);
  h.value=hour
  m.value=minutes
  s.value=seconds1
    totalsec = totalsec - 1;
  }, 1000);
}
function pause() {
  clearInterval(id);
}
function reset() {
  clearInterval(id);
  // inText.innerText = 0 + ":" + 0 + ":" + 0;
  document.getElementById("hr").value=0;
  document.getElementById("min").value=0;
  document.getElementById("sec").value=0;
  
}
