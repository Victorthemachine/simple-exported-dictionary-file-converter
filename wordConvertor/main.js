const fs = require('fs');

function checkEntries() {
    console.log('Checking for files...');
    const files = fs.readdirSync(__dirname + '/entry');
    if (files.length > 0) {
        files.forEach(el => {
            let file = fs.readFileSync(__dirname + '/entry/' + el, { encoding: "utf-8" });
            file = file.replace(/[;]/g, ' → ');
            file = file.replace(/[}\\n|{\\n]/g, '');
            fs.writeFileSync(__dirname + '/out/' + ('rewritten_' + el), file);
        });
        console.log('Finished, check out directory. Ending operation')
    } else {
        return console.log('No files in the entry directory. Ending operation.');
    }
}

checkEntries();