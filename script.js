var toggleMessage = document.getElementById("toggleMessage");
var btn2 = document.getElementById("btn2");
var btnNext = document.getElementById("btnNext");
var nameMessage = document.getElementById("nameMessage");
var holaMessage = document.getElementById("holaMessage");
var hurrahMessage = document.getElementById("hurrahMessage");

window.onload = function() {
    // Automatically show "Hey Sushma" message when the page loads
    toggleMessage.textContent = "Hey Sushma!!";
    toggleMessage.style.display = "block";

    // After 1 second, show the "Show Name" button
    setTimeout(function() {
        btn2.style.display = "block"; // Show the "Show Name" button
    }, 1000);
};

function showName() {
    // Hide the "Show Name" button
    btn2.style.display = "none";

    // Show "Saumyajit" message with fade-in animation
    nameMessage.textContent = "Yaar, why get upset? I know I made you wait, and that's really not fair, especially since you never keep anyone waiting. I’ll make it up to you!";
    nameMessage.style.display = "block";

    // After 2 seconds, show the "Next" button
    setTimeout(function() {
        btnNext.style.display = "block"; // Show the "Next" button
    }, 2000);
}

function showHola() {
    // Hide the "Next" button
    btnNext.style.display = "none";

    // Show "Hola" message with fade-in animation
    holaMessage.textContent = "!! SORRY !!";
    holaMessage.style.display = "block";

    // After 2 seconds, hide everything and show "Hurrah"
    setTimeout(function() {
        toggleMessage.style.display = "none";
        nameMessage.style.display = "none";
        btn2.style.display = "none";
        btnNext.style.display = "none";
        holaMessage.style.display = "none";

        hurrahMessage.style.display = "block"; // Show "Hurrah"
    }, 2000);
}
