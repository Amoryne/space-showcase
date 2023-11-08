


import { SendGridClient } from "../Packages/@azure/functions";


document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    const data = {
      name: name,
      email: email,
      message: message
    };
  
    fetch("https://corelliabefunction.azurewebsites.net/", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => {
      if (response.ok) {
        
      } else {
      
      }
    });
  });



export default async function (context, req) {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    context.res = {
      status: 400,
      body: "Tous les champs sont obligatoires."
    };
    return;
  }

  const sendGridClient = new SendGridClient(process.env.SENDGRID_API_KEY);
  const msg = {
    to: "amoryne@corellia.be", 
    from: email,
    subject: `Nouveau message de ${name}`,
    text: message
  };

  try {
    await sendGridClient.send(msg);
    context.res = {
      status: 200,
      body: "Email envoyé avec succès."
    };
  } catch (error) {
    context.res = {
      status: 500,
      body: "Erreur lors de l'envoi de l'email."
    };
  }
};
console.log(name)