"use strict";

var express = require('express');

var app = express();
var port = 3000;

var path = require("path");

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/food', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
var contactSchema = new mongoose.Schema({
  Name: String,
  Email: String,
  Phone: String,
  Address: String,
  Message: String
});
var contact = mongoose.model('Contact', contactSchema);
app.set('views', path.join(__dirname, 'views'));
app.use('/static', express["static"]('static')); // For serving static files

app.use(express.urlencoded());
app.get('/', function (req, res) {
  return res.send("<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n    <title>India Food Delivery Service</title>\n    <link rel=\"stylesheet\" href=\"../static/index.css\">\n    <link rel=\"stylesheet\" media=\"screen and (max-width: 762px)\" href=\"../static/phone.css\" >\n    <link href=\"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,700&display=swap\" rel=\"stylesheet\">\n    \n</head>\n\n<body>\n    <nav id=\"navbar\">\n        <div id=\"logo\">\n            <img src=\"../static/logo.jpg\" alt=\"ashu\" width=\"70px\" height=\"80px\">\n\n        </div>\n        <ul>\n            <li class=\"item\"><a href=\"#home\">HOME</a></li>\n            <li class=\"item\"><a href=\"#client\">CLIENTS</a></li>\n            <li class=\"item\"><a href=\"#services\">SERVICES</a></li>\n            <li class=\"item\"><a href=\"#contact\">CONTACT US</a></li>\n\n\n        </ul>\n    </nav>\n\n    <section id=\"home\">\n        <h1 class=\"h-primary\">Welcome Foodies</h1>\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, veniam illum quas veritatis corporis\n            architecto rerum enim nobis, reiciendis quo voluptatibus est maiores quibusdam dolores totam! Vel ullam in\n            libero!</p>\n\n        <button class=\"btn\">Order now</button>\n    </section>\n\n    <section class=\"services-container\">\n        <h1 class=\"h-primary center\">Our Services</h1>\n        <div id=\"services\">\n            <div class=\"box\">\n                <img src=\"../static/pizza.jpg\" alt=\"pizza\">\n                <h2 class=\"h-secondary center\">PIZZA</h2>\n                <p class=\"center\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ipsum rem eius tempora\n                    nostrum. Rerum\n                    odioipit perferendis culpa, maiores, dolor aspernatur molestiae\n                    numquam, assumenda non?</p>\n            </div>\n            <div class=\"box\">\n                <img src=\"../static/burger.jpg\" alt=\"pizza\">\n                <h2 class=\"h-secondary center\">BURGER</h2>\n                <p class=\"center\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ipsum rem eius tempora\n                    nostrum. Rerum\n                    odio dictauscipit perferendis culpa, maiores, dolor aspernatur molestiae\n                    numquam, assumenda non?</p>\n            </div>\n            <div class=\"box\">\n                <img src=\"../static/drink.jpg\" alt=\"pizza\">\n                <h2 class=\"h-secondary center\">DRINKS</h2>\n                <p class=\"center\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ipsum rem eius tempora\n                    nostrum. Rerum\n                    odio dic suscipit perferendis culpa, maiores, dolor aspernatur molestiae\n                    numquam, assumenda non?</p>\n            </div>\n\n        </div>\n\n\n    </section>\n\n    <section id=\"client-section\">\n        <h1 class=\"h-primary center\">Our Clients</h1>\n        <div id=\"client\">\n            <div class=\"client-item\">\n                <img src=\"../static/hp.jpg\" alt=\"\">\n            </div>\n            <div class=\"client-item\">\n                <img src=\"../static/apple.jpg\" alt=\"\">\n            </div>\n            <div class=\"client-item\">\n                <img src=\"../static/logo2.png\" alt=\"\">\n            </div>\n            <div class=\"client-item\">\n                <img src=\"../static/logo4.png\" alt=\"\">\n            </div>\n        </div>\n    </section>\n    <section id=\"contact\">\n        <h1 class=\"h-primary\">Contact Us</h1>\n        <div id=\"contact-box\">\n            <form action=\"/contact\"  method=\"post\">\n                <div class=\"contact-group\">\n                    <label for=\"Name\">Name:</label>\n                    <input type=\"text\" name=\"Name\" id=\"name\" placeholder=\"Enter your name\">\n\n                </div>\n                <div class=\"contact-group\">\n                    <label for=\"Email\">E-mail:</label>\n                    <input type=\"email\" name=\"Email\" id=\"name\" placeholder=\"Enter your e-mail\">\n\n                </div>\n                <div class=\"contact-group\">\n                    <label for=\"Phone\">Phone number:</label>\n                    <input type=\"phone\" name=\"Phone\" id=\"name\" placeholder=\"Enter your phone number\">\n\n                </div>\n                <div class=\"contact-group\">\n                    <label for=\"Address\">Address:</label>\n                    <input type=\"Address\" name=\"Address\" id=\"name\" placeholder=\"Enter your address\">\n\n                </div>\n                <div class=\"contact-group\">\n                    <label for=\"Messasge\">Message:</label>\n                    <textarea name=\"Message\" id=\"message\" cols=\"30\" rows=\"10\" placeholder=\"Type your message\"></textarea>\n\n                </div>\n                <button class=\"btn\">Submit Now</button>\n            </form>\n        </div>\n        <footer>\n            <div class=\"center\">\n                Copyright &copy; www.IndiaFoodDeliveryService.com All Rights Reserved\n            </div>\n        </footer>\n\n    </section>\n</body>\n\n</html>");
});
app.post('/contact', function (req, res) {
  var myData = new contact(req.body);
  myData.save().then(function () {
    res.send("this item has been saved to the database");
  })["catch"](function () {
    res.status(400).send("item was not saved to the database");
  }); //res.status(200).render('contact.pug');
});
app.listen(port, function () {
  console.log("server started at: ".concat(port));
});