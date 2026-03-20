import './button.css';

/**
 * Creates a Taller Innovation button element.
 *
 * @param {object} options
 * @param {string} options.label      - Button text
 * @param {'primary'|'alternate'|'secondary'|'alert'} options.variant
 * @param {'mini'|'sm'|'md'|'lg'|'xl'} options.size
 * @param {boolean} options.disabled
 * @param {Function} options.onClick
 */
export const createButton = ({
  label = 'Agendar diagnóstico',
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
} = {}) => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.textContent = label;
  if (disabled) btn.disabled = true;
  if (onClick) btn.addEventListener('click', onClick);

  const classes = ['btn', `btn-${variant}`];
  if (size !== 'md') classes.push(`btn-${size}`);
  btn.className = classes.join(' ');

  return btn;
};
