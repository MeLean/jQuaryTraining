$(document).ready(function () {
    var WEITING_PERIOD = 500000000000000;
    var index = -1; // it is -1 to strart from 0 element
    var slideIdArr = [ '#slideOne', '#slideTwo', '#slideThree'];
    hideAllShowIndex();
    
    (function () {
        setInterval(hideAllShowIndex, WEITING_PERIOD);
    })();
    
    $('#leftButton').click(function () {
        index = index - 2;
        checkArrayExplicity();
        hideAllShowIndex();
    });
        
    $('#rightButton').click(function () {
        hideAllShowIndex();
    });


    function checkArrayExplicity() {
        if (index >= slideIdArr.length) {
            index = 0;
        }

        if (index < 0) {
            index = slideIdArr.length + index; 
        }
    }

    function hideAllShowIndex() {
        index++;
        checkArrayExplicity();
        $('#slideHolder').children().hide();
        $(slideIdArr[index]).slideToggle();
    }
});