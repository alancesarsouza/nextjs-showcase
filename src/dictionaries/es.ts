import { DictionaryShape } from './types';

const es: DictionaryShape = {
  cta: {
    add: 'Agregar',
    remove: 'Eliminar',
    send: 'Enviar',
  },
  error: {
    email: 'Correo electrónico inválido',
    max: 'Mínimo de {count} caracteres requeridos',
    min: 'Máximo de {count} caracteres permitidos',
    notEquals: 'Las contraseñas deben ser iguales',
    required: 'Este campo es obligatorio',
  },
  helper: {},
  labels: {
    birthDate: 'Fecha de Nacimiento',
    email: 'Correo Electrónico',
    firstName: 'Nombre',
    lastName: 'Apellido',
    number: 'Número',
    password: 'Contraseña',
    passwordConfirmation: 'Confirmar Contraseña',
    postalCode: 'Código Postal',
    street: 'Calle',
  },
  text: {
    address: 'Dirección',
    dependents: 'Dependientes',
  },
};
export default es;
