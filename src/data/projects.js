// src/data/projects.js

export const featuredProjects = [
  {
    id: 'dalilak',
    title: 'Dalilak',
    type: 'Full Stack Tourism Platform',
    tagline: 'AI-powered travel discovery, from listing to booking.',
    description:
      'A comprehensive tourism platform that connects travelers with local experiences, hotels, and guides across Egypt. Built with a scalable multi-layer architecture and integrated AI recommendation engine to personalize every journey.',
    role: 'Lead Full Stack Engineer & Architect',
    problem:
      'Tourism businesses in Egypt lacked a unified digital presence. Travelers had no reliable way to discover verified local experiences, and operators had no tools to manage bookings, availability, or revenue online.',
    solution:
      'Designed and built a complete tourism ecosystem — a discovery platform, merchant dashboard, booking engine, and mobile companion app — from database schema all the way to production deployment.',
    architecture:
      'Three-tier architecture: React SPA on the frontend, a PHP REST API middleware layer, and a normalized MySQL database with full relational integrity. AI models run as isolated Python services communicating via internal APIs.',
    dbDesign:
      'Entity-relationship model with 24 tables covering users, businesses, listings, bookings, reviews, and media assets. Indexed for high-read workloads with materialized views for feed generation.',
    apiDesign:
      'RESTful API following consistent resource-based routing. Token-based authentication with role separation (traveler / merchant / admin). Rate-limited endpoints with request validation middleware.',
    aiIntegration:
      'Integrated a content-based filtering recommendation engine trained on user interaction data. NLP-powered search that understands intent rather than exact keyword matching.',
    challenges: [
      'Designing a multi-role permission system that scales without spaghetti logic',
      'Building a search engine that returns relevant results despite inconsistent merchant data',
      'Managing media storage costs for thousands of high-resolution tourism images',
    ],
    solutions: [
      'Implemented an RBAC system with hierarchical permission inheritance at the API layer',
      'Combined keyword indexing with ML embedding similarity to handle imperfect data quality',
      'Leveraged CDN with on-the-fly image optimization and tiered storage for cold assets',
    ],
    tech: ['React.js', 'PHP', 'MySQL', 'Python', 'Flutter', 'REST API', 'AI/ML'],
    color: 'from-violet-500/20 to-sky-500/20',
    accentColor: '#6C63FF',
    website: 'https://dalilak.gt.tc/',
    images: [
      '/images/dalilak/dalilak_4.png',
      '/images/dalilak/dalilak_3.png',
      '/images/dalilak/dalilak_2.png',
      '/images/dalilak/dalilak_1.png'
    ],
    caseStudy: true,
  },
  {
    id: 'shopco',
    title: 'SHOP.CO',
    type: 'Full-Stack E-Commerce Platform',
    tagline: 'Modern full-stack e-commerce experience for fashion and apparel retail.',
    description:
      'A modern full-stack e-commerce platform built to deliver a complete online shopping experience for fashion and apparel businesses. The platform combines an intuitive customer storefront with a powerful administrative dashboard.',
    role: 'Solo Full-Stack Developer & Architect',
    problem:
      'Building an e-commerce platform requires much more than displaying products. The challenge was to create a reliable shopping experience that combines fast browsing, advanced filtering, secure authentication, dynamic cart management, order processing, and administrative control while maintaining excellent performance and usability.',
    solution:
      'Developed a complete e-commerce solution that provides customers with a smooth shopping journey from product discovery to order confirmation. At the same time, administrators can efficiently manage products, inventory, customers, orders, reviews, and platform settings through a centralized dashboard.',
    architecture:
      'Classical PHP MVC-inspired architecture utilizing PDO for database transactions, with structured, modular backend components. The frontend is powered by Bootstrap 5, custom CSS, and jQuery/AJAX for smooth, non-reloading interactions.',
    dbDesign:
      'Relational schema on MySQL covering normalized tables for products, variations (sizes/colors), users, orders, order items, coupon discounts, and reviews with relational integrity and safe transactions.',
    apiDesign:
      'Asynchronous local endpoints using PHP handle requests for shopping cart actions, wishlist toggles, and catalog filtering. Uses secure session-based authentication and AJAX communication protocols.',
    aiIntegration:
      'Automated statistics computation for admin dashboards, including sales performance analytics, popular category distributions, and automated coupon validation rules.',
    challenges: [
      'Creating a reliable shopping cart and checkout flow that remains consistent and handles variations gracefully',
      'Organizing product variations (sizes, colors, stock) and filters dynamically without full page refreshes',
      'Protecting user data, order records, and back-office management actions from security vulnerabilities',
    ],
    solutions: [
      'Implemented session-backed database-synced cart logic with real-time stock availability verification during checkout step',
      'Developed dynamic JavaScript and AJAX-based filters requesting data from structured PHP JSON endpoints',
      'Used prepared statements for all database queries to prevent SQL injections, secure session management, and robust input validations',
    ],
    tech: ['PHP', 'MySQL', 'Bootstrap 5', 'JavaScript', 'jQuery', 'AJAX'],
    color: 'from-zinc-500/20 to-neutral-700/20',
    accentColor: '#52525B',
    website: '#',
    codeLink: 'https://github.com/YasserSedky/SHOP.CO',
    caseStudy: true,
    images: [
      '/images/shopco/shopco_1.png',
      '/images/shopco/shopco_2.png',
      '/images/shopco/shopco_3.png',
      '/images/shopco/shopco_4.png',
      '/images/shopco/shopco_5.png',
    ],
  },
];

