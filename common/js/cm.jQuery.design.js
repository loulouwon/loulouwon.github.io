$(function(){
    var win_w = $(window).width(),
        win_h = $(window).height(),
        max_height = 500,
        this_scrollTop = 0,
        menu = $('.menu li').find('a');

    function reset(){
        $(window).resize(f_resize);
        max_height_ck();
    }
    //f_resize
    function f_resize(){
        max_height_ck();
    }
    //max_height_ck
    function max_height_ck(){
        if(win_h >= max_height) $("#container article").height(win_h+"px");	//section높이 지정
        if(win_w < win_h) $("#container article").css("background-size","100%" +win_h+"px");
    }
    //scroll_ck
    function scroll_ck(){
        this_scrollTop = $(window).scrollTop();
        $(window).scroll(function(){
            this_scrollTop = $(window).scrollTop();
            section();
        });
        section();
    }
    //section
    function section(){
        if( this_scrollTop >= win_h ){
            $("#cont2").find("#header").addClass("scroll_fix");
        }else{
            $("#cont2").find("#header").removeClass("scroll_fix");
        }
    }
    reset();
    scroll_ck();
    
    // 이메일발송
    function okEmail(){
        alert("이메일 보냈음요!");
    }
    function noEmail(){
        alert("이메일 보내기 실패!");
    }

    // 메뉴이동
    $('h1 .cont1').on('click',function(){
        $('html,body').animate({scrollTop:0}, 1000, 'easeInOutExpo');
    });
    $(".scroll").on('click',function(e){
        $('html,body').animate({scrollTop:$('#cont2').offset().top}, 1000, 'easeInOutExpo');
    });
    menu.on('click',function(){
        var idx = $(this).parent('li').index() + 2,
            cont_num = $('#cont' + idx) ;
        $('html,body').animate({scrollTop:cont_num.offset().top}, 1000, 'easeInOutExpo');
    });

	// 슬라이더
    $('.bxslider').bxSlider({
        auto: true,
        autoControls: true
    });

    //폼요소
    $(".inp_ck").on('focusin',function(){
        if($(this).val() == ""){
            $(this).addClass("tx_yes");
        }else{
            $(this).val();
        }
    }).on('focusout',function(){
        if($(this).val() == ""){
            $(this).removeClass("tx_yes");
        }else{
            $(this).val();
        }
    });

});




