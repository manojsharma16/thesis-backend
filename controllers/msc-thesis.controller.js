const mscModel = require("../models/msc.model")

const mscThesis = function () {

}


mscThesis.addThesis = async (req, res) => {
    try {
        let data = req.body;
        console.log(data)
        console.log(req.file)
        const { name, price, description } = req.body;
        const pdfPath = req.file.path;
        console.log(pdfPath)

        const newProduct = new mscModel({
            name,
            price,
            description,
            pdf: pdfPath,
        });

        await newProduct.save();

        res.status(201).json({ message: 'Product added successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

mscThesis.getThesis = async (req, res, next) => {
    console.log("getUserList")
    try {
        var thesis = await mscModel.find()
        thesis.map((el)=>{
            console.log(el.url)
            el.pdf = el.url; 
        })
        console.log(thesis)
        
    } catch (error) {
        return res.status(500).send(error)
    }
    return res.status(200).send(thesis)
}

module.exports = mscThesis;