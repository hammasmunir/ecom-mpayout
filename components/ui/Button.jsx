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
  iconPosition = 'left',
  ...props
}) => {
  // Variant classNames - you can extend these later
  const variantClasses = {
    default: 'bg-primary-500 text-white px-4 py-2 rounded',
    outline: 'border border-primary-500 text-primary-500 px-4 py-2 rounded',
    ghost: 'text-primary-500 px-4 py-2',
    // Add more variants as needed
  };

  const baseClasses = variantClasses[variant] || variantClasses.default;
  const combinedClasses = `${baseClasses} ${className}`.trim();

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      {text && <span>{text}</span>}
      {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
    </>
  );

  // If href is provided, render as Link
  if (href) {
    return (
      <Link href={href} className={combinedClasses} {...props}>
        {content}
      </Link>
    );
  }

  // Otherwise render as button
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      {...props}
    >
      {content}
    </button>
  );
};

export default Button;
