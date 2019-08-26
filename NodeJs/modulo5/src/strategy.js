//aplicando conceitos de orientação a objeto
class NoImplementedException extends Error{
    constructor(){
        super("Not Implemented Exception")
    }
}

class ICrud{
    create(item){
        throw new NoImplementedException()
    }

    read(query){
        throw new NoImplementedException()
    }

    update(id, item){
        throw new NoImplementedException()
    }

    delete(id){
        throw new NoImplementedException()
    }
}