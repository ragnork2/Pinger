const http = require('http');
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

function time() {
	var d = new Date();

	var datetext = d.toTimeString();

	datetext = datetext.split(' ')[0];

	return datetext;
};

http.get(`http://yourprojectnamehere.glitch.me`);
console.log(time()+" - Pinged!");

setInterval(() => {
	http.get(`http://yourprojectnamehere.glitch.me`);
	console.log(time()+" - Pinged!");
}, 280000);
