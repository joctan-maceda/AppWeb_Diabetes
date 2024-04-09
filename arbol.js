
// PREGUNTAS
const Gender = "¿Es mujer?";
const Polyuria = "¿Tienes emisión de volumen excesivo de orina?";
const Polydipsia  = "¿Tienes aumento anormal de sed?";
const SuddenWeigth = "¿Has tenido pérdida repentina de peso?";
const Weakness = "¿Has sentido debilidad?";
const Poliphagia = "¿Tienes aumento anormal en la necesidad de comer?";
const GenitalThrush = "¿Tienes Flujo, ardor, picazón, irritación genital?";
const VisualBlurring = "¿Tienes visión borrosa?";
const Itching = "¿Tienes picazón en la piel, que hace que quieras rascarte?";
const Irritability = "¿Sufres de Irritabilidad?";
const DelayerHealing = "¿Tienes cicatrización retardada?";
const PartialParesia = "¿Tienes disminución de la fuerza, debilidad muscular.?";
const MusclessStiffness = "¿Tienes dolor en las articulaciones?";
const Alopecia = "¿Tienes pérdida anormal del cabello?";
const Obesity = "¿Tienes sobrepeso?";
const Age = "¿Tienes mas de 50 años?";


// RESPUESTAS
const si = 'Positivo en el test';
const no = 'No positivo en el test';

const arbolBinario = {
    pregunta: Polydipsia,
    si: {
        pregunta: Polyuria,
        si: {
            pregunta: Gender,
            si: si,
            no: si
        },
        no: {
            pregunta: Irritability,
            si: {
                pregunta: Gender,
                si: si,
                no: no
            },
            no: {
                pregunta: MusclessStiffness,
                si: {
                    pregunta: VisualBlurring,
                    si: si,
                    no: no
                },
                no: {
                    pregunta: Itching,
                    si: {
                        pregunta: SuddenWeigth,
                        si: si,
                        no: no
                    },
                    no: {
                        pregunta: Gender,
                        si: si,
                        no: no
                    }
                }
            }
        }
    },
    no: {
        pregunta: Polyuria,
        si: {
            pregunta: Itching,
            si: {
                pregunta: GenitalThrush,
                si: {
                    pregunta: Obesity,
                    si: {
                        pregunta: MusclessStiffness,
                        si: si,
                        no: no
                    },
                    no: {
                        pregunta: Gender,
                        si: si,
                        no: no
                    }
                },
                no: {
                    pregunta: VisualBlurring,
                    si: si,
                    no: no
                }
            },
            no: {
                pregunta: Gender,
                si: si,
                no: no
            }
        },
        no: {
            pregunta: Gender,
            si: {
                pregunta: DelayerHealing,
                si: {
                    pregunta: SuddenWeigth,
                    si: si,
                    no: no
                },
                no: {
                    pregunta: VisualBlurring,
                    si: {
                        pregunta: SuddenWeigth,
                        si: si,
                        no: no
                    },
                    no: {
                        pregunta: MusclessStiffness,
                        si: {
                            pregunta: SuddenWeigth,
                            si: si,
                            no: no
                        },
                        no: {
                            pregunta: Obesity,
                            si: {
                                pregunta: SuddenWeigth,
                                si: si,
                                no: no
                            },
                            no: {
                                pregunta: SuddenWeigth,
                                si: {
                                    pregunta: Weakness,
                                    si: si,
                                    no: no
                                },
                                no: {
                                    pregunta: Weakness,
                                    si: {
                                        pregunta: Poliphagia,
                                        si: si,
                                        no: no
                                    },
                                    no: {
                                        pregunta: Poliphagia,
                                        si: {
                                            pregunta: GenitalThrush,
                                            si: si,
                                            no: no
                                        },
                                        no: {
                                            pregunta: GenitalThrush,
                                            si: si,
                                            no: no
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            no: {
                pregunta: Irritability,
                si: {
                    pregunta: GenitalThrush,
                    si: {
                        pregunta: SuddenWeigth,
                        si: si,
                        no: no
                    },
                    no: {
                        pregunta: Poliphagia,
                        si: {
                            pregunta: VisualBlurring,
                            si: si,
                            no: no
                        },
                        no: {
                            pregunta: SuddenWeigth,
                            si: si,
                            no: no
                        }
                    }
                },
                no: {
                    pregunta: Weakness,
                    si: {
                        pregunta: MusclessStiffness,
                        si: {
                            pregunta: SuddenWeigth,
                            si: si,
                            no: no
                        },
                        no: {
                            pregunta: PartialParesia,
                            si: {
                                pregunta: SuddenWeigth,
                                si: si,
                                no: no
                            },
                            no: {
                                pregunta: DelayerHealing,
                                si: {
                                    pregunta: Alopecia,
                                    si: {
                                        pregunta: Itching,
                                        si: {
                                            pregunta: SuddenWeigth,
                                            si: si,
                                            no: no
                                        },
                                        no: {
                                            pregunta: SuddenWeigth,
                                            si: si,
                                            no: no
                                        }
                                    },
                                    no: {
                                        pregunta: SuddenWeigth,
                                        si: si,
                                        no: no
                                    }
                                },
                                no: {
                                    pregunta: SuddenWeigth,
                                    si: si,
                                    no: no
                                }
                            }
                        }
                    },
                    no: {
                        pregunta: PartialParesia,
                        si: si,
                        no: no
                    }
                }
            }
        }
    }
}
/*
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
*/
export default arbolBinario;