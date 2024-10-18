function convertToBinary() {
    // Récupérer l'entrée utilisateur
    const decimalInput = document.getElementById('decimalInput').value;

    // Vérifier si l'entrée contient uniquement des chiffres
    if (!/^\d+$/.test(decimalInput)) {  // Cette regex vérifie que l'entrée est composée uniquement de chiffres
        document.getElementById('binaryResult').textContent = ""; // Laisser vide si l'entrée est invalide
        return;
    }

    // Convertir l'entrée en nombre entier
    const decimalNumber = parseInt(decimalInput, 10);

  

    // Appeler la fonction pour convertir le nombre décimal en binaire
    const binaryResult = decimalToBinary(decimalNumber);

    // Afficher le résultat dans l'élément <p> avec l'id "binaryResult"
    document.getElementById('binaryResult').textContent = `Le binaire de ${decimalNumber} est : ${binaryResult}`;
}

//  convertir un nombre décimal en binaire de manière manuelle
function decimalToBinary(decimalNumber) {
    if (decimalNumber === 0) return "0"; 

    let binaryArray = []; // Tableau pour stocker les bits binaires
    let number = decimalNumber; // Créer une copie du nombre décimal

    // Tant que le nombre est supérieur à 0
    while (number > 0) {
        // Ajouter le reste de la division par 2 (0 ou 1) au tableau
        binaryArray.push(number % 2);

        // Diviser le nombre par 2 pour obtenir le quotient
        number = Math.floor(number / 2);
    }

    // Les restes sont dans l'ordre inverse, donc il faut inverser le tableau
    return binaryArray.reverse().join('');
}

document.getElementById('decimalInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') { // Si l'utilisateur appuie sur la touche "Entrée"
        convertToBinary(); // Appeler la fonction de conversion
    }
});

// 2Eme solution
// //  convertir un nombre décimal en binaire
// function convertToBinary() {
//     // Récupérer l'entrée utilisateur
//     const decimalInput = document.getElementById('decimalInput').value;
    
//     // Convertir l'entrée en nombre entier
//     const decimalNumber = parseInt(decimalInput, 10);
    
//     // Vérifier si l'entrée est un nombre valide
//     if (isNaN(decimalNumber)) {
//         document.getElementById('binaryResult').textContent = "Veuillez entrer un nombre valide.";
//         return;
//     }

//     // Convertir le nombre décimal en binaire
//     const binaryResult = decimalNumber.toString(2);

//     // Afficher le résultat dans l'élément <p> avec l'id "binaryResult"
//     document.getElementById('binaryResult').textContent = `Le binaire de ${decimalNumber} est : ${binaryResult}`;
// }
