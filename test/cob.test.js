const Cobertura = require('../lib/cob')
const cobertura = new Cobertura();
describe('Cobertura',()=>{
    test('teste sem letra', ()=>{
        expect(cobertura.verifIntegridade([1,2,3])).toBe('Não tem letra')
    })

    test('teste com letra', ()=>{
        expect(()=>{
            cobertura.verifIntegridade([1,2,6,3,'a'])
        }).toThrow('Tem letra')
    })
})