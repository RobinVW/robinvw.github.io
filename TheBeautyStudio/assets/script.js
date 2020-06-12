// JavaScript Document


$(document).ready(()=>{
	
	"use strict";
	
	let $infoSections = $("section#info").find("section");
	console.log($infoSections);
	
	let randomOpacity = () =>{
		return Math.random();
	};
	
	$infoSections.each(function(i,el){
		    var elem = $( el );
    		elem.css("background-color","rgba(244, 137, 156,"+randomOpacity()+")");
	});
	
	let currentYear = new Date().getFullYear();
	let $year = $("#year");
	$year.text(currentYear);

	//prijzen toggle
	let acc = $('.accordion');

	acc.each(function(i,el){
		el.onclick = function(){
			this.classList.toggle("active");
        	this.nextElementSibling.classList.toggle("show");
		}
	});
});