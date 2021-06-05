
            var string = "Do not fear failure but rather fear not trying";
            var array = string.split("");
            var timer;

            function frameLooper () {
	        if (array.length > 0) {
		        document.getElementById("text").innerHTML += array.shift();
	            } else {
		            clearTimeout(timer);
			    }
	                loopTimer = setTimeout('frameLooper()',150); 

                }
                frameLooper();

            window.onscroll = function() {scrollFunction()};

            function scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                document.getElementById("taskbar").style.top = "0";
            } else {
                document.getElementById("taskbar").style.top = "-50px";
                }
            }
     
                    $('.awesome-tooltip').tooltip({
            placement: 'left'
        });
        $('body').scrollspy({
            target: '#mainnav',
            offset: 000
        });

        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 500);
                    return false;
                }
            }
        });

