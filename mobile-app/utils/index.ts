import {z} from 'zod'

export const isValidPassword = (password: string) => {
    const passwordSchema = z
    .string()
    .min(8, { message: 'Password must be at least 8 characters long' })
    .max(50, { message: 'Password must be less than 50 characters long' })
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]+$/,
      { message: 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one of the following special characters: @ $ ! % * ? & .' }
    );
  
      try {
          passwordSchema.parse(password)
          return true
      }catch (e){
          return false
      }
  }
  
  /**
   * @name isValidEmail
   * @param email 
   * @returns  {boolean}
   */
  export const isValidEmail = (email: string) => {
      const emailSchema = z
      .string()
      .email({ message: 'Please enter a valid email address' })
      .max(50, { message: 'Email must be less than 50 characters long' });
  
      try {
          emailSchema.parse(email)
          return true
      }catch (e){
          return false
      }
  }
  