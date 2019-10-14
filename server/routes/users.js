var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var auth = require('../functions/auth').func();
var jwt = require('jsonwebtoken')
var _ = require('lodash')
var async = require('async')
var crypto = require('crypto');
var nodeMailer = require('nodemailer');
var calC = require('../functions/calculator').func();
var multer = require('multer');
var moment = require('moment');

var fileFilter = (req, file, cb) => {
  var allowedMimeTypes = ['image/jpeg', 'image/pjpeg', 'image/png', 'image/gif'];

  if (_.includes(allowedMimeTypes, file.mimetype)) {
    cb(null, true)
  } else {
    cb(new Error("Invalid file type !"))
  }
}

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/')
  },
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}_${Date.now()}`)
  }
})

const limits = { files: 1, fileSize: 1024 * 1024 }  //1 mb

var upload = multer({ storage: storage, limits: limits, fileFilter: fileFilter }).single('pic')

const saltRounds = 10;
const secret_key = "dummyProject"
const userModel = require('../models/user');

//create
router.post('/register', (req, res) => {
  var input = req.body;
  if (input.email != '' && input.password != '' && input.user_name != '') {
    userModel.findOne({ email: input.email })
      .then((result, err) => {
        if (result) {
          throw new Error('Email already exists')
        }
        bcrypt.genSalt(saltRounds)
          .then((salt, err) => {
            console.log("Saltttt", salt)
            return bcrypt.hash(input.password, salt)
          })
          .then((hash, err) => {
            console.log("Hashhhhhh", hash)
            let user_data = new userModel({
              "email": input.email,
              "password": hash,
              "user_name": input.user_name
            })
            user_data.save()
              .then((response) => {
                console.log("User Result : ", response);
                res.json({
                  status: 1,
                  message: "User added successfully.",
                });

              })
              .catch((err) => {
                console.log('Error while adding user : ', err);
                res.json({
                  status: 0,
                  message: "Register failed"
                });
              })
          })
      }).catch((err) => {
        console.log("Error=======>>>>", err)
        res.json({ status: 0, message: 'Email already exists' })
      })
  } else {
    res.json({ status: 0, message: "Invalid email or password" })
  }
})
//login
router.post('/login', (req, res) => {
  var input = req.body;
  if (input.email != '' && input.password != '') {
    userModel.findOne({ email: input.email })
      .then((result) => {
        console.log("Result", result)
        let passHash = result.password
        bcrypt.compare(input.password, passHash)
          .then((isMatch) => {
            if (!isMatch) {
              res.json({ status: 0, message: "Incorrect Password" })
            } else {
              res.json({
                status: 1,
                message: "Login successful.",
                token: jwt.sign({ _id: result._id }, secret_key, { expiresIn: 60*60 }),
                
              });
            }
          })
      })
      .catch(() => {
        res.json({ status: 0, message: "Cannot find email" })
      })
  } else {
    res.json({ status: 0, message: "Invalid email or password" })
  }
})
//read
router.post('/getUserDetails', auth.authenticate, (req, res) => {
  let user_id = req.user_id
  userModel.findOne({ _id: user_id })
    .then((result, err) => {
      if (err) {
        throw new Error('User not found')
      }
      let profile_pic = result.profile_pic;
      let data = {
        "_id": result._id,
        "email": result.email,
        "profile_pic": profile_pic && profile_pic != '' ? `http://192.168.10.59:3000/${profile_pic}` : '',
        "user_name": result.user_name
      }
      res.json({ status: 1, message: "Success", result: data })
    })
    .catch((err) => {
      console.log("Error=========>>>>>>", err)
      res.json({ status: 0, message: "Cannot find user" })

    })
})
//update
router.post('/updateUserDetails', auth.authenticate, (req, res) => {
  let input = req.body
  let user_id = req.user_id;
  if (input.user_name != '') {
    userModel.findOneAndUpdate({ _id: user_id }, { user_name: input.user_name })
      .then(() => {
        res.json({ status: 1, message: "User Name Updated!" })
      })
      .catch(() => {
        res.json({ status: 0, message: "Error while updating" })
      })
  } else {
    res.json({ status: 0, message: "User Name not valid" })
  }
})
//delete
router.post('/deleteUser', auth.authenticate, (req, res) => {
  let input = req.body
  let user_id = req.user_id;
  userModel.findOneAndDelete({ _id: user_id })
    .then(() => {
      res.json({ status: 1, message: "User deleted" })
    })
    .catch(() => {
      res.json({ status: 0, message: "Error while deleting" })
    })
})
//upload pic
router.post('/uploadPic', auth.authenticate, (req, res) => {

  upload(req, res, (err) => {
    if (err) {
      console.log("Error while uploading======>>>>", err)
      return res.json({ status: 0, Msg: "Failed while uploading !" })
    }
    console.log("request=======>", req.file)
    userModel.findOneAndUpdate({ _id: req.user_id }, { profile_pic: req.file.filename })
      .then((result) => {
        console.log("Updated data======>>>>", result)
        res.json({ status: 1, Msg: "success" })
      })
      .catch((err) => {
        console.log("Error==========>", err)
        res.json({ status: 0, Msg: "Upload Failed" })
      })
  })
})
//forgot password
router.post('/forgotPassword', (req, res) => {
  async.waterfall([
    function (cb) {
      crypto.randomBytes(20, (err, buffer) => {
        var token = buffer.toString('hex');
        cb(err, token)
      })
    },
    function (token, cb) {
      userModel.findOne({ email: req.body.email}, (err, user) => {
        if (!user) {
          res.json({ status: 0, Msg: 'User does not exist' })
          return res.redirect('/forgotPassword')
        }
        user.password_reset_token = token;
        user.reset_password_expires = Date.now() + 600

        user.save((err) => {
          cb(err, token, user)
        })
      })
    },
    function (token, user, cb) {
      var smtpTransport = nodeMailer.createTransport('SMTP', {
        service: '', //SendGrid, Gmail, Mailgun
        auth: {
          user: '', // Your Username
          pass: ''  // Your Password
        }
      });
      var mailOptions = {
        to: user.email,
        from: '', //Email address of the sender
        subject: 'Password Reset',
        text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
          'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
          'http://' + req.headers.host + '/reset/' + token + '\n\n' +
          'If you did not request this, please ignore this email and your password will remain unchanged.\n'
      };
      smtpTransport.sendMail(mailOptions, (err) => {
        console.log()
        cb(err, 'Password Reset Link Generated')
      });
    },
    function (err) {
      if (err) return next(err);
      res.redirect('forgotPassword')
    }
  ])
})
//password reset link
router.post('/reset/:token', (req, res) => {
  async.waterfall([
    function (cb) {
      userModel.findOne({ password_reset_token: req.params.token, reset_password_expires: { $gt: Date.now() } }, (err, user) => {
        if (!user) {
          res.json({ status: 0, Msg: "Token not valid" })
          return res.redirect('/')
        }
        user.password = req.body.password;
        user.password_reset_token = undefined;
        user.reset_password_expires = undefined;

        user.save((err) => {
          if (err) res.json({ status: 0, Msg: 'Failed to reset passowrd' });
        })
        cb(err, user)
      })
    },
    function (user, cb) {
      var smtpTransport = nodeMailer.createTransport('SMTP', {
        service: '', //SendGrid, Gmail, Mailgun
        auth: {
          user: '', // Your Username
          pass: ''  // Your Password
        }
      });
      var mailOptions = {
        to: user.email,
        from: '', //Email address of the sender
        subject: 'Your password has been changed',
        text: 'This is a confirmation that the password for your account ' + user.email + ' has just been changed.\n'
      };
      smtpTransport.sendMail(mailOptions, (err) => {
        console.log()
        cb(err, 'Password Reset Link Generated')
      });
    },
    function (err) {
      res.redirect('/')
    }
  ])
})

module.exports = router;





































