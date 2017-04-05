alert('test');
//the core function for collapse nav 
var btn = document.querySelector('.collapse-btn'); //target the class of the button
var nav = document.querySelector('.coll-ul'); // target the ul class you want to be hidden/shown (toggled)
var media = 900 // Put the width of the target Media Screen for the event

jQuery(btn).click(function(){
	jQuery(nav).slideToggle();
})

jQuery(window).resize(function(){
	if ( jQuery(window).width() > media ) {
		jQuery(nav).removeAttr('style');
	}
}) 
