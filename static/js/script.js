hljs.initHighlightingOnLoad();

console.log("You're being watched...")

function addRequiredClassToLabels() {
  var requiredInputSelectTextareas = document.querySelectorAll(
    'input[required]:not([type="checkbox"]),select[required],textarea[required]'
  );

  for (var i = 0; i < requiredInputSelectTextareas.length; i++) {
    var requiredInputSelectTextarea = requiredInputSelectTextareas[i];
    var parent = requiredInputSelectTextarea.parentElement;
    var label = parent.querySelector('label');

    if (label !== null) {
      label.classList.add('required');
    }
  }
}


addRequiredClassToLabels();
