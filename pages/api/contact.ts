import SparkPost from 'sparkpost'

const client = new SparkPost(process.env.SPARKPOST_API_KEY)

type EmailOptions = {
  from: string
  phone: string
  name: string
  address: string
  business: string
  businessType: string
  message: string
}

const sendEmail = async ({ from, phone, name, address, business, businessType, message }: EmailOptions) => {

  return await client.transmissions.send({
    options: {
      sandbox: process.env.SPARKPOST_SANDBOX === 'true'
    },
    content: {
      from: 'noreply@mybosphorus.co',
      reply_to: from,
      subject: `Message from ${name} through wesbite`,
      html:`<html>
  <body>
    <p>You received a new email from <strong>${name}</strong>. Details:</p>
    <ul>
      <li>Email: ${from}</li>
      <li>Phone: ${phone}</li>
      <li>Address: ${address}</li>
      <li>Business: ${business}</li>
      <li>Business Type: ${businessType}</li>
    </ul>
    <p>${message}</p>
  </body>
</html>`
    },
    recipients: [
      { address: 'info@mybosphorus.com' }
    ]
  })
}
const contact = async (req: import('next').NextApiRequest, res: import('next').NextApiResponse) => {
  if (req.method !== 'POST') {
    res.status(200).json({ success: true })
    return
  }

  try {
    await sendEmail(req.body)
    res.status(200).json({ success: true })
  } catch(e) {
    res.status(500).json({ success: false })
  }

  
}

export default contact
