function countryInfo() {

var countryinfo = new XMLHttpRequest();

countryinfo.open("GET", "jsonfiles/country.json");
countryinfo.send();

countryinfo.onreadystatechange = function getInfo() {
  if (countryinfo.readyState === 4) {
    if (countryinfo.status === 200) {
	  ccountry = JSON.parse(countryinfo.responseText)
    } 
  }
};

country = document.getElementById("country").value;
document.getElementById("capital").innerHTML = "<br>";
document.getElementById("continent").innerHTML = "<br>";
document.getElementById("code").innerHTML = "<br>";

for (i = 0; i < ccountry.length; i++) {

	if	(ccountry[i].CountryName == country) {
	document.getElementById("capital").innerHTML = "⦿ Country's Capital: <b>" + ccountry[i].CapitalName + "</b>";
	document.getElementById("continent").innerHTML = "⦿ Located on the Continent of: <b>" + ccountry[i].ContinentName + "</b>";
	document.getElementById("code").innerHTML = "⦿ Country's Code: <b>" + ccountry[i].CountryCode + "</b>";
} 
}
}