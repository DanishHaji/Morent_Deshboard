import { Rule } from 'sanity';
import { SchemaTypeDefinition } from 'sanity';

const paymentSchema: SchemaTypeDefinition = {
  name: 'payment',
  title: 'Payment Details',
  type: 'document',
  fields: [
    {
      name: 'transactionId',
      title: 'Transaction ID',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().min(6),
    },
    {
      name: 'paymentMethod',
      title: 'Payment Method',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().min(3),
      options: {
        list: ['Credit Card', 'Debit Card', 'PayPal', 'Bank Transfer'], // options for payment method
      },
    },
    {
      name: 'amount',
      title: 'Amount',
      type: 'number',
      validation: (Rule: Rule) => Rule.required().min(1),
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: ['Pending', 'Completed', 'Failed'], // options for payment status
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'paymentDate',
      title: 'Payment Date',
      type: 'datetime',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'reference',
      title: 'Booking/Driver Reference',
      type: 'string',
      description: 'Reference for the booking or driver associated with the payment',
    },
  ],
  preview: {
    select: {
      title: 'transactionId',
      subtitle: 'paymentMethod',
      media: 'paymentMethod',
    },
    prepare(selection: Record<'title' | 'subtitle' | 'media', string>) {
      const { title, subtitle, media } = selection;
      return {
        title,
        subtitle: `${subtitle} - ${media}`,
      };
    },
  },
};

export default paymentSchema;
