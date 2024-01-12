export const compare = (a,b,key) =>{
    if (a[key] > b[key]) return 1;
    if (a[key] < b[key]) return -1;
    return 0;
}


export const pay_detaled = (text) => {
    switch (text) {
        case "accredited":
            return "Acreditado"
    
        case "cc_rejected_call_for_authorize":
            return "Rechazado con validación para autorizar"

        case "cc_rejected_insufficient_amount":
            return "Rechazado por importe insuficiente"

        case "cc_rejected_insufficient_amount":
            return "Rechazado por importe insuficiente"

        case "cc_rejected_bad_filled_security_code":
            return "Rechazado por código de seguridad inválido"

        case "cc_rejected_bad_filled_date":
            return "Rechazado debido a un problema de fecha de vencimiento"

        case "cc_rejected_bad_filled_other":
            return "Rechazado debido a un error de formulario"
            
        case "cc_rejected_other_reason":
            return "Rechazado por error general"
        default:
            break;
    }
}