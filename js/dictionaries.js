import { EXTRA_WORDS, EXTRA_LABELS } from "./extended-dictionaries.js";

// Cada término es una opción independiente y tiene una sola forma ASCII.
// Mantener palabras únicas por diccionario evita contar opciones inexistentes.
const WORDS = {
  espanol: `
    abeja abrazo aceite acero agua aire aldea alegria almendra altura amanecer amigo ancla arena
    armonia aroma arroyo aventura azucar barco barrio bosque brisa bronce burbuja caballero cadena
    cafe camino campo canela canto caracol carbon carrera cascada castillo cielo ciruela claro clavel
    colina cometa coral corona cristal cuadro cubo cumbre danza destino diamante dibujo domingo
    dorado dragon duende energia escudo espejo estrella familia faro fiesta flor fogata fuente
    fuego galaxia gato gigante girasol globo golondrina granizo guitarra hada helado hielo hogar
    horizonte huella isla jardin joya juego laguna lampara lapiz leyenda libro limon lluvia luna
    madera magia mango manana mariposa melodia mercado mesa miel molino montana mosaico mundo
    naranja nube oasis oceano olivo orilla palacio papel parque pastel piedra planeta playa poema
    puente queso raiz regalo rio roble rosa sabana salto secreto selva sendero sol sonrisa
    tesoro tigre torre trigo valle ventana verano viento viajero volcan zorro
  `,
  ingles: `
    acorn adventure amber anchor apple arrow artist autumn bamboo banner beacon berry blanket
    blossom bluebird breeze bridge brook bubble butterfly canyon castle cedar cherry circle cloud
    coconut comet compass coral cotton crystal daisy dawn desert diamond dragon dream drift eagle
    echo ember emerald engine explorer falcon feather festival field firefly flame forest fountain
    garden gentle glacier golden grape gravity harbor harmony harvest hazel hill horizon island
    ivory jasmine journey jungle lantern lavender lemon library lightning lily meadow melody
    memory meteor midnight mirror moon morning mountain mushroom ocean olive orange orchid
    otter paper pebble pepper phoenix planet plum pocket prairie rainbow raven river robin
    rocket rose saddle sapphire shadow shelter silver sky snowfall sparkle spice spring star
    stone storm summer sunset sunrise tiger timber trail travel tulip valley velvet violet
    wander water willow window winter wonder yellow zephyr
  `,
  cocina: `
    ajo albahaca almibar almendra anillo arandano arroz asado atole avena azafran
    baguette banano batata batido bechamel berenjena bizcocho bollo brocoli brocheta brownie
    cacao cafe calabaza caldo canela caramelo cebolla centeno cereza champinon chocolate cilantro
    clavo coco colador comino conserva corteza crema croqueta cuchara cuchillo curcuma
    durazno empanada ensalada espatula estofado fideo flan fresa frijol fritura
    galleta garbanzo gelatina granada granola guayaba guiso harina helado horno huevo
    jengibre jugo kiwi lactosa lasana lenteja lechuga limon licuadora lomo
    maiz mandarina mango mantequilla manzana marmita mayonesa melon merengue miel miga
    molino mora mostaza muffin naranja nata nuez oregano olla oliva pan panela
    paprika parrilla pasta pastel pepino perejil pimienta pincho pizza platano
    pollo postre queso quinoa rabanito receta romero sal salsa sarten semilla
    sopa sorbete sushi tamal tartaleta te tomate tortilla tostada trufa vainilla
    vapor vegetal vinagre wafle yogur zanahoria zumo
  `,
  motos: `
    acelerador aceite aerodinamica alarma aleacion alforja alternador amortiguador anclaje
    arranque asfalto asiento bateria baul biela bobina bomba bujia caballete
    cadena caja caliper cambio carenado carburador casco catalizador chasis cilindro
    clutch cojinete colin combustible compresion conductor corona cubierta curva
    deposito derrape direccion disco embrague escape eslabon espejo estribera filtro
    freno gasolina goma gps guardabarros guante horquilla indicador inyector
    intermitente kilometraje latiguillo leva llanta lubricante maneta manillar
    marcha mecanica motor muelle neumatico odometro palanca parabrisas pedal
    piston pinon piloto pinza placa potencia protector radiador ralenti
    recorrido reduccion reflector regulador rele remolque resorte retrovisor
    revoluciones rin rodamiento rotor rueda ruta scooter segmentacion sensor
    silenciador suspension tacometro taller tapa tensor termostato tornillo
    torque transmision traccion tubo turbo valvula velocimetro velocidad
    ventilador visor voltaje vulcanizado yamaha zapata zigzag
  `,
  tecnologia: `
    algoritmo antena archivo arreglo audio automatizacion backup banner bateria binario
    bit blockchain bluetooth boton byte cable cache carpeta circuito cliente
    codigo compilador consola contenedor control cpu criptografia dato debug
    decodificador despliegue dispositivo dominio driver editor enlace entorno
    ethernet evento firmware firewall flujo formato frontend funcion gateway
    github grafico hardware hash hosting html icono imagen indice input
    interfaz internet ip javascript kernel laptop lenguaje libreria linux
    log memoria mensaje metodo microchip modulo monitor mouse navegador
    nodo nube objeto paquete pantalla parche permiso pixel plataforma
    proceso programa protocolo prueba puerto python query ram red registro
    repositorio respuesta robot router script seguridad sensor servidor sesion
    sistema software solucion sql ssh stack string switch tabla teclado
    terminal token transistor unidad usuario variable vector version virtual
    web wifi widget windows yaml zona zoom
  `,
};

