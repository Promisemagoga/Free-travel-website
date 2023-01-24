const express = require('express');
const mongoose = require('mongoose')
const ejs = require('ejs');
const { stringify } = require('nodemon/lib/utils');

//create server
const app = express();
app.set('view engine', "ejs");
app.use('/public', express.static('public'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//route to home
app.get('/', (req, res) => {
    res.render('views/index.ejs');
});

//route to about
app.get('/about', (req, res) => {
    res.render('views/about.ejs');
});

//route to blog
app.get('/blog', (req, res) => {
    res.render('blog')
});

//route to contact
app.get('/contact', (req, res) => {
    res.render('contact')
});

/*app.post('/contact', (req,res) =>{
    console.log(req);
});*/

//route to destination
app.get('/destination', (req, res) => {
    res.render('destination')
});

//route to guide
app.get('/guide', (req, res) => {
    res.render('guide')
});

//route to package
app.get('/package', (req, res) => {
    res.render('package')
});

//route to service
app.get('/service', (req, res) => {
    res.render('service')
});

//route to single
app.get('/single', (req, res) => {
    res.render('single')
});


app.post('/contact', (req, res) => {
    const data = req.body
    const user = new Contact(data)
    user.save().then((result) => {
        console.log(result)
    })
        .catch((err) => {
            console.log(err)
        })
})
//route to testimonial
app.get('/testimonial', (req, res) => {
    res.render('testimonial')
});
//run server
const port = 6200;

// const uri = "mongodb+srv://Promise:mongo2022@cluster0.af7rfrt.mongodb.net/?retryWrites=true&w=majority"
// //connect app to mongodb

// mongoose
//     .connect(uri)
//     .then((res) => {
//         console.log("DB connection successful")
//     })
//     .catch((err) => {
//         console.log("error connecting", err)
//     });

// //define your schema
// const contactSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     email: {
//         type: String,
//         required: true
//     },
//     subject: {
//         type: String,
//         required: true
//     },
//     message: {
//         type: String,
//         required: true
//     }
// })


//const Contact = mongoose.model('Contact', contactSchema)
//add it to your model


app.listen(port, (req, res) => {
    console.log('server running on port', port);
});