
const display = document.getElementById('display');

//  stocker l'expression en cours
let currentExpression = '';
let lastOperator = '';
let result = 0;

//  ajouter des valeurs au display
function appendToDisplay(value) {
    // Si c'est un opérateur, on stocke l'opération et prépare pour le prochain nombre
    if (isOperator(value)) {
        if (currentExpression) {
            calculateResult(value);
        } else {
            lastOperator = value;
            result = parseFloat(display.value) || 0;
        }
        currentExpression = '';
    } else {
        // Si c'est un chiffre, on l'ajoute à l'expression courante
        currentExpression += value;
        display.value = currentExpression;
    }
}

// déterminer si le bouton cliqué est un opérateur
function isOperator(value) {
    return value === '+' || value === '-' || value === '*' || value === '/';
}

//  effacer l'affichage
function clearDisplay() {
    display.value = '';
    currentExpression = '';
    lastOperator = '';
    result = 0;
}

// calculer le résultat en fonction de l'opérateur
function calculateResult(nextOperator = '') {
    if (!currentExpression) return;

    const currentValue = parseFloat(currentExpression);
    
    switch (lastOperator) {
        case '+':
            result += currentValue;
            break;
        case '-':
            result -= currentValue;
            break;
        case '*':
            result *= currentValue;
            break;
        case '/':
            if (currentValue !== 0) {
                result /= currentValue;
            } else {
                display.value = 'Erreur'; 
                return;
            }
            break;
        default:
            result = currentValue;
            break;
    }
    
    display.value = result;
    lastOperator = nextOperator;
    currentExpression = '';
}

//  afficher le résultat lorsque "=" est cliqué
function showFinalResult() {
    calculateResult();
    lastOperator = '';  // Réinitialiser après le calcul
}



// 2eme proposition ****************

// Sélectionne l'élément d'affichage
// const display = document.getElementById('display');

// // Fonction pour ajouter des valeurs à l'affichage
// function appendToDisplay(value) {
//     display.value += value;
// }

// // Fonction pour effacer l'affichage
// function clearDisplay() {
//     display.value = '';
// }

// // Fonction pour calculer le résultat
// function calculateResult() {
//     try {
//         // Évalue l'expression présente dans l'affichage
//         const result = eval(display.value);
//         display.value = result;
//     } catch (error) {
//         // Si une erreur survient (par exemple, division par zéro), affiche un message d'erreur
//         display.value = 'Erreur';
//     }
// }
