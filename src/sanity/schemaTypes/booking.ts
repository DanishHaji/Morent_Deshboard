// booking.ts
import { defineType, defineField } from 'sanity';

export const booking = defineType({
  name: 'booking',
  title: 'Booking',
  type: 'document',
  fields: [
    defineField({
      name: 'customerName',
      title: 'Customer Name',
      type: 'string',
      validation: (Rule) => Rule.required().min(3),
    }),
    defineField({
      name: 'customerEmail',
      title: 'Customer Email',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: 'customerPhoneNumber',
      title: 'Customer Phone Number',
      type: 'string',
      validation: (Rule) => Rule.required().min(10).max(15),
    }),
    defineField({
      name: 'car',
      title: 'Car',
      type: 'reference',
      to: [{ type: 'car' }], // Reference to car schema
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'driver',
      title: 'Driver',
      type: 'reference',
      to: [{ type: 'driver' }], // Reference to driver schema
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'pickupDate',
      title: 'Pickup Date',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'dropOffDate',
      title: 'Drop-off Date',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'pickupLocation',
      title: 'Pickup Location',
      type: 'string',
      validation: (Rule) => Rule.required().min(5),
    }),
    defineField({
      name: 'dropOffLocation',
      title: 'Drop-off Location',
      type: 'string',
      validation: (Rule) => Rule.required().min(5),
    }),
    defineField({
      name: 'totalAmount',
      title: 'Total Amount',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'paymentStatus',
      title: 'Payment Status',
      type: 'string',
      options: {
        list: ['paid', 'pending', 'failed'], // Enum values for payment status
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'status',
      title: 'Booking Status',
      type: 'string',
      options: {
        list: ['confirmed', 'pending', 'completed', 'cancelled'], // Enum values for booking status
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
      readOnly: true,
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'updatedAt',
      title: 'Updated At',
      type: 'datetime',
      readOnly: true,
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      title: 'customerName',
      subtitle: 'car.name',
      media: 'car.imageUrl',
    },
  },
});
