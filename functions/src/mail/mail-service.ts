import * as nodemailer from "nodemailer";
import * as fs from "fs";
import {promisify} from "util";
import * as handlebars from "handlebars";
import * as path from "path";
const readFile = promisify(fs.readFile);

const transporter = (email: string, pass: string) => {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: email,
      pass: pass,
    },
  });
};

const logoAttachment = {
  filename: "logo-multi.png",
  path: path.resolve(__dirname, "templates/support/logo-multi.png"),
  cid: "jobforme-logo",
};

export const sendMessage =
async (email: string,
  pass: string,
  fname: string,
  recipient: string,
  phone: string,
  question: string) => {
  const mailTransporter = transporter(email, pass);
  // extract this
  const html = await readFile(
    path.resolve(__dirname, "templates/support/support.html"),
    "utf8"
  );
  const template = handlebars.compile(html);
  const data = {
    username: fname,
  };
  const htmltosend = template(data);
  // up to here and make optional
  mailTransporter.sendMail(
    {
      from: email,
      to: recipient,
      subject: "Subject",
      text: "Email content",
      html: htmltosend,
      attachments: [logoAttachment],
    },
    (err, info) => {
      if (err) console.log(err);
      else {
        console.log("Email sent" + info.response);
      }
    });

  // extract this
  const htmlToReceive = await readFile(
    path.resolve(__dirname, "templates/support/supportReceive.html"),
    "utf8"
  );
  const templateToReceive = handlebars.compile(htmlToReceive);
  const dataToReceive = {
    username: fname,
    phone: phone,
    email: recipient,
    question: question,
  };
  const htmlReceive = templateToReceive(dataToReceive);
  // up to here and make optional

  mailTransporter.sendMail(
    {
      from: email,
      to: "admin@jobforme.ie",
      subject: "Question received!",
      text: "Random text",
      html: htmlReceive,
      attachments: [logoAttachment],
    },
    (err, info) => {
      if (err) console.log(err);
      else {
        console.log("Email sent" + info.response);
      }
    });
};
