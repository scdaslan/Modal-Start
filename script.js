"use strict";

const modal = document.querySelector(`.modal`); // divi aldık
const overlay = document.querySelector(`.overlay`); //divi aldık
const btnCloseModel = document.querySelector(`.close-modal`); //butonu aldık
const btnShowModel = document.querySelectorAll(`.show-modal`); //butonu aldık
//normalde sadece ilkini alır ama sonuna All eklersek tamamını alır bütün buttonları gösterir
// console.log(btnShowModel);

const openModal = function () {
  // kodu kısaltmak için bunu yaptık ,normalde modal ve overlayi teker teker herbirinin içine yazabilirdik
  console.log(`Tıklandı`);
  modal.classList.remove(`hidden`);
  overlay.classList.remove(`hidden`);
};

const closeModel = function () {
  // kodu kısaltmak için bunu yaptık ,normalde modal ve overlayi teker teker herbirinin içine yazabilirdik
  modal.classList.add(`hidden`);
  overlay.classList.add(`hidden`);
};

for (let i = 0; i < btnShowModel.length; i++) {
  btnShowModel[i].addEventListener(`click`, openModal);
}

btnCloseModel.addEventListener(`click`, closeModel); // click e bakar sonra ikinciyi uygular
overlay.addEventListener(`click`, closeModel);

document.addEventListener(`keydown`, function (e) {
  // event(olay) parametresinin kısaltması olarak e yazdık, Hangi tuşa bastığını yazdırmak için function a parametre verip onu yazdır
  //   console.log(e);
  //   console.log(e.key);
  if (e.key === `Escape`) {
    // console.log(`Escape basıldı`);
    if (!modal.classList.contains(`hidden`)) {
      closeModel();
    }
  }
});
