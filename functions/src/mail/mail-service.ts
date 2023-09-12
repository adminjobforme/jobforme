import * as nodemailer from "nodemailer";
import * as fs from "fs";
import {promisify} from "util";
import * as handlebars from "handlebars";
import * as path from "path";
import * as functions from "firebase-functions";

const readFile = promisify(fs.readFile);

const helpTransporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "help@jobforme.ie",
    pass: functions.config().HELP_EMAIL_PASS as string,
  },
});

const mailOptions = {
  from: "help@jobforme.ie",
  to: "j.oyinlola95@gmail.com",
  subject: "Subject",
  text: "Email content",
};


export const sendMessage = async () => {
  const html = await readFile(
    path.resolve(__dirname, "templates/support/support.html"),
    "utf8"
  );
  const template = handlebars.compile(html);
  const data = {
    username: "Steven",
  };
  const htmltosend = template(data);
  helpTransporter.sendMail({...mailOptions, html: htmltosend}, (err, info) => {
    if (err) console.log(err);
    else {
      console.log("Email sent" + info.response);
    }
  });
};
