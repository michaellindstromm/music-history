// Appending songs to DOM used to be here, but now version 4 is going to do this through a JSON file.

// Music History Part 3 with Views and adding songs to the list

let indexLink = document.getElementById("link-home");
let addLink = document.getElementById("link-add");
let homeSection = document.getElementById("home-view");
let addSection = document.getElementById("add-view");

indexLink.addEventListener("click", function(e) {
  homeSection.classList.remove("hidden");
	homeSection.classList.add("visible");

	addSection.classList.remove("visible");
	addSection.classList.add("hidden");
})

addLink.addEventListener("click", function(e) {
	homeSection.classList.remove("visible");
	homeSection.classList.add("hidden");

	addSection.classList.remove("hidden");
  addSection.classList.add("visible");
})

// The ability to add songs used to be here, but now this will also be done through JSON file
function getSongs1(songs) {
	let songS = songs.songs; //function takes JSON object and loops through for loop and puts data into appropriate arrays
	let songTitlesArr = [];
	let albumTitlesArr = [];
	let artistNamesArr = [];
	for (var i = 0; i < songS.length; i++) {
		let thisSong = songS[i];
		songTitlesArr.push(thisSong.title);

		albumTitlesArr.push(thisSong.album);

		artistNamesArr.push(thisSong.artist);
	}

	//***************************************
	//***************************************

	let postArea = document.getElementById("songInfo");
	let titleHeading;
	let artistHeading;
	let albumHeading;
	for (var i = 0; i < songS.length; i++) {

    //Create div to hold each song's info

    let songDiv = document.createElement("div");
    songDiv.id = `songDiv${i+1}`
    songDiv.classList.add("thisSong");

		//Create heading with song Titles

		let h3Title = document.createElement("h3");
		titleHeading = songTitlesArr[i];
		console.log(titleHeading);
    h3Title.id = "thisSongTitle"
		h3Title.innerHTML = titleHeading;
		songDiv.appendChild(h3Title);

		//Create heading with artist

		let h6Artist = document.createElement("h6");
		artistHeading = artistNamesArr[i];
		console.log(artistHeading);
    h6Artist.id = "thisSongArtist"
		h6Artist.innerHTML = "Artist: " + `<span>${artistHeading}</span>`;
		songDiv.appendChild(h6Artist);

		//Create heading with album

		let h6Album = document.createElement("h6");
		albumHeading = albumTitlesArr[i];
		console.log(albumHeading);
    h6Album.id = "thisSongAlbum"
		h6Album.innerHTML = "Album: " + `<span>${albumHeading}</span>`;
		songDiv.appendChild(h6Album);

    //Create delete button for each song div

    let deleteButton = document.createElement("button");
    deleteButton.id = `thisSongDelete${i+1}`;
    deleteButton.classList.add = "deleteButton"
    deleteButton.innerHTML = "Delete";
    songDiv.appendChild(deleteButton);
    postArea.appendChild(songDiv);

    document.getElementById(`thisSongDelete${i+1}`).addEventListener("click", function(e) {
      postArea.removeChild(songDiv);
    })
	}
  addMore();
}
let moreLink;
function addMore(){
  let postArea = document.getElementById("songInfo");
  moreLink = document.createElement("A");
  moreLink.id = "moreLink";
  moreLink.innerHTML = "More";
  moreLink.href = "#";
  postArea.appendChild(moreLink);
};

function getSongs2(songs){
  let index = 5;
  moreLink.addEventListener("click", function(e){
    let songS = songs.songs; //function takes JSON object and loops through for loop and puts data into appropriate arrays
  	let songTitlesArr = [];
  	let albumTitlesArr = [];
  	let artistNamesArr = [];
  	for (var i = 0; i < songS.length; i++) {
  		let thisSong = songS[i];
  		songTitlesArr.push(thisSong.title);

  		albumTitlesArr.push(thisSong.album);

  		artistNamesArr.push(thisSong.artist);
  	}

  	//***************************************
  	//***************************************

  	let postArea = document.getElementById("songInfo");
  	let titleHeading;
  	let artistHeading;
  	let albumHeading;
  	for (var i = 0; i < songS.length; i++) {

      //Create div to hold each song's info

      let songDiv = document.createElement("div");
      songDiv.id = `songDiv${index}`
      songDiv.classList.add("thisSong");

  		//Create heading with song Titles

  		let h3Title = document.createElement("h3");
  		titleHeading = songTitlesArr[i];
  		console.log(titleHeading);
      h3Title.id = "thisSongTitle"
  		h3Title.innerHTML = titleHeading;
  		songDiv.appendChild(h3Title);

  		//Create heading with artist

  		let h6Artist = document.createElement("h6");
  		artistHeading = artistNamesArr[i];
  		console.log(artistHeading);
      h6Artist.id = "thisSongArtist"
  		h6Artist.innerHTML = "Artist: " + `<span>${artistHeading}</span>`;
  		songDiv.appendChild(h6Artist);

  		//Create heading with album

  		let h6Album = document.createElement("h6");
  		albumHeading = albumTitlesArr[i];
  		console.log(albumHeading);
      h6Album.id = "thisSongAlbum"
  		h6Album.innerHTML = "Album: " + `<span>${albumHeading}</span>`;
  		songDiv.appendChild(h6Album);

      //Create delete button for each song div

      let deleteButton = document.createElement("button");
      deleteButton.id = `thisSongDelete${index}`;
      deleteButton.classList.add = "deleteButton"
      deleteButton.innerHTML = "Delete";
      songDiv.appendChild(deleteButton);
      postArea.insertBefore(songDiv, moreLink);

      document.getElementById(`thisSongDelete${index}`).addEventListener("click", function(e) {
        postArea.removeChild(songDiv);
      })
      index++;
  	}
    postArea.removeChild(moreLink);
  })
}


Songs1.loadSongs1(getSongs1);
Songs2.loadSongs2(getSongs2);
