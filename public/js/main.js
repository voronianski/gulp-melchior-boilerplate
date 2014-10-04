melchiorjs.config({
	paths: {
		'jQuery': 'js/components/jquery/jquery.js',
		'underscore': 'js/components/underscore/underscore.js',
		'BasicView': 'js/views/BasicView.js',
		'app': 'js/app.js'
	},

	shim: {
		underscore: {
			exports: '_'
		}
	}
});
