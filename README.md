Sample to create a JSON Web Token (JWT) to use in Authorization HTTP header using the Bearer schema.
There are 3 parts separated by a dot, incl.:

1 the Header: this is a JSON object containing meta-information about the type of JWT and hash algorithm used to encrypt the data.

2 the Payload: even this is a JSON object containing the actual data shared between source and target; these data are coded in claims, that is statements about an entity, typically the user.
Claims also usually contain information about the user that can be useful when authorizing the access to a resource. Claims could be, for example, user's e-mail, gender, role, city, or any other information useful to discriminate users while accessing to resources.

3 the Signature: this section allows to verify the integrity of the data, since it represents a digital signature based on the previous two sections.

Sources: 
https://auth0.com/blog/securing-asp-dot-net-core-2-applications-with-jwts/
Registered claim names: https://tools.ietf.org/html/rfc7519#section-4