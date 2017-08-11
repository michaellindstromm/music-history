(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
// Appending songs to DOM used to be here, but now version 4 is going to do this through a JSON file.

// Music History Part 3 with Views and adding songs to the list

let song1JS = require('./songs1xhr.js');


$('nav li a').click((e) => {
  let thisLink = e.target;
  if ($(thisLink).prop("id") === "link-home") {

    $('#home-view').removeClass("hidden");
    $('#home-view').addClass("visible");

    $('#add-view').removeClass("visible");
    $('#add-view').addClass("hidden");

  } else if ($(thisLink).prop("id") === "link-add") {

    $('#add-view').removeClass("hidden");
    $('#add-view').addClass("visible");

    $('#home-view').removeClass("visible");
    $('#home-view').addClass("hidden");

  } else if ($(thisLink).prop("id") === "link-profile") {
    console.log($(thisLink).html());
  }
});

// let indexLink = document.getElementById("link-home");
// let addLink = document.getElementById("link-add");
// let homeSection = document.getElementById("home-view");
// let addSection = document.getElementById("add-view");
//
// let dom = {};
//
// indexLink.addEventListener("click", function(e) {
//   homeSection.classList.remove("hidden");
// 	homeSection.classList.add("visible");
//
// 	addSection.classList.remove("visible");
// 	addSection.classList.add("hidden");
// });
//
// addLink.addEventListener("click", function(e) {
// 	homeSection.classList.remove("visible");
// 	homeSection.classList.add("hidden");
//
// 	addSection.classList.remove("hidden");
//   addSection.classList.add("visible");
// });
//
// // The ability to add songs used to be here, but now this will also be done through JSON file
// dom.getSongs1 = (songs) => {
// 	let songS = songs.songs; //function takes JSON object and loops through for loop and puts data into appropriate arrays
// 	let songTitlesArr = [];
// 	let albumTitlesArr = [];
// 	let artistNamesArr = [];
// 	for (var i = 0; i < songS.length; i++) {
// 		let thisSong = songS[i];
// 		songTitlesArr.push(thisSong.title);
//
// 		albumTitlesArr.push(thisSong.album);
//
// 		artistNamesArr.push(thisSong.artist);
// 	}
//
// 	//***************************************
// 	//***************************************
//
// 	let postArea = document.getElementById("songInfo");
// 	let titleHeading;
// 	let artistHeading;
// 	let albumHeading;
// 	for (var h = 0; h < songS.length; h++) {
//
//     //Create div to hold each song's info
//
//     let songDiv = document.createElement("div");
//     songDiv.id = `songDiv${h+1}`;
//     songDiv.classList.add("thisSong");
//
// 		//Create heading with song Titles
//
// 		let h3Title = document.createElement("h3");
// 		titleHeading = songTitlesArr[h];
// 		console.log(titleHeading);
//     h3Title.id = "thisSongTitle";
// 		h3Title.innerHTML = titleHeading;
// 		songDiv.appendChild(h3Title);
//
// 		//Create heading with artist
//
// 		let h6Artist = document.createElement("h6");
// 		artistHeading = artistNamesArr[h];
// 		console.log(artistHeading);
//     h6Artist.id = "thisSongArtist";
// 		h6Artist.innerHTML = "Artist: " + `<span>${artistHeading}</span>`;
// 		songDiv.appendChild(h6Artist);
//
// 		//Create heading with album
//
// 		let h6Album = document.createElement("h6");
// 		albumHeading = albumTitlesArr[h];
// 		console.log(albumHeading);
//     h6Album.id = "thisSongAlbum";
// 		h6Album.innerHTML = "Album: " + `<span>${albumHeading}</span>`;
// 		songDiv.appendChild(h6Album);
//
//     //Create delete button for each song div
//
//     let deleteButton = document.createElement("button");
//     deleteButton.id = `thisSongDelete${h+1}`;
//     deleteButton.classList.add = "deleteButton";
//     deleteButton.innerHTML = "Delete";
//     songDiv.appendChild(deleteButton);
//     postArea.appendChild(songDiv);
//
//     document.getElementById(`thisSongDelete${h+1}`).addEventListener("click", function(e) {
//       postArea.removeChild(songDiv);
//     });
// 	}
//   addMore();
// }
// let moreLink;
// function addMore(){
//   let postArea = document.getElementById("songInfo");
//   moreLink = document.createElement("A");
//   moreLink.id = "moreLink";
//   moreLink.innerHTML = "More";
//   moreLink.href = "#";
//   postArea.appendChild(moreLink);
// }
//
// dom.getSongs2 = (songs) => {
//   let index = 5;
//   moreLink.addEventListener("click", function(e){
//     let songS = songs.songs; //function takes JSON object and loops through for loop and puts data into appropriate arrays
//   	let songTitlesArr = [];
//   	let albumTitlesArr = [];
//   	let artistNamesArr = [];
//   	for (var i = 0; i < songS.length; i++) {
//   		let thisSong = songS[i];
//   		songTitlesArr.push(thisSong.title);
//
//   		albumTitlesArr.push(thisSong.album);
//
//   		artistNamesArr.push(thisSong.artist);
//   	}
//
//   	//***************************************
//   	//***************************************
//
//   	let postArea = document.getElementById("songInfo");
//   	let titleHeading;
//   	let artistHeading;
//   	let albumHeading;
//   	for (var p = 0; p < songS.length; p++) {
//
//       //Create div to hold each song's info
//
//       let songDiv = document.createElement("div");
//       songDiv.id = `songDiv${index}`;
//       songDiv.classList.add("thisSong");
//
//   		//Create heading with song Titles
//
//   		let h3Title = document.createElement("h3");
//   		titleHeading = songTitlesArr[p];
//   		console.log(titleHeading);
//       h3Title.id = "thisSongTitle";
//   		h3Title.innerHTML = titleHeading;
//   		songDiv.appendChild(h3Title);
//
//   		//Create heading with artist
//
//   		let h6Artist = document.createElement("h6");
//   		artistHeading = artistNamesArr[p];
//   		console.log(artistHeading);
//       h6Artist.id = "thisSongArtist";
//   		h6Artist.innerHTML = "Artist: " + `<span>${artistHeading}</span>`;
//   		songDiv.appendChild(h6Artist);
//
//   		//Create heading with album
//
//   		let h6Album = document.createElement("h6");
//   		albumHeading = albumTitlesArr[p];
//   		console.log(albumHeading);
//       h6Album.id = "thisSongAlbum";
//   		h6Album.innerHTML = "Album: " + `<span>${albumHeading}</span>`;
//   		songDiv.appendChild(h6Album);
//
//       //Create delete button for each song div
//
//       let deleteButton = document.createElement("button");
//       deleteButton.id = `thisSongDelete${index}`;
//       deleteButton.classList.add = "deleteButton";
//       deleteButton.innerHTML = "Delete";
//       songDiv.appendChild(deleteButton);
//       postArea.insertBefore(songDiv, moreLink);
//
//       document.getElementById(`thisSongDelete${index}`).addEventListener("click", function(e) {
//         postArea.removeChild(songDiv);
//       });
//       index++;
//   	}
//     postArea.removeChild(moreLink);
//   });
// }
//
// module.exports = dom;
// Songs1.loadSongs1(getSongs1);
// Songs2.loadSongs2(getSongs2);

},{"./songs1xhr.js":2}],2:[function(require,module,exports){
'use strict';

let data = [];

let song1 = {};

song1.getData = () => {
  return data;
};

song1.build = (songs) => {
  let songS = songs.songs; //function takes JSON object and loops through for loop and puts data into appropriate arrays
  console.log("songS", songS);
  $(songS).each((index, item) => {
    $('#songInfo').append(
      `<div id=songDiv${index+1} class=thisSong>
        <h3>${item.title}</h3>
        <h6>Artist: <span>${item.artist}</span></h6>
        <h6>Album: <span>${item.album}</span></h6>
        <button id=${index+1} class=deleteButton>Delete</button>
      </div>`);
  });

  $('button').click((e) => {
    let thisButton = e.target;
    $(thisButton).parent().remove();
  });

  // $('#songInfo').append(
  //   `<a href=# id=moreLink>More</a>`
  // );
};

$.ajax({
  url:"https://music-history-ecc0d.firebaseio.com/.json"
}).done(function(songData){
  song1.build(songData);
});

module.exports = song1;

	// let songTitlesArr = [];
	// let albumTitlesArr = [];
	// let artistNamesArr = [];
	// for (var i = 0; i < songS.length; i++) {
	// 	let thisSong = songS[i];
	// 	songTitlesArr.push(thisSong.title);
  //
	// 	albumTitlesArr.push(thisSong.album);
  //
	// 	artistNamesArr.push(thisSong.artist);
	// }
  //
	// //***************************************
	// //***************************************
  //
	// let $postArea = $('#songInfo');
	// let titleHeading;
	// let artistHeading;
	// let albumHeading;
	// for (var h = 0; h < songS.length; h++) {
  //
  //   //Create div to hold each song's info
  //
  //   let songDiv = document.createElement("div");
  //   songDiv.id = `songDiv${h+1}`;
  //   songDiv.classList.add("thisSong");
  //
	// 	//Create heading with song Titles
  //
	// 	let h3Title = document.createElement("h3");
	// 	titleHeading = songTitlesArr[h];
	// 	console.log(titleHeading);
  //   h3Title.id = "thisSongTitle";
	// 	h3Title.innerHTML = titleHeading;
	// 	songDiv.appendChild(h3Title);
  //
	// 	//Create heading with artist
  //
	// 	let h6Artist = document.createElement("h6");
	// 	artistHeading = artistNamesArr[h];
	// 	console.log(artistHeading);
  //   h6Artist.id = "thisSongArtist";
	// 	h6Artist.innerHTML = "Artist: " + `<span>${artistHeading}</span>`;
	// 	songDiv.appendChild(h6Artist);
  //
	// 	//Create heading with album
  //
	// 	let h6Album = document.createElement("h6");
	// 	albumHeading = albumTitlesArr[h];
	// 	console.log(albumHeading);
  //   h6Album.id = "thisSongAlbum";
	// 	h6Album.innerHTML = "Album: " + `<span>${albumHeading}</span>`;
	// 	songDiv.appendChild(h6Album);

    //Create delete button for each song div

    // let deleteButton = document.createElement("button");
    // deleteButton.id = `thisSongDelete${h+1}`;
    // deleteButton.classList.add = "deleteButton";
    // deleteButton.innerHTML = "Delete";
    // songDiv.appendChild(deleteButton);
    // postArea.appendChild(songDiv);
    //
    // document.getElementById(`thisSongDelete${h+1}`).addEventListener("click", function(e) {
    //   postArea.removeChild(songDiv);
    // });





// let Songs1 = (function(){
//   let songs = [];
//   return {
//     loadSongs1: function(invokeCallback) {
//       let myR = new XMLHttpRequest();
//       myR.addEventListener("load", function() {
//         if (myR.readyState === 4 && myR.status === 200){
//           songs = JSON.parse(this.responseText);
//           getSongs1(songs);
//         } else {
//           console.log(myR.statusText, myR.status);
//         }
//
//       });
//       myR.open("GET", "songs1.JSON");
//       myR.send();
//     }
//   };
// })();

},{}]},{},[1]);
