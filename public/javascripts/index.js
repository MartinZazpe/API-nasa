


window.addEventListener('load', () => {







    let apodImg = document.querySelector('#apod-container img')
    let apodText = document.querySelector('#apod-container p ')
    let part2Container
    let imagesGallery = document.querySelector('#image-gallery')


    // fetch('https://api.nasa.gov/planetary/apod?api_key=ZB6ab5ydC0fDDL4TchfALtajxGe08bDlqPvRiNfc').then(res => res.json())
    //     .then(async (apod) => {
    //         apodImg.src = await apod.hdurl
    //         var part1 = await apod.explanation.slice(0, 104)
    //         var part2 = await apod.explanation.slice(104, apod.explanation.length)
    //         apodText.innerHTML = part1 + '<span> Read more... </span>'
    //         // console.log(part2Container)
    //         return apod
    //     }).catch(error => {
    //         console.log(error)
    //     })

    // apodText.onclick = () => {
    //     fetch('https://api.nasa.gov/planetary/apod?api_key=1bz7W1EAPGSOhBSDjdo6Bd2ef92C0EWie26DPss5').then(res => res.json())
    //         .then(async (apod) => {
    //             var part1 = await apod.explanation.slice(0, 104)
    //             var part2 = await apod.explanation.slice(104, apod.explanation.length)
    //             part2Container = await document.createElement('span')
    //             await part2Container.setAttribute("id", "part2All")
    //             part2Container.innerHTML = part2
    //             apodText.innerHTML = part1 + part2
    //             return apod
    //         }).catch(error => {
    //             console.log(error)
    //         })
    // }


    // MARS WEATHER https://mars.nasa.gov/rss/api/?feed=weather&category=insight_temperature&feedtype=json&ver=1.0




    var marsRoversImages = fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=1bz7W1EAPGSOhBSDjdo6Bd2ef92C0EWie26DPss5").then((response) => {
        return response.json()
    }).then((data) => {


        data.photos.forEach((item, i) => {


            if (i % 2 == 0 && i < 200) {
                let element = document.createElement('img')
                element.src = item.img_src
                imagesGallery.appendChild(element)
            }
        })

    }).catch((error) => {
        console.log(error)
        let errors = document.createElement('div')
        error.innerHTML = "Sorry, there seems to be a current issue with the API. please try again later"
        imagesGallery.appendChild(errors)
    })
    // console.log(item.img_src)
    // console.log(i)

    // data.photos.forEach(item, i => {
    //     if (item[i] < 100) {
    //         // let element = document.createElement('img')
    //         // element.src = item.photos.img_src
    //         // imagesGallery.appendChild(element)
    //         console.log(item.photos.img_src)
    //     }
    // })





})