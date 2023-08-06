document.title = window.location.hostname;

for (let blockedEvent of ["contextmenu", "dragstart"]) {
  document.addEventListener(blockedEvent, (event) => {
    event.preventDefault();
    return false;
  });
}

const showTime = () =>
  (document.getElementById("currentTime").innerHTML =
    new Date().toLocaleString());

showTime();
setInterval(() => showTime(), 1000);

document.getElementById("hostname").innerHTML = window.location.hostname;
document.getElementById("hostname-span").innerHTML = window.location.hostname;
document.getElementById("info").innerHTML = window.location.hostname;
