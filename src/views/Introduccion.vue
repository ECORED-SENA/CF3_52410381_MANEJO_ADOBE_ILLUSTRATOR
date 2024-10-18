<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row
      .col-lg-3.mb-4.mb-lg-0.d-none.d-lg-block(data-aos="fade-right")
        figure
          img(src='@/assets/curso/intro/img1.svg', alt='', style="width: 260px").m-auto
      .col-lg-6.mb-4.mb-lg-0(data-aos="fade-down")
        .row.mb-3
          .col-12
            .p-4.bg-c1
              figure.mb-3
                img(src='@/assets/curso/intro/img2.svg', alt='', style="width: 60px")
              p.mb-0 Este componente formativo ofrece una guía completa sobre los paneles de Adobe Illustrator, destacando cómo utilizar cada uno de ellos para transformar elementos de diseño. Desde el panel de color hasta el panel de apariencia, cada herramienta permite realizar ajustes precisos y personalizar las ilustraciones vectoriales, facilitando la creación de diseños complejos de manera eficiente.
        p.mb-0 A lo largo del documento, se explican las funciones clave de paneles como el de degradado, buscatrazos y capas, proporcionando una visión detallada de las posibilidades que Adobe Illustrator ofrece para crear, modificar y gestionar proyectos. Este componente está dirigido a aquellos que buscan optimizar sus habilidades en el uso de las herramientas de diseño gráfico.
      .col-lg-3(data-aos="fade-left")
        figure
          img(src='@/assets/curso/intro/img1.png', alt='', style="width: 260px").m-auto
    
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
