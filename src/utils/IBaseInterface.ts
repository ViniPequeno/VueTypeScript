import { IModel } from './IModel'
import { KRetorno } from './KRetorno';

export default interface IBaseInterface<T extends IModel> {

    getAll<T>(): Promise<KRetorno>;
}