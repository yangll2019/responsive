$(function(){
    $.ajax({
        url:"header.html",
        type:"get",
        success:function(result){
            $(result).replaceAll("header");
        }
    })
})