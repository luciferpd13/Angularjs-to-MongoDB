# Angularjs-to-MongoDB

To Connect Angularjs with MongoDB , I have used Nodejs as a server side language. <br />The following project is a perfect example of inserting data into MongoDB using Angularjs.

I have also made the video on how to use project :- https://www.youtube.com/watch?v=2kwsCqVLPe4

	Steps to be followed:-

1.Since our Project is based on Google location api. You have to put your api credientals.<br />
Go to client/index.html<br />
Scroll Down to
<br />
 <script type="text/javascript" <br />
        src="https://maps.googleapis.com/maps/api/js?key=PUT_YOUR_API_HERE&libraries=places&callback=placeSearch"><br />
 </script> <br />
<strong>and put your api key on PUT_YOUR_API_HERE</strong><br />
<p align="center">
  <img src="client/Capture.JPG">
</p>

2.Open the command line in the project directory.<br /><br />
3. Since I haven't included the node_modules in github. You have to import it Using :-<br />
<strong>  npm init </strong><br />
(it will install all the dependencies)<br /><br />
4. Since we are using MongoDB as database make sure to connect it.<br /><br />
5. After the connection simply execute<br />
 <strong> node app.js</strong><br /><br />
6. Visit 
   http://localhost:3000/		<br /><br />
7. Add locations and then check your Database.
