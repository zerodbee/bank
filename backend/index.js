const PORT = 9001
const URLDB = 'mongodb://127.0.0.1:27017/'

const express = require('express')
const cors = require('cors')
const jsonwebtoken = require('jsonwebtoken')
const mongoose = require('mongoose')
const { secret } = require('./config')
const User = require('./models/User')

const app = express()

const duplicateKeyCode = 11000

const generateAccessToken = (id, login, role) => {
    const payload = {
        id, login, role
    }

    return jsonwebtoken.sign(payload, secret, { expiresIn: '24h' })
}

app.use(cors())
app.use(express.json())

app.post('/registration', async (req, res) => {
    console.log(req.body)
    const { login, password } = req.body
    const user = new User({ login, password, role: "user" })

    try {
        await user.save()
    } catch (err) {
        if (err && err.code !== 11000) {
            res.json({
                message: 'Неизвестная ошибка.'
            })
                .status(500)

            return
        }

        if (err && err.code === duplicateKeyCode) {
            res.json({
                message: 'Не используйте повторно эти данные!'
            })
                .status(400)
            console.error('Не используйте повторно эти данные!')

            return
        }
    }

    res.json({
        message: 'Вы успешно зарегистрировались!'
    })
})

app.post('/login', async (req, res) => {
    console.log(req.body)
    const { login, password } = req.body
    let user

    try {
        user = await User.findOne({ login })
    } catch (err) {
        res.json({
            message: 'Неизвестная ошибка.'
        })
            .status(500)

        return
    }

    if (!user) {
        return res.status(400).json({ message: 'Пользователь отсутствует в базе.' })
    }
    if (user.password !== password) {
        return res.status(400).json({ message: 'Неверный логин или пароль!' })
    }
    const jwtToken = generateAccessToken(user._id, user.login, user.role)

    res.json({
        message: 'Вы успешно вошли на сайт!',
        token: jwtToken
    })
})

app.post('/user/changePassword', async (req, res) => {
    console.log(req.body)
    const { token, password } = req.body
    let user

    try {
        user = await User.findOneAndUpdate({ login: jsonwebtoken.verify(token, secret).login },
            { password: password }, { returnOriginal: false })

        if (user === null) {
            res.json({
                message: 'Пользователь отсутствует в базе.'
            })
                .status(400)
        }
    } catch (err) {
        res.json({
            message: 'Неизвестная ошибка.'
        })
            .status(500)

        return
    }

    res.json({
        message: 'Пароль изменён!',
        newPassword: user.password
    })
})

app.post('/user/changeEmail', async (req, res) => {
    console.log(req.body)
    const { token, email } = req.body
    let user

    try {
        user = await User.findOneAndUpdate({ login: jsonwebtoken.verify(token, secret).login },
            { email: email }, { returnOriginal: false })

        if (user === null) {
            res.json({
                message: 'Пользователь отсутствует в базе.'
            })
                .status(400)
        }
    } catch (err) {
        if (err && err.code !== 11000) {
            res.json({
                message: 'Неизвестная ошибка.'
            })
                .status(500)

            return
        }

        if (err && err.code === duplicateKeyCode) {
            res.json({
                message: 'Не используйте повторно эти данные!'
            })
                .status(400)
            console.error('Не используйте повторно эти данные!')

            return
        }
    }

    res.json({
        message: 'E-Mail изменён! Для применения изменений заново авторизуйтесь!',
        newEmail: user.email
    })
})

const start = async () => {
    try {
        await mongoose.connect(URLDB)
        app.listen(PORT, () => console.log(`Сервер работает на порту ${PORT}`))
    } catch (e) {
        console.error(e)
    }
}

start()
