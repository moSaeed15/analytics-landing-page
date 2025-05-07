'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Form, FormMessage } from '@/components/ui/form';
import CustomFormField from './FormRender';

const ContactFormSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({ message: 'Invalid email address.' }),
  message: z.string().min(10, {
    message: 'Message must be at least 10 characters.',
  }),
});

const ContactForm = () => {
  const form = useForm<z.infer<typeof ContactFormSchema>>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof ContactFormSchema>) {
    console.log(values);
    form.setError('root', {
      message: 'Form submitted failed!',
    });
  }

  return (
    <Form {...form}>
      <form
        id="contact-form"
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 bg-grey rounded-4xl py-10 px-7"
      >
        <CustomFormField
          control={form.control}
          name="name"
          label="Name"
          placeholder="Name"
          type="input"
        />
        <CustomFormField
          control={form.control}
          name="email"
          label="Email"
          placeholder="Email"
          type="input"
        />
        <CustomFormField
          control={form.control}
          name="message"
          label="Message"
          placeholder="Message"
          type="textarea"
        />
        <FormMessage />
      </form>
      <Button
        type="submit"
        form="contact-form"
        className="min-h-16 bg-dark text-white w-full rounded-2xl  py-5 text-xl mt-7 cursor-pointer hover:bg-dark/90 "
      >
        Send Message
      </Button>
    </Form>
  );
};

export default ContactForm;
