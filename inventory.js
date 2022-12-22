var inventory = [{

  "price": 15.99,

  "chapters": [

	"one",

	"two",

	"three"

  ],

  "year": 1999,

  "title": "foo",

  "author": "mary",

  "type": "book"

},

{

  "price": 14.99,

  "chapters": [

	"one",

	"two",

	"three"

  ],

  "year": 1999,

  "title": "foo",

  "author": "had",

  "type": "book"

},

{

  "price": 13.99,

  "chapters": [

	"one",

	"two",

	"three"

  ],

  "year": 1999,

  "title": "1984",

  "author": "a",

  "type": "book"

},

{

  "price": 12.99,

  "chapters": [

	"one",

	"two",

	"three"

  ],

  "year": 1999,

  "title": "foo",

  "author": "little",

  "type": "book"

},

{

  "price": 11.99,

  "chapters": [

	"one",

	"two",

	"three"

  ],

  "year": 1999,

  "title": "foo",

  "author": "lamb",

  "type": "book"

},

{

  "price": 10.99,

  "chapters": [

	"one",

	"two",

	"three"

  ],

  "year": 1999,

  "title": "foo",

  "author": "joseph",

  "type": "book"

},

{

  "price": 11.99,

  "minutes": 90,

  "year": 2004,

  "title": "2001: An",

  "director": "alan",

  "type": "dvd"

},

{

  "price": 11.99,

  "minutes": 90,

  "year": 2004,

  "title": "Affair",

  "director": "alan",

  "type": "dvd"

},

{

  "price": 11.99,

  "minutes": 90,

  "year": 2004,

  "title": "To",

  "director": "alan",

  "type": "dvd"

},

{

  "price": 11.99,

  "minutes": 90,

  "year": 2004,

  "title": "Remember",

  "director": "alan",

  "type": "dvd"

},

{

  "price": 15.99,

  "tracks": [

	{

  	"seconds": 180,

  	"name": "one"

	},

	{

  	"seconds": 200,

  	"name": "two"

	}

  ],

  "year": 2000,

  "title": "baz",

  "author": "joan",

  "type": "cd"

},

{

  "price": 15.99,

  "tracks": [

	{

  	"seconds": 180,

  	"name": "one"

	},

	{

  	"seconds": 200,


  	"name": "two"

	}

  ],

  "year": 2000,

  "title": "baz",

  "author": "joseph",

  "type": "cd"

},

{

  "price": 16.99,

  "tracks": [

	{

  	"seconds": 1900,

  	"name": "one"

	},

	{

  	"seconds": 1800,

  	"name": "two"

	}

  ],

  "year": 2000,

  "title": "baz",

  "author": "juan",

  "type": "cd"

},

{

  "price": 17.99,

  "tracks": [

	{

  	"seconds": 1800,

  	"name": "2015"

	},

	{

  	"seconds": 2800,

  	"name": "two"

	}

  ],

  "year": 2000,

  "title": "1989",

  "author": "john",

  "type": "cd"

},

{

  "price": 18.99,

  "tracks": [

	{

  	"seconds": 1800,

  	"name": "one"

	},

	{

  	"seconds": 2800,

  	"name": "two"

	}

  ],

  "year": 2000,

  "title": "If you're reading this",

  "author": "john",


  "type": "cd"

},

{

  "price": 19.99,

  "tracks": [

	{

  	"seconds": 1800,

  	"name": "one"

	},

	{

  	"seconds": 2800,

  	"name": "two"

	}

  ],

  "year": 2000,

  "title": "It's too late",

  "author": "john",

  "type": "cd"

},

{

  "price": 20.99,

  "tracks": [

	{

  	"seconds": 1800,

  	"name": "one"

	},

	{

  	"seconds": 2800,

  	"name": "two"

	}

  ],

  "year": 2000,

  "title": "Nothing was the same",

  "author": "drake",

  "type": "cd"

}];

/**
 * returns the five most expensive items from each category.
 * @param {obj} inventory The inventory JSON object.
 */
