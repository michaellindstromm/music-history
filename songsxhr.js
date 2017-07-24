let Songs = (function(){
  let songs = [];
  return {
    loadSongs: function(invokeCallback) {
      let myR = new XMLHttpRequest();
      myR.addEventListener("load", function() {
        if (myR.readyState === 4 && myR.status === 200){
          songs = JSON.parse(this.responseText);
          getSongs(songs);
        } else {
          console.log(myR.statusText, myR.status);
        }

      })
      myR.open("GET", "songs.JSON");
      myR.send();
    }
  }
})();
