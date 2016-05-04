var fs = require('fs');
var postcss = require('postcss');

postcss([
        require('postcss-import'),          // combine imports into one file
        require('postcss-css-variables'),   // css variables
        require('autoprefixer'),            // vendor prefix for older browsers
        require('cssnano')                  // minify css
    ])
    .process(fs.readFileSync('src/test.css'), {
        from: 'src/test.css',
        to: 'test.css'
    })
    .then(function (result) {
        fs.writeFileSync('dist/test.css', result.css);
        if (result.map) {
            fs.writeFileSync('dist/test.css.map', result.map);
        }
    });