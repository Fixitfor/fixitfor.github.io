<template>
    <v-app :dark="goDark">
        <v-app-bar
                app
                color="primary"
                dark
        >
            <div class="d-flex align-center">
                <!--<v-img-->
                        <!--alt="Fixit Icon"-->
                        <!--class="shrink mr-2 primary lighten-2"-->
                        <!--contain-->
                        <!--src="/img/logo.svg"-->
                        <!--transition="scale-transition"-->
                        <!--width="40"-->
                <!--/>-->
                <v-img
                        v-show='theme === "primary"'
                        alt="Fixit Name"
                        class="shrink mt-1 hidden-sm-and-down lighten-2"
                        contain
                        min-width="100"
                        src="/img/logo_inverted.svg"
                        width="100"
                />
                <v-img
                        v-show='theme === "secondary"'
                        alt="Fixit Name"
                        class="shrink mt-1 hidden-sm-and-down lighten-2"
                        contain
                        min-width="100"
                        src="/img/logo.svg"
                        width="100"
                />
            </div>

            <v-spacer></v-spacer>
            <!--<v-btn-toggle @change="changeThemeState" v-model="current_theme">-->
            <!--<v-btn class="primary">Primary-->
            <!--</v-btn>-->

            <!--<v-btn class="secondary">Secondary-->
            <!--</v-btn>-->

            <!--<v-btn dark class="primary">Dark</v-btn>-->
            <!--<v-btn class="primary">Light</v-btn>-->
            <!--</v-btn-toggle>-->
            <v-switch
                    inset
                    v-model="goDark"
                    @change="changeState"
                    :label="`Dark Theme`"
                    color="inherit"
            ></v-switch>
        </v-app-bar>

        <v-main>

            <v-card tile>
                <v-card-title>
                    <h1>Themes</h1>
                </v-card-title>
                <v-card-text>
                    <v-row
                            v-for="(theme, name) in themes"
                            :key="name"
                            align="center"
                            justify="center"
                    >
                    <ThemeCard
                               class="ma-5, pa-3"
                               :name="name"
                               :theme="theme" />
                    </v-row>
                </v-card-text>
            </v-card>
        </v-main>

    </v-app>
</template>

<script>
  import ThemeCard from './components/ThemeCard';
  import { EventBus } from './plugins/events';
  //  import ThemeColors from './components/ThemeColors';
  //import Pallette from './components/Pallette';
  import * as themes from './plugins/themes'

  export default {
    name: 'App',
    methods: {
      switchedTheme(e) {
        console.log('theme changed')
        this.theme = e;
      },
      changeState() {
//        console.log('chaning state')
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      },
      changeThemeState() {
//      let theme = primary;
//
//      switch(this.current_theme) {
//        case 1:
//          console.log('Secondary')
//          theme = secondary
//          break;
//        case 2:
//          console.log('Dark')
//          theme = dark
//          break;
//        case 3:
//          console.log('Light')
//          theme = light
//          break;
//      }
//
//      if(this.$vuetify.theme.dark){
//        this.$vuetify.theme.themes.dark = theme
//      } else {
//        this.$vuetify.theme.themes.light = theme
//      }
      }
    },
    data() {
      return {
        theme: 'primary',
        themes,
        goDark: this.$vuetify.theme.dark,
      }
    },
    components: {
//    ThemeColors,Pallette,
      ThemeCard

    },
    created(){
      EventBus.$on('update', this.switchedTheme)
    }
  };
</script>
