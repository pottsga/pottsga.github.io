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

<p id="timeToRead"><em>Estimated time to read:</em> </p>

<p><a href="/rss.xml">RSS Feed</a></p>

<article id="content" class="mt-5">
  {{content | safe}}
</article>

<script src="/static/js/includes/post.js"></script>
