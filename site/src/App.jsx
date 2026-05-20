import React, { useState, useEffect, useRef } from 'react';
import { 
  Heart, 
  Calendar, 
  Clock, 
  Sparkles, 
  MessageCircle, 
  Image as ImageIcon, 
  Volume2, 
  VolumeX, 
  ChevronLeft, 
  ChevronRight, 
  X, 
  Check, 
  Flame, 
  Compass, 
  Bookmark, 
  Share2, 
  MoreHorizontal,
  Menu
} from 'lucide-react';

const IMAGES = [
  { url: "/Fotos/WhatsApp Image 2026-05-20 at 11.43.36.jpeg", desc: "Olhar cúmplice e sorrisos leves" },
  { url: "/Fotos/WhatsApp Image 2026-05-20 at 11.43.37.jpeg", desc: "O SIM! O nosso beijo no dia do pedido de namoro — 15 de Outubro de 2025 💍" },
  { url: "/Fotos/WhatsApp Image 2026-05-20 at 11.43.38.jpeg", desc: "Mais uma madrugada inteira nossa" },
  { url: "/Fotos/WhatsApp Image 2026-05-20 at 11.43.50.jpeg", desc: "Aquele sorriso que clareia o meu dia" },
  { url: "/Fotos/WhatsApp Image 2026-05-20 at 11.43.50 (1).jpeg", desc: "O teu abraço é o meu lugar seguro" },
  { url: "/Fotos/WhatsApp Image 2026-05-20 at 11.43.50 (2).jpeg", desc: "Elegantes e prontos para o mundo" },
  { url: "/Fotos/WhatsApp Image 2026-05-20 at 11.43.50 (3).jpeg", desc: "Cumplicidade refletida no espelho" },
  { url: "/Fotos/WhatsApp Image 2026-05-20 at 11.43.50 (4).jpeg", desc: "Minha parceira em todos os momentos" },
  { url: "/Fotos/WhatsApp Image 2026-05-20 at 11.43.50 (5).jpeg", desc: "De mãos dadas, a caminhar juntos" },
  { url: "/Fotos/WhatsApp Image 2026-05-20 at 11.43.54.jpeg", desc: "O céu azul testemunha o nosso amor" },
  { url: "/Fotos/WhatsApp Image 2026-05-20 at 11.43.55.jpeg", desc: "Viagem e carinho sem pressa" },
  { url: "/Fotos/WhatsApp Image 2026-05-20 at 11.43.55 (1).jpeg", desc: "No topo do mundo, contigo ao meu lado" },
  { url: "/Fotos/WhatsApp Image 2026-05-20 at 11.43.55 (2).jpeg", desc: "Pés descalços, conforto e cumplicidade no carro" },
  { url: "/Fotos/WhatsApp Image 2026-05-20 at 11.43.56.jpeg", desc: "Manhãs preguiçosas e cheias de dengo" },
  { url: "/Fotos/WhatsApp Image 2026-05-20 at 11.43.56 (1).jpeg", desc: "Duas metades que se completam" },
  { url: "/Fotos/WhatsApp Image 2026-05-20 at 11.43.58.jpeg", desc: "Vestidos de amor e sintonia" },
  { url: "/Fotos/WhatsApp Image 2026-05-20 at 11.43.58 (1).jpeg", desc: "Brilhas mais do que qualquer luz" },
  { url: "/Fotos/WhatsApp Image 2026-05-20 at 11.43.58 (2).jpeg", desc: "Olhando juntos na mesma direção" },
  { url: "/Fotos/WhatsApp Image 2026-05-20 at 11.43.58 (3).jpeg", desc: "Admirando o que construímos juntos" },
  { url: "/Fotos/WhatsApp Image 2026-05-20 at 11.43.58 (4).jpeg", desc: "Sorriso cúmplice num dia especial" },
  { url: "/Fotos/WhatsApp Image 2026-05-20 at 11.43.58 (5).jpeg", desc: "Sorriso radiante ao ar livre" },
  { url: "/Fotos/WhatsApp Image 2026-05-20 at 11.43.58 (6).jpeg", desc: "Sempre juntos, lado a lado" },
  { url: "/Fotos/WhatsApp Image 2026-05-20 at 11.43.59.jpeg", desc: "Silhouette ao pôr do sol" },
  { url: "/Fotos/WhatsApp Image 2026-05-20 at 11.43.59 (1).jpeg", desc: "Pôr do sol dourado e o nosso abraço eterno" }
];

