<template>
    <v-card
            :class="`ma-5 pa-4 primary lighten-5`"
    >
        <v-card-title>
            <h2>{{name.toUpperCase()}}</h2>
            <v-spacer></v-spacer>
            <v-switch v-model="enabled" :disabled="enabled" @change="setTheme" label="Enable"></v-switch>
        </v-card-title>
        <v-card-text>
            <h2>Colors</h2>
            <p>Use the enable switch to activate this theme. Click on any color to show it's pallette.</p>
            <v-row
                    align="center"
                    justify="center"
            >
                <v-btn
                        class="ma-1 pa-4"
                        @click='showPalette("primary")'
                        :color="theme.primary.base"
                >
                    primary
                </v-btn>
                <v-btn
                        class="ma-1 pa-4"
                        @click='showPalette("secondary")'
                        :color="theme.secondary.base"
                >
                    secondary
                </v-btn>
                <v-btn
                        class="ma-1 pa-4"
                        @click='showPalette("tertiary")'
                        :color="theme.tertiary.base"
                >
                    tertiary
                </v-btn>
                <v-btn
                        class="ma-1 pa-4"
                        @click='showPalette("accent")'
                        :color="theme.accent.base"
                >
                    accent
                </v-btn>
                <v-btn
                        class="ma-1 pa-4"
                        @click='showPalette("error")'
                        :color="theme.error.base"
                >
                    error
                </v-btn>
                <v-btn
                        class="ma-1 pa-4"
                        @click='showPalette("warning")'
                        :color="theme.warning.base"
                >
                    warning
                </v-btn>
                <v-btn
                        class="ma-1 pa-4"
                        @click='showPalette("info")'
                        :color="theme.info.base"
                >
                    info
                </v-btn>
                <v-btn
                        class="ma-1 pa-4"
                        @click='showPalette("success")'
                        :color="theme.success.base"
                >
                    success
                </v-btn>
            </v-row>

        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                    icon
                    @click='togglePalette'
                    :color="theme.primary.base"
            >
                <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
        </v-card-actions>
        <v-expand-transition>
            <div v-show="show">
                <v-list class="primary lighten-2">
                    <v-list-item
                            v-for="(color,name) in this.theme[this.palette]"
                            :key="name"
                    >
                        <v-list-item-content>
                            <v-btn :color="color">{{name}}</v-btn>
                        </v-list-item-content>
                        <v-list-item-avatar>
                            <v-icon :color="color" x-large>home</v-icon>
                        </v-list-item-avatar>
                    </v-list-item>
                </v-list>
            </div>
        </v-expand-transition>
    </v-card>
</template>

<script>
  import * as themes from '../plugins/themes'
  import {EventBus} from '../plugins/events';

  export default {
    methods: {
      /**
       *Trigger the Palette Panel
       */
      togglePalette() {
        this.show = !this.show;
      },

      /**
       * Show the Palette View
       */
      showPalette(name) {
        this.show = !(this.palette === name && this.show);
        this.palette = name;
      },

      /**
       * Enable or disable based on the theme name in the event
       */
      disableEnable(e) {
        this.enabled = e === this.name;
      },
      /**
       * Set the current light and dark themes
       * Looks up all themes by name and sets them to the current theme
       * @param e
       */
      setTheme(e) {
        if (e) {
          EventBus.$emit('update', this.name);
          this.$vuetify.theme.themes.dark = themes[this.name];
          this.$vuetify.theme.themes.light = themes[this.name];
        }
      },
    },

    /**
     * Accpets a Theme Name and the Theme Instance
     */
    props: {
      name: String,
      theme: Object,

    },

    /**
     * Set
     */
    data: () => ({
      palette: "primary",
      show: false,
      enabled: false,
    }),
    created() {
      if (this.name === 'primary') this.enabled = true;
      EventBus.$on('update', this.disableEnable)
    }
  }
</script>