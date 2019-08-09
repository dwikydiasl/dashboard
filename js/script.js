//toggle humberger

$("#menu-toggle").click(function(e) {
	e.preventDefault();
	$("#wrapper").toggleClass("toggled");
});

 //dropdown
 var dropdown = document.getElementsByClassName("dropdown-btn");
 var i;

 for (i = 0; i < dropdown.length; i++) {
 	dropdown[i].addEventListener("click", function() {
 		this.classList.toggle("active");
 		var dropdownContent = this.nextElementSibling;
 		if (dropdownContent.style.display === "block") {
 			dropdownContent.style.display = "none";
 		} else {
 			dropdownContent.style.display = "block";
 		}
 	});
 }

 //switch mode background
 $(".mode-switcher-light").click(function(){
  $("body").removeClass("dark-mode");
  $("body").addClass("light-mode");
});

$(".mode-switcher-dark").click(function(){
  $("body").removeClass("light-mode");
  $("body").addClass("dark-mode");
});

//search
function search() {
  var x = document.getElementById("boxSearch");
   if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

//floating form
$("input[type='text']").click(function(){
  var $this=$(this);
  $this.attr("placeholder","");
  $this.parent().find("label").addClass("label-top");
});