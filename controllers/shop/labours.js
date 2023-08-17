const Labours = require('../../models/Labours');

const getProfile = (req, res, next) => {
    res.render('profile', {
        name: req.user.username,
        isAdmin: req.user.isAdmin
    });
}


const getProducts = async (req, res, next) => {
    try {
        let products = await Labours.find({});

        res.render('shop/products', {
            products,
            isAdmin: req.user.isAdmin
        });
    }
    catch (err) {
        next(err);
    }
}

const getAddToCart = async (req, res, next) => {
    try {
        let { labourid } = req.query;
        let indx = -1;
        console.log(req.user.cart);
        req.user.cart.forEach((p, i) => {
            if (p.id == labourid) indx = i;
        })
        console.log(indx);
        if (indx == -1) {
            req.user.cart.unshift({
                id: labourid,
                quantity: 1
            })
        }
        else {
            req.user.cart[indx].quantity+=1;
        }
        await req.user.save();
        res.send({
            msg: 'Item added success',
            cartCount: req.user.cart.length
        })
    }
    catch (err) {
        next(err);
    }
}

module.exports={getProfile,getProducts,getAddToCart}