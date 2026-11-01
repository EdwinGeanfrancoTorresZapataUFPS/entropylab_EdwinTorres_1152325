// Vocabulario temático original. Una entrada equivale a una opción de selección.
// Las palabras se mantienen sin tildes, espacios ni puntuación para que todas
// las frases generadas sean compatibles con el analizador ASCII de clase.
export const EXTRA_WORDS = {
  animales: `
    abeja ardilla armadillo asno avestruz ballena bisonte borrego bufalo buho burro
    caballo cabra camaleon camello canario capibara carnero castor cebra cerdo chacal
    chimpance ciervo cisne cocodrilo conejo coyote cuervo delfin dinosaurio elefante
    erizo escarabajo foca gallina gallo gacela gato gaviota gecko gorila grulla
    guepardo hamster hipopotamo hormiga huron iguana jaguar jirafa koala lagarto
    lechuza lemur leon leopardo lince llama lobo loro luciernaga manati mapache
    mariposa marmota medusa mofeta mono mosquito mula murcielago nutria oso oveja panda
    pantera pato pavo pelicano perro pinguino polilla potro pulpo puma rana rata raton
    reno rinoceronte salamandra sapo serpiente suricata tiburon tigre topo tortuga
    tucan vaca venado yegua zorro
  `,
  aves: `
    aguila albatros alondra ave avestruz azulejo becada buho cacatua calandria canario
    cardenal cernicalo ciguena cisne codorniz colibri condor cormoran correcaminos
    cuervo faisan flamenco gallareta gallina gallo ganso garza gaviota golondrina
    gorrion grulla guacamaya halcon ibis jilguero kiwi lechuza loro martin martinete
    mirlo mochuelo oropendola pajaro paloma papagayo pardillo pato pavo pelicano perdiz
    perico petirrojo picaflor pico picogrueso pinzon pinguino pitirre polluelo quetzal
    rapaz ruisenor sisila somormujo tero tordo torcaza tortola tucan vencejo verderon
    zopilote zorzal abejaruco aguilucho arrendajo autillo barnacla bisbita carricero
    casuario charran chorlito chochin correlimos estornino focha fragata grajilla
    guacharaca harpia lavandera milano zarapito
  `,
  marinos: `
    abisal alga almeja ancla anemona arrecife atun ballena banco barracuda batial
    beluga biodiversidad boga boya branquia burbuja caballito calamar camaron canal
    cangrejo caparazon caracola caracol cardumen casco cetaceo concha coral corriente
    crustaceo delfin profundidad deriva duna erizo escama esponja estuario foca fondo
    fosforescencia fragata gambas gaviota golfo isla jurel langosta litoral manta mar
    medusa marea marino molusco morena navegacion nautico neptuno oceano ola orca ostra
    pacifico pez plancton plataforma playa pleamar popa proa pulpo raya remo salinidad
    sardina sargazo sirena submarino surf tiburon timon tortuga tridente triton
    tropical tsunami velero viento yate zooplancton krill pelagico mangle delta bahia
    acuario salitre ensenada espuma
  `,
  insectos: `
    abeja abejorro acaro aguijon alacran alas antena arana avispa babosa bichito
    biologo capullo caracol cigarra ciempies chinche cicada cucaracha escarabajo
    escorpion esmeralda exoesqueleto feromona grillo gusano hormiga insecto larva
    libelula luciernaga mantis mariquita mariposa metamorfosis mosca mosquito polilla
    pulga reina saltamontes termita tijereta zancudo zapatero crisalida colmena
    enjambre miel panal polinizacion polen vuelo nido obrera zangano aguijonazo
    atraccion mandibula abdomen torax caparazon colonia habitat oruga parasito
    camuflaje escama larvario nectar fecundacion entomologia miriapodo coleoptero
    lepidoptero himenoptero diptero ortoptero hemiptero tricoptero hormiguero picadura
    toxina madriguera hojarasca maleza rama tronco humedad rocio telarana hilo seda
    escondite
  `,
  plantas: `
    abedul abeto acacia acebo agave alamo albahaca alerce aloe amapola arbol arbusto
    arce arrayan azalea bambu begonia bonsai cactus caoba cedro ceibo cipres clavel
    cocotero eucalipto helecho hiedra hortensia jazmin laurel lavanda liana lirio
    magnolia malva manzano margarita menta musgo naranjo nogal olivo olmo orquidea
    palmera papiro pasto pino roble romero rosa sauce secuoya tomillo tulipan vid
    violeta yuca zanahoria raiz rama tallo tronco semilla hoja flor fruto espina savia
    corteza brote retono injerto bulbo petalo estambre pistilo polen germen germinacion
    fotosintesis clorofila vivero maceta jardin huerto arboreto selva bosque sabana
    pradera fertilizante compost sustrato riego
  `,
  flores: `
    aciano adelfa alheli amapola amarilis anemona anturio azalea azucena begonia
    buganvilla calandula camelia campanilla capuchina cardo clavel crisantemo dalia
    diente dragon dedalera delphinium enredadera espuela estatice fresia gardenia
    geranio gerbera gladiolo girasol glicinia hibisco hortensia iris jazmin jacinto
    lavanda lila lirio loto magnolia malva margarita mimosa narciso nenufar nomeolvides
    orquidea pensamiento peonia petunia primavera ranunculo rosa salvia siempreviva
    tagete tulipan verbena violeta zinnia bromelia cosmos floripondio helenio jacaranda
    kalanchoe lobelia madreselva muguete nardo pasiflora pentas protea retama rosal
    sedum solidago suculenta tomillo trebol vinca verbasco artemisa belladona centaurea
    flor petalo polen estambre pistilo corola caliz nectar fragancia ramo jardin
    florero maceta
  `,
  frutas: `
    acerola aguacate albaricoque almendra anona arandano avellana banano bergamota
    breva cacao caqui carambola cereza chirimoya ciruela coco copoazu curuba damasco
    datil durazno feijoa fresa frambuesa granada granadilla grosella guanabana guayaba
    higo jabuticaba kiwi lima limon lichi lucuma mandarina mango mangostino manzana
    maracuya melon membrillo mora naranja nashi nectarina nispero nuez papaya parchita
    pasa pera persimon pina pitahaya platano pomelo rambutan sandia tamarindo tangelo
    tomate toronja uchuva uva zapote zarzamora aceituna pistacho maranon mamey jobo
    anacardo guama mamoncillo chontaduro corozo carambolo araza acai cidra guinda
    escaramujo espino espinoalbar lulo mortino borojo ciruelo endrina guayabero kumquat
    membrillera
  `,
  verduras: `
    acelga achicoria ajo alcachofa alfalfa apio arveja batata berenjena berro betabel
    brocoli brote calabacin calabaza camote canonigo cardo cebolla cebollin champinon
    chayote chirivia col coliflor colinabo endibia escarola esparrago espinaca frijol
    garbanzo guisante habichuela haba hinojo hongos jengibre kale lechuga lenteja
    lombarda malanga maiz mandioca nabo nopal ocra olluco papa pepino perejil pimenton
    pimiento puerro rabano remolacha repollo rucula seta soja taro tomate topinambur
    tuberculo verdolaga yuca zanahoria zapallo zucchini albahaca cilantro comino
    oregano romero tomillo cebolleta colrizada legumbre germinado aromatica coles
    calabacita berza brotes hojas vaina vastago
  `,
  postres: `
    alfajor almojabana almibar arequipe arroz azucar baclava barquillo batido bizcocho
    bollo bombon brownie budin bunuelo cacao caramelo cheesecake chocoflan chocolate
    churro compota cono cookie crema crepe croissant cupcake dulce dona empanadilla
    flan fondant fruta galleta ganache gelatina glaseado gofre helado hojaldre jalea
    jengibre leche macaron magdalena malteada mantecada manjar mazapan merengue milhoja
    mousse muffin nata natilla oblea pastel panacota panettone pay pera pie pionono
    ponque postre praline profiterol pudin quesillo relleno rosquilla sorbete souffle
    strudel suspiro tiramisu tarta tartaleta teja trufa vainilla wafle yogur zanahoria
    mazamorra brevas bocadillo cocada arepitas pudinera naranja mora mermelada
    confitura malvavisco marshmallow
  `,
  bebidas: `
    agua aguapanela almendra aromatica avena batido bebida cacao cafe capuchino
    carajillo chocolate cidra coctel cola kombucha limonada malteada mandarina mango
    manzanilla matcha melocoton melon merengada mocaccino naranja nectarina panela
    ponche refresco soda sorbete te tonica vainilla zumo jugo horchata kefir mate
    espresso ristretto americano latte cortado macchiato granizado infusion michelada
    pina batida gaseosa extracto frappe sidra cafeina guarana menta hierbabuena
    tamarindo maracuya mora fresa guayaba mineral filtrada natural carbonatada espumosa
    licuado coctelera jarra vaso copa termo taza infusor canela jengibre pomelo toronja
    batidora chocolateado
  `,
  deportes: `
    ajedrez atletismo badminton baloncesto balonmano baseball beisbol billar boxeo
    buceo ciclismo cricket curling dardos deporte escalada esgrima esqui futbol
    gimnasia golf halterofilia handball hockey judo karate kayak lucha maraton natacion
    padel patinaje pentatlon pesca pilates polo remo rugby running salto senderismo
    skate snowboard softbol squash surf taekwondo tenis tiro triatlon voleibol
    waterpolo yoga arbitro atleta carrera campeonato cancha circuito competencia
    cronometro defensa equipo estadio entrenamiento final fuerza gol jornada jugada
    lanzamiento liga marcador medalla meta mundial olimpico partido pista podio
    posicion preparacion raqueta record resistencia seleccion semifinal sprint torneo
    victoria
  `,
  futbol: `
    arquero arbitro asistencia ataque azul balon banca barrera bote brazalete cancha
    capitan campeonato central cesped clasico club contraataque corner defensa
    delantero derby descuento diagonal dorsal empate entrenador equipo estadio
    estrategia extremo falta final fichaje futbol gambeta gol goleador guardameta
    hinchada intercepcion lateral lesion liga linea marca mediocampo mundial ofensiva
    pase penal penalti porteria posicion posesion presion remate rival saque seleccion
    semifinal silbato suplente taquito tecnica tiempo tiro torneo tribuna uniforme var
    victoria volante zurda zurdo taco chilena tijera regate drible tunel cano contra
    jugada ronda grupo copa camiseta botin arco pelota lateralidad cabezazo cabeceo
    salto volea fuera distancia banquillo calentamiento capitania
  `,
  videojuegos: `
    aventura arcade arena avatar batalla boton campana cartucho checkpoint consola
    control cooperativo crafting desafio descarga dificultad digital dragon enemigo
    energia escenario espada estrategia experiencia exploracion fantasia fase fps gamer
    gamepad glitch grafico guardado habilidad heroe historia inventario joystick jefe
    juego jugabilidad jugador lanzamiento legendario logro mapa mazmorra mecanica
    mision modo multiplayer musica nivel objetivo online opcion pantalla partida pixel
    plataforma pocion portal personaje poder progreso puzzle recompensa reinicio
    respawn retro rol ronda salto sandbox secreto simulador sonido speedrun stream
    supervivencia tactica teclado tesoro textura tutorial universo victoria vida
    virtual xbox playstation nintendo explorador trofeo botin emulador videojuego
  `,
  cine: `
    accion actor actriz adaptacion animacion argumento arte banda biografia blockbuster
    camara casting celuloide cine cineasta cinematografia clasico comedia composicion
    continuidad corte corto cortometraje credito critica doblaje documental drama
    edicion escena escenografia espectador estreno fantasia ficcion film filme
    fotografia fotograma heroe historia horror iluminacion imagen independiente
    interpretacion montaje narrativa pelicula personaje plano productor proyeccion
    protagonista realizador reparto rodaje romance sala secuencia serie soundtrack
    sonido suspenso taquilla teaser teatro thriller toma trailer vestuario villano voz
    western zoom enfoque lente objetivo travelling iluminador ambientacion decorado
    direccion duracion festival comediante camarografo
  `,
  musica: `
    acorde agudo album armonia artista bajo balada banda bateria beat blues bolero
    cancion cantante coro compas concierto contralto cumbia dance disco disonancia dj
    escala estribillo estudio falsete flamenco folclore frecuencia funk genero
    grabacion guitarra himno improvisacion indie instrumento jazz letra melodia metal
    mezzosoprano mezcla nota opera orquesta partitura percusion piano pop rap reggae
    repertorio ritmo rock salsa samba sintetizador solista sonata soprano sonido soul
    swing tango tecnica tema tempo tonalidad trap trompeta ukelele vals voz volumen
    violonchelo violin xilofono afinacion amplificador auricular balafon barroco
    bicordio clave cuerdas productor remix
  `,
  instrumentos: `
    acordeon agogo arpa armonica bandoneon banjo bajo bateria bongos campana carillon
    carraca castanuelas celesta chelo clarinete clavecin conga contrabajo cornetin
    corno cuerno darbuka didgeridoo dulzaina fagot flauta flautin gaita guitarra guiro
    gong harmonio kalimba kora laud lira mandolina maraca marimba melofono metalofono
    oboe ocarina organo pandero pandereta piano piccolo platillos quena requinto
    saxofon shamisen sitar tambor tambora tamtam timbal timbales triangulo trombon
    trompa trompeta tuba ukelele viola violin violonchelo xilofono zambomba guitarron
    arpeggio parche cuerda boquilla tecla pedal pua arco afinador amplificador
    metronomo resonancia concierto
  `,
  literatura: `
    adjetivo aventura alegoria aliteracion analisis antologia argumento autor biografia
    biblioteca capitulo caracter cita clasico comedia cuento dialogo diccionario drama
    edicion editorial ensayo escritor estrofa fabula fantasia ficcion figura final
    genero glosario heroe historia historieta idioma imagen indice introduccion lector
    lectura leyenda libro lirica manuscrito metafora mito narracion narrador novela
    obra oda pagina parrafo personaje poema poesia prologo protagonista relato resena
    rima romance satira saga sinopsis soneto suspenso texto tomo tragedia verso
    vocabulario volumen voz epiteto estructura simbolo cronica epica villano trama
    descripcion escritura dialecto epilogo escenario libreria portada tipografia
    estampa pergamino tinta pluma
  `,
  arte: `
    acuarela armonia artista boceto bronce brocha carboncillo ceramica collage color
    composicion concepto contraste creatividad croquis cuadro cubismo cultura dibujo
    diseno escultura esmalte estilo estampa exposicion expresion figurativo forma
    fresco galeria grabado grafito ilustracion impresionismo instalacion lienzo linea
    marco material mosaico mural museo obra oleo origen paleta papel pastel patron
    perspectiva pigmento pincel pintura plastica retrato relieve restauracion ritmo
    silueta sombra textura tinta tono trazo taller tematica vanguardia volumen vitral
    abstraccion autor autorretrato barroco clasico contemporaneo dadaismo expresionismo
    figuracion futurismo gotico minimalismo modernismo naturalismo popart realismo
    renacimiento surrealismo
  `,
  mitologia: `
    acuario adivino aguila altar amazona amuleto ancestro arca arcano arena armadura
    astro atlas augurio aurora bestia bosque bruja caldero centauro cielo ciclo coloso
    constelacion cosmos destino deidad demonio dios divinidad dragon druida duende
    eclipse elemento enigma escudo esfinge espiritu estrella eternidad fenix fuego
    gigante hada hechizo heroe hidra inmortalidad leyenda luna magia medusa misterio
    mitico monolito monstruo musa ninfa nube oraculo olimpico origen panteon pergamino
    poder profecia quimera reliquia ritual runa sabiduria santuario semidios sirena sol
    templo titan totem trueno universo valquiria vision voluntad zodiaco grifo
    minotauro fauno ogro unicornio portal inframundo guardian elfo enano conjuro
  `,
  espacio: `
    astronauta asteroide astronomia atmosfera aurora celeste centrifuga cometa
    constelacion cosmos crater cuerpo eclipse eje energia espacio estrella galaxia
    gravitacion gravedad hemisferio horizonte interplanetario jupiter lanzamiento luz
    luna marte mercurio meteorito meteoro nebulosa neptuno orbita observatorio planeta
    planetario radiacion satelite sideral sistema solar solsticio telescopio tierra
    universo venus viaje agujero astronomo cohete modulo nave naveespacial sonda rover
    graviton ionosfera troposfera estratosfera exosfera foton electromagnetismo
    magnitud parsec astrofisica supernova pulsar cuasar astrolabio lunacion ciclo
    cosmologia espaciotiempo vacio cinturon anillo urano saturno plutoide exoplaneta
    magnetosfera
  `,
  ciencias: `
    acido analisis anatomia atomo bacteria base biologia biomasa botanica calculo
    carbono celula cientifico compuesto concentracion conclusion control cristales dato
    densidad diagnostico disolucion elemento energia ensayo enzima especie estadistica
    estudio evaluacion experimento fisica formula gas genetica geologia gravedad
    hipotesis ion laboratorio liquido masa materia mecanica medicion metodo microbio
    mineral molecula muestra neutron nucleo observacion organismo oxigeno particula
    patron peso plasma prueba quimica reaccion registro resultado sal sistema solucion
    sustancia teoria tejido termica unidad universo variable vector velocidad volumen
    zoologia ecologia electrodo vacio viscosidad presion temperatura fusion vapor
    evaporacion condensacion indicador espectro
  `,
  matematicas: `
    algebra algoritmo altura angulo area arista axioma base binario bisectriz calculo
    cateto centro cifra circulo combinacion constante coordenada coseno cubo curva
    decimal derivada diagonal diametro diferencia digito dimension divisor ecuacion eje
    elipse entero estadistica estimacion exponente factorial figura formula fraccion
    funcion geometria grafica hipotenusa identidad integral intervalo limite linea
    logaritmo longitud magnitud matriz maxima media mediana minimo modulo muestra
    numero operacion orden parabola paralelo parametro pentagono porcentaje poligono
    potencia producto proporcionalidad punto radio raiz rango razon recta resta
    resultado rombo seno serie signo simetria sistema suma tangente teorema termino
    triangulo trigonometria unidad variable vector vertice volumen valor infinito
  `,
  carros: `
    acelerador aceite aerodinamica aire alarma alternador amortiguador arranque asiento
    asfalto auto automovil bateria baul biela bobina bomba bujia cabina caja cambio
    capot carro carroceria catalizador chasis cilindro circuito combustible compresion
    conductor convertible coupe curva deposito derrape diferencial direccion disco
    embrague escape espejo estacionamiento faro filtro freno fusible gasolina
    guardabarros hatchback inyector interior llanta lubricante manija mecanica motor
    neumatico odometro palanca parachoques parrilla pedal piston placa potencia
    radiador retrovisor rin rodamiento rueda sedan sensor suspension tablero tacometro
    tanque termostato torque traccion transmision turbo valvula vehiculo velocidad
    velocimetro ventilador ventana volante capota maletero bocina
  `,
  bicicletas: `
    aerodinamica alforja aluminio amortiguador aro asiento asfalto bicicleta biela bici
    bmx bomba buje cable cadencia cambio cadena calapie campana carretera casco
    catalina ciclista ciclismo circuito cuadro cubierta curva descenso desviador
    direccion disco eje embrague engranaje equilibrio eslabon espaciador freno gravel
    guante horquilla inflador llanta lubricante manillar marcha marco maza mecanico
    montana mountainbike neumatico pedaleo pedal pinon pista plato potencia protector
    radio reflejante reflector rin rodamiento rodillera rotor rueda ruta sillin
    suspension tensor timbre tornillo traccion transmision tubeless tubo urbana valvula
    velocidad velocimetro viento zapata rodillo recorrido sendero portabotella candado
    soporte
  `,
  herramientas: `
    alicate anclaje arandela azada banco barreta broca brocha cable caja calibrador
    caladora cincel clavadora clavo compas compresor cortadora cuchilla destornillador
    disco escalera escuadra esmeril espatula formon fresadora gancho gato grapadora
    guante herramienta hilo llave lima linterna lija machete maza martillo medidor
    metro nivel palanca pala perno pico pinza pistola plana plomada polea prensa
    pulidora rastrillo remache regla rosca sierra silicona soldador soplete taladro
    tenaza tijera torno tornillo tuerca viga visor yunque cucharon engrapadora serrucho
    flexometro termofusora
  `,
  viajes: `
    aeropuerto albergue aventura avion bahia boleto bosque brujula bus cabina camino
    campamento camping capital caravana carretera cascada ciudad costa crucero destino
    desierto equipaje escala estacion excursion exploracion frontera guia habitacion
    hostal hotel isla itinerario jornada laguna linterna litoral mapa maleta mochila
    monumento montana museo navegacion norte oceano oriente pais paisaje pasaje
    pasaporte paseo playa puerto pueblo ruta sendero terminal ticket turismo tren
    tripulacion tropico tunel valle viajero viaje visa visita vuelo ventana verano
    refugio autobus taxi barco metro itinerante reserva salida llegada descubierta
    mirador panorama
  `,
  colombia: `
    amazonas antioquia arauca armenia atlantico barranquilla bogota bolivar boyaca
    bucaramanga buenaventura caldas cali caqueta cartagena casanare cauca cesar choco
    cordoba cucuta cundinamarca florencia guainia guaviare huila ibague lajeira leticia
    magdalena manizales medellin meta monteria narino neiva norte orinoquia pasto
    pereira popayan putumayo quindio risaralda santamarta santander sincelejo sucre
    tolima tunja turbo valledupar vaupes vichada villavicencio yopal yumbo zipaquira
    arepa aguapanela ajiaco bandeja bocadillo bunuelo cacao cafe canelazo changua
    chiguiro chontaduro cumbia empanada guayaba hormiga lechona llanero masato oblea
    panela patacon sancocho tamal tropico vallenato bambuco guabina farallones paramo
    cordillera
  `,
  profesiones: `
    actor actriz administrador agronomo albanil analista arquitecto artesano artista
    asesor astronauta astronomo atleta auditor aviador barbero bibliotecario biologo
    bombero cajero camarero camionero cantante carpintero chef cientifico cirujano
    cocinero conductor contador coreografo dentista disenador docente doctor
    electricista enfermero entrenador escritor escultor estadistico estudiante
    farmaceutico filosofo fisico florista fotografo geografo geologo gerente herrero
    historiador ingeniero inspector investigador jardinero joyero juez maestro mecanico
    medico mensajero militar minero musico nutricionista odontologo operador panadero
    periodista piloto pintor plomero policia profesor programador psicologo quimico
    recepcionista reportero socorrista soldador sastre tecnico terapeuta traductor
    veterinario
  `,
  clima: `
    aguacero aire alisio anticiclon arcoiris atmosfera aurora bochorno brisa calor
    celaje celeste chubasco ciclon clima condensacion congelacion corriente diluvio
    escarcha estacion estrella frio granizo helada humedad huracan invierno lluvia
    llovizna neblina niebla nevada nieve nube nubarron nuboso otono presion pronostico
    radiacion relampago rocio sequia sol solsticio sombra temperatura temporal
    tempestad termico tibio tormenta tornado trueno verano ventisca viento vapor virga
    rafaga frente monzon meteorologia isotermia polar tropical templado caluroso
    desertico seco humedo barlovento sotavento cumulonimbo estrato ciclonico borrasca
    canicula insolacion llovedera nubosidad medidor
  `,
  fotografia: `
    abertura album angular apertura arte autorretrato balance blanco bokeh brillo
    camara captura carrete claroscuro color composicion contraste cuadro diafragma
    digital disparo distancia edicion enfoque encuadre estudio exposicion filtro flash
    focal foco fondo formato fotografia fotograma fotografo granulado iluminacion
    imagen instantanea iso lente luz macro memoria modo monocromo negativo nitidez
    objetivo obturador paisaje panoramica papel pelicula pixel plano polarizador pose
    perspectiva profundidad reflejo retrato revelado rollo saturacion sensor sombra
    soporte teleobjetivo textura tono tripode visor visual zoom aerosol iluminador
    retoque pincel revelador laboratorio emulsion escaner
  `,
  arquitectura: `
    abside acabado acera acero alero altura andamio angulo antepecho arco area arena
    arista armadura atrio azotea balcon baldosin baldosa baranda base bloque boveda
    cabina calle cemento ceramica columna concreto cornisa cubierta cupula diseno
    dibujo dimension edificio elevador escalera espacio estructura fachada forma
    fundamento geometria hierro hormigon iluminacion interior jardin ladrillo lamina
    linea losa madera maqueta marmol material medida muro obra ornamento pasillo patio
    piedra pilar piso plano planta porche portico puerta rampa reforma relieve
    revestimiento techo teja terraza torre trazo urbanismo viga vidrio ventana
    vestibulo vivienda volumen zona cimiento pilote mortero tabique herreria
  `,
  camping: `
    agua aire albergue amanecer ancla aventura arbol arroyo asador bosque botas brujula
    cabana camino campera campamento camping cantimplora carpa cascada cielo colchon
    cometa cordel cuerda descanso excursion estaca estrella fogata fogon forro frontal
    guia hamaca horizonte huella invierno isla lago lampara lena linterna lona madera
    manta mapa marmita mochila montana mosqueton naturaleza noche nudo olla paisaje
    parrilla penasco picnic piedra pino planta pradera refugio repelente resguardo rio
    roca ruta saco senderismo sendero silencio silla sol sombra tienda termo terreno
    tibio trazo trekking valle vela viento vivac vuelo zapato mosquitero canoa kayac
    parque monte
  `,
  dinosaurios: `
    alosaurio anquilosaurio apatosaurio arqueopterix barionix braquiosaurio carnotauro
    ceratosaurio compsognato coritosaurio deinonico dilofosaurio diplodoco dromeosaurio
    edmontosaurio espinosaurio estegosaurio gallimimo giganotosaurio hadrosaurio
    herrerasaurio hipsilofodonte iguanodonte kentrosaurio lambeosaurio megalosaurio
    microraptor monolofosaurio oviraptor paquicefalosaurio parasaurolofo plateosaurio
    protoceratops quetzalcoatlo saurio sauropodo teropodo tiranosaurio torosaurio
    triceratops troodon velociraptor vertebra fosil huella excavacion paleontologo
    museo reptil esqueleto garra cola cresta pico escama cadera mandibula cuello craneo
    garfio huevo nido herbivoro carnivoro omnivoro jurasico cretacico triasico
    prehistoria extincion meteorito depredador presa oceano continente excavadora
    estrato geologia reptiliano gigantismo
  `,
  ciberseguridad: `
    acceso alerta algoritmo amenaza analisis anomalia antivirus aplicacion ataque
    auditoria autenticacion autorizacion backup bastion bit bloqueo bot bug cifrado
    clave cliente codigo contrasena cortafuegos criptografia csrf dato defensa detector
    dispositivo dominio endpoint entorno explotacion firewall firma forense fraude hash
    identidad incidente integridad ip llave log malware memoria monitoreo multifactor
    nonce paquete parche permiso phishing politica privacidad protocolo prueba puerto
    registro riesgo rol sal seguridad secreto servidor sesion sistema token trafico
    usuario validacion vulnerabilidad vpn web autenticador biometria consentimiento
    deteccion intruso inyeccion kernel hmac salted credencial auditor pentest escaneo
    hardening
  `,
};

