$('#loginForm').submit(function (event) {
    event.preventDefault(); // Prevent the default form submission

        const email = $('#email').val();
        const password = $('#password').val();

        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
        } else if (password.length < 8) {
            alert('Password must be at least 8 characters long.');
        } else {
            window.location.href="login.html"
        }
    });


    $('#registerForm').submit(function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Validation logic
        const name = $('#name').val();
        const email = $('#inputEmail4').val();
        const password = $('#inputPassword4').val();
        const phone = $('#phone').val();
        const address = $('#inputAddress').val();
        const city = $('#inputCity').val();
        const zip = $('#inputZip').val();
        const petName = $('#petName').val();
        const breed = $('#breed').val();
        const petAge = $('#petAge').val();
        const gender = $('input[name="gender"]:checked').val();
        const petType = $('input[name="pet"]:checked').val();
        if (!name || !email || !password || !phone || !address || !city || !zip || !petName || !breed || !petAge || !gender || !petType) {
            alert('Please fill in all fields.');
        } else if (password.length < 8) {
            alert('Password must be at least 8 characters long.');
        } else if (!isValidEmail(email)) {
            alert('Please enter a valid email address.');
        } else {
            if (petType === 'dog') {
                window.location.href = 'dogwalking.html'; // Redirect to the dog page
            } else if (petType === 'cat') {
                window.location.href = 'petsitting.html'; // Redirect to the cat page
            }
            
        }
    });

    function isValidEmail(email) {
        // Regular expression for email validation
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    }