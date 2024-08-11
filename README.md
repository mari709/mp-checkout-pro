# Mercado Pago checkout PRO 2.0.11
Este proyecto es una aplicación web que permite realizar pagos utilizando Mercado Pago. Implementa un flujo de pago básico que crea una preferencia de pago en el servidor y la procesa en el frontend. Una preferencia en Mercado Pago es un conjunto de parámetros que define cómo se debe procesar un pago. Contiene detalles sobre lo que se está comprando, las condiciones de la compra, y cómo se debe manejar el proceso de pago. 


## Estructura del Proyecto

- **`server/`**: Contiene el código del servidor que maneja la creación de preferencias de pago.
- **`client/`**: Contiene el frontend de la aplicación.
- **`node_modules/`**: Directorio de dependencias (ignorado en Git).
- **`.env`**: Archivo de configuración de variables de entorno (ignorado en Git).
- **`README.md`**: Este archivo.

  ## Requisitos
- Node js
- Cuenta de desarrollador de Mercado pago. Desde la cuenta de desarrollador se necesita crear 2 cuentas de prueba: una para hacer pago y otra para recibir. Se accede a una de las cuentas y se crea una aplicación con el producto a integrar. Luego se usa las credenciales productivas de la aplicación creada (de prueba). Se accede con la otra cuenta para simular una compra.
  ## Instalación
1. **Clonar el proyecto**
2. **Instalar las dependencias**
```jsx
npm install mercadopago express cors dotenv
```
3. **Configurar variables de entorno:**
   Crea un archivo .env y definir la variable para el access token
   
```jsx
   MERCADO_PAGO_ACCESS_TOKEN=tu_access_token_aqui
```

4. **Una vez configurado, inicia el servidor con el siguiente comando:**

```jsx
node server/index.js

```
El servidor se ejecutará en http://localhost:3000.

