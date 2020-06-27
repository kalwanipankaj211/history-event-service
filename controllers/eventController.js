const express = require('express');
const router = express.Router();
const events = require('../models/eventModel');
var eventService = require('../services/eventService.js');
var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
router.post('/saveEvent',(req, res)=>{
    var result = eventService.postEvent(req, res);
    result
    .then(event=>{
        res.send(event)
    })
    .catch(err=>{
        res.send(err)
    })
})

router.get('/getEventByEmail/:email',(req,res)=>{
    const email = req.params.email;
    var result = eventService.getEventByEmail(email);
    result
    .then(event=>{
        res.send(event)
    })
    .catch(err=>{
        res.send(err)
    })
})

router.get('/getEventByEnvironment/:env',(req,res)=>{
    const env = req.params.env;
    var result = eventService.getEventByEnvironment(env);
    result
    .then(event=>{
        res.send(event)
    })
    .catch(err=>{
        res.send(err)
    })
})
router.get('/getEventByCmp/:cmp',(req,res)=>{
    const cmp = req.params.cmp;
    var result = eventService.getEventByComponent(cmp);
    result
    .then(event=>{
        res.send(event)
    })
    .catch(err=>{
        res.send(err)
    })
})

router.get('/getEventByMsg/:msg',(req,res)=>{
    const msg = req.params.msg;
    var result = eventService.getEventByMsg(msg);
    result
    .then(event=>{
        res.send(event)
    })
    .catch(err=>{
        res.send(err)
    })
})
router.post('/getSpecificEvent',(req,res)=>{
    var result = eventService.getSpecificEvent(req, res);
    result
    .then(event=>{
        res.send(event)
    })
    .catch(err=>{
        res.send(err)
    })
})
router.get('/getAllEvents',(req,res) =>
{
    var result = eventService.getAllEvents();
    result
    .then(event=>{
        res.send(event)
    })
    .catch(err=>{
        res.send(err)
    })
})



module.exports = router;