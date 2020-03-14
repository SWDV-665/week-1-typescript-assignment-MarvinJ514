/* Grocer List
Author: Marvin Johnson
Created: 3/13/2020
Last Edit: 3/14/2020
Description: This function will create and display a list of grocery items, with name, brand and number of each
within an HTML Page in plain text with not style formatting
*/

class Groceries {
    GroceryItem: string[];
    constructor(
        public GroceryName: string,
        public brand: string,
        public amount: string
    ){
        this.GroceryItem = [GroceryName, brand, amount];
    }
}

interface Grocery {
    GroceryName: string;
    brand: string;
    amount: string;
}

function createGroceryList(groceryList: Grocery){
    //generate list item
    let listItem = groceryList.GroceryName + " | " + groceryList.brand + " | " + groceryList.amount + "\n";
    return listItem ;
}

function addElement (innerText) { 
    // create a new div element 
    let newDiv = document.createElement("div"); 
    // and give it some content 
    let newContent = document.createTextNode(innerText); 
    // add the text node to the newly created div
    newDiv.appendChild(newContent);  
    // add the newly created element and its content into the DOM 
    let currentDiv = document.getElementById("div1"); 
    document.body.insertBefore(newDiv, currentDiv); 
  }

let items = [['Apple','Fiji','5'],['Cookies','Oreos','2'],['Chips','Doritos','1'],['Pizza','Tombstone','10'],
            ['Toilet Paper','Charmin','20'],['Hand Sanitizer','Dial','50'],['Milk','Silk','2']];

for(var index in items){
    let newItem = items[index];
    let ItemInfo = createGroceryList(new Groceries(newItem[0],newItem[1],newItem[2]))
    addElement(ItemInfo)
}



