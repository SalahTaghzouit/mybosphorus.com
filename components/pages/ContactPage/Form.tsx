import { toast } from 'react-toastify'
import Button from '../../basic/Button'
import { useState } from 'react'
import Input from '../../basic/Input'

const empty = {
  name: '', 
  email: '',
  address: '',
  phone: '',
  business: '',
  businessType: '',
  message: '',
}
const Form = () => {
  const [form, setForm] = useState(empty)
  const [isSending, setIsSending] = useState(false)
  const [isSent, setIsSent] = useState(false)

  const sendEmail = async (e: import('react').MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setIsSending(true)
    e.preventDefault()

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      })

      const data = await response.json()

      if(data.success) {
        toast.success('We have received your email. We will respond to you asap.')
        setIsSent(true)
      } else {
        toast.error('Something wrong happened. Try sending a direct email to info@mybosphorus.com')
      }
    } finally {
      setIsSending(false)
    }
  }

  const updateForm = (what: keyof typeof empty) => {
    return (value: string) => {
      setForm({ ...form, [what]: value })
    }
  }

  if(isSent) {
    return (
      <div>Thank you. Your message was sent. We will respond to you asap.</div>
    )
  }

  return (
    <form>
      
      <div className={'name'}>
        <Input value={form.name} placeholder={'John Doe'} label={'Name'} onChangeText={updateForm('name')} required />
      </div>
      <div className={'email'}>
        <Input value={form.email} placeholder={'john@example.org'} label={'Email'} onChangeText={updateForm('email')} type={'email'} required />
      </div>
      <div className={'phone'}>
        <Input value={form.phone} placeholder={'+33 1234 56789'} label={'Phone'} onChangeText={updateForm('phone')} required />
      </div>
      <div className={'address'}>
        <Input value={form.address} placeholder={'Doe\'s Hotel, street 24, city, state, country'} label={'Address'} onChangeText={updateForm('address')} required />
      </div>
      <div className={'business'}>
        <Input value={form.business} placeholder={'Doe\'s Hotel'} label={'Business Name'} onChangeText={updateForm('business')} required />
      </div>
      <div className={'business-type'}>
        <Input value={form.businessType} placeholder={'Hotel'} label={'Business Type'} onChangeText={updateForm('businessType')} required />
      </div>
      <div className={'text'}>
        <Input textarea value={form.message} placeholder={'Your inquery'} label={'Message'} onChangeText={updateForm('message')} required />
      </div>

      <div className={'send'}>
        <Button disabled={isSending} title={isSending ? 'Sending...' : 'Send'} onClick={sendEmail} />
      </div>
      <style jsx>{`
        form {
          display: grid;
          gap: 1.2em;
          grid-template-rows: repeat(min-content);
          grid-template-columns: 1fr 1fr;
          grid-template-areas:
            "name name"
            "email phone"
            "address address"
            "business businessType"
            "text text";
        }

        .name {
          grid-area: name;
        }

        .email {
          grid-area: email;
        }

        .address {
          grid-area: address;
        }

        .phone {
          grid-area: phone;
        }

        .business {
          grid-area: business;
        }

        .business-type {
          grid-area: businessType;
        }

        .text {
          grid-area: text;
        }

        @media (max-width: 500px) {
          form {
            grid-template-rows: repeat(min-content);
            grid-template-columns: 1fr;
            grid-template-areas:
              "name"
              "email"
              "phone"
              "address"
              "businessType"
              "business"
              "text";
          }
        }
      `}</style>
    </form>
  )
}

export default Form
