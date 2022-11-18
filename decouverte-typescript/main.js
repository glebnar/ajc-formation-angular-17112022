"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const planete_1 = require("./planete");
const maPlanete = new planete_1.Planete();
const planete2 = {
    id: 1,
    libelle: 'Coruscant'
};
afficherPlanete(planete2);
// function afficherPlanete(entree: Planete) {
//     console.info(entree.libelle);
// }
function afficherPlanete(entree) {
    console.info(entree.libelle);
}
afficherPlanete({ id: 2, libelle: 'Tatooine' });
// const test = {
//     id: 1
// }
// test.id = 2;
