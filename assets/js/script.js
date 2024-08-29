
// fixed_menu
// $(window).scroll(function(){
//     if($(window).scrollTop() > 200){
//         $(".menu").addClass("fixed_menu")
//     }else{
//         $(".menu").removeClass("fixed_menu")
//     }
// })

// back_2_top
$(".back_2_top").click(function(){
    $("html,body").animate({
        scrollTop : 0
    },1000)
})

$(window).scroll(function(){
    if($(window).scrollTop() > 200) {
        $(".back_2_top").fadeIn()
    } else {
        $(".back_2_top").fadeOut()
    }
})

// counter_start
$('.counter').counterUp({
    delay: 10,
    time: 1000
});



// vhano_box
new VenoBox({
    selector: '.my-image-links',
    numeration: true,
    infinigall: true,
    share: true,
    spinner: 'rotating-plane'
});

// back_2_top
