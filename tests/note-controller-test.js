constructorName("NoteController", function () {

  describe("Upon instantiation", function () {
    it("Does not throw error", function () {
      var list = new NoteList();
      expect(function() {controller = new NoteController(list)}).not().toThrowError();
    })
  })

  describe("insertHTML", function () {
    it("Sets the innerHTML of the div with ID 'app'", function () {
      var list = new NoteList();
      list.createNote("What's up?");
      var controller = new NoteController(list);
      var mockAppDiv = {
        innerHTML: ""
      }
      controller.appDiv = mockAppDiv;
      controller.insertHTML();
      expected = "<ul><li><div id='0'><a href='#notes/1'>What's up?</a></div></li></ul>"
      expect(controller.appDiv.innerHTML).toBe(expected)
    })
  })

  // describe("getNoteIDFromURL", function () {
  //   it("Retrieves an ID number from URL and returns a string in the form 'noteID'", function() {
  //     var list = new NoteList();
  //     var controller = new NoteController(list);
  //     var mockURL = "http://localhost:8080/#notes/5"
  //     expect(controller.getNoteIDFromURL(mockURL)).toBe("5")
  //   })
  // })
  //
  // describe("showNote", function () {
  //   it("Sets the inner HTML of the element with ID 'app' to a div with the note's text", function () {
  //     var list = new NoteList;
  //     list.createNote("My first note!")
  //     list.createNote("This is the note I want to retrieve")
  //     var controller = new NoteController(list);
  //     var mockAppDiv = {
  //       innerHTML: ""
  //     }
  //     controller.appDiv = mockAppDiv;
  //     controller.showNote(controller.noteList.allNotes()[1])
  //     expect(controller.appDiv.innerHTML).toBe("<div>This is the note I want to retrieve</div>")
  //   })
  // })
  //
  // describe("getShowNoteTarget", function () {
  //   it("Takes a note's ID and returns the note object associated with it", function () {
  //     var list = new NoteList;
  //     list.createNote("My first note!")
  //     list.createNote("This is the note I want to retrieve")
  //     var controller = new NoteController(list);
  //     expect(controller.getShowNoteTarget(2)).toBe(controller.noteList.allNotes()[1])
  //   })
  // })

  // This test works but only if I accept an argumnt so that I can mock the URL, which I don't want

  // describe ("showNoteForCurrentPage", function () {
  //   it("Sets the div with ID 'app''s inner HTML to the note associated with the current URL", function () {
  //     list = new NoteList;
  //     list.createNote("My first note!")
  //     list.createNote("This is the note I want to retrieve")
  //     controller = new NoteController(list);
  //     mockAppDiv = {
  //       innerHTML: ""
  //     };
  //     controller.appDiv = mockAppDiv;
  //     mockURL = "http://localhost:8080/#notes/2";
  //     controller.showNoteForCurrentPage(mockURL);
  //     expect(controller.appDiv.innerHTML).toBe("<div>This is the note I want to retrieve</div>")
  //   })
  // })

  //How do I mock an event listener?? Can't test for makeURLChaneShowNoteForCurrentPage

})
