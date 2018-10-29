//header toggle
let mainNav = document.getElementById("js-menu");
let searchNav = document.getElementById("js-search");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function() {
  mainNav.classList.toggle("active");
  searchNav.classList.toggle("active");
});

mainNav.addEventListener("click", function() {
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


//modal 
// Get the modal
var modal = document.getElementById('modal');

// Get the button that opens the modal
var searchBtn = document.getElementById("searchBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("modal__close")[0];

// When the user clicks the button, open the modal 
searchBtn.onclick = function() {
	modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}