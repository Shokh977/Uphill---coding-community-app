import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv";

dotenv.config();

export const mailTrapClient = new MailtrapClient({
  token: process.env.MAILTRAP_TOKEN,
});


export const sender = {
  address: "hello@uphill-tech.com",
  name: "Uphill Tech",
};
