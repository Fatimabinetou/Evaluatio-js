function calculermoyenne(note){
let Somme =0;
let moyenne =0;
    for (let i =0; i< note.length; i++){
     Somme += note[i];
    }
      moyenne= Somme / note.length;
return moyenne;
}
function trouvermax(notes){
    let max= notes[0];
    for(let i= 0; i< notes.length; i++ ){
        if(notes[i]> max){
            max= notes[i];
        }
    }
    return max;
}

let note = [12,15, 8, 19, 10, 16];
let moy= calculermoyenne(note);
console.log("La moyenne est: ", moy);
let notes = [12,15, 8, 19, 10, 16];
let max= trouvermax(notes);
console.log("La plus grande note est: ", max);

