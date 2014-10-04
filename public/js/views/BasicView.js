melchiorjs.module('BasicView')

.require('jQuery', 'jQ')
.require('underscore', 'u')

/*global jQ, u*/
.body(function () {
	'use strict';

	var books = [
		{title: 'Princess Maia'},
		{title: 'Princess Noori'},
		{title: 'Princess Gita'},
		{title: 'Princess Tito'},
		{title: 'Princess Kandi'}
	];

	return {
		render: function () {
			var $listWrap = jQ('#list');
			u(books).each(function (book) {
				$listWrap.append('<li>' + book.title + '</li>');
			});
		}
	};
});
