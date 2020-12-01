import { IModel } from "@utils/IModel"
import axios from "@plugins/axios"
import { Validation } from "../validation/validation"
import { KRetorno } from './KRetorno';
// import { Storage, StorageEnum } from '@/configuration/storage';

export class BaseClient {

    instanceClass: typeof IModel;

    constructor(InstanceClass: typeof IModel) {
        this.instanceClass = InstanceClass;
    }

    async getAll(path: string = ""): Promise<KRetorno> {
        let result = new KRetorno();
        await axios.get(this.instanceClass.url + path).then((response: any) => {
            result.sucesso = true;
            result.entity = response.data;
        }).catch((e: any) => {
            result.sucesso = false;
            result.mensagem = e.toString();
        })
        return result;
    }

    async postPath(entity: IModel, path: string = "") {
        let result = new KRetorno();
        let resultValid = new Validation().ValidSchema(this.instanceClass.getSchema(), entity);
        if (resultValid.sucesso) {
            axios.post(this.instanceClass.url + path, entity).then((response: any) => {
                result = response.data
            }).catch((e: any) => {

                result.sucesso = false;
                result.mensagem = e.toString();
            })
        } else {
            result = resultValid
        }
        return result;
    }

    async putPath(entity: IModel, path: string = "") {

        let result = new KRetorno();
        let resultValid = new Validation().ValidSchema(this.instanceClass.getSchema(), entity);
        if (resultValid.sucesso) {
            axios.put(this.instanceClass.url + path, entity).then((response: any) => {
                result = response.data
            }).catch((e: any) => {

                result.sucesso = false;
                result.mensagem = e.toString();
            })
        } else {
            result = resultValid
        }
        return result;
    }

    async deletePath(path: string = "") {
        let result = new KRetorno();
        axios.delete(this.instanceClass.url + path).then((response: any) => {
            result = response.data
        }).catch((e: any) => {
            let result = new KRetorno();
            result.sucesso = false;
            result.mensagem = e.toString();

        })

        return result;
    }


}