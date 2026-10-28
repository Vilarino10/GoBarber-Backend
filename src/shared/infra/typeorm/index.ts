import AppDataSource from './data-source';

AppDataSource.initialize()
  .then(() => {
    console.log('Database Connected!');
  })
  .catch((error) => {
    console.error('Error connecting to database', error);
  });
