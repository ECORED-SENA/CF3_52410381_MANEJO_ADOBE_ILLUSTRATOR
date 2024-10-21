<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Panel Buscatrazos
    p.mb-4(data-aos="fade-right") El panel de #[b Buscatrazos] dispone de herramientas que permiten combinar objetos vectoriales en nuevas formas.
    .row.justify-content-center.mb-4
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-down")
          p.mb-0 #[b Figura 4.] Panel Buscatrazos
        .row.mb-4
          .col-lg-auto(data-aos="fade-right")
            figure
              img(src='@/assets/curso/tema3/img1.png', alt='Imagen que presenta la estructura del panel buscatrazos con cada una de sus opciones.', style="width: 600px").m-auto
          .col-lg.d-none.d-lg-block(data-aos="fade-left")
            figure
              img(src='@/assets/curso/tema3/img2.png', alt='', style="width: 480px").m-auto
    .row.bg-c9.mb-5
      .col-12(data-aos="fade-down")
        .p-5
          .tarjeta.tarjeta--gris1.p-4
            PasosB.color-acento-contenido
              .row.justify-content-center.align-items-center(titulo="Añadir")
                .col-lg-6.mb-4.mb-lg-0
                  p.mb-0 #[b Añadir]
                  p.mb-0 Esta opción determina todo el contorno de los objetos y los combina formando uno solo. Los atributos de pintura son heredados por el objeto superior.
                .col-lg-3
                  figure
                    img(src='@/assets/curso/tema3/img1.svg', alt='', style="width: 90px").m-auto
              .row.justify-content-center.align-items-center(titulo="Excluir")
                .col-lg-6.mb-4.mb-lg-0
                  p.mb-0 #[b Excluir]
                  p.mb-0 Sustrae los objetos situados más al frente de otro elemento ubicado más al fondo.
                .col-lg-3
                  figure
                    img(src='@/assets/curso/tema3/img2.svg', alt='', style="width: 90px").m-auto
              .row.justify-content-center.align-items-center(titulo="Formar intersección")
                .col-lg-6.mb-4.mb-lg-0
                  p.mb-0 #[b Formar intersección]
                  p.mb-0 Este comando determina el área donde se superponen todos los objetos. 
                .col-lg-3
                  figure
                    img(src='@/assets/curso/tema3/img3.svg', alt='', style="width: 90px").m-auto
              .row.justify-content-center.align-items-center(titulo="Excluir")
                .col-lg-6.mb-4.mb-lg-0
                  p.mb-0 #[b Excluir]
                  p.mb-0 Aquí se define el área no superpuesta de los objetos, convirtiendo en transparente el área intersectada.
                .col-lg-3
                  figure
                    img(src='@/assets/curso/tema3/img4.svg', alt='', style="width: 90px").m-auto
              .row.justify-content-center.align-items-center(titulo="Dividir")
                .col-lg-6.mb-4.mb-lg-0
                  p.mb-0 #[b Dividir]
                  p.mb-0 Con este botón se aparta un segmento de la ilustración en las caras rellenas que la forman. Al accionar este botón, puede utilizar las herramientas Selección directa o Selección de grupos y manipular las caras resultantes de forma independiente, también puede optar por eliminar o por conservar los objetos no rellenos al aplicar el comando Dividir.
                .col-lg-3
                  figure
                    img(src='@/assets/curso/tema3/img5.svg', alt='', style="width: 90px").m-auto
              .row.justify-content-center.align-items-center(titulo="Cortar")
                .col-lg-6.mb-4.mb-lg-0
                  p.mb-0 #[b Cortar]
                  p.mb-0 Suprime el fragmento oculto de un objeto de relleno. Elimina los trazos y no combina los objetos de color similar.
                .col-lg-3
                  figure
                    img(src='@/assets/curso/tema3/img6.svg', alt='', style="width: 90px").m-auto
              .row.justify-content-center.align-items-center(titulo="Combinar")
                .col-lg-6.mb-4.mb-lg-0
                  p.mb-0 #[b Combinar]
                  p.mb-0 Suprime el fragmento oculto de un objeto de relleno. Deshecha los trazos y combina cualquier objeto añadido o superpuesto con el mismo color.
                .col-lg-3
                  figure
                    img(src='@/assets/curso/tema3/img7.svg', alt='', style="width: 90px").m-auto
              .row.justify-content-center.align-items-center(titulo="Recortar")
                .col-lg-6.mb-4.mb-lg-0
                  p.mb-0 #[b Recortar]
                  p.mb-0 Fracciona una ilustración en las caras rellenas que la integran, en seguida, suprime todas las partes de la ilustración que yacen fuera de los límites del objeto situado más al frente. De igual manera, elimina todos los trazos.
                .col-lg-3
                  figure
                    img(src='@/assets/curso/tema3/img8.svg', alt='', style="width: 90px").m-auto
              .row.justify-content-center.align-items-center(titulo="Contornear")
                .col-lg-6.mb-4.mb-lg-0
                  p.mb-0 #[b Contornear]
                  p.mb-0 Fragmenta un objeto en sus segmentos de línea o bordes. Esta función es útil para ilustraciones donde es necesario cortar los objetos que se sobreimprimen. Al dar clic en este botón, puede utilizar las herramientas Selección directa o Selección de grupos y manipular cada borde de forma independiente. Puede optar por eliminar o por conservar los objetos no rellenos al aplicar este comando.
                .col-lg-3
                  figure
                    img(src='@/assets/curso/tema3/img9.svg', alt='', style="width: 90px").m-auto
              .row.justify-content-center.align-items-center(titulo="Menos fondo")
                .col-lg-6.mb-4.mb-lg-0
                  p.mb-0 #[b Menos fondo]
                  p.mb-0 Sustrae los objetos más al fondo del elemento ubicado más al frente. Este comando se puede utilizar para suprimir algunas áreas de la ilustración alternando el orden de apilamiento.
                .col-lg-3
                  figure
                    img(src='@/assets/curso/tema3/img10.svg', alt='', style="width: 90px").m-auto
              .row.justify-content-center.align-items-center(titulo="Expandir")
                .col-lg-6.mb-4.mb-lg-0
                  p.mb-0 #[b Expandir]
                  p.mb-0 Al accionar esta opción, se mantiene la forma de un objeto compuesto, sin embargo, no se pueden seleccionar sus partes individualmente.
                .col-lg-3
                  figure
                    img(src='@/assets/curso/tema3/img11.svg', alt='', style="width: 190px").m-auto
    .row.mb-5
      .col-auto.bg-c4(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema3/img12.svg', alt='', style='width: 50px')
          .col
            h3.mb-0 Menú opciones buscatrazos
    p.mb-4(data-aos="fade-right") Muestra la lista de opciones disponibles, como:
    .row.mb-3
      .col-lg-7(data-aos="fade-right")
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul1")
          .row(titulo="Reventar")
            .col-12
              p.mb-0 Tiene el fin de reparar los posibles huecos entre los colores de una ilustración. Por consiguiente, crea una pequeña área de superposición (denominada reventado) entre dos colores contiguos.
          .row(titulo="Repetir (acción de comando)")
            .col-12
              p.mb-0 Repite la acción de comando llevada cabo previamente.
          .row(titulo="Opciones del Buscatrazos")
            .col-12
              p.mb-0 Facilita los ajustes en la precisión del cálculo de trazado de un objeto, permite “Quitar puntos redundantes” o puntos innecesarios al accionar algún comando del Buscatrazos. Por último, se encuentra la opción: “Los comandos Dividir y Contornear eliminan ilustraciones sin tintas” que suprime los objetos no rellenos de la ilustración seleccionada al accionar los comandos Dividir o Contornear.
      .col-lg-5.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema3/img13.svg', alt='', style="width: 450px").m-auto
    .row
      .col-lg-3.d-none.d-lg-block(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema3/img14.svg', alt='', style="width: 500px").m-auto
      .col-lg-9(data-aos="fade-left")
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul1")
          .row(titulo="Crear forma compuesta")
            .col-12
              p.mb-0 Se genera una ilustración editable compuesta de dos o más objetos. Las formas compuestas facilitan la creación de gráficas complejas, puesto que se puede ajustar con precisión el modo de forma, el orden de apilamiento, la ubicación, la forma y el aspecto de cada trazado incorporado.
          .row(titulo="Soltar forma compuesta")
            .col-12
              p.mb-0 Separa los objetos de manera individual.
          .row(titulo="Expandir forma compuesta")
            .col-12
              p.mb-0 Con esta opción se mantiene la forma de un objeto compuesto, sin permitir la selección de sus partes individualmente.

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
