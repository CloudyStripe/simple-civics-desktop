import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Stack } from 'react-bootstrap';
import ScrollContainer from 'react-indiana-drag-scroll'
import { BootstrapImage } from '../Image/BootstrapImage';
import { BootstrapInput } from '../Input/BootstrapInput';
import { PresidentPortraitsArray } from './PresidentPortraitsExport';
import presidents from './Presidents.json';
import flag from '../../images/american-flag.png';
import './Presidents.scss';

export interface PresidentsInterface {
    'number': number;
    'name': string;
    'vice-president': string;
    'service-term': string;
    'biography': string;
}

export const Presidents: React.FC = () => {

    const originalPresidentsArray: PresidentsInterface[] = [...presidents];
    const [presidentsArray, setPresidentsArray] = useState<Array<PresidentsInterface>>(presidents)

    const handleSearch = (e: string) => {

        if(e === ''){
            setPresidentsArray(originalPresidentsArray)
        }
        else{
            const updatedPresidents = presidentsArray.filter(x => {
                return x.name.toLowerCase().includes(e.toLowerCase())
            })
            setPresidentsArray(updatedPresidents);
        }
    }
    

    return (
        <div className="presidentsContainer">
            <Container className='d-flex justify-content-between pt-5'>
                <h1 className='presidents-header'>Hall of Presidents</h1>
                <BootstrapInput className={'d-flex w-50'} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleSearch(e.target.value)} type={'text'} placeholder={'Search Presidents...'}></BootstrapInput>
            </Container>
            <ScrollContainer className='pt-5' horizontal={true} vertical={false}>
                <Stack style={{ height: '60vh' }} direction="horizontal" gap={5}>
                    {presidentsArray.map((x, i) => <div className={`individual-presidents d-flex flex-column align-items-center ${i === 0 ? `firstPresidentMargin` : ``}`}>
                        <BootstrapImage
                            rounded={true}
                            height={'400px'}
                            width={'auto'}
                            src={PresidentPortraitsArray[x.number - 1]}></BootstrapImage><h4>{x.name}</h4>
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