// var describe = require("../myTestFramework/testFunctions").describe;
// var it = require("../myTestFramework/testFunctions").it;
// var expect = require("../myTestFramework/testFunctions").expect;
// var NoteList = require("../src/note-list-model.js").NoteList;
// var NoteListView = require("../src/note-list-view.js").NoteListView;

constructorName("NoteListView", function () {

  describe("Upon instantiation", function () {
    it("Can accept a NoteList as an argument", function () {
      myNoteList = new NoteList;
      myNoteListView = new NoteListView(myNoteList);
      expect(myNoteListView.list).toEqual(myNoteList);
    })
    it("Defaults this.list to an empty NoteList if no argument passed", function () {
      myNoteListView = new NoteListView;
      expect(myNoteListView.list.allNotes()).toBeEmpty();
    })
  })

  describe("noteListHTML", function () {
    it("Returns creates a string of HTML which is an unordered list of each note's text", function () {
      myNoteList = new NoteList;
      myNoteList.createNote("First note");
      myNoteListView = new NoteListView(myNoteList);
      expectedString = "<ul><li><div id='note0'><a href='#notes/0'>First note</a></div></li></ul>"
      expect(myNoteListView.noteListHTML()).toBe(expectedString);
    })
    it("Functions correctly when list has multiple notes", function () {
      myNoteList = new NoteList;
      myNoteList.createNote("First note");
      myNoteList.createNote("Second note here");
      myNoteList.createNote("Third");
      myNoteListView = new NoteListView(myNoteList);
      expectedString = "<ul><li><div id='note0'><a href='#notes/0'>First note</a></div></li><li><div id='note1'><a href='#notes/1'>Second note here</a></div></li><li><div id='note2'><a href='#notes/2'>Third</a></div></li></ul>"
      expect(myNoteListView.noteListHTML()).toBe(expectedString);
    })
    it("Functions correctly when list has no notes", function () {
      myNoteListView = new NoteListView();
      expectedString = "<ul></ul>"
      expect(myNoteListView.noteListHTML()).toBe(expectedString);
    })
    it("Only displays the first 20 characters of a long note", function () {
      myNoteList = new NoteList;
      myNoteList.createNote("This note has more than twenty characters")
      myNoteListView = new NoteListView(myNoteList);
      expectedString = "<ul><li><div id='note0'><a href='#notes/0'>This note has more t...</a></div></li></ul>"
      expect(myNoteListView.noteListHTML()).toBe(expectedString)
    })
  })
})
