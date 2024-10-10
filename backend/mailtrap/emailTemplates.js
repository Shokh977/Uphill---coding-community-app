export const VERIFICATION_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Verify Your Email</title>
</head>
<body style="font-family: 'Courier New', monospace; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #1e1e2f;">
  <div style="background: linear-gradient(to right, #7B2CBF, #9D4EDD); padding: 20px; text-align: center; border-radius: 5px 5px 0 0;">
    <h1 style="color: white; margin: 0;">Email Verification</h1>
  </div>
  <div style="background-color: #2e2e3e; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 4px 10px rgba(0,0,0,0.2);">
    <p style="color: #E0E0FF;">Hello,</p>
    <p style="color: #E0E0FF;">Thank you for signing up! Your verification code is:</p>
    <div style="text-align: center; margin: 30px 0;">
      <span style="font-size: 36px; font-weight: bold; letter-spacing: 4px; color: #9D4EDD; background-color: #1e1e2f; padding: 10px 20px; border-radius: 5px;">{verificationCode}</span>
    </div>
    <p style="color: #E0E0FF;">Please enter this code on the verification page to complete your registration.</p>
    <p style="color: #E0E0FF;">This code will expire in 15 minutes for security reasons.</p>
    <p style="color: #E0E0FF;">If you didn’t create an account with us, you can safely ignore this email.</p>
    <p style="color: #E0E0FF;">Best regards,<br><span style="color: #9D4EDD;">Your App Team</span></p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
    <p>This is an automated message. Please do not reply to this email.</p>
  </div>
</body>
</html>

`;
export const WELCOME_EMAIL = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to Uphill</title>
</head>
<body style="font-family: 'Courier New', monospace; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #1e1e2f;">
  <div style="background: linear-gradient(to right, #7B2CBF, #9D4EDD); padding: 20px; text-align: center; border-radius: 5px 5px 0 0;">
    <h1 style="color: white; margin: 0;">Welcome to Uphill!</h1>
  </div>
  <div style="background-color: #2e2e3e; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 4px 10px rgba(0,0,0,0.2);">
    <p style="color: #E0E0FF;">Hello {name},</p>
    <p style="color: #E0E0FF;">We’re thrilled to have you as part of the Uphill community! Whether you're here to explore, learn, or showcase your skills, you've taken the first step towards an exciting journey.</p>
    <p style="color: #E0E0FF;">Here are some ways you can start exploring Uphill:</p>
    <ul style="color: #E0E0FF;">
      <li>Check out the latest projects from fellow developers.</li>
      <li>Read insightful blog posts and tutorials.</li>
      <li>Join conversations and share your experiences with the community.</li>
    </ul>
    <p style="color: #E0E0FF;">If you ever need assistance, don’t hesitate to reach out. Our community is here to help you succeed.</p>
    <p style="color: #E0E0FF;">Best regards,<br><span style="color: #9D4EDD;">The Uphill Team</span></p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
    <p>This is an automated message. Please do not reply to this email.</p>
  </div>
</body>
</html>

`;
export const PASSWORD_RESET_SUCCESS_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Password Reset Successful</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(to right, #6a0dad, #8a2be2); padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
    <h1 style="color: white; margin: 0;">Password Reset Successful</h1>
  </div>
  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <p>Hello,</p>
    <p>We're writing to confirm that your password has been successfully reset.</p>
    <div style="text-align: center; margin: 30px 0;">
      <div style="background-color: #6a0dad; color: white; width: 50px; height: 50px; line-height: 50px; border-radius: 50%; display: inline-block; font-size: 30px;">
        ✓
      </div>
    </div>
    <p>If you did not initiate this password reset, please contact our support team immediately.</p>
    <p>For security reasons, we recommend that you:</p>
    <ul>
      <li>Use a strong, unique password</li>
      <li>Enable two-factor authentication if available</li>
      <li>Avoid using the same password across multiple sites</li>
    </ul>
    <p>Thank you for helping us keep your account secure.</p>
    <p>Best regards,<br>Uphill Team</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
    <p>This is an automated message, please do not reply to this email.</p>
  </div>
</body>
</html>

`;

export const PASSWORD_RESET_REQUEST_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Password Reset Request</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background-color: #0d1117;
            margin: 0;
            padding: 0;
            color: #e6edf3;
        }
        .email-container {
            width: 100%;
            padding: 20px;
            background-color: #161b22;
            border-radius: 10px;
            max-width: 600px;
            margin: 40px auto;
            box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.3);
        }
        .header {
            background-color: #032414;
            padding: 30px;
            border-radius: 10px 10px 0 0;
            text-align: center;
        }
        .header h1 {
            color: #ffffff;
            margin: 0;
            font-size: 28px;
            letter-spacing: 1px;
        }
        .content {
            padding: 30px;
            text-align: left;
            font-size: 16px;
            line-height: 1.8;
        }
        .content p {
            color: #c9d1d9;
        }
        .cta-button {
            display: inline-block;
            padding: 12px 25px;
            background-color: #4caf50;
            color: white;
            text-align: center;
            text-decoration: none;
            font-weight: bold;
            border-radius: 6px;
            margin-top: 20px;
            transition: background-color 0.3s ease;
        }
        .cta-button:hover {
            background-color: #45a049;
        }
        .footer {
            padding: 20px;
            text-align: center;
            font-size: 14px;
            color: #8b949e;
        }
        .footer a {
            color: #58a6ff;
            text-decoration: none;
        }
        .footer a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <!-- Header -->
          <div style="background: linear-gradient(to right, #7B2CBF, #9D4EDD); padding: 20px; text-align: center; border-radius: 5px 5px 0 0;">

           <h1 style="color: white; margin: 0;">Password Reset!</h1>

</div>
        <!-- Content -->
        <div class="content">
            <h2 style="color: #58a6ff;">Hi {name},</h2>
            <p>We received a request to reset your password for your account on <strong>Uphill</strong>.</p>
            <p>If you requested this password reset, click the button below to reset your password:</p>
            <a href="{resetUrl}" class="cta-button">Reset Password</a>
            <p>If you didn’t request a password reset, you can safely ignore this email. Your password won’t be changed unless you click the link above and create a new one.</p>
            <p>Thanks,<br>Uphill Team</p>
        </div>

        <!-- Footer -->
        <div class="footer">
            <p>Need help? <a href="mailto:uphilltowardshigh@gmail.com">Contact Support</a></p>
        </div>
    </div>
</body>
</html>



`;
