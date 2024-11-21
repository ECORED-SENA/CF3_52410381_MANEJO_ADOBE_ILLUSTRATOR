<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Panel Color
    p.mb-4(data-aos="fade-right") Muestra los valores de colores de diferentes modelos de color, en él se ven las opciones utilizadas con más frecuencia.
    .row.bg-c2
      .col-12
        .px-5
          .row.justify-content-center.mb-5
            .col-lg-10
              .titulo-sexto.color-acento-contenido(data-aos="fade-down")
                p.mb-0 #[b Figura 1.] Panel de color
              .row.mb-4
                .col-lg-auto(data-aos="fade-right")
                  figure
                    img(src='@/assets/curso/tema1/img2.png', alt='Imagen que presenta la estructura del panel de color con cada una de sus opciones.', style="width: 590px").m-auto
                .col-lg.d-none.d-lg-block(data-aos="fade-left")
                  figure
                    img(src='@/assets/curso/tema1/img3.png', alt='', style="width: 480px").m-auto
              SlyderF(columnas="col-md-6 col-xl-4")(data-aos="fade-down")
                .tarjeta.bg-white.p-4
                  .row.justify-content-center.mb-3
                    .col-auto
                      img(src='@/assets/curso/tema1/img1.svg', alt='AvatarTop', style="width: 60px").m-auto
                  .row.justify-content-center.mb-3
                    .col-auto
                      .p-2.bg-c3
                        p.text-center.mb-0 #[b A. Color de relleno]
                  p.mb-0 Al presionar esta opción se activa el modo de aplicación de color en relleno a un trazado.
                .tarjeta.bg-white.p-4
                  .row.justify-content-center.mb-3
                    .col-auto
                      img(src='@/assets/curso/tema1/img2.svg', alt='AvatarTop', style="width: 60px").m-auto
                  .row.justify-content-center.mb-3
                    .col-auto
                      .p-2.bg-c3
                        p.text-center.mb-0 #[b B. Color de trazo]
                  p.mb-0 Esta opción activa el modo de aplicación de color sobre trazo, de una figura vectorial.
                .tarjeta.bg-white.p-4
                  .row.justify-content-center.mb-3
                    .col-auto
                      img(src='@/assets/curso/tema1/img3.svg', alt='AvatarTop', style="width: 60px").m-auto
                  .row.justify-content-center.mb-3
                    .col-auto
                      .p-2.bg-c3
                        p.text-center.mb-0 #[b C. Cuadro ninguno]
                  p.mb-0 Esta casilla elimina el color del trazo o relleno, según el elemento que esté activo.
                .tarjeta.bg-white.p-4
                  .row.justify-content-center.mb-3
                    .col-auto
                      img(src='@/assets/curso/tema1/img4.svg', alt='AvatarTop', style="width: 60px").m-auto
                  .row.justify-content-center.mb-3
                    .col-auto
                      .p-2.bg-c3
                        p.text-center.mb-0 #[b D. Parada espectro de colores]
                  p.mb-0 Desde esta opción se puede elegir el color deseado para relleno o trazo de forma.
                .tarjeta.bg-white.p-4
                  .row.justify-content-center.mb-3
                    .col-auto
                      img(src='@/assets/curso/tema1/img5.svg', alt='AvatarTop', style="width: 60px").m-auto
                  .row.justify-content-center.mb-3
                    .col-auto
                      .p-2.bg-c3
                        p.text-center.mb-0 #[b E. Regulador de color]
                  p.mb-0 Permite controlar los niveles de color, conforme al modelo de color.
                .tarjeta.bg-white.p-4
                  .row.justify-content-center.mb-3
                    .col-auto
                      img(src='@/assets/curso/tema1/img6.svg', alt='AvatarTop', style="width: 60px").m-auto
                  .row.justify-content-center.mb-3
                    .col-auto
                      .p-2.bg-c3
                        p.text-center.mb-0 #[b F. Valor hexadecimal de color]
                  p.mb-0 Muestra el resultado en valor hexadecimal del color final, usualmente se utiliza para pantallas, aplicaciones y afines a la web.
                .tarjeta.bg-white.p-4
                  .row.justify-content-center.mb-3
                    .col-auto
                      img(src='@/assets/curso/tema1/img6.svg', alt='AvatarTop', style="width: 60px").m-auto
                  .row.justify-content-center.mb-3
                    .col-auto
                      .p-2.bg-c3
                        p.text-center.mb-0 #[b G. Menú del panel]
                  p.mb-0 Mediante la habilitación de este botón, se puede escoger entre los diferentes modelos de color, como son: escala de grises, RGB, HSB, CMYK y RGB compatible con web.
          .row.mb-5
            .col-auto.bg-c4(data-aos="fade-left")
              .row.align-items-center
                .col-auto.px-0
                  figure
                    img(src='@/assets/curso/tema1/img9.svg', alt='', style='width: 50px')
                .col
                  h3.mb-0 Aplicación de color a trazado
    .row.bg-c5
      .col-12(data-aos="fade-down")
        .p-5
          .tarjeta.tarjeta--gris1.p-4
            PasosB.color-acento-contenido
              .row.justify-content-center.align-items-center(titulo="")
                .col-lg-5.mb-4.mb-lg-0
                  p.mb-0 En primer lugar, se selecciona la figura a la que se desea aplicar color:
                .col-lg-5
                  figure
                    img(src='@/assets/curso/tema1/img5.png', alt='', style="width: 480px").m-auto
              .row.justify-content-center.align-items-center(titulo="")
                .col-lg-5.mb-4.mb-lg-0
                  p.mb-0 Luego se abre el panel #[b Color] desde la #[b Barra de menú], dando clic en la opción #[b Ventana] y seguidamente se hace clic en la opción #[b Color].
                .col-lg-5
                  figure
                    img(src='@/assets/curso/tema1/img6.png', alt='', style="width: 480px").m-auto
              .row.justify-content-center.align-items-center(titulo="")
                .col-lg-5.mb-4.mb-lg-0
                  p.mb-0 Se puede seleccionar el color deseado en la #[b Parada espectro de colores] y aplicarlo al objeto, teniendo como resultado el elemento con el relleno respectivo.
                .col-lg-5
                  figure
                    img(src='@/assets/curso/tema1/img7.png', alt='', style="width: 480px").m-auto
      
</template>

<script>
export default {
  name: 'Tema1',
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
