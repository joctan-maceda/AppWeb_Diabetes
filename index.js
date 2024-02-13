import { fileURLToPath } from 'url';
import express from 'express';
import {dirname, join} from 'path';
import bodyParser from 'body-parser';

import router from './router.js'

const app = express();
const port = process.env.PORT || 3525;
const __dirname = dirname(fileURLToPath(import.meta.url))
console.log(__dirname);
// Convierte una petición recibida (POST-GET...) a objeto JSON

app.set("views", join(__dirname, 'views'));
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.use(router);
app.use(express.static(join(__dirname, "public")));
app.listen(port, function(){
});




