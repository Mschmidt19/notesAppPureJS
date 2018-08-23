// var describe = require("../myTestFramework/testFunctions").describe;
// var it = require("../myTestFramework/testFunctions").it;
// var expect = require("../myTestFramework/testFunctions").expect;
// var Note = require("../src/note-model").Note;

constructorName("Note", function () {

  describe("noteText", function () {
    it("Returns the note's text", function () {
      myNote = new Note("This is my first note!");
      expect(myNote.noteText()).toBe("This is my first note!");
    })
  })
})
