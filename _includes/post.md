---json
{
"layout": "layout.html",
"permalink": "/posts/{{ page.date|date: '%m-%d-%Y' }}/{{title|slug}}.html"
}
---

# {{title}}

_Written on_ {{page.date | date: "%m/%d/%Y %I:%M %p"}}

_Written by_ [Greg Potts](mailto:pottsga@gmail.com)

{% if tags %}
Tags: _#{{ tags | sort | join: ', #' }}_
{% endif %}

<article class="mt-5">
  {{content | safe}}
</article>

