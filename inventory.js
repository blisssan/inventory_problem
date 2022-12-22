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

  // console.log(mostExpensive);
  return mostExpensive;
}

function findLongCds(inventory) {
  var longCds ={};

  for (let i = 0; i < inventory.length; i++) {

    // Go through the a cd and its tracks to get the total length
    if (inventory[i].type == "cd") {
      var totalSeconds = 0
      for (let y = 0; y < inventory[i].tracks.length; y++) {
        totalSeconds += inventory[i].tracks[y].seconds;
      }
      if (totalSeconds > 3600) {
        var title = inventory[i].title;
        longCds[title] = (inventory[i]);
      }
    }
  }
  console.log(longCds);
  return longCds
}

findLongCds(inventory);
expensiveItems(inventory);
