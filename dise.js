function lesjoueur(){
    let nbr;
    do{ 
         nbr= prompt("Combien de joueur voulez vous ajouter? ");
        if(isNaN(nbr) || nbr< 2 ){ 
        alert("le nombre de joueur doit etre supétieur ou égale à 2");
        }
    }
    while(isNaN(nbr) || nbr< 2);
    return nbr;
}
let joueurs= lesjoueur();
console.log("le nombre de joueur est:", joueurs);

  function generernombre() {
    return Math.floor(Math.random() * 6) + 1;
  }
    let scores= new Array(joueurs);
  
  function Tours(_joueur){
    let resultat;
    for(let tour= 0; tour<10; tour++){
        for(let joueur= 0; joueur<joueurs; joueur++){
             resultat= generernombre();
             scores[joueur]+= resultat;
        }
    }
    return scores;
  } 

  







