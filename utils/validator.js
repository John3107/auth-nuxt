const correctPhone = val => /^[\+]{0,1}380([0-9]{9})$/.test(val)
const correctPassword = val => /[a-z]/.test(val) && /[A-Z]/.test(val) && /[0-9]/.test(val) && true

export { correctPhone, correctPassword }
