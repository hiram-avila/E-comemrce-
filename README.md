# 🚀 Arquitectura escalable  
- 🏗️ Sistema basado en microservicios independientes (📦 catálogo, 🛒 carrito, 💳 pagos, 👤 usuarios)  
- 📈 Diseñado para escalar horizontalmente bajo carga con auto-scaling de AWS  

## ☁️ Infraestructura en AWS  
- 🖥️ EC2 + ⚖️ Load Balancer para distribución de carga  
- 🗄️ Bases de datos distribuidas (🛢️ RDS MySQL + 🔹 DynamoDB para sesiones)  
- ⚡ Cache con ElastiCache (🔥 Redis)  
- 📬 Colas SQS para procesamiento asíncrono de pedidos  

## ⚡ Optimización de performance  
- ⏳ Tiempos de respuesta <500ms con 👥 10k usuarios concurrentes  
- 🌍 Implementación de CDN (🌐 CloudFront) para assets estáticos  
- 🏎️ Estrategias de cache a múltiples niveles  

## 🛡️ Resistencia a fallos  
- 🌍 Replicación multi-AZ para alta disponibilidad  
- 🛑 Circuit breakers en comunicaciones entre servicios  
- 🔄 Sistema de reintentos inteligente para transacciones  

## 🛠️ Tecnologías clave  
- 🖥️ Backend: Node.js (Express/NestJS) + 🐍 Python  
- 🎨 Frontend: React con SSR (⚡ Next.js)  
- 🏗️ Terraform para infraestructura como código  
- 🎛️ Kubernetes para orquestación de contenedores  

## ✅ Resultados  
- 💪 Resistió pruebas de carga de **50k solicitudes/minuto**  
- 📊 **99.98% uptime** en simulaciones de **Black Friday**  
- 💰 **Reducción de costos en 40%** mediante auto-scaling inteligente  
