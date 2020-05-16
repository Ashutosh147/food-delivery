const express = require('express');
const app = express();
const port = 3000;
const path = require("path");
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/food',{useNewUrlParser:true, useUnifiedTopology:true});

var contactSchema = new mongoose.Schema({
    Name: String,
    Email: String,
    Phone: String,
    Address: String,
    Message: String
});

var contact = mongoose.model('Contact', contactSchema);
app.set('views', path.join(__dirname, 'views'))



app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())

app.get('/',(req,res)=> res.send(`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>India Food Delivery Service</title>
    <link rel="stylesheet" href="../static/index.css">
    <link rel="stylesheet" media="screen and (max-width: 762px)" href="../static/phone.css" >
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,700&display=swap" rel="stylesheet">
    
</head>

<body>
    <nav id="navbar">
        <div id="logo">
            <img src="../static/logo.jpg" alt="ashu" width="70px" height="80px">

        </div>
        <ul>
            <li class="item"><a href="#home">HOME</a></li>
            <li class="item"><a href="#client">CLIENTS</a></li>
            <li class="item"><a href="#services">SERVICES</a></li>
            <li class="item"><a href="#contact">CONTACT US</a></li>


        </ul>
    </nav>

    <section id="home">
        <h1 class="h-primary">Welcome Foodies</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, veniam illum quas veritatis corporis
            architecto rerum enim nobis, reiciendis quo voluptatibus est maiores quibusdam dolores totam! Vel ullam in
            libero!</p>

        <button class="btn">Order now</button>
    </section>

    <section class="services-container">
        <h1 class="h-primary center">Our Services</h1>
        <div id="services">
            <div class="box">
                <img src="../static/pizza.jpg" alt="pizza">
                <h2 class="h-secondary center">PIZZA</h2>
                <p class="center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ipsum rem eius tempora
                    nostrum. Rerum
                    odioipit perferendis culpa, maiores, dolor aspernatur molestiae
                    numquam, assumenda non?</p>
            </div>
            <div class="box">
                <img src="../static/burger.jpg" alt="pizza">
                <h2 class="h-secondary center">BURGER</h2>
                <p class="center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ipsum rem eius tempora
                    nostrum. Rerum
                    odio dictauscipit perferendis culpa, maiores, dolor aspernatur molestiae
                    numquam, assumenda non?</p>
            </div>
            <div class="box">
                <img src="../static/drink.jpg" alt="pizza">
                <h2 class="h-secondary center">DRINKS</h2>
                <p class="center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ipsum rem eius tempora
                    nostrum. Rerum
                    odio dic suscipit perferendis culpa, maiores, dolor aspernatur molestiae
                    numquam, assumenda non?</p>
            </div>

        </div>


    </section>

    <section id="client-section">
        <h1 class="h-primary center">Our Clients</h1>
        <div id="client">
            <div class="client-item">
                <img src="../static/hp.jpg" alt="">
            </div>
            <div class="client-item">
                <img src="../static/apple.jpg" alt="">
            </div>
            <div class="client-item">
                <img src="../static/logo2.png" alt="">
            </div>
            <div class="client-item">
                <img src="../static/logo4.png" alt="">
            </div>
        </div>
    </section>
    <section id="contact">
        <h1 class="h-primary">Contact Us</h1>
        <div id="contact-box">
            <form action="/contact"  method="post">
                <div class="contact-group">
                    <label for="Name">Name:</label>
                    <input type="text" name="Name" id="name" placeholder="Enter your name">

                </div>
                <div class="contact-group">
                    <label for="Email">E-mail:</label>
                    <input type="email" name="Email" id="name" placeholder="Enter your e-mail">

                </div>
                <div class="contact-group">
                    <label for="Phone">Phone number:</label>
                    <input type="phone" name="Phone" id="name" placeholder="Enter your phone number">

                </div>
                <div class="contact-group">
                    <label for="Address">Address:</label>
                    <input type="Address" name="Address" id="name" placeholder="Enter your address">

                </div>
                <div class="contact-group">
                    <label for="Messasge">Message:</label>
                    <textarea name="Message" id="message" cols="30" rows="10" placeholder="Type your message"></textarea>

                </div>
                <button class="btn">Submit Now</button>
            </form>
        </div>
        <footer>
            <div class="center">
                Copyright &copy; www.IndiaFoodDeliveryService.com All Rights Reserved
            </div>
        </footer>

    </section>
</body>

</html>`));

app.post('/contact', (req, res)=>{
    
    var myData = new contact(req.body);
    myData.save().then(()=>{
            res.send("this item has been saved to the database")
    }).catch(()=>{
        res.status(400).send("item was not saved to the database")
    });

    //res.status(200).render('contact.pug');
})

app.listen(port, ()=>{
    console.log(`server started at: ${port}`)
})