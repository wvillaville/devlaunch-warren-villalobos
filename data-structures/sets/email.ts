
/*

Desarrolla una función que procese una lista de correos electrónicos y elimine cualquier duplicado para evitar que se envíen mensajes múltiples a la misma dirección.
La función debe devolver una lista de objetos, donde cada objeto contiene un correo electrónico único y un mensaje personalizado dirigido al destinatario.

Cada mensaje debe dirigirse al usuario según la primera parte de su correo electrónico (la sección antes del @).

Por ejemplo, si el correo es ana.smith@gmail.com, el mensaje debería comenzar con "Hola Ana Smith".

Esta funcionalidad es útil en aplicaciones donde es necesario enviar mensajes personalizados a una lista de contactos, asegurando que cada persona reciba solo un mensaje sin duplicados.

Lista de correos electrónicos:

[
'ana.smith@gmail.com',
'juan.perez@yahoo.com',
'maria.garcia@hotmail.com',
'ana.smith@gmail.com',
'carlos.lopez@gmail.com',
'maria.garcia@hotmail.com',
'laura.martinez@gmail.com',
'ana.smith@gmail.com'
]

{ email: ana.smith@gmail.com, message: "Hello Ana Smith. Thank you for being part of our community!" }
{ email: juan.perez@yahoo.com, message: "Hello Juan Perez. Thank you for being part of our community!")
{ email: maria.garcia@hotmail.com, message: "Hello Maria Garcia. Thank you for being part of our community!")
{ email: carlos.lopez@gmail.com, message: "Hello Carlos Lopez. Thank you for being part of our community!")
{ email: laura.martinez@outlook.com, message: "Hello Laura Martinez. Thank you for being part of our community!")

*/

interface EmailMessage {
  email: string;
  message: string;
}

function processEmails(emails: string[]): EmailMessage[] {
  const uniqueEmails = [...new Set(emails)];

  return uniqueEmails.map(email => {
    const name = email.split('@')[0].replace('.', ' ').split(' ').map(part => part.charAt(0).toUpperCase() + part.slice(1)).join(' ');

    return {
      email,
      message: `Hello ${name}. Thank you for being part of our community!`
    };
  });
}

const emails: string[] = [
  'ana.smith@gmail.com',
  'juan.perez@yahoo.com',
  'maria.garcia@hotmail.com',
  'ana.smith@gmail.com',
  'carlos.lopez@gmail.com',
  'maria.garcia@hotmail.com',
  'laura.martinez@gmail.com',
  'ana.smith@gmail.com'
];

const processedEmails: EmailMessage[] = processEmails(emails);
console.log(processedEmails);