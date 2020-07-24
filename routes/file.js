const express = require("express");
const router = express.Router();
const fs = require('fs');

const fileToEditPath = './file.txt';

router.post("/savingFile", async (req, res, next) => {
    try {
        const text = req.body.value;
        fs.writeFile(fileToEditPath, text, function (err) {
            if (err) throw err;
            const reponse = { text: text, createdFile: fileToEditPath }
            res.status(200).json({
                data: reponse
            });
        });
    } catch (error) {
        console.log("error", error);
        throw error;
    }
});
router.get("/fileToedit", async (req, res) => {
    try {
        const fileData = fs.readFileSync(fileToEditPath, 'utf8');
        const data = {fileData: fileData, fileName: fileToEditPath};
        res.status(200).json({
            data: data
        });
    } catch (e) {
        console.log('Error:', e.stack);
        throw error;
    }
})

module.exports = router;