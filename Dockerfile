# Build stage
FROM node:20-alpine AS build
WORKDIR /app

COPY frontend/package*.json ./
RUN npm install

COPY frontend/ ./
RUN npm run build

# Runtime stage
FROM alpine:latest

RUN apk add --no-cache nginx wget \
    && mkdir -p /run/nginx \
    && rm -f /etc/nginx/http.d/default.conf

COPY nginx/default.conf /etc/nginx/http.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