const LABELS = {
  espanol: "Español",
  ingles: "Inglés",
  cocina: "Cocina",
  motos: "Motocicletas",
  tecnologia: "Tecnología",
  mixto: "Mixto (todas las categorías)",
};

// Las categorías se muestran agrupadas para navegar un catálogo extenso.
export const DICTIONARY_GROUPS = Object.freeze([
  { label: "Todos los temas", ids: ["mixto"] },
  { label: "Idiomas y vida cotidiana", ids: ["espanol", "ingles", "profesiones"] },
  { label: "Comidas y bebidas", ids: ["cocina", "frutas", "verduras", "postres", "bebidas"] },
  { label: "Naturaleza y animales", ids: ["animales", "aves", "marinos", "insectos", "plantas", "flores", "clima", "dinosaurios"] },
  { label: "Vehículos y taller", ids: ["motos", "carros", "bicicletas", "herramientas"] },
  { label: "Deportes", ids: ["deportes", "futbol"] },
  { label: "Entretenimiento y cultura", ids: ["videojuegos", "cine", "musica", "instrumentos", "literatura", "arte", "mitologia"] },
  { label: "Ciencia y tecnología", ids: ["tecnologia", "ciberseguridad", "espacio", "ciencias", "matematicas"] },
  { label: "Lugares y experiencias", ids: ["viajes", "colombia", "fotografia", "arquitectura", "camping"] },
]);

const allWords = { ...WORDS, ...EXTRA_WORDS };
const labels = { ...LABELS, ...EXTRA_LABELS };
const dictionaries = Object.fromEntries(
  Object.entries(allWords).map(([key, words]) => [key, Object.freeze([...new Set(words.trim().split(/\s+/))])]),
);
const combined = Object.freeze([...new Set(Object.values(dictionaries).flat())]);
dictionaries.mixto = combined;

export const DICTIONARY_LABELS = Object.freeze(labels);

export function getDictionary(id) {
  const words = dictionaries[id];
  if (!words) throw new RangeError("Diccionario desconocido.");
  return words;
}

export function listDictionaryInfo() {
  return Object.entries(labels).map(([id, label]) => ({
    id,
    label,
    size: getDictionary(id).length,
  }));
}
