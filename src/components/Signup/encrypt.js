import bcrypt from 'bcryptjs';

const encrypt = (password) => {
  const salt = bcrypt.genSaltSync(10);

  const hash = bcrypt.hashSync(password, salt);
  return hash;
};

export default encrypt;
