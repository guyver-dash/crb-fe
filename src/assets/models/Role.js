export class Role {
  constructor ({
    address = null,
    contacts = [],
    name = null
  } = {}) {
    this.address = address
    this.contacts = contacts
    this.name = name
  }
}

export function createRole (data) {
  // const address = createAddress(data.address)
  // const contacts = data.contacts.map(x => createContact(x))
  // const name = createName(data.name)

  // return Object.freeze(new User({
  //   address,
  //   contacts,
  //   name
  // }))
}
