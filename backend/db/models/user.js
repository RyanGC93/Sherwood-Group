'use strict';
const { Validator } = require('sequelize');
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4, 30],
        isNotEmail(value) {
          if (Validator.isEmail(value)) {
            throw new Error('Cannot be an email.');
          }
        },
      },
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2, 40]
      }
    }, 
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2, 40]
      }
    },        
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 256]
      }
    },
    buying_power: {
      type: DataTypes.Integer,
      allowNull: true,
    }, 
    hashedPassword: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [60, 60]
      },
    },
  }, {
    defaultScope: {
      attributes: {
        exclude: ['buying_power','first_name','last_name','hashedPassword', 'email', 'createdAt', 'updatedAt'],
      },
    },
    scopes: {
      currentUser: {
        attributes: { exclude: ['hashedPassword'] },
      },
      loginUser: {
        attributes: {},
      },
    },
  });
  User.prototype.toSafeObject = function() {
    const { id, username, email } = this;
    return { id, username, email };
  };
  User.prototype.validatePassword = function(password) {
    return bcrypt.compareSync(password, this.hashedPassword.toString());
  };
  User.getCurrentUserById = async function(id) {
    return await User.scope('currentUser').findByPk(id);
  };
  User.login = async function({ credential, password }) {
    const { Op } = require('sequelize');
    const user = await User.scope('loginUser').findOne({
      where: {
        [Op.or]: {
          username: credential,
          email: credential,
        },
      },
    });
    if (user && user.validatePassword(password)) {
      return await User.scope('currentUser').findByPk(user.id);
    }
  };
  User.signup = async function({ username, firstname,lastname, email, password }) {
    const hashedPassword = bcrypt.hashSync(password);
    const user = await User.create({
      username,
      firstname,
      lastname,
      email,
    });
    return await User.scope('currentUser').findByPk(user.id);
  };
  User.associate = function(models) {
    User.hasMany(models.Portfolio, {
      foreignKey: "user_id"
    })
    User.hasMany(models.Watchlist, {
      foreignKey: "user_id"
    })
    User.hasMany(models.Transaction_history, {
      foreignKey: "user_id"
    })
  };
  return User;
};
