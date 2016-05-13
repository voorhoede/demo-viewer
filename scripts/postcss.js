const fs = require('fs');
const postcss = require('postcss');

const inputFilename = 'src/index.css';
const outputDir = 'dist/';
const outputFilename = 'dist/demo-viewer.css';

postcss([
        require('postcss-import'),          // combine imports into one file
        require('postcss-css-variables'),   // css variables
        require('autoprefixer'),            // vendor prefix for older browsers
        require('cssnano')                  // minify css
    ])
    .process(fs.readFileSync(inputFilename), {
        from: inputFilename,
        to: outputFilename.substr(outputDir.length), // file path relative to output dir
        map: { inline: false }
    })
    .then(function (result) {
        fs.writeFileSync(outputFilename, result.css);
        if (result.map) {
            fs.writeFileSync(`${outputFilename}.map`, result.map);
        }
    });