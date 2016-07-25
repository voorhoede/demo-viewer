// include depenencies (a-z)

const fs = require('fs');
const mkdirp = require('mkdirp');
const postcss = require('postcss');

// configure input, output and processors:

const inputFilename = 'src/index.css';
const outputDir = 'dist/';
const outputFilename = 'dist/demo-viewer.css';
const autoprefixerBrowsers = {browsers: ['last 1 versions', 'ie >= 9'] };

const processors = [
    require('postcss-import'),                     // combine imports into one file
    require('postcss-custom-properties'),          // replace variables by their calculated values
    require('autoprefixer')(autoprefixerBrowsers), // vendor prefix for older browsers
    require('cssnano')                             // minify css
];

// process input and write output to disk:

postcss(processors)
    .process(fs.readFileSync(inputFilename), {
        from: inputFilename,
        to: outputFilename.substr(outputDir.length), // file path relative to output dir
        map: { inline: false }
    })
    .then(writeOutput)
    .catch(err => handleError(err.message));


function writeOutput(result) {
    mkdirp(outputDir, (err) => {
        handleError(err);
        fs.writeFile(outputFilename, result.css, handleError);
        if (result.map) {
            fs.writeFile(`${outputFilename}.map`, result.map, handleError);
        }
    });
}

function handleError(err) {
    if (err) {
        console.log(err);
        process.exit(1);
    }
}