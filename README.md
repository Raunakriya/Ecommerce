# Ecommerce Api


# ABOUT

This is an Ecommerce API made using Node.Js & MongoDB.

STEPS TO USE THE API:

1.Run "npm init" command on terminal in this projects directory

2.start the server using node app.js

3.Open postman

4.Make a GET request on http://localhost:5000/api/products/

5.The products should be visible

STEPS TO CREATE A NEW PRODUCT:

1.Start the server using node app.js

2.Open postman

3.put http://localhost:5000/api/products/create as the url.

4.Select Body tab below the url textarea and then select row and type json

5.Add name & quantity as the body and set the desired values for the body

6.Make a POST request.

7.If you recieve the added  new product  then you have done everything correct.

8.The product is created. Check it out by making a GET request at http://localhost:5000/api/products/


STEPS TO DELETE A PRODUCT:

1.Copy the object id of the product you want to delete.

2.put the id in params of  http://localhost:5000/api/products/:id URL

3.Make a DELETE request.

4.You will recieve a message saying Product deleted.


STEPS TO UPDATE THE QUANTITY OF A PRODUCT:

1.Copy the object id of the product whose quantity you want to update

2.Put the id  In params  and number value in query  of http://localhost:5000/api/products/:id/update_quantity/?number={x} url

in the url where x is the number by which you want to increase or decrease the quantity.

3.Make a put request and you should get updated product as data and a message containing the Updated successfully
