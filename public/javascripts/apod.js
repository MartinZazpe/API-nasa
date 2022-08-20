window.addEventListener('load', () => {


    let apodImg = document.querySelector('#apod-container img')
    let apodText = document.querySelector('#apod-container p ')
    let part2Container


    fetch('https://api.nasa.gov/planetary/apod?api_key=ZB6ab5ydC0fDDL4TchfALtajxGe08bDlqPvRiNfc').then(res => res.json())
        .then(async (apod) => {
            apodImg.src = await apod.hdurl
            var part1 = await apod.explanation.slice(0, 104)
            var part2 = await apod.explanation.slice(104, apod.explanation.length)
            apodText.innerHTML = part1 + '<span> Read more... </span>'
            // console.log(part2Container)
            return apod
        }).catch(error => {
            console.log(error)
        })

    apodText.onclick = () => {
        fetch('https://api.nasa.gov/planetary/apod?api_key=1bz7W1EAPGSOhBSDjdo6Bd2ef92C0EWie26DPss5').then(res => res.json())
            .then(async (apod) => {
                var part1 = await apod.explanation.slice(0, 104)
                var part2 = await apod.explanation.slice(104, apod.explanation.length)
                part2Container = await document.createElement('span')
                await part2Container.setAttribute("id", "part2All")
                part2Container.innerHTML = part2
                apodText.innerHTML = part1 + part2
                return apod
            }).catch(error => {
                console.log(error)
            })
    }



})