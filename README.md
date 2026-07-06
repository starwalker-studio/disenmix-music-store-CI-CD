# 🚦 Master Nginx — Reverse Proxy / Proxy Inverso Central

> **EN** Central reverse proxy that manages all projects running in Docker containers through a single entry point on port 80.
>
> **ES** Proxy inverso central que gestiona todos los proyectos corriendo en contenedores Docker a través de un único punto de entrada en el puerto 80.

---

## 🏗️ Architecture / Arquitectura

```
                        Browser / Navegador
                               ↓ :80
                    ┌─────────────────────┐
                    │     nginx-master     │
                    │  (reverse proxy)     │
                    └──────────┬──────────┘
                               │
              proxy-network (shared Docker network)
              ┌────────────────┼────────────────┐
              ↓                ↓                ↓
   app.music-store.local   api.music-store.local   app.realty-catalog.local
              ↓                ↓                ↓
   wavestore-website-prod  wavestore-nginx-prod  realty-catalog-website-prod
                               ↓
                         laravel-app
                               ↓
                             mysql
```

---

## 📁 Project Structure / Estructura del Proyecto

```
master-nginx/
├── nginx/
│   └── conf.d/
│       ├── wavestore.conf          # Rules for music store / Reglas para tienda de música
│       └── realty.conf             # Rules for realty catalog / Reglas para catálogo inmobiliario
├── docker-compose.yml              # Master Nginx service
├── Dockerfile.nginx                # Nginx image build
├── Jenkinsfile                     # CI/CD pipeline
└── README.md
```

---

## 🔗 Related Repositories / Repositorios Relacionados

| Project / Proyecto | Repository / Repositorio |
|---|---|
| 🎵 Wavestore (Music Store) | [wavestore-light-version-front](https://github.com/starwalker-studio/wavestore-light-version-front) |
| 🏠 Realty Catalog | [realty-catalog-website](https://github.com/starwalker-studio/realty-catalog-website) |

---

## ⚙️ Setup

### Prerequisites / Prerrequisitos

- Docker + Docker Compose
- Jenkins (optional for CI/CD / opcional para CI/CD)

### 1. Clone the repository / Clonar el repositorio

```bash
git clone https://github.com/starwalker-studio/disenmix-music-store-CI-CD.git
cd disenmix-music-store-CI-CD
```

### 2. Add domains to /etc/hosts / Agregar dominios al /etc/hosts

**EN** Add the following lines to your `/etc/hosts` file:

**ES** Agrega las siguientes líneas a tu archivo `/etc/hosts`:

```
127.0.0.1    app.music-store.local
127.0.0.1    api.music-store.local
127.0.0.1    app.realty-catalog.local
```

> **EN** On a remote server, replace `127.0.0.1` with the server's IP address (e.g. `192.168.1.78`).
>
> **ES** En un servidor remoto, reemplaza `127.0.0.1` por la IP real del servidor (ej: `192.168.1.78`).

### 3. Start the master / Levantar el master

> ⚠️ **EN** This service must be started **first** before any other project, since it creates the shared `proxy-network` network.
>
> ⚠️ **ES** Este servicio debe levantarse **primero** antes que cualquier otro proyecto, ya que es quien crea la red compartida `proxy-network`.

```bash
docker compose up -d --build
```

### 4. Start the other projects / Levantar los demás proyectos

**EN** Once the master is running, start the other projects in any order:

**ES** Una vez que el master esté corriendo, levanta los demás proyectos en cualquier orden:

```bash
# Music Store / Tienda de música
cd ../wavestore-light-version-front
docker compose -f docker-compose.yml up -d --build

# Realty Catalog / Catálogo inmobiliario
cd ../realty-catalog-website
docker compose -f docker-compose.yml up -d --build
```

---

## 🔒 Environment Variables / Variables de Entorno

**EN** Each project that requires a backend (Laravel) needs its own `.env.docker` file inside its backend folder. This file is **not included in the repository** for security reasons.

**ES** Cada proyecto que requiera un backend (Laravel) necesita su propio archivo `.env.docker` dentro de su carpeta de backend. Este archivo **no está incluido en el repositorio** por seguridad.

**EN** Create it based on the `.env.example` file of each project:

**ES** Créalo basándote en el archivo `.env.example` de cada proyecto:

```bash
cp wavestore-backend-light-version/.env.example wavestore-backend-light-version/.env.docker
```

**EN** Minimum required values:

**ES** Valores mínimos requeridos:

```env
APP_KEY=base64:your-key-here
APP_ENV=production
APP_DEBUG=false

DB_CONNECTION=mysql
DB_HOST=mysql
DB_PORT=3306
DB_DATABASE=your_database_name
DB_USERNAME=root
DB_PASSWORD=your_password
```

> **EN** Generate `APP_KEY` with: `php artisan key:generate --show`
>
> **ES** Genera el `APP_KEY` con: `php artisan key:generate --show`

---

## 🧩 Adding a New Project / Agregar un Nuevo Proyecto

**EN** To add a new project to the master proxy:

**ES** Para agregar un nuevo proyecto al proxy master:

1. **EN** Create a new `.conf` file in `nginx/conf.d/` / **ES** Crear un nuevo `.conf` en `nginx/conf.d/`:

```nginx
server {
    listen 80;
    server_name app.new-project.local;

    location / {
        proxy_pass http://new-project-container:80;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

2. **EN** Add the domain to `/etc/hosts` / **ES** Agregar el dominio al `/etc/hosts`:
```
127.0.0.1    app.new-project.local
```

3. **EN** Rebuild the master / **ES** Reconstruir el master:
```bash
docker compose up -d --build
```

4. **EN** Make sure the new project uses `proxy-network` as external network / **ES** Asegurarse de que el nuevo proyecto use `proxy-network` como red externa:
```yaml
networks:
  proxy-network:
    external: true
```

---

## 🛠️ Tech Stack

- **Nginx** (Alpine)
- **Docker** + **Docker Compose**
- **Jenkins** (CI/CD)

---

## 📄 License / Licencia

MIT
