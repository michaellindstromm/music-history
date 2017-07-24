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
function getSongs(songs) {
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

		//Create heading with song Titles

		let h3Title = document.createElement("h3");
		titleHeading = songTitlesArr[i];
		console.log(titleHeading);
		h3Title.innerHTML = titleHeading;
		postArea.appendChild(h3Title);

		//Create heading with artist

		let h6Artist = document.createElement("h6");
		artistHeading = albumTitlesArr[i];
		console.log(artistHeading);
		h6Artist.innerHTML = artistHeading;
		postArea.appendChild(h6Artist);

		//Create heading with album

		let h6Album = document.createElement("h6");
		albumHeading = albumTitlesArr[i];
		console.log(albumHeading);
		h6Album.innerHTML = albumHeading;
		postArea.appendChild(h6Album);
	}

}
Songs.loadSongs(getSongs);
