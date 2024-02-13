const pregunta_1 = "¿Tu problema es con hardware?";

const arbolBinario = {
    pregunta: pregunta_1,
    si: {
        pregunta: "¿Tu problema es con el disco duro?",
        si: {
            pregunta: "¿Está haciendo ruido el disco duro?",
            si: "Reemplaza el disco duro",
            no: "Contacta a un técnico"
        },
        no: {
            pregunta: "¿Tu problema es con la tarjeta madre?",
            si: "Reemplaza la tarjeta madre",
            no: "Contacta a un técnico"
        }
    },
    no: {
        pregunta: "¿Tu problema es con software?",
        si: {
            pregunta: "¿El software se congela con frecuencia?",
            si: "Reinstala el sistema operativo",
            no: "Actualiza tus controladores de dispositivo"
        },
        no: {
            pregunta: "¿Tu problema es con periféricos?",
            si: "Revisa los cables y conexiones de tus periféricos",
            no: "Contacta a un técnico"
        }
    }
};

export default arbolBinario;