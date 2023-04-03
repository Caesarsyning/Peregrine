const express = require('express');
const app  = express();
const paper = require('./constructPaper')

// connect to MongoDB
/*
const mongoose = require('mongoose')
const dbURL = 'mongodb+srv://developer:Peregrine2023@cluster0.zwm36ha.mongodb.net/Cluster0?retryWrites=true&w=majority';
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result)=>{
        app.listen(3000); //only listen to request after the db is connected 
    })

*/
const port = process.env.PORT || 3000
app.listen(port);


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
    const input = {
        title:'Whitepaper', 
        paper_title: paper.title,
        author: paper.author,
        sections: paper.sections
    };
    res.render('whitepaper',{
        title:'Whitepaper', 
        paper_title: paper.title,
        author: paper.author,
        sections: paper.sections
    });
});
app.get('/news',(req, res) => {
    const input = {
        title:'In the News',
        articles: ['UVAToday article','WVTF segment',
            'Charlottesville NBC 29 TV segment'],
        links:[{
            title:'InvestigateTV video spot', 
            url:`https://www.investigatetv.com/2022/05/16/swapped-out-hackers-target-social-media-users-with-high-tech-fake-videos/`
        },{
            title: 'UVAToday article',
            url:'https://news.virginia.edu/content/uva-undergrads-offer-new-approach-detecting-deepfake-videos'
        },
        {
            title: 'Charlottesville NBC 29 TV segment',
            url:'https://www.nbc29.com/2021/06/16/uva-students-working-deepfake-detection-technology/'
        },
        {
            title: 'WVTF segment',
            url:'https://www.wvtf.org/news/2021-06-18/fact-or-fiction-two-uva-students-tackle-deepfakes'
        }
            ]
    };
    res.render('news',input);
});
app.use((req, res) => {
    const input = {title:'404'};
    res.status(404).render('404',input);
})
