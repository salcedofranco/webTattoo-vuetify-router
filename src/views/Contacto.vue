<template>
  <v-content>
    <div class="staticHero">
      <v-img src="../assets/images/img14.jpg" height="300">
      <v-row align="end" class="lightbox white--text pa-2 fill-height">
        <v-col>
          <v-container>
            <div class="headline">Contactanos</div>
          </v-container>
        </v-col>
      </v-row>
    </v-img>
    </div>
    <div class="block">
      <v-container>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Nombre" required></v-text-field>
          <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
          <v-textarea v-model="message" :rules="messageRules" label="Message" required></v-textarea>
          <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">Enviar</v-btn>
          <v-btn color="error" class="mr-4" @click="reset">Borrar</v-btn>
        </v-form>
      </v-container>
    </div>
    <div class="googlemap">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2024.482040575199!2d-64.4997189378058!3d-31.42075878190971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432985f478f5b69%3A0xb0a24f9a5366b092!2zQ8OzcmRvYmE!5e0!3m2!1ses-419!2sar!4v1604958982214!5m2!1ses-419!2sar" width="100%" height="450" ></iframe>
    </div>

  </v-content>
</template>

<script>
export default {
  name: "Contacto",
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      v => !!v || "Nombre is required",
      v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    message: "",
    messageRules: [
      v => !!v || "Message is required",
      v => (v && v.length >= 10) || "Message must be more than 10 characters"
    ],
  }),

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    },
    reset() {
      this.$refs.form.reset();
    }
  }
};
</script>