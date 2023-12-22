const getIng = require("../api/getIng.api");
const getIngById = require("../api/getIngbyId.api");
const login = require("../api/login.api");
const register = require("../api/register.api");
const Joi = require('@hapi/joi')

const routes = [
    {
        method: 'POST',
        path: '/register',
        handler: register,
        options: {
            validate: {
                payload: Joi.object({
                    name: Joi.string().required(),
                    email: Joi.string().email().required(),
                    password: Joi.string().required()
                })
            }
        } 
    },
    {
        method: 'POST',
        path: '/login',
        handler: login,
        options: {
            validate: {
                payload: Joi.object({
                    email: Joi.string().email().required(),
                    password: Joi.string().required()
                })
            }
        }
    },
    {
        method: 'GET',
        path: '/ingredient',
        handler: getIng
    },
    {
        method: 'GET',
        path: '/ingredient/{docId}',
        handler: getIngById
    }
]

module.exports= routes