const LETTERS = [
  {
    num: "mensagem 01",
    title: "A Abertura",
    text: `Sabe, talvez isso seja apenas uma simples galeria digital. Mas para mim, isso é metade de nós. São 7 meses guardados aqui, momentos que eu nunca quero esquecer, sorrisos que mudaram o meu mundo, e uma história que começou sem avisar e tomou conta de tudo.

Desde que te conheci, no dia 2 de agosto de 2025, numa caminhada simples que eu jamais imaginei que mudaria a minha vida, tudo mudou. A forma como eu acordo, a forma como eu sorrio, a forma como eu enxergo o futuro. Tu entraste na minha vida sem pedir licença e de repente eu me vi querendo coisas que nunca tinha querido antes. Querer viver. Querer construir. Querer casar. Querer ser teu para sempre.

Lembras do HuamboExpress? Tu ias viajar e eu fui lá só para te abraçar. Ainda não eras minha namorada, mas aquele abraço já me dizia tudo. Eu senti coisas que jurei que nunca sentiria. E quando voltaste e eu te pedi para seres minha namorada, e tu disseste que sim, Jurema, eu percebi que Deus é mesmo muito bom comigo.

Não te prometo perfeição. Mas prometo presença. Prometo orar por ti. Prometo lutar para ser um homem de Deus, um homem bom, um homem que fica. Não importa a situação, não importa o que a vida trouxer, eu vou estar aqui contigo.

Tu és a melhor coisa que me aconteceu. E eu agradeço a Deus todos os dias por aquela caminhada, por aquele dia, por ti.

Felizes 7 meses, meu amor. Eu te amo.`,
    signature: "Telmo",
    photo: "/Fotos/WhatsApp Image 2026-05-20 at 11.43.59.jpeg",
    label: "A eternidade do nosso horizonte — Pôr do Sol"
  },
  {
    num: "mensagem 02",
    title: "O primeiro olhar",
    text: `Eu não acredito em coincidências. Acredito que Deus coloca as pessoas certas no caminho certo, na hora certa. E tu foste colocada no meu caminho de um jeito tão simples, tão natural, que parecia que o universo inteiro tinha conspirado para aquele momento.

Quando te vi pela primeira vez, não foi um coração acelerado, não foi um filme romântico. Foi algo mais profundo do que isso. Foi uma paz. Uma certeza quieta que disse: ela é a resposta para uma pergunta que eu ainda não sabia que tinha.

Eu vi-te e soube. Soube que queria acordar todos os dias e saber que tu estás bem. Soube que queria ser o motivo do teu sorriso. Soube que queria construir algo bonito contigo.

E aqui estamos. 7 meses depois, e essa certeza só cresceu.`,
    signature: "Telmo",
    photo: "/Fotos/WhatsApp Image 2026-05-20 at 11.43.54.jpeg",
    label: "Aquele primeiro brilho no olhar"
  },
  {
    num: "mensagem 03",
    title: "O que tu és para mim",
    text: `Jurema, tu és a pessoa que me fez entender o que é amar de verdade.

Não o amor dos filmes, não o amor das músicas bonitas. O amor real. Aquele que aparece nas conversas de madrugada, naquele silêncio confortável que não precisa de palavras, naquele abraço que diz tudo que a boca não consegue.

Tu és a pessoa que me faz querer ser melhor, não por pressão, mas por gratidão. Porque alguém como tu merece o melhor de mim, e eu quero te dar isso. Todos os dias. Sem parar.

Tu és o meu lar, Jurema. Não um lugar, uma pessoa. E há coisa mais linda do que isso?`,
    signature: "Telmo",
    photo: "/Fotos/WhatsApp Image 2026-05-20 at 11.43.50 (1).jpeg",
    label: "Nosso abraço apertado"
  },
  {
    num: "mensagem 04",
    title: "Fé e amor",
    text: `Eu oro por ti, Jurema. Não porque é bonito dizer isso, mas porque é verdade. Porque tu és importante demais para mim para não levar ao Pai.

Peço a Deus que te guarde. Que te abençoe em tudo que tocas. Que os teus sonhos se tornem realidade. Que tu nunca fiques sem sentir que és amada, porque tu és, imensamente.

E peço também que Ele me faça digno de ti. Que me transforme num homem de caráter, de fé, de palavra. Um homem que não te falha, que não te abandona, que está sempre do teu lado.

Porque tu mereces um amor que seja também uma oração. E é exatamente isso que eu quero te dar.`,
    signature: "Telmo",
    photo: "/Fotos/WhatsApp Image 2026-05-20 at 11.43.58.jpeg",
    label: "Abençoados e guiados lado a lado"
  },
  {
    num: "mensagem 05",
    title: "As madrugadas",
    text: `Lembras das nossas noites conversando? Aquelas horas que passavam rápido demais, onde a gente falava de tudo e de nada, onde o tempo parecia não existir?

Foram nessas noites que eu me apaixonei por ti de verdade. Não pelo que eu imaginava que eras, mas por quem tu és de verdade. Pelos teus pensamentos, pelas tuas histórias, pela forma como vês o mundo.

Eu aprendi a amar a madrugada porque ela te trazia de volta para mim. E aprendi que o melhor lugar do mundo era qualquer lugar onde eu pudesse ler as tuas palavras e sentir que não estava sozinho.

Obrigado por cada noite dessas. Foram as melhores da minha vida.`,
    signature: "Telmo",
    photo: "/Fotos/WhatsApp Image 2026-05-20 at 11.43.38.jpeg",
    label: "Conversas e cumplicidade no silêncio da noite"
  },
  {
    num: "mensagem 06",
    title: "Promessa",
    text: `Não te vou prometer que nunca vou errar. Porque sou humano, e vou errar. Mas prometo que quando errar, vou ter humildade de reconhecer, de pedir desculpa, de tentar de novo.

Prometo que vou crescer contigo, não apesar de ti. Que vou aprender a amar-te melhor a cada dia. Que nunca vou tratar o teu amor como garantido, porque sei que és um presente que não mereci, mas que recebi com o coração inteiro.

Prometo estar. Nas manhãs difíceis, nas noites longas, nos momentos de glória e nos momentos de queda. Prometo que o teu nome vai continuar na minha boca, no meu coração e nas minhas orações.

Para sempre, Jurema. É isso que eu te prometo.`,
    signature: "Telmo",
    photo: "/Fotos/WhatsApp Image 2026-05-20 at 11.43.58 (4).jpeg",
    label: "Uma promessa para toda a vida"
  },
  {
    num: "mensagem 07",
    title: "O 15 de outubro",
    text: `Dia 15 de outubro de 2025.

Eu não sei se tu sabes o quanto esse dia significa para mim. Foi o dia em que tu disseste sim. Foi o dia em que eu me tornei o homem mais feliz de Angola, talvez do mundo inteiro.

Antes desse dia, eu era alguém que gostava de ti em silêncio, que sonhava acordado, que ensaiava palavras que nunca conseguia dizer. E quando finalmente te pedi, e tu disseste sim, Jurema, algo em mim se encaixou. Como se aquela peça que sempre faltou finalmente tivesse chegado.

Obrigado por teres dito sim. Obrigado por teres escolhido mim. Eu não paro de ser grato por isso.`,
    signature: "Telmo",
    photo: "/Fotos/WhatsApp Image 2026-05-20 at 11.43.37.jpeg",
    label: "O SIM! Dia do Pedido de Namoro 💍❤️"
  },
  {
    num: "mensagem 08",
    title: "Profunda",
    text: `Há pessoas que passam pela nossa vida como vento. Chegam, mexem em tudo, e vão embora deixando apenas o rastro.

E há pessoas que chegam e ficam. Não porque são perfeitas, mas porque são certas. Porque algo nelas ressoa com algo em nós de um jeito que não tem explicação racional.

Tu és essa pessoa para mim, Jurema.

Tu não chegaste para preencher um vazio. Tu chegaste para mostrar que havia uma profundidade em mim que eu não sabia que existia. Que eu era capaz de amar assim, de sentir assim, de querer assim.

Tu não me completaste. Tu revelaste quem eu já era, mas que precisava de alguém como tu para despertar.`,
    signature: "Telmo",
    photo: "/Fotos/WhatsApp Image 2026-05-20 at 11.43.59.jpeg",
    label: "Profundo como a eternidade do horizonte"
  },
  {
    num: "mensagem 09",
    title: "Simples e direta",
    text: `Jurema.

Eu só quero que saibas que és amada. Que alguém acorda todos os dias pensando em ti. Que alguém ora pelo teu nome. Que alguém sorri só de imaginar o teu rosto.

Que alguém, a 2 de agosto de 2025, te viu numa caminhada e soube — sem dúvida nenhuma — que tu eras a pessoa certa.

Esse alguém sou eu. E isso nunca vai mudar.`,
    signature: "Telmo",
    photo: "/Fotos/WhatsApp Image 2026-05-20 at 11.43.50 (4).jpeg",
    label: "Simplesmente, eu amo-te Jurema."
  }
];

