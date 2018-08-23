(function(exports) {
  'use strict'

  function NoteController (noteList) {
    this.noteList = noteList;
    this.noteList.createNote("Favourite drink: seltzer");
    this.noteListView = new NoteListView(this.noteList);
    this.appDiv = document.getElementById('app');
  }

  NoteController.prototype.insertHTML = function () {
    this.appDiv.innerHTML = this.noteListView.noteListHTML();
  };

  exports.NoteController = NoteController;
})(this);
