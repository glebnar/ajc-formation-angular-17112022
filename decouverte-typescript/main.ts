import { Planete, PlaneteI } from './planete';

const maPlanete = new Planete();

const planete2: Planete = {
    id: 1,
    libelle: 'Coruscant'
};


afficherPlanete(planete2);

// function afficherPlanete(entree: Planete) {
//     console.info(entree.libelle);
// }

function afficherPlanete(entree: PlaneteI) {
    console.info(entree.libelle);
}

afficherPlanete({ id: 2, libelle: 'Tatooine' });

const maPlanete3: PlaneteI = {
    id: 3,
    libelle: 'Mustafar'
}

// const test = {
//     id: 1
// }

// test.id = 2;


let maVariableSansType: any = 1;
maVariableSansType = '';

