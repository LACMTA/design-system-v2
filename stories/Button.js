import '../assets/uswds/css/styles.css';

export const createButton = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  onClick,
}) => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = label;
  btn.addEventListener('click', onClick);

  const mode = primary ? 'usa-button' : 'usa-button--secondary';
  btn.className = ['usa-button', `usa-button--${size}`, mode].join(' ');

  btn.style.backgroundColor = backgroundColor;

  return btn;
};
