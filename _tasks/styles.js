//const sassFiles = [ 'envira-*/envira-gallery/*/*/scss/style.scss', 'envira-*/assets/scss/*-admin.scss', 'envira-*/assets/scss/*-style.scss' ];
const sassFiles = [
	'assets/scss/envira.scss',
	'assets/scss/metabox.scss',
	'assets/scss/settings.scss',
	'assets/scss/welcome.scss',
	'assets/scss/admin.scss',
];

module.exports = function(gulp, plugins) {
	return function() {
		let stream = gulp
			.src(sassFiles, { base: './' })
			.pipe(
				plugins
					.sass({ outputStyle: 'compressed' }) //nested
					.on('error', plugins.sass.logError),
			)
			.pipe(
				plugins.rename(function(path) {
					console.log(path);
					path.dirname = path.dirname.replace('scss', 'css');
					return path;
				}),
			)
			.pipe(gulp.dest('./'))
			.pipe(plugins.notify({ onLast: true, message: 'test' }));
		return stream;
	};
};
