<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Manejo de capas
    .row.mb-4
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema6/img1.png', alt='', style="width: 400px").m-auto
      .col-lg-5(data-aos="fade-down")
        p.txt-c1 Cuando se está creando un proyecto de diseño en Adobe Illustrator, se pueden llegar a tener muchos elementos al mismo tiempo, por lo que resulta difícil seleccionarlos y por ende controlarlos. Las capas permiten gestionar todos los elementos que componen una ilustración. Si se comparan con un objeto real, las capas serían algo similar a folios invisibles que contienen objetos. Si se cambia el orden de los folios, el resultado es que también cambia el orden en que se pueden visualizar los elementos que las contienen. Con la ventaja que también es posible meter capas dentro de otras y cambiar el orden en que se disponen. 
      .col-lg-3.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema6/img2.png', alt='', style="width: 280px").m-auto
    p.txt-c1.mb-5(data-aos="fade-right") Conceptos clave del manejo de capas en Illustrator:
    .titulo-sexto.color-acento-contenido(data-aos="fade-down")
      p.mb-0 #[b Figura 11.] Capas
    .row.mb-3
      .col-lg-5.d-none.d-lg-block(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema6/img3.png', alt='Imagen que presenta la estructura del panel capas con cada una de sus opciones.', style="width: 500px").m-auto
      .col-lg-7(data-aos="fade-left")
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul1")
          .row(titulo="A. Panel de capas (Layers Panel)")
            .col-12
              p.txt-c1.mb-0 El panel de capas se encuentra generalmente a la derecha de la interfaz o puede activarse desde el menú Ventana > Capas. A través de este panel, es posible crear, renombrar, reorganizar, ocultar y bloquear capas, además de acceder a los objetos individuales dentro de cada una.
          .row(titulo="B. Renombrar capas")
            .col-12
              p.txt-c1.mb-0 Para mantener el orden, es recomendable renombrar las capas. Al hacer doble clic en el nombre de la capa en el panel, se puede asignar un nombre descriptivo, lo que es especialmente útil en proyectos con muchos elementos.
          .row(titulo="C. Subcapas y objetos")
            .col-12
              p.txt-c1.mb-0 Illustrator organiza los elementos dentro de cada capa en subcapas o directamente en objetos. Esto permite tener una jerarquía dentro de cada capa, facilitando la selección y manipulación de elementos individuales sin afectar a otros dentro de la misma capa.
          .row(titulo="D. Ocultar capas")
            .col-12
              p.txt-c1.mb-0 Para ocultar temporalmente una capa, basta con hacer clic en el ícono de ojo junto al nombre de la capa. Esto es útil para trabajar en secciones específicas del diseño sin distracciones visuales.
          .row(titulo="E. Bloquear o desbloquear capas")
            .col-12
              p.txt-c1.mb-0 Indica que el elemento está bloqueado y no se puede editar; un espacio vacío indica que el elemento está desbloqueado y, por lo tanto, se puede editar.
    .row.mb-4
      .col-lg-7(data-aos="fade-right")
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul1")
          .row(titulo="F.  Crear nueva subcapa")
            .col-12
              p.txt-c1.mb-0 Se encuentra generalmente en la parte inferior de la interfaz, este opción permite crear subcapa dentro de una capa.
          .row(titulo="G. Crear nueva capa")
            .col-12
              p.txt-c1.mb-0 Para crear una nueva capa en Adobe Illustrator, vaya al panel Capas en la esquina derecha de la pantalla y haga clic en el icono “Crear nueva capa”. Cuando crea una nueva capa, Illustrator la llamará automáticamente “Capa 1”, “Capa 2”, etc., pero puede cambiarle el nombre haciendo doble clic en el nombre de la capa.
          .row(titulo="H. Eliminar selección")
            .col-12
              p.txt-c1.mb-0 Puede eliminar varias capas o grupos de capas para reducir el tamaño de su ilustración. El icono Eliminar no está disponible si su documento tiene solo una capa.
          .row(titulo="I. Columna de selección")
            .col-12
              p.txt-c1.mb-0 Indica si los elementos están identificados como destino para la aplicación de efectos y la edición de atributos en el panel Apariencia. Cuando el botón de identificación como destino aparece como un icono de anillo doble, el elemento está identificado como destino; un único anillo indica que el elemento no está identificado como destino.
          .row(titulo="J. Columna de identificación como destino")
            .col-12
              p.txt-c1 Indica si los elementos están seleccionados. Cuando algún elemento está seleccionado, aparece un cuadro de color. Cuando un elemento, puede ser una capa o un grupo, contiene algunos objetos seleccionados y otros que no lo están, muestra un cuadro de color de selección más pequeño junto al elemento principal. Si se seleccionan todos los objetos del elemento principal, los cuadros de color de selección tienen el mismo tamaño que las marcas que aparecen junto a los objetos seleccionados.
              p.txt-c1.mb-0 Puede utilizar el panel Capas para mostrar algunos elementos como contornos y otros con el aspecto que tendrán en la ilustración final. También puede atenuar imágenes enlazadas y objetos de mapa de bits para facilitar la edición de las ilustraciones en la parte superior de la imagen. Esto resulta muy útil para calcar una imagen de mapa de bits.
      .col-lg-5.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema6/img4.png', alt='', style="width: 500px").m-auto
    p.txt-c1.mb-0(data-aos="fade-right") El uso eficaz de las capas facilita el flujo de trabajo, especialmente en proyectos complejos, ya que permite mantener un control preciso sobre cada aspecto del diseño y trabajar de manera no destructiva.

</template>

<script>
export default {
  name: 'Tema6',
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
