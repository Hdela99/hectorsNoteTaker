const express = require('express')
const router = express.Router();
const {v4: uuidv4 } = require('uuid');
const {readFromFile, writeToFile, readAndAppend } = require('../helpers/fsUtil');

router.get('/', (req, res) => {
    readFromFile(`./db/db.json`).then((data) => res.json(JSON.parse((data))))
});

router.post('/', (req,res) => {
    console.log(req.body);//helps me see wtf is going on. 

    const {text, title } = req.body;

    if(text && title) {
        const newNotes = {
            title,
            text,
            id: uuidv4(),
        };

        readAndAppend(newNotes, `./db/db.json`);
        console.log(newNotes);
        res.json(newNotes);
    } else {
        res.json({message: 'something broke!'});
    }
});

router.delete('/:id', (req,res) => {
    res.json('deleting...');
    readFromFile(`./db/db.json`).then((data) => {
        const checkId = (e) => e.id == req.params.id;
        let mod = JSON.parse(data);
        const deleteIndex = mod.findIndex(checkId);
        mod.splice(deleteIndex, 1);
        writeToFile(`./db/db.json`, mod);
    })
})
module.exports = router;