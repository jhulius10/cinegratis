# 🎬 Streaming Gratuito en Perú

> Directorio interactivo de plataformas legales y gratuitas para ver películas y series sin suscripción, disponible en Perú.

![React](https://img.shields.io/badge/React-18.2-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-6.x-purple?logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.x-38bdf8?logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-green)

## 📋 Descripción

Aplicación web single-page (SPA) que centraliza información sobre plataformas de streaming **100% legales y gratuitas** disponibles en Perú. Permite a los usuarios filtrar y explorar contenido por plataforma, género y tipo de contenido, con información detallada sobre disponibilidad, requisitos de registro y compatibilidad de dispositivos.

## ✨ Características

### Funcionalidades

- 🔍 **Búsqueda en tiempo real** — Filtra plataformas por nombre, descripción o género
- 🏷️ **Filtros combinables** — Por género (15 categorías) y tipo de contenido (6 categorías)
- 📊 **Tres modos de visualización:**
  - **Por Plataforma** — Cards individuales con información completa
  - **Por Género** — Agrupación por categorías de contenido
  - **Por Tipo de Contenido** — Organización por formato (Películas, Series, Anime, etc.)
- 📱 **Diseño responsive** — Adaptable a móvil, tablet y desktop
- 📋 **Tabla comparativa** — Vista consolidada de todas las plataformas con métricas clave
- 🔗 **Enlaces directos** — Acceso rápido a cada plataforma

### Plataformas Incluidas

| Plataforma | Tipo | Registro | Anuncios |
|-----------|------|----------|----------|
| Pluto TV | Películas, Series, Anime, Docs | ❌ No | ✅ Sí |
| Tubi | Películas, Series | ❌ No | ✅ Sí |
| ViX | Películas, Series, En Vivo | ✅ Sí | ✅ Sí |
| Mercado Play | Películas, Series | ✅ Sí | ✅ Sí |
| Runtime | Películas, Series, En Vivo | ❌ No | ✅ Sí |
| Plex | Películas, Series, Docs, En Vivo | ✅ Sí | ✅ Sí |
| Crunchyroll | Anime | ✅ Sí | ✅ Sí |
| Rakuten Viki | Dramas Asiáticos | ✅ Sí | ✅ Sí |
| YouTube (Gratis) | Películas, Series, Docs | ❌ No | ✅ Sí |
| Samsung TV Plus | Películas, Series, En Vivo | ❌ No | ✅ Sí |
| RTVE Play | Películas, Series, Docs | ✅ Sí | ❌ No |
| Filmzie | Películas | ❌ No | ✅ Sí |

## 🛠️ Stack Tecnológico

```
Frontend:
├── React 18.2          — UI framework
├── TypeScript 5.x      — Type safety
├── Vite 6.x            — Build tool & dev server
├── TailwindCSS 4.x     — Utility-first CSS
└── React Hooks         — State management (useState)

Tooling:
├── @vitejs/plugin-react — React Fast Refresh
├── @tailwindcss/vite    — Tailwind integration
└── tsc                  — Type checking
```

## 📁 Estructura del Proyecto

```
streaming-gratuito-peru/
├── public/                  # Static assets
├── src/
│   ├── App.tsx             # Componente principal con lógica de filtrado
│   ├── main.tsx            # Entry point de React
│   └── index.css           # Estilos globales + Tailwind imports
├── index.html              # HTML template
├── vite.config.js          # Configuración de Vite
├── tsconfig.json           # Configuración de TypeScript
├── package.json            # Dependencias y scripts
└── README.md               # Este archivo
```

## 🚀 Instalación y Uso

### Prerrequisitos

- Node.js >= 18.x
- npm >= 9.x

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/streaming-gratuito-peru.git
cd streaming-gratuito-peru

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Verificar tipos TypeScript
npm run typecheck
```

El servidor de desarrollo estará disponible en `http://localhost:3000`.

## 🏗️ Arquitectura

### Modelo de Datos

```typescript
interface Platform {
  id: string;              // Identificador único (slug)
  name: string;            // Nombre de la plataforma
  description: string;     // Descripción breve
  url: string;             // URL oficial
  logo: string;            // Emoji/icono representativo
  color: string;           // Gradiente Tailwind para branding
  availableInPeru: boolean; // Disponibilidad geográfica
  requiresAccount: boolean; // Si requiere registro
  contentTypes: ContentType[]; // Tipos de contenido disponibles
  genres: Genre[];         // Géneros soportados
  highlights: string[];    // Características destacadas
  adsSupported: boolean;   // Si incluye publicidad
  deviceSupport: string[]; // Plataformas/dispositivos compatibles
}
```

### Componentes

| Componente | Responsabilidad |
|-----------|----------------|
| `App` | Estado global, filtros, renderizado condicional por modo de vista |
| `PlatformCard` | Renderizado de tarjeta individual con variantes compact/complete |

### Estado

La aplicación usa `useState` de React para gestionar:

- `selectedGenre` — Filtro de género activo
- `selectedContentType` — Filtro de tipo de contenido activo
- `searchTerm` — Texto de búsqueda
- `viewMode` — Modo de visualización (platforms | genres | content)

## 🎨 Diseño

- **Tema:** Dark mode con gradientes
- **Paleta:** Grises oscuros con acentos en púrpura, cyan, rosa y amarillo
- **Layout:** Grid responsive (1/2/3 columnas según breakpoint)
- **Tipografía:** System fonts para performance
- **Animaciones:** Transiciones CSS en hover y cambios de estado

## 📦 Build Output

```
dist/
├── index.html          (3.22 kB → 1.40 kB gzip)
├── assets/
│   ├── index-*.css     (33.69 kB → 5.85 kB gzip)
│   └── index-*.js      (163.59 kB → 50.91 kB gzip)
```

Total bundle: ~58 kB gzipped.

## 🔧 Extensibilidad

### Agregar una nueva plataforma

Edita el array `platforms` en `src/App.tsx` añadiendo un nuevo objeto:

```typescript
{
  id: 'nueva-plataforma',
  name: 'Nombre de la Plataforma',
  description: 'Descripción breve',
  url: 'https://plataforma.com',
  logo: '🎬',
  color: 'from-blue-500 to-purple-500',
  availableInPeru: true,
  requiresAccount: false,
  contentTypes: ['Películas', 'Series'],
  genres: ['Acción', 'Drama'],
  highlights: ['Característica 1', 'Característica 2'],
  adsSupported: true,
  deviceSupport: ['Web', 'Android', 'iOS']
}
```

### Agregar géneros o tipos

Actualiza los arrays `allGenres` y `allContentTypes` con los nuevos valores. Los tipos están definidos como uniones de TypeScript para type safety.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para contribuir:

1. Fork el repositorio
2. Crea una rama feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Add: nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Ver [LICENSE](LICENSE) para más detalles.

## ⚠️ Disclaimer

Este proyecto es únicamente informativo. No aloja ni distribuye contenido protegido por derechos de autor. Todas las plataformas listadas son servicios legales que ofrecen contenido gratuito con sus respectivos modelos de monetización (publicidad, registro, etc.). La disponibilidad del contenido puede variar según la región y el momento.

---

<div align="center">

Hecho con ❤️ para la comunidad de streaming en Perú 🇵🇪

</div>
