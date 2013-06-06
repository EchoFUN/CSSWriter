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

var page = require('webpage').create();

var url = 'http://www.phantomjs.org/';
page.open(url, function(status) {
    
    debugger;
    
    //Page is loaded!
    phantom.exit();
}); 