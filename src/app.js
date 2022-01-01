import "./styles.css";
import axios from "axios";

axios
    .get("https://my-json-server.typicode.com/modanisatech/bootcamp-db/products")
    .then((response) => {

        // Firstly, log response to the console,
        console.log(response);
        // inspect the response and see that it has data field

        // Assign data field of the response to
        // products variable below by destructuring
        // You can use alias
        const product = { id, name, description, image } = response.data;
        // Print names of all product to the console
        // by calling foreach  method (use arrow function)
          product.forEach((item) => console.log(item.name))


        // Get all products that contain "Şal" in their name (use filter method)
        var filteredProduct = product.filter((s) => s.description.indexOf('Şal') !== -1);
        //console.log(filteredProduct);
        // map filtered products to new object having only image and name field
        // assign mapped items to mappedProducts variable
        const mappedProducts = filteredProduct.map((ss) =>
        ({

            name: ss.name,
            image: ss.image
        }));
        //console.table(mappedProducts)
        let app = document.getElementById('app');
        // Display the images and names of mappedProducts
        // You need to add them to the DOM
        mappedProducts.forEach((ss) => app.appendChild(imageAndNameDiv(ss.name, ss.image)))
        // you need to use forEach method
        // You need to use flexbox
        // Position of image and text is up to you
        // You can use any style you wish
    });
const imageAndNameDiv = ((name, img) => {

    var imgElem = document.createElement("img");
    imgElem.setAttribute("src", img);
    imgElem.setAttribute("alt", name);
    imgElem.setAttribute("class", "ImgItem")
    var spanElem = document.createElement("span")
    spanElem.setAttribute("class", "SpanItem")
    spanElem.innerText = name;
    var divElem = document.createElement("div");
    divElem.setAttribute("class", "divItem");
    divElem.appendChild(imgElem);
    divElem.appendChild(spanElem);
    return divElem;
});
