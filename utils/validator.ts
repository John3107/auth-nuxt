const correctPhone = (val: string) => /^[\+]{0,1}380([0-9]{9})$/.test(val)
const correctPassword = (val: string) => /[a-z]/.test(val) && /[A-Z]/.test(val) && /[0-9]/.test(val) && true

export { correctPhone, correctPassword }
