export const initialData = {
  personal: {
    fullName: 'Marius Bodea',
    email: 'marius.bodea@example.com',
    phone: '+40 700 000 000',
    photo: '/profile.svg',
    summary:
      'Computer Science graduate with practical experience in automated validation, Linux systems, and modern web application development using React and Node.js. Dedicated to writing clean, maintainable, and well-tested code.',
  },
  education: [
    {
      id: 0,
      name: 'Dunarea de Jos University of Galati',
      degree: 'B.S. in Computer Science',
      startDate: '2022-10-01',
      endDate: '2026-07-01',
    },
  ],
  experience: [
    {
      id: 0,
      title: 'Software Developer',
      company: 'Tech Solutions',
      responsibilities: [
        {
          id: 0,
          task: 'Developed automated test suites and validation workflows for embedded Linux environments.',
        },
        {
          id: 1,
          task: 'Implemented modular UI components and client-side state handling with React.',
        },
        {
          id: 2,
          task: 'Collaborated on containerized tooling workflows using Docker and Git version control.',
        },
      ],
      startDate: '2024-03-01',
      endDate: '2025-10-01',
    },
  ],
};