# ODB-Challenge

Single page application that consumes **_Github's API_**, and search for repositories given a key name.

It shows a list of repositories with the following information:

- Repository's name
- Repository's author
- Author’s profile picture
- Repository's stars
- Repository's forks
- Whether a repository is popular or not (🙂)

## How to install

1. Clone this repository.

   ```
   git clone https://github.com/fernastereo/odb-challenge.git
   ```

2. Install dependencies.

   ```
   npm install
   ```

3. Rename `tokens.example.json` file to `tokens.json`.

4. Get a [Github Access Token](https://docs.github.com/es/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) and add it to the `tokens.json` file.

   ```
   {
       "token": "YOUR ACCESS TOKEN HERE!"
   }
   ```

5. Build TailwindCss styles.

   ```
   npm run build-css
   ```

6. Run the project.

   ```
   npm run start
   ```

7. Run the unit Tests.

   ```
   npm run test
   ```
