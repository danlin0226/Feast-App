# Feast App

Feast is a modern web app that allows foodies to connect by hosting and attending dining events. The app allows users to quickly and easily find any meetups happening in their area and participate by going through a simple sign up process.

![image](https://user-images.githubusercontent.com/107284019/208053991-e8fe663b-ec26-443a-b946-a565bd7aaec1.png)

## Table of Contents

1. [Installation](#installation)
2. [Screenshots + Functionality](#screenshots)
3. [Tech Stack](#tech-stack)
4. [Future Improvements](#future-improvements)

## Installation

#### Create .env files in both client and server folder with the following contents

- client/.env

```
REACT_APP_BACKEND_URL=http://localhost:8080

REACT_APP_FIREBASE_API_KEY=<FIREBASE_API_KEY>
REACT_APP_FIREBASE_AUTH_DOMAIN=<FIREBASE_AUTH_DOMAIN>
REACT_APP_FIREBASE_PROJECT_ID=<FIREBASE_PROJECT_ID>
REACT_APP_FIREBASE_STORAGE_BUCKET=<FIREBASE_STORAGE_BUCKET>
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=<FIREBASE_MESSAGING_SENDER_ID>
REACT_APP_FIREBASE_APP_ID=<FIREBASE_APP_ID>

REACT_APP_GOOGLE_MAPS_API_KEY=<GOOGLE_MAPS_API_KEY>
```

- client/.env

```
PORT='8080'
DB_LOCAL_DBNAME='feast_db'
DB_LOCAL_USER=<USER>
DB_LOCAL_PASSWORD=<PASSWORD>
```

#### Create Firebase service key file

- server/config/serviceAccountKey.json

```
{
  "type": <type>,
  "project_id": <project_id>,
  "private_key_id": <private_key_id>,
  "private_key": <private_key>,
  "client_email": <client_email>,
  "client_id": "<client_id>,
  "auth_uri": <auth_uri>,
  "token_uri": <token_uri>,
  "auth_provider_x509_cert_url": <auth_provider_x509_cert_url>,
  "client_x509_cert_url": <client_x509_cert_url>
}
```

#### Create a schema of DB_LOCAL_DBNAME in mysql workbench

#### Create Firebase service key file

#### From the root folder, run following commands

```console
npm i

npm run dev
```

## Screenshots

### Login / registration page

- User authentication using Firebase
- User creation using express backend with mySQL database
  ![image2](https://user-images.githubusercontent.com/107284019/208055788-b5f7b62c-4b7c-42aa-8058-7c3912ac687c.png)

### Explore page

- Search by city using Google Places autocomplete, and by tags dropdown
  ![image1](https://user-images.githubusercontent.com/107284019/208053991-e8fe663b-ec26-443a-b946-a565bd7aaec1.png)

### Explore events / manage attendees

- Google maps api pinpoints restaurant location
- Event is fully editable using a patch request to the server
- Host can easily view attendee profiles and reject and accept requests
  ![image3](https://user-images.githubusercontent.com/107284019/208057665-18c5f62a-8bde-4474-8a34-6bf17663d0d5.png)
  ![image4](https://user-images.githubusercontent.com/107284019/208055827-460813b8-1ea4-4425-85ba-4b57630bdc19.png)

### Create events

- User is able to upload an image using react-uploader library
- Google Places library auto completes address form filling
  ![image5](https://user-images.githubusercontent.com/107284019/208055849-07ac4853-bba8-4614-a710-cdde766d4d09.png)

### Profile page

![image6](https://user-images.githubusercontent.com/107284019/208055861-e8e1f79c-d7e5-420a-a764-58a539035ceb.png)

## Tech Stack

- Frontend: React
- Backend: NodeJS/Express
- Database: MySQL, Knex
- Styling: HTML,CSS,SASS

## Future Improvements

- Marketing page
- Notifications when attendee requests sign up for an event and when a request has been accepted/rejected
