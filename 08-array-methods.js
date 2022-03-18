const items = [
{ name: 'Bike', price: 100	},
{ name: 'key', price: 30	},
{ name: 'Lite', price: 450	},
{ name: 'Phone', price: 100	},
{ name: 'Computer', price: 850	},
{ name: 'Book', price: 20	}
]

// Filter method
const filteredItems = items.filter((item) => {
	return item.price <=100	
})
console.log(filteredItems)

// Map method
const itemNames = items.map((item) => {
	return item.name	
})
console.log(itemsName)