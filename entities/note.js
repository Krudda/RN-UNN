export default class  Note {
        header;
        content;
        photo;
        date;
        constructor(param) {
                this.header = param.header;
                this.content = param.content;
                this.photo = param.photo;
                this.date = new Date(); 
        };

        edit(catigorias, value) {
                this[catigorias] = value;
        }
}