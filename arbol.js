const C = "¿Es hombre-no o mujer-si?";
const D = "¿Orina demasiado?";
const E = "¿Siente la necesidad de tomar mucha agua constantemente?";
const F = "En un tiempo cercano, ¿ha experimento una perdida repentina de peso?";
const G = "¿Se siente débil?";
const H = "¿Siente la necesidad de comer constantemente?";
const I = "En su zona intima, ¿Reconoce un líquido blanco espeso y abundante?";
const J = "¿Tiene vista borrosa?";
const K = "¿Siente picazón en su piel?";
const L = "¿Se irrita fácilmente?";
const M = "¿Cuánto tiempo tarda en cicatrizarle una herida pequeña? (mayor a 7 dias es “si” y menor a 7 es “no”";
const N = "¿Siente una disminución en su fuerza?";
const O = "¿Siente sus músculos tensos?";
const P = "¿Padece de alopecia?";
const Q = "Ingrese su estatura y peso (Calcular imc para ver si tiene sobrepeso)";
const si = 'Tienes diabetes';
const no = 'no tienes diabetes';



const arbolBinario = {
    pregunta: E,
    si: {
        pregunta: D,
        si: {
            pregunta: C,
            si: si,
            no: si
        },
        no: {
            pregunta: L,
            si: {
                pregunta: C,
                si: si,
                no: si
            },
            no: {
                pregunta: F,
                si: si,
                no: si
            }
        }
    },
    no: {
        pregunta: D,
        si: {
            pregunta: J,
            si: {
                pregunta: I,
                si: {
                    pregunta: C,
                    si: si,
                    no: si
                },
                no: {
                    pregunta: K,
                    si: si,
                    no: si
                }
            },
            no: {
                pregunta: C,
                si: si,
                no: si
            } 
        },
        no: {
            pregunta: M,
            si: {
                pregunta: P,
                si: {
                    pregunta: K,
                    si: {
                        pregunta: C,
                        si: si,
                        no: si
                    },
                    no: {
                        pregunta: F,
                        si: si,
                        no: si
                    }
                },
                no: {
                    pregunta: C,
                    si: si,
                    no: si
                }
            },
            no: {
                pregunta: C,
                si: {
                    pregunta: F,
                    si: si,
                    no: si
                },
                no: {
                    pregunta: P,
                    si: si,
                    no: si
                }
            }
        }
    }
};

export default arbolBinario;