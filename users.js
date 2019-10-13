const users = [
  { id: 1, name: 'Jo' },
  { id: 2, name: 'Joe' },
  { id: 3, name: 'John' },
]

module.exports = {
  showUsers() {
    const names = users.map(user => user.name)
    console.log(`Users:`)
    names.forEach(name => console.log(name))
  },
  showUserObj(id) {
    console.log("User you are looking for is: ")
    const user = users.find(user => user.id === id)
    console.log(user)
  }
}