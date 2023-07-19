
# Required Software 
- Mysql/MariaDB
- NodeJS
- ExpressJS
- Postman

# How to Setup

Install Mysql & NodeJs

## Windows 
Easy Bundle Mysql & NodeJs [Download Laragon](https://github.com/leokhoa/laragon/releases/download/6.0.0/laragon-wamp.exe)

Install Laragon & Running Mysql Service

## Mac
Mamp [Download Mamp](https://www.mamp.info/en/downloads/)

NodeJS [Download NodeJS](https://nodejs.org/en/download) 


Install Mamp & Running Mysql Service

# How to install

## Open Command Prompt/ Terminal

**Clone Repo :**

```bash
git clone https://github.com/irwansah/rest_movie
```

**Install Apps:** 
```bash
cd rest_movie
```
```bash
npm install
```

**Create Database & Migrate Table**

```bash
npm run dbcreate
```

```bash
npm run dbmigrate
```

**Run Unit Testing:**

```bash
npm run test
```

**Run Apps :**

```bash
npm run start
```

**Test Endpoint Postman :**
Import Postman Collection [Download Collection](./Movie.postman_collection.json)
