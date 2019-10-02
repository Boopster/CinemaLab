const Cinema = function (films) {
  this.films = films;
};


Cinema.prototype.getFilmList = function(){
  const filmList = this.films.map((film)=>{
    return film.title;
  });
  return filmList;
}

Cinema.prototype.findFilmByTitle = function(filmTitle){
  const result = this.films.find((film) =>{
    return film.title === filmTitle;
  });
  return result;
  }

Cinema.prototype.filterByGenre = function(filmGenre){
  const result = this.films.filter((film)=>{
    return film.genre === filmGenre;
  });
  return result;
}

Cinema.prototype.checkYear = function(filmYear){
  const result = this.films.some((film)=>{
    return film.year === filmYear;
  });
  return result;
}

Cinema.prototype.checkRunTime = function(length){
  const result = this.films.every((film)=>{
    return film.length > length;
  });
  return result;
}

Cinema.prototype.totalRunTime = function(){
  const result = this.films.reduce((runningTotal,film)=>{
    return runningTotal += film.length;
  },0);
  return result;
}


module.exports = Cinema;
