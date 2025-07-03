/*
1. Declare an array named teaFlavors that contains the strings "green tea", "black tea", and "oolong tea".
Access the first element of the array and store it in a variable named 'firstTea`.
*/

let teaFlavors = ["green tea", "black tea", "oolong tea"];
let firstTea = teaFlavors[0];
console.log(firstTea);

/*
2. Declare an array named 'cities containing "London" `"Tokyo", "Paris", and "New York". Access the third element in the array and store it in a variable named favoriteCity`.
*/

let cities = ["London", "Tokyo", "Paris", "New York"];

favoriteCity = cities[2];
console.log(favoriteCity);

/*
3. You have an array named teaTypes` containing "herbal tea", "white tea", and "masala chai".
Change the second element of the array to "jasmine tea".
*/
let teaTypes = ["herbal tea", "white tea", "masala chai"];
teaTypes[1] = "jasmine tea";
console.log(teaTypes[1]);

/*
4. Declare an array named citiesVisited containing "Mumbai" and "Sydney".
Add "Berlin" to the array using the push method.
*/
let citiesVisited = ["Mumbai", "Sydney"];
citiesVisited[citiesVisited.length] = "Berlin";
console.log(citiesVisited);
/*
5. You have an array named teaorders` with "chai", `"iced tea"`, `"matcha"`, and `"earl grey"`. Remove the last element of the array using the pop method and store it in a variable named 'lastOrder`.
*/

let teaorders = ["chai", "iced tea", "matcha"];
console.log(teaorders);
const deletedEle = teaorders.pop();
console.log(teaorders);
console.log(deletedEle);

/*
6. You have an array named 'popularTeas containing `"green tea", "oolong tea", and "chai".
Create a soft copy of this array named `softCopy Teas`.
*/

let popularTeas = ["green tea", "oolong tea", "chai"];
let softCopy = popularTeas;
console.log(popularTeas);
console.log(softCopy);

/*
7. You have an array named topCities containing `"Berlin", "Singapore", and "New York"`.
Create a hard copy of this array named `hardCopyCities`.
*/

let topCities = ["Berlin", "Singapore", "New York"];

let hardCopyCities = [...topCities];
// let hardCopyCities = topCities.slice();
console.log(topCities);
console.log(hardCopyCities);

/*
8. You have two arrays: `europeanCities containing "Paris" and "Rome"`, and `asianCities containing "Tokyo" and "Bangkok"`.
Merge these two arrays into a new array named `worldCities`.
*/

europeanCities = ["Paris", "Rome"];
asianCities = ["Tokyo", "Bangkok"];
worldCities = [europeanCities, asianCities];
console.log(worldCities);

worldCities = europeanCities.concat(asianCities);
console.log(worldCities);

worldCities = [...europeanCities, ...asianCities];
console.log(worldCities);

/*
9. You have an array named teaMenu containing `"masala chai"`, `"oolong tea", "green tea", and `"earl grey".
Find the length of the array and store it in a variable named 'menuLength`.
*/

let teaMenu = ["masala chai", "oolong tea", "green tea", "earl grey"];
console.log(teaMenu.length);

/*
10. You have an array named cityBucketList containing `"Kyoto", "London", "Cape Town", and "Vancouver"`.
Check if "London" is in the array and store the result in a variable named 'isLondonInList`.
*/

let cityBucketList = ["Kyoto", "London", "Cape Town", "Vancouver"];
let isLondonInList = cityBucketList.includes("London");
console.log(isLondonInList);
