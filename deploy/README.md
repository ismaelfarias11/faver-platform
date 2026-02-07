# FaVer Platform — Deploy en VPS con EasyPanel

Este repo es un **monorepo (Turborepo)** con múltiples apps Next.js dentro de `apps/` y paquetes compartidos en `packages/`.
El despliegue se hace con **EasyPanel + Docker Compose**, construyendo desde la raíz del repo para que funcionen los imports de paquetes internos (ej: `@repo/ui`).

## Estructura
- `apps/hub`       → Sitio principal (FaVer)
- `apps/kronos3d`  → Sitio de Kronos3D
- `apps/waiter-ai` → Web chat / IA mesero
- `packages/*`     → Paquetes compartidos (UI, configs, etc.)
- `deploy/`        → Archivos de despliegue (compose y esta documentación)

## Puertos internos (container)
- `hub`      → 3000
- `kronos3d` → 3000
- `waiter-ai`→ 3002

> Importante: en EasyPanel, el dominio debe apuntar al **puerto interno correcto**.

## Deploy en EasyPanel (paso a paso)
1. Crear un nuevo servicio: **Compose (BETA)**
2. Fuente: **GitHub**
   - Owner: `ismaelfarias11`
   - Repo: `faver-platform`
   - Branch: `main`
3. **Ruta de compilación**: `/deploy`
4. Archivo: `docker-compose.yml`
5. Implementar

## Configuración de dominios en EasyPanel
En la sección **Dominios**, crear cada dominio apuntando al servicio y puerto interno:

- `faver.cl` → `http://hub:3000/`
- `kronos3d.faver.cl` → `http://kronos3d:3000/`
- `mesero.faver.cl` → `http://waiter-ai:3002/`

> Nota: si EasyPanel renombra servicios internamente (ej: `faver_hub`), usa el nombre que aparezca en la interfaz.

## Variables de entorno (recomendado)
No subir `.env` al repo para producción. Configurar en EasyPanel → Entorno.

### waiter-ai (Prisma / DB)
Si `waiter-ai` usa Prisma con BD externa, definir:
- `DATABASE_URL=...`

Ejemplo Postgres:
`postgresql://USER:PASSWORD@HOST:5432/DBNAME?schema=public`

## Actualizaciones
- Hacer `git push` a `main`
- En EasyPanel: redeploy / implementar nuevamente

## Troubleshooting
### Error: Can't resolve '@repo/ui/...'
Causa: el build se está ejecutando desde `apps/waiter-ai` y no ve `packages/`.
Solución: build desde raíz usando `deploy/docker-compose.yml` con `context: ..`.

### El dominio apunta a :80 y no carga
Causa: el servicio escucha en otro puerto (ej: 3002).
Solución: en Dominios, apuntar al puerto correcto (waiter-ai → 3002).

### Prisma no conecta
Revisar `DATABASE_URL` y que el host sea accesible desde la red Docker/EasyPanel.
