export default {
  global: {
    componenteFormativo: 'Reportes y libros contables',
    descripcionCurso:
      'En este componente el aprendiz focaliza su aprendizaje en la verificación de los registros contables, la manera de realizar los ajustes para que la información sea fiable y elaborar los estados financieros. ',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Verificación de registros',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Objetivo y procedimiento de verificación',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Ajustes',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Deterioro',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Depreciaciones',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Amortizaciones',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Diferencia en cambio de visas',
            hash: 't_1_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.7',
            titulo: 'Arqueo de caja',
            hash: 't_1_7',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.8',
            titulo: 'Conciliación bancaria',
            hash: 't_1_8',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Conservación de documentos y archivo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Ley general de archivos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Consecutivo, cronológico por asuntos',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Tabla de retención documental',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Sistema de gestión electrónica de documentos',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Manejo de recursos de residuos',
            hash: 't_2_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.6',
            titulo: 'Normas de gestión ambiental en las empresas',
            hash: 't_2_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.7',
            titulo: 'Seguridad y salud en el trabajo',
            hash: 't_2_7',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.8',
            titulo: 'Medidas preventivas de seguridad en el trabajo',
            hash: 't_2_8',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Libros y reportes: estados financieros',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Conceptos y clasificación',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Reportes de estados financieros de propósito general',
            hash: 't_3_2',
          },
        ],
      },
    ],
    subMenu: [
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
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Angulo, U. (2018). Contabilidad financiera, correlacionado con NIIF. Ediciones de la U. Archivo General de la Nación Colombia. (2020). Tabla de retención documental TRD. ',
      link:
        'https://www.archivogeneral.gov.co/sites/default/files/Estructura_Web/3_Transparencia/10.6%20tablas%20de%20retencion/Trdjunio_2016.pdf',
    },
    {
      referencia: 'CTCP. (2018). Norma Internacional de Contabilidad NIC 8. ',
      link:
        'http://www.ctcp.gov.co/proyectos/contabilidad-e-informacion-financiera/documentos-organismos-internacionales/compilacion-marcos-tecnicos-de-informacion-financi/1534369239-2962',
    },
    {
      referencia:
        'NICNIIF. (2020). Norma Internacional de Contabilidad 2: Presentación de Estados Financieros. ',
      link: 'http://nicniif.org/files/NIC%202%20Inventarios.pdf',
    },
    {
      referencia:
        'Pérez, J., y Fol, R. (2019). Manual de casos prácticos de ISR. Tax Editores. ',
    },
    {
      referencia:
        'Martínez, V. (2020). Procedimientos de auditoría para verificar saldos. Auditol. ',
      link:
        'https://www.auditool.org/blog/auditoria-externa/6042-procedimientos-de-auditoria-para-verificar-saldos-iniciales',
    },
  ],
  glosario: [
    {
      termino: 'Asientos de ajuste',
      significado:
        'registros contables que se realizan al final de un periodo o vigencia contable después de verificar la información del periodo antes del cierre, y proceden a hechos de la empresa que no fueron reconocidos oportunamente, o se realizan para corregir errores por omisión o errores de en el registro en sí.',
    },
    {
      termino: 'Balance de prueba ajustado',
      significado:
        'listado de los saldos débitos y créditos de las cuentas de los estados financieros, que se prepara después de los asientos de ajuste y antes de los de cierre para corroborar la doble partida entre el débito y el crédito son iguales.',
    },
    {
      termino: 'Cuenta',
      significado:
        'denominación técnica para el de registro de información financiera para evidenciar los hechos económicos de la empresa.',
    },
    {
      termino: 'Cuentas de resultado',
      significado:
        'operación de una empresa en un periodo determinado, se registran a través de estas cuentas que son el grupo que registra los ingresos obtenidos, y todos los gastos que debe incurrir la empresa para operar, y al final obtener un resultado de beneficio o perdida.',
    },
    {
      termino: 'Debe',
      significado:
        'significa registrar el valor monetario al lado izquierdo representa regularmente un cargo.',
    },
    {
      termino: 'Depreciación',
      significado:
        'distribución del costo histórico de las propiedades, planta y equipo en los distintos periodos de vida útil.',
    },
    {
      termino: 'Caja y bancos',
      significado:
        'dinero efectivo y líquido que se encuentra en las cuentas de caja, y en las cuentas de ahorro y cuentas corrientes en Bancos, siendo disponibles al momento.',
    },
    {
      termino: 'Estado de situación financiera',
      significado:
        'estado de resultado derivado del registro de la información de los libros de diario y mayo, que describe los hechos económicos de activo, pasivo y patrimonio.',
    },
    {
      termino: 'Estado de resultados',
      significado:
        'estado financiero compuesto por las cuentas de ingresos, gastos y costos que reflejan el resultado del ejercicio.',
    },
    {
      termino: 'Haber',
      significado:
        'corresponde al registro al lado derecho regularmente representan abonos.',
    },
    {
      termino: 'Ingresos recibidos por anticipado',
      significado:
        'dinero recibido por la empresa como anticipo de bienes o servicios por prestar o suministrar en el futuro.',
    },
    {
      termino: 'Partida doble',
      significado:
        'igualdad que debe existir entre los registros del debe y en haber en el asiento contable del debe y haber en libros, presentando un equilibrio de sumas iguales.',
    },
    {
      termino: 'Valor residual',
      significado:
        'valor estimado que la empresa establece que podría recibir por la venta de un activo no fijo, después de haber deducido los costos estimados de depreciación y/o deterioro, si el activo cubriera la edad de vida útil o al momento de tomar la decisión.',
    },
  ],
  complementario: [
    {
      texto:
        'Presidencia de Colombia.  (1993). Decreto 2650 de 1993. Plan Único de cuentas. Superintendencia de sociedades.',
      tipo: 'PDF',
      descarga: '/downloads/Decreto_2650_del_29_de_diciembre_de_1993.pdf',
    },
    {
      texto:
        'Palacios, M. J. (s.f.). Modelo de sistema de información contable para la gestión ambiental. Universidad de Panamá',
      tipo: 'PDF',
      descarga:
        '/downloads/modelo_de_sistema_contable_para_gestion_ambiental_palacios_copete.pdf',
    },
    {
      texto:
        'Guiza, U. A. (2018). Contabilidad para la toma de decisiones. Correlacionado con NIIF. Ediciones de la U.',
      tipo: 'Libro',
      link:
        'https://books.google.com.co/books?id=JzSjDwAAQBAJ&printsec=frontcover&dq=Contabilidad+financiera,+correlacionado+con+NIIF.&hl=es-419&sa=X&redir_esc=y#v=onepage&q=Contabilidad%20financiera%2C%20correlacionado%20con%20NIIF.&f=false',
    },
    {
      texto:
        'Senado de la República de Colombia. (2021). Leyes desde 1992 - Vigencia expresa y control de constitucionalidad CODIGO_COMERCIO_PR001. ',
      tipo: 'Página web',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/codigo_comercio_pr001.html',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carlos Fernando Riaño',
        cargo: 'Experto temático',
        centro: 'Regional Norte de Santander- CIES TIC',
      },
      {
        nombre: 'Oscar Absalón Guevara',
        cargo: 'Diseñador instruccional',
        centro: 'Centro de Gestión Industrial – Regional Distrito Capital',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Revisora metodológica y pedagógica',
        centro: 'Regional Distrito Capital-Centro de Diseño y Metrología',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro:
          'Regional Distrito Capital-Centro de para la Industria de la Comunicación Gráfica',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Oscar Ivan Uribe Ortiz',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Caceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Camilo Andrés Bolaño Rey ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lina Marcela Pérez Manchego',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'José Jaime Luis Tang Pinzón',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carmen Alicia Martínez Torres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ángela María Maldonado Jaime',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Laura Gisselle Murcia Pardo',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Edward Leonardo Pico Cabra',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
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
