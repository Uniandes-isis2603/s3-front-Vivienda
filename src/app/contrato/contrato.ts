import {Vivienda} from '../vivienda/vivienda';
import {Estudiante} from '../estudiante/estudiante';

export class Contrato {

  /**
   * Identificador del contrato
   */
  id: number;

  /**
   * Fecha de inicio del contrato
   */
  fechaInicio: string;

  /**
   * Fecha final del contrato
   */
  fechaFin: string;

  /**
   * Metodo de pago del cliente
   */
  metodoPago: number;

  /**
   * Vivienda asociada
   */
  vivienda: Vivienda;


  /**
   * Estudiante asociado al contrato
   */
  estudiante: Estudiante;
}
