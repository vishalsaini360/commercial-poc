import React,{useEffect} from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch } from 'react-redux';
import { login, logout } from '../../store2/authSlice';

const menuItems = [
  {
    "title": "Home",
    "link": "/",
    "children": []
  },
  {
    "title": "1. Colors",
    "link": "/color/color-palette",
    "children": [
      { "title": "Color Palette", "link": "/color/color-palette" },
      { "title": "Grey Palette", "link": "/color/grey-palette" },
      { "title": "Signal Palette", "link": "/color/signal-palette" },
      { "title": "EV Palette", "link": "/color/ev-palette" },
      { "title": "Background colors", "link": "/color/background-colors" },
      { "title": "Text and Heading Colors", "link": "/color/text-and-heading" },
      { "title": "Icon colors", "link": "/color/icon-colors" },
      { "title": "Border colors", "link": "/color/border-colors" },
      { "title": "Shadows Usage", "link": "/color/shadows-usage" },
      { "title": "Interactive colors", "link": "/color/interactive-colors" },
      { "title": "Interactive colors on Dark", "link": "/color/interactive-colors-dark" }
    ]
  },
  {
    "title": "2. Typography",
    "link": "/typography/typo-light",
    "children": [
      { "title": "Typography", "link": "/typography/typo-light" },
      { "title": "Font Style Display Dark", "link": "/typography/typo-dark" },
      { "title": "Heading Display Style", "link": "/typography/heading-display-style" },
      { "title": "Heading Display Style Dark", "link": "/typography/heading-display-style-dark" },
      { "title": "Body Copy Display Style", "link": "/typography/body-copy-display-style" },
      { "title": "Body Copy Display Style Dark", "link": "/typography/body-copy-display-style-dark" },
      { "title": "Typography Style", "link": "/typography/typography-style" },
      { "title": "Typography Style Dark", "link": "/typography/typography-style-dark" },
    ]
  },
  {
    "title": "3. Layout Structure",
    "link": "/layout-structure",
    "children": [
      {
        "title": "Home Page",
        "link": "/layout-structure",
        "children": [
          { "title": "Header Banner", "link": "/layout-structure" },
          { "title": "Product Range", "link": "/layout-structure/product-range" },
          { "title": "Who we are", "link": "/layout-structure/who-we-are" },
          { "title": "Benefits Banner", "link": "/layout-structure/benefit-banner" },
          { "title": "Testimonial", "link": "/layout-structure/testimonial" },
          { "title": "News Articles", "link": "/layout-structure/news-articles" },
          { "title": "Enquire Form Section", "link": "/layout-structure/enquiry-form" },
          { "title": "Quick Action", "link": "/layout-structure/quick-action" },
          { "title": "Social Media", "link": "/layout-structure/social-media" }
        ]
      },
      {
        "title": "Product Page",
        "link": "/layout-structure/product-page",
        "children": [
          { "title": "Product Page Banner", "link": "/layout-structure/product-page" },
          { "title": "Features Sections", "link": "/layout-structure/product-page/features-sections" },
          { "title": "Product Configuration", "link": "/layout-structure/product-page/product-configration" },
          { "title": "Features Engine", "link": "/layout-structure/product-page/features-engine" },
          { "title": "Feature Engine Power", "link": "/layout-structure/product-page/features-engine-power" },
          { "title": "Image Gallery Section", "link": "/layout-structure/product-page/image-gallery" }
        ]
      },
      {
        "title": "About Us Page",
        "link": "/layout-structure/about-us",
        "children": [
          { "title": "Core Values", "link": "/layout-structure/about-us" },
          { "title": "Journey", "link": "/layout-structure/about-us/journey" },
          { "title": "Mission And Vision", "link": "/layout-structure/about-us/mission-vision" },
          { "title": "Awards", "link": "/layout-structure/about-us/awards" }
        ]
      },
      {
        "title": "Ease Of Finance",
        "link": "/layout-structure/ease-of-finance",
        "children": [
          { "title": "Ease of Finance", "link": "/layout-structure/ease-of-finance" },
          { "title": "Press Release", "link": "/layout-structure/ease-of-finance/press-release" }
        ]
      },
      {
        "title": "Gallery Page",
        "link": "/layout-structure/gallery",
        "children": [
          { "title": "Image Gallery", "link": "/layout-structure/gallery" }
        ]
      }
    ]
  },
  {
    "title": "4. Icons",
    "link": "/icons/light",
    "children": [
      { "title": "Light", "link": "/icons/light" },
      { "title": "Dark", "link": "/icons/dark" },
    ]
  },
  {
    "title": "5. Buttons, Radio Button",
    "link": "/buttons",
    "children": [
      { "title": "Primary Button", "link": "/buttons/primary-button" },
      { "title": "Secondary Button", "link": "/buttons/secondary-button" },
      { "title": "Button Groups", "link": "/buttons/button-group" },
      { "title": "Secondary button group", "link": "/buttons/secondary-button-group" },
      { "title": "Text Button", "link": "/buttons/text-button" },
      { "title": "Text Button Group", "link": "/buttons/text-button-group" },
      { "title": "System Icon Button", "link": "/buttons/system-icon-button" },
      { "title": "System Icon Button Groups", "link": "/buttons/system-icon-button-group" },
      { "title": "Floating Button", "link": "/buttons/floating-button" },
      { "title": "Stretched Primary Button", "link": "/buttons/stretched-primary-button" },
      { "title": "Stretched Secondary Button", "link": "/buttons/stretched-secondary-button" },
    ]
  },
  {
    "title": "6. Input Fields",
    "link": "/inputfields/input",
    "children": [
      { "title": "Input Field", "link": "/inputfields/input" },
      { "title": "Text Area Field", "link": "/inputfields/textarea" },
    ]
  },
  {
    "title": "7. Card",
    "link": "/card/interactive-block",
    "children": [
      { "title": "Card as an Interactive Block", "link": "/card/interactive-block" },
      { "title": "Card with Interactions", "link": "/card/interactions" },
      { "title": "Card with Background Image", "link": "/card/background-image" },
      { "title": "Card Grid Example", "link": "/card/grid-example" },
    ]
  },
  {
    "title": "8. Loader",
    "link": "/loader/spinner-continuous",
    "children": [
      { "title": "Spinner Continuous", "link": "/loader/spinner-continuous" },
      { "title": "Spinner Progress", "link": "/loader/spinner-progress" },
      { "title": "Bar Continuous", "link": "/loader/bar-continuous" },
      { "title": "Bar Progress", "link": "/loader/bar-progress" },
      { "title": "Full-screen loading", "link": "/loader/fullscreen-loader" },
      { "title": "When to use", "link": "/loader/when-to-use" },
      { "title": "Loading spinners", "link": "/loader/loading-spinners" },
    ]
  },
  {
    "title": "9. Date Picker",
    "link": "/date-picker",
    "children": []   
  },
  {
    "title": "10. Check Box",
    "link": "/checkbox/checkbox-text",
    "children": [
      { "title": "Checkbox with Text", "link": "/checkbox/checkbox-text" },
      { "title": "Checkbox group", "link": "/checkbox/checkbox-group" },
      { "title": "Disabled checkbox", "link": "/checkbox/disabled-checkbox" },
      { "title": "Disabled checkbox group", "link": "/checkbox/disabled-checkbox-grp" },
    ]
  },
  {
    "title": "11. Drag & Drop",
    "link": "/drag-and-drop/dropzone",
    "children": [
      { "title": "Dropzone", "link": "/drag-and-drop/dropzone" },
      { "title": "Draggable List", "link": "/drag-and-drop/draggable-list" },
      { "title": "Drop Zone Example", "link": "/drag-and-drop/dropzone-example" },
    ]
  },
  {
    "title": "12. Navigation",
    "link": "/navigation",
    "children": [
      { "title": "Navigation Desktop option 2", "link": "/navigation/navigation-desktop-option2" },
      { "title": "Navigation Desktop option 3", "link": "/navigation/navigation-desktop-option3" },
      { "title": "Navigation Desktop Dark", "link": "/navigation/navigation-desktop-dark" },
      { "title": "Navigation Desktop option 2 Dark", "link": "/navigation/navigation-desktop-option2-dark" },
      { "title": "Navigation Desktop option 3 Dark", "link": "/navigation/navigation-desktop-option3-dark" },
    ]
  },
  {
    "title": "13. Notifications",
    "link": "/notification",
    "children": [
      { "title": "Notification status", "link": "/notification/notification-status" },
      { "title": "Inline notification", "link": "/notification/inline-notification" },
      { "title": "Toast", "link": "/notification/toast" },
      { "title": "Actionable", "link": "/notification/actionable" },
    ]
  },
  {
    "title": "14. Imagery",
    "link": "/imagery",
    "children": []
  },
  {
    "title": "15. Search",
    "link": "/search",
    "children": [
      { "title": "Search Stages", "link": "/search" },
      { "title": "Variations", "link": "/search/variations" },
      { "title": "Example", "link": "/search/example" },
    ]
  },
  {
    "title": "16. Switch",
    "link": "/switch",
    "children": []
  },
  {
    "title": "17. Overlays",
    "link": "/overlays",
    "children": []
  },
  {
    "title": "18. Pagination",
    "link": "/pagination",
    "children": []
  },
  {
    "title": "19. Player",
    "link": "/player",
    "children": []
  },
  {
    "title": "20. Slider",
    "link": "/slider",
    "children": []
  },
  {
    "title": "21. Slideshow",
    "link": "/slideshow",
    "children": []
  },
  {
    "title": "22. Table",
    "link": "/table",
    "children": []
  },
  // Add other top-level menu items similarly
]

