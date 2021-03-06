function introduction(name) {
    return `Hi, my name is ${name}.`;
}
introduction("Josh");
introduction("Nancy");

function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;

}
introductionWithLanguage("Josh", "Ember.js");
introductionWithLanguage("Nancy", "React");

function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;

}
introductionWithLanguageOptional("Gracie", language);
introductionWithLanguageOptional("Gracie", "Python");