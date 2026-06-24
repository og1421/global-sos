/* GlobalSOS — i18n-security.js
   Security/Privacy page translations.
   Must be loaded AFTER i18n.js so TRANSLATIONS is already defined. */

'use strict';

const SECURITY_TRANSLATIONS = {

  // ── Portuguese ───────────────────────────────────────────────────
  pt: {
    // Hero
    sec_hero_title:    'Privacidade &amp; Segurança',
    sec_hero_subtitle: 'O GlobalSOS foi construído com uma premissa clara: você não precisa nos dar nenhum dado pessoal para receber ajuda de emergência.',
    sec_hero_badge:    'Última atualização: Maio de 2026',

    // TOC
    sec_toc_label:      'Nesta página',
    sec_toc_resumo:     'Resumo',
    sec_toc_coleta:     'O que coletamos',
    sec_toc_nao:        'O que NÃO coletamos',
    sec_toc_permissoes: 'Permissões do App',
    sec_toc_site:       'Sobre o Site',
    sec_toc_numeros:    'Base de Números',
    sec_toc_direitos:   'Seus Direitos',
    sec_toc_contato:    'Contato',

    // Resumo
    sec_resumo_title:          'Resumo',
    sec_resumo_highlight_strong: 'Resumo em uma linha',
    sec_resumo_highlight_p:    'O GlobalSOS não coleta dados pessoais identificáveis. Ponto.',
    sec_resumo_p1:             'Acreditamos que acesso a informações de emergência é um direito básico, não um produto. Por isso, o GlobalSOS funciona completamente sem que você precise criar conta, fazer login ou fornecer qualquer dado pessoal.',
    sec_resumo_p2:             'Este documento detalha exatamente o que acontece — e o que <em>não</em> acontece — com suas informações quando você usa nosso site ou aplicativo.',

    // O que coletamos
    sec_coleta_title: 'O que coletamos',
    sec_coleta_intro: 'Para que o site e o app funcionem corretamente, os seguintes dados técnicos são processados <strong>localmente no seu dispositivo</strong> e nunca enviados a servidores externos:',
    sec_coleta_item1: '<strong>Idioma do sistema</strong> — detectado pelo navegador para exibir o site no idioma correto automaticamente. Não é armazenado em nossos servidores.',
    sec_coleta_item2: '<strong>Preferência de idioma</strong> — se você troca o idioma manualmente, essa preferência é salva <em>apenas no seu dispositivo</em> via <code>localStorage</code>.',
    sec_coleta_item3: '<strong>IP para detecção de país</strong> — ao carregar o site, fazemos uma consulta anônima ao serviço <code>ipapi.co</code> para sugerir o idioma baseado no seu país. Nenhum dado seu é armazenado por nós nesse processo.',

    // O que NÃO coletamos
    sec_nao_title: 'O que <span class="text-red">não</span> coletamos',
    sec_nao_intro: 'A lista do que <strong>nunca</strong> coletamos é mais importante do que o que coletamos:',
    sec_nao_1_title: 'Nenhum dado cadastral',
    sec_nao_1_text:  'Nome, e-mail, CPF, telefone — não pedimos, não coletamos, não armazenamos.',
    sec_nao_2_title: 'Nenhum histórico de buscas',
    sec_nao_2_text:  'O que você pesquisa permanece no seu dispositivo. Nós não sabemos o que você buscou.',
    sec_nao_3_title: 'Nenhuma localização persistida',
    sec_nao_3_text:  'O GPS é usado só para identificar seu país. Sua localização não é enviada nem armazenada.',
    sec_nao_4_title: 'Sem cookies de rastreamento',
    sec_nao_4_text:  'Não utilizamos cookies de terceiros, pixels de rastreamento ou ferramentas de retargeting.',
    sec_nao_5_title: 'Sem perfis de usuário',
    sec_nao_5_text:  'Não existe um "perfil seu" nos nossos sistemas. Você é completamente anônimo para nós.',
    sec_nao_6_title: 'Sem venda de dados',
    sec_nao_6_text:  'Não monetizamos dados de usuários. Nunca. Nosso modelo não depende disso.',

    // Permissões do App
    sec_perm_title:          'Permissões do App (iOS &amp; Android)',
    sec_perm_intro:          'Os aplicativos móveis do GlobalSOS solicitam apenas as permissões estritamente necessárias para o funcionamento:',
    sec_perm_header_name:    'Permissão',
    sec_perm_header_purpose: 'Finalidade',
    sec_perm_header_sent:    'Dados enviados?',
    sec_perm_location_name:  'Localização',
    sec_perm_location_desc:  'Identificar automaticamente o país para mostrar os números locais',
    sec_perm_phone_name:     'Telefone',
    sec_perm_phone_desc:     'Permitir ligar diretamente para os serviços de emergência pelo app',
    sec_perm_internet_name:  'Internet',
    sec_perm_internet_desc:  'Atualizar a base de dados de números de emergência',
    sec_perm_status_no:      'Não',
    sec_perm_status_min:     'Mínimo',
    sec_perm_note:           '<strong>Nota:</strong> nenhuma permissão é solicitada sem que você saiba. O app funciona em modo offline para todas as funções essenciais.',

    // Sobre o Site
    sec_site_title: 'Sobre o Site Web',
    sec_site_intro: 'O GlobalSOS Web é construído em HTML, CSS e JavaScript puro, sem dependências de rastreamento. Especificamente:',
    sec_site_item1: '<strong>Sem Google Analytics</strong> ou qualquer ferramenta similar de analytics.',
    sec_site_item2: '<strong>Sem Meta Pixel</strong>, Google Ads ou qualquer pixel de terceiros.',
    sec_site_item3: '<strong>Sem cookies de terceiros.</strong> O único dado armazenado localmente é sua preferência de idioma (<code>gsos_lang</code> no <code>localStorage</code>).',
    sec_site_item4: '<strong>Detecção de idioma por IP:</strong> ao carregar a página, uma requisição anônima é feita ao <code>ipapi.co</code> para identificar seu país e sugerir o idioma correto. Essa consulta é feita pelo seu navegador diretamente ao serviço, sem intermediação nossa. Consulte a <a href="https://ipapi.co/privacy/" target="_blank" rel="noopener" class="policy-link">política de privacidade do ipapi.co</a>.',
    sec_site_item5: '<strong>Fontes externas:</strong> as fontes tipográficas são carregadas pelo Google Fonts. Veja a <a href="https://policies.google.com/privacy" target="_blank" rel="noopener" class="policy-link">política de privacidade do Google</a>.',

    // Base de Dados
    sec_data_title: 'Base de Dados de Números',
    sec_data_p1:    'Os números de emergência exibidos no GlobalSOS são informações de domínio público, compiladas de fontes oficiais dos governos e serviços de emergência de cada país.',
    sec_data_p2:    'A base de dados é revisada e atualizada periodicamente para garantir precisão. Se você identificar um número incorreto, entre em <a href="#contato" class="policy-link">contato</a> com a equipe.',

    // Seus Direitos
    sec_rights_title: 'Seus Direitos',
    sec_rights_p1:    'Como o GlobalSOS não coleta dados pessoais identificáveis, não existem dados pessoais seus armazenados em nossos sistemas para acessar, corrigir ou excluir.',
    sec_rights_p2:    'Caso você resida em uma jurisdição com legislação de proteção de dados (como a <strong>LGPD</strong> no Brasil, o <strong>GDPR</strong> na União Europeia ou a <strong>CCPA</strong> na Califórnia), saiba que o GlobalSOS foi projetado para estar em conformidade com esses regulamentos por padrão — simplesmente por não coletar os dados que eles protegem.',
    sec_rights_p3:    'Se tiver alguma dúvida ou solicitação, entre em contato pelo canal abaixo.',

    // Contato
    sec_contact_title: 'Contato',
    sec_contact_intro: 'Tem dúvidas sobre esta política, encontrou um número incorreto ou quer reportar uma preocupação de privacidade? Fale com a equipe:',
    sec_contact_email: '<a href="mailto:contact@globalsos.app" class="policy-link">contact@globalsos.app</a>',
    sec_contact_github: 'Abra uma issue nos repositórios: <a href="https://github.com/og1421/GlobalSOS" target="_blank" rel="noopener" class="policy-link">iOS</a> · <a href="https://github.com/og1421/GlobalSOS-Android" target="_blank" rel="noopener" class="policy-link">Android</a>',
    sec_contact_note:  'Esta política pode ser atualizada conforme o produto evolui. Mudanças relevantes serão comunicadas nos repositórios do projeto.',
  },

  // ── English ──────────────────────────────────────────────────────
  en: {
    // Hero
    sec_hero_title:    'Privacy &amp; Security',
    sec_hero_subtitle: 'GlobalSOS was built on a clear premise: you don\'t need to give us any personal data to get emergency help.',
    sec_hero_badge:    'Last updated: May 2026',

    // TOC
    sec_toc_label:      'On this page',
    sec_toc_resumo:     'Summary',
    sec_toc_coleta:     'What we collect',
    sec_toc_nao:        'What we do NOT collect',
    sec_toc_permissoes: 'App Permissions',
    sec_toc_site:       'About the Website',
    sec_toc_numeros:    'Number Database',
    sec_toc_direitos:   'Your Rights',
    sec_toc_contato:    'Contact',

    // Summary
    sec_resumo_title:          'Summary',
    sec_resumo_highlight_strong: 'One-line summary',
    sec_resumo_highlight_p:    'GlobalSOS does not collect personally identifiable data. Period.',
    sec_resumo_p1:             'We believe that access to emergency information is a basic right, not a product. That\'s why GlobalSOS works completely without you needing to create an account, log in, or provide any personal data.',
    sec_resumo_p2:             'This document details exactly what happens — and what <em>doesn\'t</em> happen — with your information when you use our website or app.',

    // What we collect
    sec_coleta_title: 'What we collect',
    sec_coleta_intro: 'For the website and app to function correctly, the following technical data is processed <strong>locally on your device</strong> and never sent to external servers:',
    sec_coleta_item1: '<strong>System language</strong> — detected by the browser to display the site in the correct language automatically. It is not stored on our servers.',
    sec_coleta_item2: '<strong>Language preference</strong> — if you switch the language manually, that preference is saved <em>only on your device</em> via <code>localStorage</code>.',
    sec_coleta_item3: '<strong>IP for country detection</strong> — when the site loads, we make an anonymous query to the <code>ipapi.co</code> service to suggest a language based on your country. No data of yours is stored by us in this process.',

    // What we do NOT collect
    sec_nao_title: 'What we do <span class="text-red">not</span> collect',
    sec_nao_intro: 'The list of what we <strong>never</strong> collect is more important than what we do collect:',
    sec_nao_1_title: 'No registration data',
    sec_nao_1_text:  'Name, email, ID, phone — we don\'t ask, don\'t collect, don\'t store.',
    sec_nao_2_title: 'No search history',
    sec_nao_2_text:  'What you search stays on your device. We don\'t know what you looked up.',
    sec_nao_3_title: 'No persistent location',
    sec_nao_3_text:  'GPS is used only to identify your country. Your location is not sent or stored.',
    sec_nao_4_title: 'No tracking cookies',
    sec_nao_4_text:  'We don\'t use third-party cookies, tracking pixels, or retargeting tools.',
    sec_nao_5_title: 'No user profiles',
    sec_nao_5_text:  'There is no "profile of you" in our systems. You are completely anonymous to us.',
    sec_nao_6_title: 'No data selling',
    sec_nao_6_text:  'We don\'t monetize user data. Ever. Our model doesn\'t depend on it.',

    // App Permissions
    sec_perm_title:          'App Permissions (iOS &amp; Android)',
    sec_perm_intro:          'GlobalSOS mobile apps only request permissions that are strictly necessary to function:',
    sec_perm_header_name:    'Permission',
    sec_perm_header_purpose: 'Purpose',
    sec_perm_header_sent:    'Data sent?',
    sec_perm_location_name:  'Location',
    sec_perm_location_desc:  'Automatically identify the country to show local numbers',
    sec_perm_phone_name:     'Phone',
    sec_perm_phone_desc:     'Allow calling emergency services directly from the app',
    sec_perm_internet_name:  'Internet',
    sec_perm_internet_desc:  'Update the emergency number database',
    sec_perm_status_no:      'No',
    sec_perm_status_min:     'Minimal',
    sec_perm_note:           '<strong>Note:</strong> no permission is requested without your knowledge. The app works in offline mode for all essential functions.',

    // About the Website
    sec_site_title: 'About the Website',
    sec_site_intro: 'GlobalSOS Web is built with pure HTML, CSS, and JavaScript, with no tracking dependencies. Specifically:',
    sec_site_item1: '<strong>No Google Analytics</strong> or any similar analytics tool.',
    sec_site_item2: '<strong>No Meta Pixel</strong>, Google Ads, or any third-party pixel.',
    sec_site_item3: '<strong>No third-party cookies.</strong> The only data stored locally is your language preference (<code>gsos_lang</code> in <code>localStorage</code>).',
    sec_site_item4: '<strong>IP-based language detection:</strong> when the page loads, an anonymous request is made to <code>ipapi.co</code> to identify your country and suggest the correct language. This query is made directly by your browser to the service, without our intermediation. See the <a href="https://ipapi.co/privacy/" target="_blank" rel="noopener" class="policy-link">ipapi.co privacy policy</a>.',
    sec_site_item5: '<strong>External fonts:</strong> typefaces are loaded via Google Fonts. See <a href="https://policies.google.com/privacy" target="_blank" rel="noopener" class="policy-link">Google\'s privacy policy</a>.',

    // Number Database
    sec_data_title: 'Number Database',
    sec_data_p1:    'The emergency numbers shown in GlobalSOS are public-domain information, compiled from official government and emergency service sources in each country.',
    sec_data_p2:    'The database is reviewed and updated periodically to ensure accuracy. If you identify an incorrect number, please <a href="#contato" class="policy-link">contact</a> the team.',

    // Your Rights
    sec_rights_title: 'Your Rights',
    sec_rights_p1:    'Since GlobalSOS does not collect personally identifiable data, there is no personal data of yours stored in our systems to access, correct, or delete.',
    sec_rights_p2:    'If you reside in a jurisdiction with data protection legislation (such as the <strong>LGPD</strong> in Brazil, the <strong>GDPR</strong> in the European Union, or the <strong>CCPA</strong> in California), know that GlobalSOS was designed to comply with these regulations by default — simply by not collecting the data they protect.',
    sec_rights_p3:    'If you have any questions or requests, please reach out via the channel below.',

    // Contact
    sec_contact_title: 'Contact',
    sec_contact_intro: 'Have questions about this policy, found an incorrect number, or want to report a privacy concern? Reach out to the team:',
    sec_contact_email: '<a href="mailto:contact@globalsos.app" class="policy-link">contact@globalsos.app</a>',
    sec_contact_github: 'Open an issue in the repositories: <a href="https://github.com/og1421/GlobalSOS" target="_blank" rel="noopener" class="policy-link">iOS</a> · <a href="https://github.com/og1421/GlobalSOS-Android" target="_blank" rel="noopener" class="policy-link">Android</a>',
    sec_contact_note:  'This policy may be updated as the product evolves. Relevant changes will be communicated in the project repositories.',
  },

  // ── Spanish ──────────────────────────────────────────────────────
  es: {
    // Hero
    sec_hero_title:    'Privacidad &amp; Seguridad',
    sec_hero_subtitle: 'GlobalSOS fue construido con una premisa clara: no necesitas darnos ningún dato personal para recibir ayuda de emergencia.',
    sec_hero_badge:    'Última actualización: Mayo de 2026',

    // TOC
    sec_toc_label:      'En esta página',
    sec_toc_resumo:     'Resumen',
    sec_toc_coleta:     'Qué recopilamos',
    sec_toc_nao:        'Qué NO recopilamos',
    sec_toc_permissoes: 'Permisos de la App',
    sec_toc_site:       'Sobre el Sitio',
    sec_toc_numeros:    'Base de Números',
    sec_toc_direitos:   'Tus Derechos',
    sec_toc_contato:    'Contacto',

    // Resumen
    sec_resumo_title:          'Resumen',
    sec_resumo_highlight_strong: 'Resumen en una línea',
    sec_resumo_highlight_p:    'GlobalSOS no recopila datos personales identificables. Punto.',
    sec_resumo_p1:             'Creemos que el acceso a información de emergencia es un derecho básico, no un producto. Por eso, GlobalSOS funciona completamente sin que necesites crear una cuenta, iniciar sesión ni proporcionar ningún dato personal.',
    sec_resumo_p2:             'Este documento detalla exactamente lo que ocurre — y lo que <em>no</em> ocurre — con tu información cuando usas nuestro sitio o aplicación.',

    // Qué recopilamos
    sec_coleta_title: 'Qué recopilamos',
    sec_coleta_intro: 'Para que el sitio y la app funcionen correctamente, los siguientes datos técnicos se procesan <strong>localmente en tu dispositivo</strong> y nunca se envían a servidores externos:',
    sec_coleta_item1: '<strong>Idioma del sistema</strong> — detectado por el navegador para mostrar el sitio en el idioma correcto automáticamente. No se almacena en nuestros servidores.',
    sec_coleta_item2: '<strong>Preferencia de idioma</strong> — si cambias el idioma manualmente, esa preferencia se guarda <em>solo en tu dispositivo</em> mediante <code>localStorage</code>.',
    sec_coleta_item3: '<strong>IP para detección de país</strong> — al cargar el sitio, hacemos una consulta anónima al servicio <code>ipapi.co</code> para sugerir el idioma según tu país. Ningún dato tuyo es almacenado por nosotros en ese proceso.',

    // Qué NO recopilamos
    sec_nao_title: 'Qué <span class="text-red">no</span> recopilamos',
    sec_nao_intro: 'La lista de lo que <strong>nunca</strong> recopilamos es más importante que lo que sí recopilamos:',
    sec_nao_1_title: 'Ningún dato de registro',
    sec_nao_1_text:  'Nombre, correo, DNI, teléfono — no lo pedimos, no lo recopilamos, no lo almacenamos.',
    sec_nao_2_title: 'Ningún historial de búsquedas',
    sec_nao_2_text:  'Lo que buscas permanece en tu dispositivo. No sabemos qué consultaste.',
    sec_nao_3_title: 'Ninguna ubicación persistida',
    sec_nao_3_text:  'El GPS se usa solo para identificar tu país. Tu ubicación no se envía ni se almacena.',
    sec_nao_4_title: 'Sin cookies de rastreo',
    sec_nao_4_text:  'No utilizamos cookies de terceros, píxeles de seguimiento ni herramientas de retargeting.',
    sec_nao_5_title: 'Sin perfiles de usuario',
    sec_nao_5_text:  'No existe un "perfil tuyo" en nuestros sistemas. Eres completamente anónimo para nosotros.',
    sec_nao_6_title: 'Sin venta de datos',
    sec_nao_6_text:  'No monetizamos datos de usuarios. Nunca. Nuestro modelo no depende de eso.',

    // Permisos de la App
    sec_perm_title:          'Permisos de la App (iOS &amp; Android)',
    sec_perm_intro:          'Las aplicaciones móviles de GlobalSOS solo solicitan los permisos estrictamente necesarios para funcionar:',
    sec_perm_header_name:    'Permiso',
    sec_perm_header_purpose: 'Finalidad',
    sec_perm_header_sent:    '¿Datos enviados?',
    sec_perm_location_name:  'Ubicación',
    sec_perm_location_desc:  'Identificar automáticamente el país para mostrar los números locales',
    sec_perm_phone_name:     'Teléfono',
    sec_perm_phone_desc:     'Permitir llamar directamente a los servicios de emergencia desde la app',
    sec_perm_internet_name:  'Internet',
    sec_perm_internet_desc:  'Actualizar la base de datos de números de emergencia',
    sec_perm_status_no:      'No',
    sec_perm_status_min:     'Mínimo',
    sec_perm_note:           '<strong>Nota:</strong> ningún permiso se solicita sin que lo sepas. La app funciona en modo sin conexión para todas las funciones esenciales.',

    // Sobre el Sitio
    sec_site_title: 'Sobre el Sitio Web',
    sec_site_intro: 'GlobalSOS Web está construido en HTML, CSS y JavaScript puro, sin dependencias de rastreo. Específicamente:',
    sec_site_item1: '<strong>Sin Google Analytics</strong> ni ninguna herramienta similar de analítica.',
    sec_site_item2: '<strong>Sin Meta Pixel</strong>, Google Ads ni ningún píxel de terceros.',
    sec_site_item3: '<strong>Sin cookies de terceros.</strong> El único dato almacenado localmente es tu preferencia de idioma (<code>gsos_lang</code> en <code>localStorage</code>).',
    sec_site_item4: '<strong>Detección de idioma por IP:</strong> al cargar la página, se realiza una solicitud anónima a <code>ipapi.co</code> para identificar tu país y sugerir el idioma correcto. Esta consulta la hace tu navegador directamente al servicio, sin nuestra intermediación. Consulta la <a href="https://ipapi.co/privacy/" target="_blank" rel="noopener" class="policy-link">política de privacidad de ipapi.co</a>.',
    sec_site_item5: '<strong>Fuentes externas:</strong> las tipografías se cargan desde Google Fonts. Consulta la <a href="https://policies.google.com/privacy" target="_blank" rel="noopener" class="policy-link">política de privacidad de Google</a>.',

    // Base de Datos
    sec_data_title: 'Base de Datos de Números',
    sec_data_p1:    'Los números de emergencia mostrados en GlobalSOS son información de dominio público, compilada de fuentes oficiales de los gobiernos y servicios de emergencia de cada país.',
    sec_data_p2:    'La base de datos se revisa y actualiza periódicamente para garantizar su precisión. Si identificas un número incorrecto, <a href="#contato" class="policy-link">contacta</a> al equipo.',

    // Tus Derechos
    sec_rights_title: 'Tus Derechos',
    sec_rights_p1:    'Como GlobalSOS no recopila datos personales identificables, no existen datos personales tuyos almacenados en nuestros sistemas para acceder, corregir o eliminar.',
    sec_rights_p2:    'Si resides en una jurisdicción con legislación de protección de datos (como la <strong>LGPD</strong> en Brasil, el <strong>GDPR</strong> en la Unión Europea o la <strong>CCPA</strong> en California), ten en cuenta que GlobalSOS fue diseñado para cumplir con esas regulaciones por defecto — simplemente por no recopilar los datos que protegen.',
    sec_rights_p3:    'Si tienes alguna duda o solicitud, contáctanos por el canal indicado a continuación.',

    // Contacto
    sec_contact_title: 'Contacto',
    sec_contact_intro: '¿Tienes dudas sobre esta política, encontraste un número incorrecto o quieres reportar una preocupación de privacidad? Habla con el equipo:',
    sec_contact_email: '<a href="mailto:contact@globalsos.app" class="policy-link">contact@globalsos.app</a>',
    sec_contact_github: 'Abre un issue en los repositorios: <a href="https://github.com/og1421/GlobalSOS" target="_blank" rel="noopener" class="policy-link">iOS</a> · <a href="https://github.com/og1421/GlobalSOS-Android" target="_blank" rel="noopener" class="policy-link">Android</a>',
    sec_contact_note:  'Esta política puede actualizarse conforme el producto evoluciona. Los cambios relevantes se comunicarán en los repositorios del proyecto.',
  },

  // ── French ───────────────────────────────────────────────────────
  fr: {
    // Hero
    sec_hero_title:    'Confidentialité &amp; Sécurité',
    sec_hero_subtitle: 'GlobalSOS a été conçu sur une prémisse claire : vous n\'avez pas besoin de nous communiquer de données personnelles pour obtenir de l\'aide en cas d\'urgence.',
    sec_hero_badge:    'Dernière mise à jour : Mai 2026',

    // TOC
    sec_toc_label:      'Sur cette page',
    sec_toc_resumo:     'Résumé',
    sec_toc_coleta:     'Ce que nous collectons',
    sec_toc_nao:        'Ce que nous ne collectons PAS',
    sec_toc_permissoes: 'Autorisations de l\'app',
    sec_toc_site:       'À propos du site',
    sec_toc_numeros:    'Base de numéros',
    sec_toc_direitos:   'Vos droits',
    sec_toc_contato:    'Contact',

    // Résumé
    sec_resumo_title:          'Résumé',
    sec_resumo_highlight_strong: 'Résumé en une ligne',
    sec_resumo_highlight_p:    'GlobalSOS ne collecte pas de données personnelles identifiables. Point.',
    sec_resumo_p1:             'Nous croyons que l\'accès aux informations d\'urgence est un droit fondamental, pas un produit. C\'est pourquoi GlobalSOS fonctionne entièrement sans que vous ayez besoin de créer un compte, de vous connecter ou de fournir des données personnelles.',
    sec_resumo_p2:             'Ce document détaille exactement ce qui se passe — et ce qui <em>ne</em> se passe <em>pas</em> — avec vos informations lorsque vous utilisez notre site ou application.',

    // Ce que nous collectons
    sec_coleta_title: 'Ce que nous collectons',
    sec_coleta_intro: 'Pour que le site et l\'application fonctionnent correctement, les données techniques suivantes sont traitées <strong>localement sur votre appareil</strong> et ne sont jamais envoyées à des serveurs externes :',
    sec_coleta_item1: '<strong>Langue du système</strong> — détectée par le navigateur pour afficher le site dans la bonne langue automatiquement. Elle n\'est pas stockée sur nos serveurs.',
    sec_coleta_item2: '<strong>Préférence de langue</strong> — si vous changez la langue manuellement, cette préférence est sauvegardée <em>uniquement sur votre appareil</em> via <code>localStorage</code>.',
    sec_coleta_item3: '<strong>IP pour la détection du pays</strong> — au chargement du site, nous effectuons une requête anonyme au service <code>ipapi.co</code> pour suggérer la langue en fonction de votre pays. Aucune donnée vous concernant n\'est stockée par nous dans ce processus.',

    // Ce que nous ne collectons PAS
    sec_nao_title: 'Ce que nous ne <span class="text-red">collectons pas</span>',
    sec_nao_intro: 'La liste de ce que nous ne collectons <strong>jamais</strong> est plus importante que ce que nous collectons :',
    sec_nao_1_title: 'Aucune donnée d\'inscription',
    sec_nao_1_text:  'Nom, e-mail, numéro d\'identification, téléphone — nous ne le demandons pas, ne le collectons pas, ne le stockons pas.',
    sec_nao_2_title: 'Aucun historique de recherche',
    sec_nao_2_text:  'Ce que vous recherchez reste sur votre appareil. Nous ne savons pas ce que vous avez consulté.',
    sec_nao_3_title: 'Aucune localisation persistée',
    sec_nao_3_text:  'Le GPS est utilisé uniquement pour identifier votre pays. Votre localisation n\'est ni envoyée ni stockée.',
    sec_nao_4_title: 'Aucun cookie de suivi',
    sec_nao_4_text:  'Nous n\'utilisons pas de cookies tiers, de pixels de suivi ni d\'outils de reciblage.',
    sec_nao_5_title: 'Aucun profil utilisateur',
    sec_nao_5_text:  'Il n\'existe pas de « profil de vous » dans nos systèmes. Vous êtes complètement anonyme pour nous.',
    sec_nao_6_title: 'Aucune vente de données',
    sec_nao_6_text:  'Nous ne monétisons pas les données des utilisateurs. Jamais. Notre modèle n\'en dépend pas.',

    // Autorisations de l'app
    sec_perm_title:          'Autorisations de l\'app (iOS &amp; Android)',
    sec_perm_intro:          'Les applications mobiles GlobalSOS ne demandent que les autorisations strictement nécessaires au fonctionnement :',
    sec_perm_header_name:    'Autorisation',
    sec_perm_header_purpose: 'Finalité',
    sec_perm_header_sent:    'Données envoyées ?',
    sec_perm_location_name:  'Localisation',
    sec_perm_location_desc:  'Identifier automatiquement le pays pour afficher les numéros locaux',
    sec_perm_phone_name:     'Téléphone',
    sec_perm_phone_desc:     'Permettre d\'appeler directement les services d\'urgence depuis l\'app',
    sec_perm_internet_name:  'Internet',
    sec_perm_internet_desc:  'Mettre à jour la base de données des numéros d\'urgence',
    sec_perm_status_no:      'Non',
    sec_perm_status_min:     'Minimal',
    sec_perm_note:           '<strong>Remarque :</strong> aucune autorisation n\'est demandée à votre insu. L\'app fonctionne en mode hors ligne pour toutes les fonctions essentielles.',

    // À propos du site
    sec_site_title: 'À propos du site Web',
    sec_site_intro: 'GlobalSOS Web est construit en HTML, CSS et JavaScript pur, sans dépendances de suivi. En particulier :',
    sec_site_item1: '<strong>Pas de Google Analytics</strong> ni d\'outil similaire d\'analyse.',
    sec_site_item2: '<strong>Pas de Meta Pixel</strong>, Google Ads ni aucun pixel tiers.',
    sec_site_item3: '<strong>Pas de cookies tiers.</strong> La seule donnée stockée localement est votre préférence de langue (<code>gsos_lang</code> dans <code>localStorage</code>).',
    sec_site_item4: '<strong>Détection de langue par IP :</strong> au chargement de la page, une requête anonyme est envoyée à <code>ipapi.co</code> pour identifier votre pays et suggérer la bonne langue. Cette requête est effectuée directement par votre navigateur vers le service, sans notre intermédiation. Consultez la <a href="https://ipapi.co/privacy/" target="_blank" rel="noopener" class="policy-link">politique de confidentialité d\'ipapi.co</a>.',
    sec_site_item5: '<strong>Polices externes :</strong> les polices typographiques sont chargées via Google Fonts. Voir la <a href="https://policies.google.com/privacy" target="_blank" rel="noopener" class="policy-link">politique de confidentialité de Google</a>.',

    // Base de numéros
    sec_data_title: 'Base de données de numéros',
    sec_data_p1:    'Les numéros d\'urgence affichés dans GlobalSOS sont des informations du domaine public, compilées à partir de sources officielles des gouvernements et services d\'urgence de chaque pays.',
    sec_data_p2:    'La base de données est révisée et mise à jour périodiquement pour garantir son exactitude. Si vous identifiez un numéro incorrect, <a href="#contato" class="policy-link">contactez</a> l\'équipe.',

    // Vos droits
    sec_rights_title: 'Vos droits',
    sec_rights_p1:    'Comme GlobalSOS ne collecte pas de données personnelles identifiables, il n\'existe aucune donnée personnelle vous concernant dans nos systèmes à consulter, corriger ou supprimer.',
    sec_rights_p2:    'Si vous résidez dans une juridiction dotée d\'une législation sur la protection des données (comme la <strong>LGPD</strong> au Brésil, le <strong>RGPD</strong> dans l\'Union européenne ou le <strong>CCPA</strong> en Californie), sachez que GlobalSOS a été conçu pour respecter ces réglementations par défaut — simplement en ne collectant pas les données qu\'elles protègent.',
    sec_rights_p3:    'Si vous avez des questions ou des demandes, contactez-nous via le canal ci-dessous.',

    // Contact
    sec_contact_title: 'Contact',
    sec_contact_intro: 'Des questions sur cette politique, vous avez trouvé un numéro incorrect ou souhaitez signaler une préoccupation en matière de confidentialité ? Parlez à l\'équipe :',
    sec_contact_email: '<a href="mailto:contact@globalsos.app" class="policy-link">contact@globalsos.app</a>',
    sec_contact_github: 'Ouvrez un ticket dans les dépôts : <a href="https://github.com/og1421/GlobalSOS" target="_blank" rel="noopener" class="policy-link">iOS</a> · <a href="https://github.com/og1421/GlobalSOS-Android" target="_blank" rel="noopener" class="policy-link">Android</a>',
    sec_contact_note:  'Cette politique peut être mise à jour au fur et à mesure de l\'évolution du produit. Les modifications pertinentes seront communiquées dans les dépôts du projet.',
  },

  // ── German ───────────────────────────────────────────────────────
  de: {
    // Hero
    sec_hero_title:    'Datenschutz &amp; Sicherheit',
    sec_hero_subtitle: 'GlobalSOS wurde nach einem klaren Grundsatz entwickelt: Sie müssen uns keine persönlichen Daten mitteilen, um im Notfall Hilfe zu erhalten.',
    sec_hero_badge:    'Letzte Aktualisierung: Mai 2026',

    // TOC
    sec_toc_label:      'Auf dieser Seite',
    sec_toc_resumo:     'Zusammenfassung',
    sec_toc_coleta:     'Was wir erfassen',
    sec_toc_nao:        'Was wir NICHT erfassen',
    sec_toc_permissoes: 'App-Berechtigungen',
    sec_toc_site:       'Über die Website',
    sec_toc_numeros:    'Nummern-Datenbank',
    sec_toc_direitos:   'Ihre Rechte',
    sec_toc_contato:    'Kontakt',

    // Zusammenfassung
    sec_resumo_title:          'Zusammenfassung',
    sec_resumo_highlight_strong: 'Zusammenfassung in einem Satz',
    sec_resumo_highlight_p:    'GlobalSOS erfasst keine personenbezogenen Daten. Punkt.',
    sec_resumo_p1:             'Wir sind der Überzeugung, dass der Zugang zu Notfallinformationen ein Grundrecht ist, kein Produkt. Deshalb funktioniert GlobalSOS vollständig ohne dass Sie ein Konto erstellen, sich anmelden oder persönliche Daten angeben müssen.',
    sec_resumo_p2:             'Dieses Dokument erläutert genau, was passiert — und was <em>nicht</em> passiert — mit Ihren Informationen, wenn Sie unsere Website oder App nutzen.',

    // Was wir erfassen
    sec_coleta_title: 'Was wir erfassen',
    sec_coleta_intro: 'Damit Website und App korrekt funktionieren, werden folgende technische Daten <strong>lokal auf Ihrem Gerät</strong> verarbeitet und niemals an externe Server übermittelt:',
    sec_coleta_item1: '<strong>Systemsprache</strong> — vom Browser erkannt, um die Website automatisch in der richtigen Sprache anzuzeigen. Wird nicht auf unseren Servern gespeichert.',
    sec_coleta_item2: '<strong>Spracheinstellung</strong> — wenn Sie die Sprache manuell ändern, wird diese Einstellung <em>nur auf Ihrem Gerät</em> über <code>localStorage</code> gespeichert.',
    sec_coleta_item3: '<strong>IP zur Ländererkennung</strong> — beim Laden der Website wird eine anonyme Anfrage an den Dienst <code>ipapi.co</code> gestellt, um die Sprache basierend auf Ihrem Land vorzuschlagen. Dabei werden von uns keine Daten über Sie gespeichert.',

    // Was wir NICHT erfassen
    sec_nao_title: 'Was wir <span class="text-red">nicht</span> erfassen',
    sec_nao_intro: 'Die Liste dessen, was wir <strong>niemals</strong> erfassen, ist wichtiger als das, was wir erfassen:',
    sec_nao_1_title: 'Keine Registrierungsdaten',
    sec_nao_1_text:  'Name, E-Mail, Ausweisnummer, Telefon — wir fragen nicht danach, erfassen es nicht, speichern es nicht.',
    sec_nao_2_title: 'Kein Suchverlauf',
    sec_nao_2_text:  'Was Sie suchen, bleibt auf Ihrem Gerät. Wir wissen nicht, was Sie nachgeschlagen haben.',
    sec_nao_3_title: 'Kein gespeicherter Standort',
    sec_nao_3_text:  'GPS wird nur zur Erkennung Ihres Landes verwendet. Ihr Standort wird weder übermittelt noch gespeichert.',
    sec_nao_4_title: 'Keine Tracking-Cookies',
    sec_nao_4_text:  'Wir verwenden keine Drittanbieter-Cookies, Tracking-Pixel oder Retargeting-Tools.',
    sec_nao_5_title: 'Keine Benutzerprofile',
    sec_nao_5_text:  'Es gibt kein „Profil von Ihnen" in unseren Systemen. Sie sind für uns vollständig anonym.',
    sec_nao_6_title: 'Kein Datenverkauf',
    sec_nao_6_text:  'Wir monetarisieren keine Nutzerdaten. Niemals. Unser Modell hängt nicht davon ab.',

    // App-Berechtigungen
    sec_perm_title:          'App-Berechtigungen (iOS &amp; Android)',
    sec_perm_intro:          'Die mobilen GlobalSOS-Apps fordern nur die für den Betrieb unbedingt erforderlichen Berechtigungen an:',
    sec_perm_header_name:    'Berechtigung',
    sec_perm_header_purpose: 'Zweck',
    sec_perm_header_sent:    'Daten gesendet?',
    sec_perm_location_name:  'Standort',
    sec_perm_location_desc:  'Land automatisch erkennen, um lokale Nummern anzuzeigen',
    sec_perm_phone_name:     'Telefon',
    sec_perm_phone_desc:     'Direktes Anrufen von Notfalldiensten aus der App ermöglichen',
    sec_perm_internet_name:  'Internet',
    sec_perm_internet_desc:  'Datenbank der Notrufnummern aktualisieren',
    sec_perm_status_no:      'Nein',
    sec_perm_status_min:     'Minimal',
    sec_perm_note:           '<strong>Hinweis:</strong> Es wird keine Berechtigung ohne Ihr Wissen angefordert. Die App funktioniert im Offline-Modus für alle wesentlichen Funktionen.',

    // Über die Website
    sec_site_title: 'Über die Website',
    sec_site_intro: 'GlobalSOS Web ist in reinem HTML, CSS und JavaScript entwickelt, ohne Tracking-Abhängigkeiten. Im Einzelnen:',
    sec_site_item1: '<strong>Kein Google Analytics</strong> oder ähnliche Analyse-Tools.',
    sec_site_item2: '<strong>Kein Meta Pixel</strong>, Google Ads oder sonstige Drittanbieter-Pixel.',
    sec_site_item3: '<strong>Keine Drittanbieter-Cookies.</strong> Das einzige lokal gespeicherte Datum ist Ihre Sprachpräferenz (<code>gsos_lang</code> in <code>localStorage</code>).',
    sec_site_item4: '<strong>IP-basierte Spracherkennung:</strong> beim Laden der Seite wird eine anonyme Anfrage an <code>ipapi.co</code> gestellt, um Ihr Land zu ermitteln und die passende Sprache vorzuschlagen. Diese Anfrage erfolgt direkt von Ihrem Browser an den Dienst, ohne unsere Vermittlung. Lesen Sie die <a href="https://ipapi.co/privacy/" target="_blank" rel="noopener" class="policy-link">Datenschutzrichtlinie von ipapi.co</a>.',
    sec_site_item5: '<strong>Externe Schriften:</strong> Schriftarten werden über Google Fonts geladen. Siehe <a href="https://policies.google.com/privacy" target="_blank" rel="noopener" class="policy-link">Datenschutzerklärung von Google</a>.',

    // Nummern-Datenbank
    sec_data_title: 'Nummern-Datenbank',
    sec_data_p1:    'Die in GlobalSOS angezeigten Notrufnummern sind öffentlich zugängliche Informationen, zusammengestellt aus offiziellen Quellen der Regierungen und Notfalldienste jedes Landes.',
    sec_data_p2:    'Die Datenbank wird regelmäßig überprüft und aktualisiert, um die Genauigkeit zu gewährleisten. Wenn Sie eine fehlerhafte Nummer entdecken, <a href="#contato" class="policy-link">kontaktieren</a> Sie bitte das Team.',

    // Ihre Rechte
    sec_rights_title: 'Ihre Rechte',
    sec_rights_p1:    'Da GlobalSOS keine personenbezogenen Daten erfasst, sind in unseren Systemen keine personenbezogenen Daten von Ihnen gespeichert, auf die Sie zugreifen, die Sie berichtigen oder löschen könnten.',
    sec_rights_p2:    'Wenn Sie in einem Rechtsgebiet mit Datenschutzgesetzgebung ansässig sind (wie der <strong>LGPD</strong> in Brasilien, der <strong>DSGVO</strong> in der Europäischen Union oder dem <strong>CCPA</strong> in Kalifornien), beachten Sie bitte, dass GlobalSOS standardmäßig zur Einhaltung dieser Vorschriften konzipiert wurde — einfach dadurch, dass die von ihnen geschützten Daten nicht erfasst werden.',
    sec_rights_p3:    'Wenn Sie Fragen oder Anfragen haben, wenden Sie sich bitte über den unten angegebenen Kanal an uns.',

    // Kontakt
    sec_contact_title: 'Kontakt',
    sec_contact_intro: 'Haben Sie Fragen zu dieser Richtlinie, eine falsche Nummer gefunden oder möchten Sie ein Datenschutzanliegen melden? Wenden Sie sich an das Team:',
    sec_contact_email: '<a href="mailto:contact@globalsos.app" class="policy-link">contact@globalsos.app</a>',
    sec_contact_github: 'Öffnen Sie ein Issue in den Repositories: <a href="https://github.com/og1421/GlobalSOS" target="_blank" rel="noopener" class="policy-link">iOS</a> · <a href="https://github.com/og1421/GlobalSOS-Android" target="_blank" rel="noopener" class="policy-link">Android</a>',
    sec_contact_note:  'Diese Richtlinie kann aktualisiert werden, wenn sich das Produkt weiterentwickelt. Relevante Änderungen werden in den Projekt-Repositories kommuniziert.',
  },

  // ── Italian ───────────────────────────────────────────────────────
  it: {
    // Hero
    sec_hero_title:    'Privacy &amp; Sicurezza',
    sec_hero_subtitle: 'GlobalSOS è stato costruito su una premessa chiara: non hai bisogno di darci alcun dato personale per ricevere aiuto in caso di emergenza.',
    sec_hero_badge:    'Ultimo aggiornamento: Maggio 2026',

    // TOC
    sec_toc_label:      'In questa pagina',
    sec_toc_resumo:     'Riepilogo',
    sec_toc_coleta:     'Cosa raccogliamo',
    sec_toc_nao:        'Cosa NON raccogliamo',
    sec_toc_permissoes: 'Permessi dell\'app',
    sec_toc_site:       'Sul sito web',
    sec_toc_numeros:    'Database numeri',
    sec_toc_direitos:   'I tuoi diritti',
    sec_toc_contato:    'Contatto',

    // Riepilogo
    sec_resumo_title:          'Riepilogo',
    sec_resumo_highlight_strong: 'Riepilogo in una riga',
    sec_resumo_highlight_p:    'GlobalSOS non raccoglie dati personali identificabili. Punto.',
    sec_resumo_p1:             'Crediamo che l\'accesso alle informazioni di emergenza sia un diritto fondamentale, non un prodotto. Ecco perché GlobalSOS funziona completamente senza che tu debba creare un account, accedere o fornire dati personali.',
    sec_resumo_p2:             'Questo documento dettaglia esattamente cosa accade — e cosa <em>non</em> accade — con le tue informazioni quando usi il nostro sito o l\'app.',

    // Cosa raccogliamo
    sec_coleta_title: 'Cosa raccogliamo',
    sec_coleta_intro: 'Affinché il sito e l\'app funzionino correttamente, i seguenti dati tecnici vengono elaborati <strong>localmente sul tuo dispositivo</strong> e mai inviati a server esterni:',
    sec_coleta_item1: '<strong>Lingua del sistema</strong> — rilevata dal browser per visualizzare il sito nella lingua corretta automaticamente. Non viene memorizzata sui nostri server.',
    sec_coleta_item2: '<strong>Preferenza di lingua</strong> — se cambi la lingua manualmente, tale preferenza viene salvata <em>solo sul tuo dispositivo</em> tramite <code>localStorage</code>.',
    sec_coleta_item3: '<strong>IP per il rilevamento del paese</strong> — al caricamento del sito, effettuiamo una query anonima al servizio <code>ipapi.co</code> per suggerire la lingua in base al tuo paese. Nessun dato viene memorizzato da noi in questo processo.',

    // Cosa NON raccogliamo
    sec_nao_title: 'Cosa <span class="text-red">non</span> raccogliamo',
    sec_nao_intro: 'L\'elenco di ciò che <strong>non raccogliamo mai</strong> è più importante di ciò che raccogliamo:',
    sec_nao_1_title: 'Nessun dato di registrazione',
    sec_nao_1_text:  'Nome, e-mail, codice fiscale, telefono — non lo chiediamo, non lo raccogliamo, non lo memorizziamo.',
    sec_nao_2_title: 'Nessuna cronologia di ricerca',
    sec_nao_2_text:  'Ciò che cerchi rimane sul tuo dispositivo. Non sappiamo cosa hai cercato.',
    sec_nao_3_title: 'Nessuna posizione memorizzata',
    sec_nao_3_text:  'Il GPS viene utilizzato solo per identificare il tuo paese. La tua posizione non viene inviata né memorizzata.',
    sec_nao_4_title: 'Nessun cookie di tracciamento',
    sec_nao_4_text:  'Non utilizziamo cookie di terze parti, pixel di tracciamento o strumenti di retargeting.',
    sec_nao_5_title: 'Nessun profilo utente',
    sec_nao_5_text:  'Non esiste un "profilo di te" nei nostri sistemi. Sei completamente anonimo per noi.',
    sec_nao_6_title: 'Nessuna vendita di dati',
    sec_nao_6_text:  'Non monetizziamo i dati degli utenti. Mai. Il nostro modello non ne dipende.',

    // Permessi dell'app
    sec_perm_title:          'Permessi dell\'app (iOS &amp; Android)',
    sec_perm_intro:          'Le app mobili GlobalSOS richiedono solo le autorizzazioni strettamente necessarie al funzionamento:',
    sec_perm_header_name:    'Permesso',
    sec_perm_header_purpose: 'Finalità',
    sec_perm_header_sent:    'Dati inviati?',
    sec_perm_location_name:  'Posizione',
    sec_perm_location_desc:  'Identificare automaticamente il paese per mostrare i numeri locali',
    sec_perm_phone_name:     'Telefono',
    sec_perm_phone_desc:     'Consentire di chiamare direttamente i servizi di emergenza dall\'app',
    sec_perm_internet_name:  'Internet',
    sec_perm_internet_desc:  'Aggiornare il database dei numeri di emergenza',
    sec_perm_status_no:      'No',
    sec_perm_status_min:     'Minimo',
    sec_perm_note:           '<strong>Nota:</strong> nessuna autorizzazione viene richiesta a tua insaputa. L\'app funziona in modalità offline per tutte le funzioni essenziali.',

    // Sul sito web
    sec_site_title: 'Sul sito web',
    sec_site_intro: 'GlobalSOS Web è costruito in HTML, CSS e JavaScript puro, senza dipendenze di tracciamento. Nello specifico:',
    sec_site_item1: '<strong>Nessun Google Analytics</strong> o strumento di analisi simile.',
    sec_site_item2: '<strong>Nessun Meta Pixel</strong>, Google Ads o pixel di terze parti.',
    sec_site_item3: '<strong>Nessun cookie di terze parti.</strong> L\'unico dato memorizzato localmente è la tua preferenza di lingua (<code>gsos_lang</code> nel <code>localStorage</code>).',
    sec_site_item4: '<strong>Rilevamento lingua via IP:</strong> al caricamento della pagina, viene effettuata una richiesta anonima a <code>ipapi.co</code> per identificare il tuo paese e suggerire la lingua corretta. Questa richiesta viene effettuata direttamente dal tuo browser al servizio, senza nostra intermediazione. Consulta la <a href="https://ipapi.co/privacy/" target="_blank" rel="noopener" class="policy-link">privacy policy di ipapi.co</a>.',
    sec_site_item5: '<strong>Font esterni:</strong> i caratteri tipografici sono caricati tramite Google Fonts. Vedi la <a href="https://policies.google.com/privacy" target="_blank" rel="noopener" class="policy-link">privacy policy di Google</a>.',

    // Database numeri
    sec_data_title: 'Database dei numeri',
    sec_data_p1:    'I numeri di emergenza mostrati in GlobalSOS sono informazioni di dominio pubblico, compilate da fonti ufficiali dei governi e dei servizi di emergenza di ogni paese.',
    sec_data_p2:    'Il database viene rivisto e aggiornato periodicamente per garantirne l\'accuratezza. Se identifichi un numero errato, <a href="#contato" class="policy-link">contatta</a> il team.',

    // I tuoi diritti
    sec_rights_title: 'I tuoi diritti',
    sec_rights_p1:    'Poiché GlobalSOS non raccoglie dati personali identificabili, non esistono dati personali tuoi memorizzati nei nostri sistemi da consultare, correggere o eliminare.',
    sec_rights_p2:    'Se risiedi in una giurisdizione con normative sulla protezione dei dati (come la <strong>LGPD</strong> in Brasile, il <strong>GDPR</strong> nell\'Unione Europea o la <strong>CCPA</strong> in California), sappi che GlobalSOS è stato progettato per conformarsi a queste normative per impostazione predefinita — semplicemente non raccogliendo i dati che proteggono.',
    sec_rights_p3:    'Se hai domande o richieste, contattaci tramite il canale indicato di seguito.',

    // Contatto
    sec_contact_title: 'Contatto',
    sec_contact_intro: 'Hai domande su questa politica, hai trovato un numero errato o vuoi segnalare una preoccupazione sulla privacy? Contatta il team:',
    sec_contact_email: '<a href="mailto:contact@globalsos.app" class="policy-link">contact@globalsos.app</a>',
    sec_contact_github: 'Apri una segnalazione nei repository: <a href="https://github.com/og1421/GlobalSOS" target="_blank" rel="noopener" class="policy-link">iOS</a> · <a href="https://github.com/og1421/GlobalSOS-Android" target="_blank" rel="noopener" class="policy-link">Android</a>',
    sec_contact_note:  'Questa politica può essere aggiornata con l\'evoluzione del prodotto. Le modifiche rilevanti saranno comunicate nei repository del progetto.',
  },

};

// ── Merge into the global TRANSLATIONS object ─────────────────────
Object.keys(SECURITY_TRANSLATIONS).forEach(lang => {
  if (TRANSLATIONS[lang]) Object.assign(TRANSLATIONS[lang], SECURITY_TRANSLATIONS[lang]);
});
