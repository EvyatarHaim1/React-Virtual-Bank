const express = require('express')
const router = express.Router()
const Transaction = require('../model/Schema')

router.get('/transactions', async function (req, res) {
    let documents = await Transaction.find({})
    res.send(documents)
})

router.post('/transaction', async function (req, res) {
    let newTransaction = new Transaction(req.body)
    await newTransaction.save()
    res.end()
})

router.delete('/transaction', async function (req, res) {
    let id = req.body
    console.log(id)
    await Transaction.findByIdAndDelete(id.id)
    res.end()
}
)

module.exports = router
