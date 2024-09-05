import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Bars4Icon,
  GlobeAmericasIcon,
  NewspaperIcon,
  PhoneIcon,
  RectangleGroupIcon,
  SquaresPlusIcon,
  MicrophoneIcon,
  TagIcon,
  UserGroupIcon,
  TrophyIcon,
  PaperAirplaneIcon,
  AcademicCapIcon,
  BookOpenIcon
} from "@heroicons/react/24/solid";
 import logo from '../images/singleLogo.png';
import { useAuth } from "../context/AuthContext";
import ProfileDropDown from "./ProfileDropDown";
const navListMenuItems = [
  {
    title: "Collaboration",
    description: "Find the perfect solution for your needs.",
    icon: SquaresPlusIcon,
    link:"/Collaboration",
  },
  {
    title: "Conferences",
    description: "Meet and learn about our dedication",
    icon: UserGroupIcon,
    link:"/Conferences",
  },
  {
    title: "Scientific Assistance",
    description: "Find the perfect solution for your needs.",
    icon: Bars4Icon,
    link:"/ScientificAssistance",
  },
  {
    title: "Speakers",
    description: "Learn how we can help you achieve your goals.",
    icon: MicrophoneIcon,
    link:"/Speakers",
  },
  {
    title: "Worldwide Platform",
    description: "Reach out to us for assistance or inquiries",
    icon: GlobeAmericasIcon,
    link:"/WorldwidePlatform",
  },
  {
    title: "Publishing opportunities",
    description: "Find the perfect solution for your needs.",
    icon: PaperAirplaneIcon,
    link:"/PublishingOpportunities",
  },
  {
    title: "Publications",
    description: "Read insightful articles, tips, and expert opinions.",
    icon: NewspaperIcon,
    link:"/Publication",
  },
  {
    title: "Courses",
    description: "Find the perfect solution for your needs.",
    icon: RectangleGroupIcon,
    link:"/Courses",
  },
  {
    title: "Awards & Recognitions",
    description: "Explore limited-time deals and bundles",
    icon: TrophyIcon,
    link:"/Awards&Recognitions",
  },
  {
    title: "Professional Conference Organizer",
    description: "Explore limited-time deals and bundles",
    icon: AcademicCapIcon,
    link:"/ProfessionalConferenceOrganizer",
  },
   {
    title: "Experience a knowledge Exchange",
    description: "Explore limited-time deals and bundles",
    icon: BookOpenIcon,
    link:"/ExperienceknowledgeExchange",
  },
];
 
function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);


  const renderItems = navListMenuItems.map(
    ({ icon, title, description,link }, key) => (
      <a href={link} key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg">
          <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
            {" "}
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 text-gray-900 w-6",
            })}
          </div>
          <div>
            <Typography
            
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-bold"
            >
              {title}
            </Typography>
            <Typography
              variant="paragraph"
              className="text-xs !font-medium text-blue-gray-500"
            >
              {description}
            </Typography>
          </div>
        </MenuItem>
      </a>
    ),
  );
 
  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Services
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-4 gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}
 
function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Typography
        as="a"
        href="/ZepResarch"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">About</ListItem>
      </Typography>
       <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >

        <ListItem  className="flex items-center gap-2 py-2 pr-4">
          Blogs
        </ListItem>
      
      </Typography>
      <NavListMenu />
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      ><a href="/ContactUs">

        <ListItem  className="flex items-center gap-2 py-2 pr-4">
          Contact Us
        </ListItem>
      </a>
      </Typography>

       <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      ><a href="/Gallery">

        <ListItem  className="flex items-center gap-2 py-2 pr-4">
          Gallery
        </ListItem>
      </a>
      </Typography>

     
      
    </List>
  );
}
 
export function Nav() {
  const [openNav, setOpenNav] = React.useState(false);
 const { authState, updateAuthState } = useAuth();
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  return (
        <Navbar className="  mx-auto mt-2 px-4 py-2 z-10 "  >
    <div className="flex items-center  justify-between text-blue-gray-900 ">
        
        <Typography
          as="a"
          href="/"
          
          className="mr-4 cursor-pointer text-xs text-left font-bold py-1.5 lg:ml-2 inline-flex items-center"
        >
          <img src={logo} alt="logo" className="w-10 h-10 mr-2 drop-shadow-md" />
             Zep<br />Research
            
        </Typography>
         
        <div className="hidden lg:block">
          <NavList />
        </div>

        <div className="hidden gap-2 lg:flex ">
           {
              authState.isLoggedIn ?
              <>
                <div className="hidden gap-2 lg:flex">
                <a href="/BecomeMember">
                 <Button  variant="outlined">
                    Become Member
                 </Button> 
                </a>
                 <ProfileDropDown/>
                </div>
              </>
              :<>
              <div className="hidden gap-2 lg:flex">
          <a href="/Login">
          <Button variant="text" size="sm" color="blue-gray">
            Sign In
          </Button>
          </a>
          <a href="/Registration">
          <Button  variant="gradient" size="sm">
            Sign Up
          </Button>
          </a>
        </div>
              </>}
        </div>

        
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
        {
              authState.isLoggedIn ?
              <>
                <div className=" gap-2 lg:flex">
                <a href="/BecomeMember">
                 <Button  variant="outlined">
                    Become Member
                 </Button> 
                </a>
                </div>
                <div className=" w-full mx-auto">
                 <ProfileDropDown/>
                </div>
              </>
              :<>
              <div className=" gap-2 lg:flex">
          <a href="/Login">
          <Button variant="text" size="sm" color="blue-gray">
            Sign In
          </Button>
          </a>
          <a href="/Registration">
          <Button  variant="gradient" size="sm">
            Sign Up
          </Button>
          </a>
        </div>
              </>}
        </div>
      </Collapse>
    </Navbar>
  );
}