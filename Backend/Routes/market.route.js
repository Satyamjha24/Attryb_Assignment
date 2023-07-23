const express = require("express")
const { MarketItemModel } = require("../Modals/marketItems.modal")

const MarketRouter = express.Router()

MarketRouter.get("/", async (req, res) => {
    let { search } = req.query;
    console.log('search:back', search)

    try {

        const data = search ? await MarketplaceInventoryModel.find(
            { $text: { $search: search } },
            { score: { $meta: "textScore" } }
            ).sort({ score: { $meta: "textScore" } }).populate('oemItems')
            :
            await MarketItemModel.find().populate('oemItems')

        res.send(data);
    } catch (err) {
        res.send(err.message);
        console.log('err:', err);
    }
});

// get data
MarketRouter.get("/dealer", async (req, res) => {
    const ID = req.body.dealer
    try {
        console.log('ID:', ID)
        const notes = await MarketItemModel.find({ dealer: ID }).populate('dealer').populate('oemItems')
        res.send(notes)
    } catch (err) {
        console.log({ "msg": "Error Occured", "error": err })
    }
})
// post data
MarketRouter.post("/create", async (req, res) => {
    const payload = req.body
    const newNote = new MarketItemModel(payload)
    await newNote.save()
    res.send(newNote)
})

// delete data
MarketRouter.delete("/delete/:id", async (req, res) => {
    const ID = req.params.id
    try {
        await MarketItemModel.findByIdAndDelete({ _id: ID })
        res.send(`Note with ID ${ID} Deleted`)
    } catch (err) {
        console.log({ "msg": "Error Occured", "error": err })
    }
})

// update data
MarketRouter.patch("/update/:id", async (req, res) => {
    const ID = req.params.id
    try {
        let data = await MarketItemModel.findByIdAndUpdate({ '_id': ID }, req.body)
        res.status(400).send(`Data has been updated successfuly`)
    } catch (err) {
        console.log({ "msg": "Error Occured", "error": err })
    }
})

module.exports = {
    MarketRouter
}