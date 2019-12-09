const express = require('express');
const router = express.Router();
// routes
const db = require('../_helpers/db');

router.get('/Allusers', allusers);
module.exports = router;


function allusers(req, res, next) {
  
   db.query(`SELECT * FROM users`,req.body, function(err, rows)
        {
         if(rows)
         {
         res.json({result:true , message:'Data Found',data:rows});
         }
         else
        {
         res.json({result:false , message:'Data Not Found'});
        }
         if (err){
           res.json({result:false , message:err});
          }
            
        });

}

