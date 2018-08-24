var list = new NoteList;
list.createNote("This is a very long note just because I'm rude");
list.createNote("Blahalahjshdlsjdfk");
list.createNote("Hello world!");
list.createNote("I like coffee");
var controller = new NoteController(list);
controller.insertHTML();

function getNoteIDFromURL(location) {
  return location.hash.split('#notes/')[1]
};

function showNote(note) {
  var snv = new SingleNoteView(note)
  controller.appDiv.innerHTML = snv.noteTextAsDiv();
}

function getShowNoteTarget(number) {
  return controller.noteList.allNotes()[number - 1]
}

function showNoteForCurrentPage() {
  showNote(getShowNoteTarget(getNoteIDFromURL(window.location)))
}

function makeURLChangeShowNoteForCurrentPage() {
  window.addEventListener("hashchange", showNoteForCurrentPage)
};

makeURLChangeShowNoteForCurrentPage()
