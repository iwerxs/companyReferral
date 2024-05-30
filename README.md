## Company Referral Web App

The project structure is separated into frontend and backend.

The respective directories while maintaining clear organization for components, styles, services, and environment variables are independant.

This diagram visualises the project structure.

company-referral-app/
├── backend/
│   ├── controllers/
│   │   └── referralController.js
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   └── referralRoutes.js
│   ├── config/
│   │   └── db.js
│   ├── .env
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── public/
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   ├── manifest.json
│   │   └── robots.txt
│   ├── src/
│   │   ├── components/
│   │   │   ├── ReferralForm.js
│   │   │   └── ReferralForm.css
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── styles/
│   │   │   └── index.css
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css
│   ├── .env
│   ├── package.json
│   └── README.md
├── .gitignore
└── README.md
