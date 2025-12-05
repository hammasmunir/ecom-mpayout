import React from 'react';
import Link from 'next/link';

const Button = ({
  text,
  icon,
  href,
  variant = 'default',
  className = '',
  onClick,
  disabled = false,
  type = 'button',
  iconPosition = 'right',
  ...props
}) => {
  const variants = {
    default: 'bg-primary-500 text-white px-4 py-2 rounded',
    outline: 'border border-primary-500 text-primary-500 px-4 py-2 rounded',
    ghost: 'text-primary-500 px-4 py-2',
    primary:
      'border-[4px] border-[#DBE8FF] bg-primary-500 text-white py-3 px-4 rounded-full transition flex items-center gap shadow-[inset_0_0_8px_3px_#FFFFFF66] font-semibold cursor-pointer shadow-btn',
  };

  const classes = `${variants[variant] || variants.default} ${className}`.trim();

  const content = (
    <span className="flex items-center gap-2">
      {icon && iconPosition === 'left' && icon}
      {text}
      {icon && iconPosition === 'right' && icon}
    </span>
  );

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes} {...props}>
      {content}
    </button>
  );
};

export default Button;
