# Doge Adopter API
This is the repo for the backend of my Adopt a Doge website.
This service provides a way for the client side to Create, Update, Read, and Delete all the dogs in the database.

###  Links
Front End Repo: https://github.com/SunghunP/frontend-adopt-a-doge
Api Domain: https://adopt-a-doge.onrender.com

### Endpoints
- GET /doge
> will get all of the current Dogs available on the website.
- POST /doge
> will create a new dog and add it to the list of all dogs.
- GET /doge/:id
> will get the information of a dog with the provided id.
- PUT /doge/:id
> will make updates to the dog with the provided id.
- DELETE /doge/:id
> will delete the dog with the provided id.

### Models
The create and update functionality rely on this model to accurately complete these functionalities
```
dogeSchema ({
  name,
  breed,
  desc,
  adopted,
  img,
});
```