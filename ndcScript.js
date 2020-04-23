var NDC = document.getElementById("NDC");

var mainURL = "https://api.fda.gov/drug/ndc.json?search="; // The base URL.
var package_ndc = "openfda.package_ndc:"; // This is the addon to the URL if the lookup is for an NDC.
var product_ndc = "openfda.product_ndc"; // addon for product NDC lookup. 
