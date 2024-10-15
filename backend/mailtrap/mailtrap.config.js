import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv";

dotenv.config();

export const mailTrapClient = new MailtrapClient({
  token: process.env.MAILTRAP_TOKEN,
});


export const sender = {
<<<<<<< HEAD
  address: "hello@uphill-tech.com",
=======
  email: "hello@uphill-tech.com",
>>>>>>> fb143a1412afe08974b0d412e9915107e2c7fe6d
  name: "Uphill Tech",
};
