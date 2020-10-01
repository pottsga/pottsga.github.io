deploy:
	gh-pages -d _site

build:
	eleventy

dev:
	eleventy --serve
