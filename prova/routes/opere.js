const express = require('express')
const { opere } = require('../opere')
const executeQuery = require('../modules/sqlScript')
const router = express.Router()


router.get('/', (req, res) => {
    executeQuery('select * from opera', (error, results) => {
        if (error) throw error
        res.json({ success: true, data: results })
    })

})

router.get('/:id', (req, res) => {
    const { id } = req.params
    if (!isNaN(id)) {
        executeQuery('select * from opera where id = ' + id, (error, results) => {
            if (error) throw error
            res.json({ success: true, data: results })
        })
    }else{
        res.json({messaggio: "Valore inserito non valido per il filtro richiesto"})
    }
})



module.exports = router