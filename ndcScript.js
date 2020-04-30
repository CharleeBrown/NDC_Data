"use strict";
var NDC = document.getElementById("NDC");
var productName = document.getElementById("prodName");
var productManu = document.getElementById("prodManu");
var mainURL = "https://api.fda.gov/drug/label.json?search="; // The base URL.
var ndcURL = " https://api.fda.gov/drug/ndc.json?search="; // The base URL for NDC searach
var Label_package_ndc = "openfda.package_ndc:"; // This is the addon to the URL if the lookup is for an NDC.
var Label_product_ndc = "openfda.product_ndc.exact:"; // addon for product NDC lookup. 

function findNDC(){
  
   fetch(mainURL+ Label_package_ndc+"\""+NDC.value+"\"")
   
    .then((response) =>{
        return response.json();
    })
    .then((data) => {
        for(var i = 0; i < data.length; i++)
        productName.value = data.results[i].openfda.brand_name.toString();
        productManu.value = data.results[i].openfda.manufacturer_name.toString();
       console.log(data.results)
    });

    
}

function ClearAll(){
    NDC.value = "";
    productName.value = "";
    productManu.value = "";
    NDC.focus();
}
