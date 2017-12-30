function lightbox(img, title, desc, link) {
   $("#lightbox-img").prop("src", img);
   $("#lightbox-title").html(title);
   $("#lightbox-description").html(desc);
   $("#lightbox-btn").prop("href", link);   
   $(".lightbox-container").fadeIn(300);
}

function lightboxClose() {
   $(".lightbox-container").fadeOut(300);
}