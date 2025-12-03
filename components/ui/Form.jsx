'use client';

import React, { useState } from 'react';
import Dropdown from './Dropdown';

const Form = ({
  fields = [],
  onSubmit,
  submitButton = {
    text: 'Submit',
    className: 'bg-primary-500 rounded-full px-4 py-2 text-white',
  },
  formClassName = '',
  formBgColor = 'bg-white',
  defaultValues = {},
}) => {
  const [formData, setFormData] = useState(defaultValues);
  const [errors, setErrors] = useState({});

  const handleInputChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateField = (field, value) => {
    if (field.required && (!value || value.trim() === '')) {
      return `${field.label || field.name} is required`;
    }
    if (field.type === 'email' && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return 'Please enter a valid email address';
    }
    if (field.validate && typeof field.validate === 'function') {
      const validationError = field.validate(value);
      if (validationError) return validationError;
    }
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validate all fields
    fields.forEach((field) => {
      const value = formData[field.name];
      const error = validateField(field, value);
      if (error) {
        newErrors[field.name] = error;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Call onSubmit with form data
    if (onSubmit) {
      onSubmit(formData, e);
    }
  };

  const renderField = (field) => {
    const fieldId = field.id || field.name;
    const fieldValue = formData[field.name] || '';
    const fieldError = errors[field.name];
    const bgColor = field.bgColor || '#FAFAFA';
    const isRequired = field.required !== false; // Default to true unless explicitly false

    const baseInputClasses = `text-text border-border rounded-lg border px-5 py-2 shadow-[0px_3px_8px_0px_#00000014]
 text-lg outline-none ${fieldError ? 'border-red-500' : ''}`;

    switch (field.type) {
      case 'dropdown':
        return (
          <div key={field.name} className="gap flex flex-col">
            <label htmlFor={fieldId} className="text-text text-sm">
              {field.label}
              {isRequired && <span className="text-gray-500">*</span>}
            </label>
            <Dropdown
              options={field.options || []}
              value={fieldValue}
              onChange={(value) => handleInputChange(field.name, value)}
              placeholder={field.placeholder || `Select ${field.label}`}
              className={field.className}
              disabled={field.disabled}
              bgColor={bgColor}
            />
            {fieldError && <span className="text-sm text-red-500">{fieldError}</span>}
          </div>
        );

      case 'textarea':
        return (
          <div key={field.name} className="gap flex flex-col">
            <label htmlFor={fieldId} className="text-text text-sm">
              {field.label}
              {isRequired && <span className="text-gray-500">*</span>}
            </label>
            <textarea
              id={fieldId}
              name={field.name}
              value={fieldValue}
              onChange={(e) => handleInputChange(field.name, e.target.value)}
              className={`${baseInputClasses} ${field.className || ''}`}
              style={{ backgroundColor: bgColor }}
              placeholder={field.placeholder}
              required={isRequired}
              rows={field.rows || 4}
              disabled={field.disabled}
            />
            {fieldError && <span className="text-sm text-red-500">{fieldError}</span>}
          </div>
        );

      case 'select':
        return (
          <div key={field.name} className="gap flex flex-col">
            <label htmlFor={fieldId} className="text-text text-sm">
              {field.label}
              {isRequired && <span className="text-gray-500">*</span>}
            </label>
            <select
              id={fieldId}
              name={field.name}
              value={fieldValue}
              onChange={(e) => handleInputChange(field.name, e.target.value)}
              className={`${baseInputClasses} ${field.className || ''}`}
              style={{ backgroundColor: bgColor }}
              required={isRequired}
              disabled={field.disabled}
            >
              {field.placeholder && <option value="">{field.placeholder}</option>}
              {field.options?.map((option) => (
                <option key={option.value || option} value={option.value || option}>
                  {option.label || option}
                </option>
              ))}
            </select>
            {fieldError && <span className="text-sm text-red-500">{fieldError}</span>}
          </div>
        );

      default:
        return (
          <div key={field.name} className="gap flex flex-col">
            <label htmlFor={fieldId} className="text-text text-sm">
              {field.label}
              {isRequired && <span className="text-gray-500">*</span>}
            </label>
            <input
              type={field.type || 'text'}
              id={fieldId}
              name={field.name}
              value={fieldValue}
              onChange={(e) => handleInputChange(field.name, e.target.value)}
              className={`${baseInputClasses} ${field.className || ''}`}
              style={{ backgroundColor: bgColor }}
              placeholder={field.placeholder}
              required={isRequired}
              disabled={field.disabled}
              min={field.min}
              max={field.max}
              step={field.step}
            />
            {fieldError && <span className="text-sm text-red-500">{fieldError}</span>}
          </div>
        );
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex w-full flex-col gap-4 rounded-xl p-7 shadow-[10px_-10px_75px_0px_#0357F040] ${formBgColor} ${formClassName}`}
    >
      {fields.map((field) => renderField(field))}
      <button
        type="submit"
        className={submitButton.className || 'bg-primary-500 rounded-full p-4 text-white'}
        disabled={submitButton.disabled}
      >
        {submitButton.text || 'Submit'}
      </button>
    </form>
  );
};

export default Form;
