 const images = ["20.jfif", "21.jfif", "22.jfif", "23.jfif","24.jfif"];

 const chosenImage = images[Math.floor(Math.random() * images.length)];

 const bgImage = document.createElement("img");
 bgImage.src = `img/${chosenImage}`;
 document.body.appendChild(bgImage);
 bgImage.style.position = "fixed";
 bgImage.style.zIndex = "-1";
 bgImage.style.top="0";
 bgImage.style.left="0";
 bgImage.style.width = "100%";
 bgImage.style.height = "100%";
 bgImage.style.opacity = "1";