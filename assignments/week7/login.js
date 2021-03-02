$(document).ready(function () {
    $('#login').click(function (event) {
        event.preventDefault();
       // console.log('button clicked!');
       var username = $('#username').val();
       var password = $('#password').val();
       if (username === 'student') {
           if (password === '123456') {
               console.log('congrats!');
           } else {
            console.log('incorrect login information');
        }
       } else {
        console.log('incorrect login information');
    }
    });
});

// preventDefault() is a JS function. In this case, the function prevents the default event from happening once the button is clicked. Normally, once the button is clicked, the event is for the page to reload.
//.val() is a function that collects data from input elements.