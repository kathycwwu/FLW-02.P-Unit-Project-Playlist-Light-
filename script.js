// task 5: read through the JavaScript starter code to determine where each given function is declared and where each given function is called.
// <input placeholder="Image URL" class="image" value="" 
//       <input placeholder="Song Name" class="song-name" value="" 
//       <input placeholder="Artist" class="artist" value="" 
//       <input placeholder="Song Link Address" class="song-link" value="" 
// <button class="add">Add</button>
//  class="column display-image"
//     class="column display-song"
//     class="column display-artist"
//     class="column display-link"

// input variables
let image = document.querySelector(".image");
let songName = document.querySelector(".song-name");
let artist = document.querySelector(".artist");
let songLink = document.querySelector(".song-link");

// button variable
let add = document.querySelector(".add");


// task 6: declare variables for your display divs: the image url, song name, artist, and song link. Go back to the HTML to check that you are using the correct class names.
let displayimage = document.querySelector(".column display-image");
let displaysong = document.querySelector(".column display-song");
let displayartist = document.querySelector(".column display-artist");
let displaylink = document.querySelector(".column display-link");



// task 7: create and populate an array to store your image urls. Create three more arrays. One to store your song names, one for the artists, and a last one for the song links.
Arrimage = ["https://i.scdn.co/image/ab67616d0000b273ae2349de11cfce49ff626c21",
 "https://i.ytimg.com/vi/WZiSPQBY3d8/maxresdefault.jpg", 
 "https://i.ytimg.com/vi/uRqGY42A0FE/sddefault.jpg"];
ArrsongName = ['曾经你说', '四季与你', '把孤独当做晚餐'];
Arrartist = ['zhao nai ji', 'cheng xiang', 'jing long'];
ArrsongLink = ["https://www.youtube.com/watch?v=ogP1GAFuD4E",
            "https://www.youtube.com/watch?v=WZiSPQBY3d8",
            "https://www.youtube.com/watch?v=uRqGY42A0FE"
           ];


//REFACTOR ARRAYS DAY 
// task 11: comment out the arrays data.
// task 12: create an object for each of your songs.
// task 13: inside each object, add key/value pairs to store the image url, song name, artist, and song link.
// task 14: create an array that stores all of the objects.



//REFACTOR LOOPS DAY 
// task 15: update your `addSongInfo` function so the input values are saved in as values in a new object.
// task 16: update your `.push()` so the input object is added to your array of objects.
// task 17: update your loops based on your new array of objects.





function addSongInfo() {

  // task 9: declare a variable to save the user input of the image url. Declare three more variables that save user input: One for the song names, one for the artists, and a last one for the song links.
  let imageInput = Arrimage.value;
  let songInput = ArrsongName.value;
  let artistInput = Arrartist.value;
  let linkInput = ArrsongLink.value;

  // task 10: use `.push()` to add each input value to the correct array.
  Arrimage.push(imageInput);
  ArrsongName.push(songInput);
  Arrartist.push(artistInput);
  ArrsongLink.push(linkInput);
}




/******** this function empties the display divs each time the button is clicked so that your playlist does not repeatedly add the data too many times. Where should this function be placed???********/
function emptyDisplay() {
  displayImage.innerHTML = "";
  displaySong.innerHTML = "";
  displayArtist.innerHTML = "";
  displayLink.innerHTML = "";
}




function displaySongInfo() {

  // task 8: loop through your images array and display the images to your songs in the correct div. Create three more loops. One for the song names, one for the artists, and a last one for the song links.
  // for (let i=0; i<Arrimage.length; i++) {
  //   displayimage.insertAdjacentHTML(`beforeend`, `<p><img src=${Arrimage[i]}</p>`);
  // }

  Arrimage.forEach(images => {   
    displayimage.insertAdjacentHTML(`beforeend`, `<p><img src=${images}</p>`);
  });

  // for (let i=0; i<ArrsongName.length; i++) {
  //   displaysong.insertAdjacentHTML(`beforeend`, `<p><img src=${ArrsongName[i]}</p>`);
  // }

  ArrsongName.forEach(songs => {
    displaysong.insertAdjacentHTML(`beforeend`, `<p><img src=${songs}</p>`);
  });

  // for (let i=0; i<Arrartist.length; i++) {
  //   displayartist.insertAdjacentHTML(`beforeend`, `<p><img src=${Arrartist[i]}</p>`);
  // }

  Arrartist.forEach(artists => {
    displayartist.insertAdjacentHTML(`beforeend`, `<p><img src=${artists}</p>`);
  });

  // for (let i=0; i<ArrlinkName.length; i++) {
  //   displaylink.insertAdjacentHTML(`beforeend`, `<p><img src=${ArrlinkName[i]}</p>`);
  // }

  ArrlinkName.forEach(links => {
    displaylink.insertAdjacentHTML(`beforeend`, `<p><img src=${links}</p>`);
  });

}





// click event to add and display songs
add.onclick = function() {
  addSongInfo();
  displaySongInfo();
};

// function call to display stored songs
displaySongInfo();
