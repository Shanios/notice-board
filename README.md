# 📌 Notice Board

A full-stack Notice Board application built using **Next.js (Pages Router)**, **Prisma ORM**, and **TiDB Cloud**. The application allows users to create, view, search, edit, and delete notices through a responsive interface with persistent cloud database storage.

---

# 🚀 Live Demo

**Vercel**

https://notice-board-lilac.vercel.app/

---

# 💻 GitHub Repository

https://github.com/Shanios/notice-board

---

# ✨ Features

- Create new notices
- View all notices
- Edit existing notices
- Delete notices with confirmation
- Search notices by title
- Responsive dashboard for desktop and mobile
- Urgent priority badge
- Server-side input validation
- RESTful API using Next.js API Routes
- Persistent cloud database using TiDB Cloud
- Clean modern UI built with Tailwind CSS

---

# 🛠 Tech Stack

## Frontend

- Next.js 15 (Pages Router)
- React 19
- Tailwind CSS
- Lucide React
- SweetAlert2

## Backend

- Next.js API Routes
- Prisma ORM

## Database

- TiDB Cloud (MySQL Compatible)

## Deployment

- Vercel

---

# 📁 Project Structure

```
notice-board
│
├── components
│   ├── Layout.js
│   ├── NoticeCard.js
│   └── NoticeForm.js
│
├── lib
│   └── prisma.js
│
├── pages
│   ├── api
│   │   └── notices
│   ├── add.js
│   ├── edit
│   └── index.js
│
├── prisma
│   └── schema.prisma
│
├── styles
│
└── README.md
```

---

# ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/Shanios/notice-board.git
```

Move into the project

```bash
cd notice-board
```

Install dependencies

```bash
npm install
```

Generate the Prisma Client

```bash
npx prisma generate
```

Start the development server

```bash
npm run dev
```

Open

```
http://localhost:3000
```

---

# 🔐 Environment Variables

Create a `.env` file in the project root.

```env
DATABASE_URL="your_database_connection_string"
```

---

# 📡 API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/notices` | Get all notices (supports title search using `?search=`) |
| POST | `/api/notices` | Create a new notice |
| PUT | `/api/notices/:id` | Update a notice |
| DELETE | `/api/notices/:id` | Delete a notice |

---

# 🗄 Database

The application uses **Prisma ORM** with **TiDB Cloud**.

All notices are stored in the hosted database and remain available after refreshes and redeployments.

---

# 📱 Responsive Design

The interface is responsive and optimized for:

- Desktop
- Tablet
- Mobile

---

# 🔍 Search

Search is implemented on the **server side**.

Users can search notices by title. The frontend sends the search term to the API, and Prisma filters the results directly from the database before returning them to the client.

---

# 🚀 Future Improvements

If given more time, I would add:

- Image upload using Cloudinary
- Pagination
- Category and priority filters
- Authentication and authorization
- Rich text editor for notice descriptions
- Unit and integration tests
- Dark mode

---

# 🤖 AI Usage

AI tools were used as a development assistant to:

- Explain concepts related to Next.js, Prisma, and TiDB.
- Help debug development and deployment issues.
- Review UI improvements and responsive layouts.
- Suggest implementation approaches for features such as server-side search and API design.

The application architecture, coding decisions, integration, debugging, testing, deployment, and final verification were completed manually.

---

# 📄 License

This project was developed as part of the **Reno Platforms Web Development Assignment** for evaluation purposes.
