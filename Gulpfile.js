'use strict'

const gulp = require('gulp');
var ghPages = require('gulp-gh-pages');

gulp.task('deploy', function() {
  return gulp.src('./_site/**/*')
    .pipe(ghPages({
      "remoteUrl" : "git@github.com:donaldboulton/DWB.git gh-pages"
    }));
});
var responsive = require('gulp-responsive');
var gulpSharp  = require('gulp-sharp');
var requireDir = require('require-dir');
var tasks      = requireDir('./gulp/tasks', {recurse: true}); // eslint-disable-line

// include paths file
var paths      = require('./gulp/paths');

// 'gulp build:site' -- copies, replaces rev'd references, builds, and then copies it again
gulp.task('build:site', gulp.series('site:tmp', 'site', 'copy:site'));

// 'gulp assets' -- removes assets and rebuilds them
// 'gulp assets --prod' -- same as above but with production settings
gulp.task('assets', gulp.series(
  gulp.series('scripts', 'styles', 'icons'),
  gulp.series('scripts:gzip', 'styles:gzip', 'images:demo', 'images:pages', 'copy:assets', 'copy:images', 'copy:icons', 'copy:manifest')
));

// 'gulp clean' -- removes assets and gzipped files
gulp.task('clean', gulp.parallel('clean:assets', 'clean:gzip', 'clean:dist', 'clean:site'));

// 'gulp build' -- same as 'gulp' but doesn't serve site
// 'gulp build --prod' -- same as above but with production settings
gulp.task('build', gulp.series('clean', 'assets', 'build:site', 'html', 'xml'));

// 'gulp deploy' -- deploy site to production and submit sitemap XML
gulp.task('deploy', gulp.series('upload', 'submit:sitemap'));

// 'gulp check' -- checks your Jekyll site for errors
gulp.task('check', gulp.series('site:check'));

// 'gulp' -- removes assets and gzipped files, creates assets and revs version
//   in includes or layouts, builds site, serves site
// 'gulp --prod' -- same as above but with production settings
gulp.task('default', gulp.series('build', 'serve'));

