import React, {useState} from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';
import { TextInputButton, TextInput } from '../Input';

import SimpleModal from '../Modal';
import { ButtonPrimary } from '../Button';

import MenuItems from './menuItems';

import {
    NavBar,
    Logo,
    NavMenu,
    MenuIcon,
    Title,
    GitConnected,
    Main
} from './styles';

const Navbar = ({ id='navbar' }) => {

    const handleOutsideClick = (e) => {
        if (e.target.id === id) setMenuButtonClicked(false);
      }

    const [isModalVisible, setIsModalVisible] = useState(false);

    const [menuButtonClicked, setMenuButtonClicked] = useState(false);
    const [menuItemClicked, setMenuItemClicked] = useState(false);

    function menuHandleClick() {
        setMenuButtonClicked(!menuButtonClicked);
    }

    function itemHandleClick() {
        setMenuItemClicked(!menuItemClicked);
        setMenuButtonClicked(false);
    }

    const [url, setUrl] = useState('');

    const onChange = (e) => {
        setUrl(e.target.value)
    }

    menuButtonClicked ? document.body.style.overflow = 'hidden' :  document.body.style.overflow = 'unset';

    return (
        <Main>
        <div id={id} className={menuButtonClicked ? 'layer' : ''} onClick={handleOutsideClick}>
        <NavBar className={menuButtonClicked ? 'active' : ''}>

            <Logo>
                <h1>GM</h1>
            </Logo>

            <Title>
                <a href="/">
                    Portfolio <span>DEV_</span>
                </a>
            </Title>
            
            <MenuIcon onClick={menuHandleClick}>
                {menuButtonClicked ?  <FaTimes/> : <FaBars />}
            </MenuIcon>

            <NavMenu className={menuButtonClicked ? 'active' : ''}>
            {MenuItems.map((item, index) => {
                return(
                    <li key={index}>
                        {
                        item.cName=="mobile"?
                        <a className={item.cName} onClick={()=> setIsModalVisible(true)}>{item.title}</a>
                        :
                        <a className={item.cName} href={item.url} onClick={()=> itemHandleClick()}>{item.title}</a>
                }
                    </li>
                )
            })}
            </NavMenu>

            {isModalVisible? (
                <SimpleModal onClose={()=> setIsModalVisible(false)}>
                    <div>
                        <div className="item">
                            <h1>Insira o link de sua API Gitconnected</h1>
                        </div>
                        <div className="item">
                            <TextInput placeholder="URL da API Gitconnected" size="70%" align="center" value={url} onChange={onChange} link={`?apiurl=${url}`}/>
                        </div>
                        <div className="item">
                            <ButtonPrimary link={`?apiurl=${url}`} onClick={()=>{setIsModalVisible(false); setMenuButtonClicked(false)}}>Carregar CV</ButtonPrimary>
                        </div>
                    </div>
                </SimpleModal>
            ) : null}
            
            <GitConnected>
                <TextInputButton placeholder="URL da API Gitconnected" size="286px" value={url} onChange={onChange} button="Carregar CV" link={`?apiurl=${url}`}/>
            </GitConnected>

            

        </NavBar>
        </div>
        </Main>
    );
  };
  
  export default Navbar;