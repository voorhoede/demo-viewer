// wrap Riot implementation into generic API.
window.demoViewer = function(config){
    'use strict';
    var element = document.querySelector('demo-viewer');
    var app = document.createElement('app');
    app.innerHTML = element.innerHTML;
    element.innerHTML = '';
    element.appendChild(app);

    if (typeof config.modules === 'string') {
        getJson(config.modules, function(err, modules) {
            if (err) { console.log('error fetching modules', err); }
            window.riot.mount(app, { modules: modules, sizes: config.sizes });
        });
    } else {
        window.riot.mount(app, config);
    }


    /**
     * Get JSON from URL.
     *
     * @param {String} url
     * @param {Function} callback   - called with (err, json)
     */
    function getJson(url, callback) {
        var request = new XMLHttpRequest();
        request.open('GET', url, true);
        request.onload = function() {
            if (request.status >= 200 && request.status < 400) {
                try {
                    var json = JSON.parse(request.responseText);
                    callback(null, json);
                } catch (err) {
                    callback(err);
                }
            } else {
                callback(request);
            }
        };
        request.onerror = function() {
            callback(request);
        };
        request.send();
    }
};