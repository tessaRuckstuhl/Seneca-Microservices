module.exports = function (options) {
    //Import the mock data json file
    const mockData = require('./MOCK_DATA.json');
    //To DO: Add the patterns and their corresponding functions
    this.add('role:product,cmd:getProductPrice', productPrice);

    function productPRice(productId){
        const product = mockData.find(el.product_id == productId)
        return product.product_price
    }

    //To DO: add the pattern functions and describe the logic inside the function

}