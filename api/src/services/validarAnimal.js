export function validar(animal){ 
    if(!animal.nome || typeof(animal.nome) !== 'string') throw new Error('Preencha todos os campos!');
    if(animal.idade === NaN || !animal.idade || animal.idade === undefined || animal.idade <= 0) throw new Error('Digite uma idade valida!');
    if(animal.porte === NaN || !animal.porte || animal.porte === 0) throw new Error('Digite um porte valido!');
    if(animal.raca === NaN || !animal.raca || animal.raca === 0) throw new Error('Digite uma raca valida!');
    if(animal.sexo === NaN || !animal.sexo || animal.sexo === 0) throw new Error('Digite um sexo valido!');
    if(animal.preferencia === NaN || !animal.preferencia || animal.preferencia === 0) throw new Error('Digite uma preferencia valida!');
    if(!animal.descricao || typeof(animal.descricao) !== 'string' || animal.descricao === undefined) throw new Error('Digite uma descrição valida!');
}