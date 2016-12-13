'use strict';

var config       = require('../config');
var gulp = require('gulp');
var sitemap = require('gulp-sitemap');
 
gulp.task('sitemap', function () {
    gulp.src(config.dist.root + '**/*.html')
        .pipe(sitemap({
            siteUrl: 'http://html.dsquare.vn/P16011-Mitsubishi-CorprateWebsite/html/'
        }))
        .pipe(gulp.dest(config.dist.root));
});



