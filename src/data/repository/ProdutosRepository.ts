import Produtos from '@/Models/Produtos'
import { BaseClient } from '@/utils/BaseClient'

export default class ProdutosRepository extends BaseClient {
    constructor() {
        super(Produtos)
    }
}