melchiorjs.module('app')

.require('jQuery', 'jQ')
.require('BasicView')

/*global BasicView, jQ*/
.run(function () {
	BasicView.render();
	jQ('li:even').css('color', 'red');
});
