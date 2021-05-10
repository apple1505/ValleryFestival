$(function(){

    $('.sec-cont').click(function(event){
        $('#modal').css('display', 'flex')        
    })
    $('.btn-close').click(function(){
        $('#modal').hide()
    })
    
    let now = 1;


    setInterval(function(){
        
        if(now < 3){
            $(".slide > ul").animate({
                left : (100 * now * (-1)) + '%'
            })
        now++
            
        }else{
            $(".slide > ul").animate({
                left : 0
            })
            now = 1
        }      


    },3000)

})