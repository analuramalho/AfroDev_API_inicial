module.exports = app =>{
    app.get('/',(req,res)=>{
        res.send('servidor ok')
    })
    app.post('/agendamentos',(req,res)=>{
        res.send('parabens enviou qualquer bosta')
    })
}