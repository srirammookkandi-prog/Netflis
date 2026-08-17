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




