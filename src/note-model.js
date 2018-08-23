(function(exports) {
  'use strict'

  function Note (text) {
    var text = text;

    function noteText () {
      return text;
    };

    return {
      noteText
    }
  }

  exports.Note = Note;
})(this);
