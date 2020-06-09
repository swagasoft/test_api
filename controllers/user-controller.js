const mongoose = require('mongoose');
const UserModel = mongoose.model('user');


const createUser = (req, res)=> {
    console.log('body....',req.body);
    var newUser = new UserModel();
    newUser.fullname = req.body.fullname;
    newUser.email = req.body.email;
    newUser.sex = req.body.sex;
    newUser.dob = req.body.dob;
    newUser.address = req.body.address;
    newUser.save((err, user)=> {
        if(err){
            console.log(err);
            res.status(422).send({msg: 'error while creating user'});
        }else{
            res.status(200).send({msg:'user has been created successfully!'});
        }
    })
    

}


const updateUser = (req, res)=> {
   console.log('update....',req.body);
    UserModel.findOne({_id: req.body._id}).then((user)=> {
        if(user){
            user.fullname = req.body.fullname;
            user.sex = req.body.sex;
            user.dob= req.body.dob;
            user.status= req.body.status;
            user.address= req.body.address;
            user.save((err)=>{
                if(!err){
                    res.status(200).send({msg: ' update successful'})
                }else{
                    console.log(err);
                    res.status(422).send({msg: 'error in update'})
                }
            })
        }
    })
    

}


const deleteUser = async (req, res)=> {
    let userId = req.params.id;
    console.log('delll', userId);
   await UserModel.deleteOne({_id: userId});
   res.status(200).send({msg:' user has beeen deleted!'});
  

}

const getAllUsers = (req, res)=> {
    UserModel.find({}).then((users)=> {
        res.status(200).send(users)
    })
   
}

const getUser = async (req, res)=> {
    console.log('prams', req.params.id)
    const userId = req.params.id;
    // const userId ="5edf4fac2fd97713e4139175";
  await  UserModel.findOne({_id:userId}).then((user)=> {
        if(user){
            res.status(200).send(user)
        }else{
            res.status(404).send({msg: 'user not found!'});
        }
    }).catch((err) => {
         res.status(412).send({msg:err})
         console.log(err);
        })

}


module.exports = {getAllUsers, getUser, deleteUser, updateUser, createUser}