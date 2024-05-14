# Learning Angular

## Project Structure

### End to End (`e2e/`)

The `e2e/` directory holds our **end-to-end** test logic.

End-to-end tests are tests that simulate a real user.\
Here we can write code to:

- Launch our browser
- Simulate links being clicked
- Fill out a form
- Click a button
- etc...

### Source folder (`src/`)

`app/`\
Inside the app folder we have our modules and components.\
The `app/` folder itself is a module, as you can see by the `app.module.ts` file.

`assets/`\
Where we store static assets.

`environments/`\
Where we store configuration settings for different environments (prod, dev).

**main.ts**\
The entry point to our application. Calls to render the app.

**polyfills.ts**\
Adds certain functionalities that Angular needs that some browsers may not support.

**styles.css/scss**\
Where we add global styles for our application.

**test.ts**\
Test configurations for our application.

### Root Project Files

(Not defining the self-explanatory ones).

**angular.json**\
Angular config.

**karma-conf.js**\
Karma is a javascript test runner, this is it's config.
