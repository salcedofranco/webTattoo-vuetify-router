<template>
  <div class="block latestPostBlock">
    <v-container>
      <h2 class="text-center">Información</h2>
      <v-row>
        <v-col v-for="item in items" :key="item.id" cols="12" md="4">
          <v-card outlined class="mx-auto">
            <v-img
              class="white--text align-end"
              height="200px"
              :src="item.src"
            >
              <v-card-title>{{ item.title }}</v-card-title>
            </v-img>
            <v-card-subtitle class="pb-0">{{ item.subtitle }}</v-card-subtitle>
            <v-card-text class="text--primary">
              <div>{{ item.description }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" text>Ver Más</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "LatestPost",
  data: () => ({
    show: false,
    items: [
      {
        id: 1,
        title: "Conoce a Bernabeu",
        subtitle: "Estudio Artistico",
        description: "Bernabeu Tattoo es un estudio artístico de tatuajes y piercing fundado en 2005. Desde sus comienzos como tatuador, y desde la fecha de la apertura de el estudio, Bernabeu se ha posicionado en la provincia de Cordoba como un referente gracias a la calidad artística y técnica de sus tatuajes y piercings.",
        src: require("../assets/images/img10.jpg")
      },
      {
        id: 2,
        title: "Tintas",
        subtitle: "Sobre la tinta para tatuajes",
        description: "No hay duda alguna de que la tinta es un aspecto más que fundamental en los tatuajes. Lógicamente, es la materia prima del tatuaje (no debería ni aclararlo) y su calidad determinará no solamente que el tatuaje quede bien, sino que también nos evitará problemas a futuro",
        src: require("../assets/images/img11.jpg")
      },
      {
        id: 3,
        title: "Cuidados de un tatuaje",
        subtitle: "Cremas y cuidados",
        description: "Antes de hacerte un tatuaje debes pensarlo muy bien, ya que es una decisión sumamente importante para el resto de tu vida; si bien es más que evidente que estos lucen geniales y te aportan un sentido de la identidad muy personal, un tatuaje es una pieza de arte que está impresa sobre tu piel y por lo tanto requiere de un cuidado muy particular",
        src: require("../assets/images/img12.jpg")
      }
    ]
  })
};
</script>