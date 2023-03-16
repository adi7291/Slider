
// $(document).ready(function(){
    
    
//     $('.next').on('click',function(){
//         console.log("next")
        
//        var currentImg=$('.active');
//        var nextImg =currentImg.next()

// if(nextImg.length){
   
//         currentImg.removeClass('active').css('z-index',-10)
//         nextImg.addClass('active').css('z-index',10)
   
    
// }
        
//     })

//     $('.prev').on('click',function(){
//         console.log("prev")
//         var currentImg=$('.active');
//         var prevImg =currentImg.prev()
 
//  if(prevImg.length){
//     setInterval(()=>{

//         currentImg.removeClass('active').css('z-index',-10)
//         nextImg.addClass('active').css('z-index',10)
//     },500)
//  }
// }
// )
// }
// )

$(document).ready(function(){
    function nextMove (){
        var currentImg = $('.avtive')
        var nextImg =currentImg.next()

        if(nextImg.length){
            setInterval( function(){
          currentImg.removeClass('active').css('z-index',-10)
            },2000)
            setInterval( function(){
                nextImg.addClass('active').css('z-index' ,10)
                  },2000)
        }
       
    }
    $('.next').on('click',function(){
        nextMove()
    })


})