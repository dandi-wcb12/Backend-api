const firestore = require("../config/firestore.config")

const getIngById = async (request, h) => {
    const { docId } = request.params
    const doc = await firestore.collection('ingredient').doc(docId).get()
    if (!doc.exist) {
        return h.response({
            status: 'fail',
            message: 'Data not found'
        }).code(404)
    }
    const data = doc.data()
    return h.response({
        status: 'success',
        ingredient: {
            data
        }
    })
}

module.exports = getIngById