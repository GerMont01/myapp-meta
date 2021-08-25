'use strict';


class SimpleCrudDB {
    // store your records here
    inMemoryDatabase = [];
    // import this and begin to use it
    fs = require("fs");

    constructor(aFileName) {
        this.fileName = aFileName;
        // this is the filename you will save to add code below to create that file, or
        // open it when this class is instantiated, ie: your program start, it loads
        // the database from the file, into the this.inMemoryDatabase
    }

    inMemoryDatabase = JSON.parse(this.reloadDB(this.fileName));

    Create(username, password)
    {
       // add code to store a record in your database
        if (this.Read(username)) {
            return false
        } else {
            this.inMemoryDatabase.push({username: username, password: password})
        }
        // return true if success, false if not
    
    };

    Read(username) {
      // add code to read record from database
      let findUser = this.inMemoryDatabase.find(user => user.username === username)
      if (findUser) {
        return findUser
      } else {
          return false
      }
        // return undefined if no record exists, otherwise, return the record
    }



    Update(username, newRecordData) {
       // add code to update a record in the database


       // return true if success, false if not


    };


    Delete(username)
    {
     // add code to delete a user in the database


    // return true if success, false if not


    };


    flushDB() {
        // flush the inmemoryDatabase to disk (ie: save the database to disk)
        this.fs.writeFile(this.fileName, JSON.stringify(this.inMemoryDatabase) , (err) => {
          if (err)
            console.log(err);
          else {
            console.log("File written successfully")
        }})
    }


    reloadDB() {
        // relead the database from disk
        try {
            return this.fs.readFileSync('./db/mydb.json', 'utf8')
          } catch (err) {
            return err
          }
        
    }
}


let db = new SimpleCrudDB('./db/mydb.json')
db.Create('Gerardo2','passssssword2')
db.flushDB()