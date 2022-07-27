# Harry Potter

Proyecto [Harry Potter](https://github.com/Yazmin-Trujillo/harry-potter). El enlace anterior te lleva al repositorio en Git Hub\

El tamaño para celular está enfocado para 320px de ancho.\
El tamaño para escritorio está en min-width: 1024px

La aplicación está despligada en [Heroku](https://yaz-harry.herokuapp.com). 

---
## Scripts válidos

En éste proyecto tu puedes correr los siguiente Scripts:

### `npm start`

Corre la app en modo desarrollo.\
Corre un servidor mock mediante `json-server` en el puerto 3001, a la vez de la aplicación en el puerto 3000.

Abre [http://localhost:3000](http://localhost:3000) para ver el proyecto en el navegador.

Cada vez que haya cambios se actualizará la página.\
En la consola del navegador se verán errores.

### `npm run build`

## Deploy

El repositorio tiene la configuración requerido para hacer deploys a [Heroku](https://www.heroku.com/). Como referencia mira los archivos `server.js` y `Procfile` así como la documentación de Heroku.
Ésta configuración está basada en el tutorial [Desplegar una demo con una API JSON en Heroku](https://blog-es.mimacom.com/deploy-demo-with-api-heroku/).

---

## Extra

### ¿Qué es lo que más te gustó de tu desarrollo?

+ Reforzar lo que he aprendido hasta ahora y agregarle nuevos conocimientos.
+ El despliegue con Heroku de los archivos estáticos junto con un servidor REST mediante json-server.
+ Usar SASS por primera vez, simplifica el trabajo con estilos
+ El resultado: me gusta ver que se parece a lo que se me pidió y funciona!

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
