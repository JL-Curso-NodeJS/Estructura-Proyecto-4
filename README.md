# Estructura Básica de un proyecto con NodeJS utilizando Express - PARTE 3

Este repositorio utiliza la estructura de la parte 2 y le agrega uso de Seeders, Migrations y manejo de errores.

## Archivo .env en la raiz del proyecto
Crear un archivo llamado .env con los siguientes datos:

    PORT = 8000
    ENVIRONMENT = development
    DB_NAME= mi_bd
    DB_USERNAME = postgres
    DB_PASSWORD = password
    

## Para ejecutar el proyecto
    
    npm install
    npm run db:create
    npm run db:migrate
    npm run db:seed
    npm start

## Dependencias utilizadas en el proyecto (extras a la PARTE 2)
- [Joi](https://joi.dev/api/?v=17.6.0) - Validador de datos

## Postman
[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/21047550-ed7229c1-0a35-47fb-9e1a-87ece9614cf1?action=collection%2Ffork&collection-url=entityId%3D21047550-ed7229c1-0a35-47fb-9e1a-87ece9614cf1%26entityType%3Dcollection%26workspaceId%3D1f4f77c5-eb75-4ee8-99d0-fbd51cc092df#?env%5BLOCALHOST%20BASE%5D=W3sia2V5IjoiVVJMIiwidmFsdWUiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAiLCJlbmFibGVkIjp0cnVlfV0=)

---

## Más información
Te dejo el link a un video explicando cómo crear migraciones: https://youtu.be/M8DAJMxs70U
<br>
Cómo validar datos: https://youtu.be/5hRO2AXe4bY
<br>
Cómo hacer un manejo básico de errores: https://youtu.be/Ua7khncnlQY


