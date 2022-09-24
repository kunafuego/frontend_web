# grupo-aguero_sanfco-frontend 

# Entrega 1: SOA (Simula, Optimiza y Ahorra) :computer:

### Domingo Agüero
### Pablo San Francisco



##### 1. Un archivo index.html como punto de entrada. ✅
###### Se encuentra el archivo

##### 2. Un archivo con estilos .css ✅
###### Hay tres archivo .css, index.css que le da los estilos a todos los html y botones con excepción a los correspondientes a simulacion.html (simulacion.css) y los forms de registro e inicio de sesión (forms.css)

##### 3. La posibilidad de navegar entre distintas páginas HTML (usen la etiqueta de anchor para ello) ✅
###### Se puede navegar entre todas las páginas de la navbar, la landing page se encuentra completa. La pagina de simulación se encuentra completa también, pero falta todo lo que sería el javascript por detrás para los calculos que se deben realizar para las simulaciones. * Como no se puede registrar o iniciar sesión, existe un botón al centro de la página, para facilitar la navegación, que sale homepage, que permite adentrarse en la aplicación sin tener que iniciar sesión. Esto es solo hasta que podamos empezar a validar a los usuarios que quieran entrar a la página.

##### 4. Una página de inicio de su aplicación WEB, que sea “amigable” es decir, de navegación obvia, con títulos, menús, sub páginas y secciones que orienten al usuario. ✅
###### Se encuentra una navbar que facilita la navegación, se pueden acceder a todos los lugares con facilidad desde adonde se esté. La navbar también es "sticky" así que se tiene acceso a esta en todo momento

##### 5. Las consideraciones, guía y reglas detalladas para el uso de su aplicación, a nivel de usuario como de administrador (al menos esos niveles se han de considerar). ✅
###### Creamos una sección llamada FAQ (se accede a ella mediante la navbar) donde se detalla el funcionamiento de la aplicación para usuarios que no la conocen

##### 6. Una sección “acerca de..”, muchas veces conocida como “about...” donde explican qué es esto!, la versión, etc. ✅
###### Está creada y también se puede acceder a ella mediante la navbar, se explica que es la aplicación, por qué existe, nuestra misión y como funciona a grandes rasgos, se complementa con FAQ.

##### 7. Una sección de “nosotros” donde se identifique el grupo (nombre) y se individualice a sus integrantes. ✅
###### Se accede a ella mediante la navbar, se tiene acceso a una foto de los integrantes y si se hace un "mouse-hover" se accede a más información de cada integrante. Además si se clickea en el widget de spotify se escuchará una canción recomendada por cada uno de los integrantes, ojalá se disfrute. 

##### 8. De ser necesario, deberán entregar también, en el directorio correspondiente, todas las imágenes y otros recursos requeridos para el despliegue correcto de su sitio. ✅
###### Todas las imágenes que se utilizan en la aplicación se encuentran en la carpeta ./src/assets/imgs.

##### 9. Una barra de navegación que estará presente siempre en su página (en la parte superior) que permitirá ir a “home” o a cualquiera de las secciones que ustedes entreguen (recomendación, una sección debiese corresponder a una página HTML). ✅
###### Existe la barra de navegación y está presente en todas las vistas.

##### 10.Deberán entregar Javascript de lado cliente (archivos .js) que permitan hacer algunas acciones básicas sobre sus páginas y que sean sólo de carácter local, por ejemplo usar elementos HTML como un tag selection y que ante la selección de una opción cambie algo en la página, o el uso de botones que realicen acciones locales, etc. Recuerden que esto es parte integral de vuestro diseño de front. ✅
###### Lo que implementamos para esta entrega de lado Javascript son: 
###### 1) en el home se encuentra al simulador, pero "apagado", o sea sirve solo para que el usuario no registrado puede entender como se inicia la simulación y a que productos tiene acceso. 
###### 2) En el form de registro si se quiere registrar un usuario de tipo Finanzas, Insumos o Empleos, sale un dropdown selection con todas las empresas registradas en la aplicación, si se elige Usuario Gerente, se cambia el dropdown por una entrada de texto. 
###### 3) En el simulador al cambiar el tipo de producto a simular, se cambia la foto a una foto del producto, junto a una descripción de este, se hace tanto para la landing page, como para la página de simulación.
###### 4) Se implementa una stickybar para facilitar la navegación en la página, esto es una barra de navegación que permanece en pantalla en todo momento.

#### C: Todo lo descrito en el enunciado como mínimo (listado de 10 puntos), pero con un desarrollo menos elaborado (Landing page, about us, about the Game, instrucciones, etc.) ✅

#### B: Banda C + Uso de flexbox y grid y funcionalidad muy básica con Javascript. Mayor elaboración en los aspectos mínimos de la banda C. ✅
##### Se utiliza flexbod y grid para mantener alineado correctamente las vistas y sus sub-páginas.

#### A: Banda B + Originalidad en el uso de flexbox y grid con js. Por ejemplo que al moverse por la parte de instrucciones se vayan destacando distintas partes de esta, etc. ✅


## Referencias de código externo :book:
#### Las referencias a código externo se encuentro junto al código correspondiente.





