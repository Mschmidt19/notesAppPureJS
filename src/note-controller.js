(function(exports) {
  'use strict'

  function NoteController (noteList) {
    this.noteList = noteList;
    this.noteList.createNote("Favourite drink: seltzer");
    this.noteListView = new NoteListView(this.noteList);
  }

  NoteController.prototype.insertHTML = function () {
    var appDiv = document.getElementById('app');
    appDiv.innerHTML = this.noteListView.noteListHTML();
  };

  exports.NoteController = NoteController;
})(this);
