# MongoDB - ExpressJS - Svelte (Smelte) - NodeJS

The project basically consists of allowing you to create an account in which you will store different products of what you want which will have name, price per unit and an image, you also have the option to create an order that has different products in different quantities, when creating the order also creates a pdf file with all the data including the date and time of creation.. This is a very basic practical example to get started in the world of web development with frameworks.

You can watch the full youtube tutorial on how to make this practical example step by step [here](https://www.youtube.com/playlist?list=PL3f738vgxpbgIJ_XqrDZCZde3s_d5siN5)

> mesn-be

This folder contains all the backend of the project but also in its public folder it has all the frontend that is generated when you run `$ npm run build` in a vue project, this makes you can see the whole project when you run the `$ npm run dev` script

> mesn-fe

This folder contains the whole frontend of the project made with Svelte and has a connection to our api through axios which is in the `pevn-be` folder so make sure that when you run the `$ npm run dev` script you first start the api by running `$ npm run dev` from the `mesn-be` folder.


Please do not forget this
```
npm install
```
## Views

### SignUp
![SignUp](https://user-images.githubusercontent.com/67696829/103473397-f5742f80-4d65-11eb-8df3-f8809447bc46.png)

### SignIn
![SignIn](https://user-images.githubusercontent.com/67696829/103473416-294f5500-4d66-11eb-8bea-e3280bf2c0cd.png)

### Products
![Products](https://user-images.githubusercontent.com/67696829/103473536-b0e99380-4d67-11eb-81a9-15f491a94704.png)

### Make an order
![making-order](https://user-images.githubusercontent.com/67696829/103473571-30776280-4d68-11eb-8ede-119dd2fe5589.png)

### Orders
![order](https://user-images.githubusercontent.com/67696829/103473656-fe1a3500-4d68-11eb-99e8-6062d616ab7f.png)

### Order details
![order-details](https://user-images.githubusercontent.com/67696829/103473676-3883d200-4d69-11eb-8ffe-3a536a017f51.png)
