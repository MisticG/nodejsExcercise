var fs = require('fs');
const { red, white, blue, bold } = require('kleur');
color = white;

fs.readFile('code.txt', function(err, data) {
    var dataString = data.toString();
    for(var i = 0; i < dataString.length; i++) {
        if (dataString[i] === '<') {
            color = red;
        }
        if (dataString[i] === '>') {
            color = white;
        }
        process.stdout.write()
    }
})