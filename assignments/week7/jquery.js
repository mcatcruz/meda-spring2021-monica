// or jQuery() -- this is the function you call to run jQuery
// @param document represents the DOM
//.ready() = tells website to wait until everything is loaded, then run the callback function inside the parens
$(document).ready(function() {

    /*
        jQuery Common Methods
        .remove(); removes the selected DOM element.
        .css(); modifies the css of the selected element. 
            -First argument is the CSS property. 
            -Second argument is the CSS value
        .click(); is an event handler - runs the callback function when the specified element is clicked.

    */ 

    console.log('jQuery is ready!');
    var myOnlyButton = $('#my-button');
    //myOnlyButton.remove();

    setTimeout(function () {
        //Code to run when setTimeout "finishes"
        myOnlyButton.css('background-color', 'tomato');
        myOnlyButton.css('border-radius', '15px');
        //myOnlyButton.remove();
    }, 2000);

    var buttonFunction = function () {
        myOnlyButton.css('color', 'white');
        $('body').css('background-color', 'yellow');
    }

    myOnlyButton.click(buttonFunction);

    var formSubmit = $('#submit');

    // Any VALUE that comes from outside of JavaScript is automatically a string data type.

    formSubmit.click(function () {
        var submittedData = $('#user-info').val();
        if (submittedData = "") {
            $("#results").text("no input"); 
        } else {
            //parseInt(); converts value provided into a number data type.
            var convertedData = parseInt(submittedData);

            if (isNaN(convertedData)) {
                $("#results").text("invalid input");
            } else {

                //Multiply the value by 10
                var math = convertedData * 1000;

                //Write a sentence with the results into our p element
                $('#results').text('We multiplied your number by 1000 and got: ' + math);
            }
        }
    });
    
}); 
