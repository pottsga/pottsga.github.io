---
layout: post.md
title: "Automatically Add Asterisk to Required Fields"
active: posts

date: 2021-01-12T19:55:00Z
description: How to automatically add an asterisk to a required input, textarea, or select element. 
tags: [ JS, CSS, Required, Input, Select, Textarea, Automation ]
---

## Summary

It is ideal for required `<input>`, `<textarea></textarea>`, and `<select></select>` elements to have styling associated with them that shows that they are required visually. This is usually done in the form of an asterisk next to the end of the label's text. This can, and should, be done automatically so the developer does not have to think about it while developing the form. To do this, some `CSS` and `JS` is needed to be injected, which should be applied globally on some top-level global files.

### CSS

```css
/*
 * Give any label with a required class a salmon colored "*"
 */
label.required::after {
  color: salmon;
  content: " *";
}
```

### JS

```js
/**
 * Add a required class to labels whose inputs, selects, or textareas
 * have a required attribute on them
 */
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
addRequiredClassToLabels(); // call it
```

This simple code allows any `<input>`, `<textarea></textarea>`, and `<select></select>` with a sibling `<label>` element within a parent container to have a red asterisk added to it.

### Result

The following are the results of applying the CSS and JS above.

<div class="form-group my-2">
  <label for="required_field1">Required Input</label>
  <input type="text" class="form-control" name="required_field1" id="required_field1" required>
</div>
<div class="form-group my-2">
<label for="required_field2">Required Select</label>
<select id="required_field2" name="required_field2" class="form-control" required>
  <option value=""></option>
  <option value="lorem">Lorem</option>
  <option value="ipsum">Ipsum</option>
</select>
</div>
<div class="form-group my-2">
<label for="required_field3">Required Textarea</label>
<textarea id="required_field3" name="required_field3" rows="4" required class="form-control"></textarea>
</div>
