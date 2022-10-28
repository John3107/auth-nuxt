export type StateType = {
  taxStatusList: CurrentRegionType[]
  regionList: CurrentRegionType[]
  currentRegion: CurrentRegionType
  currentTaxStatus: CurrentRegionType
}

export type CurrentRegionType = {
  id: string
  name: { ru: string, uk: string }
}

export type RegistrationFormType = {
  email: string
  phone: string
  password: string
  firstName: string
  lastName: string
  middleName: string
  locale: string
  companyName: string
  companyTaxStatus: string
  companyUsreou: string
  companyItn: string
  companyUrl: string
  companyRegionId: string
}

export type CompanyRegionType = {
  id: string
  name: string
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
