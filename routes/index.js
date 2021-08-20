'use strict';
var {
        reset,
        listCharacter,
        listFamilies,
        showQuotes, addCharacter,
        addFamily,
        addQuote } = require("../models/model")
const { query } = require('express');
var express = require('express');
var router = express.Router();
router.use(express.json())

//_______________________________________________________________get family
router.get("/families", function (req, res) {

        res.status(200).json(listFamilies())
})
//_______________________________________________________________set family
router.post("/families", function (req, res) {
        const { family } = req.body;
        addFamily(family);
        res.status(200).json(family);

})
//_______________________________________________________________get characters
router.get('/characters', function (req, res) {
        const char = listCharacter().map(ch => {
                delete ch.family
                return ch;


        })
        res.status(200).json(char);
})
//___________________________________________________________________post new char
/* router.post('/characters',function(req,res){
     

}) */
//___________________________________________________________________get existing family
/* router.post("/characters", function (req, res) {
        console.log(req.body)
        if (listFamilies()) { }
}) */
//_______________________________________________________________________get
router.get('/characters/:name', function (req, res) {
        const { name } = req.params;
        const { pluck } = req.query;
        if (pluck) {
                const char = listCharacter(name, pluck).map(ch => {
                        delete ch.family
                        return ch;
                })
                return res.status(200).json(char)
        }

        if (!listFamilies().includes(name)) {

                return res.status(200).json([])
        }

        const char = listCharacter(name).map(ch => {
                delete ch.family
                return ch;
        })
        return res.status(200).json(char)
})
//______________________________________________________________________
module.exports = { router };

// escriban sus rutas acá
// siéntanse libres de dividir entre archivos si lo necesitan
