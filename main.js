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

console.log(goodSongs);

for (var j = 0; j < goodSongs.length; j++) {
  document.getElementById("songInfo").innerHTML += `<p class="song">${goodSongs[j]}</p>`;
}
