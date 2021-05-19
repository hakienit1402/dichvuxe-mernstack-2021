const nodemailer = require("nodemailer");
const env = require('dotenv')
env.config()

exports.sendmail = (req,res) => {
    const transporter = nodemailer.createTransport({ // config mail server
        service: 'Gmail',
        secure: true,
        auth: {
            // user: `${process.env.EMAIL_USER}`, //Tài khoản gmail vừa tạo
            // pass: `${process.env.EMAIL_PASS}` //Mật khẩu tài khoản gmail vừa tạo
            user: 'hakien.it.nodejs@gmail.com', //Tài khoản gmail vừa tạo
            pass: 'kien14021999' //Mật khẩu tài khoản gmail vừa tạo
        },
        tls: {
            // do not fail on invalid certs
            rejectUnauthorized: false
        }
    });
    var content = '';
    content += `
        <div style="padding: 10px; background-color: #003375">
            <div style="padding: 10px; background-color: white;">
                <h4 style="color: #0085ff">BẠN CÓ YÊU CẦU ĐĂNG KÍ Ở TRANG WEB</h4>
                <a href="https://google.com" style="color: black">Google</a>
            </div>
        </div>
    `;
    var mainOptions = { // thiết lập đối tượng, nội dung gửi mail
        from: 'HAKIENIT-Test nodemailer',
        to: req.body.email,
        subject: 'Test Nodemailer',
        text: 'Your text is here',
        html: content 
    }
    transporter.sendMail(mainOptions, function(err, info){
        if (err) {
            console.log(err);
            res.status(400).json({err}); 
        } else {
            console.log('Message sent: ' +  info.response);
            res.status(200).json({
                message: `mail sent:  ${info.response}`
            }); 
            // req.flash('mess', 'Một email đã được gửi đến tài khoản của bạn'); //Gửi thông báo đến người dùng
            // res.redirect('/');
        }
    });
}

