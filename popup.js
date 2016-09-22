$(document).ready(function() {

    var folder = "img/";

    $.ajax({
        url : folder,
        success: function (data) {
            $(data).find("a").attr("href", function (i, val) {
                if( val.match(/\.(jpe?g|png|svg)$/) ) { 
                    $("body").append( "<img src='"+ folder + val +"'>" );
                } 
            });
        }
    });
    
});
document.onkeydown = function() {
  alert('test');
};