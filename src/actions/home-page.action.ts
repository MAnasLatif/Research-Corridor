'use server';

import HomePageType from '@/types/home-page.type';

const getHomePageData: () => Promise<HomePageType> = async () => {
  return {
    cta: {
      deadline: 'June 30, 2025',
    },
    researchers: [
      {
        comment:
          'Research Corridor has transformed how we collaborate on international research projects.',
        researcher: {
          name: 'Dr. Sarah Ahmed',
          avatar: 'https://thispersondoesnotexist.com',
          from: 'University of Management and Technology',
          position: 'Research Director',
        },
      },
      {
        comment:
          'Research Corridor has transformed how we collaborate on international research projects.',
        researcher: {
          name: 'Dr. Sarah Ahmed',
          avatar: 'https://thispersondoesnotexist.com',
          from: 'University of Management and Technology',
          position: 'Research Director',
        },
      },
      {
        comment:
          'Research Corridor has transformed how we collaborate on international research projects.',
        researcher: {
          name: 'Dr. Sarah Ahmed',
          avatar: 'https://thispersondoesnotexist.com',
          from: 'University of Management and Technology',
          position: 'Research Director',
        },
      },
      {
        comment:
          'Research Corridor has transformed how we collaborate on international research projects.',
        researcher: {
          name: 'Dr. Sarah Ahmed',
          avatar: 'https://thispersondoesnotexist.com',
          from: 'University of Management and Technology',
          position: 'Research Director',
        },
      },
      {
        comment:
          'Research Corridor has transformed how we collaborate on international research projects.',
        researcher: {
          name: 'Dr. Sarah Ahmed',
          avatar: 'https://thispersondoesnotexist.com',
          from: 'University of Management and Technology',
          position: 'Research Director',
        },
      },
    ],
    journals: [
      {
        title:
          'Journal of Islamic Studies is a multi-disciplinary publication dedicated',
        description:
          'The Journal of Islamic Studies is a multi-disciplinary publication dedicated to the scholarly study of all aspects of Islam and of the Islamic world.',
        thumbnail: 'https://streamgo.events/assets/articles/7.png',
        Category: 'Islamic Studies',
        link: '#',
      },
      {
        title: 'Journal of Islamic Studies',
        description:
          'The Journal of Islamic Studies is a multi-disciplinary publication dedicated to the scholarly study of all aspects of Islam and of the Islamic world.',
        thumbnail: 'https://streamgo.events/assets/articles/7.png',
        Category: 'Islamic Studies',
        link: '#',
      },
      {
        title: 'Journal of Islamic Studies',
        description:
          'The Journal of Islamic Studies is a multi-disciplinary publication dedicated to the scholarly study of all aspects of Islam and of the Islamic world.',
        thumbnail: 'https://streamgo.events/assets/articles/7.png',
        Category: 'Islamic Studies',
        link: '#',
      },
      {
        title: 'Journal of Islamic Studies',
        description:
          'The Journal of Islamic Studies is a multi-disciplinary publication dedicated to the scholarly study of all aspects of Islam and of the Islamic world.',
        thumbnail: 'https://streamgo.events/assets/articles/7.png',
        Category: 'Islamic Studies',
        link: '#',
      },
    ],
    collaboration: [
      {
        title: 'University of Management and Technology',
        description: 'Leading research in Islamic studies and modern sciences',
        thumbnail:
          'https://www.edarabia.com/wp-content/uploads/2012/05/university-management-technology-lahore-pakistan.jpg',
        link: '#',
      },
      {
        title: 'University of Management and Technology',
        description: 'Leading research in Islamic studies and modern sciences',
        thumbnail:
          'https://www.edarabia.com/wp-content/uploads/2012/05/university-management-technology-lahore-pakistan.jpg',
        link: '#',
      },
      {
        title: 'University of Management and Technology',
        description: 'Leading research in Islamic studies and modern sciences',
        thumbnail:
          'https://www.edarabia.com/wp-content/uploads/2012/05/university-management-technology-lahore-pakistan.jpg',
        link: '#',
      },
      {
        title: 'University of Management and Technology',
        description: 'Leading research in Islamic studies and modern sciences',
        thumbnail:
          'https://www.edarabia.com/wp-content/uploads/2012/05/university-management-technology-lahore-pakistan.jpg',
        link: '#',
      },
      {
        title: 'University of Management and Technology',
        description: 'Leading research in Islamic studies and modern sciences',
        thumbnail:
          'https://www.edarabia.com/wp-content/uploads/2012/05/university-management-technology-lahore-pakistan.jpg',
        link: '#',
      },
    ],
  };
};

export default getHomePageData;