function Sidebar() {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    // Redirect to login page if not authenticated
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    // console.log('isAuthenticated',isAuthenticated)
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [ router]);

  const isLinkActive = (href, children) => {
    if (router.pathname === href) {
      return true;
    }
    if (children && children.length > 0) {
      return children.some((child) => isLinkActive(child.link, child.children));
    }

    return false;
  };

  const renderSubMenu = (submenu, activeMenu) => {
    return (
      <ul
        className="list-unstyled nav-inner"
        style={activeMenu ? displayStyle : {}}
      >
        {submenu.map((item, index) => (
          <li className="nav-inner__list" key={index}>
            <Link
              href={item.link}
              className={
                isLinkActive(item.link, item.children)
                  ? "nav-inner__list--text nav-inner__list--text-active"
                  : "nav-inner__list--text"
              }
            >
              {item.title}
            </Link>
            {/* {submenu.children.length > 0 && renderSubMenu2(submenu.children)} */}
            {item.children &&
              item.children.length > 0 &&
              renderSubMenu2(
                item.children,
                isLinkActive(item.link, item.children)
              )}
          </li>
        ))}
      </ul>
    );
  };

  const renderSubMenu2 = (submenu, activeMenu) => {
    return (
      <ul
        className="list-unstyled nav-inner__submenu"
        style={activeMenu ? displayStyle : {}}
      >
        {submenu.map((item, index) => (
          <li className="nav-inner__list" key={index}>
            <Link
              href={item.link}
              className={
                isLinkActive(item.link, item.children)
                  ? "nav-inner__list--text nav-inner__list--text-active"
                  : "nav-inner__list--text"
              }
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    );
  };

  const handleLogout = () => {
    // Dispatch the logout action
    dispatch(logout());
    router.push('/login');
  };

  const displayStyle = {
    display: "block",
  };

  return (
    <aside className="left-sidebar" id="sidebar">
      <ul className="nav flex-column left-sidebar__column">
        {menuItems.map((menuItem, index) => (
          <li key={index}>
            <Link
              className={
                isLinkActive(menuItem.link, menuItem.children)
                  ? "nav-link nav-link-active"
                  : "nav-link"
              }
              href={menuItem.link}
            >
              {menuItem.title}
            </Link>
            {menuItem.children.length > 0 &&
              renderSubMenu(
                menuItem.children,
                isLinkActive(menuItem.link, menuItem.children)
              )}
          </li>
        ))}
        <li><a className="nav-link" style={{cursor:"pointer"}} onClick={handleLogout}>23. Logout</a></li>
      </ul>
      {/* Your script tags */}
    </aside>
  );
}

export default Sidebar;