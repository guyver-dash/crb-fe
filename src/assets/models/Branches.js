import {
  createAddress
} from "./Address";
import {
  createBusinessInfo
} from "./BusinessInfo";

/* eslint-disable */
export class Branches {
  constructor({
    address = null,
    business_info = null,
    desc = '',
    company = null,
    id = null,
    name = ''
  } = {}) {
    this.address = address
    this.business_info = business_info
    this.company = company
    this.desc = desc
    this.id = id
    this.images = images
    this.name = name
  }
}

export function createHolding(data) {
  const address = createAddress(data.address)
  const business_info = createBusinessInfo(data.business_info)
  const companies = createCompanies(data.province)
  const images = createCity(data.city)
  const brgy = createBarangay(data.brgy)

  return Object.freeze(new Holding({
    address: ,
    business_info: ,
    companies: ,
    desc: ,
    id: ,
    images: ,
    name: data.name
  }))
}
