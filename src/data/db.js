import Dexie from 'dexie';

export const db = new Dexie('myDatabase');
db.version(1).stores({
  employees: '++id, firstname, lastname, dateofbirth, startdate, street, city, state, zip, department' 
  // Primary key and indexed props
});