export const placeholderProjects = [
  {
    id: 'maseer',
    title: 'Maseer Industrial Factory',
    type: 'Corporate Website',
    description:
      'A professional corporate website developed to strengthen the company\'s digital presence and showcase its industrial products, refrigeration solutions, and maintenance services.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Swiper.js'],
    color: 'from-blue-500/15 to-cyan-500/15',
    status: 'Live',
    website: 'https://yassersedky.github.io/Maseer/',
    image: '/images/maseer/maseer_1.png',
  },
  {
    id: 'library',
    title: 'Smart Digital Library',
    type: 'Full-Stack Web Application',
    tagline: 'AI-powered college library: browse, read, listen, and borrow — all in one place.',
    description:
      'A comprehensive web application that modernizes how students access educational resources. Students can browse books, read online, download PDFs, listen to audiobooks, and borrow physical copies. AI integration enables automated book summaries and intelligent content explanations.',
    role: 'Full-Stack Developer & System Designer',
    problem:
      'The college relied on manual, disconnected processes for managing its library. Students had no single digital destination to browse, access, or borrow books, and faculty had no efficient tools for managing the collection or tracking borrowing operations.',
    solution:
      'Built a complete library management platform combining a student-facing portal with an admin dashboard. Digital resources (PDF, MP3) are managed alongside physical book borrowing workflows, all unified under a single system with AI-powered learning assistance.',
    architecture:
      'Three-tier web architecture: HTML/CSS/JavaScript frontend powered by Bootstrap, a PHP backend handling business logic and session management, and a normalized MySQL database for books, users, categories, and borrowing records.',
    dbDesign:
      'Relational schema with tables for books, users, categories, digital media assets, and borrowing records. Designed to efficiently support CRUD operations, role-based queries, and historical tracking of borrowing activity.',
    apiDesign:
      'PHP-based REST-like endpoints for student and admin operations. Role separation between Student and Admin roles ensures protected access to management functions. File upload handling for PDF and MP3 assets with server-side validation.',
    aiIntegration:
      'Integrated AI APIs to provide automated book summarization and content explanation features. Students can request AI-generated summaries or ask the assistant to explain complex topics, making educational content more accessible.',
    challenges: [
      'Managing both digital content (PDF/MP3) and physical borrowing workflows in a single unified system',
      'Designing a clean admin dashboard that handles complex library operations without overwhelming non-technical staff',
      'Ensuring AI features remain fast and accessible even on lower-bandwidth connections',
    ],
    solutions: [
      'Separated concerns cleanly between the digital media system and physical borrowing module, with shared book records',
      'Built an intuitive admin interface with clear action flows for common operations like approving/returning books',
      'Optimized API calls to the AI service with response caching and graceful degradation if the service is slow',
    ],
    tech: ['PHP', 'MySQL', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'AI APIs'],
    color: 'from-emerald-500/15 to-green-500/15',
    accentColor: '#10B981',
    status: 'Live',
    codeLink: 'https://github.com/YasserSedky/HTI_Library',
    caseStudy: true,
    images: [
      '/images/library/library_2.png',
      '/images/library/library_3.png',
      '/images/library/library_1.png',
    ],
    image: '/images/library/library_2.png',
  },
  {
    id: 'playstation',
    title: 'PlayStation Store Management',
    type: 'Desktop Business Application',
    tagline: 'Reliable desktop solution to centralize gaming session management and store operations.',
    description:
      'A comprehensive desktop application designed to streamline PlayStation gaming store daily operations. It centralizes inventory, transactions, gaming sessions, shift tracking, and financial analytics in a secure interface.',
    role: 'Solo Software Engineer & UI/UX Designer',
    problem:
      'Gaming stores face complex operations: tracking active customer play sessions across multiple consoles, managing snacks/beverages stock, maintaining accurate billing/invoices, and monitoring daily staff shifts without manual bookkeeping errors.',
    solution:
      'Developed a local Windows application using PySide6 (Qt) and SQLite. It provides real-time device session monitoring, automated billing calculations, shift closure tracking, product inventory logs, and configurable settings with offline database backups.',
    architecture:
      'Desktop MVC structure: PySide6 (Qt) for the view/controller layers, a localized SQLite relational database for persistent storage, and helper utility layers for logging, backup scheduling, and JSON config settings.',
    dbDesign:
      'Relational schema optimized for SQLite, containing normalized tables for consoles/devices, gaming sessions, shifts, product stock, billing invoices, and general expenses with fast indexes for shift reports.',
    apiDesign:
      'Local Qt Signal/Slot communication pattern connecting UI widgets with database controllers. Includes structured logging for administrative audits and JSON configuration models for store setup.',
    aiIntegration:
      'Automated statistical calculations and visual widgets for shift performance, average console utilization rates, and inventory warning levels.',
    challenges: [
      'Managing real-time concurrent active session timers without UI freeze or performance drops',
      'Ensuring absolute data consistency and safety during sudden application closures or power losses',
      'Creating an intuitive, clean desktop UI for cashier-level operators in high-traffic environments',
    ],
    solutions: [
      'Implemented multi-threaded timing using Qt timers and background thread calculations for session billing',
      'Utilized SQLite transactions with automated JSON-based backup routines on shift closures',
      'Designed a custom Qt stylesheet (QSS) layout with large clickable elements and immediate console status indicators',
    ],
    tech: ['Python', 'PySide6', 'SQLite', 'Qt Widgets', 'JSON', 'Logging'],
    color: 'from-blue-600/15 to-indigo-600/15',
    accentColor: '#3B82F6',
    status: 'Live',
    codeLink: 'https://github.com/YasserSedky/PlayZone_System',
    caseStudy: true,
    images: [
      '/images/playstation/playstation_1.jpg',
      '/images/playstation/playstation_2.jpg',
      '/images/playstation/playstation_3.jpg',
      '/images/playstation/playstation_4.jpg',
      '/images/playstation/playstation_5.jpg',
    ],
    image: '/images/playstation/playstation_1.jpg',
  },
];
