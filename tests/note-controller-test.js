constructorName("NoteController", function () {

  describe("Upon instantiation", function () {
    it("Does not throw error", function () {
      list = new NoteList();
      expect(function() {controller = new NoteController(list)}).not().toThrowError();
    })
  })

  describe("insertHTML", function () {
    it("Sets the innerHTML of the div with ID 'app'", function () {
      list = new NoteList();
      controller = new NoteController(list);
      mockAppDiv = {
        innerHTML: ""
      }
      controller.appDiv = mockAppDiv;
      controller.insertHTML();
      expected = "<ul><li><div>Favourite drink: seltzer</div></li></ul>"
      expect(controller.appDiv.innerHTML).toBe(expected)
    })
  })

})
