// wrap Riot implementation into generic API.
window.demoViewer = function(config){
    'use strict';
    var element = document.querySelector('demo-viewer');
    var app = document.createElement('app');
    app.innerHTML = element.innerHTML;
    element.innerHTML = '';
    element.appendChild(app);
    window.riot.mount(app, config);
};