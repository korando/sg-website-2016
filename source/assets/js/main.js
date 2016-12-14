window.D2 = window.D2 || {
    config: {
        baseUrl: 'js',
    }
};

window.D2.config = window.D2.config || {
    baseUrl: 'js',
};

if (!window.D2.requires) {
    window.D2.requires = [
        'jquery.history',
        'jquery.waypoints.min',
        'jquery.timelinr-0.9.6',
        'clipboard.min',
        'typed.min',
        'slick.min',
        'enscroll.min',
        'css3-animate-it',
        'scripts'
    ];
}


requirejs.config(window.D2.config);
requirejs([
    'jquery-2.2.4.min'
], function() {
    requirejs(window.D2.requires, function() {
        if (window.D2.init) {
            window.D2.init($);
        }
        $(function() {

        });

    });
});
