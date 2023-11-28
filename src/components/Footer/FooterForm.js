// FooterForm.js
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { FooterForm, Column1, Column2, FooterFormLabel, FooterFormInput, FooterFormTextAreaLabel, FooterFormTextarea, FooterFormButton } from './FooterElements';

const ContactForm = () => {

  const [successMessage, setSuccessMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    const templateParams = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message,
    };

    // Use your emailjs user ID
    const apiKey = "g_h78ugv4V5lpunEB";

    emailjs
      .send("service_je5ipks", "template_h0g8gya", templateParams, apiKey)
      .then((response) => {
        setSuccessMessage("Email sent successfully!", response);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });

    // Reset the form after submission
    e.target.reset();
  };

  return (
    <FooterForm onSubmit={handleSubmit(onSubmit)}>
      <Column1>
      <FooterFormLabel htmlFor="name">Name:</FooterFormLabel>
      <FooterFormInput
        type="text"
        id="name"
        {...register('name', {
          required: 'Name is required',
          maxLength: {
            value: 30,
            message: 'Name should not exceed 30 characters',
          },
        })}
      />
      {errors.name && <p style={{ color: 'red', fontSize: '0.8rem', textShadow: 'none' }}>{errors.name.message}</p>}

      <FooterFormLabel htmlFor="email">Email:</FooterFormLabel>
      <FooterFormInput
        type="email"
        id="email"
        {...register('email', {
          required: 'Email is required',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Invalid email address',
          },
        })}
      />
      {errors.email && <p style={{ color: 'red', fontSize: '0.8rem', textShadow: 'none' }}>{errors.email.message}</p>}

      <FooterFormLabel htmlFor="phone">Phone:</FooterFormLabel>
      <FooterFormInput
        type="tel"
        id="phone"
        {...register('phone', {
          pattern: {
            value: /^[0-9]+$/i,
            message: 'Invalid phone number',
          },
        })}
      />
      {errors.phone && <p style={{ color: 'red', fontSize: '0.8rem', textShadow: 'none' }}>{errors.phone.message}</p>}
      </Column1>
<Column2>
      <FooterFormTextAreaLabel htmlFor="message">Message:</FooterFormTextAreaLabel>
      <FooterFormTextarea
        id="message"
        {...register('message', { required: 'Message is required' })}
      />
      {errors.message && <p style={{ marginBottom: '10px', color: 'red', fontSize: '0.8rem', textShadow: 'none' }}>{errors.message.message}</p>}

      <FooterFormButton type="submit">Submit</FooterFormButton>
      <p style={{ marginTop: '10px', color: 'green', fontSize: '0.8rem', textAlign: 'center', textShadow: 'none' }}>{successMessage}</p>
</Column2>
    </FooterForm>
  );
};



export default ContactForm;

