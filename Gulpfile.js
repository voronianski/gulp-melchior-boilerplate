var gulp = require('gulp');
var melchior = require('gulp-melchior');

gulp.task('melchior', function(){
	return gulp.src('./public/js/main.js')
		.pipe(melchior({path: './public/'}))
		.pipe(gulp.dest('./public/build'));
});
