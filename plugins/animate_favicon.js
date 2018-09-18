const favicon_images = ["displayed.png", "hidden.png?v2"];

let image_counter = 0;

// Minimial interval in an inactive browser tab is 1000ms
// so it will blink slower.
// Might be fixed by using Web Workers?
// for example https://github.com/turuslan/HackTimer
setInterval(function() {
  document.querySelector("link[rel='icon']").remove();

  const iconImage = `/${favicon_images[image_counter]}`;
  const link = document.createElement("link");
  link.rel = "icon";
  link.type = "image/png";
  link.href = iconImage;
  document.head.appendChild(link);

  // If last image then goto first image
  // Else go to next image
  if (image_counter == favicon_images.length - 1) image_counter = 0;
  else image_counter++;
}, 500);
