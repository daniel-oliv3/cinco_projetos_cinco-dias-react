import { Item } from '../types/Item';

/*Função que retorna o mes atual*/
export const getCurrentMonth = () => {
    let now = new Date();
    return `${now.getFullYear()}-${now.getMonth()+1}`
}

/*Função que filtra a lista pelo mes*/
export const filterListByMonth = (list: Item[], date: string): Item[] => {
    let newList: Item[] = [];
    let [year, month] = date.split('-');

    for(let i in list){
        if(
            list[i].date.getFullYear() === parseInt(year) &&
            (list[i].date.getMonth() + 1) === parseInt(month)
        ) {
            newList.push(list[i]);
        }
    }

    return newList;
}

/*Função para formatar a data*/
export const formatDate = (date: Date): string => {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    return `${addZeroToDate(day)}/${addZeroToDate(month)}/${year}`;
}

/*Função para adicionar um 0 a esquerda, padrao BR*/
const addZeroToDate = (n: number): string => n < 10 ? `0${n}` : `${n}`;