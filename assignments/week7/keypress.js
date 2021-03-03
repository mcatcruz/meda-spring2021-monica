$(document).ready(function () {
    
    //Keypress Function

    $('#target').keypress(function (event) {
        var keyPressed = event.which;
        console.log('the key pressed was: ' + keyPressed);
        if (keyPressed == 'h') {
            console.log('the h was pressed!');
        }
        var currentMarginTop = $('#target').css('margin-top');
        currentMarginTop = parseInt(currentMarginTop);
        var newMargin = (currentMarginTop + 10) + "px";
        $('#target').css('margin-top', newMargin);
        console.log('key pressed');

    });




});