import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom'

import * as C from './styles';

import CapaDark from '../../assets/dark-capa.png'
import MaskDark from '../../assets/mask-dark.png'

// interface RefObject<T> {
//     readonly current: T | null;
//  }

const SignIn: React.FC = () => {

    const showPassRef = useRef<any>();
    const [eye, setEye] = useState("password");
    const [persistedLogin, setPersistedLogin] = useState(false);

    const showPass = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        showPassRef.current.type = showPassRef.current.type === "password" ? "text" : "password"        
        setEye(showPassRef.current.type);
    }

    const saveSignIn = () => setPersistedLogin(!persistedLogin);

  return (
    <C.Container>
        <C.LeftSideSignIn>
            <C.ContentImage>
                <img src={CapaDark} alt="capa-dark" id="image"/>
                <img src={MaskDark} alt="mask-dark" id="mask"/>
            </C.ContentImage>
        </C.LeftSideSignIn>
        <C.RightSideSignIn>
            <C.ContainerRight>
                <h2>Bem-vindo à Bind Tech! </h2>
                <h3>Por favor, entre na sua conta e comece a aventura</h3>
                <form method='POST'>
                    <button onClick={showPass} id="btn-inherit">
                        {eye === "password" && <C.ShadowPass/>}
                        {eye === "text" && <C.ShowPass/>}
                    </button>
                    <C.InputGroup>
                        <label>E-mail</label>
                        <input type="email" name="email" />
                    </C.InputGroup>
                    <C.InputGroup>
                        <label>Senha</label>
                        <input type="password" name="password" ref={showPassRef}/>
                    </C.InputGroup>
                    <C.InputRadioArea persistedlogin={`${persistedLogin}`} as="div">
                        <div id="content-check">
                           <div id="check" onClick={saveSignIn}>{persistedLogin && <C.CheckIcon/>}</div>
                            <label>Lembrar minha senha</label>
                        </div>
                        <Link to="">Esqueceu sua senha?</Link>
                    </C.InputRadioArea>
                        <button id="signin">Conecte-se</button>
                </form>
                <C.ContentRegisterArea>
                    <h4>Novo em nossa plataforma ? <Link to="">Crie a sua conta aqui</Link></h4>
                </C.ContentRegisterArea>
            </C.ContainerRight>
        </C.RightSideSignIn>
    </C.Container>
  );
}

export default SignIn;