const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');
const port = 4000;



app.use(express.json());

app.use(express.static(__dirname));





app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});








app.post('/test1', (req, res) => {
    const clientStr = req.body.clientStr;
    let finalCounter = 0;
    const vowel = "AEIOU";

    for (let i = 0; clientStr.length > i; i++) {
        for (let j = 0; vowel.length > j; j++) {
            if (clientStr[i].toUpperCase() == vowel[j]) {
                finalCounter++;
            }


        }
    }
    res.json({
        originalString: clientStr,
        counterV: finalCounter
    });


});











app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});