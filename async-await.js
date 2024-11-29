// fetch("https://dog.ceo/api/breeds/image/random")
//     .then(res => res.json())
//     .then(data => {
//         console.log(data)
//         document.querySelector('img').src = data.message
//     })
//     .catch(err => {
//         console.log(`error ${err}`)
//     })

async function getCuteDogPhoto(){
    const res = await fetch("https://dog.ceo/api/breeds/image/random")
    const data = await res.json()
    console.log(data)

}

getCuteDogPhoto()