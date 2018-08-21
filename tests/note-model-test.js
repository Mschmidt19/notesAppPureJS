var describe = require("../myTestFramework/testFunctions").describe;
var it = require("../myTestFramework/testFunctions").it;
var expect = require("../myTestFramework/testFunctions").expect;
var Note = require("../src/note-model").Note;

describe("Note", function () {

  describe("Upon instantiation", function () {
    it("Sets this.text to the string passed", function () {
      myNote = new Note("This is my first note!");
      expect(myNote.text).toBe("This is my first note!");
    })
  })

  describe("noteText", function () {
    it("Returns the note's text", function () {
      myNote = new Note("This is my first note!");
      expect(myNote.noteText()).toBe("This is my first note!");
    })
  })
})
