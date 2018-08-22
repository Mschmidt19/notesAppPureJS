(function(exports) {
  'use strict'

  // var NoteList = require("../src/note-list-model").NoteList;

  function NoteListView (noteList = new NoteList) {
    this.list = noteList;
  }

  NoteListView.prototype.noteListHTML = function () {
    // Should I refactor using array.join?
    var returnString = "<ul>"
    for (var i = 0; i < this.list.allNotes().length; i++) {
      returnString += `<li><div>${this.list.allNotes()[i].noteText()}</div></li>`
    }
    returnString += "</ul>"
    return returnString;
  }

  exports.NoteListView = NoteListView;
})(this);
