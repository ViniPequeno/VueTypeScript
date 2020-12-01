import { KRetorno } from "@utils/KRetorno"

export class Validation {

    /**
     * Valid Schema
     */
    public ValidSchema(schema: ValidationSchema[], json: any): KRetorno {
        let retorno = new KRetorno();

        retorno.sucesso = true;
        retorno.mensagem = "";

        for (let i = 0; i < schema.length; i++) {
            let validador = schema[i]
            let value = json[validador.name];
            if (value) {
                if (typeof value !== validador.type) {
                    retorno.sucesso = false;
                    retorno.mensagem = "Tipo do campo " + validador.name + " inváilido!";
                    break;
                }

                if (validador.required && !value) {
                    retorno.sucesso = false;
                    retorno.mensagem = "Campo " + validador.name + " é obrigatório!";
                    break;
                }

                if (validador.type == "string" && validador.maxLength > 0 && (value + '').length > validador.maxLength) {
                    retorno.sucesso = false;
                    retorno.mensagem = "Campo " + validador.name + " ultrapassou o tamanho máximo!";
                    break;
                }
                if (validador.valid) {
                    let result = validador.valid(value);
                    if (!result.sucesso) {
                        retorno.sucesso = false;
                        retorno.mensagem = result.mensagem;
                        break;
                    }
                }
            } else {

                if (validador.required) {
                    retorno.sucesso = false;
                    retorno.mensagem = "Campo " + validador.name + " é obrigatório!";
                    break;
                }
            }
        }

        return retorno;
    }
}

export class ValidationSchema {
    name: string
    type: string
    required: boolean
    maxLength: number
    valid?: (item: any) => (KRetorno)

    constructor(name: string, type: string = "string", required: boolean = false, maxLength: number = 0, valid?: (item: any) => KRetorno) {
        this.name = name
        this.type = type
        this.required = required
        this.maxLength = maxLength
        this.valid = valid
    }
}