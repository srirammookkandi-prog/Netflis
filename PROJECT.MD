# DAY-1 Setting up my-react-app.

* First created my react app.

   1. Step1: Open cmd in the path you want to create my-react-app

   2. Step2: Enter ***npx create my-react-app netflis***

   3. My react app will be created.

   4. Start server using **npm start**.

* My-react-app uses webpack as a bundler.

* Delete unwanted files inside the folder and make it blank.

* Install Tailwind.CSS inside the app.
   
    1. Step 1 : Enter ***npm install -D tailwindcss@3 postcss autoprefixer*** in terminal.

    2. Step 2 : Enter ***npx tailwindcss init -p*** and the config file will be created.

    3. Step 3 : Replace config file content with the following content.
     
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
    
     4. Step 4: Update in index.css

      ```
      @tailwind base;
      @tailwind components;
      @tailwind utilities;
      ```

    5. Step 5: Test whether tailwind is working.

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
     




