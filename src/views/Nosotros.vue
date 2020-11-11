<template>
  <v-content>
    <div class="staticHero">
      <v-img src="../assets/images/img13.jpg" height="300">
        <v-row align="end" class="lightbox white--text pa-2 fill-height">
          <v-col>
            <v-container>
              <div class="headline">Quienes Somos</div>
            </v-container>
          </v-col>
        </v-row>
      </v-img>
    </div>
    <div class="block">
      <v-container>
        <p>Nuestro equipo de trabajo complementado con nuestros procedimientos, nos permiten acompañar al cliente en todo el proceso de tatuaje, desde resolverle todas sus inquietudes, hasta la culminación de la cicatrización de su tatuaje mediante. Un trato cálido y amigable que nos permite establecer un lazo de confianza con nuestros clientes.</p>
      </v-container>
    </div>
    <div class="block">
      <v-container>
        <h2 class="text-center">Nuestro equipo</h2>
        <v-row>
          <v-col v-for="item in items" :key="item.id" class="d-flex child-flex" cols="12" sm="4">
            <v-card flat tile class="mx-auto">
              <v-img :src="item.src" aspect-ratio="1" class="grey lighten-2"></v-img>
              <v-card-text class="text--primary text-center">
                <div class="title">{{ item.name }}</div>
                <p>{{ item.title }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-content>
</template>

<script>
export default {
  name: "Nosotros",
  data() {
    return {
      items: [
        {
          id: 1,
          src: require("../assets/images/team1.jpg"),
          name: 'Facundo',
          title: 'Tatuador'
        },
        {
          id: 2,
          src: require("../assets/images/team1.jpg"),
          name: 'Facundo',
          title: 'Tatuador'
        },
        {
          id: 3,
          src: require("../assets/images/team1.jpg"),
          name: 'Facundo',
          title: 'Tatuador'
        }
      ]
    };
  }
};
</script>