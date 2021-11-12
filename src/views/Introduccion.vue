<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="fade-left")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-start.align-items-center.mt-5
      .col-lg-8.text-sup(data-aos="fade-right")
        p En el ejercicio empresarial es muy importante contar con información fiable y disponible para la toma de decisiones, esto implica el registro diario de los hechos económicos tal como ocurren, en los libros contables, que serán los instrumentos que facilitarán la construcción de los estados financieros de la empresa. Pero esta información, antes de compilarla en dichos estados financieros, se debe verificar para que cumpla con los preceptos normativos sin errores y con los ajustes necesarios; así mismo, hay que comprobar que esta información se preserve en documentos de dichos sucesos o hechos económicos, configurando archivos que deben guardar los principios normativos para su cuidado y almacenamiento. Finalmente, con esta información, se procede a elaborar los estados financieros de propósito general, que serán los reportes que utilizarán la administración y gerencia para la toma de decisiones. A lo largo del componente se desarrollará el proceso descrito que complementa los fundamentos contables de propósito general. 
    .row.justify-content-end.align-items-center.mt-5           
      .col-lg-5.d-none.d-lg-block(data-aos="fade-left")
        img.img-t.img-a.img-top(src='@/assets/ilustraciones/img1.svg', alt='')


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
