<template>
  <div class="page-wrapper">
    <v-window
      show-arrows
      class="content-window-slider">
      <template v-slot:prev="{ on, attrs }">
        <v-btn
          dark
          text
          fab
          absolute
          height="40"
          width="40"
          v-bind="attrs"
          v-on="on"
          class="custom-prev-btn">
          <v-icon>fa-chevron-left</v-icon>
        </v-btn>
      </template>
      <template v-slot:next="{ on, attrs }">
        <v-btn
          dark
          text
          fab
          absolute
          height="39"
          width="40"
          v-bind="attrs"
          v-on="on"
          class="custom-next-btn">
          <v-icon>fa-chevron-right</v-icon>
        </v-btn>
      </template>
      <v-window-item>
        <first-slide/>
      </v-window-item>
      <v-window-item>
        <second-slide/>
      </v-window-item>
      <v-window-item>
        <third-slide/>
      </v-window-item>
      <v-window-item>
        <fourth-slide/>
      </v-window-item>
      <v-window-item>
        <fifth-slide/>
      </v-window-item>
      <v-window-item>
        <sixth-slide/>
      </v-window-item>
      <v-window-item>
        <seventh-slide/>
      </v-window-item>
      <v-window-item>
        <eighth-slide/>
      </v-window-item>
      <v-window-item>
        <ninth-slide/>
      </v-window-item>
      <v-window-item>
        <tenth-slide/>
      </v-window-item>
      <v-window-item>
        <eleventh-slide/>
      </v-window-item>
    </v-window>
  </div>
</template>

<script>
import FirstSlide from './slides/FirstSlide.vue';
import SecondSlide from './slides/SecondSlide.vue';
import ThirdSlide from './slides/ThirdSlide.vue';
import FourthSlide from './slides/FourthSlide.vue';
import FifthSlide from './slides/FifthSlide.vue';
import SixthSlide from './slides/SixthSlide.vue';
import SeventhSlide from './slides/SeventhSlide.vue';
import EighthSlide from './slides/EighthSlide.vue';
import NinthSlide from './slides/NinthSlide.vue';
import TenthSlide from './slides/TenthSlide.vue';
import EleventhSlide from './slides/EleventhSlide.vue';

export default {
  name: 'PasportsCard',
  components: {
    FirstSlide,
    SecondSlide,
    ThirdSlide,
    FourthSlide,
    FifthSlide,
    SixthSlide,
    SeventhSlide,
    EighthSlide,
    NinthSlide,
    TenthSlide,
    EleventhSlide
  },
};
</script>