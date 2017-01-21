'use strict';

// 是否微信
function is_weixn(){  
    var ua = navigator.userAgent.toLowerCase();  
    if(ua.match(/MicroMessenger/i)=="micromessenger") {  
        return true;  
    } else {  
        return false;  
    }  
}

// 弹窗（提示信息）
function showpop(msg,btname){
	var pop = "<div class='shade'><div class='popup'><p class='content'>"+msg+"</p><a href='javascript:;' class='button'>"+btname+"</a></div></div>";
	$('body').append(pop);
	$('.shade , .popup').show();
	$('.popup .button').on('click',function(){
		$('.shade , .popup').remove();
		$('.popup .button').off('click');
	});
}
// 弹窗（返回状态）
function showstatus(msg,btname){
	var pop = "<div class='shade'><div class='popup'><p class='content'>"+msg+"</p><a href='javascript:;' class='button'>"+btname+"</a></div></div>";
	$('body').append(pop);
	$('.shade , .popup').show();
	$('.popup .button').on('click',function(){
		$('.shade , .popup').remove();
		$('.popup .button').off('click');
	});
}
