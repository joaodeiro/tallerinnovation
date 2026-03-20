import { fn } from 'storybook/test';
import { createButton } from './Button';

export default {
  title: 'Design System/Button',
  tags: ['autodocs'],
  render: (args) => createButton(args),
  argTypes: {
    label: { control: 'text', description: 'Button label' },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'alternate', 'secondary', 'alert'],
      description: 'Visual variant',
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      control: { type: 'select' },
      options: ['mini', 'sm', 'md', 'lg', 'xl'],
      description: 'Size modifier',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    onClick: { action: 'clicked' },
  },
  args: {
    label: 'Agendar diagnóstico',
    variant: 'primary',
    size: 'md',
    disabled: false,
    onClick: fn(),
  },
};

// ── Variants ──────────────────────────────────────────────
export const Primary = {
  args: { variant: 'primary', label: 'Agendar diagnóstico' },
};

export const Alternate = {
  args: { variant: 'alternate', label: 'Saiba mais' },
};

export const Secondary = {
  args: { variant: 'secondary', label: 'Ver metodologia' },
};

export const Alert = {
  args: { variant: 'alert', label: 'Cancelar projeto' },
};

// ── Sizes ─────────────────────────────────────────────────
export const SizeMini = {
  name: 'Size / Mini',
  args: { variant: 'primary', size: 'mini', label: 'Mini' },
};

export const SizeSm = {
  name: 'Size / Small',
  args: { variant: 'primary', size: 'sm', label: 'Small' },
};

export const SizeMd = {
  name: 'Size / Medium (default)',
  args: { variant: 'primary', size: 'md', label: 'Medium' },
};

export const SizeLg = {
  name: 'Size / Large',
  args: { variant: 'primary', size: 'lg', label: 'Large' },
};

export const SizeXl = {
  name: 'Size / XL',
  args: { variant: 'primary', size: 'xl', label: 'Extra Large' },
};

// ── States ────────────────────────────────────────────────
export const Disabled = {
  args: { variant: 'primary', label: 'Indisponível', disabled: true },
};

export const DisabledSecondary = {
  name: 'Disabled / Secondary',
  args: { variant: 'secondary', label: 'Indisponível', disabled: true },
};

// ── All variants matrix ───────────────────────────────────
export const AllVariants = {
  name: 'All Variants',
  render: () => {
    const variants = ['primary', 'alternate', 'secondary', 'alert'];
    const sizes    = ['mini', 'sm', 'md', 'lg', 'xl'];

    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'display: flex; flex-direction: column; gap: 24px;';

    variants.forEach((variant) => {
      const row = document.createElement('div');
      row.style.cssText = 'display: flex; align-items: center; gap: 16px; flex-wrap: wrap;';

      sizes.forEach((size) => {
        row.appendChild(
          createButton({ label: `${variant} / ${size}`, variant, size })
        );
      });

      wrapper.appendChild(row);
    });

    return wrapper;
  },
};
