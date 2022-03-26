import React from 'react';

function Login() {
  return (
    <main className="flex justify-center items-center">
      <form className="flex flex-col border border-[#d3d3d3] w-[250px] rounded-[4px] p-[20px]">
        <h1 className="text-[20px]">Fazer login</h1>
        <label className="flex flex-col text-[10px] font-bold mt-[10px]">
          E-mail ou número de telefone celular
          <input type="text" className="border border-[#9c9c9c] rounded-[2px] mt-[2px] h-[20px]" />
        </label>
        <label className="flex flex-col text-[10px] font-bold mt-[10px]">
          Senha
          <input type="password" className="border border-[#9c9c9c] rounded-[2px] mt-[2px] h-[20px]" />
        </label>
        <button
          type="button"
          className="text-[10px] bg-gradient-to-t from-[#f0c14b] to-[#f7dfa5] hover:brightness-[98%] rounded-[2px] border border-[#a88734] mt-[10px] h-[22px]"
        >
          Fazer Login
        </button>
      </form>
    </main>
  );
}

export default Login;