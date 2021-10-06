import * as C from './styles';

export const AddArea = () => {
    return (
        <C.Container>
            <div className="image">➕</div>
            <input 
                type="text"
                placeholder="Adicione uma tarefa"
            />
        </C.Container>
    );
}