# Build stage
FROM node:20.10-alpine as build

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build --verbose

# Staging
FROM nginx:1.21-alpine

COPY --from=build /app/dist /usr/share/nginx/html

# Copy NGINX configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]