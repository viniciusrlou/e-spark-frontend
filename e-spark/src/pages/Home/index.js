import React, { useContext } from 'react';

import { AuthContext } from '../../providers/auth';

import { ScrollCategory } from '../../components/ScrollCategory/';
import { HeaderMenu } from '../../components/HeaderMenu/';
import { SlideShow } from '../../components/SlideShow/';
import { LeftMenu } from '../../components/LeftMenu/';
import { CardCars } from '../../components/CardCars/';
import { Login } from '../../components/Login/';
import { Cadastro } from '../../components/Cadastro/';

import './home.css';


const Home = () => {

    const { isLoginActive, isCadastroActive } = useContext(AuthContext);

    return (
        <div className="container-home">
            <HeaderMenu />
            <SlideShow />
            <LeftMenu />
            <ScrollCategory />
            <main>
                <div className="container-cards-cars-home">
                    <CardCars
                        id="0"
                        title="Rimac C Two"
                        description="Uma breve descrição sobre o veiculo, todo carro deve ter uma descrição, Uma breve descrição sobre o veiculo, todo carro deve ter uma descrição"
                        typeCar="premium" />
                    <CardCars
                        id="1"
                        title="Rimac C Two"
                        description="Uma breve descrição sobre o veiculo, todo carro deve ter uma descrição"
                        typeCar="default" />
                    <CardCars
                        id="0"
                        title="Rimac C Two"
                        description="Uma breve descrição sobre o veiculo, todo carro deve ter uma descrição"
                        typeCar="premium" />
                    <CardCars
                        id="0"
                        title="Rimac C Two"
                        description="Uma breve descrição sobre o veiculo, todo carro deve ter uma descrição"
                        typeCar="premium" />
                    <CardCars
                        id="1"
                        title="Rimac C Two"
                        description="Uma breve descrição sobre o veiculo, todo carro deve ter uma descrição"
                        typeCar="default" />
                    <CardCars
                        id="0"
                        title="Rimac C Two"
                        description="Uma breve descrição sobre o veiculo, todo carro deve ter uma descrição"
                        typeCar="premium" />

                    <CardCars
                        id="0"
                        title="Rimac C Two"
                        description="Uma breve descrição sobre o veiculo, todo carro deve ter uma descrição"
                        typeCar="premium" />
                    <CardCars
                        id="1"
                        title="Rimac C Two"
                        description="Uma breve descrição sobre o veiculo, todo carro deve ter uma descrição"
                        typeCar="default" />
                    <CardCars
                        id="0"
                        title="Rimac C Two"
                        description="Uma breve descrição sobre o veiculo, todo carro deve ter uma descrição"
                        typeCar="premium" />
                </div>
            </main>
            {isLoginActive ? <Login /> : null}
            {isCadastroActive ? <Cadastro /> : null}

        </div>
    );
}

export default Home;