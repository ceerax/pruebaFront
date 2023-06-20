# inicializar proyecto

npm install
npm start

# inicializar Base de datos local

en otra consola ejecutar

npm run server

# la comunicación de back-end estará asegurada, ¿cómo lo maneja?

Para asegurar la comunicación entre el front-end y el back-end, se utiliza HTTPS para encriptar la comunicación, y se emplean tokens de autenticación (como JWT) para validar la identidad del usuario en cada solicitud. Además, se implementan políticas de CORS y protecciones contra ataques comunes como CSRF y XSS.

# Qué stack tecnológico eliges? explicar con algunos detalles?

El stack tecnológico que elegi para desarrollar esta aplicación se basa en JavaScript, principalmente utilizando la librería React para el front-end y Node.js para el back-end. Aquí están algunos detalles:

    React.js: Es una librería de JavaScript para la construcción de interfaces de usuario de manera declarativa. Nos permite dividir la interfaz de usuario en componentes independientes y reutilizables. Además, con la ayuda de la arquitectura de un solo sentido de flujo de datos y el estado virtual del DOM, proporciona un rendimiento eficiente y hace que la aplicación sea altamente interactiva.

    Node.js: Es un entorno de ejecución de JavaScript que nos permite ejecutar código JavaScript en el servidor. Se utiliza para crear la lógica de back-end de la aplicación, manejar las solicitudes y respuestas HTTP, conectar con la base de datos y más.

    Express.js: Es un marco de aplicación web para Node.js, diseñado para construir aplicaciones web y APIs. Es minimalista, flexible y proporciona un conjunto robusto de características para las aplicaciones web y móviles.

    MongoDB: Es una base de datos NoSQL orientada a documentos. En lugar de almacenar los datos en tablas como se hace en las bases de datos relacionales, MongoDB almacena los datos en estructuras tipo BSON (una representación binaria de JSON) con un esquema dinámico, lo que lo hace muy flexible y escalable.

    Mongoose.js: Es una biblioteca de JavaScript que proporciona una solución de modelado de objetos para MongoDB. Esto nos ayuda a definir objetos con un conjunto fuertemente tipado de atributos que se pueden validar automáticamente antes de guardarlos en MongoDB.

    Axios: Es una biblioteca de JavaScript que utilizamos para hacer solicitudes HTTP desde el navegador al servidor. Tiene una API muy sencilla y soporta el estándar Promise API.

    Bootstrap: Es un marco de diseño de CSS que nos ayuda a diseñar rápidamente la interfaz de usuario de la aplicación. Proporciona una serie de estilos y componentes predefinidos que son responsivos y se ven bien en diferentes tamaños de pantalla.

Este stack es conocido como el stack MERN (MongoDB, Express.js, React.js, Node.js), que es ampliamente utilizado para el desarrollo de aplicaciones web de JavaScript de pila completa.
