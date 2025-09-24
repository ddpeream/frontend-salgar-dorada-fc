# Sistema de Internacionalización (i18n)

Este sistema proporciona soporte completo para múltiples idiomas (Español e Inglés) en la aplicación Salgar Dorada FC.

## 🚀 Características

- **Detección automática de idioma** del navegador
- **Persistencia** del idioma seleccionado en localStorage
- **Tipado completo** con TypeScript
- **Componente selector** de idioma con animaciones
- **Hooks personalizados** para facilitar el uso
- **Contexto React** para gestión global
- **Utilidades** para formateo de fechas, números y texto
- **Soporte para interpolación** y pluralización

## 📁 Estructura

```
src/i18n/
├── index.ts                 # Configuración principal de i18next
├── types.ts                 # Tipos TypeScript
├── hooks.ts                 # Hooks personalizados
├── context.tsx              # Contexto React
├── utils.ts                 # Funciones utilitarias
├── i18n.ts                  # Exportaciones principales
├── react-i18next.d.ts       # Declaraciones de tipos
└── translations/
    ├── es.json              # Traducciones en español
    └── en.json              # Traducciones en inglés
```

## 🔧 Instalación y Configuración

### 1. Dependencias ya instaladas:
- `react-i18next`
- `i18next`
- `i18next-browser-languagedetector`

### 2. Configuración en `src/index.tsx`:
```typescript
import './i18n'; // Importar configuración de i18n
```

### 3. Envolver la aplicación con el provider (opcional):
```typescript
import { I18nProvider } from './i18n/context';

<I18nProvider>
  <App />
</I18nProvider>
```

## 📖 Uso Básico

### Hook useAppTranslation
```typescript
import { useAppTranslation } from '../i18n/hooks';

const MyComponent = () => {
  const { t, changeLanguage, currentLanguage } = useAppTranslation();
  
  return (
    <div>
      <h1>{t('home.title')}</h1>
      <p>{t('home.welcome')}</p>
      <button onClick={() => changeLanguage('en')}>
        English
      </button>
    </div>
  );
};
```

### Hook useT (solo traducción)
```typescript
import { useT } from '../i18n/hooks';

const SimpleComponent = () => {
  const t = useT();
  
  return <span>{t('common.loading')}</span>;
};
```

### Componente LanguageSelector
```typescript
import { LanguageSelector } from '../components/language-selector';

// En el header
<LanguageSelector position="header" />

// En el footer
<LanguageSelector position="footer" compact />

// Inline
<LanguageSelector position="inline" showLabels={false} />
```

## 🎨 Formateo de Datos

### Fechas y Tiempo
```typescript
import { formatDate, formatTime } from '../i18n/utils';
import { useAppTranslation } from '../i18n/hooks';

const DateComponent = () => {
  const { currentLanguage } = useAppTranslation();
  const date = new Date();
  
  return (
    <div>
      <p>Fecha: {formatDate(date, currentLanguage)}</p>
      <p>Hora: {formatTime(date, currentLanguage)}</p>
    </div>
  );
};
```

### Números
```typescript
import { formatNumber } from '../i18n/utils';

const price = formatNumber(1234.56, currentLanguage, {
  style: 'currency',
  currency: 'COP'
});
```

## 🔤 Claves de Traducción Disponibles

### Navegación
- `navigation.home` - "Inicio" / "Home"
- `navigation.players` - "Jugadores" / "Players"
- `navigation.matches` - "Partidos" / "Matches"
- `navigation.form` - "Registro" / "Registration"

### Autenticación
- `auth.login` - "Iniciar Sesión" / "Login"
- `auth.username` - "Usuario" / "Username"
- `auth.password` - "Contraseña" / "Password"

### Páginas principales
- `home.title` - "Salgar Dorada FC"
- `home.welcome` - "Bienvenido al Club" / "Welcome to the Club"
- `players.title` - "Jugadores" / "Players"
- `matches.title` - "Partidos" / "Matches"
- `form.title` - "Registro de Jugador" / "Player Registration"

### Acciones comunes
- `common.save` - "Guardar" / "Save"
- `common.cancel` - "Cancelar" / "Cancel"
- `common.loading` - "Cargando..." / "Loading..."
- `common.search` - "Buscar" / "Search"

### Tipos de documento
- `documentTypes.cc` - "Cédula de Ciudadanía" / "Citizenship Card"
- `documentTypes.passport` - "Pasaporte" / "Passport"

### Posiciones
- `positions.goalkeeper` - "Portero" / "Goalkeeper"
- `positions.defender` - "Defensor" / "Defender"
- `positions.midfielder` - "Centrocampista" / "Midfielder"
- `positions.forward` - "Delantero" / "Forward"

## 🎯 Implementación por Vista

### 1. Header/Navigation
```typescript
// En components/layout/header.tsx
const { t } = useAppTranslation();

<nav>
  <Link to="/">{t('navigation.home')}</Link>
  <Link to="/players">{t('navigation.players')}</Link>
  <Link to="/matches">{t('navigation.matches')}</Link>
  <LanguageSelector position="header" />
</nav>
```

### 2. Formularios
```typescript
// En pages/form/form.tsx
const { t } = useAppTranslation();

<form>
  <label>{t('form.firstName')}</label>
  <input placeholder={t('form.firstName')} />
  
  <button type="submit">{t('common.save')}</button>
  <button type="button">{t('common.cancel')}</button>
</form>
```

### 3. Listas y Tablas
```typescript
// En pages/players/players.tsx
const { t } = useAppTranslation();

<div>
  <h1>{t('players.title')}</h1>
  <input placeholder={t('players.search')} />
  
  <table>
    <thead>
      <tr>
        <th>{t('players.name')}</th>
        <th>{t('players.position')}</th>
        <th>{t('players.age')}</th>
      </tr>
    </thead>
  </table>
</div>
```

## 🔄 Flujo de Implementación Recomendado

1. **Empezar por Navigation/Header** - Cambiar enlaces de navegación
2. **Continuar con Home** - Textos principales y acciones
3. **Formularios** - Labels, placeholders, botones
4. **Listas/Players** - Títulos, búsqueda, tabla
5. **Matches** - Tabs, fechas, resultados
6. **Footer** - Textos informativos

## ✨ Características Avanzadas

### Interpolación
```typescript
// En las traducciones
"welcome": "¡Hola {{name}}!"

// En el componente
t('welcome', { name: 'Juan' })
```

### Pluralización
```typescript
// En las traducciones
"items": "{{count}} elemento",
"items_plural": "{{count}} elementos"

// En el componente
t('items', { count: 5 })
```

### Contextos anidados
```typescript
// Acceder a traducciones anidadas
t('form.validation.required')
t('matches.standings.position')
```

## 🚀 ¿Listo para implementar?

El sistema está completamente configurado y listo para usar. Solo necesitas:

1. **Importar el hook** `useAppTranslation` o `useT`
2. **Reemplazar strings hardcoded** con llamadas a `t('clave')`
3. **Agregar el LanguageSelector** donde sea necesario
4. **Usar las utilidades** para formateo de fechas/números

¡Todo está tipado y con autocompletado completo! 🎉