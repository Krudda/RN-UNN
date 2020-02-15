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
        roundButton: {
                buttonSize: 70,
                anim: 300
        },
        actionButton: {
                img: require('../assets/add.png')
        },
        deleteButton: {
                img: require('../assets/delete.png')
        },
        editButton: {
                img: require('../assets/edit.png')
        },

}