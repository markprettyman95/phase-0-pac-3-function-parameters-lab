// function introduction(name) {
//     return("Hi my name is ${name}.")
// }

// let name = "Aki"
// let langauge = "Ember.js"

// function introduction(name) {
//     console.log(`Hi my name is ${name}.`);
// }

// function introductionWithLanguage(name, language) {
//     console.log(`Hi my name is ${name} and I am learning to program in ${language}. `);
// }

// let name = "Gracie"

// function introductionWithLanguageOptional(name, language = "JavaScript") {
//     console.log(`Hi my name is ${name} and I am learning to program in ${language}. `);
// }

// function introductionWithLanguageOptional(name, language = "Python") {
//     console.log(`Hi my name is ${name} and I am learning to program in ${language}. `);
// }

function introduction(name) {
    return `Hi, my name is ${name}.`;
}

function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

function introductionWithLanguageOverride(name, language = "Python") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
