import * as nodemailer from "nodemailer";
import * as fs from "fs";
import {promisify} from "util";
import * as handlebars from "handlebars";
import * as path from "path";
import {getFile} from "../utils/firebas-storage-utils";
import {Attachment} from "nodemailer/lib/mailer";

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

const logoAttachment: Attachment = {
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
      subject: "Your Query",
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

// have attachments here for the files
const createFileAttachments = async (files: string[]):
Promise<Attachment[]> => {
  return await Promise.all(files.map(async (file) => {
    return {
      path: await getFile(file),
    };
  }));
};

const createReceiptToSend = async (
  dir: string,
  name: string,
  item: string,
  amount: string,
  phone: string,
  email: string,
  orderId: string,
  link?: string ) => {
  const html = await readFile(
    path.resolve(__dirname, dir),
    "utf8"
  );
  const template = handlebars.compile(html);
  const data = {
    username: name,
    item: item,
    amount: amount,
    phone: phone,
    email: email,
    link: link? link : "No LinkedIn attached",
    orderId: orderId,
  };
  return template(data);
};

export const sendNoReplyMessage =
    async (email: string,
      pass: string,
      recipient: string,
      item: string,
      amount: number,
      name: string,
      phone: string,
      orderId: string,
      files?: string[],
      link?: string) => {
      const mailTransporter = transporter(email, pass);

      const htmlReceipt = await createReceiptToSend( // customer
        "templates/no-reply/no-reply.html",
        name,
        item,
    amount as unknown as string,
    phone,
    recipient,
    orderId,
    link? link : undefined
      );

      const htmlNotif = await createReceiptToSend( // tomek
        "templates/no-reply/no-reply-receive.html",
        name,
        item,
    amount as unknown as string,
    phone,
    recipient,
    orderId,
    link? link : undefined
      );

      // create attachments from file names
      const fileAttachments = files ?
        await createFileAttachments(files) : undefined;

      mailTransporter.sendMail(
        {
          from: email,
          to: recipient,
          subject: "Order received!",
          text: "Thank you for your order!",
          html: htmlReceipt,
          attachments: [logoAttachment],
        },
        (err, info) => {
          if (err) console.log(err);
          else {
            console.log("Email sent" + info.response);
          }
        });

      mailTransporter.sendMail(
        {
          from: email,
          to: "admin@jobforme.ie",
          subject: "Order received!",
          text: "An order has been received!",
          html: htmlNotif,
          attachments: fileAttachments ?
            [logoAttachment, ...fileAttachments] :
            [logoAttachment], // attachments
        },
        (err, info) => {
          if (err) console.log(err);
          else {
            console.log("Email sent" + info.response);
          }
        });
    };
