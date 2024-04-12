import { Component } from "react";

import { FaAngleLeft, FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { CiGlobe } from "react-icons/ci";
import { RiFileList2Line } from "react-icons/ri";
import { PiPencilSimpleLineLight } from "react-icons/pi";
import { LuChevronsUpDown } from "react-icons/lu";

import LeftBar from "../LeftBar";

import "./index.css";

class CreateCharacter extends Component {
  state = {
    characterName: "",
    tagLine: "",
    description: "",
    greeting: "",
    definition: "",
    showMoreOption: false,
  };

  onBackHomeRout = () => {
    const { history } = this.props;
    history.replace("/");
  };

  //   onchange character name event handler
  onChangeName = (event) =>
    this.setState({ characterName: event.target.value });

  onChangeTagline = (event) => this.setState({ tagLine: event.target.value });

  onChangeDescription = (event) =>
    this.setState({ description: event.target.value });

  onChangeGreeting = (event) => this.setState({ greeting: event.target.value });

  onChangeDefinition = (event) =>
    this.setState({ definition: event.target.value });

  onToggleIsPrivate = () =>
    this.setState((prevState) => {
      return { isPrivate: !prevState.isPrivate };
    });

  onToggleShowMoreOption = () =>
    this.setState((prevState) => {
      return { showMoreOption: !prevState.showMoreOption };
    });

  // character properties fields
  getCharacterPropertiesFields = () => {
    const {
      characterName,
      tagLine,
      description,
      greeting,
      showMoreOption,
    } = this.state;

    return (
      <>
        <label className="label">Character name</label>
        <input
          type="text"
          maxLength="20"
          placeholder="e.g. Albert Einstein"
          className="input"
          value={characterName}
          onChange={this.onChangeName}
        />
        <p className="word-count-p">0/20</p>
        {/* Tagline input */}
        <label
          className="label"
          title="How would your Character describe themselves"
        >
          Tagline
        </label>
        <input
          type="text"
          maxLength="50"
          placeholder="add a short tagline of your Character"
          className="input"
          value={tagLine}
          onChange={this.onChangeTagline}
        />
        <p className="word-count-p">0/50</p>
        {/* description input */}
        <label
          className="label"
          title="How would your Character describe themselves"
        >
          Description
        </label>
        <textarea
          rows="4"
          col="50"
          maxLength="500"
          placeholder="How would your Character describe themselves?"
          className="input"
          value={description}
          onChange={this.onChangeDescription}
        ></textarea>
        <p className="word-count-p">0/50</p>
        {/* Greeting for character */}
        <label
          className="label"
          title="The first thing your Character will say at the beginning of every chat"
        >
          Greeting
        </label>
        <textarea
          rows="2"
          col="50"
          maxLength="2048"
          placeholder="How would your Character describe themselves?"
          className="input"
          value={greeting}
          onChange={this.onChangeGreeting}
        ></textarea>
        <p className="word-count-p">0/2048</p>
        {/* model open btn */}
        <div className="add-voice-btn">
          <p className="border voice-p">
            <span>Voice</span>
            <span className="span">Add</span>
          </p>
          <FaAngleDown className="ml-auto" />
        </div>
      </>
    );
  };

  getMoreOptions = () => {
    const { definition } = this.state;

    return (
      <>
        <label
          className="label"
          title="Specific instruction on how your bot will behaved."
        >
          Definition
        </label>
        <textarea
          rows="5"
          col="50"
          maxLength="3200"
          placeholder="How would your Character describe themselves?"
          className="input"
          value={definition}
          onChange={this.onChangeDefinition}
        ></textarea>
      </>
    );
  };

  render() {
    const { showMoreOption } = this.state;
    return (
      <div className="create-character-bg">
        <LeftBar />
        <div className="create-character-content ">
          <div className="container mt-3 w-100">
            <div className="d-flex justify-content-between align-items-center">
              <button
                type="button"
                className="back-btn"
                onClick={this.onBackHomeRout}
              >
                <FaAngleLeft />
              </button>
              <a
                href="https://book.character.ai/character-book/how-to-quick-creation"
                target="_blank"
                className="character-list-a"
              >
                <RiFileList2Line size={14} className="mr-1" />
                View Character Book
              </a>
            </div>

            <div className="d-flex flex-column align-items-center mt-4">
              <div className="character-info-bg">
                <div className="character-profile-input">
                  <button type="button" className="insert-img-btn">
                    <PiPencilSimpleLineLight />
                  </button>
                </div>
                {/*  character properties input here */}
                {this.getCharacterPropertiesFields()}
                {/* hidden definition */}
                {showMoreOption && this.getMoreOptions()}
                {/* checkbox input */}
                <div className="mt-3 ">
                  <input type="checkbox" onChange={this.onToggleIsPrivate} />
                  <label className="ml-2 checkbox-input-label">
                    Keep Character definition private
                  </label>
                </div>
                {/* toggle button */}
                <button
                  type="button"
                  className="more-option-btn"
                  onClick={this.onToggleShowMoreOption}
                >
                  <span>More Option</span>
                  {showMoreOption ? (
                    <FaAngleUp size={8} className="ml-3" />
                  ) : (
                    <FaAngleDown size={8} className="ml-3" />
                  )}
                </button>

                {/* visibility button */}
                <p className="label">Visibility</p>
                <button type="button" className="visibility-btn">
                  <CiGlobe className="mr-1" />
                  Public
                  <LuChevronsUpDown className="ml-2" />
                </button>
              </div>
            </div>
            <button type="button" className="create-char-btn">
              Create Character
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateCharacter;
