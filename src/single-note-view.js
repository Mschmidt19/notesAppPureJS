(function (exports) {
  function SingleNoteView (note) {
    this.note = note
  }

  SingleNoteView.prototype.type = function () {
    return 'SingleNoteView'
  }

  SingleNoteView.prototype.noteTextAsDiv = function () {
    return `<div>${this.note.noteText()}</div>`
  }

  exports.SingleNoteView = SingleNoteView
})(this)
