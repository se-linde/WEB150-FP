/* 
1. This animates the black tea title on the Services page. 
I didn't want it to fly off the page, as it is a description of services. 
Instead, just crawl across the page when clicked. 
*/ 

$(function() {
  $('div#black').on('click', function() {
    $(this).animate({
      opacity: 1.0,
      paddingLeft: '+=80'
    }, 500, function() {;
    });
  });
});

/*
2. On the services.html page, the h6 is made the same color as the 
background color, so they are hidden. 
This is our jQuery .each() method. 
The button causes every h6 message to display as an alert when pressed. 
There's two messages, alerting the visitor to some sales.  
*/ 

$(document).ready(function(){
    $("button").click(function(){
        $("h6").each(function(){
            alert($(this).text())
        });
    });
});


/* 
3. This event is a mouseover, and when the page visitor mouses over the 
section of services.html on green tea, it displays a span on the 
bottom of the div, advertising when a new shipment is to be expected. 
*/ 


$(function() {
  var ids = '';
  var $listItems = $('div#green');

  $listItems.on('mouseover click', function() {
    ids = this.id;
    $listItems.children('span').remove();
    $(this).append(' <span class="priority">** A new shipment of  Fukamushi (Deep-steamed) Sencha is coming this Spring! **</span>');
  });

  $listItems.on('mouseout', function() {
    $(this).children('span').remove();
  });

});


/* 
4. .css() method changing the font families and styles on the contact.html page. 
*/ 


$(document).ready(function(){
        $("h2.contact").css({"font-family": "'Meddon', serif", "font-size": "16px"});    
        $("h2.title").css({"font-family": "'Georgia', serif", "font-size": "20px", "font-style": "oblique"});
        $("h4.address").css({"font-family": "'Georgia', serif", "font-size": "16px", "font-style": "italic", "padding-left": "3em"});
        $("footer").css({"font-family": "'Georgia', serif", "font-size": "16px", "font-style": "normal"});
    });


/* 
5. Fade out and then in on the h2.title on the contacts page, to get the viewer's attention. Viewer has to click to activate. 
*/ 

$(document).ready(function(){
    $("h2.title").click(function(){
        $("h2.title").fadeOut("slow", "swing")
    });
    $("h2.title").click(function(){
        $("h2.title").fadeIn("slow", "linear");
    });
});



/* Now with jQuery added! Assignment 9 */ 
