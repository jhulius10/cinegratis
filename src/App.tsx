import { useState } from 'react';

type ContentType = 'Películas' | 'Series' | 'Anime' | 'Documentales' | 'En Vivo' | 'Dramas Asiáticos';
type Genre = 'Acción' | 'Comedia' | 'Drama' | 'Terror' | 'Ciencia Ficción' | 'Romance' | 'Thriller' | 'Animación' | 'Infantil' | 'Documental' | 'Deportes' | 'Noticias' | 'Musical' | 'Misterio' | 'Aventura';

interface Platform {
  id: string;
  name: string;
  description: string;
  url: string;
  logo: string;
  color: string;
  availableInPeru: boolean;
  requiresAccount: boolean;
  contentTypes: ContentType[];
  genres: Genre[];
  highlights: string[];
  adsSupported: boolean;
  deviceSupport: string[];
}

const platforms: Platform[] = [
  {
    id: 'pluto-tv',
    name: 'Pluto TV',
    description: 'Plataforma de streaming gratuita con canales en vivo y contenido bajo demanda. Propiedad de Paramount.',
    url: 'https://pluto.tv',
    logo: '📺',
    color: 'from-yellow-400 to-orange-500',
    availableInPeru: true,
    requiresAccount: false,
    contentTypes: ['Películas', 'Series', 'Anime', 'Documentales', 'En Vivo'],
    genres: ['Acción', 'Comedia', 'Drama', 'Terror', 'Ciencia Ficción', 'Thriller', 'Animación', 'Aventura'],
    highlights: ['+200 canales en vivo', 'Sin registro necesario', 'Contenido de Paramount, MTV, Nickelodeon'],
    adsSupported: true,
    deviceSupport: ['Web', 'Smart TV', 'Android', 'iOS', 'Fire TV', 'Roku']
  },
  {
    id: 'tubi',
    name: 'Tubi',
    description: 'Servicio de streaming gratuito con un amplio catálogo de películas y series de estudios como Lionsgate, MGM y Paramount.',
    url: 'https://tubitv.com',
    logo: '🎬',
    color: 'from-purple-500 to-indigo-600',
    availableInPeru: true,
    requiresAccount: false,
    contentTypes: ['Películas', 'Series'],
    genres: ['Acción', 'Comedia', 'Drama', 'Terror', 'Ciencia Ficción', 'Romance', 'Thriller', 'Misterio', 'Aventura'],
    highlights: ['+50,000 títulos', 'Contenido de Lionsgate y MGM', 'Estrenos gratuitos'],
    adsSupported: true,
    deviceSupport: ['Web', 'Smart TV', 'Android', 'iOS', 'Fire TV', 'Roku', 'Xbox']
  },
  {
    id: 'vix',
    name: 'ViX',
    description: 'Plataforma de streaming en español de TelevisaUnivision con contenido latinoamericano, telenovelas y producciones originales.',
    url: 'https://www.vix.com',
    logo: '🌟',
    color: 'from-blue-500 to-cyan-400',
    availableInPeru: true,
    requiresAccount: true,
    contentTypes: ['Películas', 'Series', 'En Vivo', 'Documentales'],
    genres: ['Drama', 'Comedia', 'Romance', 'Thriller', 'Acción', 'Documental'],
    highlights: ['Contenido 100% en español', 'Telenovelas y series latinas', 'Noticias y deportes en vivo'],
    adsSupported: true,
    deviceSupport: ['Web', 'Smart TV', 'Android', 'iOS', 'Fire TV', 'Roku']
  },
  {
    id: 'mercado-play',
    name: 'Mercado Play',
    description: 'Servicio de streaming gratuito integrado en Mercado Libre. Ofrece películas y series sin costo adicional.',
    url: 'https://www.mercadolibre.com.pe',
    logo: '🛒',
    color: 'from-yellow-400 to-yellow-600',
    availableInPeru: true,
    requiresAccount: true,
    contentTypes: ['Películas', 'Series'],
    genres: ['Acción', 'Comedia', 'Drama', 'Terror', 'Ciencia Ficción', 'Romance', 'Thriller', 'Animación'],
    highlights: ['Integrado en Mercado Libre', 'Sin costo adicional', 'Películas de Hollywood'],
    adsSupported: true,
    deviceSupport: ['Web', 'Android', 'iOS', 'Smart TV']
  },
  {
    id: 'runtime',
    name: 'Runtime',
    description: 'Plataforma de streaming gratuita con películas, series y canales en vivo enfocada en el mercado latinoamericano.',
    url: 'https://runtimeservice.com',
    logo: '🎞️',
    color: 'from-red-500 to-pink-500',
    availableInPeru: true,
    requiresAccount: false,
    contentTypes: ['Películas', 'Series', 'En Vivo'],
    genres: ['Acción', 'Comedia', 'Drama', 'Terror', 'Romance', 'Thriller', 'Aventura'],
    highlights: ['Canales temáticos en vivo', 'Sin registro necesario', 'Catálogo internacional'],
    adsSupported: true,
    deviceSupport: ['Web', 'Smart TV', 'Android', 'iOS']
  },
  {
    id: 'plex',
    name: 'Plex',
    description: 'Plataforma de medios que ofrece streaming gratuito con películas, series y TV en vivo, además de permitir organizar tu propia biblioteca.',
    url: 'https://www.plex.tv',
    logo: '▶️',
    color: 'from-amber-500 to-orange-600',
    availableInPeru: true,
    requiresAccount: true,
    contentTypes: ['Películas', 'Series', 'Documentales', 'En Vivo'],
    genres: ['Acción', 'Comedia', 'Drama', 'Terror', 'Ciencia Ficción', 'Thriller', 'Documental', 'Animación'],
    highlights: ['TV en vivo gratuita', 'Biblioteca personal de medios', 'Contenido de Lionsgate y Warner'],
    adsSupported: true,
    deviceSupport: ['Web', 'Smart TV', 'Android', 'iOS', 'Fire TV', 'Roku', 'Xbox', 'PlayStation']
  },
  {
    id: 'crunchyroll',
    name: 'Crunchyroll',
    description: 'La plataforma líder mundial en anime. Ofrece un catálogo gratuito con anuncios de series animadas japonesas.',
    url: 'https://www.crunchyroll.com',
    logo: '🍥',
    color: 'from-orange-500 to-red-500',
    availableInPeru: true,
    requiresAccount: true,
    contentTypes: ['Anime'],
    genres: ['Acción', 'Comedia', 'Drama', 'Ciencia Ficción', 'Romance', 'Aventura', 'Misterio'],
    highlights: ['Mayor catálogo de anime', 'Simulcast (estrenos simultáneos)', 'Manga digital'],
    adsSupported: true,
    deviceSupport: ['Web', 'Smart TV', 'Android', 'iOS', 'Fire TV', 'Roku', 'Xbox', 'PlayStation']
  },
  {
    id: 'rakuten-viki',
    name: 'Rakuten Viki',
    description: 'Plataforma especializada en dramas asiáticos (coreanos, japoneses, chinos) con subtítulos en múltiples idiomas.',
    url: 'https://www.viki.com',
    logo: '🌸',
    color: 'from-green-400 to-teal-500',
    availableInPeru: true,
    requiresAccount: true,
    contentTypes: ['Dramas Asiáticos', 'Series'],
    genres: ['Drama', 'Romance', 'Comedia', 'Acción', 'Misterio', 'Ciencia Ficción'],
    highlights: ['Dramas coreanos, japoneses y chinos', 'Subtítulos comunitarios', 'Contenido exclusivo'],
    adsSupported: true,
    deviceSupport: ['Web', 'Smart TV', 'Android', 'iOS', 'Fire TV', 'Roku']
  },
  {
    id: 'youtube-free',
    name: 'YouTube (Películas Gratis)',
    description: 'YouTube ofrece una sección de películas gratuitas con publicidad, además de contenido de creadores independientes.',
    url: 'https://www.youtube.com/feed/storefront?bp=ogUCKAQ%3D',
    logo: '📹',
    color: 'from-red-500 to-red-700',
    availableInPeru: true,
    requiresAccount: false,
    contentTypes: ['Películas', 'Series', 'Documentales'],
    genres: ['Acción', 'Comedia', 'Drama', 'Terror', 'Ciencia Ficción', 'Documental', 'Animación'],
    highlights: ['Películas de estudios reconocidos', 'Contenido de creadores', 'Sin registro para ver'],
    adsSupported: true,
    deviceSupport: ['Web', 'Smart TV', 'Android', 'iOS', 'Fire TV', 'Roku', 'Xbox', 'PlayStation']
  },
  {
    id: 'samsung-tv-plus',
    name: 'Samsung TV Plus',
    description: 'Servicio de streaming gratuito exclusivo para dispositivos Samsung con canales en vivo y contenido bajo demanda.',
    url: 'https://www.samsung.com/us/tv-plus/',
    logo: '📱',
    color: 'from-blue-600 to-blue-800',
    availableInPeru: true,
    requiresAccount: false,
    contentTypes: ['Películas', 'Series', 'En Vivo', 'Documentales'],
    genres: ['Acción', 'Comedia', 'Drama', 'Noticias', 'Deportes', 'Documental'],
    highlights: ['Exclusivo Samsung', 'Canales en vivo', 'Sin registro'],
    adsSupported: true,
    deviceSupport: ['Samsung Smart TV', 'Web']
  },
  {
    id: 'rtve-play',
    name: 'RTVE Play',
    description: 'Plataforma de la televisión pública española con series, películas, documentales y contenido cultural gratuito.',
    url: 'https://www.rtve.es/play/',
    logo: '🇪🇸',
    color: 'from-red-600 to-yellow-500',
    availableInPeru: true,
    requiresAccount: true,
    contentTypes: ['Películas', 'Series', 'Documentales', 'En Vivo'],
    genres: ['Drama', 'Comedia', 'Documental', 'Musical', 'Misterio', 'Thriller'],
    highlights: ['Series españolas exclusivas', 'Documentales de alta calidad', 'Sin anuncios'],
    adsSupported: false,
    deviceSupport: ['Web', 'Android', 'iOS', 'Smart TV']
  },
  {
    id: 'filmzie',
    name: 'Filmzie',
    description: 'Plataforma de streaming gratuita con películas independientes y de estudios reconocidos. Apoya al cine independiente.',
    url: 'https://filmzie.com',
    logo: '🎭',
    color: 'from-emerald-500 to-green-700',
    availableInPeru: true,
    requiresAccount: false,
    contentTypes: ['Películas'],
    genres: ['Drama', 'Comedia', 'Terror', 'Thriller', 'Romance', 'Misterio', 'Aventura'],
    highlights: ['Cine independiente', 'Películas de estudios', 'Sin registro necesario'],
    adsSupported: true,
    deviceSupport: ['Web', 'Android', 'iOS', 'Smart TV']
  },
];

