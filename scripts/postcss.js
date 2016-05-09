const fs = require('fs');
const postcss = require('postcss');

postcss([
        require('postcss-import'),          // combine imports into one file
        require('postcss-css-variables'),   // css variables
        require('autoprefixer'),            // vendor prefix for older browsers
        require('cssnano')                  // minify css
    ])
    .process(fs.readFileSync('src/index.css'), {
        from: 'src/index.css',
        to: 'index.css'
    })
    .then(function (result) {
        fs.writeFileSync('dist/demo-viewer.css', result.css);
        if (result.map) {
            fs.writeFileSync('dist/index.css.map', result.map);
        }
    });