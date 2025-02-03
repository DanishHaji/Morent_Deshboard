import { Rule } from 'sanity';

export const driver = {
  name: 'driver',
  title: 'Driver',
  type: 'document',
  fields: [
    {
      name: 'firstName',
      title: 'First Name',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().min(2).max(50),
    },
    {
      name: 'lastName',
      title: 'Last Name',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().min(2).max(50),
    },
    {
      name: 'fullName',
      title: 'Full Name',
      type: 'string',
      readOnly: true,
      description: 'Automatically generated based on first and last name',
      options: {
        isHighlighted: true,
      },
      inputComponent: (props: { document: { firstName: string; lastName: string } }) => `${props.document.firstName} ${props.document.lastName}`,
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().email(),
    },
    {
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().min(10).max(15),
    },
    {
      name: 'licenseNumber',
      title: 'License Number',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().min(5).max(20),
    },
    {
      name: 'licenseExpiryDate',
      title: 'License Expiry Date',
      type: 'datetime',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'assignedCar',
      title: 'Assigned Car',
      type: 'reference',
      to: [{ type: 'car' }],
      description: 'Car assigned to the driver',
    },
    {
      name: 'address',
      title: 'Address',
      type: 'text',
    },
    {
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'status',
      title: 'Driver Status',
      type: 'string',
      options: {
        list: [
          { title: 'Available', value: 'available' },
          { title: 'On Duty', value: 'on_duty' },
          { title: 'Off Duty', value: 'off_duty' },
          { title: 'Suspended', value: 'suspended' },
        ],
        layout: 'radio',
      },
      initialValue: 'available',
    },
    {
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
      readOnly: true,
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm',
        calendarTodayLabel: 'Today',
      },
      initialValue: () => new Date().toISOString(),
    },
  ],

  preview: {
    select: {
      title: 'fullName',
      media: 'profileImage',
    },
    prepare(selection: Record<'title' | 'media', string>) {
      const { title, media } = selection;
      return {
        title,
        media,
      };
    },
  },
};
