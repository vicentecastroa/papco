/**
 * Created by Vicente on 15-12-2015.
 */



$(document).ready(function(){
    $('#pintura').mouseenter(function(){
        $('#img-pintura').fadeTo("fast", 0.4);
    });
    $('#pintura').mouseleave(function(){
        $('#img-pintura').fadeTo("fast", 1);
    });
});

$(document).ready(function(){
    $('#piso').mouseenter(function(){
        $('#img-piso').fadeTo("fast", 0.4);
    });
    $('#piso').mouseleave(function(){
        $('#img-piso').fadeTo("fast", 1);
    });
});

$(document).ready(function(){
    $('#banos').mouseenter(function(){
        $('#img-banos').fadeTo("fast", 0.4);
    });
    $('#banos').mouseleave(function(){
        $('#img-banos').fadeTo("fast", 1);
    });
});

$(document).ready(function(){
    $('#terrazas').mouseenter(function(){
        $('#img-terrazas').fadeTo("fast", 0.4);
    });
    $('#terrazas').mouseleave(function(){
        $('#img-terrazas').fadeTo("fast", 1);
    });
});