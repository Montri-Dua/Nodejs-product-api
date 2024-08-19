# Nodejs-product-api
 ## Run App
 node index.js
 ## Test Your API
##With this setup, your product routes are now accessible via endpoints like:

Create Product: POST http://localhost:3000/api/products
Get All Products: GET http://localhost:3000/api/products
Get Product by ID: GET http://localhost:3000/api/products/:id
Update Product by ID: PUT http://localhost:3000/api/products/:id
Delete Product by ID: DELETE http://localhost:3000/api/products/:id


## Docker Build
docker build --tag nodejs-product-api .
docker images
docker tag nodejs-product-api:latest nodejs-product-api:v1.0.0
## remove
docker rmi nodejs-product-api

## Docker Run
docker run nodejs-product-api
