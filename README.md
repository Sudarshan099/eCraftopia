Project: E-commerce Store for Handmade Crafts
Craftopia

MongoDB Collection Design
Collections Overview
1.	Users
2.	Products
3.	Orders
4.	Reviews
5.	Categories
6.	Cart
Collection Details
1. Users
Data to be Stored:
•	_id: ObjectId (primary key)
•	username: string
•	email: string
•	password: string
•	firstName: string
•	lastName: string
•	address: string
•	phone: string
•	dateJoined: date
Relationships:
•	One-to-Many with Orders (a user can have multiple orders)
•	One-to-Many with Reviews (a user can write multiple reviews)
2. Products
Data to be Stored:
•	_id: ObjectId (primary key)
•	name: string
•	description: string
•	price: number (decimal)
•	stock: number
•	categoryId: ObjectId (foreign key to Categories)
•	sellerId: ObjectId (foreign key to Users)
•	images: array of strings (URLs)
•	dateAdded: date
Relationships:
•	Many-to-One with Categories (a product belongs to one category)
•	Many-to-One with Users (a product is sold by one user)
•	One-to-Many with Reviews (a product can have multiple reviews)
3. Orders
Data to be Stored:
•	_id: ObjectId (primary key)
•	userId: ObjectId (foreign key to Users)
•	products: array of objects containing productId and quantity
•	totalPrice: number (decimal)
•	orderDate: date
•	status: string
Relationships:
•	Many-to-One with Users (an order belongs to one user)
•	Many-to-Many with Products (an order can have multiple products)
4. Reviews
Data to be Stored:
•	_id: ObjectId (primary key)
•	userId: ObjectId (foreign key to Users)
•	productId: ObjectId (foreign key to Products)
•	rating: number (integer)
•	comment: string
•	reviewDate: date
Relationships:
•	Many-to-One with Users (a review is written by one user)
•	Many-to-One with Products (a review belongs to one product)
5. Categories
Data to be Stored:
•	_id: ObjectId (primary key)
•	name: string
•	description: string
Relationships:
•	One-to-Many with Products (a category can have multiple products)
6. Cart
Data to be Stored:
•	_id: ObjectId (primary key)
•	userId: ObjectId (foreign key to Users)
•	products: array of objects containing productId and quantity
Relationships:
•	One-to-One with Users (each user has one cart)
•	Many-to-Many with Products (a cart can contain multiple products)


