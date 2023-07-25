export class Model {
    user;
    items;

    constructor() {
        this.user = "Ahmet";
        this.items = [
            new TodoItem("Spor",true),
            new TodoItem("Kahvaltı",false),
            new TodoItem("Kitap Okuma",false),
            new TodoItem("Namaz",true),
            new TodoItem("Sinema",false),
    
        ];
    }
}


export class TodoItem{
    description;
    action;

    constructor(_description:any, _action:any){
        this.description=_description;
        this.action=_action;
    }
}