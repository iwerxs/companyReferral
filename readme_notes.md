# Referral System Application

A secure desktop application that registers user credentials and allows users to send referral emails. The application features user registration with secure password storage, email referral functionality, and secure user sessions.

## Table of Contents

1. [Features](#features)
2. [Installation](#installation)
3. [Configuration](#configuration)
4. [Usage](#usage)
5. [API Endpoints](#api-endpoints)
6. [Technologies Used](#technologies-used)
7. [Contributing](#contributing)
8. [License](#license)
9. [Acknowledgements](#acknowledgements)

## Features

- User registration with secure password storage
- Unique email verification
- Password validation (minimum 8 characters, including one number, one lowercase letter, one uppercase letter, and one special character)
- Email referral system with custom subject and body
- Secure user sessions using UUID and bcrypt
- Registration timestamp stored in Epoch time (milliseconds)

## Installation

### Prerequisites

- Node.js
- npm

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/yourproject.git
   cd yourproject
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Configuration

Create a `.env` file in the root directory and add the following environment variables:

```plaintext
EMAIL_USER=admin@getloopli.com
EMAIL_PASS=aBcD1234ef@!
PORT=5000
REACT_APP_BACKEND_URL=http://localhost:5000
```

## Usage

### Running the Backend

Start the backend server:
`bash
	npm start
	`

### Running the Frontend

Navigate to the frontend directory and start the React development server:
`bash
	cd frontend
	npm start
	`

### Accessing the Application

- Backend: http://localhost:5000
- Frontend: http://localhost:3000

## API Endpoints

### POST /api/send-referral

Request

```json
{
  "referrerName": "John Doe",
  "refereeName": "Jane Smith",
  "clientName": "Client Company",
  "clientEmail": "client@example.com",
  "subject": "Referral Subject",
  "reason": "Reason for the referral"
}
```

Response

```json
{
  "message": "Referral email sent successfully"
}
```

## Technologies Used

- React
- Node.js
- Express
- Nodemailer
- bcrypt
- uuid
- express-session

## Contributing

Please read CONTRIBUTING.md for details on our code of conduct, and the process for submitting pull requests.
