# The Web Developer Bootcamp 2025

This repository contains my progress and projects from **The Web Developer Bootcamp 2025** course. It includes various sections covering modern web development technologies and practices.

## 📚 Course Sections

### Section 13 - Museum of Candy Project

- **Technologies**: HTML, CSS, Bootstrap
- **Key Concepts**: Responsive design, CSS Grid, Flexbox
- **Features**: Interactive candy museum website with modern styling

### Section 19 - Repeating Stuff with Loops

- **Technologies**: JavaScript
- **Key Concepts**: For loops, For...of loops, while loops
- **Features**: Guessing game, Todo list application

### Section 24 - DOM Introduction

- **Technologies**: JavaScript, HTML, CSS
- **Key Concepts**: DOM manipulation, element selection, events
- **Features**: Pokemon selector app, interactive web pages

### Section 25 - DOM Events

- **Technologies**: JavaScript, DOM API
- **Key Concepts**: Event listeners, form events, preventDefault
- **Features**: Random color generators, interactive buttons

### Section 26 - Scorekeeper Code Along

- **Technologies**: JavaScript, HTML, CSS
- **Key Concepts**: Game logic, score tracking, DOM manipulation
- **Features**: Interactive scorekeeper application

### Section 38 - Mongoose with Express

- **Technologies**: Express.js, MongoDB, Mongoose, EJS
- **Key Concepts**: Database integration, CRUD operations, templating
- **Features**: Product management system with full CRUD functionality

### Section 42 - Handling Errors with Express

- **Technologies**: Express.js, MongoDB, Mongoose, Method Override
- **Key Concepts**: Error handling, async/await patterns, middleware
- **Features**: Robust error handling for Express applications

### Section 44 - Data Relationships with Mongoose

- **Technologies**: MongoDB, Mongoose, Express.js
- **Key Concepts**:
  - One-to-Many relationships
  - Population of referenced documents
  - Embedded vs Referenced documents
- **Features**:
  - Farm and Product relationship management
  - User and Address embedded schemas

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (running locally on port 27017)
- Python 3.x (for speech-to-text projects)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/The-Harsh-Vardhan/The-Web-Developer-Bootcamp-2025.git
   cd "The Web Developer Bootcamp 2025"
   ```

2. **Install dependencies for each section**

   ```bash
   # For Mongoose sections
   cd "Section - 38 Mongoose with Express"
   npm install

   cd "../Section - 42 Handling Errors with Express/Async Errors"
   npm install

   cd "../../Section - 44 Data Relationships with Mongoose"
   npm install
   ```

3. **Set up Python environment (for speech projects)**
   ```bash
   python -m venv .venv
   .venv\Scripts\activate  # Windows
   pip install vosk pyaudio
   ```

### Running the Applications

#### Express Applications

```bash
# Navigate to desired section
cd "Section - 38 Mongoose with Express"
node index.js

# Or for async errors section
cd "Section - 42 Handling Errors with Express/Async Errors"
node index.js
```

#### MongoDB Relationships Demo

```bash
cd "Section - 44 Data Relationships with Mongoose"
node modals/farm.js
```

## 🗄️ Database Setup

Make sure MongoDB is running locally:

```bash
mongod
```

The applications use these databases:

- `farmStand` / `farmStand2` - Product management systems
- `relationshipDemo` - Data relationships examples

## 📁 Project Structure

```
The Web Developer Bootcamp 2025/
├── Section - 13 Museum of Candy Project/
├── Section - 19 - Repeating Stuff with Loops/
├── Section - 20 Functions in JS/
├── Section - 24 DOM_Intro_CODE/
├── Section - 25 DOM Events/
├── Section - 26 Scorekeeper Code Along/
├── Section - 38 Mongoose with Express/
├── Section - 42 Handling Errors with Express/
├── Section - 44 Data Relationships with Mongoose/
```

## 🔧 Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+), Bootstrap
- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose ODM
- **Templating**: EJS
- **Tools**: Method Override, Body Parser, Git

## 📋 Features Implemented

### Web Development Fundamentals

- ✅ Responsive design with CSS Grid and Flexbox
- ✅ Interactive DOM manipulation
- ✅ Event handling and form processing
- ✅ Modern JavaScript ES6+ features

### Backend Development

- ✅ RESTful API design
- ✅ CRUD operations with MongoDB
- ✅ Error handling and validation
- ✅ Template rendering with EJS

### Database Management

- ✅ Schema design and validation
- ✅ One-to-Many relationships (Farm → Products)
- ✅ Embedded documents (User → Addresses)
- ✅ Population of referenced documents
- ✅ Data seeding and migration

## 🐛 Known Issues

- Ensure MongoDB is running before starting Express applications

## 📝 Learning Objectives Completed

- ✅ Master HTML, CSS, and modern JavaScript
- ✅ Build responsive web applications
- ✅ Implement server-side programming with Node.js
- ✅ Design and work with databases (MongoDB)
- ✅ Handle asynchronous programming patterns
- ✅ Create full-stack web applications
- ✅ Implement real-time features
- ✅ Handle errors and edge cases
- ✅ Work with external APIs and libraries

## 🚀 Future Enhancements

- [ ] Add user authentication and authorization
- [ ] Implement real-time features with WebSockets
- [ ] Deploy applications to cloud platforms
- [ ] Add comprehensive testing suites
- [ ] Integrate with third-party APIs
- [ ] Add TypeScript support

## 🤝 Contributing

This is a personal learning repository, but suggestions and improvements are welcome! Feel free to:

- Report bugs or issues
- Suggest improvements
- Share learning resources
- Provide feedback on code quality

## 📄 License

This project is for educational purposes as part of The Web Developer Bootcamp 2025 course.

## 📞 Contact

- **GitHub**: [@The-Harsh-Vardhan](https://github.com/The-Harsh-Vardhan)
- **Repository**: [The-Web-Developer-Bootcamp-2025](https://github.com/The-Harsh-Vardhan/The-Web-Developer-Bootcamp-2025)

---

_Happy coding! 🚀_
