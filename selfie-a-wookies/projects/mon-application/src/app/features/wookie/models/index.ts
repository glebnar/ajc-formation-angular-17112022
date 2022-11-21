/**
 * Blball rooa arrr
 */
export interface Wookie {
  prenom: string;
  nbPoils: number;
  taille: number;
}

export type WookieList = Wookie[];

export type Hesitation = string | null | undefined;

let maVar = null;
maVar = undefined;

function leDoute(obj: Hesitation) {
  // let minuscule = obj?.toLowerCase();

  if (typeof(obj) !== 'undefined' && obj !== null) {
    let maChineACoupSur = obj.toLocaleLowerCase();
  }
}
leDoute('');
// leDoute(1);
leDoute(null);
// leDoute({ titre: ''});
// leDoute(undefined);
// leDoute([]);
