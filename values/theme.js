import { HEIGHT, heightStatusBar} from "./dimn";

export default {
        generalScreen: {
                // paddingTop: heightStatusBar,
                paddingTop: heightStatusBar,
                // paddingTop: 33,
                background: require('../assets/ficus.jpg'),
        },
        note: {
                height: HEIGHT/4,
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
        },
        actionButton: {
                img: require('../assets/add.png')
        }
}