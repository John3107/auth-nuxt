export type StateType = {
  taxStatusList: string[]
  regionList: string[]
}

export type FormType = {
  email: string
  phone: string
  password: string
  firstName: string
  lastName: string
  middleName: string
  locale: string
  companyName: string
  companyTaxStatus: string
 // code: string
  companyUrl: string
  companyRegionId: string
  companyItn: string
}

export type ValidationType = {
  form: {
    email: { required: boolean, email: boolean },
    phone: { required: boolean, correctPhone: boolean },
    password: { required: boolean, correctPassword: boolean, minLength: boolean },
    firstName: { required: boolean },
    lastName: { required: boolean },
    middleName: { required: boolean },
    companyName: { required: boolean },
    companyTaxStatus: { required: boolean },
    companyUrl: { url: boolean },
    companyRegionId: { required: boolean },
  },
  confirmationPassword: {
    required: boolean, sameAs: boolean
  },
  ipn: { minLength: boolean },
  companyUsreou: { minLength: boolean },
}
