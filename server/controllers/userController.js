import { transporter } from "../middlewares/sendMail.js";
import User from "../models/User.js";
import { genrateOtp } from "../utils/genrateOtp.js";
import bcrypt from "bcryptjs";
import genrateToken from "../utils/genrateToken.js";
import crypto from "crypto";

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const exitingUser = await User.findOne({ email });

    if (exitingUser) {
      return res.status(401).json({ message: "User is already exits." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const otp = genrateOtp();

    const newUser = {
      name,
      email,
      password: hashedPassword,
      otp: otp,
      otpExpiry: Date.now() + 10 * 60 * 1000,
      isVerified: false,
    };
    await transporter.sendMail({
      from: "jyantithakor941@gmail.com",
      to: email,
      subject: "Otp Verification",
      html: `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>DeliciousDrop OTP Verification</title>
  </head>
  <body style="margin:0; padding:0; font-family: Arial, sans-serif; background-color:#f8f9fa;">

    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f8f9fa; padding:30px 0;">
      <tr>
        <td align="center">

          <table width="600" cellpadding="0" cellspacing="0" cellspacing="0" border="0" 
            style="background:#ffffff; border-radius:12px; overflow:hidden; box-shadow:0 4px 12px rgba(0,0,0,0.08);">

            <!-- Header -->
            <tr>
              <td align="center" 
                style="background:#ff6b35; padding:30px; color:#ffffff;">
                <h1 style="margin:0; font-size:32px;">🍔 DeliciousDrop</h1>
                <p style="margin:10px 0 0; font-size:16px;">
                  Fresh Food Delivered to Your Doorstep
                </p>
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding:40px 30px; text-align:center; color:#333;">
                <h2 style="margin:0 0 15px; font-size:26px;">
                  Verify Your Email
                </h2>

                <p style="font-size:16px; line-height:1.6; margin-bottom:20px;">
                  Hello <strong>${name}</strong>,<br><br>
                  Thank you for registering with <strong>DeliciousDrop</strong>.
                  Please use the OTP below to verify your email address.
                </p>

                <!-- OTP Box -->
                <div style="
                  display:inline-block;
                  background:#fff3ed;
                  border:2px dashed #ff6b35;
                  padding:20px 40px;
                  border-radius:10px;
                  margin:20px 0;
                ">
                  <span style="
                    font-size:36px;
                    font-weight:bold;
                    letter-spacing:8px;
                    color:#ff6b35;
                  ">
                    ${otp}
                  </span>
                </div>

                <p style="font-size:15px; color:#666; margin-top:20px;">
                  This OTP is valid for <strong>10 minutes</strong> only.
                </p>

                <p style="font-size:14px; color:#999; margin-top:30px;">
                  If you did not request this, please ignore this email.
                </p>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td align="center" 
                style="background:#f1f1f1; padding:20px; font-size:14px; color:#666;">
                © 2026 DeliciousDrop. All Rights Reserved.
              </td>
            </tr>

          </table>

        </td>
      </tr>
    </table>

  </body>
  </html>`,
    });
    await User.create(newUser);

    res.status(201).json({ message: "Otp sent on you mail.!", email });
  } catch (err) {
    res.status(501).json({ message: "Internal server error.", err });
  }
};

export const verifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "User not found.!!" });
    }

    if (user.otp !== otp) {
      return res.status(409).json({ message: "Invalid otp..!!" });
    }

    if (!user.otpExpiry > Date.now()) {
      return res.status(409).json({ message: "Otp is expired...!!" });
    }

    user.otp = null;
    user.otpExpiry = null;
    user.isVerified = true;
    user.save();

    res.status(200).json({ message: "User register successfully.!" });
  } catch (err) {
    res.status(501).json({ message: "Internal server error.", err });
  }
};

// login controller

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "User not found.!!" });
    }

    const isMatched = await bcrypt.compare(password, user.password);

    if (!isMatched) {
      return res
        .status(401)
        .json({ message: "Email and password incorrect.!" });
    }

    const token = genrateToken(user);

    res.status(200).json({ message: "Login successfully.!", token, user });
  } catch (err) {
    res.status(501).json({ message: "Internal server error.", err });
  }
};


export const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "User not found.!!" });
    }

    const resetToken = crypto.randomBytes(32).toString("hex");
    console.log(resetToken);

    const hashedToken =  crypto.createHash('sha256').update(resetToken).digest('hex');
    console.log(hashedToken)

    user.resetPasswordToken = hashedToken;
    user.resetPasswordExpiry = Date.now() + 15 * 60 * 1000;
    await user.save();
    
    const resetUrl = `http://localhost:5173/reset-password/${resetToken}`

    await transporter.sendMail({
      from: "jyantithakor941@gmail.com",
      to: email,
      subject: "Password Reset Link",
      html: `
        <a href=${resetUrl}>Reset Password</a>
      `
    });

    return res.status(201).json({ message: "Link sent on your mail.!" });

  } catch (err) {
    res.status(500).json({ message: "Internal server error.", err });
  }
};


export const resetPassword = async(req,res)=>{
  try{
      const {token} = req.params;
      const {newPassword} = req.body;

      // await crypto.createHash('sha256').update(token).digest('hex');

      const hashedToken =  crypto.createHash('sha256').update(token).digest('hex');

      const user = await User.findOne({
        resetPasswordToken:hashedToken,
        resetPasswordExpiry : {$gt:Date.now()}
      })

      if(!user){
         return res.status(401).json({ message: "User not found.!!" });
      }
      const hashedPassword = await bcrypt.hash(newPassword,10);

      user.resetPasswordToken = null;
      user.resetPasswordExpiry = null;

      user.password = hashedPassword;

      await user.save();

      return res.status(201).json({ message: "Password reset successfully" });

  }
  catch(err){
    res.status(500).json({ message: "Internal server error.", err });
  }
}