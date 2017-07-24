let Songs2 = (function(){
  let songs = [];
  return {
    loadSongs2: function(invokeCallback) {
      let myR = new XMLHttpRequest();
      myR.addEventListener("load", function() {
        if (myR.readyState === 4 && myR.status === 200){
          songs = JSON.parse(this.responseText);
          getSongs2(songs);
        } else {
          console.log(myR.statusText, myR.status);
        }

      })
      myR.open("GET", "songs2.JSON");
      myR.send();
    }
  }
})();
