import {createVuetify} from 'vuetify'

import 'vuetify/styles'
import colors from 'vuetify/lib/util/colors'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import {aliases, mdi} from 'vuetify/iconsets/mdi'


export default createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
        },
    },
    theme: {
        themes: {
            light: {
                dark: false,
                colors: {
                    primary: colors.blue.lighten1, // #E53935
                    secondary: colors.blue.lighten4, // #FFCDD2

                }
            },
        },
    },
})
