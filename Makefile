deploy:
	gh-pages -d _site

build:
	eleventy --formats=html,css,js,svg,jpg,png

dev:
	eleventy --serve --formats=html,css,js,svg,jpg,png
