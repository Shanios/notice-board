# 📌 Notice Board

A responsive Notice Board web application built with **Next.js (Pages Router)**, **Prisma ORM**, and **TiDB Cloud (MySQL compatible)**.

The application allows users to create, view, edit, and delete notices with persistent storage in a hosted database.

---

## 🚀 Live Demo

**Vercel:**  
https://notice-board-lilac.vercel.app/

---

## 📂 GitHub Repository

https://github.com/Shanios/notice-board

---

# ✨ Features

- ✅ Create Notice
- ✅ View all Notices
- ✅ Edit existing Notice
- ✅ Delete Notice with confirmation
- ✅ Responsive card layout
- ✅ Urgent priority badge
- ✅ Server-side validation
- ✅ Persistent hosted database using TiDB Cloud
- ✅ RESTful API using Next.js API Routes
- ✅ Prisma ORM integration

---

# 🛠 Tech Stack

### Frontend

- Next.js 15 (Pages Router)
- React 19
- Tailwind CSS
- SweetAlert2
- Lucide React Icons

### Backend

- Next.js API Routes
- Prisma ORM

### Database

- TiDB Cloud (MySQL Compatible)

### Deployment

- Vercel

---

# 📁 Project Structure

```
notice-board/
│
├── components/
│   ├── NoticeCard.js
│   └── NoticeForm.js
│
├── lib/
│   └── prisma.js
│
├── pages/
│   ├── api/
│   │   └── notices/
│   ├── add.js
│   ├── edit/
│   └── index.js
│
├── prisma/
│   └── schema.prisma
│
├── styles/
│
└── README.md
```

---

# ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/Shanios/notice-board.git
```

Go to the project

```bash
cd notice-board
```

Install dependencies

```bash
npm install
```

Generate Prisma Client

```bash
npx prisma generate
```

Run the development server

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
DATABASE_URL="YOUR_DATABASE_CONNECTION_STRING"
```

---

# 📖 API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/notices` | Fetch all notices |
| POST | `/api/notices` | Create a notice |
| PUT | `/api/notices/:id` | Update a notice |
| DELETE | `/api/notices/:id` | Delete a notice |

---

# 🗄 Database

The project uses **Prisma ORM** with **TiDB Cloud**.

Data is persisted remotely and remains available after refreshes and redeployments.

---

# 📱 Responsive Design

The application is responsive and supports:

- Desktop
- Tablet
- Mobile

---

# 🔮 Future Improvements

Given more time, I would implement:

- Image upload using Cloudinary instead of image URLs
- Search and filtering by category and title
- Pagination for large datasets
- User authentication and authorization
- Rich text editor for notice descriptions
- Unit and integration tests
- Dark mode

---

# 🤖 AI Usage

AI tools were used as development assistants for:

- Understanding Prisma and TiDB integration
- Debugging deployment and build issues
- Improving UI components and styling
- Reviewing API structure and project organization
- Explaining concepts and suggesting best practices

All implementation decisions, testing, debugging, and final verification were completed manually.

---

# 📜 License

This project was developed as part of the **Reno Platforms Web Development Assignment** for educational and evaluation purposes.
