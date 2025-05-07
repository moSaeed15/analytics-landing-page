'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import CustomFormField from './FormRender';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({ message: 'Invalid email address.' }),
  message: z.string().min(10, {
    message: 'Message must be at least 10 characters.',
  }),
});

const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
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
      </form>
      <Button
        type="submit"
        className="min-h-16 bg-dark text-white w-full rounded-2xl  py-5 text-xl mt-7 cursor-pointer hover:bg-dark/90 "
      >
        Send Message
      </Button>
    </Form>
  );
};

export default ContactForm;
