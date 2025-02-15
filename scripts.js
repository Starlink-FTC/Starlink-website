document.addEventListener('DOMContentLoaded', function() {
    // Example function to handle a button click
    document.getElementById('exampleButton').addEventListener('click', function() {
        alert('Button was clicked!');
    });

    // Example function to change the text of an element
    document.getElementById('exampleText').innerText = 'Hello, Starlink!';
    
    // Example function to toggle a class on an element
    document.getElementById('toggleClassButton').addEventListener('click', function() {
        document.getElementById('exampleElement').classList.toggle('active');
    });
});