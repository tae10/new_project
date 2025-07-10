const express = require('express')
const app = express()
const port = 3000

const users=[]

app.use(express.json())

app.use(express.urlencoded({extended:true}))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/createUser',(req,res)=>{
    users.push(req.body);
    console.log("회원 데이터",users)
    res.status(200).json({
        seccess:true,
        message:"회원등록 성공"
    })
})


//app.delete()

//app.put()



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
