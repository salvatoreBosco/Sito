const auth = (req, res, next) => {
    const {user, password} = req.body
    if(user == 'admin'){
        if(password == '1234'){
            next()
        }else{
            res.json({code: 401, messaggio: "Non auttorizzato"})
        }
    }else{
        res.json({code: 401, messaggio: "Non auttorizzato"})
    }
}

module.exports = {auth}