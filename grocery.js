/* Grocer List
Author: Marvin Johnson
Created: 3/13/2020
Last Edit: 3/14/2020
Description: This function will create and display a list of grocery items, with name, brand and number of each
within an HTML Page in plain text with not style formatting
*/
var Groceries = /** @class */ (function () {
    function Groceries(GroceryName, brand, amount) {
        this.GroceryName = GroceryName;
        this.brand = brand;
        this.amount = amount;
        this.GroceryItem = [GroceryName, brand, amount];
    }
    return Groceries;
}());
function createGroceryList(groceryList) {
    //generate list item
    var listItem = groceryList.GroceryName + " | " + groceryList.brand + " | " + groceryList.amount + "\n";
    return listItem;
}
function addElement(innerText) {
    // create a new div element 
    var newDiv = document.createElement("div");
    // and give it some content 
    var newContent = document.createTextNode(innerText);
    // add the text node to the newly created div
    newDiv.appendChild(newContent);
    // add the newly created element and its content into the DOM 
    var currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv);
}
var items = [['Apple', 'Fiji', '5'], ['Cookies', 'Oreos', '2'], ['Chips', 'Doritos', '1'], ['Pizza', 'Tombstone', '10'],
    ['Toilet Paper', 'Charmin', '20'], ['Hand Sanitizer', 'Dial', '50'], ['Milk', 'Silk', '2']];
for (var index in items) {
    var newItem = items[index];
    var ItemInfo = createGroceryList(new Groceries(newItem[0], newItem[1], newItem[2]));
    addElement(ItemInfo);
}
