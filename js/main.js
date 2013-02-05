(function ($) {

	/* Create namespace */

	var test = test || {};


	/*
		Core
	*/

	test.core = (function() {

		var settings = {

		};


		function init() {

			if ($('h1').length) {

			test.example.init();

			}

		};

		return {
			init : init
		};


	}());


	test.example = (function(){

		alert("Working");

		function init(){


			bind();
		};

		function bind(){

			if (!Modernizr.csstransitions) {
				$('nav > ul li').mouseenter(function(){
					$(this).find('ul').hide().slideDown();
				});

			}

		// $('a').on('click', function(e){

		// 	e.preventDefault();

		// 	if (Modernizr.csstransforms) {
		//         $('body').append('<p>This bind event lets you know this browser supports css transforms</p>');
		//     }else{
		//     	$('body').append('<p>This bind event lets you know this browser DOES NOT support css transforms cos its naff</p>');
		//     }

		// });

		};

		return{
			init: init
		};


	})();


	$(document).ready(function () {

		test.core.init();

	});

}(jQuery));

