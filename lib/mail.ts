import axios from "axios";

interface User {
  name: string;
  email: string;
}

/**
 * Function to send email using nodemailer
 * @params {string} email
 * @params {string} firstName
 * @params {string} userId
 * @params {string} REDIRECT_URL
 * @returns {Promise} response
 */
export const sendEmail = async (message: string, user: User) => {
  console.log("sendEmail", user?.email);

  try {
    const res = await axios.post("/api/send-email", {
      message,
      user,
    });

    console.log("Email sent successfully", res);
    return res;
  } catch (err) {
    console.log("Error sending email", err);

    throw err;
  }
};
