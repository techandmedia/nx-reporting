import { useEffect } from 'react';
import './button.module.css';

/* eslint-disable-next-line */
export interface ButtonProps {}

export function Button(props: ButtonProps) {
  useEffect(() => {
    console.log(props);
  }, []);

  return (
    <div>
      <h1>Welcome to Button!</h1>
    </div>
  );
}

export default Button;
