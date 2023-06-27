# f1it2-team-10-Frontend

PROYECTO:
💡 Agenda de citas: 
Creación y edición de citas (nombre, fecha, hora, duración, ubicación, detalles, etc.). 
Listado y búsqueda de citas. 
Visualización de detalles de citas. Eliminación de citas.
Eliminación de citas
Integración con calendarios externos (opcional). (Se decidió por recomendación del sr George, que este requerimiento no se va a tomar en consideración en esta etapa pòr falta de tiempo).
                                
## CitaSync
# Team: TECHNOMANCERS 
# (Los Tecnomantes)

También conocidos como Tecnólogos, Tecnologenios o Ingeniadores, es uno de los grupos nómadas que habitan Norteamérica durante los acontecimientos de Cyberpunk 2020.
Cyberpunk 2020 es la segunda edición del título Cyberpunk, publicado en 1988, un juego de rol ambientado en un universo de ficción del subgénero de ciencia ficción orientado a la acción y el combate.
Los Tecnomantes son un grupo de nómadas de los más misteriosos de todo el país y son expertos en un campo: son técnicos a sueldo y verdaderos magos de la tecnología, con una gran inclinación a permanecer neutrales ante las disputas y viajan por Norteamérica buscando problemas extremadamente complejos de resolver.

💡 Stack Tecnológico. 
Los lenguajes de programación utilizados:
Java: versión 17 y Spring Boot: La versión 3 son buenas opciones para el desarrollo del backend ya que son estables y ampliamente utilizadas.
JavaScript: la versión más reciente y React 16.x para el desarrollo del frontend.
MySQL: la versión más reciente para la base de datos.

Justificación
Los lenguajes y framework, anteriormente mencionados, son los que conocen los integrantes del team, por consiguiente; es crucial no sólo el conocimiento de los mismos, sino que la ejecución del proyecto permite un ahorro de tiempo y recursos, el fomentar y propiciar el trabajo en equipo, el favorecer la seguridad en el desarrollo del proyecto y por ser de los más populares en la actualidad, nos permiten implementar una comunidad de soporte ideal para la funcionalidad del mismo.

💡 Dependencias del proyecto
Para el frontend, se necesitan las siguientes:
React: la biblioteca principal de React.
React-DOM: para manipular el DOM con React.
React Router: para manejar la navegación en la aplicación.
Axios: para realizar solicitudes HTTP al backend.

💡 Documentación y Arquitectura del Proyecto
Para el frontend, utilizar Create React App para configurar la estructura del proyecto y las dependencias requeridas. Ejecutar el siguiente comando en el directorio del repositorio frontend clonado:

`npx create-react-app`

Configuración
Instalar Node.js y npm para poder utilizar JavaScript y React en el frontend.
Configurar el proyecto para utilizar React y asegurarse de que esté conectado correctamente con el backend.
Al completar las tareas de configuración y desarrollo, realizar un commit inicial en cada repositorio con los cambios realizados:

cd citasync
`git add .
git commit -m "Commit inicial del proyecto frontend"
git push origin main`

Diseño:
Describe el diseño de la interfaz de usuario, incluyendo las pantallas principales y cómo se navega entre ellas. También, incluir mockups o bocetos para ilustrar el diseño de la aplicación.
Identificar las pantallas principales de la aplicación, como la pantalla de inicio de sesión, la pantalla de programación de citas y la pantalla de visualización de citas.
Describir cómo se navega entre estas pantallas y qué acciones puede realizar el usuario en cada una de ellas.
Crear mockups o bocetos para ilustrar el diseño visual de cada pantalla y cómo se organizarán los diferentes elementos en la interfaz de usuario.
Incluir detalles sobre el uso del color, la tipografía y otros elementos visuales para guiar el desarrollo de la interfaz de usuario.

Para el frontend, deberás crear formularios y acciones que interactúen con estos endpoints. Para el registro se crea un formulario que solicite la dirección de correo electrónico y la contraseña. Al enviar el formulario, realiza una petición POST al endpoint /api/users/register con los parámetros email y password. Si la respuesta es exitosa (201 Created), el usuario se registra correctamente. En caso contrario, muestra un mensaje de error adecuado.

