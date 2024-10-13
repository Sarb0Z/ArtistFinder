# Find Artists

A single-page web program that lets you search for details of your favorite artists and their upcoming events.

## API Details

The project fetches data from the bandsintown API.

### Features

The project currently implements the following features:

- You can search for your favorite artist
- The program will display any upcoming events for that artist
- You can click on each event to open the corresponding Bandsintown page
- You can also click on each artist to open the corresponding Bandsintown page
- The program will also display a list of recently searched artists
- The program stores the last 10 artists you have searched for in local storage
- The project uses bootstrap for styling and jest for testing

### Testing

To run and test program, you must include a .env file with variables named 
REACT_APP_BASE_URL and REACT_APP_API_KEY with the appropriate values

The project uses jest for testing. To run the tests, simply run `yarn test` in the terminal of your cloned project. This will run all the unit tests and integration tests. The project currently has 100% test coverage.

### Deployment

The project has been deployed to [github pages](https://sarb0z.github.io/ArtistFinder).
The project uses github pages for deployment. To deploy the project, you can run `yarn run deploy` in the terminal of your cloned project. This will build the project and push it to github pages.