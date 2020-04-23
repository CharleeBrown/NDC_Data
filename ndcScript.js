var NDC = document.getElementById("NDC");

var mainURL = "https://api.fda.gov/drug/label.json?search="; // The base URL.
var ndcURL = " https://api.fda.gov/drug/ndc.json?search="; // The base URL for NDC searach
var Label_package_ndc = "openfda.package_ndc:"; // This is the addon to the URL if the lookup is for an NDC.
var Label_product_ndc = "openfda.product_ndc.exact:"; // addon for product NDC lookup. 

function findNDC(){
  
   fetch("'"+mainURL+ Label_product_ndc+"\""+NDC.value+"\""+"'")
   // fetch(workingURL)
    .then((response) =>{
        return response.json();
    })
    .then((data)  =>{
        console.log(data);
       // console.log(workingURL);
        console.log(mainURL+Label_package_ndc+"\""+NDC.value+"\"");
    });

    // The reason for the error is because the file is being run locally. (LocalHost).
    // Run it from a server and the problem should be fixed.  
}

function ClearAll(){
    NDC.value = "";
    NDC.focus();
}
