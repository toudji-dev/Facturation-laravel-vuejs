# 🧾 Application de Facturation (Laravel & Vue.js)

Ce projet est une application web simple de facturation, conçue pour faciliter la gestion des factures dans une petite entreprise ou école.

## 🚀 Fonctionnalités

-   🗂️ Consultation de la liste des factures
-   ➕ Création d'une nouvelle facture
-   🖨️ Impression de facture
-   ✏️ Modification d'une facture existante
-   ❌ Suppression de facture

## 🛠️ Technologies utilisées

-   _Laravel_ (backend)
-   _Vue.js_ (frontend)
-   _MySQL_ (base de données)
-   _Bootstrap_ (pour le design)

## 📷 Captures d'écran

Voici quelques images de l'application :

### 📄 Liste des factures

![Liste des factures](public/images/listInvoices.png)

### ➕ Nouvelle facture

![Nouvelle facture](public/images/newInvoice.png)

### 🛠️ Imprimer, modifier et supprimer une facture

![Imprimer, modifier et supprimer une facture](public/images/printEditDeletedInvoice.png)

### 🖨️ Imprimer une facture

![Imprimer une facture](public/images/printInvoice.png)

## ⚙️ Installation

```bash
# Cloner le projet
git clone https://github.com/toudji-dev/facturation-laravel-vuejs.git

# Accéder au dossier du projet
cd facturation-laravel-vuejs

# Installer les dépendances PHP
composer install

# Copier le fichier d'environnement
cp .env.example .env

# Générer la clé d'application
php artisan key:generate

# Configurer la base de données dans le fichier .env

# Lancer les migrations
php artisan migrate

# Installer les dépendances JS
npm install && npm run dev

# Démarrer le serveur
php artisan serve
```
