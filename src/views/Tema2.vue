<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Panel Degradado
    .row.justify-content-center.mb-5
      .col-md-7.col-lg-auto.pe-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema2/img1.png', alt='', style="width: 450px").m-auto
      .col-md-7.col-lg.bg-c6(data-aos="fade-left")
        .p-5.h-100
          .row.align-items-center.h-100
            .col-12
              p.mb-0 El panel Degradado permite aplicar colores degradados a cualquier objeto vectorial, creando el aspecto de variaciones en una ilustración; este cuenta con un regulador, en el cual se pueden indicar por medio de paradas o puntos, donde los colores van variando.
    p.mb-5(data-aos="fade-right") A continuación, se muestra la estructuración del panel:
    .row.justify-content-center.mb-4
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-down")
          p.mb-0 #[b Figura 2.] Panel Degradado
        .row.mb-4
          .col-lg-auto(data-aos="fade-right")
            figure
              img(src='@/assets/curso/tema2/img2.png', alt='Imagen que presenta la estructura del panel degradado con cada una de sus opciones.', style="width: 600px").m-auto
          .col-lg.d-none.d-lg-block(data-aos="fade-left")
            figure
              img(src='@/assets/curso/tema2/img3.png', alt='', style="width: 480px").m-auto
    .row.bg-c5
      .col-12(data-aos="fade-down")
        .p-5
          .tarjeta.tarjeta--azul2
            .p-4.p-lg-5
              SlyderA(tipo="b")
                .row.justify-content-center.align-items-center
                  .col-lg-5.mb-4.mb-lg-0
                    ol.lista-ol--cuadro
                      li.d-flex
                        .lista-ol--cuadro__vineta
                          span A.
                        |
                        p.mb-0 #[b Cuadro relleno:] permite visualizar el aspecto del degradado actual que se está manejando.
                      li.d-flex
                        .lista-ol--cuadro__vineta
                          span B.
                        |
                        p.mb-0 #[b Menú degradado:] a través del despliegue de este menú, se pueden visualizar varias opciones de degradado disponibles. Así mismo, permite guardar nuevas muestras.
                      li.d-flex
                        .lista-ol--cuadro__vineta
                          span C.
                        |
                        p.mb-0 #[b Degradado de relleno:] al hacer doble clic sobre este comando, se muestra el cuadro Selector de colores, en el que se puede elegir el color deseado para cada parada del regulador de degradado.
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/tema2/img4.png', alt='', style='width: 500px').m-auto
                .row.justify-content-center.align-items-center
                  .col-lg-5.mb-4.mb-lg-0
                    ol.lista-ol--cuadro
                      li.d-flex
                        .lista-ol--cuadro__vineta
                          span D.
                        |
                        p.mb-0 #[b Degradado de trazo:] facilita el ajuste de degradado solo para el trazo o contorno de una forma, igual que en el comando degradado de relleno, se puede hacer doble clic sobre la opción y desplegar el selector de colores.
                      li.d-flex
                        .lista-ol--cuadro__vineta
                          span E.
                        |
                        p.mb-0 #[b Degradado inverso:] esta opción invierte el sentido del degradado.
                      li.d-flex
                        .lista-ol--cuadro__vineta
                          span F.
                        |
                        p.mb-0 #[b Puntos intermedios:] este manejador permite afinar los niveles de degradado.
                      li.d-flex
                        .lista-ol--cuadro__vineta
                          span G.
                        |
                        p.mb-0 #[b Detención de color:] son las paradas donde se ajusta las variaciones para cada color.
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/tema2/img5.png', alt='', style='width: 500px').m-auto
                .row.justify-content-center.align-items-center
                  .col-lg-5.mb-4.mb-lg-0
                    ol.lista-ol--cuadro
                      li.d-flex
                        .lista-ol--cuadro__vineta
                          span H.
                        |
                        p.mb-0 #[b Opacidad:] a través del ajuste de la opacidad, se puede manipular la trasparencia para cada parada o detención de color.
                      li.d-flex
                        .lista-ol--cuadro__vineta
                          span I.
                        |
                        p.mb-0 #[b Ubicación:] esta opción ajusta por porcentajes del nivel para cada detención de color.
                      li.d-flex
                        .lista-ol--cuadro__vineta
                          span J.
                        |
                        p.mb-0 #[b Menú de paneles:] muestra las opciones de ocultar o mostrar las utilidades del panel de degradado.
                      li.d-flex
                        .lista-ol--cuadro__vineta
                          span K.
                        |
                        p.mb-0 #[b Tipo:] permite elegir entre tipo de degradado, ya sea lineal o radial.
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/tema2/img6.png', alt='', style='width: 500px').m-auto
                .row.justify-content-center.align-items-center
                  .col-lg-5.mb-4.mb-lg-0
                    ol.lista-ol--cuadro
                      li.d-flex
                        .lista-ol--cuadro__vineta
                          span L.
                        |
                        p.mb-0 #[b Tipo de degradado de trazo:] muestra las tres alternativas de ajuste para el degradado en el caso de trazos y/o contornos.
                      li.d-flex
                        .lista-ol--cuadro__vineta
                          span M.
                        |
                        p.mb-0 #[b Ángulo:] ajusta el ángulo de rotación para el degradado.
                      li.d-flex
                        .lista-ol--cuadro__vineta
                          span N.
                        |
                        p.mb-0 #[b Proporción de aspecto:] se activa para ajuste del elemento, en el caso de degradado radial, este escala el tamaño del sentido radial del degradado.
                      li.d-flex
                        .lista-ol--cuadro__vineta
                          span O.
                        |
                        p.mb-0 #[b Eliminar parada:] en el comando para eliminar puntos de detención de color, el regulador de degradado de Adobe Illustrator contiene por defecto dos paradas.
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/tema2/img7.png', alt='', style='width: 500px').m-auto
    .row.bg-c8
      .col-12
        .px-5.pt-5
          Separador
          #t_2_1
          .titulo-segundo.color-acento-contenido
            h2 2.1 Panel Guía de color
          .row.mb-5
            .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/tema2/img1.svg', alt='', style='width: 300px').m-auto
            .col-lg-9(data-aos="fade-left")
              p.mb-0 Este panel dispone de varias alternativas de reglas de armonía, donde además, se puede elegir un color base para crear grupos de colores. Permite crear unos con matices y degradaciones, colores cálidos y fríos o intensos y ligeros. El panel Guía de color se estructura de la siguiente manera:
          .row.justify-content-center.mb-4
            .col-lg-8
              .titulo-sexto.color-acento-contenido(data-aos="fade-down")
                p.mb-0 #[b Figura 3.] Panel Guía de color
              .row.mb-4
                .col-lg-auto(data-aos="fade-right")
                  figure
                    img(src='@/assets/curso/tema2/img9.png', alt='Imagen que presenta la estructura de la guía de color con cada una de sus opciones.', style="width: 520px").m-auto
                .col-lg.d-none.d-lg-block(data-aos="fade-left")
                  figure
                    img(src='@/assets/curso/tema2/img10.png', alt='', style="width: 480px").m-auto
          .row.mb-3
            .col-lg-5.d-none.d-lg-block(data-aos="fade-right")
              figure
                img(src='@/assets/curso/tema2/img11.png', alt='', style="width: 500px").m-auto
            .col-lg-7(data-aos="fade-left")
              AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul1")
                .row(titulo="A. Menú de reglas de armonía y grupo de colores activos")
                  .col-12
                    p.mb-0 Despliega las reglas de armonía resultantes de acuerdo al color base.
                .row(titulo="B. Color base definido")
                  .col-12
                    p.mb-0 Color seleccionado como base para la armonía.
                .row(titulo="C. Colores activos")
                  .col-12
                    p.mb-0 Muestra los colores que se encuentran activos.
                .row(titulo="D. Variaciones de color")
                  .col-12
                    p.mb-0 Revela las diferentes variaciones de color.
          .row
            .col-lg-7(data-aos="fade-right")
              AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul1")
                .row(titulo="E. Limita los colores a la biblioteca de muestras especificadas")
                  .col-12
                    p.mb-0 Al accionar esta opción, se despliegan las diferentes alternativas de colores organizadas por categorías, las cuales pueden ser: tejidos, comidas, naturaleza, entre otras.
                .row(titulo="F. Editar colores y/o Editar o aplicar colores según selección")
                  .col-12
                    p.mb-0 Al presionar el comando, aparece el cuadro de dialogo Volver a colorear ilustración, permitiendo ajustar la armonía de colores actual.
                .row(titulo="G. Guardar grupo de color en el panel Muestras")
                  .col-12
                    p.mb-0 Permite guardar el grupo de color en el panel de muestras.
            .col-lg-5.d-none.d-lg-block(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema2/img2.svg', alt='', style="width: 500px").m-auto

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

<style lang="sass"></style>
