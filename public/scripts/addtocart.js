
const axios =require('axios')
const productsList = document.querySelector('.productsList');

productsList.addEventListener('click', async (ev) => {
    if (ev.target.classList.contains('addToCart')) {
        let labourid = ev.target.getAttribute('labourid');

        console.log(labourid);
        try {
            let data = await get(`/shop/addToCart?labourid=${labourid}`);
            console.log(data);
            let cartCount = document.querySelector('.cartCount');
            cartCount.innerText = data.data.cartCount;
            console.log(cartCount);
            let sideView = document.querySelector('.sideView');
            sideView.classList.toggle('showCart');
            
        } catch (err) {
            console.log(err)
        }
    }

})

