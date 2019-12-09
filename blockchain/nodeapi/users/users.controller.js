const express = require('express');
const router = express.Router();
// routes
const db = require('../_helpers/db');

router.post('/authenticate', authenticate);
router.post('/register/create', register);
// router.get('/', getAll);
// router.get('/current', getCurrent);
// router.get('/:id', getById);
// router.post('/:id', update);
// router.post('/check/mobile', CheckMobile);
// router.post('/upload/:id', uploadImage);
// router.delete('/:id', _delete);

module.exports = router;

function authenticate(req, res, next) {
           var data = {
                         email:req.body.email,   
                         password:req.body.password   
                       };
       db.query(`SELECT * FROM users where email = '${data.email}' and password = '${data.password}' `, function (err, rows) 
        {
          if (err){
           res.json({result:false , message:err});
          }
          res.json({result:true , message:'Login Successfull',data:rows});
          
        });

}

function register(req, res, next) {
  
   db.query(`SELECT id FROM users WHERE email ='${req.body.email}'`,req.body, function(err, rows)
        {

          if (err){
           res.json({result:false , message:err});
          }
         if(rows.length > 0 ){

         res.json({result:false , message:'Email already exist',data:rows});
         return false; 
        }

        var data = {
                    name:req.body.name,
                    email:req.body.email,
                    password:req.body.password,
                    ip:req.connection.remoteAddress
                  }  
         db.query("INSERT INTO users set ? ",data, function(err, rows)
            {
              if (err){
               res.json({result:false , message:err});
              }
            res.json({result:true , message:'Register Successfull',data:rows});
              
            });
        });

  
}

// function CheckMobile(req, res, next) {
//     console.log(req.body);
//     userService.CheckMobile(req.body)
//         .then((user) => res.json(user))
//         .catch(err => next(err));
// }

// function getAll(req, res, next) {
//     userService.getAll()
//         .then(users => res.json(users))
//         .catch(err => next(err));
// }

// function getCurrent(req, res, next) {
//     userService.getById(req.user.sub)
//         .then(user => user ? res.json(user) : res.sendStatus(404))
//         .catch(err => next(err));
// }

// function getById(req, res, next) {
//     userService.getById(req.params.id)
//         .then(user => user ? res.json(user) : res.sendStatus(404))
//         .catch(err => next(err));
// }

// function update(req, res, next) {
//     console.log("upadssa");
//     userService.update(req.params.id, req.body)
//         .then(() => res.json({}))
//         .catch(err => next(err));
// }

// function uploadImage(req, res, next) {
//     if(req.file.filename){
//      var  image = req.file.filename;    
//     }else{
//      var image = false;    
//     }
//     userService.uploadImage(req.params.id, image)
//         .then((data) => data ? res.json(data) : res.sendStatus(404))
//         .catch(err => next(err));

// }



// function _delete(req, res, next) {
//     userService.delete(req.params.id)
//         .then(() => res.json({}))
//         .catch(err => next(err));
// }