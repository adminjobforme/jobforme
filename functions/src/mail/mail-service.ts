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

const createHtmlToSend = async (
  dir: string,
  fname: string,
  recipient?: string,
  phone?: string,
  question?: string ) => {
  const html = await readFile(
    path.resolve(__dirname, dir),
    "utf8"
  );
  const template = handlebars.compile(html);
  const data = {
    username: fname,
    phone: phone,
    email: recipient,
    question: question,
  };
  return template(data);
};


// support message
export const sendSupportMessage =
async (email: string,
  pass: string,
  fname: string,
  recipient: string,
  phone: string,
  question: string) => {
  const mailTransporter = transporter(email, pass);
  const htmltosend =
  await createHtmlToSend("templates/support/support.html", fname);

  mailTransporter.sendMail(
    {
      from: email,
      to: recipient,
      subject: "Subject",
      text: "We have received your query!",
      html: htmltosend,
      attachments: [logoAttachment],
    },
    (err, info) => {
      if (err) console.log(err);
      else {
        console.log("Email sent" + info.response);
      }
    });

  const htmlReceive = await createHtmlToSend(
    "templates/support/supportReceive.html",
    fname,
    recipient,
    phone,
    question
  );

  mailTransporter.sendMail(
    {
      from: email,
      to: "admin@jobforme.ie",
      subject: "Query received!",
      text: "A query has been received!",
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
