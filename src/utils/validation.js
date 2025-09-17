import Joi from "joi";

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d{4,})(?=.*[!@%$#^&*\-_])[A-Za-z\d!@%$#^&*\-_]{8,}$/;

const phoneRegex = /^0\d{1,2}-?\d{7}$/;

export const registerSchema = Joi.object({
  first: Joi.string()
    .min(2)
    .max(255)
    .pattern(/^[A-Za-z\s]+$/)
    .required()
    .messages({
      "string.empty": "First name is required",
      "string.min": "First name must be at least 2 characters",
      "string.max": "First name cannot exceed 255 characters",
      "string.pattern.base": "First name must contain only letters",
    }),

  middle: Joi.string()
    .min(2)
    .max(255)
    .pattern(/^[A-Za-z\s]*$/)
    .allow("")
    .messages({
      "string.min": "Middle name must be at least 2 characters",
      "string.max": "Middle name cannot exceed 255 characters",
      "string.pattern.base": "Middle name must contain only letters",
    }),

  last: Joi.string()
    .min(2)
    .max(255)
    .pattern(/^[A-Za-z\s]+$/)
    .required()
    .messages({
      "string.empty": "Last name is required",
      "string.min": "Last name must be at least 2 characters",
      "string.max": "Last name cannot exceed 255 characters",
      "string.pattern.base": "Last name must contain only letters",
    }),

  phone: Joi.string().pattern(phoneRegex).required().messages({
    "string.empty": "Phone number is required",
    "string.pattern.base": "Invalid phone number format",
  }),

  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "string.empty": "Email is required",
      "string.email": "Invalid email format",
    }),

  password: Joi.string().pattern(passwordRegex).required().messages({
    "string.empty": "Password is required",
    "string.pattern.base":
      "Password must be at least 8 characters with 1 uppercase, 1 lowercase, 4 numbers, and 1 special character (!@%$#^&*-_)",
  }),

  imageUrl: Joi.string().uri().allow("").messages({
    "string.uri": "Invalid image URL format",
  }),

  imageAlt: Joi.string().min(2).max(255).allow("").messages({
    "string.min": "Image description must be at least 2 characters",
    "string.max": "Image description cannot exceed 255 characters",
  }),

  state: Joi.string().min(2).max(255).allow("").messages({
    "string.min": "State must be at least 2 characters",
    "string.max": "State cannot exceed 255 characters",
  }),

  country: Joi.string()
    .min(2)
    .max(255)
    .pattern(/^[A-Za-z\s]+$/)
    .required()
    .messages({
      "string.empty": "Country is required",
      "string.min": "Country must be at least 2 characters",
      "string.max": "Country cannot exceed 255 characters",
      "string.pattern.base": "Country must contain only letters",
    }),

  city: Joi.string()
    .min(2)
    .max(255)
    .pattern(/^[A-Za-z\s]+$/)
    .required()
    .messages({
      "string.empty": "City is required",
      "string.min": "City must be at least 2 characters",
      "string.max": "City cannot exceed 255 characters",
      "string.pattern.base": "City must contain only letters",
    }),

  street: Joi.string()
    .min(2)
    .max(255)
    .pattern(/^[A-Za-z\s]+$/)
    .required()
    .messages({
      "string.empty": "Street is required",
      "string.min": "Street must be at least 2 characters",
      "string.max": "Street cannot exceed 255 characters",
      "string.pattern.base": "Street must contain only letters",
    }),

  houseNumber: Joi.number().integer().min(1).required().messages({
    "number.base": "House number must be a number",
    "number.integer": "House number must be a whole number",
    "number.min": "House number must be at least 1",
    "any.required": "House number is required",
  }),

  zip: Joi.any().optional(),

  isBusiness: Joi.boolean(),
});

