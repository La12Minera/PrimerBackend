const mongoose = require('mongoose');

const { log } = require('../utils/logger');

const server =
  process.env.MONGO_DB_SERVER ||
  'Rogerfederer1234:Rogerfeder1234@cursos.u3uyo.mongodb.net';
const database = process.env.MONGO_DB_DATABASE || 'agenda';

async function connectDB() {
  try {
    await mongoose.connect(
      `mongodb+srv://${server}/${database}?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    );
    log.info('MongoDB Connected');
  } catch (error) {
    log.error(error);
    process.exit(1);
  }
}

module.exports = connectDB;
