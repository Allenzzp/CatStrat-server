let dbParams = {};
// if (process.env.buildbuildDATABASE_URL) {
//   dbParams.connectionString = process.env.buildDATABASE_URL;
// } else {
  
// }

dbParams = {
  host: process.env.build.DB_HOST,
  user: process.env.build.DB_USER,
  password: process.env.build.DB_PASS,
  database: process.env.build.DB_NAME,
  port: process.env.build.DB_PORT,
};

module.exports = dbParams;
