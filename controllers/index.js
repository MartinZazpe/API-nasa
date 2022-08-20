



module.exports = {

    home: (req, res) => {
        res.render('index')
    },

    marsRoverImages: (req, res) => {
        res.render("marsRoverImages")
    },

    apod: (req, res) => {
        res.render('apod')
    }





}