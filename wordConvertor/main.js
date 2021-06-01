const fs = require('fs');
const path = require('path');

function checkEntries() {
    console.log('Checking for files...');
    const files = fs.readdirSync(path.join(__dirname, '/entry'));
    if (files.length > 0) {
        files.forEach(el => {
            let file = fs.readFileSync(path.join(__dirname, '/entry/', el), { encoding: "utf-8" });
            file = file.replace(/;/g, ' → ');
            file = file.replace(/}\n|{\n/g, '');
            //�?
            //file = file.replace(/�?/g, )
            file = file.split('\n')
            let copy = [];
            file.forEach(line => {
                console.log(line.split('.'));
                if(line.split('.').length > 1) {
                    copy.push(' ');
                }
                copy.push(line);
            });
            file = copy.join('\n');
            fs.writeFileSync(path.join(__dirname, '/out/', ('rewritten_' + el)), file);
        });
        console.log('Finished, check out directory. Ending operation')
    } else {
        return console.log('No files in the entry directory. Ending operation.');
    }
}

checkEntries();