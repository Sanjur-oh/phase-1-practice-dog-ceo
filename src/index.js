// console.log("%c HI", "color: firebrick");

// function getCEO() {
//   fetch("https://dog.ceo/api/breeds/image/random/4") //Fetch images returns
//     .then((resp) => resp.json()) //parses response to json
//     .then((dogData) => addCEO(dogData)); // pass the data to the CEO
// }

// function addCEO(dogData) {
//   const imgContainer = document.querySelector("div");
//   dogData.message.forEach((dogData) => {
//     const dogPic = document.createElement("img");
//     dogPic.src = dogData;
//     imgContainer.appendChild(dogPic);
//   });
// }

// getCEO();


// function getBreed() {
//   fetch("https://dog.ceo/api/breeds/list/all")
//     .then((resp) => resp.json())
//     .then((breedData) => addBreeds(breedData));
// }
// function addBreeds(breedData) {
//   for (breed in breedData.message) {
//     const dog = document.createElement("li");
//     const breedList = document.querySelector("#dog-breeds");
//     dog.textContent = breed;
//     breedList.append(dog);

//     dog.addEventListener("click", () => {
//       dog.style.color = "red";
//     });
    
//     const letterSelected = document.getElementById("breed-dropdown") // selecting the dropdown menu
//     letterSelected.addEventListener("change", (e) => {
//         console.log(e.target.value) // logging the value of the current dropdown item
//         // if dogs first letter is the first character, hide the rest
//          if (e.target.value === dog.textContent.charAt(0)) {
//              dog.textContent = " "
//              dog.style.visibility = "hidden"
//             }
//         })
//     }
// }
// getBreed();
// addBreeds();

const container = document.querySelector("#dog-image-container")
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const ulContainer = document.querySelector("#dog-breeds")

function getImages(){
  fetch(imgUrl)
  .then(resp => resp.json())
  .then(images => {
      const imgs = images.message
      let imgsArray = createImgElement(imgs)
      renderElement(imgsArray)
  })
}

function createImgElement(imgs){
    return imgs.map((img) => {
      let i = `<img src=${img}>`
      return i
    })

}

function renderImgs(imgsArray){
  imgsArray.forEach(element => { 
    renderElement(element)
 
  })
}


function renderElement(element){
    container.innerHTML += element
}

function getBreeds(){
  fetch(breedUrl)
  .then(resp => resp.json())
  .then(breeds => {
    const breedsArray = Object.keys(breeds.message)
    const breedsLis = createLiElement(breedsArray)
    renderLis(breedsLis)
      // let imgsArray = createImgElement(imgs)
      // renderImg(imgsArray)
})
}

function createLiElement(breedsArray){
  return breedsArray.map((breed) => {
    let li = `<li>${breed}</li>`
    return li
  })
}

function renderLis(breedLis){
  breedLis.forEach(element => { 
    renderElement(element)
 
  })
}

// getImages()
getBreeds()

