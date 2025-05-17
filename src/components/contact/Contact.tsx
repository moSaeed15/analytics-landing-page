import React from 'react';
import Section from '../Section';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <Section
      title="Contact Us"
      className="lg:mt-32 xl:mt-36"
      description="Connect with Us: Let's Discuss Your Digital Marketing Needs"
    >
      <ContactForm />
    </Section>
  );
};

export default Contact;
