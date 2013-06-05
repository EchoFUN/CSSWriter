#!/user/bin/env node

var fs = require('fs');

var TARGET_FOLDER;

process.argv.forEach(function(argv) {
    if (argv.indexOf('--') <= -1)
        return;
            
    switch(argv) {
        case '--target':
            TARGET_FOLDER = argv;
    }
});

if (!TARGET_FOLDER) {
    return;
}

