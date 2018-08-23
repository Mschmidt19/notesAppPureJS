(function(exports) {
  'use strict'

  // var Note = require("../src/note-model").Note;

  function NoteList () {
    this.notes = [];
  }

  NoteList.prototype.type = function () {
    return 'NoteList'
  }

  NoteList.prototype.allNotes = function (text) {
    return this.notes;
  };

  NoteList.prototype.createNote = function (text) {
    var newNote = new Note(text);
    this.notes.push(newNote);
  };

  exports.NoteList = NoteList;
})(this);
