let songs = [];
let goodSongs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

songs.unshift("Johnny B. Goode - by Chuck Berry on the album Johnny B. Goode")
songs.push("The Real Slim Shady - by Eminem on the album The Marshall Mathers LP")

for (let i = 0; i < songs.length; i++) {
	let newSongs = songs[i];
  newSongs = newSongs.replace(/\*/g, "");
	newSongs = newSongs.replace(/\@/g, "");
	newSongs = newSongs.replace(/\(/g, "");
	newSongs = newSongs.replace(/\!/g, "");
	newSongs = newSongs.replace(/\>/g, "-");

	goodSongs.push(newSongs)
}


for (var j = 0; j < goodSongs.length; j++) {
  document.getElementById("songInfo").innerHTML += `<p class="song">${goodSongs[j]}</p>`;
}

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

let songTitle = document.getElementById("songTitleInput");
let artist = document.getElementById("artistInput");
let albumTitle = document.getElementById("albumInput");
let addButton = document.getElementById("addButton");

let addSongToGoodSongs = (e) => {
	let userNewSong = songTitle.value + " - by " + artist.value + " on the album " + albumTitle.value;
	goodSongs.push(userNewSong);
	console.log(goodSongs);
	document.getElementById("songInfo").innerHTML += `<p class="song">${goodSongs[goodSongs.length - 1]}</p>`;
}

addButton.addEventListener("click", addSongToGoodSongs)
