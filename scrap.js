/*
Note that this code is fitted for certain content sharing platform
And also this code is only tested on one link, so expect some bug on other links
You might want to adjust the value of i and j so that no junks included on download (header, banner, icon, etc)
Paste this code on browser console (ctrl+shift+i)
*/

let images = document.getElementsByTagName('img'); 
let srcList = [];

//Get fullres img by clicking on them
for(var i = 2; i < images.length; i++) {
    images[i].click();
}

//Re-fetch those images
let new_images = document.getElementsByTagName('img'); 

//List all img srcs to srcList
for(var j = 2; j < new_images.length; j++) {
    new_images[j].src.includes('thumbnail') || srcList.push(new_images[j].src);
}

//output for srcList
JSON.stringify(srcList);

//Copy the output directly to links.txt, remove the [ and ] in the start and the end