![PANTALLA INICIO](https://github.com/Trycatch-tv/f1it2-team-10-Frontend/assets/122529721/c55fd216-7181-4ccf-a76b-f0a4ad5c42c1)

De manera similar, se implementa el inicio de sesión y la gestión de citas en el frontend utilizando los endpoints y parámetros proporcionados en la documentación.
Configurar el proyecto React y sus dependencias. Asegurandonos de tener una estructura de directorios adecuada y archivos de configuración como `webpack.config.js` y `babel.config.js` .
Crear componentes React para cada una de las funcionalidades requeridas: creación y edición de citas, listado y búsqueda de citas, visualización de detalles de citas y eliminación de citas. Utiliza `useState` y `useEffect` para manejar el estado y las interacciones con el backend mediante fetch o alguna librería como Axios.

![MENU](https://github.com/Trycatch-tv/f1it2-team-10-Frontend/assets/122529721/ab4ef5fa-6241-4f69-b8c3-d6068b5f8e5d)

Configurar el enrutamiento de la aplicación utilizando React Router. Esto incluye la creación de un componente de navegación y la configuración de las rutas para cada uno de los componentes de la aplicación.
Estilizar la aplicación utilizando CSS o algún framework de diseño como Bootstrap o Material-UI. Puedes crear archivos CSS específicos para cada componente y utilizarlos para dar estilo a los elementos de la interfaz de usuario.
Implementar la lógica para la comunicación con el backend. Esto incluye realizar solicitudes HTTP a las rutas del backend para llevar a cabo las operaciones CRUD. Puedes utilizar fetch o alguna librería como Axios para facilitar esta tarea.
Manejar los errores y las validaciones en la interfaz de usuario. Esto incluye mostrar mensajes de error y éxito al usuario después de realizar cada operación, así como validar los datos ingresados por el usuario antes de enviarlos al backend.

![CREAR CITA](https://github.com/Trycatch-tv/f1it2-team-10-Frontend/assets/122529721/cb54498a-3035-4706-bade-118e52aefe36)

Una aplicación de agenda de citas desarrollada con React, Redux y React Router. Esta aplicación permite a los usuarios crear, editar y eliminar citas, así como navegar por los detalles de cada cita.

![DETALLES CITA](https://github.com/Trycatch-tv/f1it2-team-10-Frontend/assets/122529721/2c090666-6c78-4e91-925b-19dc072b91c4)

![LISTA DE CITAS](https://github.com/Trycatch-tv/f1it2-team-10-Frontend/assets/122529721/b7132bcc-7b5e-4f74-a049-583ea49bee34)


## Requisitos

- Node.js

**Instalar Node.js**: Asegúrate de tener instalado Node.js en tu sistema. Si no lo tienes, descárgalo e instálalo desde ~~[aquí](https://nodejs.org/)~~.

- NPM

**Crear un proyecto de React**: Usa `create-react-app` para crear un nuevo proyecto de React. Ejecuta el siguiente comando en tu terminal o línea de comandos:

`npx create-react-app citasync`

Esto creará un nuevo proyecto de React llamado "mi-agenda-citas". Puedes cambiar el nombre según tus preferencias.

## Instalación

1. Clonar este repositorio en la máquina local:

2. Navegar al directorio del proyecto:

cd citasync

3. Instalar las dependencias del proyecto:

**Instalar dependencias de Redux**: Ejecuta el siguiente comando para instalar las dependencias necesarias para trabajar con Redux en tu proyecto:

   `npm install redux react-redux @reduxjs/toolkit`

**Instalar React Router**: Para manejar la navegación en tu aplicación, instala React Router con el siguiente comando:

   `npm install react-router-dom`

**Iniciar el servidor de desarrollo**: Ejecuta el siguiente comando para iniciar el servidor de desarrollo y abrir la aplicación en tu navegador:

   `npm start`

## Ejecución

Para ejecutar la aplicación en modo de desarrollo, utiliza el siguiente comando:

inicio de npm. Esto abrirá la aplicación en `http://localhost:3000`.

**Configurar Redux**: Crea un directorio llamado "redux" en la carpeta "src" y crea archivos para almacenar acciones, reductores y la configuración de la tienda. Por ejemplo, crea archivos como `store.js`, `reducers.js` y `actions.js` dentro del directorio "redux".

**Conectar Redux con React**: Importa el `Provider` de `react-redux` en tu archivo `src/index.js` y envuelve tu componente `App` con él. También importa la tienda que creaste en el paso 7 y pásala como propiedad al `Provider`.

   `import React from 'react';
   import ReactDOM from 'react-dom';
   import { Provider } from 'react-redux';
   import store from './redux/store';
   import App from './App';

   ReactDOM.render(
     <Provider store={store}>
       <App />
     </Provider>,
     document.getElementById('root')
   );`

## Estructura del proyecto

- `src`: Contiene todos los archivos de código fuente, incluidos los componentes de React, la configuración de Redux y las hojas de estilo.
    - `components`: Contiene los componentes de React utilizados en la aplicación.
        - `assets`
        - `components`:
            - `BuscarCitas`, `Detalle`, `Menu` y `Home`
        - `pages`:
            - `About`, `CrearCita` y `ActualizarCita`
    - `redux`: Contiene la configuración de Redux, incluidos los archivos de acciones y reductores.
    - `App.js`: El componente principal de la aplicación.
    - `App.css`: archivo de hoja de estilo en cascada
    - `index.js`: El punto de entrada de la aplicación.
    - `App.test.js`: Este archivo es utilizado para escribir y ejecutar pruebas unitarias y de integración.
    - `index.css`: Este archivo es una hoja de estilo en cascada (CSS) que contiene estilos globales para tu aplicación.
    - `reportWebVital.js`: Este archivo es utilizado para medir y registrar el rendimiento de tu aplicación en el navegador.
    - `setupTests.js`: Este archivo se utiliza para configurar y personalizar el entorno de pruebas de la aplicación, como agregar configuraciones globales, importar bibliotecas de pruebas adicionales o definir funciones de utilidad para las pruebas.
- `public`: Contiene los archivos estáticos, como el archivo `index.html`.

## Despliegue

Para compilar la aplicación para producción, se ejecuta el siguiente comando:

compilación de ejecución de npm. Esto generará una carpeta `build` con los archivos estáticos optimizados para el despliegue.

## Contribuir

Si deseas contribuir al proyecto, crea una bifurcación (fork) del repositorio, realiza tus cambios y envía una solicitud de extracción (pull request).

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo `LICENSE` para obtener más información.

![ABOUT](https://github.com/Trycatch-tv/f1it2-team-10-Frontend/assets/122529721/2554bb7b-9d2e-4ccf-bdbb-7409025c8f7e)

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
