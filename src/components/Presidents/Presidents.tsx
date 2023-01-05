import React from 'react';
import { Container } from 'react-bootstrap';
import { Stack } from 'react-bootstrap';
import ScrollContainer from 'react-indiana-drag-scroll'
import { BootstrapImage } from '../Image/Image';
import { BootstrapInput } from '../Input/BootstrapInput';
import { PresidentPortraitsArray } from './PresidentPortraitsExport';
import presidents from './Presidents.json'


export const Presidents: React.FC = () => {
    
    return (
        <>
            <Container className='d-flex justify-content-between pt-5'>
                <h1>Hall of Presidents</h1>
                <BootstrapInput className={'d-flex w-50'} type={'text'} placeholder={'Search Presidents...'}></BootstrapInput>
            </Container>
            <ScrollContainer horizontal={true} vertical={false}>
                <Stack style={{ height: '60vh' }} direction="horizontal" gap={5}>
                    {presidents.map(x => <BootstrapImage rounded={true} height={'400px'} width={'auto'} src={PresidentPortraitsArray[x.number - 1]}></BootstrapImage>)}
                </Stack>
            </ScrollContainer>
        </>
    )

}