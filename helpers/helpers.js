var db=require('../config/connection')
var collection=require('../config/collection');
const { response } = require('express');


module.exports={
     getAllmovies:()=>{
        return new Promise(async(resolve,reject)=>{
           let movieData =await db.get().collection(collection.MOVIE_COLLECTION).find().toArray()
           resolve (movieData)
        })
        
        
    },
    getMOvies:(data)=>{
      return new Promise (async(resolve,reject)=>{
         let movieData = await db.get().collection(collection.MOVIE_COLLECTION)
         .find({
            $or:[{name:data},{year:data},{actor:data},{rating:data},{category:data},{director:data},{Langauge:data}]
         }).toArray()
         resolve (movieData)
      })
    }
}
