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
let displayImage = document.querySelector(".display-image");
let displaySong = document.querySelector(".display-song");
let displayArtist = document.querySelector(".display-artist");
let displayLink = document.querySelector(".display-link");



// task 7: create and populate an array to store your image urls. Create three more arrays. One to store your song names, one for the artists, and a last one for the song links.
// let Arrimage = ["https://i.scdn.co/image/ab67616d0000b273ae2349de11cfce49ff626c21",
//  "https://i.ytimg.com/vi/WZiSPQBY3d8/maxresdefault.jpg", 
//  "https://i.ytimg.com/vi/uRqGY42A0FE/sddefault.jpg", "https://i.scdn.co/image/ab67616d0000b273037ee6eb1915d9187f727f6d"];
// let ArrsongName = ['曾经你说', '四季与你', '把孤独当做晚餐', '所念皆星河'];
// let Arrartist = ['赵乃吉', '程响', '井胧'，'梦琪'];
// let ArrsongLink = ["https://www.youtube.com/watch?v=ogP1GAFuD4E",
//             "https://www.youtube.com/watch?v=WZiSPQBY3d8",
//             "https://www.youtube.com/watch?v=uRqGY42A0FE",
//             "https://www.youtube.com/watch?v=JubGFVWadc8"
//            ];

//REFACTOR ARRAYS DAY 
// task 11: comment out the arrays data.
// task 12: create an object for each of your songs.
let cjns = {
  obname: "曾经你说",
  obartist: "赵乃吉",
  obimage: "https://i.scdn.co/image/ab67616d0000b273ae2349de11cfce49ff626c21",
  obsonglink: "https://www.youtube.com/watch?v=ogP1GAFuD4E"
};

let sjyn = {
  obname: "四季与你",
  obartist: "程响",
  obimage: "https://i.ytimg.com/vi/WZiSPQBY3d8/maxresdefault.jpg",
  obsonglink: "https://www.youtube.com/watch?v=WZiSPQBY3d8"
};

let bgddzwc = {
  obname: "把孤独当做晚餐",
  obartist: "井胧",
  obimage: "https://i.ytimg.com/vi/uRqGY42A0FE/sddefault.jpg",
  obsonglink: "https://www.youtube.com/watch?v=uRqGY42A0FE"
};

let snjxh = {
  obname: "所念皆星河",
  obartist: "梦琪",
  obimage: "https://i.scdn.co/image/ab67616d0000b273037ee6eb1915d9187f727f6d",
  obsonglink: "https://www.youtube.com/watch?v=JubGFVWadc8"
};
// task 13: inside each object, add key/value pairs to store the image url, song name, artist, and song link.
// task 14: create an array that stores all of the objects.
let playlist = [cjns, sjyn, bgddzwc, snjxh];


// playlist.push({
//   obname: "曾经你说",
//   obartist: "赵乃吉",
//   obimage: "https://i.scdn.co/image/ab67616d0000b273ae2349de11cfce49ff626c21",
//   obsonglink: "https://www.youtube.com/watch?v=ogP1GAFuD4E"
// });


//REFACTOR LOOPS DAY 
// task 15: update your `addSongInfo` function so the input values are saved in as values in a new object.
// task 16: update your `.push()` so the input object is added to your array of objects.
// task 17: update your loops based on your new array of objects.





function addSongInfo() {

  // task 9: declare a variable to save the user input of the image url. Declare three more variables that save user input: One for the song names, one for the artists, and a last one for the song links.
  let imageInput = image.value;
  let songInput = songName.value;
  let artistInput = artist.value;
  let linkInput = songLink.value;

  // task 10: use `.push()` to add each input value to the correct array.
  // Arrimage.push(imageInput);
  // ArrsongName.push(songInput);
  // Arrartist.push(artistInput);
  // ArrsongLink.push(linkInput);

  let newsong = {
    obname: songInput,
    obartist: artistInput,
    obimage: imageInput,
    obsonglink: linkInput,

    
  };
  playlist.push(newsong);
};




/******** this function empties the display divs each time the button is clicked so that your playlist does not repeatedly add the data too many times. Where should this function be placed???********/
function emptyDisplay() {
  displayImage.innerHTML = "";
  displaySong.innerHTML = "";
  displayArtist.innerHTML = "";
  displayLink.innerHTML = "";
}




function displaySongInfo() {

  // task 8: loop through your images array and display the images to your songs in the correct div. Create three more loops. One for the song names, one for the artists, and a last one for the song links.

  playlist.forEach(function(item) {
    displaySong.insertAdjacentHTML('beforeend', `<p>${item.obname}</p>`)
    displayArtist.insertAdjacentHTML('beforeend', `<p>${item.obartist}</p>`)
    displayImage.insertAdjacentHTML('beforeend', `<p><img src=${item.obimage}></p>`)
    displayLink.insertAdjacentHTML('beforeend', `<p><a href=${item.obsonglink}></a></p>`)
  });
  // for (let i=0; i<Arrimage.length; i++) {
  //   displayimage.insertAdjacentHTML(`beforeend`, `<p><img src=${Arrimage[i]}</p>`);
  // }

  // Arrimage.forEach(images => {   
  //   displayImage.insertAdjacentHTML('beforeend', `<img src=${images}>`);
  // });

  // // for (let i=0; i<ArrsongName.length; i++) {
  // //   displaysong.insertAdjacentHTML(`beforeend`, `<p><img src=${ArrsongName[i]}</p>`);
  // // }

  // ArrsongName.forEach(songs => {
  //   displaySong.insertAdjacentHTML('beforeend', `<p>${songs}</p>`);
  // });

  // // for (let i=0; i<Arrartist.length; i++) {
  // //   displayartist.insertAdjacentHTML(`beforeend`, `<p><img src=${Arrartist[i]}</p>`);
  // // }

  // Arrartist.forEach(artists => {
  //   displayArtist.insertAdjacentHTML('beforeend', `<p>${artists}</p>`);
  // });

  // // for (let i=0; i<ArrlinkName.length; i++) {
  // //   displaylink.insertAdjacentHTML(`beforeend`, `<p><img src=${ArrlinkName[i]}</p>`);
  // // }

  // ArrsongLink.forEach(links => {
  //   displayLink.insertAdjacentHTML('beforeend', `<p>${links}</p>`);
  // });

}





// click event to add and display songs
add.onclick = function() {
  addSongInfo();
  displaySongInfo();
};

// function call to display stored songs
displaySongInfo();
