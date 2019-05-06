# Angularjs-to-MongoDB

To Connect Angularjs with MongoDB , I have used Nodejs as a server side language. <br />The following project is a perfect example of inserting data into MongoDB using Angularjs.

I have also made the video on how to use project :- https://www.youtube.com/watch?v=2kwsCqVLPe4

	Steps to be followed:-

1.Since our Project is based on Google location api. You have to put your api credientals.<br />
Go to client/index.html
Scroll Down to
<br />
 <script type="text/javascript" <br />
        src="https://maps.googleapis.com/maps/api/js?key=PUT_YOUR_API_HERE&libraries=places&callback=placeSearch"><br />
 </script> <br />
and put your api key on PUT_YOUR_API_HERE


2.Open the command line in the project directory.<br />
3. Since I haven't included the node_modules in github. You have to import it Using :-
  npm init
(it will install all the dependencies)<br />
4. Since we are using MongoDB as database make sure to connect it.<br />
5. After the connection simply execute
  node app.js<br />
6. Visit 
   http://localhost:3000/		<br />
7. Add locations and then check your Database.
