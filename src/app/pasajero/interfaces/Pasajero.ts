export interface Pasajero {
    idpas:     number;
    idtpodoc:  number;
    nrodoc:    string;
    names:     string;
    lastname1: string;
    lastname2: string;
    email:     string;
    phone:     string;
    active:    string;
    docType:   DocType;
}

export interface DocType {
    idTypeDoc: number;
    desc:      string;
}
