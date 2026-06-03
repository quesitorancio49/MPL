# Mapeo de Estilos — MAQUIPRO

## 🎨 Paleta de Colores

### Colores del Tema (CSS Custom Properties)

Definidos en `src/styles/theme.css` — modo oscuro por defecto (root).

| Token | Light / Root | Dark |
|-------|-------------|------|
| `--background` | `#0e0e0e` | `oklch(0.145 0 0)` |
| `--foreground` | `#f0ede8` | `oklch(0.985 0 0)` |
| `--primary` | **`#f5b800`** (dorado) | `oklch(0.985 0 0)` |
| `--primary-foreground` | `#0e0e0e` | `oklch(0.205 0 0)` |
| `--secondary` | `#1f1f1f` | `oklch(0.269 0 0)` |
| `--secondary-foreground` | `#f0ede8` | `oklch(0.985 0 0)` |
| `--accent` | **`#f5b800`** (dorado) | `oklch(0.269 0 0)` |
| `--accent-foreground` | `#0e0e0e` | `oklch(0.985 0 0)` |
| `--muted` | `#2a2a2a` | `oklch(0.269 0 0)` |
| `--muted-foreground` | `#9a9a8a` | `oklch(0.708 0 0)` |
| `--destructive` | `#d4183d` (rojo) | `oklch(...)` |
| `--destructive-foreground` | `#ffffff` | `oklch(...)` |
| `--border` | `rgba(255,255,255,0.1)` | `oklch(0.269 0 0)` |
| `--input-background` | `#1f1f1f` | — |
| `--switch-background` | `#3a3a3a` | — |
| `--card` | `#1c1e28` | `oklch(0.145 0 0)` |
| `--popover` | `#1a1a1a` | `oklch(0.145 0 0)` |
| `--ring` | `oklch(0.708 0 0)` | `oklch(0.439 0 0)` |
| `--radius` | `0.625rem` | igual |
| `--sidebar` | `oklch(0.985 0 0)` | `oklch(0.205 0 0)` |

### 🌐 Uso en Componentes (colores hardcodeados)

Colores usados directamente en `className` de los componentes (`src/app/components/`).

| Color | Uso | Secciones |
|-------|-----|-----------|
| **`#f5b800`** | Dorado — color primario de marca. Fondos, textos, bordes, CTAs, íconos, acentos, rings, badges. | **Todas** (Hero, Navbar, ValueProps, Machinery, About, Contact, Footer, WhatsAppFloat) |
| **`#0e0e0e`** | Casi negro — fondos oscuros, texto sobre dorado, overlays gradient. | Hero, Navbar, ValueProps, Machinery, About, Contact |
| **`#f0ede8`** | Blanco cálido — texto sobre fondo oscuro. | Variable `--foreground` |
| **`#c8c0b0`** | Beige claro — texto descriptivo. | Hero, Navbar |
| **`#9a9a8a`** | Gris cálido — texto muted, etiquetas, descripciones secundarias. | Hero, ValueProps, Machinery, Footer |
| **`#1a1a1a`** | Gris muy oscuro — texto sobre fondos claros, hover de botones. | About, Contact, ValueProps |
| **`#555`** | Gris medio — texto de cuerpo. | About, Footer |
| **`#666`** | Gris medio — texto secundario. | Contact |
| **`#888`** | Gris claro — etiquetas, texto de aviso. | Contact |
| **`#bbb`** | Gris muy claro — placeholders. | Contact |
| **`#f5f0e8`** | Crema claro — fondos de secciones (About, Contact). | About, Contact |
| **`#2a2520`** | Marrón oscuro — fondo de sección ValueProps. | ValueProps |
| **`#352f27`** | Marrón más claro — hover de cards. | ValueProps |
| **`#0f1319`** | Azul grisáceo oscuro — fondo de sección Machinery. | Machinery |
| **`#090909`** | Casi negro — fondo del Footer. | Footer |
| **`#ffc900`** | Amarillo brillante — hover de botones primarios. | Hero, Navbar |
| **`#25D366`** | Verde WhatsApp — botón flotante y footer. | Footer, WhatsAppFloat |
| **`#1ebe5c`** | Verde oscuro — hover del botón WhatsApp. | Footer, WhatsAppFloat |
| **`#d4cfc8`** | Beige/gris — bordes de inputs y selects. | Contact |
| **`#d4183d`** | Rojo — color destructivo/error. | Variable `--destructive` |

---

## 🖋️ Tipografía

### Fuentes (Google Fonts)

Archivo: `src/styles/fonts.css`

```css
@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,400;0,600;0,700;0,800;1,700&family=Barlow:wght@400;500;600&display=swap');
```

| Familia | Pesos | Uso |
|---------|-------|-----|
| **Barlow** | 400 (normal), 500 (medium), 600 (semibold) | Texto de cuerpo, párrafos, labels |
| **Barlow Condensed** | 400, 600, 700, 800, italic 700 | Títulos, headings, botones, textos destacados |

### Tamaños de fuente base

Definidos en `theme.css` `@layer base`:

| Elemento | Font Size | Font Weight |
|----------|-----------|-------------|
| `html` | `var(--font-size)` = `16px` | — |
| `h1` | `var(--text-2xl)` | medium (500) |
| `h2` | `var(--text-xl)` | medium (500) |
| `h3` | `var(--text-lg)` | medium (500) |
| `h4` | `var(--text-base)` | medium (500) |
| `label` | `var(--text-base)` | medium (500) |
| `button` | `var(--text-base)` | medium (500) |
| `input` | `var(--text-base)` | normal (400) |

---

## 📐 Radios y Bordes

| Token | Valor |
|-------|-------|
| `--radius` | `0.625rem` (10px) |
| `--radius-sm` | `calc(0.625rem - 4px)` = `0.375rem` (6px) |
| `--radius-md` | `calc(0.625rem - 2px)` = `0.5rem` (8px) |
| `--radius-lg` | `0.625rem` (10px) |
| `--radius-xl` | `calc(0.625rem + 4px)` = `1.0625rem` (17px) |

---

## 🧱 Arquitectura de Estilos

```
src/styles/
├── index.css          → Entry point (importa todos)
├── fonts.css          → Google Fonts (Barlow + Barlow Condensed)
├── tailwind.css       → Tailwind 4 + tw-animate-css
└── theme.css          → CSS custom properties + @theme inline + @layer base
```

- **Tailwind 4** con configuración CSS-first (sin `tailwind.config.js`).
- Las variables CSS se mapean a utilities de Tailwind via `@theme inline` (ej. `bg-primary`, `text-primary`).
- Los componentes NO usan las variables CSS — usan valores hardcodeados como `bg-[#f5b800]`.

---

## 📦 Componentes y sus Secciones

| Componente | Archivo | Sección en Landing |
|------------|---------|-------------------|
| Navbar | `Navbar.tsx` | Navegación superior + menú mobile |
| Hero | `Hero.tsx` | Hero principal con stats |
| ValueProps | `ValueProps.tsx` | Propuesta de valor + cards + CTA |
| Machinery | `Machinery.tsx` | Catálogo de maquinaria con filtros |
| About | `About.tsx` | Quiénes somos + checklist |
| Contact | `Contact.tsx` | Formulario de contacto + datos |
| Footer | `Footer.tsx` | Footer completo + WhatsApp |
| WhatsAppFloat | `WhatsAppFloat.tsx` | Botón flotante de WhatsApp |
