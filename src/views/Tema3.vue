<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido(data-aos="fade-left")
      .titulo-principal__numero
        span 3
      h1 Archivo y conservación de documentos

    .row.justify-content-center.align-items-center  
      .col-lg-10
        .bloque-texto-c.color-acento-contenido.p-4
          i.fas.fa-quote-right
          h5.my-2.px-3(data-aos="zoom-in") Todo comerciante conformará su contabilidad, libros, registros contables, inventarios y estados financieros en general, a las disposiciones de este Código y demás normas sobre la materia. Dichas normas podrán autorizar el uso de sistemas que, como la microfilmación, faciliten la guarda de su archivo y correspondencia. Asimismo, será permitida la utilización de otros procedimientos de reconocido valor técnico-contable, con el fin de asentar sus operaciones, siempre que facilite el conocimiento y prueba de la historia clara, completa y fidedigna de los asientos individuales y el estado general de los negocios.<br>En los libros se asentarán en orden cronológico las operaciones mercantiles y todas aquellas que puedan influir en el patrimonio del comerciante, haciendo referencia a los comprobantes de contabilidad que las respalden.
          span - Secretaría del Senado, 2020. Código de Comercio Arts. 48 al 56.

    separador(data-aos="slide-left")

    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1.  Conceptos y clasificación 

    .row.justify-content-start.align-items-center.mt-5
      .col-lg-8.text-sup(data-aos="fade-right")
        p(data-aos="zoom-in") La información contable y financiera se estructura y compila por libros auxiliares y libros principales, la manera de diligenciarla debe ser en orden cronológico, en conformidad a la normatividad establecida. Los libros contables están estructurados por el conjunto de documentos de comprobantes contables que son la base para la construcción de los estados financieros (Angulo, 2018). Estos documentos de estados financieros, desde lo definido el Decreto Ley 19 de 2012 (Secretaría del Senado, 2020), se deben radicar y registrar en las cámaras de comercio en las diferentes ciudades donde operan las empresas, junto con los libros de actas de socios y accionistas.
    .row.justify-content-end.align-items-center           
      .col-lg-5.d-none.d-lg-block(data-aos="fade-left")
        img.img-t.img-a.img-top-4(src='@/assets/ilustraciones/img44.svg', alt='') 

    p(data-aos="zoom-in") La normatividad establece los libros que se deben diligenciar y presentar periódicamente en las cámaras de comercio o en la Superintendencia de Sociedades de darse a lugar, y siguiendo a Angulo (2018) son:

    LineaTiempoD.mt-5.color-primario
      .row.justify-content-center.align-items-center(numero="1" titulo="Libro de diario")
        .col-lg-11
          p Es un medio de evidencias y sustento que prueba, ante los entes de control, que la empresa registra el conjunto de hechos económicos del día, es decir las transacciones comerciales, registrando los devengos contables.

          .row.justify-content-center.align-items-start.mt-5
            .col-lg-8.d-none.d-lg-block
              img.img-t.img-a(src='@/assets/ilustraciones/img47.svg', alt='')

            .col-lg-4.d-none.d-lg-block
              img.img-t.img-a(src='@/assets/ilustraciones/img48.svg', alt='')          
          .row.justify-content-center.align-items-center
            .col-lg-12.bg-white.p-5
              .row.justify-content-center.align-items-start
                .col-lg-8
                  ul.lista-ul--color
                    li 
                      i.lista-ul__vineta
                      | Registra las fechas de la inscripción o de la operación.
                    li 
                      i.lista-ul__vineta
                      | Describe los códigos contables de las cuentas afectadas aplicando el principio de partida doble.
                    li 
                      i.lista-ul__vineta
                      | Registra en una columna la cuenta auxiliar detallada, generalmente trabajada a seis (6) dígitos.
                    li 
                      i.lista-ul__vineta
                      | Distingue la columna para los registros débitos.
                    li 
                      i.lista-ul__vineta
                      | Distingue la columna para los registros de los créditos.
                    li 
                      i.lista-ul__vineta
                      | Las sumas de la columna débito y crédito deben ser iguales.
                  p En este libro de diario, se presentan los registros contables clasificados por asientos contables así:
                  p #[b Asientos normales]: registra operaciones diarias de la organización.
                  p #[b Asientos de ajustes]: registra las depreciaciones y amortizaciones, y demás hallazgos por verificación.
                  p.mb-0 #[b Asientos de cierre de periodo]: son los que se realizan al finalizar cada periodo contable, donde se hace el cierre de todas las cuentas, y ser trasladadas al siguiente periodo, como saldos iniciales.

                .col-lg-4
                  img.img-t.img-a.my-3(src='@/assets/ilustraciones/img49.svg', alt='')
                  .row.justify-content-center.align-items-center
                    .col-lg-10
                      a.anexo.mt-4(:href="obtenerLink('/downloads/libro-diario-general.pdf')" target="_blank")
                        .anexo__icono
                          img(src="@/assets/template/icono-pdf.svg")
                        .anexo__texto
                          p Anexo. Libro de diario
                    
      .row.justify-content-center.align-items-center(numero="2" titulo="Libro mayor y balance")
        .col-lg-11
          p Todos los meses del periodo de vigencia operativa, la empresa desde el encargado de contabilidad se debe realizar cierre del mes, reflejando el comportamiento financiero y económico del negocio o empresa, información que servirá a la administración para su análisis y toma de decisiones.
          .row.justify-content-center.align-items-start.mt-5
            .col-lg-8.d-none.d-lg-block
              img.img-t.img-a(src='@/assets/ilustraciones/img47.svg', alt='')

            .col-lg-4.d-none.d-lg-block
              img.img-t.img-a(src='@/assets/ilustraciones/img48.svg', alt='')          
          .row.justify-content-center.align-items-center.d-none.d-lg-block
            .col-lg-12.bg-img-6.p-5
              .row.justify-content-center.align-items-start
                .col-lg-8
                  p Este libro facilita la elaboración de estados de resultados integrales.
                  ul.lista-ul--color
                    li 
                      i.lista-ul__vineta
                      | Permite la construcción del estado de situación financiera o balance.
                    li 
                      i.lista-ul__vineta
                      | Expresa la información mediante la aplicación de cuentas mayores o agrupadas de los débitos y créditos de cada una. Se deben codificar a cuatro dígitos como se establece en el plan de cuentas, así mismo compila la información de los libros auxiliares.
                .col-lg-4
                  img.img-t.img-a(src='@/assets/ilustraciones/img46.svg', alt='')
                  .row.justify-content-center.align-items-center
                    .col-lg-10
                      a.anexo.mt-4(:href="obtenerLink('/downloads/mayor.pdf')" target="_blank")
                        .anexo__icono
                          img(src="@/assets/template/icono-pdf.svg")
                        .anexo__texto
                          p Anexo. Libro mayor y balance.

          .row.justify-content-center.align-items-start.d-block.d-lg-none
            .col-lg-8
              p Este libro facilita la elaboración de estados de resultados integrales.
              ul.lista-ul--color
                li 
                  i.lista-ul__vineta
                  | Permite la construcción del estado de situación financiera o balance.
                li 
                  i.lista-ul__vineta
                  | Expresa la información mediante la aplicación de cuentas mayores o agrupadas de los débitos y créditos de cada una. Se deben codificar a cuatro dígitos como se establece en el plan de cuentas, así mismo compila la información de los libros auxiliares.
            .col-lg-4
              img.img-t.img-a.my-3(src='@/assets/ilustraciones/img46.svg', alt='')
              .row.justify-content-center.align-items-center
                .col-lg-10
                  a.anexo.mt-4(:href="obtenerLink('/downloads/mayor.pdf')" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-pdf.svg")
                    .anexo__texto
                      p Anexo. Libro mayor y balance.    

      .row.justify-content-center.align-items-center(numero="3" titulo="Libro de actas de asamblea")
        .col-lg-11
          p En conformidad a lo citado y dispuesto en el Código de Comercio en su artículo 189 y 431 se menciona:
          p “Las decisiones de la junta de socios o de la asamblea se harán constar en actas aprobadas por la misma, o por las personas que se designen en la reunión para tal efecto, y firmadas por el presidente y el secretario de la misma, en las cuales deberá indicarse, además, la forma en que hayan sido convocados los socios, los asistentes y los votos emitidos en cada caso. La copia de estas actas, autorizada por el secretario o por algún representante de la sociedad, será prueba suficiente de los hechos que consten en ellas, mientras no se demuestre la falsedad de la copia o de las actas. A su vez, a los administradores no les será admisible prueba de ninguna clase para establecer hechos que no consten en las actas.
          p (Artículo 431). Lo ocurrido en las reuniones de la asamblea se hará constar en el libro de actas. Estas se firmarán por el presidente de la asamblea y su secretario o, en su defecto, por el revisor fiscal. Las actas se encabezarán con su número y expresarán, al menos: lugar, fecha y hora de la reunión; el número de acciones suscritas; la forma y antelación de la convocación; la lista de los asistentes con indicación del número de acciones propias o ajenas que representen; los asuntos tratados; las decisiones adoptadas y el número de votos emitidos en favor, en contra, o en blanco; las constancias escritas presentadas por los asistentes durante la reunión; las designaciones efectuadas, y la fecha y hora de su clausura”. (Secretaría del Senado, 2020. Arts. 189 y 431).

          .row.justify-content-center.align-items-start.mt-5
            .col-lg-8.d-none.d-lg-block
              img.img-t.img-a(src='@/assets/ilustraciones/img53.svg', alt='')

            .col-lg-4.d-none.d-lg-block
              img.img-t.img-a(src='@/assets/ilustraciones/img54.svg', alt='')          
          .row.justify-content-center.align-items-center.d-none.d-lg-block
            .col-lg-12.bg-white.p-5
              .row.justify-content-center.align-items-start
                .col-lg-8
                  ul.lista-ul--color
                    li 
                      i.lista-ul__vineta
                      | Se debe diligenciar el registro de la fecha de la solicitud.
                    li 
                      i.lista-ul__vineta
                      | Se debe adelantar el registro de la razón social de la empresa y Número de Identificación Tributaria - NIT.
                    li 
                      i.lista-ul__vineta
                      | En el registro se debe clarificar el tipo de inscripción.
                    li 
                      i.lista-ul__vineta
                      | Se debe suministrar la dirección electrónica o página web de la empresa.
                    li 
                      i.lista-ul__vineta
                      | Por cada diligencia de reunión se debe registrar el nombre y la firma del representante legal de la empresa.
                    li 
                      i.lista-ul__vineta
                      | Cada inscripción debe llevar el nombre y la firma del revisor fiscal nombrado, indicando número de tarjeta profesional y copia de la misma.

                .col-lg-4
                  img.img-t.img-a(src='@/assets/ilustraciones/img50.svg', alt='')
                  .row.justify-content-center.align-items-center
                    .col-lg-10
                      a.anexo.mt-4(:href="obtenerLink('/downloads/actas.pdf')" target="_blank")
                        .anexo__icono
                          img(src="@/assets/template/icono-pdf.svg")
                        .anexo__texto
                          p Anexo. Libro de actas de asamblea.

          .row.justify-content-center.align-items-start.d-block.d-lg-none
            .col-lg-8
              ul.lista-ul--color
                li 
                  i.lista-ul__vineta
                  | Se debe diligenciar el registro de la fecha de la solicitud.
                li 
                  i.lista-ul__vineta
                  | Se debe adelantar el registro de la razón social de la empresa y Número de Identificación Tributaria - NIT.
                li 
                  i.lista-ul__vineta
                  | En el registro se debe clarificar el tipo de inscripción.
                li 
                  i.lista-ul__vineta
                  | Se debe suministrar la dirección electrónica o página web de la empresa.
                li 
                  i.lista-ul__vineta
                  | Por cada diligencia de reunión se debe registrar el nombre y la firma del representante legal de la empresa.
                li 
                  i.lista-ul__vineta
                  | Cada inscripción debe llevar el nombre y la firma del revisor fiscal nombrado, indicando número de tarjeta profesional y copia de la misma.
            .col-lg-4
              img.img-t.img-a.my-3(src='@/assets/ilustraciones/img50.svg', alt='')
              .row.justify-content-center.align-items-center
                .col-lg-10
                  a.anexo.mt-4(:href="obtenerLink('/downloads/actas.pdf')" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-pdf.svg")
                    .anexo__texto
                      p Anexo. Libro de actas de asamblea.

      .row.justify-content-center.align-items-center(numero="4" titulo="Libros de junta directiva o de consejo de administración")
        .col-lg-11
          p Es un libro cronológico que registra los detalles de los temas tratados en las reuniones de los administradores, miembros de la junta directiva y su presidente, el gerente y representante legal, entre los cuales se designa un secretario de reunión y presidente de reunión, quienes deben firmar cada acta que evidencia cada reunión.
          p Según Ley 1755 de 2001 (Secretaría del Senado, 2020, Art. 47), las actas de reuniones deberán indicar si es se trató de una reunión ordinaria o extraordinaria, la forma y mecanismo de convocatoria a los asistentes, debe llevar explícitamente los temas tratados o lo que se denomina el orden del día, y debe citar los nombres completos de los asistentes; de haberse tomado decisiones, se debe indicar la configuración de los votos emitidos en cada caso para la aprobación de los temas.  

          .row.justify-content-center.align-items-start.mt-5
            .col-lg-8.d-none.d-lg-block
              img.img-t.img-a(src='@/assets/ilustraciones/img47.svg', alt='')

            .col-lg-4.d-none.d-lg-block
              img.img-t.img-a(src='@/assets/ilustraciones/img55.svg', alt='')          
          .row.justify-content-center.align-items-center.d-none.d-lg-block
            .col-lg-12.bg-img-6.p-5
              .row.justify-content-center.align-items-start
                .col-lg-8
                  p Es compilación de la información básica de la empresa, que incluye todas las decisiones aprobadas en las reuniones y registradas en los documentos de actas, como pueden ser acuerdos a los que llegan los dueños de una empresa para su operación, la aprobación de nuevos proyectos que afecten el futuro empresarial o aprobar una compra que supere la capacidad de negociación del representante legal. El registro en este libro debe ser en orden cronológico del desarrollo de las reuniones.
                .col-lg-4
                  img.img-t.img-a(src='@/assets/ilustraciones/img51.svg', alt='')
                  .row.justify-content-center.align-items-center
                    .col-lg-10
                      a.anexo.mt-4(:href="obtenerLink('/downloads/juntas.pdf')" target="_blank")
                        .anexo__icono
                          img(src="@/assets/template/icono-pdf.svg")
                        .anexo__texto
                          p Anexo. Formato acta de reunión y seguimiento.

          .row.justify-content-center.align-items-start.d-block.d-lg-none
            .col-lg-8
              p Es compilación de la información básica de la empresa, que incluye todas las decisiones aprobadas en las reuniones y registradas en los documentos de actas, como pueden ser acuerdos a los que llegan los dueños de una empresa para su operación, la aprobación de nuevos proyectos que afecten el futuro empresarial o aprobar una compra que supere la capacidad de negociación del representante legal. El registro en este libro debe ser en orden cronológico del desarrollo de las reuniones.
            .col-lg-4
              img.img-t.img-a.my-3(src='@/assets/ilustraciones/img51.svg', alt='')
              .row.justify-content-center.align-items-center
                .col-lg-10
                  a.anexo.mt-4(:href="obtenerLink('/downloads/juntas.pdf')" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-pdf.svg")
                    .anexo__texto
                      p Anexo. Formato acta de reunión y seguimiento.

      .row.justify-content-center.align-items-start(numero="5" titulo="Libros auxiliares")
        .col-lg-4
          p.mt-4 Son los libros complementarios que se utilizan para detallar y registrar la información de las cuentas o subcuentas que reflejan de forma ordenada las operaciones realizadas por la empresa, afectando los débitos y créditos, con el fin de generar el saldo en una fecha determinada. Estos libros se llevan para cada una de las cuentas o subcuentas del activo o de los pasivos, como ejemplo de estos libros se puede mencionar: el libro auxiliar de bancos, el auxiliar de caja, IVA, inventarios, ingresos ordinarios, etc.

        .col-lg-8
          .row.justify-content-center.align-items-start
            .col-lg-5.d-none.d-lg-block
              img.img-t.img-a(src='@/assets/ilustraciones/img56.svg', alt='')

            .col-lg-4.d-none.d-lg-block
              img.img-t.img-a(src='@/assets/ilustraciones/img48.svg', alt='')          
          .row.justify-content-center.align-items-center.d-none.d-lg-block
            .col-lg-12.bg-img-7.p-5
              .row.justify-content-center.align-items-start
                .col-lg-5
                  ul.lista-ul--color
                    li 
                      i.lista-ul__vineta
                      | Nombre del libro auxiliar.
                    li 
                      i.lista-ul__vineta
                      | Fechas de las transacciones.
                    li 
                      i.lista-ul__vineta
                      | Descripción de la transacción.
                    li 
                      i.lista-ul__vineta
                      | Valor débito.
                    li 
                      i.lista-ul__vineta
                      | Valor crédito.
                    li 
                      i.lista-ul__vineta
                      | Valor de los saldos.

                .col-lg-6
                  img.img-t.img-a(src='@/assets/ilustraciones/img52.svg', alt='')
                  .row.justify-content-center.align-items-center
                    .col-lg-10
                      a.anexo.mt-4(:href="obtenerLink('/downloads/auxiliares.pdf')" target="_blank")
                        .anexo__icono
                          img(src="@/assets/template/icono-pdf.svg")
                        .anexo__texto
                          p Anexo. Libros auxiliares.

          .row.justify-content-center.align-items-start.d-block.d-lg-none
            .col-lg-8
              ul.lista-ul--color
                li 
                  i.lista-ul__vineta
                  | Nombre del libro auxiliar.
                li 
                  i.lista-ul__vineta
                  | Fechas de las transacciones.
                li 
                  i.lista-ul__vineta
                  | Descripción de la transacción.
                li 
                  i.lista-ul__vineta
                  | Valor débito.
                li 
                  i.lista-ul__vineta
                  | Valor crédito.
                li 
                  i.lista-ul__vineta
                  | Valor de los saldos.
            .col-lg-4
              img.img-t.img-a.my-3(src='@/assets/ilustraciones/img52.svg', alt='')
              .row.justify-content-center.align-items-center
                .col-lg-10
                  a.anexo.mt-4(:href="obtenerLink('/downloads/auxiliares.pdf')" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-pdf.svg")
                    .anexo__texto
                      p Anexo. Libros auxiliares.

    separador(data-aos="slide-left")

    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2.  Reportes de estados financieros de propósito general 
    p(data-aos="zoom-in") Una vez desarrollado el proceso para el registro de cada uno de los hechos económicos de la empresa durante el mes de operación o en el periodo estimado, se deben generar reportes resumidos de cada una de las cuentas, y un consolidado general por cada tipo de cuenta que serán los insumos de los reportes a presentar, los que se organizarán según su propósito y naturaleza, configurando de esta manera los estados financieros de propósito general.       

    ImagenInfografica(data-aos="fade-down").color-acento-botones.mt-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/ilustraciones/img57.svg', alt='Texto que describa la imagen')

      .tarjeta.color-secundario.p-3(x="9.5%" y="18%" numero="+")
        .h4.mb-0.text-center Hechos económicos
      .tarjeta.color-secundario.p-3(x="24.5%" y="18%" numero="+")
        .h4.mb-0.text-center Soportes
      .tarjeta.color-secundario.p-3(x="41.5%" y="18%" numero="+")
        .h4.mb-0.text-center Comprobantes de contabilidad
      .tarjeta.color-secundario.p-3(x="58%" y="18%" numero="+")
        .h4.mb-0.text-center Libro de diario
      .tarjeta.color-secundario.p-3(x="74.5%" y="18%" numero="+")
        .h4.mb-0.text-center Libro mayor
      .tarjeta.color-secundario.p-3(x="90.5%" y="18%" numero="+")
        .h4.mb-0.text-center Reportes estados financieros

      .tarjeta.color-secundario.p-3(x="9.5%" y="38%" numero="+")
        .h4.mb-0.text-center Documentos fuente
      .tarjeta.color-secundario.p-3(x="24.5%" y="33%" numero="+")
        .h4.mb-0.text-center Comprobantes

      .tarjeta.color-secundario.p-3(x="32.5%" y="70.8%" numero="+")
        .h4.mb-0.text-center Libros auxiliares  

    p(data-aos="zoom-in").mt-5 De conformidad con los conceptos estimados desde las Normas Internacionales de Información Financiera -NIIF, los estados financieros de propósito general, sirven para resumir y presentar de una manera de manera ordenada y estructurada la información concerniente a la situación financiera (activos, pasivos, patrimonio) de la empresa al final del periodo para el que se preparó la información, así como el beneficio económico o estado de utilidad o resultados de la empresa (ingresos menos gastos), como de los flujos de efectivo de la entidad; información que será útil para los interesados, con fin de analizar las actuaciones y operaciones, el cumplimiento de las perspectivas de entrada y salida de dinero, y facilitar la toma de nuevas decisiones frente a los recursos que posee la empresa a ese momento de corte. 

    .row.mt-5
      .col-lg-4
        .tarjeta.tarjeta-foto-hover(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          .tarjeta-foto-hover__img: img(src='@/assets/ilustraciones/img58.jpg')
          .tarjeta-foto-hover__titulo.bg--1.d-flex.justify-content-center.align-items-center.p-3
          
          .tarjeta-foto-hover__tarjeta.rounded-3.bg--1.d-flex.align-items-center.justify-content-center
            .p-4
              p Los estados financieros de propósito general se pueden presentar de manera individual o consolidada, esto es, cuando la empresa tiene varias sucursales obtiene por cada sucursal los reportes de estado de cada una, pero también necesita el consolidado general de todas las sucursales en sumatoria, para saber el estado general de la empresa en sí. 
      .col-lg-4
        .tarjeta.tarjeta-foto-hover
          .tarjeta-foto-hover__img: img(src='@/assets/ilustraciones/img59.jpg')
          .tarjeta-foto-hover__titulo.bg--1.d-flex.justify-content-center.align-items-center.p-3
            
          .tarjeta-foto-hover__tarjeta.rounded-3.bg--1.d-flex.align-items-center.justify-content-center
            .p-4
              p Hay que recordar que esta información a presentar debe ser fiable sin sesgos ni cambios, que refleje los hechos tal cual sucedieron, en cumplimiento de las NIIF, y que debe ser un ejercicio a realizar al menos una vez al año, pero se recomienda mensualmente para llevar un mejor control.
      .col-lg-4
        .tarjeta.tarjeta-foto-hover
          .tarjeta-foto-hover__img: img(src='@/assets/ilustraciones/img60.jpg')
          .tarjeta-foto-hover__titulo.bg--1.d-flex.justify-content-center.align-items-center.p-3
            
          .tarjeta-foto-hover__tarjeta.rounded-3.bg--1.d-flex.align-items-center.justify-content-center
            .p-4
              p La Norma Internacional de Contabilidad - NIC 1 indica que para la presentación de la información se debe clasificar según su naturaleza, lo cual se puede desarrollar desde la siguiente tabla, donde se preparan los resúmenes desde las cuentas de estados financiero - balance, clasificando entre activos corriente y no corriente, así mismo con el pasivo. La información se obtiene de los libros contables, mayor y diario corroborando frente a los auxiliares.

    .row.justify-content-center.align-items-center.mt-5  
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="zoom-in-down")
          h5 Tabla 28.  
          span Hoja de trabajo para preparar estados de situación financiera de prueba
        .tabla-a.color-acento-contenido.mt-3(data-aos="zoom-in-down")
          table
            thead
              tr
                th.bg-table-t3-1 Activo corriente
                th.bg-table-t3-1 Cuenta
                th.bg-table-t3-1 Naturaleza
                th.bg-table-t3-1 Saldos mes 1 Valor
                th.bg-table-t3-1 Saldos mes 2 Valor

            tbody
              tr
                <td rowspan="3" style=" background-color:#F2F0F6"> Efectivo y equivalente a efectivo </td>
                td.bg-table-t3-2.br-t3-table 
                td.bg-table-t3-2.br-t3-table 
                td.bg-table-t3-2.br-t3-table
                td.bg-table-t3-2.br-t3-table
              tr                    
                td.bg-table-t3-2.br-t3-table 
                td.bg-table-t3-2.br-t3-table 
                td.bg-table-t3-2.br-t3-table
                td.bg-table-t3-2.br-t3-table 
              tr                    
                td.bg-table-t3-2.br-t3-table 
                td.bg-table-t3-2.br-t3-table 
                td.bg-table-t3-2.br-t3-table 
                td.bg-table-t3-2.br-t3-table 

              tr
                <td rowspan="3" style=""> Deudores comerciales y cuentas por cobrar</td>
                td.br-t3-table  
                td.br-t3-table    
                td.br-t3-table
                td.br-t3-table
              tr                    
                td.br-t3-table 
                td.br-t3-table 
                td.br-t3-table                 
                td.br-t3-table 
              tr                    
                td.br-t3-table 
                td.br-t3-table 
                td.br-t3-table                 
                td.br-t3-table

              tr                    
                td.bg-table-t3-2 Anticipos de impuestos 
                td.bg-table-t3-2.br-t3-table 
                td.bg-table-t3-2.br-t3-table 
                td.bg-table-t3-2.br-t3-table 
                td.bg-table-t3-2.br-t3-table

              tr
                <td rowspan="4" style=""> Inversiones para negociar</td>
                td.br-t3-table  
                td.br-t3-table    
                td.br-t3-table
                td.br-t3-table
              tr                    
                td.br-t3-table 
                td.br-t3-table 
                td.br-t3-table                 
                td.br-t3-table 
              tr                    
                td.br-t3-table 
                td.br-t3-table 
                td.br-t3-table                 
                td.br-t3-table  
              tr                    
                td.br-t3-table 
                td.br-t3-table 
                td.br-t3-table                 
                td.br-t3-table

              tr                    
                td.bg-table-t3-2 Inventarios 
                td.bg-table-t3-2.br-t3-table 
                td.bg-table-t3-2.br-t3-table 
                td.bg-table-t3-2.br-t3-table 
                td.bg-table-t3-2.br-t3-table 

              tr                    
                td Activos mantenidos para la venta
                td.br-t3-table 
                td.br-t3-table                 
                td.br-t3-table
                td.br-t3-table

              tr                    
                td.bg-table-t3-2 Diferidos a corto plazo
                td.bg-table-t3-2.br-t3-table 
                td.bg-table-t3-2.br-t3-table 
                td.bg-table-t3-2.br-t3-table 
                td.bg-table-t3-2.br-t3-table

              tr                    
                td Activos mantenidos para la venta
                td.br-t3-table 
                td.br-t3-table                 
                td.br-t3-table
                td.br-t3-table

            thead
              tr
                th.bg-table-t3-1 Activo no corriente
                th.bg-table-t3-1 Cuenta
                th.bg-table-t3-1 Naturaleza
                th.bg-table-t3-1 Saldos diciembre
                th.bg-table-t3-1 Saldos agosto
            tbody
              tr
                <td rowspan="3" style=" background-color:#F2F0F6"> Inversiones en asociadas</td>
                td.bg-table-t3-2.br-t3-table 
                td.bg-table-t3-2.br-t3-table 
                td.bg-table-t3-2.br-t3-table
                td.bg-table-t3-2.br-t3-table
              tr                    
                td.bg-table-t3-2.br-t3-table 
                td.bg-table-t3-2.br-t3-table 
                td.bg-table-t3-2.br-t3-table
                td.bg-table-t3-2.br-t3-table 
              tr                    
                td.bg-table-t3-2.br-t3-table 
                td.bg-table-t3-2.br-t3-table 
                td.bg-table-t3-2.br-t3-table 
                td.bg-table-t3-2.br-t3-table 

              tr
                <td rowspan="3" style=""> Inversiones en entidades controladas de forma conjunta</td>
                td.br-t3-table  
                td.br-t3-table    
                td.br-t3-table
                td.br-t3-table
              tr                    
                td.br-t3-table 
                td.br-t3-table 
                td.br-t3-table                 
                td.br-t3-table 
              tr                    
                td.br-t3-table 
                td.br-t3-table 
                td.br-t3-table                 
                td.br-t3-table

              tr                    
                td.bg-table-t3-2 Deudores comerciales y cuentas por cobrar largo plazo 
                td.bg-table-t3-2.br-t3-table 
                td.bg-table-t3-2.br-t3-table 
                td.bg-table-t3-2.br-t3-table 
                td.bg-table-t3-2.br-t3-table

              tr
                <td rowspan="4" style=""> Propiedad planta y equipó</td>
                td.br-t3-table  
                td.br-t3-table    
                td.br-t3-table
                td.br-t3-table
              tr                    
                td.br-t3-table 
                td.br-t3-table 
                td.br-t3-table                 
                td.br-t3-table 
              tr                    
                td.br-t3-table 
                td.br-t3-table 
                td.br-t3-table                 
                td.br-t3-table  
              tr                    
                td.br-t3-table 
                td.br-t3-table 
                td.br-t3-table                 
                td.br-t3-table

              tr
                <td rowspan="3" style=" background-color:#F2F0F6"> Propiedades de inversión</td>
                td.bg-table-t3-2.br-t3-table 
                td.bg-table-t3-2.br-t3-table 
                td.bg-table-t3-2.br-t3-table
                td.bg-table-t3-2.br-t3-table
              tr                    
                td.bg-table-t3-2.br-t3-table 
                td.bg-table-t3-2.br-t3-table 
                td.bg-table-t3-2.br-t3-table
                td.bg-table-t3-2.br-t3-table 
              tr                    
                td.bg-table-t3-2.br-t3-table 
                td.bg-table-t3-2.br-t3-table 
                td.bg-table-t3-2.br-t3-table 
                td.bg-table-t3-2.br-t3-table

              tr                    
                td Intangibles
                td.br-t3-table 
                td.br-t3-table                 
                td.br-t3-table
                td.br-t3-table 

              tr
                <td rowspan="2" style=" background-color:#F2F0F6"> Cargos diferidos largo plazo</td>
                td.bg-table-t3-2.br-t3-table 
                td.bg-table-t3-2.br-t3-table 
                td.bg-table-t3-2.br-t3-table
                td.bg-table-t3-2.br-t3-table
              tr                    
                td.bg-table-t3-2.br-t3-table 
                td.bg-table-t3-2.br-t3-table 
                td.bg-table-t3-2.br-t3-table
                td.bg-table-t3-2.br-t3-table

              tr
                <td rowspan="4" style=""> Otros activos a largo plazo</td>
                td.br-t3-table  
                td.br-t3-table    
                td.br-t3-table
                td.br-t3-table
              tr                    
                td.br-t3-table 
                td.br-t3-table 
                td.br-t3-table                 
                td.br-t3-table 
              tr                    
                td.br-t3-table 
                td.br-t3-table 
                td.br-t3-table                 
                td.br-t3-table  
              tr                    
                td.br-t3-table 
                td.br-t3-table 
                td.br-t3-table                 
                td.br-t3-table

              tr                    
                td.bg-table-t3-2.br-t3-table Activo por impuesto diferido
                td.bg-table-t3-2.br-t3-table 
                td.bg-table-t3-2.br-t3-table                 
                td.bg-table-t3-2.br-t3-table
                td.bg-table-t3-2.br-t3-table

            thead
              tr
                th.bg-table-t3-1 Pasivo corriente
                th.bg-table-t3-1 Cuenta
                th.bg-table-t3-1 Naturaleza
                th.bg-table-t3-1 Saldos diciembre
                th.bg-table-t3-1 Saldos agosto

            tbody
              tr                    
                td.bg-table-t3-2 Obligaciones financieras corto plazo 
                td.bg-table-t3-2.br-t3-table 
                td.bg-table-t3-2.br-t3-table 
                td.bg-table-t3-2.br-t3-table 
                td.bg-table-t3-2.br-t3-table 

              tr                    
                td Proveedores
                td.br-t3-table 
                td.br-t3-table                 
                td.br-t3-table
                td.br-t3-table 

              tr                    
                td.bg-table-t3-2 Cuentas por pagar 
                td.bg-table-t3-2.br-t3-table 
                td.bg-table-t3-2.br-t3-table 
                td.bg-table-t3-2.br-t3-table 
                td.bg-table-t3-2.br-t3-table 

              tr                    
                td Impuestos por pagar corto plazo
                td.br-t3-table 
                td.br-t3-table                 
                td.br-t3-table
                td.br-t3-table

              tr                    
                td.bg-table-t3-2 Obligaciones laborales corto plazo
                td.bg-table-t3-2.br-t3-table 
                td.bg-table-t3-2.br-t3-table 
                td.bg-table-t3-2.br-t3-table 
                td.bg-table-t3-2.br-t3-table 

              tr
                <td rowspan="4" style=""> Acreedores comerciales y otras cuentas por pagar corto plazo</td>
                td.br-t3-table  
                td.br-t3-table    
                td.br-t3-table
                td.br-t3-table
              tr                    
                td.br-t3-table 
                td.br-t3-table 
                td.br-t3-table                 
                td.br-t3-table 
              tr                    
                td.br-t3-table 
                td.br-t3-table 
                td.br-t3-table                 
                td.br-t3-table  
              tr                    
                td.br-t3-table 
                td.br-t3-table 
                td.br-t3-table                 
                td.br-t3-table  

              tr                    
                td.bg-table-t3-2 Pasivos diferidos corto plazo
                td.bg-table-t3-2.br-t3-table 
                td.bg-table-t3-2.br-t3-table 
                td.bg-table-t3-2.br-t3-table 
                td.bg-table-t3-2.br-t3-table 

              tr                    
                td Otros pasivos corto plazo
                td.br-t3-table 
                td.br-t3-table                 
                td.br-t3-table
                td.br-t3-table

            thead
              tr
                th.bg-table-t3-1 Pasivo no corriente
                th.bg-table-t3-1 Cuenta
                th.bg-table-t3-1 Naturaleza
                th.bg-table-t3-1 Saldos diciembre
                th.bg-table-t3-1 Saldos agosto

            tbody
              tr
                <td style=" background-color:#F2F0F6"> Obligaciones financieras largo plazo</td>
                td.bg-table-t3-2.br-t3-table 
                td.bg-table-t3-2.br-t3-table 
                td.bg-table-t3-2.br-t3-table
                td.bg-table-t3-2.br-t3-table 

              tr                    
                td Cuentas por pagar largo plazo
                td.br-t3-table 
                td.br-t3-table                 
                td.br-t3-table
                td.br-t3-table 

              tr
                <td rowspan="4" style=" background-color:#F2F0F6"> Acreedores comerciales y otras cuentas por pagar largo plazo</td>
                td.bg-table-t3-2.br-t3-table 
                td.bg-table-t3-2.br-t3-table 
                td.bg-table-t3-2.br-t3-table
                td.bg-table-t3-2.br-t3-table
              tr                    
                td.bg-table-t3-2.br-t3-table 
                td.bg-table-t3-2.br-t3-table 
                td.bg-table-t3-2.br-t3-table
                td.bg-table-t3-2.br-t3-table
              tr                    
                td.bg-table-t3-2.br-t3-table 
                td.bg-table-t3-2.br-t3-table 
                td.bg-table-t3-2.br-t3-table
                td.bg-table-t3-2.br-t3-table  
              tr                    
                td.bg-table-t3-2.br-t3-table 
                td.bg-table-t3-2.br-t3-table 
                td.bg-table-t3-2.br-t3-table
                td.bg-table-t3-2.br-t3-table

              tr
                <td rowspan="4" style=""> Pasivos por impuestos largo plazo</td>
                td.br-t3-table  
                td.br-t3-table    
                td.br-t3-table
                td.br-t3-table
              tr                    
                td.br-t3-table 
                td.br-t3-table 
                td.br-t3-table                 
                td.br-t3-table 
              tr                    
                td.br-t3-table 
                td.br-t3-table 
                td.br-t3-table                 
                td.br-t3-table  
              tr                    
                td.br-t3-table 
                td.br-t3-table 
                td.br-t3-table                 
                td.br-t3-table                

              tr
                <td style=" background-color:#F2F0F6"> Pasivos por impuestos diferidos</td>
                td.bg-table-t3-2.br-t3-table 
                td.bg-table-t3-2.br-t3-table 
                td.bg-table-t3-2.br-t3-table
                td.bg-table-t3-2.br-t3-table

              tr
                <td rowspan="4" style=""> Provisiones</td>
                td.br-t3-table  
                td.br-t3-table    
                td.br-t3-table
                td.br-t3-table
              tr                    
                td.br-t3-table 
                td.br-t3-table 
                td.br-t3-table                 
                td.br-t3-table 
              tr                    
                td.br-t3-table 
                td.br-t3-table 
                td.br-t3-table                 
                td.br-t3-table  
              tr                    
                td.br-t3-table 
                td.br-t3-table 
                td.br-t3-table                 
                td.br-t3-table 

              tr
                <td style=" background-color:#F2F0F6"> Pasivos diferidos largo plazo</td>
                td.bg-table-t3-2.br-t3-table 
                td.bg-table-t3-2.br-t3-table 
                td.bg-table-t3-2.br-t3-table
                td.bg-table-t3-2.br-t3-table 

              tr
                <td rowspan="2" style=""> Participaciones no controladas</td>
                td.br-t3-table  
                td.br-t3-table    
                td.br-t3-table
                td.br-t3-table
              tr                    
                td.br-t3-table 
                td.br-t3-table 
                td.br-t3-table                 
                td.br-t3-table 

              tr
                <td rowspan="4" style=" background-color:#F2F0F6"> Participaciones atribuible a los propietarios de la controladora</td>
                td.bg-table-t3-2.br-t3-table 
                td.bg-table-t3-2.br-t3-table 
                td.bg-table-t3-2.br-t3-table
                td.bg-table-t3-2.br-t3-table
              tr                    
                td.bg-table-t3-2.br-t3-table 
                td.bg-table-t3-2.br-t3-table 
                td.bg-table-t3-2.br-t3-table
                td.bg-table-t3-2.br-t3-table
              tr                    
                td.bg-table-t3-2.br-t3-table 
                td.bg-table-t3-2.br-t3-table 
                td.bg-table-t3-2.br-t3-table
                td.bg-table-t3-2.br-t3-table  
              tr                    
                td.bg-table-t3-2.br-t3-table 
                td.bg-table-t3-2.br-t3-table 
                td.bg-table-t3-2.br-t3-table
                td.bg-table-t3-2.br-t3-table


    .row.justify-content-center.align-items-center.mt-5    
      .col-lg-12.bg-img-1         
        .row.justify-content-center.align-items-center.pt-2         
          .col-lg-10
            .titulo-sexto.color-acento-contenido(data-aos="zoom-in-down")
              h5 Tabla 29.  
              span Hoja de trabajo para preparar el estado de resultado del periodo
            .tabla-a.color-acento-contenido.mt-3(data-aos="zoom-in-down")
              table.text-center
                thead
                  tr
                    th Cuenta
                    th Saldos mes 1
                    th Saldos mes 2
                tbody
                  tr
                    td Ingresos por actividades ordinarias 
                    td 
                    td 
                  tr
                    td Otros ingresos 
                    td 
                    td 
                  tr
                    td Costos de ventas 
                    td 
                    td 
                  tr
                    td Costos de distribución 
                    td 
                    td 
                  tr
                    td Gastos de administración 
                    td 
                    td 
                  tr
                    td Gastos financieros 
                    td 
                    td 
                  tr
                    td Gastos por impuestos a las ganancias 
                    td 
                    td 
                  tr
                    td Gastos por deterioro  
                    td 
                    td 
                  tr
                    td Otros gastos 
                    td 
                    td 
                  tr
                    td Participaciones patrimoniales 
                    td 
                    td 
                  tr
                    td Resultado del periodo 
                    td 
                    td 

    .row.justify-content-center.align-items-center.mt-5    
      .col-lg-10
        p(data-aos="zoom-in") De esta manera se facilita la preparación y presentación de los estados financieros de propósito, de conformidad con la estructura de cada uno.

        p(data-aos="zoom-in") En el siguiente ejemplo se desarrollará el proceso de obtención de los estados de resultados en conformidad a la estructura de presentación convencional:

    .row.justify-content-center.align-items-center.mt-5    
      .col-lg-6.t3-color-row.p-3
        h5.text-center.text-white.mb-0 Ejemplo para la construcción de estados financieros
    .row.justify-content-center.align-items-center   
      .col-lg-10.t3-color-row-2.p-5
        p(data-aos="zoom-in") Los señores Pablo Emilio Niño y Andrés Zapata, ciudadanos emprendedores, quieren hacer desarrollar una iniciativa empresarial, para lo cual conforman una sociedad formal denominada, cuyo objeto social es la comercialización de joyas, comprar y vender los productos de este tipo. 

        p(data-aos="zoom-in").mb-0 Dentro de este propósito de emprendimiento empresarial, realizan las siguientes transacciones:           

    .row.justify-content-center.align-items-center.mt-5        
      .col-lg-8
        .titulo-sexto.color-acento-contenido(data-aos="zoom-in-down")
          h5 Tabla 30.  
          span Transacciones realizadas para la operación del periodo de ejemplo
        .tabla-a.color-acento-contenido.mt-3(data-aos="zoom-in-down")
          table
            thead
              tr
                th.text-center.w No
                th Transacciones
            tbody
              tr
                td.text-center.w #[b 1] 
                td El Sr. Niño aporta $100.000 en efectivo y el Sr. Zapata aporta activos fijos a manera de vitrinas de exhibición para dotar el punto de venta por valor de $100.000.
              tr
                td.text-center.w #[b 2] 
                td Compran a un proveedor 3 collares por valor de $80.000 a crédito. 
              tr
                td.text-center.w #[b 3] 
                td Gastan en transporte público $40.000 (pago efectivo). 
              tr
                td.text-center.w #[b 4] 
                td Pagan sueldo al vendedor por $50.000 (pago en efectivo).
              tr
                td.text-center.w #[b 5] 
                td Realizan la venta de los 3 collares, por un precio de venta de $100.000 la unidad, los cuales dan a crédito (costo de ventas $80.000). 

    .row.justify-content-center.align-items-center.mt-5   
      .col-lg-10
        p(data-aos="zoom-in") Los socios quieren saber cómo les fue en términos contables y financieros en el periodo de ejercicio, así mismo, desean saber cómo se hacen los registros contables, se consolida el estado de resultados y el balance o estado de situación financiera. Para efectos del ejemplo, no se calculan impuestos, pero se realizan los siguientes registros contables: 

    .row.justify-content-center.align-items-center.mt-5        
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="zoom-in-down")
          h5 Tabla 31.  
          span Registro contable 1, aporte de socios
        .tabla-a.color-acento-contenido.mt-3(data-aos="zoom-in-down")
          table
            thead
              tr.text-center
                th.t3-table-3 Fecha: 01/03/2021
                <th colspan="4" style=" background-color:#FFF3DB"> Niño Zapata Ltda.<br>NIT. 800.987.XXX-6 <br>Comprobante de contabilidad No. 001 </th> 
            tbody
              tr
                td.text-center #[b Código]
                td.text-center #[b Cuenta]
                td.text-center #[b Parcial]
                td.text-center #[b Debe]
                td.text-center #[b Haber]

              tr
                td.text-center 1105
                td.text-center Caja
                td.text-center 
                td.text-center $100.000
                td.text-center 

              tr
                td.text-center 110505
                td.text-center Caja general
                td.text-center $100.000
                td.text-center 
                td.text-center 

              tr
                td.text-center 1524
                td.text-center Equipo de oficina
                td.text-center 
                td.text-center $100.000
                td.text-center 

              tr
                td.text-center 152405
                td.text-center Muebles y enseres
                td.text-center $100.000
                td.text-center 
                td.text-center 

              tr
                td.text-center 3115
                td.text-center Aportes sociales
                td.text-center 
                td.text-center 
                td.text-center $200.000

              tr
                td.text-center 311505
                td.text-center Cuotas o partes de interés social
                td.text-center $200.000
                td.text-center 
                td.text-center 

              tr
                td.text-center 
                td.text-center 
                td.text-center 
                td.text-center 
                td.text-center

              tr
                td.text-center 
                td.text-center Sumas iguales 
                td.text-center 
                td.text-center $200.000 
                td.text-center $200.000

              tr
                <td colspan="5" style=""> Detalle: se registra aportes iniciales de los socios.</td>               


    .row.justify-content-center.align-items-center.mt-5        
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="zoom-in-down")
          h5 Tabla 32.  
          span Registro contable 2, compra de mercancía
        .tabla-a.color-acento-contenido.mt-3(data-aos="zoom-in-down")
          table
            thead
              tr.text-center
                th.t3-table-4 Fecha 02/03/2021
                <th colspan="4" style=" background-color:#FBDFDE"> Niño Zapata Ltda.<br>NIT. 800.987.XXX-6 <br>Comprobante de contabilidad No. 002 </th> 
            tbody
              tr
                td.text-center #[b Código]
                td.text-center #[b Cuenta]
                td.text-center #[b Parcial]
                td.text-center #[b Debe]
                td.text-center #[b Haber]

              tr
                td.text-center 1435 
                td.text-center Mercancías no fabricadas 
                td.text-center 
                td.text-center $80.000
                td.text-center   

              tr
                td.text-center 132501 
                td.text-center Collares
                td.text-center $80.000
                td.text-center 
                td.text-center 

              tr
                td.text-center 2205 
                td.text-center Proveedores nacionales
                td.text-center 
                td.text-center 
                td.text-center $80.000 

              tr
                td.text-center 220505 
                td.text-center Surtijoyas La Conquista
                td.text-center $80.000 
                td.text-center 
                td.text-center 

              tr
                td.text-center Sumas iguales 
                td.text-center 
                td.text-center 
                td.text-center $80.000 
                td.text-center $80.000

              tr
                <td colspan="5" style=""> Detalle: se registra compra de mercancía.</td> 

    .row.justify-content-center.align-items-center.mt-5        
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="zoom-in-down")
          h5 Tabla 33.  
          span Registro contable 3, compra de mercancía
        .tabla-a.color-acento-contenido.mt-3(data-aos="zoom-in-down")
          table
            thead
              tr.text-center
                th.t3-table-3 Fecha 03/03/2016
                <th colspan="4" style=" background-color:#FFF3DB"> Niño Zapata Ltda.<br>NIT. 800.987.XXX-6 <br>Comprobante de contabilidad No. 003 </th> 
            tbody
              tr
                td.text-center #[b Código]
                td.text-center #[b Cuenta]
                td.text-center #[b Parcial]
                td.text-center #[b Debe]
                td.text-center #[b Haber]

              tr
                td.text-center 5195 
                td.text-center Gastos diversos
                td.text-center 
                td.text-center $40.000
                td.text-center   

              tr
                td.text-center 519545 
                td.text-center Buses y taxis
                td.text-center $40.000
                td.text-center 
                td.text-center 

              tr
                td.text-center 1105 
                td.text-center Caja
                td.text-center 
                td.text-center 
                td.text-center $40.000

              tr
                td.text-center 110505 
                td.text-center Caja general
                td.text-center $40.000 
                td.text-center 
                td.text-center 

              tr
                td.text-center Sumas iguales 
                td.text-center 
                td.text-center 
                td.text-center $40.000 
                td.text-center $40.000

              tr
                <td colspan="5" style=""> Detalle: se registra el pago por transporte.</td>


    .row.justify-content-center.align-items-center.mt-5        
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="zoom-in-down")
          h5 Tabla 34.  
          span Registro contable 4, compra de pago por sueldos
        .tabla-a.color-acento-contenido.mt-3(data-aos="zoom-in-down")
          table
            thead
              tr.text-center
                th.t3-table-4 Fecha 15/03/2016
                <th colspan="4" style=" background-color:#FBDFDE"> Niño Zapata Ltda.<br>NIT. 800.987.XXX-6 <br>Comprobante de contabilidad No. 004 </th> 
            tbody
              tr
                td.text-center #[b Código]
                td.text-center #[b Cuenta]
                td.text-center #[b Parcial]
                td.text-center #[b Debe]
                td.text-center #[b Haber]

              tr
                td.text-center 5205 
                td.text-center Gastos de personal 
                td.text-center 
                td.text-center $50.000
                td.text-center   

              tr
                td.text-center 520506 
                td.text-center Sueldos
                td.text-center $50.000
                td.text-center 
                td.text-center 

              tr
                td.text-center 1105 
                td.text-center Caja
                td.text-center 
                td.text-center 
                td.text-center $50.000 

              tr
                td.text-center 110505 
                td.text-center Caja General
                td.text-center $50.000 
                td.text-center 
                td.text-center 

              tr
                td.text-center Sumas iguales 
                td.text-center 
                td.text-center 
                td.text-center $80.000 
                td.text-center $80.000

              tr
                <td colspan="5" style=""> Detalle: se registra el pago por sueldos.</td>                                                 
    .row.justify-content-center.align-items-center.mt-5        
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="zoom-in-down")
          h5 Tabla 35.  
          span Registro contable 5, compra de mercancía
        .tabla-a.color-acento-contenido.mt-3(data-aos="zoom-in-down")
          table
            thead
              tr.text-center
                th.t3-table-3 Fecha 15/03/2016
                <th colspan="4" style=" background-color:#FFF3DB"> Niño Zapata Ltda.<br>NIT. 800.987.XXX-6 <br>Comprobante de contabilidad No. 005 </th> 
            tbody
              tr
                td.text-center #[b Código]
                td.text-center #[b Cuenta]
                td.text-center #[b Parcial]
                td.text-center #[b Debe]
                td.text-center #[b Haber]

              tr
                td.text-center 4135 
                td.text-center Comercio al por mayor y menor
                td.text-center 
                td.text-center $300.000
                td.text-center   

              tr
                td.text-center 413534 
                td.text-center Artículos de joyería
                td.text-center $300.000
                td.text-center 
                td.text-center 

              tr
                td.text-center 1305 
                td.text-center Clientes
                td.text-center 
                td.text-center $300.000
                td.text-center 

              tr
                td.text-center 130505 
                td.text-center Nacionales
                td.text-center $300.000 
                td.text-center 
                td.text-center 

              tr
                td.text-center 1435
                td.text-center Mercancías no fabricadas
                td.text-center 
                td.text-center 
                td.text-center $80.000

              tr
                td.text-center 143501
                td.text-center Collares
                td.text-center $80.000
                td.text-center 
                td.text-center 

              tr
                td.text-center 6135
                td.text-center Costo de ventas
                td.text-center 
                td.text-center $80.000
                td.text-center 

              tr
                td.text-center 613534
                td.text-center Artículos de joyería
                td.text-center $80.000
                td.text-center 
                td.text-center 

              tr
                td.text-center 
                td.text-center Sumas iguales
                td.text-center 
                td.text-center $380.000
                td.text-center $380.000                          

              tr
                <td colspan="5" style=""> Detalle: Se registra venta a crédito.</td> 

    .row.justify-content-center.align-items-center.mt-5    
      .col-lg-6.t3-color-row.p-3
        h5.text-center.text-white.mb-0 Registros de las transacciones en esquema de cuentas T
    .row.justify-content-center.align-items-center   
      .col-lg-10.t3-color-row-2.p-5
        p(data-aos="zoom-in").mb-0 A manera didáctica, se manejan a nivel de cuenta de 4 dígitos, y permiten ir acumulando la información, facilitando la obtención del saldo. El número al lado izquierdo en las cuentas (débitos), y en la derecha en los créditos, se refiere al número de la transacción o registro en conformidad a los datos suministrados  

    .row.justify-content-center.align-items-center.mt-5        
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="zoom-in-down")
          h5 Figura 10.  
          span Registros contables por método de cuentas T
        img.img-a.img-t.mt-3(data-aos="zoom-in-down")(src='@/assets/ilustraciones/img61.svg', alt='')
        
    .row.justify-content-center.align-items-center.mt-5        
      .col-lg-10        
        p(data-aos="zoom-in") Una vez realizados los registros, se trasladan los saldos de las cuentas a la hoja de trabajo para elaborar un el balance de comprobación, que permite determinar si se ha respetado la partida doble, el total de los débitos debe ser igual al total de los créditos:

    .row.justify-content-center.align-items-end.mt-5        
      .col-lg-2.d-none.d-lg-block
        img.img-a.img-t(data-aos="zoom-in-down")(src='@/assets/ilustraciones/img62.svg', alt='')

      .col-lg-8
        .titulo-sexto.color-acento-contenido(data-aos="zoom-in-down")
          h5 Tabla 36.  
          span Hoja de trabajo de balance de comprobación de doble partida
        .tabla-a.color-acento-contenido.mt-3(data-aos="zoom-in-down")
          table.text-center
            thead
              tr
                th Código/ clase
                th Cuenta
                th Debe
                th VaHaberlor
            tbody
              tr
                td.text-center 1
                td Caja
                td.text-center $10.000
                td.text-center

              tr
                td.text-center 1
                td Clientes nacionales
                td.text-center $300.000 
                td.text-center 

              tr
                td.text-center 1
                td Inventario de Mercancías
                td.text-center $0 
                td.text-center 

              tr
                td.text-center 1
                td Equipo de Oficina
                td.text-center $100.000 
                td.text-center 

              tr
                td.text-center 2
                td Proveedores nacionales
                td.text-center 
                td.text-center $80.000

              tr
                td.text-center 3
                td Aportes sociales
                td.text-center 
                td.text-center $200.000

              tr
                td.text-center 4
                td Ventas
                td.text-center 
                td.text-center $300.000

              tr
                td.text-center 5
                td Gastos de personal
                td.text-center $50.000
                td.text-center 

              tr
                td.text-center 5
                td Gastos transporte
                td.text-center $40.000
                td.text-center 

              tr
                td.text-center 6
                td Costo de ventas
                td.text-center $80.000
                td.text-center 

              tr
                td.text-center 
                td Sumas iguales
                td.text-center $580.000
                td.text-center $580.000

    .row.justify-content-center.align-items-center.mt-5      
      .col-lg-10.cajon.color-secundario.p-4.mb-4(data-aos="fade-left")
        p.mb-0(data-aos="zoom-in") Una vez realizada la sumatoria de los registros del libro y obteniendo que se mantiene la igualdad por la doble partida doble, se procede estructurar los estados financieros, donde en primera medida se determina el estado de resultados, y posteriormente el estado de situación financiera.  

    .row.justify-content-center.align-items-center.mt-5        
      .col-lg-6
        .titulo-sexto.color-acento-contenido(data-aos="zoom-in-down")
          h5 Tabla 36.  
          span Hoja de trabajo de balance de comprobación de doble partida
        .tabla-a.color-acento-contenido.mt-3(data-aos="zoom-in-down")
          table
            thead
              tr.text-center
                <th colspan="2" style=" background-color:#FFF3DB"> Niño Zapata Ltda.<br>Estado de Resultados <br>Mes 1 </th> 
            tbody
              tr
                td.bg-table-t3-2 (suma) Ingresos operacionales<br>(ventas de productos)
                td.bg-table-t3-2.text-center $300.000

              tr
                td (menos) Costo de ventas
                td.text-center $80.000
                          
              tr
                td.bg-table-t3-2 Utilidad bruta
                td.bg-table-t3-2.text-center $220.000 

              tr
                td (menos) Gastos
                td.text-center $90.000

              tr
                td.bg-table-t3-2 Utilidad del ejercicio
                td.t3-table-4.text-center $130.000
      .col-lg-4
        img.img-a.img-t(data-aos="zoom-in-down")(src='@/assets/ilustraciones/img63.svg', alt='') 

    .row.justify-content-center.align-items-center.mt-5        
      .col-lg-8
        p.mb-0.py-3.px-5.text-center.p-border-color En el estado de resultados se determina el valor de la utilidad del periodo, dato que se toma y se registra en el balance en las cuentas de patrimonio:
        
    .row.justify-content-center.align-items-center.mt-5        
      .col-lg-8
        .titulo-sexto.color-acento-contenido(data-aos="zoom-in-down")
          h5 Tabla 38.  
          span Estado de situación financiera de la empresa al final del periodo 1
        .tabla-a.color-acento-botones.mt-3(data-aos="zoom-in-down")
          table.text-center
            thead
              tr.text-center
                <th colspan="2" style=" background-color:#E85F5B; color: white; border-left: 1px solid #E85F5B; border-right: #E85F5B"> Activo</th> 
                <th colspan="2" style=" background-color:#E85F5B; color: white; border-left: 1px solid #E85F5B; border-right: #E85F5B"> Pasivo</th>                 
            tbody
              tr
                td Caja        
                td $10.000       
                <td rowspan="2"> Proveedores nacionales </td>        
                <td rowspan="2">  $80.000 </td>  
              tr
                td Clientes nacionales                      
                td $300.000  
              tr
                td            
                td.dot-l                     
                td.dot-t Total, pasivo
                td.dot-t $80.000
              tr
                <td colspan="2"> Activo no corriente </td>
                <td colspan="2"> Patrimonio </td>
              tr
                td Equipo de oficina                 
                td $100.000                 
                td Aportes sociales                 
                td $200.000 
              tr
                td              
                td.dot-l               
                td.t3-table-4 Utilidad del ejercicio                 
                td.t3-table-4 $130.000
              tr
                td.dot-t            
                td.dot-t.dot-l
                td total, patrimonio
                td $330.000
              tr
                td.t3-color-row-2 Total, activo                 
                td.t3-color-row-2 $410.000            
                td.t3-color-row-2 Total, pasivo y patrimonio
                td.t3-color-row-2 $410.000
</template>

<script>
export default {
  name: 'Tema3',
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

<style lang="sass"></style>
