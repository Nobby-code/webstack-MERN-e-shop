import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Norbert Guda',
    email: 'norbert@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Edwin Mwangi',
    email: 'edwin@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
