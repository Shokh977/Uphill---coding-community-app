import { mailTrapClient, sender } from "./mailtrap.config.js";
import {
  PASSWORD_RESET_REQUEST_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
  VERIFICATION_EMAIL_TEMPLATE,
  WELCOME_EMAIL,
} from "./emailTemplates.js";

export const sendVerificationEmail = async (email, verificationToken) => {
  const recipient = [{ email }];

  try {
    const response = await mailTrapClient.send({
      from: sender,
      to: recipient,
      subject: "Verify your email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationCode}",
        verificationToken
      ),
      category: " Email Verification",
    });
    console.log("Email sent successfully", response);
  } catch (error) {
    console.log(`Error sending verification email: ${email}`);
  }
};

export const sendWelcomEmail = async (email, name) => {
  const recipient = [{ email }];

  try {
    const response = await mailTrapClient.send({
      from: sender,
      to: recipient,
      subject: "Verify your email",
      html: WELCOME_EMAIL.replace("{name}", name),
    });
    console.log("Email sent successfully", response);
  } catch (error) {
    console.log(`Error sending verification email: ${email}`);
  }
};

export const sendPasswordResetEmail = async (email, resetUrl, name) => {
  const recipient = [{ email }];

  try {
    const response = await mailTrapClient.send({
      from: sender,
      to: recipient,
      subject: "Verify your email",
      html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{name}", name).replace(
        "{resetUrl}",
        resetUrl
      ),
      category: "Password Reset",
    });
    console.log("Reset Email has been sent successfully", response);
  } catch (error) {
    console.log(error);
  }
};

export const sendResetSuccessEmail = async (email) => {
  const recipient = [{ email }];

  try {
    const response = await mailTrapClient.send({
      from: sender,
      to: recipient,
      subject: "password reset successful",
      html: PASSWORD_RESET_SUCCESS_TEMPLATE,
      category: "Password Reset",
    });
    console.log("Successful Reset Email has been sent successfully", response);
  } catch (error) {
    console.log(error);
    throw new Error(` password reset success email :  ${error}`);
  }
};
