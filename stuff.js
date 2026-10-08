function showImage(imageID) {
    let image = document.getElementById(imageID);

    if (image.style.display === "block") {
        image.style.display = "none";
    } else {
        image.style.display = "block";
    }
}