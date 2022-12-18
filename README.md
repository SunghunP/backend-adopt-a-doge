# Doge Adopter API
## About This Project
This provides the server side of my Adopt a Doge website.
This service provides a way for the client side to Create, Update, Read, and Delete all the dogs in the database.

## Tables of Contents 
1. [Links](#links)
2. [Endpoints](#endpoints)
3. [Contributing](#contributing)

##  Links
Front End Repo: https://github.com/SunghunP/frontend-adopt-a-doge <br>
Api Domain: https://adopt-a-doge.onrender.com <br>

## Endpoints
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

## Models
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

## Contributing
1. Fork it!
2. Create your own branch: `git checkout -b my-new-branch`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-branch`
5. Submit a pull request! 