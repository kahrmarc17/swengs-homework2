# SWENGS Homework

## Introduction

Frontend (Angular) + Backend (Django)


## Backend Setup

**Requirements**
django==2.2.7
djangorestframework==3.10.3
drf-yasg==1.17.0
djangorestframework-jwt==1.11.0

**Setup**
python manage.py makemigrations
python manage.py migrate
python manage.py loaddata initial_zoo.json
python manage.py loaddata initial_zookeeper.json
python manage.py createsuperuser
python manage.py runserver


**Connect**
http://127.0.0.1:8000/



## Frontend Setup

npm install
ng serve

## Features

Country-picker component where you can select diffrent countries was integrated in animal form create and zoo form create

Custom Validators: 
badFoodValidator in animal form create,
phoneValidator, emailValidator, zipValidator in zoo form create

Dialog Component: User get asked in a dialog, if the user wants to logout
Horizontal stepper is used in animal form create




