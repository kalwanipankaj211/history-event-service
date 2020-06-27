const mongoose = require('mongoose');
const Event = require('../models/eventModel');

function postEvent(req, res){
    return new Promise(function(resolve, reject){
                const event = new Event({
                    _id: new mongoose.Types.ObjectId(),
                    email: req.body.email,
                    environment: req.body.environment,
                    component: req.body.component,
                    message: req.body.message,
                    data: req.body.data
                })
                event.save()
                .then(result=>{
                    console.log("Post Event",result);
                    const message = {
                        status: 200,
                        message: 'Event Posted Successfully',
                        post: {
                            _id: result._id,
                            email: result.email,
                            environment: result.environment,
                            component: result.component,
                            message: result.message,
                            data: result.data,
                            
                        }
                    }
                    resolve(message);
                })
                .catch(err=>{
                    // console.log(err);
                    const error = {
                        status: 500,
                        message: 'Could not save Event',
                        err: err
                    }
                    reject(error)
                })
    })
}
function getEventByEmail(email){
    return new Promise(function(resolve, reject){
        Event.find({email:email})
                .exec().then(result=>{
                    console.log("result",result);
                    const message = {
                        status: 200,
                        message: 'Got Event',
                        event: result
                    }
                    if(result.length >0)
                    {
                        resolve(message);
                    }
                    else{
                        const error = {
                            status: 500,
                            message: 'Could not get Event',
                        }
                        reject(error)  
                    }
                })
                .catch(err=>{
                    console.log(err);
                    const error = {
                        status: 500,
                        message: 'Could not get Event',
                        err: err
                    }
                    reject(error)
                })
    })
}
function getEventByEnvironment(env){
    return new Promise(function(resolve, reject){
        Event.find({environment:env})
                .exec().then(result=>{
                    console.log("result",result);
                    const message = {
                        status: 200,
                        message: 'Got Event',
                        event: result
                    }
                    if(result.length >0)
                    {
                        resolve(message);
                    }
                    else{
                        const error = {
                            status: 500,
                            message: 'Could not get Event',
                        }
                        reject(error)  
                    }
                })
                .catch(err=>{
                    console.log(err);
                    const error = {
                        status: 500,
                        message: 'Could not get Event',
                        err: err
                    }
                    reject(error)
                })
    })
}
function getEventByComponent(cmp){
    return new Promise(function(resolve, reject){
        Event.find({component:cmp})
                .exec().then(result=>{
                    console.log("result",result);
                    const message = {
                        status: 200,
                        message: 'Got Event',
                        event: result
                    }
                    if(result.length >0)
                    {
                        resolve(message);
                    }
                    else{
                        const error = {
                            status: 500,
                            message: 'Could not get Event',
                        }
                        reject(error)  
                    }
                })
                .catch(err=>{
                    console.log(err);
                    const error = {
                        status: 500,
                        message: 'Could not get Event',
                        err: err
                    }
                    reject(error)
                })
    })
}

function getEventByMsg(msg){
    return new Promise(function(resolve, reject){
        const regex = new RegExp(escapeRegex(msg), 'gi');
        Event.find({ message : regex })
                .exec().then(result=>{
                    console.log("result",result);
                    const message = {
                        status: 200,
                        message: 'Got Event',
                        event: result
                    }
                    if(result.length >0)
                    {
                        resolve(message);
                    }
                    else{
                        const error = {
                            status: 500,
                            message: 'Could not get Event',
                        }
                        reject(error); 
                    }
                })
                .catch(err=>{
                    console.log(err);
                    const error = {
                        status: 500,
                        message: 'Could not get Event',
                        err: err
                    }
                    reject(error)
                })
    })
}

function getSpecificEvent(req,res)
{
    const reqEmail = req.body.email;
    const env = req.body.environment;
    const cmp = req.body.component;
    let msg = req.body.msg;
    msg = new RegExp(escapeRegex(msg), 'gi');
    return new Promise(function(resolve,reject)
    {
       var query = {email:reqEmail , environment : env  , component:cmp , message: msg };
       Event.find(query)
       .exec().then(result=>{
           console.log("result",result);
           const message = {
               status: 200,
               message: 'Got Event',
               event: result
           }
           if(result.length >0)
           {
               resolve(message);
           }
           else{
               const error = {
                   status: 500,
                   message: 'Could not get Event',
               }
               reject(error); 
           }
       })
       .catch(err=>{
           console.log(err);
           const error = {
               status: 500,
               message: 'Could not get Event',
               err: err
           }
           reject(error)
       })
    })
   
}   

function getAllEvents()
{
    return new Promise(function(resolve, reject){
        Event.find()
                .exec().then(result=>{
                    console.log("result",result);
                    const message = {
                        status: 200,
                        message: 'Got Event',
                        event: result
                    }
                    if(result.length >0)
                    {
                        resolve(message);
                    }
                    else{
                        const error = {
                            status: 500,
                            message: 'Could not get Event',
                        }
                        reject(error)  
                    }
                })
                .catch(err=>{
                    console.log(err);
                    const error = {
                        status: 500,
                        message: 'Could not get Event',
                        err: err
                    }
                    reject(error)
                })
    })
}
function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};
module.exports ={
    postEvent : postEvent,
    getEventByEmail: getEventByEmail,
    getEventByEnvironment: getEventByEnvironment,
    getEventByComponent: getEventByComponent,
    getEventByMsg: getEventByMsg,
    getSpecificEvent : getSpecificEvent,
    getAllEvents: getAllEvents
}