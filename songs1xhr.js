let Songs1 = (function(){
  let songs = [];
  return {
    loadSongs1: function(invokeCallback) {
      let myR = new XMLHttpRequest();
      myR.addEventListener("load", function() {
        if (myR.readyState === 4 && myR.status === 200){
          songs = JSON.parse(this.responseText);
          getSongs1(songs);
        } else {
          console.log(myR.statusText, myR.status);
        }

      })
      myR.open("GET", "songs1.JSON");
      myR.send();
    }
  }
})();
