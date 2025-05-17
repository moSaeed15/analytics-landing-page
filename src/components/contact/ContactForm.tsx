'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Form, FormMessage } from '@/components/ui/form';
import CustomFormField from './FormRender';
import Image from 'next/image';

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
    <div className=" bg-grey rounded-4xl flex  flex-col  py-10 px-7 lg:px-14 xl:px-16 lg:flex-row w-full relative lg:min-h-[650px]">
      <Form {...form}>
        <form
          id="contact-form"
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8    lg:w-[60%]"
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

          <Button
            type="submit"
            form="contact-form"
            className="min-h-16 bg-dark text-white w-full rounded-2xl  py-5 text-xl mt-7 cursor-pointer hover:bg-dark/90 hidden lg:block "
          >
            Send Message
          </Button>
        </form>
        <Button
          type="submit"
          form="contact-form"
          className="min-h-16 bg-dark text-white w-full rounded-2xl  py-5 text-xl mt-7 cursor-pointer hover:bg-dark/90  lg:hidden"
        >
          Send Message
        </Button>

        <Image
          src="/illustrations/contact.svg"
          width={650}
          height={650}
          alt="contact image"
          className="ml-auto absolute  right-0 translate-x-[46.5%] hidden lg:inline"
        />
      </Form>
    </div>
  );
};

export default ContactForm;