const allGenres: Genre[] = ['Acción', 'Comedia', 'Drama', 'Terror', 'Ciencia Ficción', 'Romance', 'Thriller', 'Animación', 'Infantil', 'Documental', 'Deportes', 'Noticias', 'Musical', 'Misterio', 'Aventura'];
const allContentTypes: ContentType[] = ['Películas', 'Series', 'Anime', 'Documentales', 'En Vivo', 'Dramas Asiáticos'];

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | 'Todos'>('Todos');
  const [selectedContentType, setSelectedContentType] = useState<ContentType | 'Todos'>('Todos');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'platforms' | 'genres' | 'content'>('platforms');

  const filteredPlatforms = platforms.filter(platform => {
    const matchesGenre = selectedGenre === 'Todos' || platform.genres.includes(selectedGenre);
    const matchesContent = selectedContentType === 'Todos' || platform.contentTypes.includes(selectedContentType);
    const matchesSearch = searchTerm === '' || 
      platform.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      platform.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      platform.genres.some(g => g.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesGenre && matchesContent && matchesSearch;
  });

  const platformsByGenre: Record<string, Platform[]> = {};
  allGenres.forEach(genre => {
    const matching = platforms.filter(p => p.genres.includes(genre));
    if (matching.length > 0) platformsByGenre[genre] = matching;
  });

  const platformsByContentType: Record<string, Platform[]> = {};
  allContentTypes.forEach(type => {
    const matching = platforms.filter(p => p.contentTypes.includes(type));
    if (matching.length > 0) platformsByContentType[type] = matching;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 via-blue-900/50 to-indigo-900/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-12 sm:py-16">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-yellow-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent mb-4">
              🎬 Streaming Gratuito en Perú
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Guía completa de plataformas <span className="text-green-400 font-semibold">100% legales y gratuitas</span> para ver películas y series sin pagar suscripción.
            </p>
            <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-400">
              <span className="inline-flex items-center gap-1 bg-green-900/50 text-green-300 px-3 py-1 rounded-full">
                ✅ Todas disponibles en Perú
              </span>
              <span className="inline-flex items-center gap-1 bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full">
                🆓 Sin costo
              </span>
              <span className="inline-flex items-center gap-1 bg-purple-900/50 text-purple-300 px-3 py-1 rounded-full">
                ⚖️ 100% Legal
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Filters */}
      <section className="max-w-7xl mx-auto px-4 py-6">
        <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
          {/* Search */}
          <div className="mb-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar plataforma, género o contenido..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-gray-700/50 border border-gray-600 rounded-xl px-5 py-3 pl-12 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              />
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
            </div>
          </div>

          {/* View Mode Tabs */}
          <div className="flex flex-wrap gap-2 mb-4">
            <button
              onClick={() => setViewMode('platforms')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                viewMode === 'platforms'
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              📺 Por Plataforma
            </button>
            <button
              onClick={() => setViewMode('genres')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                viewMode === 'genres'
                  ? 'bg-pink-600 text-white shadow-lg shadow-pink-600/30'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              🎭 Por Género
            </button>
            <button
              onClick={() => setViewMode('content')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                viewMode === 'content'
                  ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-600/30'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              🎬 Por Tipo de Contenido
            </button>
          </div>

          {/* Filters Row */}
          <div className="flex flex-wrap gap-3">
            <div className="flex-1 min-w-[200px]">
              <label className="text-xs text-gray-400 mb-1 block">Filtrar por Género</label>
              <select
                value={selectedGenre}
                onChange={(e) => setSelectedGenre(e.target.value as Genre | 'Todos')}
                className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="Todos">Todos los géneros</option>
                {allGenres.map(genre => (
                  <option key={genre} value={genre}>{genre}</option>
                ))}
              </select>
            </div>
            <div className="flex-1 min-w-[200px]">
              <label className="text-xs text-gray-400 mb-1 block">Filtrar por Tipo</label>
              <select
                value={selectedContentType}
                onChange={(e) => setSelectedContentType(e.target.value as ContentType | 'Todos')}
                className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="Todos">Todos los tipos</option>
                {allContentTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 pb-16">
        {viewMode === 'platforms' && (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredPlatforms.map(platform => (
              <PlatformCard key={platform.id} platform={platform} />
            ))}
          </div>
        )}

        {viewMode === 'genres' && (
          <div className="space-y-8">
            {Object.entries(platformsByGenre).map(([genre, plats]) => (
              <div key={genre}>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                    🎭 {genre}
                  </span>
                  <span className="text-sm text-gray-400 font-normal">({plats.length} plataformas)</span>
                </h2>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {plats.map(platform => (
                    <PlatformCard key={platform.id} platform={platform} compact />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {viewMode === 'content' && (
          <div className="space-y-8">
            {Object.entries(platformsByContentType).map(([type, plats]) => (
              <div key={type}>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    🎬 {type}
                  </span>
                  <span className="text-sm text-gray-400 font-normal">({plats.length} plataformas)</span>
                </h2>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {plats.map(platform => (
                    <PlatformCard key={platform.id} platform={platform} compact />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {filteredPlatforms.length === 0 && viewMode === 'platforms' && (
          <div className="text-center py-16">
            <p className="text-6xl mb-4">🔍</p>
            <p className="text-xl text-gray-400">No se encontraron plataformas con esos filtros</p>
            <button
              onClick={() => { setSelectedGenre('Todos'); setSelectedContentType('Todos'); setSearchTerm(''); }}
              className="mt-4 px-6 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Limpiar filtros
            </button>
          </div>
        )}
      </main>

      {/* Summary Table */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 overflow-x-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">
            📊 Tabla Comparativa Completa
          </h2>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-3 px-2 text-gray-300">Plataforma</th>
                <th className="text-left py-3 px-2 text-gray-300">Perú</th>
                <th className="text-left py-3 px-2 text-gray-300">Tipo de Contenido</th>
                <th className="text-left py-3 px-2 text-gray-300">Géneros</th>
                <th className="text-left py-3 px-2 text-gray-300">Registro</th>
                <th className="text-left py-3 px-2 text-gray-300">Anuncios</th>
              </tr>
            </thead>
            <tbody>
              {platforms.map(platform => (
                <tr key={platform.id} className="border-b border-gray-700/50 hover:bg-gray-700/30 transition-colors">
                  <td className="py-3 px-2">
                    <span className="mr-2">{platform.logo}</span>
                    <span className="font-medium">{platform.name}</span>
                  </td>
                  <td className="py-3 px-2">
                    {platform.availableInPeru ? (
                      <span className="text-green-400">✅ Sí</span>
                    ) : (
                      <span className="text-red-400">❌ No</span>
                    )}
                  </td>
                  <td className="py-3 px-2">
                    <div className="flex flex-wrap gap-1">
                      {platform.contentTypes.map(type => (
                        <span key={type} className="bg-blue-900/50 text-blue-300 text-xs px-2 py-0.5 rounded-full">
                          {type}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="py-3 px-2">
                    <div className="flex flex-wrap gap-1">
                      {platform.genres.slice(0, 4).map(genre => (
                        <span key={genre} className="bg-purple-900/50 text-purple-300 text-xs px-2 py-0.5 rounded-full">
                          {genre}
                        </span>
                      ))}
                      {platform.genres.length > 4 && (
                        <span className="text-gray-400 text-xs">+{platform.genres.length - 4}</span>
                      )}
                    </div>
                  </td>
                  <td className="py-3 px-2">
                    {platform.requiresAccount ? (
                      <span className="text-yellow-400">📝 Requerido</span>
                    ) : (
                      <span className="text-green-400">🆓 No necesario</span>
                    )}
                  </td>
                  <td className="py-3 px-2">
                    {platform.adsSupported ? (
                      <span className="text-orange-400">📢 Con anuncios</span>
                    ) : (
                      <span className="text-green-400">✨ Sin anuncios</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-700/50 py-8 text-center text-gray-400 text-sm">
        <p className="mb-2">
          💡 Todas las plataformas listadas son <span className="text-green-400">legales</span> y ofrecen contenido <span className="text-green-400">gratuito</span>.
        </p>
        <p>
          La disponibilidad puede variar. Algunos contenidos pueden requerir registro gratuito o estar sujetos a anuncios.
        </p>
        <p className="mt-2 text-gray-500">
          Información actualizada para Perú 🇵🇪 | 2026
        </p>
      </footer>
    </div>
  );
}

function PlatformCard({ platform, compact = false }: { platform: Platform; compact?: boolean }) {
  return (
    <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden hover:border-gray-500/50 transition-all hover:shadow-xl hover:shadow-purple-900/10 group">
      {/* Gradient Header */}
      <div className={`bg-gradient-to-r ${platform.color} p-4`}>
        <div className="flex items-center gap-3">
          <span className="text-3xl">{platform.logo}</span>
          <div>
            <h3 className="text-lg font-bold text-white">{platform.name}</h3>
            {platform.availableInPeru && (
              <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full text-white">
                ✅ Disponible en Perú
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {!compact && (
          <p className="text-gray-300 text-sm mb-4 leading-relaxed">{platform.description}</p>
        )}

        {/* Content Types */}
        <div className="mb-3">
          <span className="text-xs text-gray-400 uppercase tracking-wide">Tipo de contenido:</span>
          <div className="flex flex-wrap gap-1 mt-1">
            {platform.contentTypes.map(type => (
              <span key={type} className="bg-blue-900/40 text-blue-300 text-xs px-2 py-0.5 rounded-full border border-blue-700/30">
                {type}
              </span>
            ))}
          </div>
        </div>

        {/* Genres */}
        <div className="mb-3">
          <span className="text-xs text-gray-400 uppercase tracking-wide">Géneros:</span>
          <div className="flex flex-wrap gap-1 mt-1">
            {platform.genres.map(genre => (
              <span key={genre} className="bg-purple-900/40 text-purple-300 text-xs px-2 py-0.5 rounded-full border border-purple-700/30">
                {genre}
              </span>
            ))}
          </div>
        </div>

        {/* Highlights */}
        {!compact && platform.highlights.length > 0 && (
          <div className="mb-3">
            <span className="text-xs text-gray-400 uppercase tracking-wide">Destacados:</span>
            <ul className="mt-1 space-y-1">
              {platform.highlights.map((h, i) => (
                <li key={i} className="text-xs text-gray-300 flex items-start gap-1">
                  <span className="text-yellow-400 mt-0.5">★</span> {h}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Badges */}
        <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-gray-700/50">
          {platform.requiresAccount ? (
            <span className="text-xs bg-yellow-900/30 text-yellow-300 px-2 py-1 rounded-md">📝 Registro gratuito</span>
          ) : (
            <span className="text-xs bg-green-900/30 text-green-300 px-2 py-1 rounded-md">🆓 Sin registro</span>
          )}
          {platform.adsSupported ? (
            <span className="text-xs bg-orange-900/30 text-orange-300 px-2 py-1 rounded-md">📢 Con anuncios</span>
          ) : (
            <span className="text-xs bg-green-900/30 text-green-300 px-2 py-1 rounded-md">✨ Sin anuncios</span>
          )}
        </div>

        {/* Devices */}
        {!compact && (
          <div className="mt-3">
            <span className="text-xs text-gray-400 uppercase tracking-wide">Dispositivos:</span>
            <div className="flex flex-wrap gap-1 mt-1">
              {platform.deviceSupport.map(device => (
                <span key={device} className="text-xs text-gray-400 bg-gray-700/50 px-2 py-0.5 rounded">
                  {device}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Link */}
        <a
          href={platform.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-4 inline-flex items-center gap-2 text-sm font-medium bg-gradient-to-r ${platform.color} bg-clip-text text-transparent hover:opacity-80 transition-opacity`}
        >
          Visitar {platform.name} →
        </a>
      </div>
    </div>
  );
}

export default App;
