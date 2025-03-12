const JWT = require("jsonwebtoken");
const secret="RexBuildsBlogapp";

 function createUserToken(user){
    const payload={
        _id:user._id,
        fullname:user.fullname,
        email:user.email,
        profileImageURL:user.profileImageURL,
        role:user.role,
    }
    return JWT.sign(payload,secret);
 }


 function verifyToken(token){
    return JWT.verify(token,secret);
 }

 module.exports={ createUserToken,verifyToken}