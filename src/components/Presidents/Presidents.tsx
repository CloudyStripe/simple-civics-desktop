import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Stack } from 'react-bootstrap';
import ScrollContainer from 'react-indiana-drag-scroll'
import { BootstrapImage } from '../Image/BootstrapImage';
import { BootstrapInput } from '../Input/BootstrapInput';
import { PresidentPortraitsArray } from './PresidentPortraitsExport';
import presidents from './Presidents.json';
import flag from '../../images/american-flag.png';
import { Link } from 'react-router-dom';
import './Presidents.scss';

export interface PresidentsInterface {
    number: number;
    name: string;
    vicePresident: string;
    serviceTerm: string;
    biography: string;
}

export const Presidents: React.FC = () => {

    const originalPresidentsArray: PresidentsInterface[] = [...presidents];
    const [presidentsArray, setPresidentsArray] = useState<Array<PresidentsInterface>>(presidents)

    const handleSearch = (e: string) => {

        if(e === ''){
            setPresidentsArray(originalPresidentsArray)
        }
        else{
            const updatedPresidents = originalPresidentsArray.filter(x => {
                return x.name.toLowerCase().includes(e.toLowerCase())
            })
            setPresidentsArray(updatedPresidents);
        }
    }

    return (
        <div className="presidentsContainer">
            <Container className='d-flex align-items-center flex-column flex-sm-row justify-content-between pt-5'>
                <h1 className='mb-1 mb-sm-0'>Hall of Presidents</h1>
                <BootstrapInput className={'presidentSearch d-flex my-2 my-sm-0 w-50'} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleSearch(e.target.value)} type={'text'} placeholder={'Search...'}></BootstrapInput>
            </Container>
            <ScrollContainer className='pt-1 pt-sm-4' horizontal={true} vertical={false}>
                <Stack className="stack" direction="horizontal" gap={5}>
                    {presidentsArray.map((x, i) => <div className={`individual-presidents d-flex flex-column align-items-center ${i === 0 ? `firstPresidentMargin` : ``}`}>
                        <Link to={`/PresidentsDetails/${x.number - 1}`}>
                            <BootstrapImage
                                className={'portrait'}
                                rounded={true}
                                width={'auto'}
                                src={PresidentPortraitsArray[x.number - 1]}
                            />
                        </Link>
                        <h4 className="mb-0">{x.name}</h4>
                    </div>)}
                </Stack>
            </ScrollContainer>
            <div className='flag p-absolute'>
                <BootstrapImage
                    src={flag}
                ></BootstrapImage>
            </div>
        </div>
    )

}