$(document).ready (function () {
//    $('body').keyup (function(e) {
//        $('title').text(e.keyCode);
//        let ss = 'abc';
//        let subtractAsciiFromUtf_16 = 32;
//        $('title').text(ss.charCodeAt(2) - 32);
//    });
    
    const TypingControll = {
        subtractAsciiFromUtf_16 : 32 ,
        gameBox : document.getElementById ('game-box') ,
        textBlock : document.getElementById ('text-block') ,
        redSign : 0 ,
        
        /**
         * Generate lorem ipsum
         */
        genLorem : function () {
            lorem.genLorem(status.level);
        } ,
        
        keyPress : function () {
            let elem = $('#text-block').children ().first ();
//            alert (elem.text());
//            alert (elem.next().text());
//            alert (elem.next().text());
alert ($('#text-block').children().length);
        } 
    };
    
    TypingControll.keyPress();
});

