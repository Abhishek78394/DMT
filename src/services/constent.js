
import { ReactComponent as HomeIconActive } from "../assets/images/home-icon-active.svg";
import { ReactComponent as HomeIcon } from "../assets/images/home-icon.svg";
import { ReactComponent as MessageIcon } from "../assets/images/message-icon.svg";
import { ReactComponent as MessageIconActive } from "../assets/images/message-icon-active.svg";
import { ReactComponent as QuoteIcon } from "../assets/images/quote-icon.svg";
import { ReactComponent as QuoteIconActive } from "../assets/images/quote-icon-active.svg";
import { ReactComponent as ContractIcon } from "../assets/images/contract-icon.svg";
import { ReactComponent as ContractIconActive } from "../assets/images/contract-icon-active.svg";
import { ReactComponent as AccountIcon } from "../assets/images/account-icon.svg";
import { ReactComponent as AccountIconActive } from "../assets/images/account-icon-active.svg";
import { ReactComponent as LogoutIcon } from "../assets/images/logout-icon.svg";

const mainMenuItems = [
    {
      text: "Home",
      icon: <HomeIcon />,
      activeIcon: <HomeIconActive />,
      tab: "Home",
      route: '/home'
    },
    {
      text: "Messages",
      icon: <MessageIcon />,
      activeIcon: <MessageIconActive />,
      tab: "Inbox",
      route: "/inbox"
    },
    {
      text: "My Quotes",
      icon: <QuoteIcon />,
      activeIcon: <QuoteIconActive />,
      tab: "My Quotes",
      route: 'my-quotes'
    },
    {
      text: "My Contracts",
      icon: <ContractIcon />,
      activeIcon: <ContractIconActive />,
      tab: "My Contracts",
      route: '/my-contracts',
    },
  ];

  const accountMenuItems = [
    {
      text: "Manage Account",
      icon: <AccountIcon />,
      activeIcon: <AccountIconActive />,
      tab: "Account",
      route: '/account-settings'
    },
    {
      text: "Log Out",
      icon: <LogoutIcon />,
      activeIcon: <LogoutIcon />,
      tab: "Log Out",
      route: '/logout'
    },
  ];

  
  export const identifyInput = (input) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^[0-9]{10}$/;
    const accountNumberRegex = /^[0-9]{8,12}$/; // Example regex for account numbers
    const idRegex = /^[A-Z0-9]{6,10}$/; // Example regex for ID format
  
    if (emailRegex.test(input)) {
      return 'Email';
    } else if (mobileRegex.test(input)) {
      return 'Mobile';
    } else if (accountNumberRegex.test(input)) {
      return 'AccountNumber';
    } else if (idRegex.test(input)) {
      return 'ID';
    } else {
      return 'Invalid input';
    }
  };
  


  export { mainMenuItems, accountMenuItems };