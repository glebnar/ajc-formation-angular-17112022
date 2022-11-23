function afficher(item: string): void {
    console.info(item);
}
afficher('coucou'); /// on a "coucou"

function maFonction() {
    //----------------
    const afficherLambda = (item: string) => {
        console.info(item);
    }
    afficherLambda('coucou'); // on a "coucou"
}
maFonction();


//----------------------------------
function calculerTTC(prixHT: number): number {
    return prixHT * 1.2;
}
const resultatTTC = calculerTTC(10); 
console.info(resultatTTC); //  on a 12

const calculerTTCLambda = (prixHT: number) => {
    return prixHT * 1.2;
}
const resultatTTCLambda = calculerTTCLambda(10); 
console.info(resultatTTCLambda); //  on a 12

//-----------------------------------------
function calculerTTCEtAfficher(prixHT: number): void {
    const result = prixHT * 1.2;
    console.info(result);
}
calculerTTCEtAfficher(10); // on a 12;

//-----------------------------------------------------
function calculerTTCEtAfficherGeneric(prixHT: number, afficher: Function): void {
    const result = prixHT * 1.2;
    afficher(result);
}
calculerTTCEtAfficherGeneric(10, console.info); // on a 12;

//--------------------------------------------------------------
type afficherUneInfo = (item: any) => void;

function subscribe(next: afficherUneInfo): void {
    const result = 50 * 1.2;
    next(result);
    next(result);
}
subscribe(console.info); // on a 12;

//--------------------------------------------------------------
subscribe(item => console.info(item)); // on a 12;
