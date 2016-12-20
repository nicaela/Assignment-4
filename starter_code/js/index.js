$(document).ready(start);

function start() {
	$(".readmore").click(expandText);

	function expandText (event) {
		event.preventDefault();
	       $('#show-this-on-click').slideDown();
	       $('.readless').show();
	       $('.readmore').hide();
	   }
	   
	 $(".readless").click(minimiseText);

	 function minimiseText (event) {
	 	event.preventDefault();
	       $('#show-this-on-click').slideUp();
	       $('.readmore').show(300);
	       $('.readless').hide();
	   }
	   
	$(".learnmore").click(expandSideBar);

	function expandSideBar(event) {
		event.preventDefault();
	       $('#learnmoretext').slideDown();
	       $('.learnmore').hide();
	   }
}

