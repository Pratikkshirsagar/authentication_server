const mongoose = require('mongoose');
const crypto = require('crypto');

// User Schema

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      max: 32,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      lowercase: true,
      unique: true,
    },
    hashed_password: {
      type: String,
      required: true,
    },
    salt: {
      type: String,
    },
    role: {
      type: String,
      default: 'subscriber',
    },
    resetPasswordlink: {
      data: String,
      default: '',
    },
  },
  { timestamps: true }
);

// Virtuals
userSchema
  .virtual('password')
  .set(function (password) {
    this._password = password;
    this.salt = this.makeSalt();
    this.hashed_password = this.encryptPasword(password);
  })
  .get(function () {
    return this._password;
  });

// Methods
userSchema.methods = {
  authenticated: function (plainText) {
    return this.password(plainText) === this.hashed_password;
  },
  encryptPasword: function (password) {
    if (!password) return '';
    try {
      return Crypto.createHmac('sha1', this.salt)
        .update(password)
        .digest('hex');
    } catch (err) {
      return '';
    }
  },
  makeSalt: function () {
    return Math.round(new Date().valueOf() * Math.random()) + '';
  },
};

module.exports = mongoose.model('User', userSchema);
