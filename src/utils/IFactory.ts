import IProdutosInterface from '@/data/interfaces/IProdutosInterface';
import ProdutosRepository from '@/data/repository/ProdutosRepository';
import { BaseClient } from './BaseClient';

export class IFactory {

    //Instance
    private static produtosData: IProdutosInterface;

    //Singleton
    static getProdutosData(): IProdutosInterface {
        if (!this.produtosData) {
            this.produtosData = new ProdutosRepository()
        }
        return this.produtosData
    }

}