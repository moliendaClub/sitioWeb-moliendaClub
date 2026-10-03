const PRODUCTOS = [
  
  {
    id: 1,
    nombre: "Yerba Mate Verdecita 500gr",
    marca: "Verdecita",
    precioOriginal: 3800/0.90,
    descuentoPorcentaje: 10,
    descripcion: "Yerba tradicional con palo, de sabor intenso y molienda pareja. La elegida por los materos de fierro que toman varios mates seguidos sin que se lave.",
    fotoEmpaque: "assets/verdecita500.PNG",
    fotoMolienda: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhp6g6wZNmcwhm0HWr57GXvGVeLw3EhtlqSYUpyQl1JZnj2uLYwtw7p2pn&s=10",
    categoria: "yerbas"
  },
  {
    id: 2,
    nombre: "Yerba Mate Baldo 500gr",
    marca: "Baldo",
    precioOriginal: 7000,
    descuentoPorcentaje: 0,
    descripcion: "Yerba de estilo uruguayo, de molienda fina y perfil marcado. Una alternativa ideal para quienes ya disfrutan este tipo de molienda y quieren probar otro clasico del mate uruguayo.",
    fotoEmpaque: "assets/baldo500.jpg",
    /*fotoMolienda: "https://picsum.photos/seed/lamerced-mol/600/450", */
    categoria: "yerbas"
  },
  
  {
    id: 3,
    nombre: "Yerba Mate Canaria 500gr",
    marca: "Canaria",
    precioOriginal: 6300/0.90,
    descuentoPorcentaje: 10,
    descripcion: "Un clásico del padrón uruguayo. Molienda fina, con muy poco palo y un perfil intenso y característico. Ideal para quienes disfrutan mates con personalidad y buena presencia durante la cebada.",
    fotoEmpaque: "assets/canaria500.jfif",
    /*fotoMolienda: "https://picsum.photos/seed/lamerced-mol/600/450",*/
    categoria: "yerbas"
  },
  {
    id: 4,
    nombre: "Alma Guarani 500gr",
    marca: "Alma Guarani",
    precioOriginal: 3800,
    descuentoPorcentaje: 0,
    descripcion: "Yerba mate de origen misionero, elaborada con hoja madura y estacionamiento natural de 18 a 36 meses. De molienda media a fina y perfil equilibrado, de intermedio a suave. Cultivada y elaborada en un entorno agroecológico, respetando los tiempos naturales de la yerba mate.",
    fotoEmpaque: "assets/almagua.jfif",
    /*fotoMolienda: "https://picsum.photos/seed/lamerced-mol/600/450",*/
    categoria: "yerbas"
  },
  {
    id: 10,
    nombre: "Rei Verde Premium 1kg",
    marca: "Rei Verde",
    precioOriginal: 12500,
    descuentoPorcentaje: 0,
    descripcion: "Perfil intenso, profundo y con notas ahumadas. Con 24 meses de estacionamiento, es una opcion ideal para quienes ya disfrutan yerbas con caracter y buscan algo mas especial.",
    fotoEmpaque: "assets/reiverdenegra.jfif",
    fotoMolienda: "assets/moliendapremium.jpg",
    categoria: "yerbas"
  },
  {
    id: 6,
    nombre: "Rei Verde Tradicional 500gr",
    marca: "Rei Verde",
    precioOriginal: 5500,
    descuentoPorcentaje: 0,
    descripcion: "Para los que buscan un mate con mas caracter. Perfil intenso y 18 meses de estacionamiento, con ese estilo bien marcado que caracteriza a Rei Verde. Una de nuestras recomendadas para meterse de lleno en el padron uruguayo.",
    fotoEmpaque: "assets/reiverdeamarilla.PNG",
    fotoMolienda: "assets/2dareiverdeamarilla.PNG",
    categoria: "yerbas"
  },
  {
    id: 7,
    nombre: "Rei Verde Padron Argentino (con palo) 500g",
    marca: "Rei Verde",
    precioOriginal: 4700,
    descuentoPorcentaje: 0,
    descripcion: "Intensa, pero con palo. De amargor medio y con excelente proporcion de hojas, polvo y palo. El agregado de palo no quita su excelente duracion del sabor amargo y parejo a lo largo de la cebadas. Tiene 24 meses de estacionamiento y combina el caracter de Rei Verde con una composicion diferente a sus versiones de molienda mas fina. Para quienes quieren explorar otro lado de la marca.",
    fotoEmpaque: "assets/reiverderoja.PNG",
    /*fotoMolienda: "https://picsum.photos/seed/amanda-mol/600/450", */
    categoria: "yerbas"
  },
  {
    id: 8,
    nombre: "Rei Verde Compuesta 500gr",
    marca: "Rei Verde",
    precioOriginal: 5700,
    descuentoPorcentaje: 0,
    descripcion: "Una opcion diferente dentro de la linea. Perfil herbal (cedron, anis, manzanilla, hinojo y carqueja) con 24 meses de estacionamiento, pensada para quienes disfrutan salir del sabor tradicional y buscar algo con otra personalidad.",
    fotoEmpaque: "assets/reiverdeverde.PNG",
    fotoMolienda: "https://picsum.photos/seed/lamerced-mol/600/450",
    categoria: "yerbas", destacado:true
  },
  {
    id: 9,
    nombre: "Rei Verde Organica 500gr",
    marca: "Rei Verde",
    precioOriginal: 7200,
    descuentoPorcentaje: 0,
    descripcion: "Perfil medio, buena duracion y 24 meses de estacionamiento. Una alternativa equilibrada dentro del estilo Rei Verde para quienes buscan una yerba organica sin resignar caracter.",
    fotoEmpaque: "assets/reiverdemarron.PNG",
    /*fotoMolienda: "assets/organica2.PNG", */
    categoria: "yerbas"
    
  },
  {
    id: 5,
    nombre: "Rei Verde Classica 500gr",
    marca: "Rei Verde",
    precioOriginal: 4800,
    descuentoPorcentaje: 0,
    descripcion: "La puerta de entrada ideal al estilo uruguayo. De perfil mas suave y equilibrado, con 12 meses de estacionamiento. Una buena eleccion si queres probar una molienda distinta sin arrancar por la mas intensa.",
    fotoEmpaque: "assets/reiverdeblanca.PNG",
    /*fotoMolienda: "https://picsum.photos/seed/cruzdemalta-mol/600/450",*/
    categoria: "yerbas"
  },
  {
    id: 11,
    nombre: "Yerba Mate Baldo 1kg",
    marca: "Baldo",
    precioOriginal: 12500,
    descuentoPorcentaje: 0,
    descripcion: "Yerba de estilo uruguayo, de molienda fina y perfil marcado. Una alternativa ideal para quienes ya disfrutan este tipo de molienda y quieren probar otro clasico del mate uruguayo.",
    fotoEmpaque: "assets/baldo1kg.jfif",
    /*fotoMolienda: "https://picsum.photos/seed/cruzdemalta-mol/600/450",*/
    categoria: "yerbas"
  },
  {
    id: 12,
    nombre: "Yerba Mate Verdecita 1kg",
    marca: "Verdecita",
    precioOriginal: 8500,
    descuentoPorcentaje: 10,
    descripcion: "Molienda fina, perfil intenso y bien rioplatense. Una yerba con personalidad para quienes disfrutan mates más marcados y quieren salir de las opciones de siempre.",
    fotoEmpaque: "assets/verdecita1kg.jpg",
    /*fotoMolienda: "https://picsum.photos/seed/lamerced-mol/600/450",*/
    categoria: "yerbas"
  },
  {
    id: 13,
    nombre: "Yerba Mate Canaria 1kg",
    marca: "Canaria",
    precioOriginal: 11900/0.85,
    descuentoPorcentaje: 15,
    descripcion: "Un clásico del padrón uruguayo. Molienda fina, con muy poco palo y un perfil intenso y característico. Ideal para quienes disfrutan mates con personalidad y buena presencia durante la cebada.",
    fotoEmpaque: "assets/can1kg.jfif",
    /*fotoMolienda: "https://picsum.photos/seed/lamerced-mol/600/450",*/
    categoria: "yerbas"
  },
  /*{
    id: 14,
    nombre: "Mate Camionero de algarrobo",
    marca: "Molienda Club",
    precioOriginal: 13000,
    descuentoPorcentaje: 0,
    descripcion: "Mate de calabaza curado y acabado natural, pensado para un uso diario y para quienes disfrutan la ritualidad del mate en cada cebada.",
    fotoEmpaque: "assets/camionero.jpeg",
    fotoMolienda: "assets/camionerobombilla.jpeg",
    categoria: "mates"
  }
  ,
  {
    id: 15,
    nombre: "Mate Imperial (negro)",
    marca: "Molienda Club",
    precioOriginal: 25000,
    descuentoPorcentaje: 0,
    descripcion: "Mate de calabaza curado y acabado natural, pensado para un uso diario y para quienes disfrutan la ritualidad del mate en cada cebada.",
    fotoEmpaque: "assets/imperialnegro1.jpeg",
    fotoMolienda: "assets/imperialnegro2.jpeg",
    categoria: "mates"
  },
  ,
  {
    id: 16,
    nombre: "Mate Imperial (marron)",
    marca: "Molienda Club",
    precioOriginal: 25000,
    descuentoPorcentaje: 0,
    descripcion: "Mate de calabaza curado y acabado natural, pensado para un uso diario y para quienes disfrutan la ritualidad del mate en cada cebada.",
    fotoEmpaque: "assets/imperialmarro1.jpeg",
    fotoMolienda: "assets/imperialmarro2.jpeg",
    categoria: "mates"
  },*/
  /*{
    id: 17,
    nombre: "Bombilla de acero inoxidable",
    marca: "Molienda Club",
    precioOriginal: 2400,
    descuentoPorcentaje: 0,
    descripcion: "Bombilla resistente, de filtro fino y terminación lisa para un paso de mate cómodo y duradero.",
    fotoEmpaque: "https://picsum.photos/seed/bombilla/600/450",
    fotoMolienda: "https://picsum.photos/seed/bombilla-mol/600/450",
    categoria: "bombillas"
  },*/
  /*{
    id: 18,
    nombre: "Bombilla de acero Dorada",
    marca: "Molienda Club",
    precioOriginal: 2400,
    descuentoPorcentaje: 0,
    descripcion: "Bombilla resistente, de filtro fino y terminación lisa para un paso de mate cómodo y duradero.",
    fotoEmpaque: "https://picsum.photos/seed/bombilla/600/450",
    fotoMolienda: "https://picsum.photos/seed/bombilla-mol/600/450",
    categoria: "bombillas"
  },*/
  
  {
    id: 19,
    nombre: "Mate Imperial + Bombilla",
    marca: "Molienda Club",
    precioOriginal: 30000,
    descuentoPorcentaje: 0,
    descripcion: "Mate hecho con calabazas seleccionadas, forrado en cuero. Cuenta con una virola reforzada de alpaca, y costura reforzada, ademas de tener una base firme. -La calabza propociona un sabor mas intenso y tradicional",
    fotoEmpaque: "assets/imperialnegro1.jpeg",
    fotoMolienda: "assets/imperialnegro2.jpeg",
    categoria: "mates"
  },
  ,
  {
    id: 20,
    nombre: "Mate Camionero + Bombilla",
    marca: "Molienda Club",
    precioOriginal: 18000/0.90,
    descuentoPorcentaje: 10,
    descripcion: "Mate hecho con Madera de Algarrobo y virola de acero inoxidable, tallado a  mano y perfecto para queines prefieren comodidad a un bajo precio. -Una de las caracteristicas a destacar es que la madera atenua el sabor de la yerba.",
    fotoEmpaque: "assets/camionero.jpeg",
    fotoMolienda: "assets/camionero2.jpeg",
    categoria: "mates"
  }
  ,
  {
    id: 21,
    nombre: "Mate Imperial + Bombilla + Canarias 500g",
    marca: "Molienda Club",
    precioOriginal: 35000,
    descuentoPorcentaje: 0,
    descripcion: "Mate imperial + bombilla pico de loro + Canarias de 500g.",
    fotoEmpaque: "assets/combobaldo.jpeg",
    /*fotoMolienda: "https://picsum.photos/seed/combo-mate-mol/600/450",*/
    categoria: "combos"
  },
  {
    id: 22,
    nombre: "Mate Imperial + Bombilla +  500g",
    marca: "Molienda Club",
    precioOriginal: 36000,
    descuentoPorcentaje: 0,
    descripcion: "Mate imperial + bombilla pico de loro + Baldo de 500g.",
    fotoEmpaque: "assets/combobaldo.jpeg",
    categoria: "combos"
  }
  ,
  {
    id: 23,
    nombre: "Mate Imperial + Bombilla + Rei Verde Padrón Argentino 500g",
    marca: "Molienda Club",
    precioOriginal: 35000,
    descuentoPorcentaje: 0,
    descripcion: "Mate imperial + bombilla pico de loro + Yerba Rei Verde Padron Argentino 500g.",
    fotoEmpaque: "assets/combopadronr.jpeg",
    categoria: "combos"
  },{
    id: 24,
    nombre: "Mate Camionero + Bombilla + Alma Guaraní 500g",
    marca: "Molienda Club",
    precioOriginal: 20000,
    descuentoPorcentaje: 0,
    descripcion: "Mate camionero + bombilla pico de loro + Yerba Alma Guaraní 500g.",
    fotoEmpaque: "assets/camionalma.jpeg",
    categoria: "combos"
  },{
    id: 26,
    nombre: "Mate Imperial + Bombilla + Alma Guaraní 500g",
    marca: "Molienda Club",
    precioOriginal: 35000,
    descuentoPorcentaje: 0,
    descripcion: "Mate imperial + bombilla pico de loro + Yerba Alma Guaraní  500g.",
    fotoEmpaque: "assets/ipalma.jpeg",
    /*fotoMolienda: "https://picsum.photos/seed/combo-mate-mol/600/450"*/
    categoria: "combos"
  }
/*
  {
    id: 14,
    nombre: "Yerba Mate Barbacua",
    marca: "La Merced",
    precioOriginal: 5600,
    descuentoPorcentaje: 10,
    descripcion: "Secada al estilo tradicional guarani, con un aroma ahumado bien marcado. Una experiencia distinta para paladares curiosos.",
    fotoEmpaque: "https://picsum.photos/seed/lamerced-paq/600/450",
    fotoMolienda: "https://picsum.photos/seed/lamerced-mol/600/450"
  },
  {
    id: 15,
    nombre: "Mate Imperial de Calabaza",
    marca: "Molienda Club Accesorios",
    precioOriginal: 9500,
    descuentoPorcentaje: 20,
    descripcion: "Mate de calabaza curado a mano, con virola de alpaca. Incluye bombilla de acero inoxidable a rosca para limpieza facil.",
    fotoEmpaque: "https://picsum.photos/seed/mateimperial-paq/600/450",
    fotoMolienda: "https://picsum.photos/seed/mateimperial-mol/600/450"
  } */
];
