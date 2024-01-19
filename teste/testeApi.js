const axios = require("axios");

let options = {
  method: 'POST',
  url: 'http://webservice.credify.com.br/wscredify.php',
<<<<<<< HEAD
  params: {'': ''},
  headers: {'Content-Type': 'text/xml', 'User-Agent': 'insomnia/8.4.5'},
=======
  params: { '': '' },
  headers: { 'Content-Type': 'text/xml', 'User-Agent': 'insomnia/8.4.5' },
>>>>>>> 0970dd26eab01b930fc9c90e8d1b01618eeb2b1a
  data: '<soapenv:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:server.consultas">\n   <soapenv:Header/>\n   <soapenv:Body>\n      <urn:Consultar soapenv:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">\n         <xmlRequisicao xsi:type="xsd:string">\n        <![CDATA[<xml>\n<ACESSO>\n<LOGON>31235</LOGON>\n<SENHA>78911007</SENHA>\n</ACESSO>\n<CONSULTA>\n<IDCONSULTA>3</IDCONSULTA>\n<CPFCNPJ>28695991881</CPFCNPJ>\n   <TIPOPESSOA>F</TIPOPESSOA>\n</CONSULTA>>\n    </xml>]]>\n         </xmlRequisicao>\n      </urn:Consultar>\n   </soapenv:Body>\n</soapenv:Envelope>'
};

axios.request(options)
<<<<<<< HEAD
    .then (  (response)  => console.log(response.data) )
    .catch(  (error)     => console.error(error)       )
=======
  .then((response) => console.log(response.data))
  .catch((error) => console.error(error))
>>>>>>> 0970dd26eab01b930fc9c90e8d1b01618eeb2b1a
