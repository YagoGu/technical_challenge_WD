const express = require("express");
const router = express.Router();
const dumpData = require("../data/phones.json")

router.get("/phones", (req, res) => {
    res.send(dumpData);
});

router.get("/phones/:id", (req, res) => {

    const phoneId = req.params.id;

    const phone = dumpData.find((search) => search.id == phoneId)

    if (phone) {
        return res.send(phone)
    }
    else {
        res.status(404).send({ error: 'Phone not found' });
    }
})

module.exports = router;