const validate = require('validate.js');
const TypeVariableConstraint = require('./validate');

const Operations = {

    soma(value_1, value_2) {
        const validateValue_1 = validate({ value_1, value_2 },  TypeVariableConstraint.typeVariableConstraint);
 
        if(validateValue_1 !== undefined){
            return 'Erro! Os valores inseridos não são do tipo number';
        } 
        let soma = value_1 + value_2;
        return soma;
        
    }
}

module.exports = Operations;