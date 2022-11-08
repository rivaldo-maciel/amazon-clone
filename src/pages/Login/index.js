import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import Icon from '../../assets/amazon-logo-black.png';
import AlertMessage from '../../components/LOGIN/AlertMessage';

function Login() {
  const [emailNumber, setEmailNumber] = useState('');
  const [password, setPassword] = useState('');
  const [emptyInput, setEmptyInput] = useState(false);
  const emptyMessage = "preencha todos os campos";
  const history = useHistory();

  const validateInputs = () => {
    if (emailNumber === '' || password === '') {
      setEmptyInput(true);
    }
    saveUserData();
  };

  const saveUserData = () => {
    localStorage.setItem('user', JSON.stringify({ emailNumber, password }));
    history.push('/address');
  };

  return (
    <main className="flex flex-col justify-center items-center">
      <img className="w-[8rem] p-[10px]" src={Icon} alt="site-icon" />
      <form className="flex flex-col border border-[#d3d3d3] w-[22rem] h-[20rem] rounded-[2px] p-[20px]">
        <h1 className="text-[2rem]">Fazer login</h1>
        <label className="flex flex-col text-[0.8rem] font-bold mt-[0.8rem]">
          E-mail ou número de telefone celular
          <input
            type="text"
            className="border border-[#9c9c9c] rounded-[4px] mt-[0.3rem] h-[2rem] p-[5px] focus:shadow-[-4px_-1px_40px_-10px_#FD9A15] focus:border focus:border-[#FD9A15] outline-none"
            onChange={({ target }) => setEmailNumber(target.value)}
          />
        </label>
        <label className="flex flex-col text-[9px] font-bold mt-[10px]">
          Senha
          <input
            type="password"
            className="border border-[#9c9c9c] rounded-[4px] mt-[0.3rem] h-[2rem] p-[5px] focus:shadow-[-4px_-1px_40px_-10px_#FD9A15] focus:border focus:border-[#FD9A15] outline-none"
            onChange={({ target }) => setPassword(target.value)}
            />
        </label>
        {
          emptyInput
          && <AlertMessage message={emptyMessage}/>
        }
        <button
          type="button"
          className="text-[1rem] bg-gradient-to-t from-[#f0c14b] to-[#f7dfa5] hover:brightness-[96%] rounded-[2px] border border-[#a88734] mt-[2rem] h-[2rem]"
          onClick={(e) => {
            e.preventDefault();
            validateInputs();
          }}
        >
          Fazer Login
        </button>
      </form>
    </main>
  );
}

export default Login;