$(document).ready(function() {
    $('#registrationForm').on('submit', function(e) {
        e.preventDefault();

        // Client-side validation
        var password = $('#password').val();
        var confirmPassword = $('#confirmPassword').val();
        
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return false;
        }

        // If validation passes, submit form using AJAX
        $.ajax({
            url: $(this).attr('action'),
            type: 'POST',
            data: $(this).serialize(),
            success: function(response) {
                $('#successMessage').show();
                $('#errorMessage').hide();
            },
            error: function() {
                $('#errorMessage').show();
                $('#successMessage').hide();
            }
        });
    });
});
