const express = require('express')
const router = express.Router()

router.post('/create', (req, res) =>{
    req.getConnection((err, conn) =>{
        if(err) return res.send(err)
        conn.query('INSERT INTO capitulo set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err)

            res.send('episode added!')
        })
    })
})

router.put('/update/:id', (req, res) =>{
    req.getConnection((err, conn) =>{
        if(err) return res.send(err)

        conn.query('UPDATE books set ? WHERE id = ?', [req.body, req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.send('book updated!')
        })
    })
})

router.delete('/delete/:id', (req, res) =>{
    req.getConnection((err, conn) =>{
        if(err) return res.send(err)

        conn.query('DELETE FROM books WHERE id = ?', [req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.send('book deleted!')
        })
    })
})

module.exports = router