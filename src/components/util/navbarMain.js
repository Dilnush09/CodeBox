import About from "../LandingPage/About project/About";
import Darslar from "../LandingPage/Darslar/darslar";
import Geniric from "../LandingPage/Geniric/Geniric";
import Prices from "../LandingPage/Prices/Prices";
import Pragramming from "../LandingPage/Programming languages/Programming";
import Lists from "../ProfilePage/Course Lists/lists";
import Profile from "../ProfilePage/profile";
import ProfileSettings from "../ProfilePage/Profile Settings/settings";

export const navbarMain = [
  {
    id: 1,
    title: "Loyiha haqida",
    path: "/home",
    Element: <About />,
    hidden: false,
  },
  {
    id: 2,
    title: "Dasturlash tillari",
    path: "/pragramlanguage",
    Element: <Pragramming />,
    hidden: false,
  },
  {
    id: 3,
    title: "Narxlar",
    path: "/price",
    Element: <Prices />,
    hidden: false,
    private: true,

  },
  // {
  //   id: 4,
  //   title: "SignIn",
  //   path: "/signin",
  //   Element: <Prices />,
  //   search: "?",
  //   hidden: true,
  //   private: false,
  //   param:true
  // },
  // {
  //   id: 5,
  //   title: "SignUp",
  //   path: "/signup",
  //   Element: <Prices />,
  //   search: "?",
  //   hidden: true,
  //   private: false,
  //   param:true

  // },
  {
    id: 6,
    title: "Profile",
    path: "/profile",
    Element: <Profile />,
    search: "?",
    hidden: true,
    private: false,
    param:true

  },
   { id:7,
    title: "Settings",
    path: "/profilesettings",
    Element: <ProfileSettings />,
    search: "?",
    hidden: true,
    private: false,
    param:true

  },
   { id:8,
    title: "Statistika",
    path: "/statistika",
    Element: <Lists />,
    search: "?",
    hidden: true,
    private: false,
    param:true

  },
   { id:8,
    title: "Darslar",
    path: "/darslar",
    Element: <Darslar />,
    search: "?",
    hidden: true,
    private: false,
    param:true

  },
];
