export class Usuario{
    constructor(
        public cedula?: string,
        public nombre?: string,
        public apellido?: string,
        public correo?: string,
        public contrasena?: string
    ) { }
}