constructorName("SingleNoteView", function () {

  describe("Upon instantiation", function () {
    it("Accepts a note-model as an argument and assigns it to this.note", function () {
      note = new Note("Hello");
      singleNoteView = new SingleNoteView(note);
      expect(singleNoteView.note).toBe(note);
    })
  })

  describe("noteTextAsDiv", function () {
    it("Returns this.note's text wrapped in a div", function () {
      myNote = new Note("Hello there")
      mySingleNoteView = new SingleNoteView(myNote)
      expected = "<div>Hello there</div>"
      expect(mySingleNoteView.noteTextAsDiv()).toBe(expected)
    })
  })

})
