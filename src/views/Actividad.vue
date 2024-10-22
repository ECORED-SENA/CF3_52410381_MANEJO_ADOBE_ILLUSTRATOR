<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    #Actividad                
      <Actividad :cuestionario="cuestionario" />

</template>

<script>
import Actividad from '@/components/actividad/Actividad'
export default {
  name: 'ActividadDidactica',
  components: { Actividad },
  data: () => ({
    cuestionario: {
      tema: 'Nombre del componente formativo',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Evaluar el conocimiento sobre el uso y las funciones de los paneles de Adobe Illustrator.',
      barajarPreguntas: false,
      preguntas: [
        {
          id: 1,
          texto: '¿Cuál es la función del panel de color en Adobe Illustrator?',
          imagen: require('@/assets/curso/img1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aplicar degradados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Muestra y ajusta los valores de color.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Añadir efectos 3D.', esCorrecta: false },
            { id: 'd', texto: 'Organizar las capas.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué permite ajustar el panel de degradado en Adobe Illustrator?',
          imagen: require('@/assets/curso/img2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'La orientación del texto.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Las transiciones de color en un objeto.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La transparencia de un objeto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El tipo de trazo en una línea.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál es la opción que elimina el color del trazo o relleno en el panel de color?',
          imagen: require('@/assets/curso/img3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Color de relleno.', esCorrecta: false },
            { id: 'b', texto: 'Parada de color.', esCorrecta: false },
            { id: 'c', texto: 'Menú del panel.', esCorrecta: false },
            { id: 'd', texto: 'Cuadro Ninguno.', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué acción realiza la herramienta "Dividir" del panel Buscatrazos?',
          imagen: require('@/assets/curso/img4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Separa segmentos de la ilustración para manipularlos por separado.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Fusiona todos los objetos en uno solo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Crea intersecciones entre objetos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Elimina los objetos de fondo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué opción del panel Apariencia permite añadir un nuevo relleno a un objeto?',
          imagen: require('@/assets/curso/img1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Botón de añadir nuevo efecto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Botón de añadir nuevo relleno.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Botón de añadir nueva capa.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Botón de eliminar trazo.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué tipo de efectos contiene el grupo de efectos vectoriales en el panel Apariencia?',
          imagen: require('@/assets/curso/img2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Efectos de rasterizado.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Efectos aplicables solo a objetos vectoriales.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Efectos de desenfoque.', esCorrecta: false },
            { id: 'd', texto: 'Efectos 3D únicamente.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cuál de las siguientes opciones pertenece al panel de texto en Adobe Illustrator?',
          imagen: require('@/assets/curso/img3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Herramienta de degradado.', esCorrecta: false },
            { id: 'b', texto: 'Herramienta de buscatrazos.', esCorrecta: true },
            { id: 'c', texto: 'Panel Carácter.', esCorrecta: true },
            { id: 'd', texto: 'Panel Apariencia.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué comando del panel Buscatrazos permite fusionar los objetos superpuestos?',
          imagen: require('@/assets/curso/img4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Añadir.', esCorrecta: true },
            { id: 'b', texto: 'Excluir.', esCorrecta: false },
            { id: 'c', texto: 'Formar intersección.', esCorrecta: false },
            { id: 'd', texto: 'Cortar.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué ajusta el valor hexadecimal mostrado en el panel de color?',
          imagen: require('@/assets/curso/img1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El color final según el modelo de color utilizado.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La transparencia del objeto.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'La rotación del objeto.', esCorrecta: false },
            {
              id: 'd',
              texto: 'La profundidad del objeto 3D.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Cuál es la función principal del manejo de capas en Adobe Illustrator?',
          imagen: require('@/assets/curso/img2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Aplicar degradados.', esCorrecta: true },
            {
              id: 'b',
              texto:
                'Organizar y gestionar los elementos del proyecto de diseño.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Convertir objetos en formas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Añadir efectos de rasterizado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  computed: {},
  methods: {},
}
</script>
