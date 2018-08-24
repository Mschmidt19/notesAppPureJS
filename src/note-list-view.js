(function(exports) {
  'use strict'

  // var NoteList = require("../src/note-list-model").NoteList;

  function NoteListView (noteList = new NoteList) {
    this.list = noteList;
  }

  NoteListView.prototype.type = function () {
    return 'NoteListView'
  };

  NoteListView.prototype.noteListHTML = function () {
    // Should I refactor using array.join?
    var returnString = "<ul>"
    for (var i = 0; i < this.list.allNotes().length; i++) {
      if(this.list.allNotes()[i].noteText().length > 20) {
        returnString += `<li><div id='${i}'><a href='#notes/${i + 1}'>${this.list.allNotes()[i].noteText().substring(0,20)}...</a></div></li>`
      } else {
        returnString += `<li><div id='${i}'><a href='#notes/${i + 1}'>${this.list.allNotes()[i].noteText()}</a></div></li>`
      }
    }
    returnString += "</ul>"
    return returnString;
  }

  exports.NoteListView = NoteListView;
})(this);
