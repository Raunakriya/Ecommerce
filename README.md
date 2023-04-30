# Ecommerce Api


# ABOUT

This is an Ecommerce API made using Node.Js & MongoDB.

STEPS TO USE THE API:

Run "npm init" command on terminal in this projects directory
start the server using node app.js
Open postman
Make a GET request on http://localhost:5000/api/products/
The products should be visible

STEPS TO CREATE A NEW PRODUCT:

Start the server using node app.js
Open postman
put http://localhost:5000/api/products/create as the url.
Select Body tab below the url textarea and then select x-www-form-urlencoded
Add name & quantity as the keys and set the desired values for the keys.
Make a POST request.
If you recieve the added  new product  then you have done everything correct.
The product is created. Check it out by making a GET request at http://localhost:5000/api/products/


STEPS TO DELETE A PRODUCT:

Copy the object id of the product you want to delete.
put the id in params of  http://localhost:5000/api/products/:id URL
Make a DELETE request.
You will recieve a message saying Product deleted.


STEPS TO UPDATE THE QUANTITY OF A PRODUCT:

Copy the object id of the product whose quantity you want to update
Put the id  In params  and number value in query  of http://localhost:5000/api/products/:id/update_quantity/?number={x} url
in the url where x is the number by which you want to increase or decrease the quantity.
Make a put request and you should get updated product as data and a message containing the Updated successfully
