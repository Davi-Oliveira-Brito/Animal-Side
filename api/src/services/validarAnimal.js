export function validar(animal){ 
    if(!animal.nome || !animal.idade || !animal.raca || !animal.porte || !animal.sexo || !animal.preferencia)
        throw new Error('Preencha todos os campos!');
}