 function jsload(jsFilePath){
    var js = document.createElement('script');
    js.type = 'text/javascript';
    js.src = jsFilePath;
    document.getElementsByTagName('head')[0].appendChild(js);
}

jsload('common/js/jquery.easing.1.3.js');
jsload('common/js/jquery.bxslider.min.js');
jsload('common/js/cm.jQuery.design.js');
