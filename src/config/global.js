export default {
  global: {
    componenteFormativo: 'Paneles',
    descripcionCurso:
      'El componente formativo explica las funciones de los paneles de Adobe Illustrator, como los paneles de color, degradado, buscatrazos y apariencia, entre otros. Detalla cómo aplicar colores, efectos y gestionar capas en los proyectos de diseño. Además, ofrece una guía sobre la manipulación de texto y formas, proporcionando herramientas para la creación y transformación de ilustraciones vectoriales de manera eficiente.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Panel Color',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Panel Degradado',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Panel Guía de color',
            hash: 't_2_1',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Panel Buscatrazos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Panel Apariencia',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Grupo de efectos vectoriales',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Grupo de efectos de rasterizado',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Paneles de texto',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Panel Carácter',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Panel Párrafo',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Manejo de capas',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Panel Apariencia',
      referencia:
        'Camilo Adobe. (2024). <i>CAP. 24 - ILLUSTRATOR 2024 - PANEL APARIENCIA Y ESTILOS GRÁFICOS I</i> (video). YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=CfaySzEmlEU',
    },
  ],
  glosario: [
    {
      termino: 'Término',
      significado: 'Texto de la definición',
    },
    {
      termino: 'Apariencia',
      significado:
        'panel en Adobe Illustrator que permite modificar el aspecto de un objeto sin afectar su estructura interna, incluyendo rellenos, trazos y efectos.',
    },
    {
      termino: 'Buscatrazos',
      significado:
        'herramienta que permite combinar, dividir o eliminar partes de objetos vectoriales para crear nuevas formas.',
    },
    {
      termino: 'Capas',
      significado:
        'herramienta que organiza los diferentes elementos de una ilustración en Adobe Illustrator, facilitando su manipulación y visibilidad.',
    },
    {
      termino: 'Degradado',
      significado:
        'transición suave entre dos o más colores aplicada a un objeto, controlada mediante el panel de degradado.',
    },
    {
      termino: 'Efectos vectoriales',
      significado:
        'modificaciones aplicadas a objetos vectoriales, como extrusión, biselado o deformación, que mantienen la naturaleza editable del objeto.',
    },
    {
      termino: 'Expandir',
      significado:
        'opción en el panel de buscatrazos que conserva la forma general de un objeto compuesto, pero sin permitir la edición de sus partes individuales.',
    },
    {
      termino: 'Guía de color',
      significado:
        'panel que permite seleccionar y crear combinaciones de colores armónicas basadas en un color base.',
    },
    {
      termino: 'Opacidad',
      significado:
        'grado de transparencia de un color o relleno aplicado a un objeto, que se ajusta en el panel de degradado o apariencia.',
    },
    {
      termino: 'Relleno',
      significado:
        'color o patrón aplicado al interior de un objeto vectorial en Adobe Illustrator, seleccionado desde el panel de color.',
    },
    {
      termino: 'Trazado',
      significado:
        'contorno de un objeto vectorial que puede ser editado para cambiar su forma o aplicarle efectos de apariencia.',
    },
  ],
  referencias: [
    {
      referencia: 'Adobe. (2015). Ayuda de Adobe Illustrator CC. ',
      link:
        'https://helpx.adobe.com/archive/es/illustrator/cc/2015/illustrator_reference.pdf',
    },
    {
      referencia: 'Adobe. (2024). Crear gráficos en 3D en Illustrator. ',
      link:
        'https://helpx.adobe.com/co/illustrator/using/create-3d-graphics.html',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Cristian Andrés Osorio Caiza',
          cargo: 'Experto temático',
          centro: 'Centro Agroindustrial - Regional Quindío',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Blanca Flor Tinoco Torres',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Jhon Jairo Urueta Alvarez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        //{
        //  nombre: 'Nombre',
        //  cargo: 'Animador y productor audiovisual',
        //  centro: 'Centro de Servicios de Salud - Regional Antioquia',
        //},
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        //{
        //  nombre: 'Jaime Hernán Tejada Llano',
        //  cargo: 'Validador y vinculador de recursos educativos digitales',
        //  centro: 'Centro de Servicios de Salud - Regional Antioquia',
        //},
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
