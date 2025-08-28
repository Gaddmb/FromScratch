# GalleryReact - Galerie d’Art & Blog

Ce projet est une application React permettant de découvrir et d’ajouter des œuvres d’art, avec gestion d’un blog local via JSON Server.

---

## Fonctionnalités

- **Galerie d’Art**  
  Affichage d’une liste d’œuvres, avec artiste, année et photo aléatoire.
- **Ajout d’œuvres**  
  Formulaire pour enregistrer une nouvelle œuvre (artiste, année, image).
- **Blog**  
  Ajout, édition et suppression d’articles (stockés localement via JSON Server).
- **Navigation**  
  Routing entre Accueil, Galerie, Blog, et À propos.

---

## Installation## Installation

Projet initialisé avec **Vite** et **React**.

### 1. Installer les dépendances

```bash
npm install
```

### 2. Installer Redux Toolkit

```bash
npm install @reduxjs/toolkit react-redux
```

### 3. Lancer l’application (front + backend)

```bash
npm start
```

- Le front sera disponible sur [http://localhost:5173](http://localhost:5173)
- Le backend (JSON Server) sur [http://localhost:5000](http://localhost:5000)

```bash
cd GalleryReact
```

### 2. Installer les dépendances

```bash
npm install
```

### 3. Installer Redux Toolkit

```bash
npm install @reduxjs/toolkit react-redux
```

### 4. Lancer l’application (front + backend)

```bash
npm start
```

- Le front sera disponible sur [http://localhost:5173](http://localhost:5173)
- Le backend (JSON Server) sur [http://localhost:5000](http://localhost:5000)

---

## Scripts utiles

- `npm run dev` : Démarre le serveur de développement Vite (front uniquement).
- `npm run build` : Build le projet pour la production.
- `npm run server` : Lance JSON Server pour la galerie et le blog (port 5000).
- `npm start` : Démarre à la fois le front (Vite) et le backend (JSON Server).

---

## Stack technique

- React 19
- Redux Toolkit
- React Redux
- React Router DOM
- Axios
- Vite
- JSON Server (pour la galerie et le blog)

---

## Auteur

Projet réalisé par Mbengi Gaddiel.
