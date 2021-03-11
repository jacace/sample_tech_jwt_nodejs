//Sample to create a JSON Web Token (JWT) to use in Authorization HTTP header using the Bearer schema.
// There are 3 parts separated by a dot, incl.:
// the Header: this is a JSON object containing meta-information about the type of JWT and hash algorithm used to encrypt the data.
// the Payload: even this is a JSON object containing the actual data shared between source and target; these data are coded in claims, that is statements about an entity, typically the user.
// the Signature: this section allows to verify the integrity of the data, since it represents a digital signature based on the previous two sections.
//output: eyJhbGciOiJIUzI1NiJ9.e2ZvbzogYmFyfQ.3bQ7pD0EFHv_rS601O2wBHJuAu5d5IIrRvEsa-VzdS0

var jwt = require('jsonwebtoken');

//Generates a jwt with default HMAC SHA256
//var secretOrPrivateKey = fs.readFileSync('public.pem'); //asymetric
var secretOrPrivateKey = "supersecret";
var token = jwt.sign({foo: 'bar'}, secretOrPrivateKey, { expiresIn: '1h' }); //other claims: audience, subject, issuer
console.log(token); 

//validates a jwt
jwt.verify(token, secretOrPrivateKey, function(err, decoded){
    if(err!=null)
    {
        console.log(err);
    }
    else
    {
        console.log(decoded.foo); //mypayload!
    }        
});



