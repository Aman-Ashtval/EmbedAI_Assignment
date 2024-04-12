import { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

import { FaAnglesLeft } from "react-icons/fa6";
import { FiChevronDown } from "react-icons/fi";
import { TbPlus } from "react-icons/tb";
import { TiPlus } from "react-icons/ti";
import { PiCompassFill } from "react-icons/pi";
import { FaUserCircle } from "react-icons/fa";
import { IoSettingsOutline, IoLogOutOutline } from "react-icons/io5";
import { RiArrowLeftRightFill } from "react-icons/ri";
import { HiMenuAlt2 } from "react-icons/hi";

import "./index.css";

const profileMenuList = [
  {
    id: 1,
    text: "Profile",
    icon: <FaUserCircle />,
  },
  {
    id: 2,
    text: "Settings",
    icon: <IoSettingsOutline />,
  },
  {
    id: 3,
    text: "Back to old site",
    icon: <RiArrowLeftRightFill />,
  },
  {
    id: 4,
    text: "Logout",
    icon: <IoLogOutOutline />,
  },
];

const LeftBar = (props) => {
  const userName = "Aman Kumar";
  const [showLeftBar, onToggleLeftBar] = useState(true);

  useEffect(() => {
    if (window.innerWidth < 992) {
      onToggleLeftBar(false);
    }
  }, []);

  const onClickLeftBarBtn = () => onToggleLeftBar((prevState) => !prevState);

  const onClickCreateCharacter = () => {
    const { history } = props;
    history.replace("/character");
  };

  const renderMenuListItem = (itemDetails) => {
    const { id, text, icon } = itemDetails;
    return (
      <li key={id} className="menu-list-item">
        <p className="chats-p m-0">{text}</p>
        <button type="button" className="profile-menu-btn">
          {icon}
        </button>
      </li>
    );
  };

  if (showLeftBar) {
    return (
      <div className="left-bar-bg">
        <div className="d-flex justify-content-between align-items-center p-1">
          <p className="logo-name">character.ai</p>
          <button
            type="button"
            className="left-arrow-btn"
            onClick={onClickLeftBarBtn}
          >
            <FaAnglesLeft size={12} color={"inherit"} />
          </button>
        </div>
        <button
          type="button"
          className="create-character-btn"
          onClick={onClickCreateCharacter}
        >
          <TbPlus className="plus-icon" />
          Create
        </button>
        <button type="button" className="discover-btn">
          <PiCompassFill className="compass-icon" />
          Discover
        </button>
        <p className="chats-p">Chats</p>
        <p className="today-p">Today</p>
        <div className="history-div">history</div>
        <hr className="hr-line" />
        <button type="button" className="try-btn">
          Try c.ai
          <TiPlus className="golden-plus-icon" />
        </button>

        {/* <!-- Default dropup button --> */}
        <div className="btn-group dropup mt-3">
          <div
            className="drop-up"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <div className="d-flex align-items-center">
              <p className="user-profile-p">{userName.charAt(0)}</p>
              <p className="left-bar-user-name-p">{userName}</p>
            </div>
            <FiChevronDown color={"#7c7c87"} />
          </div>
          <div className="dropdown-menu w-100 p-0">
            {/* <!-- Dropdown menu links --> */}
            <ul className="profile-menu">
              {profileMenuList.map((each) => renderMenuListItem(each))}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="floating-div fixed-top">
      <button
        type="button"
        className="menu-float-btn"
        onClick={onClickLeftBarBtn}
      >
        <HiMenuAlt2 />
      </button>
    </div>
  );
};

export default withRouter(LeftBar);
