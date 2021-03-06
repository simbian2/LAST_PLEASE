const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
// npm install body-parser
const app = express()
const db = require('./models')
const {calculator1,calculator2,FAQ,FeedBack} = require('./models')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false,}))
app.use(cors());

db.sequelize.sync({focus:false}) // promise object
.then(()=>{
    console.log('DB 접속 성공');
})
.catch( error=>{
    console.log(`DB 접속 실패 : ${error} `)
})

app.post('/calculator1',async(req,res,next)=>{

    const {income,Resident_period,Resident_Location,Number_Of_Payment,Applying_Location} = req.body

    try{
        const data = await calculator1.create({
            income:income,
            Resident_Period:Resident_period,
            Resident_Location:Resident_Location,
            Number_Of_Payment:Number_Of_Payment,
            Applying_Location:Applying_Location

        })

        res.json(data)
    } catch (error) {
        console.error(error)
        next(error)
    }
})


app.post('/calculator2',async(req,res,next)=>{

    const {Number_Of_Children,Resident_period,Resident_Location,Number_Of_Payment,Applying_Location,Period_Of_HomeLessness} = req.body

    try{
        const data = await calculator2.create({
            Number_Of_Children:Number_Of_Children,
            Resident_Period:Resident_period,
            Resident_Location:Resident_Location,
            Number_Of_Payment:Number_Of_Payment,
            Applying_Location:Applying_Location,
            Period_Of_HomeLessness:Period_Of_HomeLessness,

        })

        res.json(data)
    } catch (error) {
        console.error(error)
        next(error)
    }
})

app.get('/getFAQIncome',async(req,res,next)=>{

        const data = await FAQ.findAll({
            where:{Category:'소득'}
        })

        console.log(data)

        // res.json({question:data.Question, answer:data.Answer,})
        res.json(
            {...data}
        )
        

})

app.get('/',(req,res)=>{
    res.send('sadgsdg')
})
app.get('/lolo',(req,res)=>{
    res.send('lolo')
})
app.get('/ff',(req,res)=>{
    res.send('asdf')
})



app.listen(4000,()=>{
    console.log('start server port 4000')    
})

