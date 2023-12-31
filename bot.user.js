// ==UserScript==
// @name         AutoPlay
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  GangstersPL Bot
// @author       Nieznany
// @include      /g2.gangsters.pl/
// @icon         https://g2.gangsters.pl/images/g2/module/weapon/icon.png
// @require      https://cdn.jsdelivr.net/npm/tesseract.js
// @grant        none
// ==/UserScript==

(function () {
    "use strict";
 
    const emailVal = "";
    const passVal = "";
    const autoLogin = false;
    const considerTournaments = true;
    const considerRing = false;
    const shouldClickLvl = false;
 
    const casinoAmount = "";
    const shouldPlayCasino = false;
    const maxCasinoScore = 30;
    const minCasinoScore = -20;
 
    const baseMinutes = 30;
    const upgradeShootingRange = false;
    const upgradeVip = false;
    const desiredShootingRangeLvl = 1;
    const desiredVIPLvls = {
       SALvl: 1,
       STLvl: 1,
       SVlvl: 1,
       haremLvl: 1,
       nightClubLvl: 1,
       whoreslvl: 1,
       investmentsLvl: 1,
       weaponLvl: 1,
       armorLvl: 1,
    };
 
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
 
    const autoDeleteMessages = hours === 0 && (minutes === 0 || minutes === 1);
    // LOGIN
    const ifSearchIncludes = (search) => window.location.search.includes(search);
    const ifPathnameIncludes = (pathname) => window.location.pathname.includes(pathname);
 
    const getRandomIntInclusive = (min, max) =>
       Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1) + Math.ceil(min));
 
    if (ifPathnameIncludes("login.html")) {
       if (autoLogin) {
          const loginBtn = document.querySelector('[value="Zaloguj się"]');
          const emailValue = document.querySelector('[name="email"]');
          const passValue = document.querySelector('[name="pass"]');
          emailValue.value = emailVal;
          passValue.value = passVal;
          loginBtn.click();
       }
    } else {
       // CAPTCHA START
       // CAPTCHA START
       // CAPTCHA START
       // CAPTCHA START
       function deleteAllCookies() {
          const cookies = document.cookie.split(";");
 
          for (let i = 0; i < cookies.length; i++) {
             const cookie = cookies[i];
             const eqPos = cookie.indexOf("=");
             const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
             document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
          }
       }
 
       const selfClick = async () => {
          const checkboxes = Array.from(document.querySelector("#captcha")?.querySelectorAll('[type="checkbox"]'));
          const button = document.querySelector("#captcha")?.querySelector("button");
 
          const backgroundImage = document.querySelector(".captchaTextBox").style?.backgroundImage;
          // auto captcha switches
 
          const getTextFromImage = async () => {
             const { createWorker } = Tesseract;
             const worker = await createWorker();
             await worker.load();
             await worker.loadLanguage("pol");
             await worker.initialize("pol");
             const result = await worker.recognize(`https://g2.gangsters.pl/${backgroundImage.slice(5, -2)}`);
             await worker.terminate();
             window.setTimeout(() => {
                // deleteAllCookies();
                // window.setTimeout(() => {
                //    location.reload();
                // }, 2000);
                let audio = new Audio("/sounds/default_notify.mp3");
                window.setInterval(() => audio.play(), 2250);
             }, 10000);
             return result.data.text;
          };
          const ocrResult = await getTextFromImage();
 
          const ocrResultsEasier = [...ocrResult.toLowerCase().replaceAll(" ", "").replaceAll("\n", "")].join("");
 
          if (ocrResultsEasier.includes("drugiorazpiątykwadrat") || ocrResultsEasier.includes("drugiorazpiatykwadrat")) {
             checkboxes[1].checked = true;
             checkboxes[4].checked = true;
             button.click();
             return;
          } else if (
             ocrResultsEasier.includes("dwaśrodkowekwadraty") ||
             ocrResultsEasier.includes("dwasrodkowekwadraty")
          ) {
             checkboxes[3].checked = true;
             checkboxes[4].checked = true;
             button.click();
             return;
          } else if (ocrResultsEasier.includes("dwakwadratyodlewej")) {
             checkboxes[0].checked = true;
             checkboxes[1].checked = true;
             button.click();
             return;
          } else if (ocrResultsEasier.includes("dwakwadratyodprawej")) {
             checkboxes[6].checked = true;
             checkboxes[7].checked = true;
             button.click();
             return;
          } else if (
             ocrResultsEasier.includes("ostatnikwadratorazdwaśrodkowe") ||
             ocrResultsEasier.includes("ostatnikwadratorazdwasrodkowe")
          ) {
             checkboxes[3].checked = true;
             checkboxes[4].checked = true;
             checkboxes[7].checked = true;
             button.click();
             return;
          } else if (
             ocrResultsEasier.includes("pierwszykwadratorazdwaśrodkowe") ||
             ocrResultsEasier.includes("pierwszykwadratorazdwasrodkowe")
          ) {
             checkboxes[0].checked = true;
             checkboxes[3].checked = true;
             checkboxes[4].checked = true;
             button.click();
             return;
          } else if (ocrResultsEasier.includes("trzeciiostatnikwadrat")) {
             checkboxes[2].checked = true;
             checkboxes[7].checked = true;
             button.click();
             return;
          } else if (ocrResultsEasier.includes("drugiiprzedostatnikwadrat")) {
             checkboxes[1].checked = true;
             checkboxes[6].checked = true;
             button.click();
             return;
          } else if (ocrResultsEasier.includes("drugiorazpiatykwadrat")) {
             checkboxes[1].checked = true;
             checkboxes[4].checked = true;
             button.click();
             return;
          } else if (ocrResultsEasier.includes("czterykwadratyodlewej")) {
             checkboxes[0].checked = true;
             checkboxes[1].checked = true;
             checkboxes[2].checked = true;
             checkboxes[3].checked = true;
             button.click();
             return;
          } else if (ocrResultsEasier.includes("czterykwadratyodprawej")) {
             checkboxes[4].checked = true;
             checkboxes[5].checked = true;
             checkboxes[6].checked = true;
             checkboxes[7].checked = true;
             button.click();
             return;
          } else if (ocrResultsEasier.includes("pierwszyorazczwartykwadrat")) {
             checkboxes[0].checked = true;
             checkboxes[3].checked = true;
             button.click();
             return;
          } else if (ocrResultsEasier.includes("wszystkiekwadratypozaostatnim")) {
             checkboxes[0].checked = true;
             checkboxes[1].checked = true;
             checkboxes[2].checked = true;
             checkboxes[3].checked = true;
             checkboxes[4].checked = true;
             checkboxes[5].checked = true;
             checkboxes[6].checked = true;
             button.click();
             return;
          } else if (ocrResultsEasier.includes("wszystkiekwadratypozapierwszym")) {
             checkboxes[1].checked = true;
             checkboxes[2].checked = true;
             checkboxes[3].checked = true;
             checkboxes[4].checked = true;
             checkboxes[5].checked = true;
             checkboxes[6].checked = true;
             checkboxes[7].checked = true;
             button.click();
             return;
          } else if (
             ocrResultsEasier.includes("wszystkiekwadratypozaśrodkowymi") ||
             ocrResultsEasier.includes("wszystkiekwadratypozasrodkowymi")
          ) {
             checkboxes[0].checked = true;
             checkboxes[1].checked = true;
             checkboxes[2].checked = true;
             checkboxes[5].checked = true;
             checkboxes[6].checked = true;
             checkboxes[7].checked = true;
             button.click();
             return;
          } else if (ocrResultsEasier.includes("wszystkiekwadraty")) {
             checkboxes[0].checked = true;
             checkboxes[1].checked = true;
             checkboxes[2].checked = true;
             checkboxes[3].checked = true;
             checkboxes[4].checked = true;
             checkboxes[5].checked = true;
             checkboxes[6].checked = true;
             checkboxes[7].checked = true;
             button.click();
             return;
          } else if (ocrResultsEasier.includes("trzykwadratyodlewej")) {
             checkboxes[0].checked = true;
             checkboxes[1].checked = true;
             checkboxes[2].checked = true;
             button.click();
             return;
          } else if (ocrResultsEasier.includes("trzykwadratyodprawej")) {
             checkboxes[5].checked = true;
             checkboxes[6].checked = true;
             checkboxes[7].checked = true;
             button.click();
             return;
          } else if (
             ocrResultsEasier.includes("codrugikwadrat(zaczynającodpierwszegozprawej)") ||
             ocrResultsEasier.includes("codrugikwadrat(zaczynajacodpierwszegozprawej)") ||
             ocrResultsEasier.includes("codrugikwadrat(zaczynajacodplerwszegozprawej)")
          ) {
             checkboxes[1].checked = true;
             checkboxes[3].checked = true;
             checkboxes[5].checked = true;
             checkboxes[7].checked = true;
             button.click();
             return;
          } else if (
             ocrResultsEasier.includes("codrugikwadrat(zaczynającodpierwszegozlewej)") ||
             ocrResultsEasier.includes("codrugikwadrat(zaczynajacodpierwszegozlewej)")
          ) {
             checkboxes[0].checked = true;
             checkboxes[2].checked = true;
             checkboxes[4].checked = true;
             checkboxes[6].checked = true;
             button.click();
             return;
          } else if (
             ocrResultsEasier.includes("pierwszyiostatnikwadrat") ||
             ocrResultsEasier.includes("pierwszy|ostatnikwadrat")
          ) {
             checkboxes[0].checked = true;
             checkboxes[7].checked = true;
             button.click();
             return;
          } else if (ocrResultsEasier.includes("template")) {
             checkboxes[0].checked = true;
             checkboxes[1].checked = true;
             checkboxes[2].checked = true;
             button.click();
             return;
          } else {
             console.log(ocrResult, ocrResultsEasier, "nie opracowane");
             let audio = new Audio("/sounds/default_notify.mp3");
             window.setInterval(() => audio.play(), 2250);
             return;
          }
       };
 
       // CAPTCHA END
       // CAPTCHA END
       // CAPTCHA END
       // CAPTCHA END
 
       const startForm = (queryString) => {
          const forms = document.querySelector("form");
          const button = forms?.querySelector(queryString);
          if (button) {
             button.click();
             return true;
          } else return false;
       };
       const clickBtn = (queryString) => document.querySelector(queryString)?.click();
 
       const addMinutes = (minutes = baseMinutes, seconds = 0) =>
          new Date(new Date().getTime() + minutes * 60000 + seconds * 1000).getTime();
 
       const getCurrTime = () => new Date().getTime();
 
       const useAutoVIP = () => {
          const clickVIP = (DOMElement) => {
             DOMElement?.click();
          };
 
          if (ifSearchIncludes("?module=vip")) {
             const getTableRow = (number) =>
                document.querySelector(`[src="images/page/vip/icons/${number}.jpg"]`).parentElement.parentElement
                   .parentElement;
 
             const getBtnNumber = (number) => getTableRow(number).querySelector('[value="Buduj!"]');
 
             const getLvl = (number) =>
                +getTableRow(number).querySelector(".box").querySelector("div").querySelector("b").innerHTML;
 
             const currentVIPLvls = {
                SALvl: getLvl(2),
                STLvl: getLvl(3),
                SVlvl: getLvl(4),
                haremLvl: getLvl(5),
                nightClubLvl: getLvl(6),
                whoreslvl: getLvl(7),
                investmentsLvl: getLvl(8),
                weaponLvl: getLvl(9),
                armorLvl: getLvl(10),
             };
 
             localStorage.setItem("currentVIPLvls", JSON.stringify(currentVIPLvls));
             localStorage.setItem("VIPTime", `${addMinutes()}`);
 
             const btnSA = getBtnNumber(2);
             const btnST = getBtnNumber(3);
             const btnSV = getBtnNumber(4);
             const btnHarem = getBtnNumber(5);
             const btnNightClub = getBtnNumber(6);
             const btnWhores = getBtnNumber(7);
             const btnInvestments = getBtnNumber(8);
             const btnWeapon = getBtnNumber(9);
             const btnArmor = getBtnNumber(10);
 
             currentVIPLvls.SALvl < desiredVIPLvls.SALvl && clickVIP(btnSA);
             currentVIPLvls.STLvl < desiredVIPLvls.STLvl && clickVIP(btnST);
             currentVIPLvls.SVlvl < desiredVIPLvls.SVlvl && clickVIP(btnSV);
             currentVIPLvls.haremLvl < desiredVIPLvls.haremLvl && clickVIP(btnHarem);
             currentVIPLvls.nightClubLvl < desiredVIPLvls.nightClubLvl && clickVIP(btnNightClub);
             currentVIPLvls.whoreslvl < desiredVIPLvls.whoreslvl && clickVIP(btnWhores);
             currentVIPLvls.investmentsLvl < desiredVIPLvls.investmentsLvl && clickVIP(btnInvestments);
             currentVIPLvls.weaponLvl < desiredVIPLvls.weaponLvl && clickVIP(btnWeapon);
             currentVIPLvls.armorLvl < desiredVIPLvls.armorLvl && clickVIP(btnArmor);
 
             window.setTimeout(() => clickBtn('[href="/?module=arena"]'), 5000);
          }
       };
 
       const useAutoPower = () => {
          const clickShootingRange = (DOMElement) => {
             DOMElement?.click();
             localStorage.setItem("ShootingRangeTime", `${addMinutes()}`);
          };
          const changeScreen = () => {
             const [_, minutes, seconds] = document.getElementById("trainingTimer").innerHTML.split(":");
             localStorage.setItem("ShootingRangeTime", `${addMinutes(+minutes, +seconds)}`);
             window.setTimeout(() => clickBtn('[href="/?module=arena"]'), 2500);
          };
 
          if (ifSearchIncludes("?module=weapon&action=showShootingRange")) {
             const btnUpgrade = document.querySelector('[value="Trenuj"]');
             const currentShootingRangeLvl = +document.querySelector(".bigNumber").innerHTML;
             localStorage.setItem("currentShootingRangeLvl", `${currentShootingRangeLvl}`);
             if (currentShootingRangeLvl > desiredShootingRangeLvl && btnUpgrade) {
                changeScreen();
             } else if (currentShootingRangeLvl < desiredShootingRangeLvl && btnUpgrade) {
                clickShootingRange(btnUpgrade);
                changeScreen();
             } else {
                changeScreen();
             }
          } else {
             window.setTimeout(() => clickBtn('[href="/?module=arena"]'), 5000);
          }
       };
 
       const checkUpgrades = () => {
          let currTime = getCurrTime();
          if (upgradeShootingRange) {
             const shootingRangeTime = parseInt(localStorage.getItem("ShootingRangeTime"));
             const currentShootingRangeLvl = parseInt(localStorage.getItem("currentShootingRangeLvl"));
 
             if (
                (shootingRangeTime <= currTime || !shootingRangeTime) &&
                (currentShootingRangeLvl < desiredShootingRangeLvl || !currentShootingRangeLvl)
             ) {
                window.setTimeout(() => (window.location.search = "?module=weapon&action=showShootingRange"), 1500);
             }
          }
 
          if (upgradeVip) {
             const VIPTime = parseInt(localStorage.getItem("VIPTime"));
             const currentVIPLvls = JSON.parse(localStorage.getItem("currentVIPLvls"));
 
             if (
                (VIPTime <= currTime || !VIPTime) &&
                (!currentVIPLvls ||
                   Object.keys(currentVIPLvls)?.filter((currKey) => currentVIPLvls[currKey] < desiredVIPLvls[currKey])
                      .length)
             ) {
                window.setTimeout(() => document.querySelector('[href="/?module=vip"]')?.click(), 1500);
             }
          }
       };
 
       const checkTournament = () => {
          if (considerTournaments) {
             const menuBox = document.querySelector('[src="images/g2/module/tournament/icon.png"]');
             if (menuBox) {
                menuBox.click();
             }
          }
          const ppBox = document.querySelector('[src="images/g2/module/pvp/icon_red.png"]');
          if (ppBox) {
             ppBox.click();
          } else {
             document.querySelector(".noty_bar")?.click();
          }
       };
 
       if (ifSearchIncludes("showCaptcha") || document.querySelector(".captchaTextBox")) {
          window.setTimeout(() => selfClick(), 400);
       } else {
          if (ifSearchIncludes("showOverdose")) {
             window.setTimeout(() => {
                location.reload();
             }, 60000);
 
             return;
          }
 
          const useTournament = () => {
             if (considerTournaments) {
                startForm('[value="Dołącz!"]');
             }
             const attacks = [
                document.querySelector("#attackType1"),
                document.querySelector("#attackType2"),
                document.querySelector("#attackType3"),
                document.querySelector("#attackType4"),
                document.querySelector("#attackType5"),
             ];
             attacks[getRandomIntInclusive(0, 4)]?.click();
 
             window.setInterval(() => tryAttack(false), 100);
             window.setTimeout(() => clickBtn('[href="/?module=gang/fights"]'), 4000);
          };
 
          const tryAttack = (isLvl) => {
             const attackStripeBg = document.getElementById("attack-stripe-bg");
             if (attackStripeBg) {
                const attackStripeBar = attackStripeBg.childNodes[0];
                if (isLvl) {
                   attackStripeBar.style.top = "0px";
                   const bgHeight = 250;
                   const barPosition = parseInt(attackStripeBar.style.top);
                   const positionPercentage = barPosition / bgHeight;
                   if (positionPercentage < 0.01) {
                      attackStripeBar.click();
                   }
                } else {
                   attackStripeBar.style.top = `${getRandomIntInclusive(0, 10)}px`;
                   const bgHeight = 250;
                   const barPosition = parseInt(attackStripeBar.style.top);
 
                   const positionPercentage = barPosition / bgHeight;
 
                   if (positionPercentage < 0.06) {
                      attackStripeBar.click();
                   }
                }
             }
          };
 
          const usePVP = () => {
             window.setTimeout(() => {
                document.querySelector('[value="Zakończ pojedynek"]')?.click();
                window.setInterval(() => tryAttack(false), 100);
                document.querySelector('[alt="Akceptuj"]')?.click();
                window.setTimeout(() => clickBtn('[href="/?module=arena"]'), 1500);
             }, 500);
          };
 
          const useRing = () => {
             if (considerRing) {
                window.setInterval(() => {
                   startForm('[value="Walcz"]');
                }, 100);
 
                window.setTimeout(() => {
                   window.setInterval(() => tryAttack(false), 40);
                }, 500);
             } else {
                considerTournaments
                   ? clickBtn('[href="/?module=tournament"]')
                   : clickBtn('[href="/?module=gang/fights"]');
             }
          };
 
          const useArena = () => {
             startForm('[src="/images/page/arena/city_1.jpg"]');
             startForm('[value="Zakończ pojedynek"]');
 
             window.setInterval(() => tryAttack(false), 100);
             window.setInterval(() => {
                const leftTime = document.querySelector("span#leftTime");
                startForm('[value="Zakończ pojedynek"]');
                if (!leftTime) {
                   document.querySelector('[value="Wyjdź z miasta"]');
                   window.setTimeout(() => {
                      if (considerRing) {
                         clickBtn('[href="/?module=arena"]');
                      } else if (considerTournaments) {
                         clickBtn('[href="/?module=tournament"]');
                      } else {
                         clickBtn('[href="/?module=gang/fights"]');
                      }
                   }, 5000);
                }
             }, 1000);
          };
 
          const useGangWars = () => {
             startForm('[value="Szukaj gangu"]');
             window.setInterval(() => {
                if (document.querySelector("form")?.querySelector('[value="Anuluj"]')) {
                   clickBtn('[href="/?module=arena"]');
                }
             }, 2600);
 
             const oponents = Array.from(document.querySelector("#oponentGangsters")?.querySelectorAll("div.user"));
             if (oponents) {
                oponents?.forEach((singleOponent) => {
                   singleOponent?.click();
                });
                window.setInterval(() => tryAttack(false), 100);
             }
 
             window.setTimeout(() => clickBtn('[href="/?module=arena"]'), 5000);
          };
 
          !ifSearchIncludes("?module=tournament") &&
             !ifSearchIncludes("?module=pvp") &&
             !ifSearchIncludes("casino") &&
             window.setInterval(() => checkTournament(), 1000);
 
          if (
             shouldPlayCasino &&
             window.location.href !== "https://g2.gangsters.pl/?module=casino&action=showRoulette#game"
          ) {
             window.location.href = "https://g2.gangsters.pl/?module=casino&action=showRoulette#game";
          }
 
          !ifSearchIncludes("?module=vip") &&
             !ifSearchIncludes("?module=weapon&action=showShootingRange") &&
             checkUpgrades();
 
          if (ifSearchIncludes("?module=ring")) {
             window.setTimeout(() => useRing(), 200);
          } else if (ifSearchIncludes("?module=tournament") || ifSearchIncludes("?module=stournament")) {
             window.setTimeout(() => useTournament(), 100);
          } else if (ifSearchIncludes("?module=arena")) {
             window.setTimeout(() => useArena(), 100);
          } else if (ifSearchIncludes("?module=pvp")) {
             window.setTimeout(() => usePVP(), 100);
          } else if (ifSearchIncludes("?module=gang")) {
             window.setTimeout(() => useGangWars(), 100);
          } else if (ifSearchIncludes("?id=23")) {
             if (autoDeleteMessages) {
                const deleteBtn = Array.from(document.querySelectorAll("b"))?.find((el) =>
                   el.textContent.includes("Usuń")
                )?.parentElement;
                deleteBtn?.click();
             }
             window.setTimeout(() => clickBtn('[href="/?module=arena"]'), 2500);
          } else if (ifSearchIncludes("profil.html")) {
             clickBtn('[href="/?module=arena"]');
          } else if (ifSearchIncludes("module=sa")) {
             if (shouldClickLvl) {
                const attBtn = document.querySelector('[value="Napadnij"]');
                attBtn?.click();
 
                window.setInterval(() => tryAttack(true), 1000);
             }
 
             window.setTimeout(() => clickBtn('[href="/?module=arena"]'), 4500);
          } else if (ifSearchIncludes("?module=vip")) {
             window.setTimeout(() => useAutoVIP(), 100);
          } else if (ifSearchIncludes("?module=weapon&action=showShootingRange")) {
             window.setTimeout(() => useAutoPower(), 100);
          } else if (ifSearchIncludes("module=casino")) {
             const tails = document.getElementById("tails");
             const playRouletteBtn = document.querySelector('[value="Graj!"]');
 
             const container = document.getElementById("rankInfoContainer");
             const dailyRankBox = container.getElementsByClassName("box")[0];
             const pointsBox = dailyRankBox.getElementsByTagName("div")[2];
             const score = pointsBox.getElementsByTagName("b")[0];
 
             const runCasino = (max, min) => {
                const scoreNumber = Number(score.innerHTML.slice(0, -4));
                if (scoreNumber > min && scoreNumber < max) {
                   if (ifSearchIncludes("showCoin")) {
                      tails.click();
                      document.querySelector(".coinContainer").parentElement.querySelector("input").value = casinoAmount;
                   } else {
                      document.querySelector('[name="_1"]').value = casinoAmount;
                      playRouletteBtn.click();
                   }
                } else {
                   window.setTimeout(() => clickBtn('[href="/?module=arena"]'), 2800);
                }
             };
 
             shouldPlayCasino
                ? window.setInterval(() => runCasino(maxCasinoScore, minCasinoScore), 50)
                : clickBtn('[href="/?module=arena"]');
          } else if (ifSearchIncludes("id=59")) {
             window.setInterval(() => tryAttack(true), 100);
             window.setTimeout(() => clickBtn('[href="/?module=arena"]'), 2500);
          } else {
             window.setTimeout(() => clickBtn('[href="/?module=arena"]'), 5000);
          }
       }
    }
 })();
 