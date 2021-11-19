<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido(data-aos="fade-left")
      .titulo-principal__numero
        span 2
      h1 Archivo y conservación de documentos
    p(data-aos="zoom-in") En las empresas el ejercicio operativo de su funcionamiento compila innumerables documentos internos y externos relacionados con los hechos económicos, a aparte de los demás documentos propios de la administración y gestión empresarial, donde la contabilidad es una de las funciones que más soporta su ejercicio en estos documentos, con el fin de construir la trazabilidad de la historia económica de los hechos de operación de la empresa desde el punto de vista legal, y de gestión, facilitando la toma de decisiones que repercutirán en el resto de las áreas funcionales en el presente y futuro inmediato, esto implica que la información podrá ser procesada y utilizada diariamente.

    .row.justify-content-center.align-items-center.mt-5  
      .col-lg-8.text-sup(data-aos="zoom-in-down")
        .titulo-sexto.color-acento-contenido(data-aos="zoom-in-down")
          h5 Figura 8.  
          span Sistema de ordenamiento documental
        img.img-a.img-t.mt-3(src='@/assets/ilustraciones/img34.svg', alt='') 
    .row.justify-content-center.align-items-center
      .col-lg-8.t2-bg-color-1.pb-5.px-5
        p(data-aos="zoom-in").mb-0 El manejo de esta información documental exige llevar un #[b sistema de ordenamiento y compilación] riguroso que debe estar sujeto a lo dispuesto por la normatividad para la gestión documental propiamente dicha. Con los cierres de periodo y transcurridos y acumulados varios en tiempo, la información documental se hace estaciona o inactiva, pues solo sirve de soporte a los registros de los hechos económicos pasados; pero es sustancialmente importante su conservación, debido a que en cualquier momento futuro puede ser utilizada como testimonio sobre los hechos económicos y su registro al momento de requerirse por parte de los distintos interesados como son los entes de control, los accionistas, la gerencia, etc. Es por esta razón que las empresas deben desarrollar mecanismos de conservación y disposición de esta información pasada e inactiva, que asegure la integridad y calidad de los documentos almacenados en el archivo configurado. 

    separador(data-aos="slide-left")

    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1.  Ley General de Archivo 

    .bloque-texto-c.color-acento-contenido.p-4
      i.fas.fa-quote-right
      h5.my-2.px-3(data-aos="zoom-in") En Colombia existen leyes y normas para la gestión documental, las que orientan a las empresas respecto de cómo implementar y desarrollar un sistema de organización y gestión de los documentos en archivo. La Ley 594 del 2000, se conoce como la Ley General de Archivo, establece todos los lineamientos para la preservación y conservación documental. 
      span - Archivo General de la Nación Colombia, 2020

    .row.justify-content-center.align-items-center.mt-5  
      .col-lg-10
        p(data-aos="zoom-in") La Ley 594 de 2000 en su capítulo IX, contempla que los particulares y privados están igualmente obligados a llevar estos sistemas de archivo. Con el fin de conocer los lineamientos y directrices que la ley y normatividad complementaria determinan para el establecimiento de un sistema de archivo, se sugiere consultar y profundizar en este tema a través de los siguientes recursos: 

    .row.justify-content-center.align-items-center.mt-5  
      .col-lg-10.t2-bg-color-2.px-4
        .row.justify-content-center.align-items-center
          .col-lg-4
            img.img-t.mt-3(src='@/assets/ilustraciones/img35.svg', alt='')
          .col-lg-8
            .row.justify-content-between.align-items-center.my-2.py-2(data-aos="fade-down")
              .col.mb-3.mb-sm-0
                p.mb-0 1)  Resolución 8934 de 2014, que define los requisitos aplicables a empresas privadas en la gestión documental.
              .col-sm-auto
                a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Resolucion_8934_2014.pdf')" target="_blank")
                  span Descargar
                  i.fas.fa-file-download 
            .row.justify-content-between.align-items-center.t2-bg-color-2-row.my-2.py-2(data-aos="fade-down")
              .col.mb-3.mb-sm-0
                p.mb-0 2)  Ley 594 de 2000.
              .col-sm-auto
                a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/ley_594_14_julio_2000.pdf')" target="_blank")
                  span Descargar
                  i.fas.fa-file-download  
            .row.justify-content-between.align-items-center.my-2.py-2(data-aos="fade-down")
              .col.mb-3.mb-sm-0
                p.mb-0 3)  Proceso de la gestión documental.
              .col-sm-auto
                a.boton.color-acento-botones.texto-blanco(href="https://www.archivogeneral.gov.co/Politica/procesos" target="_blank")
                  span Descargar
                  i.fas.fa-file-download 
            .row.justify-content-between.align-items-center.t2-bg-color-2-row.my-2.py-2(data-aos="fade-down")
              .col.mb-3.mb-sm-0
                p.mb-0 4)  Condiciones físicas necesarias para espacios destinados para archivos.
              .col-sm-auto
                a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/AC49_15_11_18.pdf')" target="_blank")
                  span Descargar
                  i.fas.fa-file-download 
            .row.justify-content-between.align-items-center.my-2.py-2(data-aos="fade-down")
              .col.mb-3.mb-sm-0
                p.mb-0 5)  Resumen general de los propósitos de la ley de archivos.
              .col-sm-auto
                a.boton.color-acento-botones.texto-blanco(href="https://atsgestion.net/ley-gestion-documental/" target="_blank")
                  span Descargar
                  i.fas.fa-file-download                                 

    separador(data-aos="slide-left")

    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2.	Consecutivo, cronológico por asuntos
    p(data-aos="zoom-in") La contabilidad, como disciplina de registro de los hechos económicos de la empresa, es la encargada de configurar la evidencia de la historia operativa, por esta razón la organización de la información es estrictamente cronológica, es decir, se hace en referencia al tiempo y sus fechas de ocurrencia, siendo el año la base, seguido del mes y día de ocurrencia de los hechos, aspectos a tener en cuenta en la clasificación de cada uno de los libros y tipos de expedientes que se utilicen en el ejercicio contable, y en general en la gestión empresarial. 
    .row.justify-content-center.align-items-center.mt-5  
      .col-lg-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5(data-aos="fade-left")
          .bloque-texto-g__img.m-left(
            :style="{'background-image': `url(${require('@/assets/ilustraciones/img36.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Este ordenamiento documental, es un proceso que consiste en disponer los documentos físicamente, en sentido temporal de ocurrencia y que debe ser estricto y riguroso, en sí es ordenar los documentos eligiendo los van primero en un día, y luego definir qué documentos los van en segunda instancia, y así sucesivamente, definiendo las cantidades de agrupaciones en función del mismo tiempo, es decir por meses, trimestres, semestres, etc.

        p(data-aos="zoom-in").mt-5 Así mismo, es importante definir en la organización documental la temática, por ejemplo, ventas y facturación, donde irán en un tipo de expediente independiente, con la compilación cronológica de las facturas, pero a su vez puede ser por subtemas, ventas en algún ponto en especial o local comercial, esto se denomina series y subseries de documentos por temas, otro ejemplo pueden ser las órdenes de pago, etc. 

        .row.justify-content-between.align-items-center.t2-bg-color-2.mt-5.py-3.px-4
          .col.mb-3.mb-sm-0
            p.mb-0 Para ampliar estos conceptos de ordenación física de documentos, se recomienda revisar el documento Cartilla de Ordenación documental del Archivo General de la Nación del 2003, y disponible en el siguiente enlace:
          .col-sm-auto
            a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/CARTILLA_DE_ORDENACION_DOCUMENTAL.pdf')" target="_blank")
              span Descargar
              i.fas.fa-file-download

    separador(data-aos="slide-left")

    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.3.  Tabla de retención documental                
    p(data-aos="zoom-in") Son documentos que sirven a manera de inventario de la información consignada en los archivos y son listados que contienen los tipos de documentos alojados físicamente, en cada tipo de archivo e indicando su ubicación física en las estanterías; así mismo, se establece cuánto será el tiempo que deben permanecer los documentos archivados, en cada tipo de archivo y en las diferentes locaciones, lo que configura el ciclo vital de los documentos y representado a continuación:

    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)  

    separador(data-aos="slide-left")

    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.4.	Sistema de gestión electrónica de documentos

    .row.justify-content-center.align-items-center.mt-5    
      .col-lg-12.bg-img-5(data-aos="zoom-in")
        .row.justify-content-end.align-items-center    
          .col-lg-8.py-5.px-3.pe-5
            p El manejo físico de la información demanda una gestión y conjunto de recursos de espaciales, de estructuras y talento humano, entre otros recursos, para su sostenibilidad, lo que las nuevas formas metódicas y de desarrollo tecnológico para este manejo han sustituido ese convencional enfoque, amparados en que la legislación ha ampliado el concepto de evidencia de un hecho más allá de lo físico, permitiendo que los documentos sean sustituidos electrónicamente o guardados en imagen. Los desarrollos de software progresan y se aplican a la generación estructurada y facilitan el control documental de la información, dejando esta debidamente archivada con registros de firma en los casos que se requiere. 


    p(data-aos="zoom-in").mt-4 Para implementar estas nuevas dinámicas de gestión documental en la empresa, debe existir voluntad de la dirección general para invertir recursos en dicha implementación y forma de gestionar la información lo que a la vez le compensará en mayores disponibilidades de espacio, ahorro en gastos y costos fijos, como un crecimiento en la diligencia de disposición, y calidad de la información, sumado a mayor oportunidad. En ese sentido, existen variados oferentes en el mercado, con programas de software para la gestión documental y contable que hacen más efectivos los procesos de archivos digitales.

    separador(data-aos="slide-left")
    .row.justify-content-center.align-items-center
      .col-lg-12.t2-bg-color-3-row.p-5
        .row.justify-content-center.align-items-center   
          .col-lg-8
            #t_2_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
              h2 2.5.	 Gestión ambiental, seguridad y salud en el trabajo
            p(data-aos="zoom-in") El ejercicio de la contabilidad puede contribuir en la mitigación de los riesgos de contaminación ambiental, generando nuevos modelos de operación, a través de la modificación de sus procesos contables en sí desde el manejo de los recursos que se tienen al alcance. Adicionalmente, en Colombia el Ministerio del Trabajo y protección social, en desarrollo de las normas y convenios internacionales para el Sistema de Gestión de Seguridad y Salud en el Trabajo –SGSST, indica las normas al respecto que se pueden consultar a continuación: 
            .row.justify-content-center.align-items-center
              .col-lg-6
                a.anexo.mt-4(:href="obtenerLink('/downloads/gestion.pdf')" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-pdf.svg")
                  .anexo__texto
                    p Anexo. Gestión ambiental, seguridad y salud en el trabajo.                      
          .col-lg-4
            img.img-t.my-3(src='@/assets/ilustraciones/img38.svg', alt='')

    separador(data-aos="slide-left")
    #t_2_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.6. Medidas preventivas de seguridad en el trabajo
    p(data-aos="zoom-in") Desde la implementación del sistema de seguridad y salud en el trabajo por parte de las empresas, en conformidad a lo dispuesto por la normatividad, y aunado al desarrollo de una cultura institucional para la mejora y el bien estar en el trabajo, los trabajadores deben velar por su cumplimiento y generar y mantener los entornos laborales seguros como un ejercicio de corresponsabilidad para con la empresa y su propio beneficio, por ello, se deben tener en cuenta las siguientes recomendaciones: 

    .row.justify-content-center.align-items-center
      .col-lg-10
        LineaTiempoD.mt-5.color-primario
          .row.justify-content-center.align-items-center(numero="1" titulo="Reconocer el contexto laboral identificando los posibles riesgos")
            .col-lg-4
              img.img-t.my-3(src='@/assets/ilustraciones/img39.svg', alt='')
            .col-lg-8 
              p Una vez conocidos los riesgos propios del entorno laboral en el que se desempeñan los trabajadores, esos riesgos se deben mitigar y evitar caer en situaciones que afecten la salud o la integralidad personal, así como disminuir los riesgos por higiene mental o física. Los eminentes riesgos en el sitio de trabajo parten de los instrumentos de uso ordinario, hasta el reconocimiento de un suelo mojado, resbaladizo, o no contar con los señalamientos correctamente.

          .row.justify-content-center.align-items-center(numero="2" titulo="Hacer capacitaciones e inducciones a los trabajadores para el reconocimiento del trabajo y contexto")
            .col-lg-4
              img.img-t.my-3(src='@/assets/ilustraciones/img40.svg', alt='')
            .col-lg-8 
              p La mayoría de los accidentes laborales en las empresas tienen ocurrencia durante los primeros seis meses de labor por parte del empleado, este dato estadístico hace indispensable capacitar a cada uno de los trabajadores en aspectos de higiene y seguridad laboral, de tal manera que puedan ejercer sus actividades en aras de mitigar los riesgos y desarrollar las actividades de manera productiva y segura.
              p Cada vez que se haga la contratación de nuevo personal, es necesario darle la orientación necesaria referente a su trabajo, con la finalidad de prevenir posibles riesgos y accidentes durante el desempeño de sus labores profesionales.

          .row.justify-content-center.align-items-center(numero="3" titulo="Se debe velar por cuidar la postura")
            .col-lg-4
              img.img-t.my-3(src='@/assets/ilustraciones/img43.svg', alt='')
            .col-lg-8 
              p Mantener una postura correcta para evitar patologías o problemas de dolencias de espalda, cadera, brazos, cuello o manos. El levantamiento de cosas debe realizarse de la manera correcta, con posturas que no pongan en riesgo la salud física por lesiones. Así mismo, si se utilizan otro tipo de elementos para el desarrollo del trabajo, estos deben ser ajustados a los trabajadores y no al revés.

          .row.justify-content-center.align-items-center(numero="4" titulo="Realizar suspensión de actividades o de descansos")
            .col-lg-4
              img.img-t.my-3(src='@/assets/ilustraciones/img41.svg', alt='')
            .col-lg-8 
              p Las estadísticas de lesiones y enfermedades laborales indican que muchas de estas se producen por fatigas físicas o cansancio mental, por lo tanto, no controla su entorno y las variables de riesgo. Desarrollar otras actividades a manera de descansos ayuda a mantener la disposición física, y estar en atención frente al contexto del espacio de trabajo. 

          .row.justify-content-center.align-items-center(numero="5" titulo="Realizar supervisiones las actividades de los trabajadores")
            .col-lg-4
              img.img-t.my-3(src='@/assets/ilustraciones/img42.svg', alt='')
            .col-lg-8 
              p La forma de garantizar el cumplimiento de los protocolos de seguridad y salud para el trabajo, es por medio de supervisión directa o indirecta preferiblemente; lo que pueden realizar los supervisores o por medio de observaciones en cámaras.

              p Por lo anterior, es importante estar informado de los ajustes normativos en materia de seguridad y salud, comprobar la aplicación de las políticas y los protocolos de procedimientos diseñados que mitigan los efectos de los riesgos y la siniestralidad en los trabajadores bien sea física o en aspectos de salud mental, que permita que los trabajadores estén involucrados creando ambientes de trabajo seguros y de bienestar.


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass">
.bloque-texto-g.color-secundario
  background-color: #FCFBED !important
.bloque-texto-g
  justify-content: flex-start !important
.m-left
  left: 50% !important
@media only screen and (max-width: 992px)
  .m-left
    left: 0 !important
</style>
