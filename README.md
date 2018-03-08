This is the component for the image gallery for the Nile app.  If you wish to use this component please follow the steps below.  


Step 1.
Install Postgres through brew.  

```
brew install postgresql
```

Run the command: `ln -sfv /usr/local/opt/postgresql/*.plist ~/Library/LaunchAgents`

Open your zsh config file: `subl ~/.zshrc`
At the bottom of the file, create two new aliases to start and stop your postgres server. They could look something like this:

     ```
     alias pg-start="launchctl load ~/Library/LaunchAgents/homebrew.mxcl.postgresql.plist"
     alias pg-stop="launchctl unload ~/Library/LaunchAgents/homebrew.mxcl.postgresql.plist"
     ```

Run the command: `source ~/.zshrc` to reload your configuration.

Run the alias you just created: `pg-start`. Use this comment to start your database service.
     - alternatively, `pg-stop` stops your database service.

Run the command: ``createdb 'image' ``

Connect to your postgres with the command: `psql`


Step 2.
Install the following commands

```
npm install

npm run dev

npm run server
```

Step 3. 
Seed the database
```
npm run database
```
You should see the phrase 'listening on 8000'.  If you see this command with no errors, then you have successfully seeded the DB.  After that you can Control + C out of the server.

That should be it! 


