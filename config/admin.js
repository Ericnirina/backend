module.exports = ({ env }) => ({
  auth: {
    secret: 'ADMIN_JWT_SECRET',
  },
  apiToken: {
    salt: 'API_TOKEN_SALT',
  },
});
