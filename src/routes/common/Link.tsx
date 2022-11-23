import * as React from 'react';
import Suggestions from './Suggestion';

interface ILink {
  tip?: string;
  size?: string;
  href: string;
  font?: string;
  color?: string;
  uppercase?: string;
  children: React.ReactNode;
}

const WebLink = ({ href, color, font, tip, size, uppercase, children }: ILink) => {
  const css = {
    textDecoration: 'none',
    color: color,
    fontWeight: font,
    fontSize: size,
    textTransform: uppercase ? 'uppercase' : 'normal',
  };

  return (
    <Suggestions tip={tip}>
      <a href={href} style={css}>
        {children}
      </a>
    </Suggestions>
  );
};

export default WebLink;
