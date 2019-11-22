# ReactRedux_CRUD_app_boilerplate
This is a (CRUD) web app based on React-Redux 
Requirements: Nodejs, VSCode, Chrome Browser.

What does it do ?
This is a simple blog app where any user can login using Google and post their blog.
The user who posted it can view/delete/edit their blog.
All other users can just view all of the blogs.

How do I start ?
1) Go to https://console.developers.google.com/projectselector2/apis/dashboard?supportedpurview=project 
2) NEW Project ==> Set Project name ==> CREATE
3) Go to Credentials ==> Oauth Consent Screen
4) Set Application name as 'blog' . ==> SAVE 
5) Create Credentials ==> OAuth Client ID ==> Select Web application.
6) Authorized JavaScript origin : http://localhost:3000 ==> CREATE
7) Yay !! You get your Client-ID . Now copy that client-id (YOUR_CLIENT_ID).
8) In client/src , create a file named constants.js.
9) Paste this in that file
export const GOOGLE_CLIENT_ID = 'YOUR_CLIENT_ID';


How do I get it running in my system locally ?
1) git clone
2) Terminal1 ==> cd client ==> npm start (This is the main app which runs on localhost:3000)
3) Terminal2 ==> cd api ==> npm start (This is basically the database where our blog, user data resides. This is made possible using JSON server.

#Mail for any suggestions/questions/queries.
rkpawan321@gmail.com
