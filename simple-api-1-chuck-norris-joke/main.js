// alert('hi') always, to make sure
document.getElementById('run').addEventListener('click', getFact)
function getFact(){
  fetch("https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "matchilling-chuck-norris-jokes-v1.p.rapidapi.com",
		"x-rapidapi-key": "a8e59450c3mshf568b4934a9cbf7p1225bfjsnb95fad1fa182",
		"accept": "application/json"
	}
})
    // })
    .then(response => response.json())
    .then(data =>{
      // document.querySelector('#result').textContent=data.value
      document.getElementById('result').textContent = data.value
      console.log(data.value)
    })
    .catch(err => {
      console.log('error ${err}')
    })
}

//
// let userAnswer = prompt("What cocktail would you like?")
// userAnswer = userAnswer.replace(" ","%20")
// console.log(userAnswer)
// fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${userAnswer}`)
//   .then(response => response.json())
//   .then(data => {
//     let info = []
//     data.drinks.forEach(x => info.push({
//       "dImg":x.strDrinkThumb,
//       "dName": x.strDrink,
//       "dInstr": x.strInstructions
//     }))
//     console.log(info)
//     let count = 0
//     setInterval(()=>{
//       document.getElementsByTagName("h1")[0].innerHTML = info[count].dName
//       document.getElementsByTagName("img")[0].src = info[count].dImg
//       document.getElementsByTagName("p")[0].innerHTML = info[count].dInstr
//       count++
//     },1000)
//   })
//   .catch(err => console.log(err))
// 2:56
// HTML
// 		<h1></h1>
// 		<img src="" alt="">
// 		<p></p>
