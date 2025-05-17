import React from 'react';
import {
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormField,
} from '../ui/form';
import { Input } from '../ui/input';
import { Control, ControllerRenderProps } from 'react-hook-form';
import { Textarea } from '../ui/textarea';

type field = ControllerRenderProps<
  {
    name: string;
    email: string;
    message: string;
  },
  'name' | 'email' | 'message'
>;

type FormRenderProps = {
  label: string;
  type: 'input' | 'textarea';
  placeholder: string;
  field: field;
};

const FormRender = ({ field, label, type, placeholder }: FormRenderProps) => {
  return (
    <FormItem>
      <FormLabel>{label}</FormLabel>
      <FormControl>
        {type === 'input' ? (
          <Input
            placeholder={placeholder}
            {...field}
            className="bg-white py-5 px-5 placeholder:text-[#898989] border-black"
          />
        ) : (
          <Textarea
            placeholder={placeholder}
            {...field}
            className="bg-white py-5 px-5 placeholder:text-[#898989] lg:h-[200px] border-black "
          />
        )}
      </FormControl>
      <FormMessage />
    </FormItem>
  );
};

type CustomFormFieldProps = {
  control: Control<{
    message: string;
    name: string;
    email: string;
  }>;
  name: 'name' | 'message' | 'email';
  type: 'input' | 'textarea';
  placeholder: string;
  label: string;
};

export const CustomFormField = ({
  control,
  name,
  type,
  label,
  placeholder,
}: CustomFormFieldProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormRender
          field={field}
          label={label}
          type={type}
          placeholder={placeholder}
        />
      )}
    />
  );
};

export default CustomFormField;
