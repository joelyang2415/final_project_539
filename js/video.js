let tlou_video = document.getElementById("tlou_video");
let tlou_banner = document.getElementById("tlou_banner");

tlou_banner.addEventListener("mouseover", function() {
    tlou_video.style.display = "block";
    tlou_video.play();
});

tlou_banner.addEventListener("mouseleave", function() {
    tlou_video.style.display = "none";
    tlou_video.pause();
});


let tw3_video = document.getElementById("tw3_video");
let tw3_banner = document.getElementById("tw3_banner");

tw3_banner.addEventListener("mouseover", function() {
    tw3_video.style.display = "block";
    tw3_video.play();
});

tw3_banner.addEventListener("mouseleave", function() {
    tw3_video.style.display = "none";
    tw3_video.pause();
});


