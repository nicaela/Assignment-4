function start() {
	$(".readmore").click(expandText);

	function expandText () {
	       $('#show-this-on-click').slideDown();
	       $('.readless hide').show();
	       $('.readmore').hide();
	   }
	   
	 $(".readless").click(minimiseText);

	 function minimiseText () {
	       $('#show-this-on-click').slideUp();
	       $('.readmore').show(300);
	       $('.readless').hide();
	   }
	   
	$(".learnmore").click(expandSideBar);

	function expandSideBar() {
	       $('#learnmoretext').slideDown();
	       $('.learnmore').hide();
	   }
}

$(document).ready(start);