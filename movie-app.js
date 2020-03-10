let movieList = [];

$('form').on("submit", (evt) => {
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

  let newMovie = new MovieRating($title, $rating);
  movieList.push(newMovie);
  $("#submitted-ratings").append(newMovie.createMovie());
})

$('.sort-alph').on("click", () => {
  console.log("successful click;");
  console.log(movieList);
  movieList.sort((a,b) => {
    (a.title > b.title ? 1 : -1);
    console.log(movieList);
  });
  redrawDOM();
});

function redrawDOM() {
  $('#submitted-ratings').empty();
  for (let movie of movieList) {
    $('#submitted-ratings').append(movie.createMovie());
  }
};

class MovieRating {
  constructor(title, rating) {
    this.title = title;
    this.rating = rating;
  }

  createMovie() {
    let $titleDiv = $('<div>').addClass('title').text(this.title);
    let $movieDiv = $('<div>').addClass('movie').text(this.rating);
    let $movieRatingDiv = $('<div>').addClass('movie-rating').append($titleDiv, $movieDiv);

    $movieRatingDiv.on("click", (evt) => {
      $(evt.target).parent().remove();
    });
    return $movieRatingDiv;
  }
}