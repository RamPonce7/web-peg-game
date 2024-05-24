# Usa una imagen de Node como base
FROM node:18

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia el package.json y el package-lock.json a /app
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia todos los archivos del proyecto a /app
COPY . .


#ENV variables


ENV VITE_API_URL=http://localhost:3030/api/v1/

# Construye la aplicación React
RUN npm run build

# Exponer el puerto 8080
EXPOSE 3030

# Comando para ejecutar la aplicación cuando se ejecute el contenedor
CMD ["npm", "run", "preview"]