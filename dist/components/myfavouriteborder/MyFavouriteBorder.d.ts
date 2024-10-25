import { default as React, MouseEventHandler } from 'react';
export interface MyFavouriteBorderProps {
    color: string;
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}
declare const MyFavouriteBorder: React.FC<MyFavouriteBorderProps>;
export default MyFavouriteBorder;
