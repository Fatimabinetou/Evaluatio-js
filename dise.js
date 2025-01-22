let nbr=prompt("Combien de joueurs participeront au jeu");
  if(nbr<2 || isNaN(nbr)){
    do{
       alert("Erreur");
       nbr=prompt("Combien de joueurs participeront au jeu");
       
    }while(nbr<2 || isNaN(nbr));
    }else{
        function Scores(nombre){
      let g=0,p=0,k=0;
     for(let i=1;i<=nbr;i++){
    let somme=0;
     for(let j=0;j<10;j++){ 
       somme+=somme+Math.floor(Math.random()*(6-1)+1);
        }
        if(somme>g){
         p=i;
        g=somme;
         }    
    console.log("Joueur "+i+" : "+somme+" points");
                
            }  
     console.log("Le joueur "+p+" a gagne avec "+g+" points");
        }
        Scores(nbr);
    function message(){
        var avis =prompt("Voulez-vous jouer un nouvelle partie");
         if(avis==1){
            do{
                let nbr=prompt("Combien de joueurs participeront au jeu");
                if(nbr<2){
                  do{
              alert("Erreur");
      nbr=prompt("Combien de joueurs participeront au jeu");       
         }while(nbr<2)
                  }else{
            function Scores(nombre){
        let g=0,p=0,k=0;
         for(let i=1;i<=nbr;i++){
          let somme=0;
                 for(let j=0;j<10;j++){ 
                somme+=somme+Math.floor(Math.random()*(5-1)+1);
               }
            if(somme>g){
           p=i;
           g=somme;
         }
         if(g==somme)
         k++;                     
         console.log("Joueur "+i+" : "+somme+" points");
                 }
           if(k<=1)
      console.log("Le joueur "+p+" a gagne avec "+g+" points");
                           
      }
              
       Scores(nbr);
              
                      
                  function message(){
                      var continuer =confirm("Voulez-vous jouer un nouvelle partie");
                     if(continuer==1){
                          return -1;
                     }else{
                         alert("Bye bye");
           }
                 }
                 message();
            } 
        }
        while(avis!=1)
       }else{
           alert("Bye bye");
       }
   }
   message();
}