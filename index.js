const configExpress = require('./config/configExpress')
const conexao = require('./infra/conexao')
const tabelas = require('./infra/tabelas')


const app  =configExpress()


conexao.connect(error=>{
    if(error){
        throw error
    }

    tabelas.init(conexao)

    app.listen(3000,()=>console.log('server is running! port : 3000'))
})

