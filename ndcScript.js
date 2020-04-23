var NDC = document.getElementById("NDC");

var mainURL = "https://api.fda.gov/drug/label.json?search="; // The base URL.
var ndcURL = " https://api.fda.gov/drug/ndc.json?search="; // The base URL for NDC searach
var Label_package_ndc = "openfda.package_ndc:"; // This is the addon to the URL if the lookup is for an NDC.
var Label_product_ndc = "openfda.product_ndc:"; // addon for product NDC lookup. 
