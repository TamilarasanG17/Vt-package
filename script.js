document.getElementById("download1").addEventListener("click", function () {
    window.location.href = "vt-prepare-0.0.1.vsix";
});



document.getElementById("infoBtn").addEventListener("click", function () {
    const box = document.getElementById("infoBox");
    box.classList.toggle("hidden");
});
