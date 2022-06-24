module.exports = function (options) {
    //Import the mock data json file
    const mockData = require('./MOCK_DATA.json');

    //Add the patterns and their corresponding functions
    this.add('role:product,cmd:getProductURL', productURL);
    this.add('role:product,cmd:getProductName', productName);

    function productUrl(productId){
        const product = mockData.find(el.product_id == productId)
        return product.name
    }
    function productName(productId){
        const product = mockData.find(el.product_id == productId)
        return product.url
    }
    //To DO: add the pattern functions and describe the logic inside the function

}