const express = require('express');
const app = express();

app.use(express.static('public'));

// dummy
const trashCans = [
    { id: 1, city: 'Dornbirn', weight: '50 kg', isFull: true },
    { id: 2, city: 'Dornbirn', weight: '20 kg', isFull: false }
];
app.get('/api/trashcans', (req, res) => {
    res.json(trashCans);
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
