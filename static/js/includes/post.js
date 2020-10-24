/*
 * Add the "Estimated Time To Read" minutes to the article. This estimation is
 * calculated on the basis that most adults can read x words per minute, as defined
 * by the WORDS_PER_MINUTE constant. Round the words to DECIMAL_PLACES constant.
 */
function addTimeToReadToArticle() {
  var WORDS_PER_MINUTE = 100
  var DECIMAL_PLACES = 1

  var timeToRead = document.querySelector("#timeToRead"); // time to read element
  var content = document.querySelector("#content"); // all of the article's text content

  var words = content.textContent.split(" "); // length of content
  var numberOfWords = words.length;
  var readTime = (numberOfWords / WORDS_PER_MINUTE).toFixed(DECIMAL_PLACES);

  timeToRead.append(readTime + " minutes.");
}

addTimeToReadToArticle();
