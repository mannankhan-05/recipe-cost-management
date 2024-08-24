# building the frontend
FROM node:18.19.1 as frontend-building

WORKDIR /app/frontend

COPY frontend/package*.json ./

RUN npm install 

COPY frontend/ .

# Expose port 8080 (default port for Vue.js)
EXPOSE 8080

# Start the frontend server
CMD ["npm", "run", "serve"]

# building the backend
FROM node:18.19.1 as backend-building

WORKDIR /app/backend

COPY backend/package*.json ./

RUN npm install

COPY backend/ .

# Expose port 3000 (default port for Node.js apps)
EXPOSE 3000

# Start the backend server
CMD ["npm", "start"]
