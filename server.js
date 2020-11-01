require('dotenv').config();
const nodemailer=require('nodemailer');

//step 1
let transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:process.env.EMAIL,
        pass:process.env.PASSWORD
    }
});
//step 2
let mailOptions={
    from:process.env.EMAIL,
    to:'ksagrawal143@gmail.com',
    subject:'Testing nodemailer',
    text:'Hey Kshitij !! Dont reply this to mail.'
};

//step 3
transporter.sendMail(mailOptions,function(err,data){
    if(err){
        console.log('Error Occured',err);
    }
    else{
        console.log('Email sent');
    }
});
 