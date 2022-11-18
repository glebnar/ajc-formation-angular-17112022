var maVar: number;
maVar = 2;

var maVariable = 1;
// maVariable = 'maChaine';

class Wookie2 {
    prenom = '';
}

function deplacerWookie2(toto: Wookie2): void {
    // je déplace wookie
    toto.prenom = '222';
}

deplacerWookie2(new Wookie2());
// deplacerWookie2(1);