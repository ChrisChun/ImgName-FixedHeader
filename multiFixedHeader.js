var $window = $(window);
var imageArr = [];
var iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
console.log(iOS);

$(window).on("load", function() { //Fires when DOM is loaded
    getImageSizes();
    window.requestAnimationFrame(tick);
    $(window).resize(function() { //Fires when window is resized
        getImageSizes();
        scrollDetect(imageArr);
    });

});

function getImageSizes() {
    var $items = $(".insurance_item");
    for(var c = 0; c < $items.length; c++){
        imageArr[c] = $($items[c]).outerHeight();  
    }
}

 function scrollDetect(imageArr){
    var $items = $('.header_item');
    for(var c = 0; c < imageArr.length; c++){
        if($window.scrollTop()  >= (imageArr[c] * (c+1)) - $('#fixed-header').outerHeight()){  
            $items.eq(c).show();
        }else{
            $items.eq(c).hide();
        }
    }
     window.requestAnimationFrame(tick);
}

function tick(){
    scrollDetect(imageArr);
};

