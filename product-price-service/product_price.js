module.exports = function (options) {
  //Import the mock data json file
  const mockData = require("./MOCK_DATA.json");
  //To DO: Add the patterns and their corresponding functions
  this.add("role:product,cmd:getProductPrice", productPrice);

  function productPrice(msg, respond) {
    if (msg.productId) {
      const product = mockData.filter((el) => el.product_id == msg.productId);
      console.log("*** productPrice found ***", product);

      respond(null, { result: product[0].product_price });
    } else {
      respond(null, { result: "" });
    }
  
  }

  //To DO: add the pattern functions and describe the logic inside the function
};
