// script.js

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('openMailButton').addEventListener('click', function () {
        var sender_name = document.getElementById('sender_name').value;
        var subject = document.getElementById('subject').value;
        var message = document.getElementById('message').value;
        window.location.href = 'mailto:stilhofsvej46@gmail.com?subject=' + sender_name + ' || ' + subject + '&body=' + message;
    });
});
