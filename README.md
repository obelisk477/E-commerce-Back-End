# E-commerce-Back-End / Module 13


## Description

This application serves as the backend of an e-commerce website, offering multiple RESTful API endpoints that allow for CRUD operations on the product database from the front end of the website. Of course, the backend can also be accessed with various API testing platforms such as Insomnia or Postman.
<br>
<br>

## Usage

To use the application, download the code from the repo found at https://github.com/obelisk477/E-commerce-Back-End/. Install the requisie packages & dependencies by using 'npm i' in your terminal. If you haven't initialized the database already, you'll need to navigate to the 'db' directory, login to your MySQL shell, and run the command 'source schema.sql' to create an 'ecommerce_db' database. 

Then, after exiting the shell and navigating back to the root folder, you'll need to copy the text from the '.env.EXAMPLE' file into your own new '.env' file, filling out the username and password information needed to connect to MySQL. Finally, you can run 'node seeds' to seed the database with some initial data.

After that you can start the server by running 'node server'. At this point, you are ready to make API calls to the server via an API testing tool -- though this can also function as a standalone API when connected to the frontend of a website.
<br>
<br>
### GET Requests & Request Endpoints

Getting a list of all products, categories, or tags can be accomplished by sending a GET request to the API endpoints below:

- Products: [/api/products](/api/products)
- Tags:      [/api/tags](/api/tags)
- Categories:    [/api/categories](/api/categories)

Adding an '/:id' to any of these endpoints will return a single record (instead of all records) for that model identified by the primary key passed as the id parameter.
<br>
<br>
### POST, PUT, and DELETE Requests

The endpoints for POST, PUT, and DELETE requests are of course the same as the ones above, and requiure the aforementioned '/:id' parameter for whatever record you are trying to modify. Examples for the bodies of the requests are as follows:

**Product**
```
{
    product_name: "Basketball",
    price: 200.00,
    stock: 3,
    tagIds: [1, 2, 3, 4] 
}
```
**Tag**
```
{
	"tag_name": "purple"
}
```
**Category**
```
    {
      "category_name": "Country Music"
    }
```
<br>

## Video

A video demonstration of the application's functionality can be found at https://drive.google.com/file/d/1Zu2Cs4YLo8PmhEeG6tRr4-Fes8fE11gz/view


## License

Please refer to the LICENSE in the repo.


## Credits

* MIT License generated by GitHub
* Idea for using error handling middleware to avoid server crashes comes from ChatGPT, referencing [this documentation](https://expressjs.com/en/guide/error-handling.html)
