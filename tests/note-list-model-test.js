// var describe = require("../myTestFramework/testFunctions").describe;
// var it = require("../myTestFramework/testFunctions").it;
// var expect = require("../myTestFramework/testFunctions").expect;
// var Note = require("../src/note-model").Note;
// var NoteList = require("../src/note-list-model.js").NoteList;

constructorName("NoteList", function () {

  describe("Upon instantiation", function () {
    it("Sets this.notes to an empty array", function () {
      myNoteList = new NoteList;
      expect(myNoteList.notes).toBeEmpty();
    })
  })

  // ARRAYS OF OBJECTS ARE NOT EQUAL
  describe("allNotes", function () {
    it("Returns an array of all stored notes", function () {
      myNoteList = new NoteList;
      myNoteList.createNote("Hello");
      expect(myNoteList.allNotes().length).toBe(1);
    })
  })

  describe("createNote", function () {
    it("Creates a new note with the text passed and stores it in this.notes", function () {
      myNoteList = new NoteList;
      myNoteList.createNote("I made and stored a note!");
      expect(myNoteList.notes.length).toBe(1);
      expect(myNoteList.notes[0].noteText()).toBe("I made and stored a note!");
    })
  })

})
