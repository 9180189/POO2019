// array movies
const movies = []

const txtFilme = document.querySelector("form")

document.querySelector("#txtFilmeYear").max = new Date().getFullYear()

txtFilme.addEventListener("submit", function(event){
    //obeter os valores dos elementos do formulario
    const txtFilmeName = document.querySelector("#txtFilmeName").value
    const txtFilmeYear = document.querySelector("#txtFilmeYear").value
    const txtFilmeGenre = document.querySelector("#txtFilmeGenre").value
    const txtFilmeCover = document.querySelector("#txtFilmeCover").value
    const txtFilmeTrailler = document.querySelector("#txtFilmeTrailler").value

//inserir dados do formulario no array

//1 verificar se o titulo do filme ja existe no array
if (isTitleAvailabel(txtFilmeName) === true ){

}
// 2 se não existir
//2.1 criar um obj movie
const movie = {
    title: txtFilmeName,
    year: txtFilmeYear,
    genre: txtFilmeGenre,
    cover: txtFilmeCover,
    trailer: txtFilmeTrailler
}

//2.2 inserir o objeto movie
movies.push(movie)
console.table(movies)
//3 Se existir
//Informar o utilizador que o filme ja existe





event.preventDefault()

})


//funçoes auxiliares
function isTitleAvailabel(txtFilmeName){
    for(const movie of movies){
        if(movie.title === txtFilmeNome){
            return false;
        }
    } return true; 
}