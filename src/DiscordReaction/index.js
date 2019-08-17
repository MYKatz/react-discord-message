/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import Twemoji from 'react-twemoji';
import './styles.css';

function DiscordReaction(props) {
  const component = new React.Component();

  component.state = {
    clicked: props.clicked || false,
    num: props.num || 1,
  };

  // eslint-disable-next-line no-unused-vars
  function toggleReaction(_event) {
    let toAdd = 1;
    if (component.state.clicked) {
      toAdd = -1;
    }
    component.setState({
      clicked: !component.state.clicked,
      num: component.state.num + toAdd,
    });
  }

  component.render = function r() {
    if (component.state.clicked) {
      return (
        <Twemoji
          className="discordreaction discordreactionclicked"
          options={{ className: 'discordtwemoji' }}
          onClick={toggleReaction}
        >
          <span className="discordreactionemoji" role="img" aria-label="bird">
            {props.emoji}
          </span>
          <span className="discordreactnum">{component.state.num}</span>
        </Twemoji>
      );
    }
    return (
      <Twemoji
        className="discordreaction"
        options={{ className: 'discordtwemoji' }}
        onClick={toggleReaction}
      >
        <span className="discordreactionemoji" role="img" aria-label="bird">
          {props.emoji}
        </span>
        <span className="discordreactnum">{component.state.num}</span>
      </Twemoji>
    );
  };

  return component;
}

export default DiscordReaction;
