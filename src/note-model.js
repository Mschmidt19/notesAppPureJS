(function(exports) {
  'use strict'

  function Note (text) {
    var text = text;

    function noteText () {
      return text;
    };

    function type () {
      return 'Note'
    }

    return {
      noteText,
      type
    }
  }

  exports.Note = Note;
})(this);
