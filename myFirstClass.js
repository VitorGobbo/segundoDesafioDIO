    class hero{
        constructor(name,age,type,){
            this.name = name ;
            this.age = age ; 
            this.type = type ; 
        }
        attacking(){
            let attack ;
            switch(this.type){
                case "Mago":
                    attack = "Usou magia";
                    break;
                case "Guerreiro" :
                    attack = "Usou espada";
                    break;
                case "Elfo":
                    attack = "Usou arco encantado";
                    break;
                case "Ninja":
                    attack = "Usou shuriken";
                default : "Usou ataques desconhecidos";
            }
            const message = `O Herói ${this.type} fez um ataque usando ${attack}`;
            console.log(message);
        }
    }
    const heroOne = new hero("Vitor",23,"Elfo");
    heroOne.attacking();