function expensiveItems(inventory) {
  var mostExpensive = new Object();

  // sort the items by price
  inventory.sort((firstItem, secondItem) => secondItem.price - firstItem.price);

  // Adds a list for each product type to the object that will contain the five
  // most expensive proucts for each type.
  for (let i = 0; i < inventory.length; i++) {
    if (mostExpensive.hasOwnProperty(inventory[i].type) == false) {
      var typeToAdd = inventory[i].type;
      mostExpensive[typeToAdd] = [];
    }
  }

  // Adds the five most expensive items of each type to the mostExpensive object
  for (let i = 0; i < inventory.length; i++) {
    var typeToAdd = inventory[i].type;
    if (mostExpensive[typeToAdd].length < 5) {
      mostExpensive[typeToAdd].push(inventory[i]);
    }
  }

  return mostExpensive;
}

/**
 * returns cds that are longer than 60 minutes.
 * @param {obj} inventory The inventory JSON object.
 */
function findLongCds(inventory) {
  var longCds ={};

  for (let i = 0; i < inventory.length; i++) {

    // Go through the a cd
    if (inventory[i].type == "cd") {
      var totalSeconds = 0

      // Go through its tracks and find the total length
      for (let y = 0; y < inventory[i].tracks.length; y++) {
        totalSeconds += inventory[i].tracks[y].seconds;
      }

      // Add the cd to the list of long cds if its longer than 3600s
      if (totalSeconds > 3600) {
        var title = inventory[i].title;
        longCds[title] = (inventory[i]);
      }
    }
  }
  return longCds
}

function findCdBookAuthors(inventory) {
  var cdBookAuthors = [];
  var bookAuthors = [];
  var cdAuthors = [];

  // populate the list of book authors and list of cd authors
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].type == "book") {
      bookAuthors.push(inventory[i].author);
    }
    else if (inventory[i].type == "cd") {
      cdAuthors.push(inventory[i].author);
    }
  }

  // compare both lists and add authors that appear in both lists to the list
  // of authors that have released cds and books.
  for (let i = 0; i < cdAuthors.length; i++) {
    if (bookAuthors.includes(cdAuthors[i])) {
      cdBookAuthors.push(cdAuthors[i]);
    }
  }
  return cdBookAuthors;
}

/**
 * returns true if a book or cd contains a year in its chapters or tracks.
 * @param {obj} inventory The inventory JSON object.
 */
function checkBooksAndCdsForYear(inventoryItem) {
  const regex = /\d\d\d\d/;
  if (inventoryItem.type == "book") {
    for (let y = 0; y < inventoryItem.chapters.length; y++) {
      if (inventoryItem.chapters[y].match(regex)) {
        return true;
      }
    }
  }

  // Check cd tracks
  else if (inventoryItem.type == "cd") {
    for (let y = 0; y < inventoryItem.tracks.length; y++) {
      if (inventoryItem.tracks[y]["name"].match(regex)) {
        return true;
      }
    }
  }
  return false;
}

function findItemsThatContainYear(inventory) {
  var itemsThatContainYear = [];
  const regex = /\d\d\d\d/;

  // Go through the inventory
  for (let i = 0; i < inventory.length; i++) {

    // Add the item if the title contains a year and don't bother checking
    // any chapters or tracks
    if (inventory[i].title.match(regex)) {
      itemsThatContainYear.push(inventory[i]);
    }
    else {

      // check book chapters
      if (inventory[i].type == "book") {
        if (checkBooksAndCdsForYear(inventory[i]) == true) {
          itemsThatContainYear.push(inventory[i]);
        };
      }

      // Check cd tracks
      else if (inventory[i].type == "cd") {
        if (checkBooksAndCdsForYear(inventory[i]) == true) {
          itemsThatContainYear.push(inventory[i]);
        };
      }
    }
  }
  return itemsThatContainYear;
}
expensiveItems(inventory);
findLongCds(inventory);
findCdBookAuthors(inventory);
findItemsThatContainYear(inventory);
