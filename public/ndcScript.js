"use strict";
var NDC = document.getElementById("NDC");
var productName = document.getElementById("prodName");
var productManu = document.getElementById("prodManu");

var mainURL = "https://api.fda.gov/drug/label.json?search="; // The base URL.
var ndcURL = " https://api.fda.gov/drug/ndc.json?search="; // The base URL for NDC searach

var Label_package_ndc = "openfda.package_ndc:"; // This is the addon to the URL if the lookup is for an NDC.
var Label_product_ndc = "openfda.product_ndc.exact:"; // addon for product NDC lookup. 
var ndc1 = document.getElementById("ndc1");
var ndc2 = document.getElementById("ndc2");

productName.maxlength = 12;
function findNDC() {
    fetch(mainURL + Label_package_ndc + "\"" + NDC.value + "\"")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            // When I looped through the JSON, I kept receiving "undefined" errors. 
            // I sent the data to another function to loop through and everything works. 
            showData(data)
        });
}
// The entire NDC isn't needed for some reason. TODO : Look up specifications of what's necessary to find NDC data. 
function showData(data) {

    for (var i = 0; i < data.results.length; i++) {
        if(data.results === undefined){
            productName.value = " Enter correct NDC format";
            NDC.setSelectionRange(0, NDC.length);
            NDC.focus();
        }
        // Loops through the json to fill in the fields. 
        console.log(data.results[i])
        productName.value = data.results[i].openfda.brand_name.toString()
        productManu.value = data.results[i].openfda.manufacturer_name.toString()
        // If the first package NDC field is empty, there won't be a second NDC. 
        if (data.results[0].openfda.package_ndc[0] == null) {
            ndc1.value = "";
            ndc2.value = "";

        }
        // If the second one is null, then it will fill the first and clear the second field. 
        else if (data.results[0].openfda.package_ndc[0] != null & data.results[0].openfda.package_ndc[1] == null) {
            ndc1.value = data.results[0].openfda.package_ndc[0].toString();
            ndc2.value = "";
        } else {
            // If both are present. Fill in both. 
            ndc1.value = data.results[0].openfda.package_ndc[0].toString();
            ndc2.value = data.results[0].openfda.package_ndc[1].toString();
        }
    }

}

function ClearAll() {
    NDC.value = "";
    productName.value = "";
    productManu.value = "";
    ndc1.value = "";
    ndc2.value = "";
    NDC.focus();
}