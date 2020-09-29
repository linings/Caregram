const getNavigation = () => {
  const authLinks = [
    {
      title: 'Home Page',
      href: '/',
    },
    {
      title: 'Add story',
      href: '/addStory',
    },
    {
      title: 'My stories',
      href: '/myStories',
    },
  ];
  const guestLinks = [
    {
      title: 'Home Page',
      href: '/',
    },
    {
      title: 'Register',
      href: '/register',
    },
    {
      title: 'Login',
      href: '/login',
    },
  ];
  return document.cookie ? authLinks : guestLinks;
};

export default getNavigation;
