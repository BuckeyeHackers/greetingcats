window.onload = function () {
    var vrScene = document.getElementById("vrScene");
    vrScene.addEventListener("loaded", function () {
        console.log("SHIT LOADED");
    })
    var userCardDiv = document.getElementById("userCardDiv");
    userCardDiv.style.visibility = "visible";
}