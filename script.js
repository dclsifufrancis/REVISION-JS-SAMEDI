
//     // <!-- **********Exercice 1 tableau simple **********-->
// // création Array simple 
// const listeApprenants =["Quentin", "FabienB", "Maxime", "FabienO", "Francis", "Christophe", "Sylvie", "Corinne", "Edains", "Frédérique", "Jean-Philippe", "Laurent", "Thibaud", "Maximilien"];


// var compteur = 0;


// const domListe = document.getElementById("affichage liste");
// const domCompteur = document.getElementById("nombre-apprenant");


// // pour chaque

// listeApprenants.forEach( function (apprenant) {
        
//     // création de balise "li"ouvrante et fermante
//     const unApprenant = document.createElement("li");

//        // création de texte prénom
//     const prenomApprenant = document.createTextNode(apprenant);

//     unApprenant.appendChild(prenomApprenant);
//     domListe.appendChild(unApprenant);
//     compteur++
// } );

// domCompteur.innerHTML = "Nombre d'apprenants : " + compteur;


    // <!-- ************Exercice 2 tableau 2 dimension************ -->

// var unTableau = [[0,1,0,1,0,1,1,1,0,1,0,1][0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0][0,1,0,10,1,0,10,1,01,0,10,1,0,1,0,1,0,1,0,1]];

// var compteurLigne=0;

//     // Pour chaque ligne  du tableau
// unTableau.forEach(function(uneLigne){
//     var compteurElement = 0;
//     var compteurDeUn = 0;
//     compteurLigne++;

//     // Pour chaque element de la ligne
//     uneLigne.forEach(function(unChiffre){
//         compteurElement++;
//         if (unChiffre === 1) {
//             compteurDeUn++;
//         }
//     });
//     const txtCompteur = document.createElement("p");
//     const recap = document.createTextNode("Dans la ligne " + compteurLigne + " il y a " + compteurElement + " elements et " + compteurDeUn + " uns.");
//     txtCompteur.appendChild(recap);
//     domAffichage.appendChild(txtCompteur);
// });


    // <!-- **********Exercice 3 Eventlistener********** -->

const domItem1= document.getElementById("item1");
const domItem2= document.getElementById("item2");
const domItem3= document.getElementById("item3");
const domElement= document.getElementById("element");

domElement.addEventListener("mouseover", function (event) {
    console.log(event.target.id);
    domElement.style.backgroundColor = "red";
    var domElementCible = document.getElementById(event.target.id);
    domElementCible.style.backgroundColor = "magenta";

});