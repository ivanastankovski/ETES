var today = new Date();
var year = today.getFullYear();
var hour = today.getHours();
var min = today.getMinutes();
var sec = today.getSeconds();
var time = hour + ":" + min + ":" + sec;

document.getElementById("dateEndTime").textContent = time + " " + year + " ЕТЕС КОМ ДС";



