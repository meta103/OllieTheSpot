# Ollie The Spot

## Description

The project is about creating a platform for skate lovers like you! so you can discover, save, review & create new skate spots around you. Your city will become the greatest skatepark!
 
## User Stories

- **404** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault 
- **500** - As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault
- **homepage** - As a user I want to be able to access the homepage so that I see what the app is about and login and signup
- **sign up** - As a user I want to sign up on the webpage so that I can see all the events that I could attend
- **login** - As a user I want to be able to log in on the webpage so that I can get back to my account
- **profile** - As a user I want to be able to see my profile details and change them whenever I want.
- **logout** - As a user I want to be able to log out from the webpage so that I can make sure no one will access my account
- **spots list** - As a user I want to see all the spots available so that I can choose which ones I want to visit
- **spots create** - As a user I want to create a spot so that I can share it with other skaters
- **spots detail** - As a user I want to see the spots details so i can decide if i want to visit it or not

## Backlog

List of other features outside of the MVPs scope

User profile:

- see my favorites spots
- see my reviews
- upload profile image from your device
- list of my favorite spots 
- list of people in the spot
- see other peoples profile

Geo Location:

- add geolocation when creating a new spot 
- show spots in a map
- find my location

Homepage

- show a map of spots locations
- search bar of locations

Spots:

- tags
- show in details the location of the spot in a map
- show reviews
- upload image

## ROUTES:
|Route|HTTP Verb | Description|
|---|---|---|
|/|GET|renders the homepage|
|/auth|GET|redirects to /spots if user logged in <br> renders the signup / login form (with flash msg)|
|/auth/signup|POST|redirects to / if user logged in <br> body:  <br>- username  <br>- email <br>-  password <br> redirects to / if user logged in <br>renders the login form (with flash msg)|
|/auth/login|POST|redirects to / if user logged in <br>body: <br>- username <br>- password|
|/auth/logout|POST|body: (empty)|
|/spots|GET|renders the spots list|
|/spots/:id|GET|renders the spot detail page|
|/spots/create|POST| body: <br>- name <br>- location <br>- description <br>- submit <br>- renders a message on /spots with flash (success creating) <br>- redirects to /spots|
|/user/:id|GET|renders user profile by id <br> renders profile edit button <br> redirects to /user/:id/edit if edit|
|/user/:id/edit|GET|renders form with details to edit|
|/user/:id|POST|updates user details <br> redirect /user/:id|

## Models

User model
 
```
username: String
password: String
email: String
image: string(url)
bio: String

```

Spots model

```

owner: ObjectId<User>
name: String
description: String
image: String(url)
location: String

``` 

## Links

### Trello

[Link to your trello board](https://trello.com/b/LboMjM8l/project-module-2)

