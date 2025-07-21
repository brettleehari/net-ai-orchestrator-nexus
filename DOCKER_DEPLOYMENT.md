# Dual Intelligence Autonomous Network Operator - Docker Deployment Guide

## 🐳 Docker Deployment Instructions

### Prerequisites
- Docker Engine 20.10+
- Docker Compose 2.0+
- At least 2GB RAM available
- Port 8080 available (or modify as needed)

### Quick Start

1. **Clone and build the application:**
```bash
# Build the Docker image
docker build -t dual-intelligence-app .

# Or use docker-compose
docker-compose up -d
```

2. **Access the application:**
- Main app: http://localhost:8080
- Health check: http://localhost:8080/health

### Deployment Options

#### Option 1: Single Container (Recommended for development)
```bash
# Build and run
docker build -t dual-intelligence-app .
docker run -d \
  --name dual-intelligence-network-operator \
  -p 8080:8080 \
  --restart unless-stopped \
  dual-intelligence-app
```

#### Option 2: Docker Compose (Recommended for production)
```bash
# Start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

#### Option 3: With Reverse Proxy (For production with SSL)
```bash
# Start with nginx proxy
docker-compose --profile proxy up -d
```

### Environment Configuration

Copy and modify the environment file:
```bash
cp .env.docker .env
# Edit .env with your specific configuration
```

### Directory Structure
```
/workspaces/net-ai-orchestrator-nexus/
├── Dockerfile                 # Multi-stage build configuration
├── docker-compose.yml        # Complete orchestration setup
├── nginx.conf                # Nginx configuration for the app
├── nginx-proxy.conf          # Reverse proxy configuration
├── docker-entrypoint.sh      # Container startup script
├── .dockerignore             # Files to exclude from Docker context
├── .env.docker               # Environment variables template
└── DOCKER_DEPLOYMENT.md      # This file
```

### Container Features

#### Security
- ✅ Non-root user execution
- ✅ Security headers configured
- ✅ Rate limiting enabled
- ✅ Minimal attack surface
- ✅ Health checks included

#### Performance
- ✅ Multi-stage build (smaller image)
- ✅ Nginx optimizations
- ✅ Gzip compression enabled
- ✅ Static asset caching
- ✅ Connection keep-alive

#### Monitoring
- ✅ Health check endpoint (/health)
- ✅ Structured logging
- ✅ Resource usage optimization
- ✅ Graceful shutdowns

### Advanced Configuration

#### SSL/TLS Setup (Production)
1. Place your SSL certificates in `./ssl/` directory:
   - `cert.pem` - SSL certificate
   - `key.pem` - Private key

2. Enable the proxy profile:
```bash
docker-compose --profile proxy up -d
```

#### Custom Domain Setup
Update `nginx-proxy.conf` and replace `server_name _;` with your domain:
```nginx
server_name yourdomain.com www.yourdomain.com;
```

#### Resource Limits
Add resource constraints in docker-compose.yml:
```yaml
services:
  dual-intelligence-app:
    deploy:
      resources:
        limits:
          cpus: '2.0'
          memory: 1G
        reservations:
          cpus: '0.5'
          memory: 512M
```

### Maintenance Commands

#### View Logs
```bash
# Application logs
docker logs dual-intelligence-network-operator -f

# All services logs
docker-compose logs -f
```

#### Update Application
```bash
# Rebuild and restart
docker-compose down
docker-compose build --no-cache
docker-compose up -d
```

#### Backup Data (if using Redis)
```bash
docker exec dual-intelligence-redis redis-cli BGSAVE
docker cp dual-intelligence-redis:/data/dump.rdb ./backup/
```

#### Health Monitoring
```bash
# Check container health
docker ps
docker inspect dual-intelligence-network-operator | grep Health

# Manual health check
curl http://localhost:8080/health
```

### Troubleshooting

#### Container Won't Start
```bash
# Check logs
docker logs dual-intelligence-network-operator

# Check nginx configuration
docker exec dual-intelligence-network-operator nginx -t
```

#### Port Already in Use
```bash
# Find what's using port 8080
lsof -i :8080

# Use different port
docker run -p 3000:8080 dual-intelligence-app
```

#### Permission Issues
```bash
# Check if running as nginx user
docker exec dual-intelligence-network-operator whoami

# Verify file permissions
docker exec dual-intelligence-network-operator ls -la /usr/share/nginx/html
```

### Performance Tuning

#### For High Traffic
Update nginx.conf:
```nginx
worker_processes auto;
worker_connections 2048;
keepalive_timeout 30;
```

#### For Low Memory Environments
```bash
# Use smaller base image
FROM nginx:alpine-slim
```

### Security Hardening

#### Additional Security Headers
Add to nginx.conf:
```nginx
add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline'";
add_header Permissions-Policy "geolocation=(), microphone=(), camera=()";
```

#### Network Security
```bash
# Create custom network
docker network create --driver bridge dual-intelligence-net

# Run with custom network
docker run --network dual-intelligence-net dual-intelligence-app
```

### Scaling

#### Horizontal Scaling
```yaml
services:
  dual-intelligence-app:
    deploy:
      replicas: 3
  
  nginx-lb:
    image: nginx:alpine
    # Configure load balancing
```

#### Using Docker Swarm
```bash
# Initialize swarm
docker swarm init

# Deploy stack
docker stack deploy -c docker-compose.yml dual-intelligence
```

### Integration with CI/CD

#### GitHub Actions Example
```yaml
- name: Build and push Docker image
  run: |
    docker build -t ${{ secrets.REGISTRY }}/dual-intelligence-app:${{ github.sha }} .
    docker push ${{ secrets.REGISTRY }}/dual-intelligence-app:${{ github.sha }}
```

#### Kubernetes Deployment
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: dual-intelligence-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: dual-intelligence-app
  template:
    spec:
      containers:
      - name: app
        image: dual-intelligence-app:latest
        ports:
        - containerPort: 8080
```

---

## 📞 Support

For deployment issues:
1. Check logs: `docker logs dual-intelligence-network-operator`
2. Verify health: `curl http://localhost:8080/health`
3. Review configuration files
4. Check system resources: `docker stats`

---

**Image Size:** ~50MB (compressed)  
**Memory Usage:** ~128MB (typical)  
**Startup Time:** ~10 seconds  
**Health Check:** Available at `/health`
