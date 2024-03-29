const firestore = require("../config/firestore.config")

const getIng = async (request, h) => {
    const ingredient = firestore.collection('ingredient')
    const snapshot = await ingredient.get()
    const data = []
    snapshot.forEach(element => {
        data.push(element.data())
    })
    return h.response({
        listIngredient: data
    }).code(200)
}

module.exports = getIng