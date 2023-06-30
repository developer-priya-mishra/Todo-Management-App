const router = require("express").Router();
const ToDo = require('../model/todo')


router.post('/items', async (req, res) => {
    try {
        const newItem = new ToDo({
            item: req.body.item
        })
        const save = await newItem.save();
        res.status(200).json({ message: "Item added successfully" })

    } catch (err) {
        res.status(500).json({ err: err.message })
    }
})

router.get('/allitems', async (req, res) => {
    try {
        const allItems = await ToDo.find({});
        res.status(200).json(allItems);
    } catch (err) {
        res.status(500).json({ err: err.message });
    }
})

router.put('/update/:id', async (req, res) => {
    try {
        const update = await ToDo.findByIdAndUpdate(req.params.id, { $set: req.body });
        res.status(200).json({ message: "Item updated successfully" })
    } catch (err) {
        res.status(500).json({ err: err.message });
    }
})

router.delete('/delete/:id', async (req, res) => {
    try {
        const remove = await ToDo.findByIdAndDelete(req.params.id);
        res.status(200).json('Item deleted successfully')
    } catch (err) {
        res.status(500).json({ err: err.message })
    }
})






module.exports = router;
