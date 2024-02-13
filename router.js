import { Router } from "express";
import arbol from './arbol.js'

const router = Router();
const arbolOriginal = arbol;
var preguntaActual = arbolOriginal;

router.get('/', (req, res) => res.render('index', { pregunta: preguntaActual.pregunta}) );

router.post('/respuesta', (req, res) => {
    const respuesta = req.body.respuesta;
    preguntaActual = preguntaActual[respuesta];
    if (typeof preguntaActual === 'string') {
        res.render('respuesta', { respuesta: preguntaActual });
        preguntaActual = arbolOriginal;
    } else {
        res.redirect('/');
    }
});

export default router