//Imports
const franc = require('franc');
const langs = require('langs');
const colors = require('colors');

//Taking Input using process.argv
const input = process.argv[2]; 

try {
    const code = franc(input);
    const language = langs.where("3", code);
    console.log("Match Found".green);
    console.log(language.name);
} catch (err) {
    console.log("Could not match a language. Please try again with a larger sample!".red);
}
