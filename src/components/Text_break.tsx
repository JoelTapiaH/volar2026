import React from 'react';

interface TextBreakProps {
  children: string;
}

export const TextBreak = ({ children }: TextBreakProps) => {
  const processedText = children.split('$').map((part, index) => (
    <React.Fragment key={index}>
      {part}
      {index < children.split('$').length - 1 && <br />}
    </React.Fragment>
  ));

  return <div>{processedText}</div>;
};