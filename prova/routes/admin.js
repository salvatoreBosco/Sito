const express = require('express')
const { opereUrl } = require('../opere')
const { auth } = require('../auth')
const { Buffer, Blob } = require('buffer')
const executeQuery = require('../modules/sqlScript')
const router = express.Router()

let a = 0

router.use(express.json())

router.post('/', auth, (req, res) => {
    a = 1

    res.json({ messaggio: "login" })
})

router.post('/upload', (req, res) => {
    console.log("ciao")

    let { nome, tecnica, descrizione, altezza, larghezza, img, anno, categoria } = req.body
    
    executeQuery('insert into `opera` (`nome`, `tecnica`, `descrizione`, `altezza`, `larghezza`, `anno`, `categoria`) values (\'' + nome + '\', \'' + tecnica + '\', \'' + descrizione + '\', \'' + altezza + '\', \'' + larghezza + '\', \'' + anno + '\', \'' + categoria + '\')' , (error, results) => {
        if (error) throw error
        
        
    })
    executeQuery('SELECT * FROM `opera` ORDER BY -id LIMIT 1', (error, results) => {
        if (error) throw error
        opereUrl.push({
            id: results[0].id,
            url: img
        })
    })
    res.json({ messaggio: "opera inserita"})
})

if (a == 1) {
    router.get('/:id', (req, res) => {
        res.json({ success: true, data: opere })
    })

    router.get('/:id', (req, res) => {
        const { id } = req.params
        const opera = opere.find((opera) => opera.id === id)
        if (!opera) {
            return res.json({ messaggio: "non trovato", code: 404 })
        }
        res.json(opera)
    })

    router.post('/', (req, res) => {
        const opera = req.body
        opere.push(opera)
        res.json({ success: true, data: opere })
    })

    router.put('/:id', (req, res) => {
        const { id } = req.params
        const opera = req.body
        opere[Number(id) - 1] = opera
        res.json({ success: true, data: opere })
    })

    router.delete('/:id', (req, res) => {
        const { id } = req.params
        const index = opere.findIndex((opera) => opera.id === id)
        if (!index) {
            return res.json({ messaggio: "non trovato", code: 404 })
        }
        opere.splice(index, 1)
        res.json({ success: true, data: opere })
    })
} else {
    router.all('*', (req, res) => {
        res.json({ code: 401, messaggio: "Non auttorizzato" })
    })
}
router.post('/api/admin', auth, (req, res) => {
    a = 0
    res.json({ messaggio: "logout" })
})



module.exports = router