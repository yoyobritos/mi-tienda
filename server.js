const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Configuración para usar EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Servir archivos estáticos (CSS, imágenes)
app.use(express.static(path.join(__dirname, 'public')));

// Middleware para manejar datos del formulario
app.use(bodyParser.urlencoded({ extended: true }));

// Productos
const productos = [
    { id: 1, nombre: 'Remera Negra Hombre', color: 'Negra', descripcion: 'Una remera cómoda para hombres', precio: 100.00, imagen: 'remera1.jpg' },
    { id: 2, nombre: 'Remera Blanca Mujer', color: 'Blanca', descripcion: 'Perfecta para mujeres con estilo', precio: 120.00, imagen: 'remera2.jpg' },
    { id: 3, nombre: 'Remera Azul Niño', color: 'Azul', descripcion: 'Ideal para niños activos', precio: 90.00, imagen: 'remera3.jpg' },
    { id: 4, nombre: 'Remera Gris Unisex', color: 'Gris', descripcion: 'Cómoda y versátil', precio: 95.00, imagen: 'remera4.jpg' },
    { id: 5, nombre: 'Remera Rojo Mujer', color: 'Rojo', descripcion: 'Para resaltar tu personalidad', precio: 110.00, imagen: 'remera5.jpg' },
    { id: 6, nombre: 'Remera Amarilla Hombre', color: 'Amarillo', descripcion: 'Perfecta para días soleados', precio: 105.00, imagen: 'remera6.jpg' },
    { id: 7, nombre: 'Remera Naranja Mujer', color: 'Naranja', descripcion: 'Colores vibrantes para tu día a día', precio: 115.00, imagen: 'remera7.jpg' },
    { id: 8, nombre: 'Remera Verde Hombre', color: 'Verde', descripcion: 'La naturaleza en tu vestuario', precio: 98.00, imagen: 'remera8.jpg' },
    { id: 9, nombre: 'Remera Rosa Niño', color: 'Rosa', descripcion: 'Ideal para los más pequeños', precio: 85.00, imagen: 'remera9.jpg' },
    { id: 10, nombre: 'Remera Morada Mujer', color: 'Morado', descripcion: 'Una remera elegante y cómoda', precio: 108.00, imagen: 'remera10.jpg' },
    { id: 11, nombre: 'Remera Blanca Unisex', color: 'Blanca', descripcion: 'Un básico para todas las ocasiones', precio: 100.00, imagen: 'remera11.jpg' },
    { id: 12, nombre: 'Remera Lila Mujer', color: 'Lila', descripcion: 'Un toque suave para tu look', precio: 110.00, imagen: 'remera12.jpg' },
    { id: 13, nombre: 'Remera Marrón Hombre', color: 'Marrón', descripcion: 'Una opción cálida para el otoño', precio: 105.00, imagen: 'remera13.jpg' },
    { id: 14, nombre: 'Remera Beige Mujer', color: 'Beige', descripcion: 'Perfecta para el estilo minimalista', precio: 120.00, imagen: 'remera14.jpg' },
    { id: 15, nombre: 'Remera Azul Oscuro Hombre', color: 'Azul Oscuro', descripcion: 'Ideal para cualquier ocasión informal', precio: 95.00, imagen: 'remera15.jpg' },
    { id: 16, nombre: 'Remera Celeste Niño', color: 'Celeste', descripcion: 'Cómoda y fresca para los más pequeños', precio: 90.00, imagen: 'remera16.jpg' }
];

// Ruta principal
app.get('/', (req, res) => {
    res.render('index', { productos });
});

// Ruta de contacto
app.get('/contacto', (req, res) => {
    res.render('contacto');
});

// Ruta para manejar el formulario de contacto
app.post('/contacto', (req, res) => {
    const { nombre, email, mensaje } = req.body;
    console.log(`Nuevo mensaje de ${nombre} (${email}): ${mensaje}`);
    res.send('¡Gracias por contactarnos! Nos pondremos en contacto contigo pronto.');
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
