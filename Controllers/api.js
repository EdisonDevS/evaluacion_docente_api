let multichain = require("multichain-node")({
    port: 7360,
    host: '127.0.0.1',
    user: "multichainrpc",
    pass: "5d4cyV9usTy9otj6Du9AEqAYPqRaS3SvZKmrpmjqcvZN"
});

class Api {
    registrar_asistencia(req, res){
        let params = req.body

        multichain.publishFrom({
            from: params.address, 
            stream:'Asistencia', 
            key: [
                params.materia,
                params.codigo_estudiante,
                params.fecha
            ], 
            data: {
                json: {
                    nombre: params.nombre_estudiante
                    }
                }
            }, 
            (err, guardado)=>{
                if(err)
                {
                    return res.status(500).send({resultado: err})
                }

                return res.status(200).send({resultado: guardado})
            }
        )
    }


    registrar_evaluacion(req, res){
        let params = req.body

        multichain.publishFrom({
            from: '1PQRizt9WhP51YBuFGTnmwxtc3WEGuUPgQtSk4',//root address 
            stream:'Evaluacion', 
            key: [
                params.materia,
                params.codigo_profesor,
                params.fecha
            ], 
            data: {
                json: {
                    nombre_profesor: params.nombre_profesor,
                    preguntas: params.preguntas
                    }
                }
            }, 
            (err, guardado)=>{
                if(err)
                {
                    return res.status(500).send({resultado: err})
                }

                return res.status(200).send({resultado: guardado})
            }
        )
    }
}

module.exports = new Api()