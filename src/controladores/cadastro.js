const formData = require('form-data');
const Mailgun = require('mailgun.js');
const mailgun = new Mailgun(formData);
const mg = mailgun.client({username: 'jean', key: process.env.MAILGUN_API_KEY || ''});

const cadastroVoluntario = async (req, res) => {
    
    const { nome, missao, telefone } = req.body;

    mg.messages.create('sandbox63385bb2bd444235aadaf4d78c1e71a2.mailgun.org', {
        from: "Usuario aplicativo voluntario <mailgun@sandbox63385bb2bd444235aadaf4d78c1e71a2.mailgun.org>",
        to: ["jeanrodrigosf@gmail.com"],
        subject: "cadastro de voluntário",
        text: `Cadastro de voluntário:\nNome: ${nome}\nMissão: ${missao}\nTelefone: ${telefone}`,
        html: `<h1>Cadastro de voluntário:</h1><p><strong>Nome:</strong> ${nome}</p><p><strong>Missão:</strong> ${missao}</p><p><strong>Telefone:</strong> ${telefone}</p>`
    })
    .then((resposta) => {
        console.log("entrou",resposta);
        return res.status(201).json({mensagem:"E-mail enviado com sucesso!"})
    })
    .catch(err => {
        console.log(err); 
        return res.status(500).json({mensagem:"e-mail nao enviado!"});
    });
}

module.exports = {cadastroVoluntario}; 