const browser = document.createElement("p");
const wh = document.createElement("p");
const awh = document.createElement("p");
const date = document.createElement("p");
const platform = document.createElement("p");

browser.innerHTML = `Selain: ${navigator.appName}, ${navigator.appVersion}`;
wh.innerHTML = `Ruudun leveys ja korkeus: ${screen.width}, ${screen.height}`;
awh.innerHTML = `Käytettävissä oleva leveys ja korkeus: ${screen.availWidth}, ${screen.availHeight}`;
date.innerHTML = `Aika: ${new Date().toLocaleTimeString('fi', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}`;
platform.innerHTML = `Käyttöjärjestelmä: ${navigator.platform}`;
document.getElementById("target").appendChild(browser);
document.getElementById("target").appendChild(wh);
document.getElementById("target").appendChild(awh);
document.getElementById("target").appendChild(date);
document.getElementById("target").appendChild(platform);

