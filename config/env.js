require('dotenv').config();

const {
  NODE_ENV,
  PORT,
  DB_MONGO,
  SENDGRID_API_KEY,
  JWT_SECRET,
  JWT_ACCOUNT_ACTIVATION,
  JWT_RESET_PASSWORD,
  EMAIL_TO,
  EMAIL_FROM
} = process.env;

module.exports = {
  env: NODE_ENV,
  port: PORT,
  dbMongo: DB_MONGO,
  sendGrid: SENDGRID_API_KEY,
  jwtSecret: JWT_SECRET,
  jwtAccountActivation: JWT_ACCOUNT_ACTIVATION,
  jwtResetPass: JWT_RESET_PASSWORD,
  emailTo: EMAIL_TO,
  emailFrom: EMAIL_FROM
};
