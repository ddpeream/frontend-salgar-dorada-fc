export interface FormState {
  nombre: string;
  apellido: string;
  email: string;
  telefono: number | null;
  celular: number | null;
  documento_identidad: {
    tipo: string;
    No: number | null;
  };
  fecha_nacimiento: Date;
  direccion: string;
}