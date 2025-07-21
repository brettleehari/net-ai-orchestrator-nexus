# Simple single-stage build for local development
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install nginx for serving
RUN apk add --no-cache nginx curl

# Copy package files first (for better caching)
COPY package*.json ./

# Install all dependencies (including dev dependencies for local dev)
RUN npm install

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Copy nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Copy built files to nginx directory
RUN cp -r dist/* /usr/share/nginx/html/

# Copy startup script
COPY docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.sh

# Create required directories and set permissions
RUN mkdir -p /var/cache/nginx/client_temp && \
    mkdir -p /var/log/nginx && \
    mkdir -p /run/nginx && \
    chown -R nginx:nginx /var/cache/nginx && \
    chown -R nginx:nginx /var/log/nginx && \
    chown -R nginx:nginx /run/nginx && \
    chown -R nginx:nginx /usr/share/nginx/html

# Expose port
EXPOSE 8080

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD curl -f http://localhost:8080/health || exit 1

# Start nginx
ENTRYPOINT ["/docker-entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]
