export const maskEmailOrMobile = (input) => {
    if (input.includes('@')) {
      // Mask email
      const [name, domain] = input.split('@');
      const maskedName = name[0] +name[1] + '*'.repeat(name.length - 1);
      return `${maskedName}@${domain}`;
    } else {
      // Mask mobile
      return input.slice(0, 2) + '*****' + input.slice(-2);
    }
  };
  