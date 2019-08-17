/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Twemoji from 'react-twemoji';
import DiscordReaction from './DiscordReaction';
import './styles.css';

function DiscordMessage(props) {
  return (
    <Twemoji
      className="container discordmsg"
      options={{ className: 'discordtwemoji' }}
    >
      <img src={props.avatar} alt="Discord Message" className="discordavatar" />
      <div className="discordtext">
        <div className="discordnick">
          <span className="discordname">{props.username}</span>
          {props.isBot && <span className="discordbottag">BOT</span>}
          <span className="discorddatetime">{props.time}</span>
        </div>
        <div className="discordbody">
          {props.body
            && props.body.split(' ').map((item, _) => {
              if (item[0] === '#') {
                return <span className="discordchannelreference">{item}</span>;
              }
              return `${item} `;
            })}
        </div>
        <div className="discordreactions">
          {props.reactions
            // eslint-disable-next-line no-unused-vars
            && props.reactions.map((item, index) => (
              <DiscordReaction
                emoji={item.emoji}
                num={item.num}
                clicked={item.clicked}
              />
            ))}
        </div>
      </div>
    </Twemoji>
  );
}

export default DiscordMessage;
