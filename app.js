var jwt = require('jsonwebtoken');

//Generates a jwt with default HMAC SHA256
//var secretOrPrivateKey = fs.readFileSync('public.pem'); //asymetric
var secretOrPrivateKey = "supersecret";
var token = jwt.sign({roles: '[developer-company_scope, developer-org:scope, developer-app_scope, developer-???]'}, secretOrPrivateKey, { expiresIn: '1h' }); //other claims: audience, subject, issuer
console.log(token); //sample output: eyJhbGciOiJIUzI1NiJ9.e2ZvbzogYmFyfQ.3bQ7pD0EFHv_rS601O2wBHJuAu5d5IIrRvEsa-VzdS0

//validates a jwt
jwt.verify(token, secretOrPrivateKey, function(err, decoded){
    if(err!=null)
    {
        console.log(err);
    }
    else
    {
        console.log(decoded.roles); //mypayload!
    }        
});



