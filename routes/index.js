var express = require('express');
var router = express.Router();
var exios=require('axios');
const { default: axios } = require('axios');
const { response } = require('express');
const helpers = require('../helpers/helpers')

/* GET home page. */  
router.get('/',async(req,res)=> {

   let movieData=await helpers.getAllmovies()
  //  console.log(movieData);
   
   res.render("index",{movieData})

});


//filter items

router.post("/filter",async(req,res)=>{
  let data= req.body.value
      data=data.toLowerCase()
      if(data=="search"){
         res.redirect("/")
      }else{
      if(data==="all"){
        let oldDAte =new Date();
        let movieData=await helpers.getAllmovies()
        let newDate=new Date();
        let time = newDate-oldDAte
        res.render("index",{movieData,time})
      }else{
        let oldDAte =new Date();
        let movieData =await helpers.getMOvies(data)
        let newDate=new Date();
        let time = newDate-oldDAte
            console.log(movieData[0]);
            if (movieData[0]==undefined){
               let notfoundEtrr = true
               let movieData = await helpers.getAllmovies()
               res.render("index",{movieData,time,notfoundEtrr})
            }else{
               res.render("index",{movieData,time})
            }
        
        
        
      }}
 
})


module.exports = router;























// axios.get('https://api.themoviedb.org/3/discover/movie?api_key=4465e21a7af004f59c6fd64d5307e68d&with_genres=27').then((response)=>{
  // //images  https://image.tmdb.org/t/p/w500/A32wmjrs9Psf4zw0uaixF0GXfxq.png
  
  //   let data =  response.results
  //  res.render('index', {data});

  //  }).catch((error)=>{
  //   console.log(error);
  //  })