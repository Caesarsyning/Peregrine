const express = require('express');
const app  = express();

// connect to MongoDB
/*
const mongoose = require('mongoose')
const dbURL = 'mongodb+srv://developer:Peregrine2023@cluster0.zwm36ha.mongodb.net/Cluster0?retryWrites=true&w=majority';
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result)=>{
        app.listen(3000); //only listen to request after the db is connected 
    })

*/
app.listen(3000);
// set ejs as the view engine to express 
app.set('view engine','ejs');


// Express & static files
app.use(express.static('Static'));

app.get('/',(req, res) => {
    const input = {title:'Home'};
    res.render('index',input);
});


app.get('/about',(req, res) => {
    const input = {title:'About'};
    res.render('about',input);
});
app.get('/research',(req, res) => {
    const input = {title:'Research'};
    res.render('research',input);
});
app.get('/whitepaper',(req, res) => {
    const input = {title:'Whitepaper'};
    res.render('whitepaper',input);
});
app.get('/news',(req, res) => {
    const input = {
        title:'In the News',
        other: ['UVAToday article','WVTF segment',
            'Charlottesville NBC 29 TV segment'],
        links:[{
            title:'InvestigateTV video spot', 
            url:`https://www.investigatetv.com/2022/05/16/swapped-out-hackers-target-social-media-users-with-high-tech-fake-videos/`
        },
            ]
    };
    res.render('news',input);
});
app.use((req, res) => {
    const input = {title:'404'};
    res.status(404).render('404',input);
})

