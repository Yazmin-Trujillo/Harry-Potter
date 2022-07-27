[![Netlify Status](https://api.netlify.com/api/v1/badges/220cbb48-f7f7-440d-a4d3-a8c8ae3994c7/deploy-status)](https://app.netlify.com/sites/yaz-harry/deploys)

# Harry Potter

Proyecto [Harry Potter](https://github.com/Yazmin-Trujillo/harry-potter). El enlace anterior te lleva al repositorio en Git Hub\

Para poder ver la página web en el navegador se tienen que abrir dos terminales en el proyecto, en uno se correra la app (npm start) y en el otro el servidor mock (json-server --watch characters.json --port 3001)

El tamaño para celular lo tengo en width: 320px
El tamaño para escritorio está en min-width: 1024px

La aplicación está despligada en [netlify](https://deploy-preview-6--yaz-harry.netlify.app/). 

---
## Scripts válidos

En éste proyecto tu puedes correr los siguiente Scripts:

### `npm start`

Corres la app en modo desarrollo.\
Abre [http://localhost:3000](http://localhost:3000) para ver el proyecto en el navegador

Cada vez que haya cambios se actualizará la página.\
En la consola del navegador se verán errores.

### `json-server --watch characters.json --port 3001` 

Corres el servidor para ver los datos de la app

### `npm test`

### `npm run build`

---

## Extra

### ¿Qué es lo que más te gustó de tu desarrollo?

Reforzar lo que he aprendido hasta ahora y agregarle nuevos conocimientos.
Ademas que me gusta ver que se parece a lo que se me pidió y funciona!

### Si hubieras tenido más tiempo ¿qué hubieras mejorado o qué más hubieras hecho?

+ Me hubiera gustado refactorizar para extraer en funciones, código repetido
+ Hacer las pruebas unitarias
+ Darle funcionalidad en el componente añadir personaje al link/boton de agregar imagen
+ Que los elementos en favoritos se mantengan despues de actualizar la página  
+ Agregar media query para tablet

### Descríbenos un pain point o bug con el que te hayas encontrado y como lo solucionaste

- Uno fué el agregar redux al proyecto ya que me resultaba enredado la estructura, como por ejemplo la carpeta store y sus elementos, en la cual el archivo hooks aun no lo entiendo del todo.\
*Me apoyé de la documentación oficial de redux y otros ejemplos más*

- Otro fué donde ubicar el json para que el server lo encontrara\
*Lo coloqué donde server cargaba de default su archivo json si no encontraba uno*

- De igual manera con las imagenes\
*Me guié de ejemplos en linea*
