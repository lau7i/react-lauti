# Mi E-commerce React

¡Bienvenido a mi proyecto de e-commerce, construido con React y potenciado con las últimas tecnologías para ofrecer una experiencia de compra moderna y fluida!

---

## 🚀 Funcionalidades Destacadas

Este proyecto de comercio electrónico incluye las siguientes características clave:

- **Filtrado por Categoría:** Explora productos fácilmente filtrando por diversas categorías para encontrar exactamente lo que buscas.
- **Detalles del Producto:** Cada producto tiene su propia página de detalles, donde puedes ver información ampliada, imágenes y descripciones.
- **Gestión de Carrito de Compras:**
  - **Añadir al Carrito:** Agrega tus productos favoritos con un solo clic.
  - **Modificar Cantidad:** Ajusta la cantidad de cada producto directamente en el carrito.
  - **Eliminar del Carrito:** Quita productos que ya no deseas comprar.
- **Proceso de Finalizar Compra:** Un flujo de compra guiado para ingresar tus datos y confirmar tu pedido.
- **Creación de Orden de Compra:** Generación de un número de orden único al finalizar la compra para un seguimiento sencillo.

---

## 🛠️ Tecnologías Utilizadas

Este proyecto fue desarrollado utilizando las siguientes herramientas y librerías clave:

- **React:** Una librería de JavaScript para construir interfaces de usuario interactivas.
  - [Documentación de React](https://react.dev/learn)
- **Tailwind CSS:** Un framework CSS "utility-first" para construir rápidamente diseños personalizados.
  - [Documentación de Tailwind CSS](https://tailwindcss.com/docs)
- **React Router :** Librería para gestionar la navegación y las rutas de tu aplicación React de forma declarativa.
  - [Documentación de React Router](https://reactrouter.com/en/main)
- **Firebase:** Una plataforma de Google para el desarrollo de aplicaciones móviles y web, utilizada aquí para:
  - **Firestore:** Base de datos NoSQL en la nube para almacenar datos de productos y órdenes.
  - [Documentación de Firebase](https://firebase.google.com/docs)
  - [Documentación de Cloud Firestore](https://firebase.google.com/docs/firestore)

---

## 📦 Cómo Iniciar el Proyecto (Instalación y Uso)

Sigue estos pasos para levantar el proyecto en tu entorno local:

1.  **Clonar el repositorio:**
    ```bash
    git clone [URL_DE_TU_REPOSITORIO]
    cd [nombre-de-tu-proyecto]
    ```
2.  **Instalar dependencias:**
    ```bash
    npm install
    # o si usas yarn
    yarn install
    ```
3.  **Configurar Firebase:**
    - Crea un proyecto en [Firebase Console](https://console.firebase.google.com/).
    - Crea una aplicación web y copia tus credenciales de configuración.
    - Crea un archivo `.env.local` en la raíz de tu proyecto (si no existe) y agrega tus credenciales:
      ```
      VITE_FIREBASE_API_KEY=tu_api_key
      VITE_FIREBASE_AUTH_DOMAIN=tu_auth_domain
      VITE_FIREBASE_PROJECT_ID=tu_project_id
      VITE_FIREBASE_STORAGE_BUCKET=tu_storage_bucket
      VITE_FIREBASE_MESSAGING_SENDER_ID=tu_messaging_sender_id
      VITE_FIREBASE_APP_ID=tu_app_id
      ```
    - Asegúrate de configurar las reglas de seguridad de Firestore para permitir lecturas y escrituras iniciales si estás poblando la base de datos.
4.  **Ejecutar el proyecto:**
    ```bash
    npm run dev
    # o si usas yarn
    yarn dev
    ```
    Esto iniciará el servidor de desarrollo y abrirá la aplicación en tu navegador (generalmente en `http://localhost:5173/`).

---

## 📄 Estructura del Proyecto

src/
├── components/ # Componentes reutilizables (Item, ItemList, Navbar, CheckoutForm, etc.)
├── context/ # Contextos de React (CartContext)
├── pages/ # Vistas principales (Home, Cart, Checkout, ItemDetailContainer)
├── firebase/ # Configuración de Firebase y funciones de base de datos
├── db/ # Archivos de datos locales (e.g., data.json)
├── App.jsx # Componente principal y enrutamiento
└── main.jsx # Punto de entrada de la aplicación

---

## 📚 Scripts Disponibles

En el directorio del proyecto, puedes ejecutar:

- **`npm run dev`** o **`yarn dev`**: Inicia el servidor de desarrollo en modo React.
- **`npm run build`** o **`yarn build`**: Compila la aplicación para producción en la carpeta `dist`.
- **`npm run preview`** o **`yarn preview`**: Sirve el build de producción localmente para previsualización.

---

## 💡 Contribuciones

¡Las contribuciones son bienvenidas! Si encuentras errores o tienes sugerencias de mejora, no dudes en abrir un _issue_ o enviar un _pull request_.

---

## ✍️ Autor

Desarrollado por [Lautaro Iribarría]

---
