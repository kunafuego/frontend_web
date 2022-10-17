# grupo-aguero_sanfco-frontend 

# Entrega 2: SOA (Simula, Optimiza y Ahorra) :computer:

### Domingo Agüero
### Pablo San Francisco


## Indicaciones Generales

##### 1.  ✅
###### Se hicieron los siguientes cambios solicitados en la reunión de feedback:
###### a) Poner foto inicial en la lista de productos
###### b) Poner transparencia en foto de fondo
###### c) Mayor contraste entre fondo y texto
###### d) Alinear contenedor de simulación
###### e) Arreglar íconos en index.html

##### 2. ✅
###### Se encuentran las reglas del Simulador en la vista "Documentación" del archivo documentacion.html.

##### 3. ✅
###### Se implementa el servidor de la manera pedida. Se utiliza koa-router y se obtiene un JSON con el input del usuario en el caso de la Simulación. 

##### 4. ✅
###### Están implementados todos los GET's de la base de datos a nivel de servidor y el POST de Simulación. 

##### 5.
######

##### 6.
###### 

##### 7. ✅
###### ![Modelo Entidad Relación](/src/assets/imgs/modeloER.png "Modelo E/R")

##### 8. ✅
###### La BDD se implementa como localhost. Para poder implementarla localmente, se debe crear un archivo .env en el backend con credenciales:
###### DB_USER=<usuario_de_base_de_datos_creado>
###### DB_NAME=<nombre_de_base_de_datos_creada>
###### DB_PASSWORD=<contraseña_implementada>
###### SB_HOST=localhost
###### Y luego correr el siguiente comando:
###### npx sequelize-cli db:migrate (Para que se implemente el modelo en la base de datos)
###### npx sequelize-cli db:seed:all (Para que se inserten las seeds)

##### 9. ✅
###### El link para el backend de la aplicación es el siguiente:
##### https://github.com/IIC2513-2022-2/grupo-aguero_sanfco-backend

##### 10. ✅
###### Se pasó una gran parte de la aplicación y funcionalidades a REACT, el POST de simulación funciona solo en REACT. Para poder hacer la conexión, se debe hacer todo lo estipulado en los puntos 8 y 11

##### 11. ✅
###### Para la entrega se puede acceder estáticamente a la aplicación mediante el archivo index.html o con react, utilizando "soa" como directorio raiz y correr "npm start"

##### 12. ✅
###### Se cumple con lo pedido en el enunciado

##### 13. ✅
###### Se utiliza eslint para asegurar la utilización de la guía de estilos

##### 14. ✅
###### Se utilizaron branches y commits descriptivos durante la entrga

## Bandas Back-End

#### D: ✅
##### Se implementa el modelo completo y se establece una conexíon entre front y back

#### C: ✅
##### Hay un GET funcional de las Simulaciones Históricas y un POST funcional para poder simular

#### B: ✅
##### Se implementa correctamente

#### A: ✅
##### Se utiliza eslint y Gitflow de manera adecuada

## Bandas Front-End

#### C: ✅
##### Se migra gran parte de la aplicación a REACT, y se puede hacer una simulación desde el front, que luego será guardado en simulaciones históricas.

#### B: ✅
##### Están casi todos los componentes implementados

#### A: ✅
##### Se implementa un slider a nivel de react que permite elegir la cantidad de producto que se desea simular


## Referencias de código externo :book:
#### Se encuentran en cada archivo junto a el código





