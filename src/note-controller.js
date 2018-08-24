(function(exports) {
  'use strict'

  // Should I write anything up here??

  function NoteController (noteList) {
    this.noteList = noteList;
    this.noteListView = new NoteListView(this.noteList);
    this.appDiv = document.getElementById('app');
  }

  NoteController.prototype.type = function () {
    return 'NoteController'
  }

  NoteController.prototype.insertHTML = function () {
    this.appDiv.innerHTML = this.noteListView.noteListHTML();
  }

  // NoteController.prototype.getNoteIDFromURL = function (location) {
  //   return location.split('#')[1].split('notes/')[1]
  // }
  //
  // NoteController.prototype.getShowNoteTarget = function (number) {
  //   return controller.noteList.allNotes()[number - 1]
  // }
  //
  // NoteController.prototype.showNote = function (note) {
  //   var snv = new SingleNoteView(note)
  //   this.appDiv.innerHTML = snv.noteTextAsDiv();
  // }
  //
  // NoteController.prototype.showNoteForCurrentPage = function () {
  //   this.showNote(this.getShowNoteTarget(this.getNoteIDFromURL(window.location.href)))
  // }
  //
  // NoteController.prototype.makeURLChangeShowNoteForCurrentPage = function () {
  //   window.addEventListener("hashchange", this.showNoteForCurrentPage)
  // }

  exports.NoteController = NoteController;
})(this);

// list = new NoteList;
// list.createNote("This is a very long note just because I'm rude");
// list.createNote("Blahalahjshdlsjdfk");
// list.createNote("Hello world!");
// list.createNote("I like coffee");
// controller = new NoteController(list);
// controller.insertHTML();
// controller.makeURLChangeShowNoteForCurrentPage();
