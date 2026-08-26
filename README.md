# DAY-1 Setting up my-react-app.

* First created my react app.

   1. Step1: Opened cmd in the path that create my-react-app should be created.

   2. Step2: Entered ***npx create my-react-app netflis***.

   3. My react app is created.

   4. Started server using **npm start**.

* My-react-app uses webpack as a bundler.

* Deleted unwanted files inside the folder.

* Installed Tailwind.CSS inside the app.
   
    1. Step 1 : Entered ***npm install -D tailwindcss@3 postcss autoprefixer*** in terminal.

    2. Step 2 : Entered ***npx tailwindcss init -p*** and the config was created.

    3. Step 3 : Replaced config file's content with the following content.
     
      ```
      /** @type {import('tailwindcss').Config} */
      module.exports = {
        content: [
           "./src/**/*.{js,jsx,ts,tsx}",
              ],
        theme: {
           extend: {},
        },
        plugins: [],
        }; 
      ```
    
     4. Step 4: Updated the index.css

      ```
      @tailwind base;
      @tailwind components;
      @tailwind utilities;
      ```

    5. Step 5: Tested whether tailwind is working.

* Features to Build.
      
  - Login/Signup
     
     - Sign In / Sign Up Form.
     - Redirect to browse Page.

  - Browse (after Authenthication )
     
     - Header
     - Main Movie
        - Trailer in Background
        - Description
     - Movie Suggestion List
        - Movie List
        - Top 10 movies
        - Best action Movies

  - Netflis GPT

     - Search Bar
     - Movie Suggestion

* Initialized Github Repository
  
  - Created Github Repository.
  - Pushed Code to repository.
  - Created Integration branch.
  - Created features branch.

* Created Folder structure.
  
  - Created home Folder.
      - Primary Container
      - Secondary Container
  - Created authentication Folder.
  - Created netflis_GPT Folder.

* Installed React-router Dom.
  
  - npm install -D react-router-dom

* Created Routing for app.
   
   - Hash Routing because browser routing does not work in Git gh pages without SPI Fallback.

* Started working on Login Page.

* Created Header for Login Page. 
    
    - ***aria-hidden***, if true in img tag means screen readers will avoid the image content. If false, Screen readers will know that a image is present.

    - ***srcset***, if srcset is present in img tag then the webpage will take the different image resolution based on the device resolution.

* Created Form for taking User Details.

# DAY-2 Completing Login page.

* Created Login page SignIn.

* Created Login page SignUp.

* For bigger forms, use formik Library.

* Created ***Validate*** file for checking valid name, email, password.

* ***Useref*** Hook is used for taking the ref of input and checking it with the validate file.

* Opened Firebase for Authentication purpose.

# Day-3 Completed authentication and Created redux store.

* Deployed app to production in firebase.

* Created user for sign up.

* Implemented Login and signup logic using Firebase authentication.

* Installed redux toolkit for saving the user details for later use.
  
  - Entered ***npm i -D @reduxjs/toolkit*** for installing redux.

  - Entered ***npm i react-redux***.

  - Created store, user slice and added store to the App.js

* Created Home page.

* Updated sign out login in Header.

* Learnt use navigate and firebase till now.

# Day-4 Creating home page

* BugFix: resolved login security.

* Bugfix: Signup user profile picture update.

* Created constant files.

* Segregated Main and secondary container in browse page

* Divided main container into VideoTitle and VideoBackground.

* Video Background used id from store to play video from you tube.

* Video Title modified as per netflix.

# Day-5 Creating Secondary container.

* Created movielist and movieCard from secondary container.

* Created movieslice for adding category data.

* Created custom hooks for fetching data.

* Mapped the category data in secondary container and passing it as props.

# Day-6 Creating GPT Suggestion.

* Created a AI suggestion button on the header.

* On click the button helps to navigate to gpt section.

* Created gpt search Slice on the store and created toggle feature.

* In search page, two section is created.
     - Gpt search bar
     - Gpt Movie suggestions.






