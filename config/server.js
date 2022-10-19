module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1335),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET'),
    },
  },
});
