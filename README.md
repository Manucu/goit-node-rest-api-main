# goit-node-rest-api

A simple **REST API** built with **Node.js + Express**, providing CRUD operations for a contacts collection.  
The project demonstrates RESTful routing, data validation with Joi, error handling, and integration testing with Postman.  

---

## 📦 Requirements
- Node.js LTS (>= 18)
- npm
- Postman (for API testing)

---

## 🚀 Installation


# 1. Clone the repository
git clone https://github.com/<your-username>/goit-node-rest-api.git
cd goit-node-rest-api

# 2. Install dependencies
npm install

# 3. Start the server
npm run dev
The API will be available at:

bash
http://localhost:3000/api/contacts


---


## 📂 Project Structure

<img width="1367" height="812" alt="Screenshot 2025-08-29 212258" src="https://github.com/user-attachments/assets/baab7742-acab-4441-9742-b4d05bd55366" />



---


## 🌐 API Routes
GET /api/contacts
Returns all contacts.

200 OK → [ {id, name, email, phone}, ... ]

GET /api/contacts/:id
Returns contact by ID.

200 OK → {id, name, email, phone}

404 Not Found → {"message":"Not found"}

POST /api/contacts
Create a new contact.

Body (JSON):



json
{
  "name": "Mango",
  "email": "mango@mail.com",
  "phone": "322-22-22"
}


201 Created → {id, name, email, phone}

400 Bad Request → {"message": "Validation error"}

PUT /api/contacts/:id
Update an existing contact (partial update allowed).

Body (JSON):

json

{
  "phone": "999-99-99"
}


200 OK → {id, name, email, phone}

400 Bad Request → {"message":"Body must have at least one field"}

404 Not Found → {"message":"Not found"}

DELETE /api/contacts/:id
Remove contact by ID.

200 OK → {deleted contact}

404 Not Found → {"message":"Not found"}



---


## 📸 Screenshots (Postman testing)
GET all contacts

GET contact by ID

POST new contact

DELETE contact

PUT update contact




## 📡 Validation with Joi
All POST and PUT requests are validated with Joi (contactsSchemas.js).

Ensures that:

POST requires { name, email, phone }.

PUT requires at least one of { name, email, phone }.


---


## ⚡ Error Handling
Errors are managed with a custom HttpError helper.

Centralized error middleware ensures correct status codes and JSON messages.


---


## 📖 Grading Criteria
All routes implemented and tested in Postman.

Correct status codes (200, 201, 400, 404).

Validation and error handling included.

Screenshots of Postman tests attached.




---


## 📝 License
MIT © 2025
Built with ❤️ by Alexander Andersen
