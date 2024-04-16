const nodemailer = require("nodemailer");

export const sendEmail = async() =>{
    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false, 
            auth: {
              user: "maddison53@ethereal.email",
              pass: "jn7jnAPss4f63QBp6D",
            },
        });

        const emailOptions = {
            from: 'tanvesh@gmail.com', 
            to: "email", 
            // subject: emailType === "VERIFY" ? "Verify your email" : "Reset your password",
            html: "<b>Hello world?</b>",
        }

        const mailResponse = await transporter.sendMail(emailOptions);
        return mailResponse;
          
    } catch (error: any) {
        throw new Error(error.message);
    }

}