export const EXTRA_LABELS = {
  animales: 'Animales terrestres',
  aves: 'Aves y pájaros',
  marinos: 'Océanos y vida marina',
  insectos: 'Insectos y pequeños seres',
  plantas: 'Plantas y árboles',
  flores: 'Flores y jardinería',
  frutas: 'Frutas tropicales y del mundo',
  verduras: 'Verduras y hortalizas',
  postres: 'Postres y dulces',
  bebidas: 'Bebidas y cafetería',
  deportes: 'Deportes y competencias',
  futbol: 'Fútbol',
  videojuegos: 'Videojuegos',
  cine: 'Cine y películas',
  musica: 'Música y géneros',
  instrumentos: 'Instrumentos musicales',
  literatura: 'Literatura y libros',
  arte: 'Arte y pintura',
  mitologia: 'Mitología y fantasía',
  espacio: 'Espacio y astronomía',
  ciencias: 'Ciencia y laboratorio',
  matematicas: 'Matemáticas',
  carros: 'Automóviles y mecánica',
  bicicletas: 'Bicicletas y ciclismo',
  herramientas: 'Herramientas y taller',
  viajes: 'Viajes y turismo',
  colombia: 'Colombia: cultura y lugares',
  profesiones: 'Profesiones y oficios',
  clima: 'Clima y meteorología',
  fotografia: 'Fotografía',
  arquitectura: 'Arquitectura y construcción',
  camping: 'Camping y senderismo',
  dinosaurios: 'Dinosaurios y paleontología',
  ciberseguridad: 'Ciberseguridad y hacking ético',
};
