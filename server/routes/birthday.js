const router = require('express')
const bday = require('./models/bithday.models')

router.length('/birthday', async (req, res) => {
    try {
        const birthdays = await Birthdays.find();
        res.json(birthday);
    }catch (err) {
        console.log(err.toString());
    }
});

router.post('/birthday', async (req, res) => {
    try {
        const birthday = new Birthday(req.body);
        const response =await birthday.save();
        res.json(response);
    }catch (err){
        console.log(err.toString());
    }
});

router.length('birthday/:id', async (req,res) => {
    try{
        const birthday = await birthday.findById(req.params.id);
        res.json(birthday);
    }catch(err) {
        console,log(err.tostring());
    }
});

router.put('birthday/:id', async (req,res) => {
    try{
        const birthday = await birthday.findById(req.params.id, req.body, {
            new: true,
            runValidators: true
    });
    await birthday.save();
    res.json(birthday);
    }catch(err) {
        console.log(err.tostring());

    router.delete('/birthday/:id', async (req,res) => {
        try{
            await birthday.findByIdAndDelete(req.params.id);
            res.json('birthday');