export default function App() {
  const [activeLetter, setActiveLetter] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [hearts, setHearts] = useState([]);
  const [timeDiff, setTimeDiff] = useState({ years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 });
  const audioRef = useRef(null);
  
  // Navigation Hamburger State
  const [menuOpen, setMenuOpen] = useState(false);
  
  // Carousel Ref and handlers
  const carouselRef = useRef(null);

  const selectLetter = (idx) => {
    setActiveLetter(idx);
    if (carouselRef.current) {
      const container = carouselRef.current;
      const items = container.querySelectorAll('.letter-carousel-item');
      if (items[idx]) {
        const targetScroll = items[idx].offsetLeft;
        container.scrollTo({
          left: targetScroll,
          behavior: 'smooth'
        });
      }
    }
  };

  const scrollCarousel = (direction) => {
    let targetIndex = activeLetter;
    if (direction === 'next') {
      targetIndex = Math.min(activeLetter + 1, LETTERS.length - 1);
    } else {
      targetIndex = Math.max(activeLetter - 1, 0);
    }
    selectLetter(targetIndex);
  };

  const handleCarouselScroll = () => {
    if (carouselRef.current) {
      const container = carouselRef.current;
      const scrollLeft = container.scrollLeft;
      const items = container.querySelectorAll('.letter-carousel-item');
      
      let closestIndex = activeLetter;
      let minDiff = Infinity;
      
      items.forEach((item, idx) => {
        const diff = Math.abs(item.offsetLeft - scrollLeft);
        if (diff < minDiff) {
          minDiff = diff;
          closestIndex = idx;
        }
      });
      
      if (closestIndex !== activeLetter) {
        setActiveLetter(closestIndex);
      }
    }
  };

  // Time Machine Calculator (Since 15th October 2025)
  useEffect(() => {
    const calculateTime = () => {
      const startDate = new Date('2025-10-15T00:00:00');
      const now = new Date();

      let tempDate = new Date(startDate.getTime());
      
      let years = 0;
      while (true) {
        let nextYearDate = new Date(tempDate.getTime());
        nextYearDate.setFullYear(nextYearDate.getFullYear() + 1);
        if (nextYearDate <= now) {
          years++;
          tempDate = nextYearDate;
        } else {
          break;
        }
      }

      let months = 0;
      while (true) {
        let nextMonthDate = new Date(tempDate.getTime());
        nextMonthDate.setMonth(nextMonthDate.getMonth() + 1);
        if (nextMonthDate <= now) {
          months++;
          tempDate = nextMonthDate;
        } else {
          break;
        }
      }

      let days = 0;
      while (true) {
        let nextDayDate = new Date(tempDate.getTime());
        nextDayDate.setDate(nextDayDate.getDate() + 1);
        if (nextDayDate <= now) {
          days++;
          tempDate = nextDayDate;
        } else {
          break;
        }
      }

      let diffMs = now.getTime() - tempDate.getTime();
      let hours = Math.floor(diffMs / (1000 * 60 * 60));
      diffMs %= (1000 * 60 * 60);
      let minutes = Math.floor(diffMs / (1000 * 60));
      diffMs %= (1000 * 60);
      let seconds = Math.floor(diffMs / 1000);

      setTimeDiff({ years, months, days, hours, minutes, seconds });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Floating Hearts Effect
  const addHearts = (e, count = 15) => {
    const newHearts = [];
    
    // Safely extract clientX/clientY for both desktop mouse clicks and mobile touch events
    let rawX = e ? e.clientX : undefined;
    let rawY = e ? e.clientY : undefined;
    
    if (e && rawX === undefined && e.touches && e.touches[0]) {
      rawX = e.touches[0].clientX;
      rawY = e.touches[0].clientY;
    }
    if (e && rawX === undefined && e.changedTouches && e.changedTouches[0]) {
      rawX = e.changedTouches[0].clientX;
      rawY = e.changedTouches[0].clientY;
    }
    
    const clientX = (typeof rawX === 'number' && !isNaN(rawX)) ? rawX : window.innerWidth / 2;
    const clientY = (typeof rawY === 'number' && !isNaN(rawY)) ? rawY : window.innerHeight / 2;

    for (let i = 0; i < count; i++) {
      newHearts.push({
        id: Math.random() + Date.now(),
        x: clientX - 20 + (Math.random() * 40),
        y: clientY - 20 + (Math.random() * 40),
        size: Math.random() * 20 + 15,
        delay: Math.random() * 0.5,
        duration: Math.random() * 2 + 2,
        leftShift: (Math.random() - 0.5) * 200
      });
    }

    setHearts(prev => [...prev, ...newHearts]);

    // Clean up hearts
    setTimeout(() => {
      setHearts(prev => prev.filter(h => !newHearts.find(nh => nh.id === h.id)));
    }, 4000);
  };

  const handlePlayToggle = () => {
    if (audioRef.current) {
      if (playing) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.log("Audio play error", e));
      }
      setPlaying(!playing);
    }
  };

  const handleNextPhoto = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % IMAGES.length);
    }
  };

  const handlePrevPhoto = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + IMAGES.length) % IMAGES.length);
    }
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Floating Audio Element */}
      <audio 
        ref={audioRef} 
        src="https://cdn.pixabay.com/audio/2022/05/27/audio_1808737df8.mp3" 
        loop
      />

      {/* Nav Pill */}
      <div className="nav-container">
        <nav className="nav-pill">
          <a href="#" className="nav-logo" onClick={() => addHearts(null, 5)}>
            <Heart className="love-footer-heart" fill="#B8976C" size={18} />
            Telmo & Jurema
          </a>
          <div className="nav-links desktop-only">
            <a href="#inicio" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('inicio'); }}>Início</a>
            <a href="#tempo" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('tempo'); }}>Tempo</a>
            <a href="#cartas" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('cartas'); }}>Cartas</a>
            <a href="#galeria" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('galeria'); }}>Galeria</a>
          </div>
          <div className="nav-actions">
            <button className={`music-toggle ${playing ? 'playing' : ''}`} onClick={handlePlayToggle} title={playing ? "Pausar música" : "Tocar música"}>
              {playing ? <Volume2 size={16} /> : <VolumeX size={16} />}
            </button>
            <button className="hamburger-toggle mobile-only" onClick={() => setMenuOpen(!menuOpen)} title="Menu">
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
        {menuOpen && (
          <div className="mobile-menu-dropdown">
            <a href="#inicio" className="mobile-menu-link" onClick={(e) => { e.preventDefault(); scrollToSection('inicio'); setMenuOpen(false); }}>Início</a>
            <a href="#tempo" className="mobile-menu-link" onClick={(e) => { e.preventDefault(); scrollToSection('tempo'); setMenuOpen(false); }}>Tempo</a>
            <a href="#cartas" className="mobile-menu-link" onClick={(e) => { e.preventDefault(); scrollToSection('cartas'); setMenuOpen(false); }}>Cartas</a>
            <a href="#galeria" className="mobile-menu-link" onClick={(e) => { e.preventDefault(); scrollToSection('galeria'); setMenuOpen(false); }}>Galeria</a>
          </div>
        )}
      </div>

      {/* Hero Section */}
      <section id="inicio" className="hero-card">
        <div className="hero-left">
          <div className="couple-badge">
            <Sparkles size={14} /> Juntos desde 15 de Outubro de 2025
          </div>
          <h1 className="hero-title">
            O Nosso Espaço de Amor
            <span>Jurema & Telmo</span>
          </h1>
          <p className="hero-bio">
            Sabe, talvez isso seja apenas uma simples galeria digital. Mas para mim, isso é metade de nós. São 7 meses guardados aqui, momentos que eu nunca quero esquecer, sorrisos que mudaram o meu mundo, e uma história que começou sem avisar e tomou conta de tudo.
          </p>

          {/* Stories highlights bar */}
          <div className="highlights-bar">
            <div className="highlight-item" onClick={(e) => { addHearts(e, 8); scrollToSection('cartas'); selectLetter(0); }}>
              <div className="highlight-circle">
                <img className="highlight-img" src="/Fotos/WhatsApp Image 2026-05-20 at 11.43.50 (5).jpeg" alt="O Início" />
              </div>
              <span className="highlight-label">Caminhada</span>
            </div>
            <div className="highlight-item" onClick={(e) => { addHearts(e, 8); scrollToSection('cartas'); selectLetter(4); }}>
              <div className="highlight-circle">
                <img className="highlight-img" src="/Fotos/WhatsApp Image 2026-05-20 at 11.43.55.jpeg" alt="HuamboExpress" />
              </div>
              <span className="highlight-label">HuamboExpress</span>
            </div>
            <div className="highlight-item" onClick={(e) => { addHearts(e, 8); scrollToSection('cartas'); selectLetter(6); }}>
              <div className="highlight-circle">
                <img className="highlight-img" src="/Fotos/WhatsApp Image 2026-05-20 at 11.43.37.jpeg" alt="O Sim" />
              </div>
              <span className="highlight-label">O Sim 💍</span>
            </div>
            <div className="highlight-item" onClick={(e) => { addHearts(e, 8); scrollToSection('cartas'); selectLetter(7); }}>
              <div className="highlight-circle">
                <img className="highlight-img" style={{ objectPosition: '28% center' }} src="/Fotos/WhatsApp Image 2026-05-20 at 11.43.59.jpeg" alt="Pôr do Sol" />
              </div>
              <span className="highlight-label">Pôr do Sol</span>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="collage-bg"></div>
          {/* Overlapping collage of images */}
          <div className="img-large-wrap" onClick={() => setLightboxIndex(19)}>
            <img src="/Fotos/WhatsApp Image 2026-05-20 at 11.43.58 (4).jpeg" alt="Nós" />
          </div>
          <div className="img-small-wrap" onClick={() => setLightboxIndex(4)}>
            <img src="/Fotos/WhatsApp Image 2026-05-20 at 11.43.50 (1).jpeg" alt="Abraço no espelho" />
          </div>
        </div>
      </section>

      {/* Social / Instagram style Section */}
      <section className="profile-section">
        <div className="profile-img-card" onClick={(e) => addHearts(e, 10)}>
          <img src="/Fotos/WhatsApp Image 2026-05-20 at 11.43.58.jpeg" alt="Telmo e Jurema elegantes" />
          <div className="profile-tag-overlay">
            <div>
              <p style={{ fontWeight: 700, fontSize: '1.1rem' }}>Telmo & Jurema</p>
              <p style={{ fontSize: '0.8rem', opacity: 0.8 }}>Sintonia Perfeita</p>
            </div>
            <Heart size={24} fill="#FFFFFF" />
          </div>
        </div>

        <div className="profile-details-card">
          <div className="profile-header">
            <div className="profile-user-info">
              <img className="profile-avatar" src="/Fotos/WhatsApp Image 2026-05-20 at 11.43.36.jpeg" alt="Avatar" />
              <div>
                <h3 className="profile-username">
                  telmo_jurema
                  <svg className="verified-badge" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Conta Oficial de Amor</p>
              </div>
            </div>
            <MoreHorizontal style={{ color: 'var(--burgundy)' }} />
          </div>

          <div className="profile-stats">
            <div className="stat-item">
              <span className="stat-val">24</span>
              <span className="stat-lbl">Memórias</span>
            </div>
            <div className="stat-item">
              <span className="stat-val">7</span>
              <span className="stat-lbl">Meses</span>
            </div>
            <div className="stat-item">
              <span className="stat-val">∞</span>
              <span className="stat-lbl">Promessas</span>
            </div>
          </div>

          <div className="profile-bio-box">
            <h4 className="profile-fullname">Telmo & Jurema</h4>
            <p className="profile-bio-text">
              Uma história escrita pelas mãos de Deus. O amor real que se apoia nas noites conversadas, nos sorrisos de cumplicidade e nas orações levadas ao Pai. 🌹💍
            </p>
          </div>

          <div className="profile-actions">
            <button className="profile-btn profile-btn-primary" onClick={(e) => addHearts(e, 25)}>
              <Heart size={16} fill="#FFFFFF" /> Te Amo
            </button>
            <button className="profile-btn profile-btn-secondary" onClick={(e) => { addHearts(e, 10); alert("Prometo estar. Nas manhãs difíceis, nas noites longas, nos momentos de glória e nos de queda. Para Sempre! ❤️"); }}>
              Para Sempre
            </button>
            <div className="profile-btn-icon" onClick={(e) => { addHearts(e, 30); alert("Futuro traçado: Construir, orar e casar contigo! Jurema é o meu lar. 🏡💍"); }} title="Nosso Futuro">
              <Sparkles size={18} />
            </div>
          </div>
        </div>
      </section>

      {/* Time Machine Section */}
      <section id="tempo" className="time-machine-card">
        <div className="time-machine-header">
          <div className="time-machine-badge">
            <Clock size={14} /> A Nossa Máquina do Tempo
          </div>
          <h2 className="time-machine-title">Contando cada segundo de amor</h2>
          <p className="time-machine-subtitle">Desde 15 de Outubro de 2025, o dia em que disseras o mais lindo SIM!</p>
        </div>

        <div className="time-grid">
          <div className="time-box">
            <span className="time-num">{timeDiff.years}</span>
            <span className="time-lbl">Anos</span>
          </div>
          <div className="time-box">
            <span className="time-num">{timeDiff.months}</span>
            <span className="time-lbl">Meses</span>
          </div>
          <div className="time-box">
            <span className="time-num">{timeDiff.days}</span>
            <span className="time-lbl">Dias</span>
          </div>
          <div className="time-box">
            <span className="time-num">{timeDiff.hours.toString().padStart(2, '0')}</span>
            <span className="time-lbl">Horas</span>
          </div>
          <div className="time-box">
            <span className="time-num">{timeDiff.minutes.toString().padStart(2, '0')}</span>
            <span className="time-lbl">Minutos</span>
          </div>
          <div className="time-box">
            <span className="time-num">{timeDiff.seconds.toString().padStart(2, '0')}</span>
            <span className="time-lbl">Segundos</span>
          </div>
        </div>

        <p className="time-footer-msg">
          &ldquo;Nesse caso hoje é dia vinte, então já se passam 7 meses e {timeDiff.days} dias, e continuará a marcar... sempre.&rdquo;
        </p>
      </section>

      {/* Letters Section */}
      <section id="cartas" className="letters-section">
        {/* Letters Section - Desktop Layout */}
        <div className="letters-desktop-layout desktop-only">
          <div className="letters-menu-container">
            <h3 className="letters-menu-title">
              <MessageCircle size={20} />
              Cartas de Amor
            </h3>
            <div className="letters-menu">
              {LETTERS.map((letter, idx) => (
                <button 
                  key={idx}
                  type="button"
                  className={`letter-menu-btn ${activeLetter === idx ? 'active' : ''}`}
                  onClick={(e) => {
                    setActiveLetter(idx);
                    addHearts(e, 8);
                  }}
                >
                  <span className="letter-btn-num">{letter.num}</span>
                  <span className="letter-btn-title">{letter.title}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="letter-display-card">
            <div className="letter-content">
              <div className="letter-paper">
                <div className="letter-header">
                  <span className="letter-num-tag">{LETTERS[activeLetter].num}</span>
                  <h3 className="letter-title">{LETTERS[activeLetter].title}</h3>
                </div>
                <p className="letter-body">
                  {LETTERS[activeLetter].text}
                </p>
                <div className="letter-signature">
                  {LETTERS[activeLetter].signature}
                </div>
              </div>
            </div>

            <div className="letter-photo-wrap" onClick={(e) => {
              const imgIdx = IMAGES.findIndex(img => img.url === LETTERS[activeLetter].photo);
              if (imgIdx !== -1) setLightboxIndex(imgIdx);
            }}>
              <img className="letter-photo" src={LETTERS[activeLetter].photo} alt={LETTERS[activeLetter].title} />
              <div className="letter-photo-badge">
                <Heart size={12} fill="#FFFFFF" />
                {LETTERS[activeLetter].label}
              </div>
            </div>
          </div>
        </div>

        {/* Letters Section - Mobile Carousel Layout */}
        <div className="letters-mobile-layout mobile-only">
          <div className="letters-section-header">
            <h2 className="letters-section-title">
              <MessageCircle size={24} />
              Cartas de Amor
            </h2>
            <p className="letters-section-subtitle">
              Arrasta para os lados ou usa as setas para ler as nossas cartas.
            </p>
          </div>

          <div className="letters-carousel-wrapper">
            {/* Navigation Arrows */}
            <button 
              type="button" 
              className="carousel-nav-btn prev" 
              onClick={() => scrollCarousel('prev')}
              disabled={activeLetter === 0}
              title="Carta Anterior"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Scroll Container */}
            <div 
              className="letters-carousel" 
              ref={carouselRef} 
              onScroll={handleCarouselScroll}
            >
              {LETTERS.map((letter, idx) => (
                <div key={idx} className="letter-carousel-item">
                  <div className="letter-display-card">
                    <div className="letter-content">
                      <div className="letter-paper">
                        <div className="letter-header">
                          <span className="letter-num-tag">{letter.num}</span>
                          <h3 className="letter-title">{letter.title}</h3>
                        </div>
                        <p className="letter-body">
                          {letter.text}
                        </p>
                        <div className="letter-signature">
                          {letter.signature}
                        </div>
                      </div>
                    </div>

                    <div className="letter-photo-wrap" onClick={() => {
                      const imgIdx = IMAGES.findIndex(img => img.url === letter.photo);
                      if (imgIdx !== -1) setLightboxIndex(imgIdx);
                    }}>
                      <img className="letter-photo" src={letter.photo} alt={letter.title} />
                      <div className="letter-photo-badge">
                        <Heart size={12} fill="#FFFFFF" />
                        {letter.label}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button 
              type="button" 
              className="carousel-nav-btn next" 
              onClick={() => scrollCarousel('next')}
              disabled={activeLetter === LETTERS.length - 1}
              title="Próxima Carta"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Carousel Indicators/Dots */}
          <div className="carousel-indicators">
            {LETTERS.map((letter, idx) => (
              <button
                key={idx}
                type="button"
                className={`carousel-dot ${activeLetter === idx ? 'active' : ''}`}
                onClick={() => selectLetter(idx)}
                title={letter.title}
              >
                <span className="dot-label">{idx + 1}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="gallery-card">
        <div className="gallery-header">
          <h2 className="gallery-title">A Nossa Galeria de Memórias</h2>
          <p className="gallery-subtitle">São 24 recordações guardadas com muito carinho. Clique para ampliar.</p>
        </div>

        <div className="gallery-grid">
          {IMAGES.map((img, idx) => (
            <div 
              key={idx} 
              className="gallery-item"
              onClick={(e) => {
                setLightboxIndex(idx);
                addHearts(e, 5);
              }}
            >
              <img src={img.url} alt={img.desc} loading="lazy" />
              <div className="gallery-overlay">
                <span className="gallery-overlay-text">
                  <Sparkles size={14} /> Ampliar
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="love-footer">
        <p>
          Feito com todo o amor do mundo para a minha namorada Jurema <Heart size={16} fill="var(--burgundy-light)" className="love-footer-heart" /> 7 Meses e Contando
        </p>
        <p style={{ fontSize: '0.8rem', opacity: 0.6, marginTop: '8px' }}>
          &copy; {new Date().getFullYear()} Telmo & Jurema. Desde 2 de Agosto de 2025.
        </p>
      </footer>

      {/* Fullscreen Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="lightbox-modal">
          <button className="lightbox-close" onClick={() => setLightboxIndex(null)}>
            <X size={24} />
          </button>

          <button className="lightbox-nav lightbox-nav-left" onClick={handlePrevPhoto}>
            <ChevronLeft size={32} />
          </button>

          <div className="lightbox-content" onClick={(e) => addHearts(e, 10)}>
            <img className="lightbox-img" src={IMAGES[lightboxIndex].url} alt={IMAGES[lightboxIndex].desc} />
            <span className="lightbox-caption">
              {IMAGES[lightboxIndex].desc}
              {IMAGES[lightboxIndex].url === "/Fotos/WhatsApp Image 2026-05-20 at 11.43.37.jpeg" && (
                <span style={{ display: 'block', color: 'var(--gold)', fontWeight: 'bold', marginTop: '4px' }}>
                  💍 Dia do nosso Pedido de Namoro — 15 de Outubro de 2025
                </span>
              )}
            </span>
          </div>

          <button className="lightbox-nav lightbox-nav-right" onClick={handleNextPhoto}>
            <ChevronRight size={32} />
          </button>
        </div>
      )}

      {/* Floating Hearts Animation layer */}
      <div className="hearts-container">
        {hearts.map(h => (
          <span 
            key={h.id} 
            className="floating-heart"
            style={{
              left: `${h.x}px`,
              top: `${h.y}px`,
              fontSize: `${h.size}px`,
              animationDelay: `${h.delay}s`,
              animationDuration: `${h.duration}s`,
              '--left-shift': `${h.leftShift}px`
            }}
          >
            ❤️
          </span>
        ))}
      </div>
    </>
  );
}
