# 🎓 University PFE Manager

![Java](https://img.shields.io/badge/Java-17-red)
![Spring Boot](https://img.shields.io/badge/SpringBoot-3.x-green)
![Angular](https://img.shields.io/badge/Angular-17-red)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-blue)
![CI/CD](https://github.com/Refka-Barhoumi/University-PFE-Manager/actions/workflows/acceptance-tests.yml/badge.svg)


## 📄 Project Overview

This project is a **Full-Stack PFE Management System** designed to organize and track Final Year Projects (PFE) for students, supervisors, and academic coordinators.

It provides a centralized platform to:
- 👥 Manage users (Students, Supervisors, Coordinators, Jury)
- 📝 Submit and validate project proposals
- 📊 Track project progress
- 🎤 Manage thesis defenses
- 📚 Archive final projects

The system is built as part of an academic project with **clean architecture and CI/CD integration**.

---

## 🏗️ System Architecture

```
Frontend (Angular)
        ↓ REST API
Backend (Spring Boot)
        ↓
PostgreSQL Database
```

---

## 👥 Actors & Functionalities

| Actor | Responsibilities |
|------|------------------|
| 👨‍🎓 Student | Login, submit PFE, update progress, view dashboard |
| 👩‍🏫 Supervisor | Validate projects, follow progress, give feedback |
| 🎯 Coordinator | Manage users, assign supervisors, monitor projects |
| 🏛️ Jury | Evaluate final project, assign grades, archive results |

---

## 🛠️ Technologies Used

### Frontend
- Angular 17+
- TypeScript
- HTML / CSS

### Backend
- Spring Boot 3
- Spring Security (JWT)
- Spring Data JPA

### Database
- PostgreSQL

### DevOps / Testing
- GitHub Actions (CI/CD)
- Cucumber (BDD Testing)
- Selenium WebDriver
- JUnit

---

## 📁 Project Structure

```
University-PFE-Manager/
│
├── .github/         # CI/CD Workflows
├── backend/         # Spring Boot API
├── frontend/        # Angular Application
└── README.md
```

---

## ⚙️ Backend Architecture

```
backend/
├── controller/      # REST Controllers
├── service/         # Business Logic
├── repository/      # Database Access Layer
├── entity/          # JPA Entities
├── security/        # JWT + Security Config
└── resources/
    └── application.properties
```

---

## ⚡ Frontend Architecture

```
frontend/src/app/
├── components/
│   ├── login/
│   ├── dashboard/
│   ├── project/
│   └── admin/
├── services/
│   ├── auth.service.ts
│   └── project.service.ts
├── app.routes.ts
└── app.config.ts
```

---

## 🗄️ Database Schema (Simplified)

```
students
- id
- full_name
- email
- password

projects
- id
- title
- description
- status
- student_id
```

---

## 🔐 API Endpoints

### Auth
```
POST /auth/register
POST /auth/login
```

### Projects
```
GET    /projects
POST   /projects
PUT    /projects/{id}
DELETE /projects/{id}
```

### Students
```
GET    /students
POST   /students
PUT    /students/{id}
DELETE /students/{id}
```

---

## 🚀 Installation Guide

### 1️⃣ Cloner le projet

```bash
git clone https://github.com/Refka-Barhoumi/University-PFE-Manager.git
cd University-PFE-Manager
```

---

### 2️⃣ Lancer la base de données

Assurez-vous que PostgreSQL est installé et créez une base :

```
Database: pf_tp
Username: postgres
Password: root
```

---

### 3️⃣ Lancer le Backend

```bash
cd backend
./mvnw spring-boot:run
```

Backend disponible sur :
```
http://localhost:8080
```

---

### 4️⃣ Lancer le Frontend

```bash
cd frontend
npm install
ng serve
```

Frontend disponible sur :
```
http://localhost:4200
```

---

## 🧪 Tests d'acceptation

Les tests utilisent :

- Cucumber
- Selenium
- Chrome Headless

Exécution :

```bash
cd backend
./mvnw test -Dtest=RunCucumberTest
```

Rapport généré dans :
```
backend/target/cucumber-reports/
```

---

## 🔄 CI/CD

Le projet utilise **GitHub Actions** pour :

- Build Backend
- Build Frontend
- Lancer PostgreSQL
- Exécuter les tests Cucumber
- Générer un rapport

---

## 🎓 Academic Context

Projet universitaire réalisé dans le cadre de la formation FSTSBZ — A.U. 2025-2026.

---

## 🎯 Objectif

Fournir un système **propre, évolutif et professionnel** pour la gestion des Projets de Fin d'Études (PFE) universitaires.

---

## 📌 Liens utiles

- 🔗 [Jira Board](https://votre-jira-link)
- 🔗 [Repository GitHub](https://github.com/Refka-Barhoumi/University-PFE-Manager)
