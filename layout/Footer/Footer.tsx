import React from 'react';
import {FooterProps } from './Footer.props';
import styles from './Footer.module.css';
import cn from 'classnames';

export const Footer = ({className, ...props}:FooterProps):JSX.Element =>{
	const currentDate = new Date(Date.now());
return (
		<footer 
		className={cn(className,styles.footer)}
		{...props}>
			<div>
			OwlTop © 2020 - {currentDate.getFullYear()} Все права защищены
			</div>
			<a href="#" target="_" >Пользовательское соглашение</a>
			<a href="#" target="_" >Политика конфиденциальности</a>

		</footer>
	);
};  