$('button.submit').on("click", (evt) => {
  evt.preventDefault();
  let $title = $('input:first-child').val();
  let $rating = $('input:nth-child(2)').val();
  
  if ($title.length < 2) {
    alert("Please enter a valid movie title of at least 2 characters.");
    return;
  }

  if ($rating > 10 || $rating < 0 || !isFinite($rating)) {
    alert("Please enter a valid rating between O and 10.");
    return;
  }

  let $titleDiv = $('<div>').addClass('title').text($title);
  let $movieDiv = $('<div>').addClass('movie').text($rating);
  let $movieRatingDiv = $('<div>').addClass('movie-rating').append($titleDiv, $movieDiv);

  $("#submitted-ratings").append($movieRatingDiv);

  $('div.movie-rating').on("click", (evt) => {
    $(evt.target).parent().remove();
  });
})


// $(function sort () {
//   $('#sort-alph').on("click", () =>)
// });