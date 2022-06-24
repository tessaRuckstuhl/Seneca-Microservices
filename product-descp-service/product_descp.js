module.exports = function (options) {
  //Import the mock data json file
  const mockData = require("./MOCK_DATA.json");

  //Add the patterns and their corresponding functions
  this.add("role:product,cmd:getProductURL", productURL);
  this.add("role:product,cmd:getProductName", productName);

  function productURL(msg, respond) {
    if (msg.productId) {
      const product = mockData.filter((el) => el.product_id == msg.productId);
      console.log("*** productURL found ***", product);

      respond(null, { result: product[0].product_url });
    } else {
      respond(null, { result: "" });
    }
  }
  function productName(msg, respond) {
    if (msg.productId) {
      const product = mockData.filter((el) => el.product_id == msg.productId);
      console.log("*** productName found ***", product);

      respond(null, { result: product[0].product_name });
    } else {
      respond(null, { result: "" });
    }
  }
  //To DO: add the pattern functions and describe the logic inside the function
};
