# 🎵 Wavestore — Music Store / Tienda de Música

> **EN** Full-stack music store application built with React/TypeScript (frontend) and Laravel/PHP (backend), fully dockerized with CI/CD pipeline via Jenkins.
>
> **ES** Aplicación de tienda de música full-stack construida con React/TypeScript (frontend) y Laravel/PHP (backend), completamente dockerizada con pipeline CI/CD mediante Jenkins.

---

## 📁 Project Structure / Estructura del Proyecto

```
music-store-light-version/
├── wavestore-backend-light-version/
│   ├── app/                        # Laravel application logic
│   ├── database/
│   │   ├── migrations/             # Database migrations
│   │   └── seeders/                # Sample data seeders
│   ├── routes/
│   │   └── api.php                 # API routes
│   ├── Dockerfile                  # Production image
│   ├── Dockerfile.dev              # Development image
│   ├── entrypoint.sh               # Auto migrate + seed on startup
│   ├── .env.example                # Environment variables template
│   └── .dockerignore
├── wavestore-light-version-front/
│   ├── src/                        # React/TypeScript source code
│   ├── public/
│   ├── Dockerfile                  # Production image (multi-stage)
│   ├── Dockerfile.dev              # Development image (Vite server)
│   ├── .env.development            # Dev API URL
│   ├── .env.production             # Prod API URL
│   └── .dockerignore
├── nginx/
│   └── conf.d/
│       ├── frontend.conf           # Frontend virtual host
│       └── backend.conf            # Backend FastCGI config
├── Dockerfile.nginx
├── docker-compose.yml              # Production (4 services)
├── docker-compose.dev.yml          # Development (4 services + hot reload)
├── Jenkinsfile                     # CI/CD pipeline
└── scripts/
    └── deploy.sh                   # Manual deploy script
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 19 + TypeScript + Vite |
| Backend | Laravel 12 + PHP 8.3 |
| Database | MySQL 8.0 |
| Web Server | Nginx (Alpine) |
| Containerization | Docker + Docker Compose |
| CI/CD | Jenkins |

---

## ⚙️ Setup

### Prerequisites / Prerrequisitos

- Docker + Docker Compose
- Jenkins (optional / opcional)
- Master Nginx running / Master Nginx corriendo ([disenmix-music-store-CI-CD](https://github.com/starwalker-studio/disenmix-music-store-CI-CD))

### 1. Clone the repository / Clonar el repositorio

```bash
git clone https://github.com/starwalker-studio/wavestore-light-version-front.git
cd wavestore-light-version-front
```

### 2. Create environment file / Crear archivo de entorno

**EN** The `.env.docker` file is not included in the repository. Create it from the example:

**ES** El archivo `.env.docker` no está incluido en el repositorio. Créalo desde el ejemplo:

```bash
cp wavestore-backend-light-version/.env.example wavestore-backend-light-version/.env.docker
nano wavestore-backend-light-version/.env.docker
```

**EN** Minimum required values / **ES** Valores mínimos requeridos:

```env
APP_KEY=base64:your-key-here
APP_ENV=production
APP_DEBUG=false

DB_CONNECTION=mysql
DB_HOST=mysql
DB_PORT=3306
DB_DATABASE=wavestore_db
DB_USERNAME=root
DB_PASSWORD=your_password

MYSQL_ROOT_PASSWORD=your_password
MYSQL_DATABASE=wavestore_db
```

> **EN** Generate `APP_KEY` with: `php artisan key:generate --show`
>
> **ES** Genera el `APP_KEY` con: `php artisan key:generate --show`

### 3. Start the master proxy first / Levantar el proxy master primero

> ⚠️ **EN** Make sure [master-nginx](https://github.com/starwalker-studio/disenmix-music-store-CI-CD) is running before this project.
>
> ⚠️ **ES** Asegúrate de que [master-nginx](https://github.com/starwalker-studio/disenmix-music-store-CI-CD) esté corriendo antes que este proyecto.

### 4. Start production / Levantar producción

```bash
docker compose -f docker-compose.yml up -d --build
```

### 5. Start development / Levantar desarrollo

```bash
docker compose -f docker-compose.dev.yml up --build
```

**EN** Development runs with hot reload on:

**ES** Desarrollo corre con hot reload en:

- Frontend: `http://localhost:5173`
- API: `http://localhost:8000`

**EN** Production accessible via master proxy at:

**ES** Producción accesible vía proxy master en:

- Frontend: `http://app.music-store.local`
- API: `http://api.music-store.local`

---

## 🗄️ Database / Base de Datos

**EN** Migrations and seeders run automatically on container startup via `entrypoint.sh`. No manual setup required.

**ES** Las migraciones y seeders se ejecutan automáticamente al arrancar el contenedor mediante `entrypoint.sh`. No se requiere configuración manual.

---

## 📄 License / Licencia

MIT
