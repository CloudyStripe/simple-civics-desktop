import React from 'react';
import Image from 'react-bootstrap/Image'

export interface ImageProps {
    src: string;
    className?: string;
    height?: string,
    width?: string,
    fluid?: boolean;
    rounded?: boolean;
    roundedCircle?: boolean;
    thumbnail?: boolean;
}

export const BootstrapImage: React.FC<ImageProps> = (props) => {
    const {src, fluid, rounded, className, height, width} = props;
    return(
        <Image
            className={className}
            height={height}
            width={width}
            src={src}
            fluid={fluid}
            rounded={rounded}
        >           
        </Image>
    )
}