export const profileSchema = Joi.object({
  first: Joi.string()
    .min(2)
    .max(255)
    .pattern(/^[A-Za-z\s]+$/)
    .required()
    .messages({
      "string.empty": "First name is required",
      "string.min": "First name must be at least 2 characters",
      "string.max": "First name cannot exceed 255 characters",
      "string.pattern.base": "First name must contain only letters",
    }),

  middle: Joi.string()
    .min(2)
    .max(255)
    .pattern(/^[A-Za-z\s]*$/)
    .allow("")
    .messages({
      "string.min": "Middle name must be at least 2 characters",
      "string.max": "Middle name cannot exceed 255 characters",
      "string.pattern.base": "Middle name must contain only letters",
    }),

  last: Joi.string()
    .min(2)
    .max(255)
    .pattern(/^[A-Za-z\s]+$/)
    .required()
    .messages({
      "string.empty": "Last name is required",
      "string.min": "Last name must be at least 2 characters",
      "string.max": "Last name cannot exceed 255 characters",
      "string.pattern.base": "Last name must contain only letters",
    }),

  phone: Joi.string().pattern(phoneRegex).required().messages({
    "string.empty": "Phone number is required",
    "string.pattern.base": "Invalid phone number format",
  }),

  password: Joi.string().pattern(passwordRegex).optional().allow("").messages({
    "string.pattern.base":
      "Password must be at least 8 characters with 1 uppercase, 1 lowercase, 4 numbers, and 1 special character (!@%$#^&*-_)",
  }),

  imageUrl: Joi.string().uri().allow("").messages({
    "string.uri": "Invalid image URL format",
  }),

  imageAlt: Joi.string().min(2).max(255).allow("").messages({
    "string.min": "Image description must be at least 2 characters",
    "string.max": "Image description cannot exceed 255 characters",
  }),

  state: Joi.string().min(2).max(255).allow("").messages({
    "string.min": "State must be at least 2 characters",
    "string.max": "State cannot exceed 255 characters",
  }),

  country: Joi.string()
    .min(2)
    .max(255)
    .pattern(/^[A-Za-z\s]+$/)
    .required()
    .messages({
      "string.empty": "Country is required",
      "string.min": "Country must be at least 2 characters",
      "string.max": "Country cannot exceed 255 characters",
      "string.pattern.base": "Country must contain only letters",
    }),

  city: Joi.string()
    .min(2)
    .max(255)
    .pattern(/^[A-Za-z\s]+$/)
    .required()
    .messages({
      "string.empty": "City is required",
      "string.min": "City must be at least 2 characters",
      "string.max": "City cannot exceed 255 characters",
      "string.pattern.base": "City must contain only letters",
    }),

  street: Joi.string()
    .min(2)
    .max(255)
    .pattern(/^[A-Za-z\s]+$/)
    .required()
    .messages({
      "string.empty": "Street is required",
      "string.min": "Street must be at least 2 characters",
      "string.max": "Street cannot exceed 255 characters",
      "string.pattern.base": "Street must contain only letters",
    }),

  houseNumber: Joi.number().integer().min(1).required().messages({
    "number.base": "House number must be a number",
    "number.integer": "House number must be a whole number",
    "number.min": "House number must be at least 1",
    "any.required": "House number is required",
  }),

  zip: Joi.number().integer().min(1).allow("").messages({
    "number.base": "ZIP code must be a number",
    "number.integer": "ZIP code must be a whole number",
    "number.min": "ZIP code must be at least 1",
  }),

  isBusiness: Joi.boolean(),
});

export const loginSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "string.empty": "Email is required",
      "string.email": "Invalid email format",
    }),

  password: Joi.string().min(6).required().messages({
    "string.empty": "Password is required",
    "string.min": "Password must be at least 6 characters",
  }),
});

// Add this to your validation file - a flat schema for the form
export const cardFormSchema = Joi.object({
  title: Joi.string().min(2).max(255).required().messages({
    "string.empty": "Title is required",
    "string.min": "Title must be at least 2 characters",
    "string.max": "Title cannot exceed 255 characters",
  }),

  subtitle: Joi.string().min(2).max(255).required().messages({
    "string.empty": "Subtitle is required",
    "string.min": "Subtitle must be at least 2 characters",
    "string.max": "Subtitle cannot exceed 255 characters",
  }),

  description: Joi.string().min(2).max(1024).required().messages({
    "string.empty": "Description is required",
    "string.min": "Description must be at least 2 characters",
    "string.max": "Description cannot exceed 1024 characters",
  }),

  phone: Joi.string().pattern(phoneRegex).required().messages({
    "string.empty": "Phone number is required",
    "string.pattern.base": "Invalid phone number format",
  }),

  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "string.empty": "Email is required",
      "string.email": "Invalid email format",
    }),

  web: Joi.string().uri().allow("").messages({
    "string.uri": "Invalid website URL format",
  }),

  // Flat image fields
  imageUrl: Joi.string().uri().required().messages({
    "string.empty": "Image URL is required",
    "string.uri": "Invalid image URL format",
  }),

  imageAlt: Joi.string().min(2).max(255).required().messages({
    "string.empty": "Image description is required",
    "string.min": "Image description must be at least 2 characters",
    "string.max": "Image description cannot exceed 255 characters",
  }),

  // Flat address fields
  state: Joi.string().min(2).max(255).allow("").messages({
    "string.min": "State must be at least 2 characters",
    "string.max": "State cannot exceed 255 characters",
  }),

  country: Joi.string()
    .min(2)
    .max(255)
    .pattern(/^[A-Za-z\s]+$/)
    .required()
    .messages({
      "string.empty": "Country is required",
      "string.min": "Country must be at least 2 characters",
      "string.max": "Country cannot exceed 255 characters",
      "string.pattern.base": "Country must contain only letters",
    }),

  city: Joi.string()
    .min(2)
    .max(255)
    .pattern(/^[A-Za-z\s]+$/)
    .required()
    .messages({
      "string.empty": "City is required",
      "string.min": "City must be at least 2 characters",
      "string.max": "City cannot exceed 255 characters",
      "string.pattern.base": "City must contain only letters",
    }),

  street: Joi.string()
    .min(2)
    .max(255)
    .pattern(/^[A-Za-z\s]+$/)
    .required()
    .messages({
      "string.empty": "Street is required",
      "string.min": "Street must be at least 2 characters",
      "string.max": "Street cannot exceed 255 characters",
      "string.pattern.base": "Street must contain only letters",
    }),

  houseNumber: Joi.number().integer().min(1).required().messages({
    "number.base": "House number must be a number",
    "number.integer": "House number must be a whole number",
    "number.min": "House number must be at least 1",
    "any.required": "House number is required",
  }),

  zip: Joi.alternatives()
    .try(Joi.number().integer().min(1), Joi.string().allow("").optional())
    .optional()
    .messages({
      "number.base": "ZIP code must be a number",
      "number.integer": "ZIP code must be a whole number",
      "number.min": "ZIP code must be at least 1",
    }),
});
