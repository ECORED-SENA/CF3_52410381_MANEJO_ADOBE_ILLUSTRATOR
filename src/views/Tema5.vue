<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Paneles de texto
    .row.bg-c16
      .col-12
        .px-5
          .row.justify-content-center
            .col-lg-10(data-aos="fade-right")
              .p-4.bg-c17
                .row.align-items-center
                  .col-md-auto.mb-4.mb-md-0
                    figure
                      img(src='@/assets/curso/tema5/img1.svg', alt='', style="width: 60px").m-auto
                  .col
                    p.mb-0 Dentro del énfasis en textos, Adobe Illustrator ofrece varios paneles de edición como por ejemplo: Carácter, Estilos de carácter, Estilos de párrafo, Glifos, OpenType, Párrafo y Tabuladores.
          Separador
          #t_5_1
          .titulo-segundo.color-acento-contenido
            h2 5.1 Panel Carácter
          .row.align-items-center.mb-3
            .col-md-auto.mb-4.mb-md-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/tema5/img2.svg', alt='', style="width: 200px").m-auto
            .col(data-aos="fade-left")
              p.mb-0 Consta de varias opciones ajustables entre las cuales se tienen: herramienta de retocar texto, fuente, estilo de fuente, tamaño de fuente, kerning o espaciado entre caracteres para casos especiales, escala horizontal, desplazamiento vertical, interlineado, tracking, escala vertical, rotación de caracteres e Idioma.
          p.mb-5(data-aos="fade-right") A continuación se presentan algunas de las funcionalidades más utilizadas:
          .row.justify-content-center
            .col-lg-10
              .p-5.bg-c13
                .titulo-sexto.color-acento-contenido(data-aos="fade-down")
                  p.mb-0 #[b Figura 9.] Panel Carácter
                .row.align-items-center
                  .col-lg-auto.mb-4.mb-lg-0(data-aos="fade-right")
                    figure
                      img(src='@/assets/curso/tema5/img2.png', alt='Imagen que presenta la estructura del panel carácter con cada una de sus opciones.', style="width: 450px").m-auto
                  .col-lg(data-aos="fade-left")
                    .row.mb-3
                      .col-12
                        .p-3.bg-c18
                          .row.align-items-center
                            .col-auto.pe-0
                              figure
                                img(src='@/assets/curso/tema4/img2.svg', alt='', style="width: 25px")
                            .col
                              p.mb-0 #[b Fuente:] se despliega una lista de fuentes tipográficas disponibles en el sistema.
                    .row.mb-3
                      .col-12
                        .p-3.bg-c18
                          .row.align-items-center
                            .col-auto.pe-0
                              figure
                                img(src='@/assets/curso/tema4/img3.svg', alt='', style="width: 25px")
                            .col
                              p.mb-0 #[b Estilo de fuente:] al hacer clic sobre la opción, se despliega la lista de opciones de estilo de fuente como por ejemplo Regular, Italic, Bold y/o Bold Italic. Generalmente las alternativas para esta opción pueden variar, dependiendo de la configuración de la fuente tipográfica instalada en el sistema.
                    .row.mb-3
                      .col-12
                        .p-3.bg-c18
                          .row.align-items-center
                            .col-auto.pe-0
                              figure
                                img(src='@/assets/curso/tema4/img4.svg', alt='', style="width: 25px")
                            .col
                              p.mb-0 #[b Tamaño de fuente:] este control permite ajustar el tamaño de la fuente tipográfica utilizada en un texto.
                    .row.mb-3
                      .col-12
                        .p-3.bg-c18
                          .row.align-items-center
                            .col-auto.pe-0
                              figure
                                img(src='@/assets/curso/tema4/img5.svg', alt='', style="width: 25px")
                            .col
                              p.mb-0 #[b Tracking:] controla el espaciado entre caracteres de un texto.
                    .row
                      .col-12
                        .p-3.bg-c18
                          .row.align-items-center
                            .col-auto.pe-0
                              figure
                                img(src='@/assets/curso/tema4/img6.svg', alt='', style="width: 25px")
                            .col
                              p.mb-0 #[b Interlineado:] facilita el ajuste el espaciado entre varias líneas de textos.
    Separador
    #t_5_2
    .titulo-segundo.color-acento-contenido
      h2 5.2 Panel Párrafo
    p.txt-c1.mb-5(data-aos="fade-right") El Panel Párrafo en Adobe Illustrator es una herramienta fundamental para controlar la alineación, espaciado y distribución del texto en un diseño. Permite ajustar las características de párrafos enteros, ofreciendo un control preciso sobre la disposición del texto y su relación con otros elementos visuales.
    .row.justify-content-center.mb-4
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-down")
          p.mb-0 #[b Figura 10.] Panel Párrafo
        .row.mb-4
          .col-lg-auto(data-aos="fade-right")
            figure
              img(src='@/assets/curso/tema5/img3.png', alt='', style="width: 552px").m-auto
          .col-lg.d-none.d-lg-block(data-aos="fade-left")
            figure
              img(src='@/assets/curso/tema5/img4.png', alt='', style="width: 480px").m-auto
    p.txt-c1.mb-4(data-aos="fade-right") Funcionalidades clave del Panel Párrafo:
    .row.bg-c5
      .col-12(data-aos="fade-down")
        .p-5
          .tarjeta.tarjeta--azul2
            .p-4.p-lg-5
              SlyderA(tipo="b")
                .row.justify-content-center.align-items-center
                  .col-lg-6.mb-4.mb-lg-0
                    .row.align-items-center
                      .col-auto.pe-0
                        figure
                          img(src='@/assets/curso/tema4/img2.svg', alt='', style="width: 34px")
                      .col
                        p.txt-c1.mb-0 #[b Alineación del texto]
                    p.txt-c1.ms-5 Permite controlar cómo se alinea el texto dentro del cuadro de texto. Las opciones de alineación incluyen:
                    ul.lista-ul
                      li.d-flex
                        i.fas.fa-bezier-curve
                        |
                        p.txt-c1.mb-0 #[b Alinear a la izquierda:] El texto se alinea con el margen izquierdo.
                      li.d-flex
                        i.fas.fa-bezier-curve
                        |
                        p.txt-c1.mb-0 #[b Alinear al centro:] El texto se centra entre los márgenes izquierdo y derecho.
                      li.d-flex
                        i.fas.fa-bezier-curve
                        |
                        p.txt-c1.mb-0 #[b Alinear a la derecha:] El texto se alinea con el margen derecho.
                      li.d-flex
                        i.fas.fa-bezier-curve
                        |
                        p.txt-c1.mb-0 #[b Justificado:] El texto se distribuye uniformemente entre ambos márgenes. Existen varias opciones de justificación: justificar a la izquierda, justificar al centro, justificar a la derecha, justificar completamente.
                  .col-lg-4
                    figure
                      img(src='@/assets/curso/tema5/img5.png', alt='', style="width: 500px").m-auto
                .row.justify-content-center.align-items-center
                  .col-lg-6.mb-4.mb-lg-0
                    .row.align-items-center
                      .col-auto.pe-0
                        figure
                          img(src='@/assets/curso/tema4/img3.svg', alt='', style="width: 34px")
                      .col
                        p.txt-c1.mb-0 #[b Sangrías]
                    p.txt-c1.ms-5 El panel permite ajustar las sangrías para el párrafo. Es posible configurar:
                    ul.lista-ul
                      li.d-flex
                        i.fas.fa-bezier-curve
                        |
                        p.txt-c1.mb-0 #[b Sangría izquierda:] Controla el espacio entre el margen izquierdo del cuadro de texto y el inicio de la primera línea del párrafo.
                      li.d-flex
                        i.fas.fa-bezier-curve
                        |
                        p.txt-c1.mb-0 #[b Sangría derecha:] Establece el espacio entre el margen derecho y el final de la última línea del párrafo.
                      li.d-flex
                        i.fas.fa-bezier-curve
                        |
                        p.txt-c1.mb-0 #[b Sangría de primera línea:] Permite añadir una sangría a la primera línea del párrafo, dejando las líneas siguientes alineadas con el margen izquierdo.
                  .col-lg-4
                    figure
                      img(src='@/assets/curso/tema5/img6.png', alt='', style="width: 500px").m-auto
                .row.justify-content-center.align-items-center
                  .col-lg-6.mb-4.mb-lg-0
                    .row.align-items-center
                      .col-auto.pe-0
                        figure
                          img(src='@/assets/curso/tema4/img4.svg', alt='', style="width: 34px")
                      .col
                        p.txt-c1.mb-0 #[b Espaciado antes y después de párrafos]
                    p.txt-c1.ms-5 El panel ofrece la opción de ajustar el espacio antes y después de un párrafo. Esto se utiliza para crear un espaciado visual claro entre párrafos sin necesidad de añadir saltos de línea adicionales.
                  .col-lg-4
                    figure
                      img(src='@/assets/curso/tema5/img7.png', alt='', style="width: 500px").m-auto

</template>

<script>
export default {
  name: 'Tema5',
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
