import nodemailer from "nodemailer";

import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "e9554286b9bb45",
    pass: "bf1eca06583d63"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({subject, body}: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "Tiago Augusto <tiagoasrodrigues.dev@gmail.com>",
      subject,
      html: body,
    });
  }
}