<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Panel Apariencia
    .row.mb-3
      .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema4/img1.png', alt='', style="width: 300px").m-auto
      .col-lg-6(data-aos="fade-down")
        p Los atributos de apariencia son propiedades que afectan al aspecto de un objeto sin alterar su estructura subyacente. Los atributos de apariencia son rellenos, trazos, transparencia y efectos. Si aplica un atributo de apariencia a un objeto y luego modifica o elimina ese atributo, el objeto subyacente o cualquier otro atributo aplicado al objeto no sufre cambios.
        .row
          .col-12
            .p-4.bg-c10
              figure.mb-3
                img(src='@/assets/curso/tema4/img1.svg', alt='', style="width: 80px")
              p.mb-0 Puede definir atributos de apariencia en cualquier nivel de la jerarquía de la capa. Por ejemplo, al aplicar un efecto de sombra paralela a una capa, todos los objetos de la capa adoptan la sombra paralela. Sin embargo, al mover un objeto fuera de la capa, ese objeto dejará de tener la sombra paralela porque el efecto pertenece a la capa y no a los objetos contenidos en ella.
      .col-lg-3.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema4/img2.png', alt='', style="width: 300px").m-auto
    p.mb-5(data-aos="fade-right") El panel Apariencia es la puerta de acceso al trabajo con atributos de apariencia. Puesto que es posible aplicar atributos de apariencia a capas, grupos y objetos (y a menudo, también a rellenos y trazos) la jerarquía de los atributos de la ilustración puede llegar a ser muy compleja. Por ejemplo, si aplica un efecto a una capa entera y otro efecto a un objeto de la capa, puede ser difícil determinar cuál de los dos efectos causa el cambio de la ilustración. El panel Apariencia muestra los rellenos, trazos, estilos gráficos y efectos que se han aplicado a un objeto, grupo o capa. Las siguientes son las opciones que encuentra en este panel:
    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-down")
          p.mb-0 #[b Figura 5.] Panel Apariencia
        .row.align-items-center
          .col-lg-auto.mb-4.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/tema4/img3.png', alt='Imagen que presenta la estructura del panel apariencia con cada una de sus opciones.', style="width: 450px").m-auto
          .col-lg(data-aos="fade-left")
            .row.mb-3
              .col-12
                .p-3.bg-c11
                  .row.align-items-center
                    .col-auto.pe-0
                      figure
                        img(src='@/assets/curso/tema4/img2.svg', alt='', style="width: 25px")
                    .col
                      p.mb-0 Trazado con trazo, relleno y efecto de sombra paralela.
            .row.mb-3
              .col-12
                .p-3.bg-c11
                  .row.align-items-center
                    .col-auto.pe-0
                      figure
                        img(src='@/assets/curso/tema4/img3.svg', alt='', style="width: 25px")
                    .col
                      p.mb-0 Trazado con efecto.
            .row.mb-3
              .col-12
                .p-3.bg-c11
                  .row.align-items-center
                    .col-auto.pe-0
                      figure
                        img(src='@/assets/curso/tema4/img4.svg', alt='', style="width: 25px")
                    .col
                      p.mb-0 Botón Añadir trazo nuevo.
            .row.mb-3
              .col-12
                .p-3.bg-c11
                  .row.align-items-center
                    .col-auto.pe-0
                      figure
                        img(src='@/assets/curso/tema4/img5.svg', alt='', style="width: 25px")
                    .col
                      p.mb-0 Botón de añadir nuevo relleno a objeto.
            .row.mb-3
              .col-12
                .p-3.bg-c11
                  .row.align-items-center
                    .col-auto.pe-0
                      figure
                        img(src='@/assets/curso/tema4/img6.svg', alt='', style="width: 25px")
                    .col
                      p.mb-0 Botón Añadir relleno nuevo.
            .row.mb-3
              .col-12
                .p-3.bg-c11
                  .row.align-items-center
                    .col-auto.pe-0
                      figure
                        img(src='@/assets/curso/tema4/img7.svg', alt='', style="width: 25px")
                    .col
                      p.mb-0 Botón Borrar apariencia.
            .row
              .col-12
                .p-3.bg-c11
                  .row.align-items-center
                    .col-auto.pe-0
                      figure
                        img(src='@/assets/curso/tema4/img8.svg', alt='', style="width: 25px")
                    .col
                      p.mb-0 Botón Duplicar elemento seleccionado.
    Separador
    #t_4_1
    .titulo-segundo.color-acento-contenido
      h2 4.1 Grupo de efectos vectoriales
    p.mb-5(data-aos="fade-right") A continuación, se describen los diferentes paneles que se encuentran dentro de este grupo (Adobe, 2024).
    .row.mb-5
      .col-auto.bg-c4(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema3/img12.svg', alt='', style='width: 50px')
          .col
            h3.mb-0 Panel Herramienta 3D y Materiales
    .row.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema4/img4.png', alt='', style="width: 400px").m-auto
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-down")
        p.mb-0 Es una poderosa función que permite a los diseñadores crear efectos tridimensionales en sus ilustraciones vectoriales, añadiendo profundidad, realismo y dinamismo a sus proyectos. Este conjunto de herramientas y opciones proporciona control sobre la forma, los materiales, y la iluminación de los objetos 3D, ofreciendo una gran flexibilidad para explorar y experimentar con gráficos tridimensionales directamente en Illustrator.
      .col-lg-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema4/img5.png', alt='', style="width: 400px").m-auto
    .row.mb-5
      .col-auto.bg-c12(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema4/img10.svg', alt='', style='width: 20px')
          .col
            h3.mb-0 a. Pestaña Objeto
    .row.mb-5
      .col-12
        .p-4.bg-c13
          .row.justify-content-center
            .col-lg-10
              .titulo-sexto.color-acento-contenido(data-aos="fade-down")
                p.mb-0 #[b Figura 6.] Pestaña Objeto
              .row.align-items-center
                .col-lg-auto.mb-4.mb-lg-0(data-aos="fade-right")
                  figure
                    img(src='@/assets/curso/tema4/img6.png', alt='Imagen que presenta la estructura de la pestaña objeto con cada una de sus opciones.', style="width: 450px").m-auto
                .col-lg(data-aos="fade-left")
                  .row.mb-3
                    .col-12
                      .p-3.bg-c11
                        .row.align-items-center
                          .col-auto.pe-0
                            figure
                              img(src='@/assets/curso/tema4/img2.svg', alt='', style="width: 25px")
                          .col
                            p.mb-0 #[b Inflar:] infla el objeto plano.
                  .row.mb-3
                    .col-12
                      .p-3.bg-c11
                        .row.align-items-center
                          .col-auto.pe-0
                            figure
                              img(src='@/assets/curso/tema4/img3.svg', alt='', style="width: 25px")
                          .col
                            p.mb-0 #[b Profundidad:] establece la profundidad del objeto de 0 a 2000.
                  .row.mb-3
                    .col-12
                      .p-3.bg-c11
                        .row.align-items-center
                          .col-auto.pe-0
                            figure
                              img(src='@/assets/curso/tema4/img4.svg', alt='', style="width: 25px")
                          .col
                            p.mb-0 #[b Torcer:] tuerce el objeto hasta 360°.
                  .row.mb-3
                    .col-12
                      .p-3.bg-c11
                        .row.align-items-center
                          .col-auto.pe-0
                            figure
                              img(src='@/assets/curso/tema4/img5.svg', alt='', style="width: 25px")
                          .col
                            p.mb-0 #[b Estrechar:] estrecha el objeto del 100 % hasta el 1 %.
                  .row.mb-3
                    .col-12
                      .p-3.bg-c11
                        .row.align-items-center
                          .col-auto.pe-0
                            figure
                              img(src='@/assets/curso/tema4/img6.svg', alt='', style="width: 25px")
                          .col
                            p.mb-0 #[b Extremo:] especifica si el objeto parece sólido o hueco.
                  .row.mb-3
                    .col-12
                      .p-3.bg-c11
                        .row.align-items-center
                          .col-auto.pe-0
                            figure
                              img(src='@/assets/curso/tema4/img7.svg', alt='', style="width: 25px")
                          .col
                            p.mb-0 #[b Bisel:] aplica un borde biselado a lo largo de la profundidad del objeto.
                  .row.mb-3
                    .col-12
                      .p-3.bg-c11
                        .row.align-items-center
                          .col-auto.pe-0
                            figure
                              img(src='@/assets/curso/tema4/img8.svg', alt='', style="width: 25px")
                          .col
                            p.mb-0 #[b Ajustes preestablecidos:] aplica ajustes preestablecidos de rotación basados en dirección, eje e isometría.
                  .row.mb-3
                    .col-12
                      .p-3.bg-c11
                        .row.align-items-center
                          .col-auto.pe-0
                            figure
                              img(src='@/assets/curso/tema4/img12.svg', alt='', style="width: 25px")
                          .col
                            p.mb-0 #[b Rotación vertical:] gira el objeto verticalmente de -180° a 180°.
                  .row.mb-3
                    .col-12
                      .p-3.bg-c11
                        .row.align-items-center
                          .col-auto.pe-0
                            figure
                              img(src='@/assets/curso/tema4/img13.svg', alt='', style="width: 25px")
                          .col
                            p.mb-0 #[b Rotación horizontal:] gira el objeto horizontalmente de -180° a 180°.
                  .row.mb-3
                    .col-12
                      .p-3.bg-c11
                        .row.align-items-center
                          .col-auto.pe-0
                            figure
                              img(src='@/assets/curso/tema4/img14.svg', alt='', style="width: 25px")
                          .col
                            p.mb-0 #[b Rotación circular:] gira el objeto en círculo de -180° a 180°.
                  .row
                    .col-12
                      .p-3.bg-c11
                        .row.align-items-center
                          .col-auto.pe-0
                            figure
                              img(src='@/assets/curso/tema4/img15.svg', alt='', style="width: 25px")
                          .col
                            p.mb-0 #[b Perspectiva:] cambia la perspectiva del objeto entre 0° y 160°.
    .row.mb-5
      .col-auto.bg-c12(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema4/img10.svg', alt='', style='width: 20px')
          .col
            h3.mb-0 b. Pestaña Materiales
    .row.mb-5
      .col-12
        .p-4.bg-c14
          .row.justify-content-center
            .col-lg-10
              .titulo-sexto.color-acento-contenido(data-aos="fade-down")
                p.mb-0 #[b Figura 7.] Pestaña Materiales
              .row.align-items-center
                .col-lg-auto.mb-4.mb-lg-0(data-aos="fade-right")
                  figure
                    img(src='@/assets/curso/tema4/img7.png', alt='Imagen que presenta la estructura de la pestaña materiales con cada una de sus opciones.', style="width: 450px").m-auto
                .col-lg(data-aos="fade-left")
                  .row.mb-3
                    .col-12
                      .p-3.bg-c10
                        .row.align-items-center
                          .col-auto.pe-0
                            figure
                              img(src='@/assets/curso/tema4/img2.svg', alt='', style="width: 25px")
                          .col
                            p.mb-0 #[b Materiales de base:] aplica material de ajustes preestablecidos predeterminado.
                  .row.mb-3
                    .col-12
                      .p-3.bg-c10
                        .row.align-items-center
                          .col-auto.pe-0
                            figure
                              img(src='@/assets/curso/tema4/img3.svg', alt='', style="width: 25px")
                          .col
                            p.mb-0 #[b Materiales de Adobe Substance:] le permite aplicar algunos de los materiales de Adobe Substance.
                  .row.mb-3
                    .col-12
                      .p-3.bg-c10
                        .row.align-items-center
                          .col-auto.pe-0
                            figure
                              img(src='@/assets/curso/tema4/img4.svg', alt='', style="width: 25px")
                          .col
                            p.mb-0 #[b Recursos de Substance 3D:] añade materiales de los recursos de Adobe Substance.
                  .row.mb-3
                    .col-12
                      .p-3.bg-c10
                        .row.align-items-center
                          .col-auto.pe-0
                            figure
                              img(src='@/assets/curso/tema4/img5.svg', alt='', style="width: 25px")
                          .col
                            p.mb-0 #[b Recursos de la comunidad de Substance:] añade materiales de la comunidad de Adobe Substance.
                  .row.mb-3
                    .col-12
                      .p-3.bg-c10
                        .row.align-items-center
                          .col-auto.pe-0
                            figure
                              img(src='@/assets/curso/tema4/img6.svg', alt='', style="width: 25px")
                          .col
                            p.mb-0 #[b Añadir nuevos materiales y gráficos:] le permite añadir materiales nuevos al panel y añadir ilustraciones en forma de gráficos.
                  .row
                    .col-12
                      .p-3.bg-c10
                        .row.align-items-center
                          .col-auto.pe-0
                            figure
                              img(src='@/assets/curso/tema4/img7.svg', alt='', style="width: 25px")
                          .col
                            p.mb-0 #[b Propiedades del material:] aplica propiedades metálicas y de rugosidad de 0 a 1 para materiales básicos. Las propiedades varían para cada uno de los materiales de Adobe Substance.
    .row.mb-5
      .col-auto.bg-c12(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema4/img10.svg', alt='', style='width: 20px')
          .col
            h3.mb-0 c. Pestaña Iluminación
    .row.mb-5
      .col-12
        .p-4.bg-c6
          .row.justify-content-center
            .col-lg-10
              .titulo-sexto.color-acento-contenido(data-aos="fade-down")
                p.mb-0 #[b Figura 8.] Pestaña Iluminación
              .row.align-items-center
                .col-lg-auto.mb-4.mb-lg-0(data-aos="fade-right")
                  figure
                    img(src='@/assets/curso/tema4/img8.png', alt='Imagen que presenta la estructura de la pestaña iluminación con cada una de sus opciones.', style="width: 450px").m-auto
                .col-lg(data-aos="fade-left")
                  .row.mb-3
                    .col-12
                      .p-3.bg-c15
                        .row.align-items-center
                          .col-auto.pe-0
                            figure
                              img(src='@/assets/curso/tema4/img2.svg', alt='', style="width: 25px")
                          .col
                            p.mb-0 #[b Ajustes preestablecidos:] aplica efectos de iluminación preconfigurados como Estándar, Difuso, Arriba izquierda o Derecha, rápidamente a su ilustración.
                  .row.mb-3
                    .col-12
                      .p-3.bg-c15
                        .row.align-items-center
                          .col-auto.pe-0
                            figure
                              img(src='@/assets/curso/tema4/img3.svg', alt='', style="width: 25px")
                          .col
                            p.mb-0 #[b #[i Widget] de iluminación:] le permite arrastrar fuentes de luz para ajustar sus ángulos de iluminación.
                  .row.mb-3
                    .col-12
                      .p-3.bg-c15
                        .row.align-items-center
                          .col-auto.pe-0
                            figure
                              img(src='@/assets/curso/tema4/img4.svg', alt='', style="width: 25px")
                          .col
                            p.mb-0 #[b Fuente de luz:] varias fuentes de luz iluminan mejor el objeto 3D.
                  .row.mb-3
                    .col-12
                      .p-3.bg-c15
                        .row.align-items-center
                          .col-auto.pe-0
                            figure
                              img(src='@/assets/curso/tema4/img5.svg', alt='', style="width: 25px")
                          .col
                            p.mb-0 #[b Botón Mover luz seleccionada delante o detrás de un objeto:] mueve la luz seleccionada a la parte posterior del objeto cuando está al frente y viceversa.
                  .row.mb-3
                    .col-12
                      .p-3.bg-c15
                        .row.align-items-center
                          .col-auto.pe-0
                            figure
                              img(src='@/assets/curso/tema4/img6.svg', alt='', style="width: 25px")
                          .col
                            p.mb-0 #[b Intensidad:] cambia el brillo de la luz seleccionada de 0 % a 100 %.
                  .row.mb-3
                    .col-12
                      .p-3.bg-c15
                        .row.align-items-center
                          .col-auto.pe-0
                            figure
                              img(src='@/assets/curso/tema4/img7.svg', alt='', style="width: 25px")
                          .col
                            p.mb-0 #[b Rotación:] gira el foco de luz alrededor del objeto con un valor de -180° a 180°.
                  .row.mb-3
                    .col-12
                      .p-3.bg-c15
                        .row.align-items-center
                          .col-auto.pe-0
                            figure
                              img(src='@/assets/curso/tema4/img8.svg', alt='', style="width: 25px")
                          .col
                            p.mb-0 #[b Altura:] acerca la luz al objeto si está más abajo y provoca una sombra corta y, a la inversa, de 0° a 90°.
                  .row.mb-3
                    .col-12
                      .p-3.bg-c15
                        .row.align-items-center
                          .col-auto.pe-0
                            figure
                              img(src='@/assets/curso/tema4/img12.svg', alt='', style="width: 25px")
                          .col
                            p.mb-0 #[b Suavidad:] determina cómo se propaga la luz. Anula el ajuste preestablecido difuso con un valor de 0 % a 100 %.
                  .row.mb-3
                    .col-12
                      .p-3.bg-c15
                        .row.align-items-center
                          .col-auto.pe-0
                            figure
                              img(src='@/assets/curso/tema4/img13.svg', alt='', style="width: 25px")
                          .col
                            p.mb-0 #[b Intensidad de la luz ambiente:] controla la intensidad de la iluminación global, de 0 % a 200 %.
                  .row.mb-3
                    .col-12
                      .p-3.bg-c15
                        .row.align-items-center
                          .col-auto.pe-0
                            figure
                              img(src='@/assets/curso/tema4/img14.svg', alt='', style="width: 25px")
                          .col
                            p.mb-0 #[b Sombras:] aplica sombras a su ilustración cuando el botón de alternancia está activado.
                  .row.mb-3
                    .col-12
                      .p-3.bg-c15
                        .row.align-items-center
                          .col-auto.pe-0
                            figure
                              img(src='@/assets/curso/tema4/img15.svg', alt='', style="width: 25px")
                          .col
                            p.mb-0 #[b Posición:] aplica sombras detrás del objeto o delante del objeto.
                  .row.mb-3
                    .col-12
                      .p-3.bg-c15
                        .row.align-items-center
                          .col-auto.pe-0
                            figure
                              img(src='@/assets/curso/tema4/img16.svg', alt='', style="width: 25px")
                          .col
                            p.mb-0 #[b Distancia de objeto:] ajusta la distancia de la sombra al objeto con un valor de 0 % a 100 %.
                  .row
                    .col-12
                      .p-3.bg-c15
                        .row.align-items-center
                          .col-auto.pe-0
                            figure
                              img(src='@/assets/curso/tema4/img17.svg', alt='', style="width: 25px")
                          .col
                            p.mb-0 #[b Límites de sombra:] aplica el límite de la sombra con un valor de 10 % a 400 %.
    .row.mb-5
      .col-auto.bg-c12(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema4/img10.svg', alt='', style='width: 20px')
          .col
            h3.mb-0 d. Otros
    p.mb-5(data-aos="fade-right") Otros comandos del grupo de efectos vectoriales son:
    .row.mb-5
      .col-auto.bg-c12(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema4/img10.svg', alt='', style='width: 20px')
          .col
            h3.mb-0 Buscatrazos
    .row.mb-5
      .col-12
        .p-4.bg-c1
          .row
            .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
              p Los efectos de Buscatrazos permiten generar nuevas formas a partir de objetos superpuestos. Para aplicar estos efectos, utilice el menú Efectos o el panel Buscatrazos.
              p Los efectos de Buscatrazos disponibles en el menú Efectos solo pueden aplicarse a grupos, capas y objetos de texto. Una vez aplicado el efecto, es posible seleccionar y editar los objetos originales. Además, se pueden modificar o eliminar estos efectos utilizando el panel Apariencia.
              p.mb-0 Por otro lado, los efectos de Buscatrazos accesibles desde el panel Buscatrazos pueden aplicarse a cualquier combinación de objetos, grupos y capas. La forma final se genera al hacer clic en un botón del panel Buscatrazos, tras lo cual los objetos originales ya no podrán editarse. Si el resultado incluye varios objetos, estos se agrupan automáticamente.
            .col-lg-5(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema4/img9.png', alt='', style="width: 450px").m-auto
    .row.mb-5
      .col-auto.bg-c12(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema4/img10.svg', alt='', style='width: 20px')
          .col
            h3.mb-0 Convertir en forma
    .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5(data-aos="fade-up")
      .row.m-0.align-items-center.justify-content-between
        .col-lg-8.mb-4.mb-lg-0
          .bloque-texto-a__texto.p-4.p-lg-5
            ul.lista-ul
              li.d-flex
                i.fas.fa-bezier-curve
                |
                p.mb-0 #[b Forma:] permite alternar el modo de forma entre: rectángulo, rectángulo redondeado y elipse.
              li.d-flex
                i.fas.fa-bezier-curve
                |
                p.mb-0 #[b Tamaño:] permite modificar la anchura y altura extra para el objeto dependiendo si se quiere ajustar su tamaño absoluto o relativo.
              li.d-flex
                i.fas.fa-bezier-curve
                |
                p.mb-0 #[b Radio de vértice:] establece el radio del borde para el caso de rectángulo redondeado.
        .col-lg-4
          figure
            img(src='@/assets/curso/tema4/img10.png', alt='').m-auto
    .row.mb-5
      .col-auto.bg-c12(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema4/img10.svg', alt='', style='width: 20px')
          .col
            h3.mb-0 Deformar
    .row.align-items-center.mb-5
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        p Posibilita la distorsión de los objetos como trazados, texto, mallas, fusiones e imágenes rasterizadas. Dispone de una amplia gama de estilos entre los que se pueden encontrar arco, bóveda, inflar, entre otros.
        p A continuación, se muestra el cuadro de configuraciones para el efecto:
        .row.mb-3
          .col-12
            .p-3.bg-c1
              .row.align-items-center
                .col-auto.pe-0
                  figure
                    img(src='@/assets/curso/tema4/img2.svg', alt='', style="width: 25px")
                .col
                  p.mb-0 #[b Estilo:] al presionar este botón desplegable se puede obtener la lista de estilos disponibles de deformación.
        .row.mb-3
          .col-12
            .p-3.bg-c1
              .row.align-items-center
                .col-auto.pe-0
                  figure
                    img(src='@/assets/curso/tema4/img3.svg', alt='', style="width: 25px")
                .col
                  p.mb-0 #[b Curvar:] ajusta el nivel de curvatura en la deformación del objeto. Sus valores pueden variar entre -100 % a 0 % y 0 % a 100 %.
        .row.mb-3
          .col-12
            .p-3.bg-c1
              .row.align-items-center
                .col-auto.pe-0
                  figure
                    img(src='@/assets/curso/tema4/img4.svg', alt='', style="width: 25px")
                .col
                  p.mb-0 #[b Distorsión:] permite ajustar los valores para graduar su sentido en modo horizontal o vertical. Ambos ajustes de valores pueden ir de -100 % a 0 % o 0 % a 100 %.
        .row
          .col-12
            .p-3.bg-c1
              .row.align-items-center
                .col-auto.pe-0
                  figure
                    img(src='@/assets/curso/tema4/img5.svg', alt='', style="width: 25px")
                .col
                  p.mb-0 #[b Orientación vertical u horizontal:] establece el sentido en que se deforma el objeto ya sea de modo horizontal o vertical.
      .col-lg-5(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema4/img11.png', alt='', style="width: 450px").m-auto
    .row.mb-5
      .col-auto.bg-c12(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema4/img10.svg', alt='', style='width: 20px')
          .col
            h3.mb-0 Distorsionar y transformar
    p.mb-4(data-aos="fade-right") Ayuda a reformar los objetos de manera ágil. Este efecto comprende varios modos, entre los que se tienen:
    .row.mb-3
      .col-lg-5.d-none.d-lg-block(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema4/img12.png', alt='', style="width: 500px").m-auto
      .col-lg-7(data-aos="fade-left")
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul1")
          .row(titulo="Ajustar")
            .col-12
              p.mb-0 Esta opción facilita curvar y distorsionar los segmentos de trazado hacia adentro y hacia afuera. Se puede establecer, asimismo, la distorsión vertical y horizontal por medio de una cantidad absoluta o relativa. Permite manipular los puntos de ancla, mover los puntos de control que entran en los puntos de ancla del trazado y mover los puntos de control que salen de estos.
          .row(titulo="Distorsión libre")
            .col-12
              p.mb-0 Se puede cambiar la forma de un objeto vectorial arrastrando cualquiera de sus cuatro puntos de vértice.
          .row(titulo="Emborronar")
            .col-12
              p.mb-0 Convierte los segmentos de trazado de un objeto vectorial en aspecto dentado de picos de diferentes tamaños. Permite ajustar la longitud de los trazados de modo absoluto o relativo. Igualmente, se puede ajustar la densidad de bordes dentados por pulgada (detalle) y elegir entre suaves (Suavizar) o nítidos (Vértice).
          .row(titulo="Fruncir y engordar")
            .col-12
              p.mb-0 Permite estirar los puntos de ancla de un objeto vectorial hacia afuera, mientras curva los segmentos hacia adentro (Fruncir) o estira los puntos de ancla hacia adentro, mientras curva los segmentos hacia afuera (Engordar).
    .row.mb-5
      .col-lg-7(data-aos="fade-right")
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul1")
          .row(titulo="Torcer")
            .col-12
              p.mb-0 La parte central de un objeto rota más que en los bordes.
          .row(titulo="Transformar")
            .col-12
              p.mb-0 Permite distorsionar o deformar objetos vectoriales.
          .row(titulo="Zigzag")
            .col-12
              p.mb-0 Convierte los trazados de un objeto en un zigzag de picos u ondas de tamaño uniforme.
      .col-lg-5.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema4/img13.png', alt='', style="width: 500px").m-auto
    .row.mb-5
      .col-auto.bg-c12(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema4/img10.svg', alt='', style='width: 20px')
          .col
            h3.mb-0 Estilizar
    p(data-aos="fade-right") Facilita la aplicación de estilos como: Desvanecer, Garabatear, Redondear vértices, Resplandor exterior, Resplandor interior y Sombra paralela. Entre estas opciones se pueden destacar: Redondear vértices, la cual permite redondear los vértices de los objetos y Sombra paralela la cual añade sombra a los objetos vectoriales, donde se pueden ajustar valores como Opacidad, Desenfoque y Color.
    p.mb-5(data-aos="fade-right") Conozcamos cómo se realiza la aplicación de Sombra paralela sobre un objeto vectorial:
    .row.bg-c9
      .col-12(data-aos="fade-down")
        .p-5
          .tarjeta.tarjeta--gris1.p-4
            PasosB.color-acento-contenido
              .row.justify-content-center.align-items-center(titulo="Paso")
                .col-lg-4.mb-4.mb-lg-0
                  p.mb-0 Se selecciona un objeto cualquiera.
                .col-lg-6
                  figure
                    img(src='@/assets/curso/tema4/img14.png', alt='', style="width: 500px").m-auto
              .row.justify-content-center.align-items-center(titulo="Paso")
                .col-lg-4.mb-4.mb-lg-0
                  p.mb-0 Luego, en el panel de apariencia, accione el comando #[b Efectos], luego se desplaza a la opción Estilizar y seguidamente accione el efecto #[b Sombra paralela].
                .col-lg-6
                  figure
                    img(src='@/assets/curso/tema4/img15.png', alt='', style="width: 500px").m-auto
              .row.justify-content-center.align-items-center(titulo="Paso")
                .col-lg-4.mb-4.mb-lg-0
                  p.mb-0 Luego de seleccionar el efecto de #[b Sombra paralela], aparecerá un cuadro de diálogo disponiendo de varios ajustes de configuración.
                .col-lg-6
                  figure
                    img(src='@/assets/curso/tema4/img16.png', alt='', style="width: 500px").m-auto
              .row.justify-content-center.align-items-center(titulo="Paso")
                .col-lg-4.mb-4.mb-lg-0
                  p.mb-0 Entre las opciones ajustables aparece #[b Modo], el cual permite establecer una trama por la que la sombra se va a visualizar; asimismo, se puede configurar la opacidad de la sombra, o podría decirse la transparencia por la que aparecerá; también se permite configurar los desplazamientos en el eje X o Y, de acuerdo con la ubicación deseada, también facilita manipular el desenfoque de la sombra por medio de la configuración Desenfocar, y finalmente la opción de manipular el color que se desee aplicar al efecto, y se tiene así el resultado final.
                .col-lg-6
                  figure
                    img(src='@/assets/curso/tema4/img17.png', alt='', style="width: 500px").m-auto
    Separador
    #t_4_2
    .titulo-segundo.color-acento-contenido
      h2 4.2 Grupo de efectos de rasterizado
    .row.align-items-center.mb-3
      .col-lg-2.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema4/img18.svg', alt='', style="width: 200px").m-auto
      .col-lg-10(data-aos="fade-left")
        p.mb-0 En este grupo se puede encontrar la galería de efectos por categorías tales como: Artístico, Bosquejar, Distorsionar, Estilizar, Textura y Trazos de pincel; de igual manera, se encuentran otros efectos como Desenfocar, Pixelizar y Video.
    p.mb-5(data-aos="fade-right") Se puede destacar los efectos de #[b Desenfocar], el cual tiene las opciones de:
    .row.justify-content-center
      .col-10.col-md-8.col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        .p-4.bg-c15
          figure.mb-3
            img(src='@/assets/curso/tema4/img18.png', alt='', style="width: 500px").m-auto
          p.text-center.mb-0 #[b Desenfoque gaussiano]
      .col-10.col-md-8.col-lg-4.mb-4.mb-lg-0(data-aos="fade-left")
        .p-4.bg-c15
          figure.mb-3
            img(src='@/assets/curso/tema4/img19.png', alt='', style="width: 500px").m-auto
          p.text-center.mb-0 #[b Desenfoque de radial]
      .col-10.col-md-8.col-lg-4(data-aos="fade-right")
        .p-4.bg-c15
          figure.mb-3
            img(src='@/assets/curso/tema4/img20.png', alt='', style="width: 500px").m-auto
          p.text-center.mb-0 #[b Desenfoque suavizado]

</template>

<script>
export default {
  name: 'Tema4',
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
