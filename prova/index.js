const express = require('express')

const {opere} = require('./opere')
const app = express()
const opereRouter = require('./routes/opere')
const adminRouter = require('./routes/admin')
const executeQuery = require('./modules/sqlScript')

app.use(express.json())
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
})
app.use('/api/opere', opereRouter)
app.use('/api/admin', adminRouter)


app.get('/api/search', (req, res) =>{
    let {query, limit, filt} = req.query
    executeQuery('select * from opera where ' + filt + ' like \'' + query + '%\'', (error, results)=>{
        if(error) throw error
        console.log(results.length)
        if(!query){
           return res.json({messaggio: "Inserire un valore di ricerca"})
        }
        if(filt == 'none'){
           return res.json({messaggio: "Inserire un valore un filtro"})
        }
        if(results == ''){
           return res.json({messaggio: "Risultato non trovato"})
        }

        for(let i = 0; i < results.length; i++){
            results[i].img = results[i].img.toString('base64')
        }
        
        return res.json(results)
    })
    
    // if(filt){ 
        

    //     if(query){
    //         if(filt== "nome"){
    //             operaFiltrate = operaFiltrate.filter((opera) =>{
    //                 return opera.nome.startsWith(query)
    //             })
    //         }
    //         if(filt== "tecnica"){
    //             operaFiltrate = operaFiltrate.filter((opera) =>{
    //                 return opera.tecnica.startsWith(query)
    //             })
    //         }
    //         if(filt== "dimensioni"){
    //             operaFiltrate = operaFiltrate.filter((opera) =>{
    //                 return opera.dimensioni.startsWith(query)
    //             })
    //         }
    //         if(filt== "descrizione"){
    //             operaFiltrate = operaFiltrate.filter((opera) =>{
    //                 return opera.descrizione.startsWith(query)
    //             })
    //         }
    //         if(filt== "anno"){
    //             operaFiltrate = operaFiltrate.filter((opera) =>{
    //                 return opera.anno.startsWith(query)
    //             })
    //         }
    //         if(filt== "categoria"){
    //             operaFiltrate = operaFiltrate.filter((opera) =>{
    //                 return opera.categoria.startsWith(query)
    //             })
    //         }
    //     }else{
    //         res.json({messaggio:"Valore non valido"})
    //     }
        
    // }

    // if(limit){
    //     operaFiltrate = operaFiltrate.slice(0, Number(limit))
    // }

    

    // if(operaFiltrate.length < 1){
    //     res.json({code: "200", data: []})
    // }

    
})
  
app.listen(3002)