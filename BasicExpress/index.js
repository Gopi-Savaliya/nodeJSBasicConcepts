const express = require('express');
const path = require('path');

const app = express();

const accessFilter = (req, res, next) => {
    if(!req.query.age) {
        res.send('Please provide age');
    } else if(req.query.age<18) {
        res.send('To access the site your age should be greater than 18');
    } else {
        next();
    }
}

// app.use(accessFilter);

const publicPath = path.join(__dirname,'public');
// app.get('', accessFilter, (req, res) => { //for route level middleware
//     // res.send(`
//     //     Hello, Welcome to Home page
//     //     <a href="/about">Go to about page</a>
//     // `);
//     res.sendFile(`${publicPath}/index.html`);
// });

// app.get('/about',(req, res) => {
//     // res.send(`
//     //     Welocme to about page
//     //     <a href="/">Go to home page</a>
//     // `);
//     res.sendFile(`${publicPath}/about.html`);
// });

// app.set('view engine', 'ejs');

// app.get('/contact',(req, res) => {
//     const user={
//         name: 'Gopi Savaliya',
//         email: 'gopi@test.com',
//         skills: ['c', 'c++', 'PHP', 'JAVA', 'Javascript']
//     };
//     res.render('contact',{user});
// });

// app.get('*',(req, res) => {
//     // res.send(`
//     //     Welocme to about page
//     //     <a href="/">Go to home page</a>
//     // `);
//     res.sendFile(`${publicPath}/404.html`);
// });

// app.use(express.static(path.join(__dirname,'public')))



//to apply middleware(accessfilter) in multiple pages

const route = express.Router();

route.get('', accessFilter, (req, res) => { //for route level middleware
    res.sendFile(`${publicPath}/index.html`);
});

app.use('/',route);

app.listen(4500);
