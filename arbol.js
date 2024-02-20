const C = "¿Es mujer?";
const D = "¿Tienes emisión de volumen excesivo de orina?";
const E = "¿Tienes aumento anormal de sed?";
const F = "¿Has tenido pérdida repentina de peso?";
const G = "¿Has sentido debilidad?";
const H = "¿Tienes aumento anormal en la necesidad de comer?";
const I = "¿Tienes Flujo, ardor, picazón, irritación genital?";
const J = "¿Tienes visión borrosa?";
const K = "¿Tienes picazón en la piel, que hace que quieras rascarte?";
const L = "¿Sufres de Irritabilidad?";
const M = "¿Tienes cicatrización retardada?";
const N = "¿Tienes disminución de la fuerza, debilidad muscular.?";
const O = "¿Tienes dolor en las articulaciones?";
const P = "¿Tienes pérdida anormal del cabello?";
const Q = "¿Tienes sobrepeso?";
const R = "¿Tienes mas de 50 años?";
const si = 'Positivo en el test';
const no = 'No positivo en el test';


const arbolBinario = {
    pregunta: R,
    si: {
        pregunta: D,
        si: {
            pregunta: Q,
            si: {
                pregunta: E,
                si: {
                    pregunta: C,
                    si: si,
                    no: no
                },
                no: {
                    pregunta: F,
                    si: si,
                    no: no
                }
            },
            no: {
                pregunta: L,
                si: si,
                no: no
            }
        },
        no: {
            pregunta: C,
            si: {
                pregunta: O,
                si: {
                    pregunta: E,
                    si: si,
                    no: no
                },
                no: {
                    pregunta: J,
                    si: {
                        pregunta: E,
                        si: si,
                        no: no
                    },
                    no: {
                        pregunta: Q,
                        si: {
                            pregunta: E,
                            si: si,
                            no: no
                        },
                        no: {
                            pregunta: L,
                            si: {
                                pregunta: E,
                                si: si,
                                no: no
                            },
                            no: {
                                pregunta: G,
                                si: {
                                    pregunta: E,
                                    si: si,
                                    no: no
                                },
                                no: {
                                    pregunta: F,
                                    si: {
                                        pregunta: E,
                                        si: si,
                                        no: no
                                    },
                                    no: {
                                        pregunta: H,
                                        si: {
                                            pregunta: E,
                                            si: si,
                                            no: no
                                        },
                                        no: {
                                            pregunta: E,
                                            si: "NO hay respuesta",
                                            no: "NO hay respuesta"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            no: {
                pregunta: E,
                si: {
                    pregunta: N,
                    si: {
                        pregunta: H,
                        si: si,
                        no: no
                    },
                    no: {
                        pregunta: F,
                        si: si,
                        no: no
                    }
                },
                no: {
                    pregunta: M,
                    si: {
                        pregunta: P,
                        si: {
                            pregunta: K,
                            si: {
                                pregunta: F,
                                si: si,
                                no: no
                            },
                            no: {
                                pregunta: F,
                                si: si,
                                no: no
                            }
                        },
                        no: {
                            pregunta: I,
                            si: si,
                            no: no    
                        }
                    },
                    no: {
                        pregunta: O,
                        si: si,
                        no: no
                    }
                }
            }
        }
    },
    no: {
        pregunta: E,
        si: {
            pregunta: D,
            si: {
                pregunta: C,
                si: si,
                no: no
            },
            no: {
                pregunta: L,
                si: {
                    pregunta: C,
                    si: si,
                    no: no
                },
                no: {
                    pregunta: F,
                    si: si,
                    no: no
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
                        no: no
                    },
                    no: {
                        pregunta: K,
                        si: si,
                        no: no
                    }
                },
                no: {
                    pregunta: C,
                    si: si,
                    no: no
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
                            no: no
                        },
                        no: {
                            pregunta: F,
                            si: si,
                            no: no
                        }
                    },
                    no: {
                        pregunta: C,
                        si: si,
                        no: no
                    }
                },
                no: {
                    pregunta: C,
                    si: {
                        pregunta: F,
                        si: si,
                        no: no
                    },
                    no: {
                        pregunta: P,
                        si: si,
                        no: no
                    }
                }
            }
        }
    }    
};

export default arbolBinario;