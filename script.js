const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  navigation.classList.toggle('open', !isOpen);
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navigation.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));
document.querySelectorAll('[data-filter]').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-filter]').forEach(filter => {
      const selected = filter === button;
      filter.classList.toggle('active', selected);
      filter.setAttribute('aria-pressed', String(selected));
    });
    document.querySelectorAll('.project').forEach(project => {
      project.hidden = button.dataset.filter !== 'all' && project.dataset.category !== button.dataset.filter;
    });
  });
});
const projects = {
  commerce: {
    title: 'Wagtales — Dog Matching & Social Networking Platform', 
    description: 'Wagtales is a web-based social networking and dog-matching platform designed to connect dog owners, pet enthusiasts, and dog lovers within their local communities.\nThe application provides a dedicated online space where users can discover nearby dogs, explore potential matches for their pets, and connect with fellow dog owners who share similar interests.\nBuilt using PHP, Zend Framework, SocialEngine, and CMS technologies, Wagtales combines location-based dog discovery with social networking functionality to create an engaging, community-driven experience for dog lovers.', 
    tags: ['PHP', 'Zend', 'SocialEngine', 'MySQL', 'JavaScript']
  },
  dashboard: {
    title: 'My Roots Photography — Photography Portfolio & Services Website',
    description: 'My Roots Photography is a professional photography website designed to showcase photography services, highlight creative portfolios, and provide potential clients with information about available photography sessions and packages.\nThe website serves as a digital platform where visitors can explore photography offerings, discover different session packages, and learn more about the photographer\'s creative style and services.\nDeveloped using WordPress and Elementor, the website combines visually appealing layouts with intuitive navigation and responsive design to create an engaging browsing experience. Its content management capabilities allow photography services, portfolio images, and package information to be updated efficiently.',
    tags: ['WordPress', 'Elementor', 'JavaScript']
  }
};
const dialog = document.querySelector('#project-dialog');
const sampleProjects = [
  { 
    name: 'Manila Standard .net — Digital News & Publishing Platform', 
    description: 'Manila Standard .net is a Philippine digital news portal that represents the evolution of traditional print journalism into a modern online publishing platform.\nThe website provides readers with convenient access to news, current events, and informative articles across various categories, extending the reach of traditional newspaper content to a broader digital audience.\nDeveloped using PHP and the Laravel framework, the platform supports digital news publishing and content management, providing a structured environment for organizing, maintaining, and delivering news content.\nBy transitioning from traditional newspaper publishing to a web-based platform, Manila Standard .net helps make news more accessible, supports efficient content distribution, and provides readers with an engaging digital experience.', 
    tags: ['PHP', 'Laravel', 'MySQL', 'JavaScript'] },
  { 
    name: 'Royal Basketball School — Online Basketball Training Platform', 
    description: 'Royal Basketball School is a web-based platform designed to make basketball education and training programs more accessible to aspiring players, students, and basketball enthusiasts.\nThe website provides a centralized platform where users can explore available basketball classes, discover training programs, and access information about basketball instruction and skill development.\nDeveloped using PHP with an MVC architecture, the platform focuses on organized application functionality, maintainable code, and a user-friendly experience. The technology stack also includes cURL for server-side HTTP communication and PayTrace for payment processing integration.\nBy bringing basketball training programs online, Royal Basketball School helps simplify access to training opportunities while supporting the school\'s digital presence and business operations.', 
    tags: ['PHP', 'MySQL', 'HTML5', 'JavaScript', 'CSS3', 'cURL', 'PayTrace'] },
  { 
    name: 'PhilWeddings Mobile — Wedding Supplier Directory Platform', 
    description: 'PhilWeddings Mobile is a web-based wedding supplier directory designed to help engaged couples discover and connect with wedding service providers in the Philippines.\nThe platform serves as a centralized directory where users can explore wedding suppliers, browse their services, view exclusive promotions, and discover their work through photo and video portfolios.\nDeveloped using PHP, Zend Framework, SocialEngine, and CMS technologies, PhilWeddings Mobile combines supplier listings, promotional content, and multimedia showcases into an accessible digital platform.\nBy bringing wedding-related services together in one convenient location, the application simplifies the process of researching suppliers and helps couples make more informed decisions when planning their special day.', 
    tags: ['PHP', 'Zend', 'SocialEngine', 'MySQL', 'JavaScript'] },
  { 
    name: 'Abante Online — Digital News & Publishing Platform', 
    description: 'Abante Online is a digital news platform for Abante, a daily Filipino-language tabloid publication in the Philippines. The website extends the newspaper\'s reach beyond traditional print media by delivering news, current events, entertainment, sports, and other relevant stories to readers through an accessible online platform.\nDeveloped using PHP and the Laravel framework, the website provides a structured environment for digital news publishing, content organization, and online information delivery. It supports the publication\'s transition into the digital landscape while maintaining its commitment to delivering timely and engaging Filipino-language content.\nThe platform focuses on accessibility, organized content presentation, and efficient news distribution, allowing readers to stay informed and explore articles across different topics.', 
    tags: ['PHP', 'Laravel', 'MySQL', 'JavaScript'] },
  { 
    name: 'Ascentia CPA — Virtual Accounting & Business Advisory Website', 
    description: 'Ascentia CPA is a professional virtual accounting website designed to help entrepreneurs, startups, and business owners navigate the financial challenges and opportunities of building and managing a modern business.\nThe website serves as a digital platform for presenting virtual accounting services, financial guidance, and business advisory solutions. It helps potential clients understand the firm\'s expertise, explore available services, and discover how professional accounting support can contribute to sustainable business growth.\nDeveloped using PHP, the website combines structured backend development with an accessible and professional online experience. Its design emphasizes clear service presentation, intuitive navigation, and effective communication of the firm\'s value to prospective clients.\nBy establishing a strong digital presence, Ascentia CPA helps bridge the gap between traditional accounting practices and the evolving needs of modern businesses seeking flexible, technology-driven financial services.', 
    tags: ['PHP', 'MySQL', 'HTML5', 'JavaScript', 'CSS3'] },
  { 
    name: 'My VCMO — Business Relationship Management Portal', 
    description: 'My VCMO is a web-based business management portal designed to help organizations organize and manage relationships between businesses, partners, and clients through a centralized digital platform.\nThe application focuses on simplifying business relationship management by providing a structured environment for organizing partner and client information, supporting collaboration, and maintaining business connections.\nDeveloped using PHP with an MVC architecture and CRM technologies, My VCMO emphasizes organized data management, maintainable application development, and efficient business operations.\nBy bringing business relationships into one centralized platform, the application helps organizations improve visibility, streamline coordination, and maintain stronger connections across their professional networks.', 
    tags: ['PHP', 'MySQL', 'HTML5', 'JavaScript', 'CSS3'] },
  { 
    name: 'AutoPhile Empire — Automotive Directory & Car Care Platform', 
    description: 'AutoPhile Empire is a web-based automotive directory and information platform designed to connect car owners and automotive enthusiasts with car-related suppliers, services, and valuable vehicle maintenance resources.\nThe application serves as a centralized destination where users can explore automotive suppliers, discover relevant products and services, and access practical tips and advice on vehicle care, maintenance, and protection.\nDeveloped using PHP, Zend Framework, SocialEngine, and CMS technologies, AutoPhile Empire combines supplier directory functionality with informative automotive content to create an accessible and organized digital experience.\nBy bringing automotive resources and supplier information together in one platform, the application helps car owners make informed decisions, discover reliable automotive solutions, and better understand how to maintain and protect their vehicles.', 
    tags: ['PHP', 'Zend', 'SocialEngine', 'MySQL', 'JavaScript'] },
  { 
    name: 'Paul\'s Electric Inc. — Electrical Services Business Website', 
    description: 'Paul\'s Electric Inc. is a professional business website designed to showcase quality electrical services and help residential and commercial customers find reliable electrical solutions.\nThe website serves as a digital platform where potential clients can explore the company\'s electrical services, learn about its expertise, and access essential business information.\nDeveloped using WordPress and Elementor, the website focuses on clean visual design, intuitive navigation, and organized service presentation. Its content management capabilities allow the company to maintain and update service information efficiently.\nBy establishing a professional online presence, Paul\'s Electric Inc. strengthens its digital visibility, communicates its commitment to quality electrical work, and makes it easier for prospective customers to discover its services.', 
    tags: ['WordPress', 'Elementor', 'JavaScript'] },
  { 
    name: 'NAPA — Billiards League & Tournament Management Platform', 
    description: 'NAPA (North American Poolshooters Association) is a comprehensive web-based platform dedicated to supporting the competitive billiards community. It serves as the digital home of the NAPA Pool League, Poolshooters Tour, CueSpeed, and Billiard Life, bringing together league information, competitive events, player statistics, and billiards-related resources.\nThe website provides a centralized destination where pool players, league operators, and billiards enthusiasts can explore league information, access player statistics, discover upcoming tournaments, and stay connected with organized pool competitions.\nDeveloped using PHP, MySQL, HTML5, JavaScript, and CSS3, the platform combines server-side application functionality, structured database management, and interactive web interfaces to support an information-rich billiards experience.\nBy connecting multiple billiards-related programs and resources under one digital platform, NAPA helps promote competitive pool, improve access to league information, and support engagement within the billiards community.', 
    tags: ['PHP', 'MySQL', 'HTML5', 'JavaScript', 'CSS3'] },
  { 
    name: 'mySymphony — Music Education Management Platform', 
    description: 'mySymphony is an all-in-one web-based business management platform designed specifically for independent music teachers, music studios, and music education businesses.\nThe platform simplifies daily operations by bringing essential business tools into one centralized system, helping music educators efficiently manage student information, lesson scheduling, appointments, enrollments, and administrative tasks.\nDeveloped using PHP and the Laravel framework, mySymphony combines comprehensive business management functionality with an intuitive, responsive interface, allowing music teachers to spend less time on administrative work and more time focusing on teaching and student development.', 
    tags: ['PHP', 'Laravel', 'MySQL', 'JavaScript', 'Claude Code (Anthropic)', 'OpenAI Codex', 'n8n', 'ElevenLabs', 'Payroc'] },
  { 
    name: 'Review Genius — Google Review Automation', 
    description: 'Review Genius is a web-based review request automation platform designed to help businesses strengthen their online reputation and increase customer engagement through Google Business reviews.\nThe platform simplifies the process of requesting customer feedback by automating review invitations, reducing manual follow-ups, and encouraging satisfied customers to share their experiences on Google.\nBuilt using PHP and the Laravel framework, Review Genius provides a structured and user-friendly solution for businesses looking to streamline their review collection process and maintain a stronger online presence.', 
    tags: ['PHP', 'Laravel', 'MySQL', 'JavaScript'] },
  { 
    name: 'CueSpeed — Billiards Rating & Performance Tracking Platform', 
    description: 'CueSpeed is an advanced web-based billiards rating and performance tracking platform designed to help players, tournament organizers, and billiards enthusiasts monitor and evaluate competitive performance.\nThe application provides a structured system for tracking player results across handicapped and non-handicapped matches and tournaments. By organizing match outcomes and player performance data, CueSpeed supports a more informed approach to evaluating player performance and competitive progress.\nDeveloped using PHP, JavaScript, and Bootstrap, the platform combines backend data processing with an interactive, responsive interface to deliver an accessible experience for managing and reviewing billiards performance information.\nCueSpeed aims to make competitive billiards performance tracking more organized, accessible, and meaningful for players participating in different match formats and tournaments.', 
    tags: ['PHP', 'MySQL', 'HTML5', 'JavaScript', 'CSS3'] },
  { 
    name: 'Zendoit — Personal Task Management Platform', 
    description: 'Zendoit is a web-based personal productivity and task management application designed to help individuals organize their daily activities, manage responsibilities, and stay focused on their goals.\nThe platform allows users to create and maintain unlimited personal to-do lists, providing a simple and organized way to track tasks, prioritize activities, and manage daily workflows.\nDeveloped using PHP, JavaScript, and Bootstrap, Zendoit focuses on simplicity, accessibility, and ease of use, offering a responsive interface that makes personal task management convenient across different devices.', 
    tags: ['PHP', 'MySQL', 'HTML5', 'JavaScript', 'CSS3'] },
  { 
    name: 'Bookaroo — Multi-Industry Booking & Business Management Platform', 
    description: 'Bookaroo aims to provide an integrated business management platform that eliminates fragmented workflows and simplifies the daily operations of service-based businesses.\nThe project focuses on reducing administrative complexity, improving customer experiences, automating repetitive processes, and providing businesses with the tools needed to manage bookings, payments, and customer relationships efficiently.\nThrough industry-specific solutions, scalable application architecture, and modern AI and automation technologies, Bookaroo helps businesses operate more effectively while creating opportunities for sustainable growth.', 
    tags: ['PHP', 'Laravel', 'MySQL', 'JavaScript', 'Claude Code (Anthropic)', 'OpenAI Codex', 'n8n', 'ElevenLabs', 'Payroc'] },
];
for (let number = 3; number <= 16; number++) {
  const label = String(number).padStart(2, '0');
  const sample = sampleProjects[number - 3];
  projects[`project-${number}`] = {
    title: `${sample.name}`,
    description: sample.description,
    tags: sample.tags
  };
}
document.querySelectorAll('[data-project]').forEach(button => button.addEventListener('click', () => {
  const project = projects[button.dataset.project];
  document.querySelector('#dialog-title').textContent = project.title;
  const paragraphs = Array.isArray(project.description)
    ? project.description
    : project.description.split(/\r?\n+|\s+(?=The proposed scope)/);
  document.querySelector('#dialog-description').replaceChildren(...paragraphs.map(text => {
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    return paragraph;
  }));
  document.querySelector('#dialog-tags').replaceChildren(...project.tags.map(tag => {
    const element = document.createElement('span');
    element.textContent = tag;
    return element;
  }));
  dialog.showModal();
}));
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) {
  const bounds = dialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
}});
document.querySelector('#year').textContent = new Date().getFullYear();
