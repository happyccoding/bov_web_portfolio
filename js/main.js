//header toggle
let mainNav = document.getElementById("js-menu");
let searchNav = document.getElementById("js-search");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function() {
  mainNav.classList.toggle("active");
  searchNav.classList.toggle("active");
});

//accordion toggle

wrapper   = $(".tabs");
tabs      = wrapper.find(".tab");
tabToggle = wrapper.find(".tab-toggle");

function openTab() {
	var content     = $(this).parent().next(".content"),
		activeItems = wrapper.find(".active");
	
	if(!$(this).hasClass('active')) {
		$(this).add(content).add(activeItems).toggleClass('active');
		wrapper.css('min-height', content.outerHeight());
	}
};

tabToggle.on('click', openTab);

$(window).load(function(){
  tabToggle.first().trigger('click');  
});