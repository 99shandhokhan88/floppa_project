# floppa_project
Training project for Leonardo project at 42 Roma

Sure! Here is a `README.md` file that outlines the structure and setup for your project:

```markdown
# Inventory Web App

This project is an inventory management web application developed as part of the 42 Roma LUISS challenge. The application is built using React and TypeScript for the frontend, Java Spring Boot for the backend, and MongoDB for the database. Docker is used for containerization.

## Project Structure

### Frontend
- React with TypeScript
- State management (Redux or Context API)
- UI components (Material-UI or Bootstrap)

### Backend
- Java Spring Boot
- RESTful API
- MongoDB integration using Spring Data MongoDB

### Database
- MongoDB

### DevOps
- Docker for containerization
- Docker Compose to manage multi-container applications

## Setup

### Frontend Setup

1. **Initialize React App:**
   ```bash
   npx create-react-app inventory-app --template typescript
   ```

2. **Install Dependencies:**
   ```bash
   npm install @mui/material @emotion/react @emotion/styled axios redux react-redux
   ```

3. **Project Structure:**
   ```
   src/
   ├── components/
   ├── pages/
   ├── services/
   ├── store/
   ├── App.tsx
   └── index.tsx
   ```

### Backend Setup

1. **Initialize Spring Boot Project:**
   Use [Spring Initializr](https://start.spring.io/) with dependencies:
   - Spring Web
   - Spring Data MongoDB
   - Lombok

2. **Project Structure:**
   ```
   src/
   ├── main/
   │   ├── java/com/example/inventory/
   │   │   ├── controller/
   │   │   ├── model/
   │   │   ├── repository/
   │   │   └── service/
   └── test/
   ```

3. **Application Properties:**
   ```properties
   spring.data.mongodb.uri=mongodb://localhost:27017/inventorydb
   ```

### Database Setup

1. **Run MongoDB in Docker:**
   ```yaml
   version: '3.8'
   services:
     mongodb:
       image: mongo:latest
       container_name: mongodb
       ports:
         - "27017:27017"
       volumes:
         - mongo-data:/data/db
   volumes:
     mongo-data:
   ```

## Features

### Mandatory Features

1. **Add/Remove Article:**
   - **Frontend:** Create forms for adding and removing articles.
   - **Backend:** Implement REST endpoints to handle these operations.
   - **Database:** Store article details in MongoDB.

2. **Modify Article:**
   - **Frontend:** Create a form for editing article details.
   - **Backend:** Implement REST endpoint for updating articles.
   - **Database:** Update article details in MongoDB.

3. **Add Options to Articles:**
   - **Frontend:** Allow options such as sizes for a product.
   - **Backend:** Handle options in the article model.
   - **Database:** Store options in MongoDB.

4. **View Product History and Statistics:**
   - **Frontend:** Display historical data and statistics.
   - **Backend:** Implement logic to fetch and calculate statistics.
   - **Database:** Store and query historical data.

### Bonus Features

1. **Authentication:**
   - Implement simple username/password authentication or use OAuth with Google, Facebook, etc.

2. **User Roles:**
   - Create roles like admin and user with different permissions.

3. **Product Identifiers:**
   - Assign unique identifiers to products for easier lookup.

## Integration

1. **Frontend and Backend Communication:**
   - Use Axios in React to make API calls to the Spring Boot backend.

2. **Dockerize the Application:**
   - Create `Dockerfile` for both frontend and backend.
   - Use Docker Compose to run the entire stack.

### Example Docker Compose Setup
```yaml
version: '3.8'
services:
  frontend:
    build: ./frontend
    ports:
      - "3000:3000"
  backend:
    build: ./backend
    ports:
      - "8080:8080"
    depends_on:
      - mongodb
  mongodb:
    image: mongo:latest
    ports:
      - "27017:27017"
    volumes:
      - mongo-data:/data/db
volumes:
  mongo-data:
```

## Development Workflow

1. **Frontend:**
   - Develop UI components and connect them to the backend API.
   - Ensure smooth state management and error handling.

2. **Backend:**
   - Develop API endpoints and business logic.
   - Ensure proper error handling and validation.

3. **Testing:**
   - Write unit and integration tests for both frontend and backend.

4. **Deployment:**
   - Use Docker to containerize and deploy the application.

## License

This project is licensed under the MIT License.
```

Save this content to a file named `README.md` in the root of your project directory. This will provide a comprehensive guide for setting up and working on your inventory management web app.
