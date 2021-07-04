/**
 * !!!!! Some or all of these can be overridden by the Nest module              !!!!!!
 * !!!!! Changing these values is unlikely to have an effect on the running app !!!!!!
 */
 ​
 const dbSSL =
   'string' === typeof process.env.DATABASE_SSL
     ? process.env.DATABASE_SSL === 'true'
     : process.env.DATABASE_SSL || false;
 ​
 module.exports = {
   type: 'postgres',
   url:
     process.env.DATABASE_URL ||
     'postgresql://postgres:postgres@localhost:5432/postgres',
   synchronize: process.env.DATABASE_SYNCHRONIZE || false,
   entities: ['dist/**/*.entity.js'],
   subscribers: ['dist/**/*.subscriber.js'],
   factories: ['dist/**/*.factory.js'],
   seeds: [
     'dist/modules/region/region.seeder.js',
     'dist/modules/role/role.seeder.js',
     'dist/modules/user/user.seeder.js',
     'dist/modules/builder/builder.seeder.js',
     'dist/modules/subdivision/subdivision.seeder.js',
     'dist/modules/model/model.seeder.js',
     'dist/modules/building/building.seeder.js',
     'dist/modules/phase/phase.seeder.js',
     'dist/modules/board-type/board-type.seeder.js',
     'dist/modules/job/job.seeder.js',
     'dist/modules/supplier/supplier.seeder.js',
     'dist/modules/contractor/contractor.seeder.js',
     'dist/modules/board-purchase/board-purchase.seeder.js',
     'dist/modules/board-purchase-floor/board-purchase-floor.seeder.js',
     'dist/modules/material/material.seeder.js',
     'dist/modules/job-phase/job-phase.seeder.js',
     'dist/modules/board-receipt-floor/board-receipt-floor.seeder.js',
     'dist/qa/qa.seeder.js',
   ],
   migrations: ['dist/migrations/*.js'],
   cli: {
     migrationsDir: 'src/migrations',
   }
 };