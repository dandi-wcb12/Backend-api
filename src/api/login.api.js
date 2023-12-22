const firestore = require("../config/firestore.config")
const bcrypt = require('bcrypt')

const login = async (request, h) => {
    const { email, password } = request.payload
    const userRef = firestore.collection('users').where('email', '==', email)
    const snapshot = await userRef.get()

    if (!snapshot.empty) {
        const user = snapshot.docs[0].data()
        const isPasswordCorrect = await bcrypt.compare(password, user.password)
        if (isPasswordCorrect) {
            return h.response({
                status: 'success',
                name: user.name
            }).code(201)
        }
    }
    return h.response({
        status: 'login failed',
        message: 'Invalid email or password'
    }).code(400)
}

module.exports = login