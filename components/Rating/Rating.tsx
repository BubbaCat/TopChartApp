import { RatingProps } from './Rating.props';
import styles from './Rating.module.css';
import cn from 'classnames';
import StarIcon from './star.svg';
import { useEffect, useState, KeyboardEvent } from 'react';

export const Rating = ({ isEditable = false, rating, setRating, ...props }: RatingProps): JSX.Element => {
	const [RatingArray, SetRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));



	const changeDisplay = (i: number) => {
		return isEditable && consturctRating(i);
	};

	const handleClick = (i: number) => {
		return isEditable && setRating && setRating(i);
	};

	const handleSpace = (i: number, event: KeyboardEvent<SVGElement>) => {
		return event.code === "Space" && setRating && setRating(i);
	};


	const consturctRating = (currentRating: number) => {
		const updatedArray = RatingArray.map((r: JSX.Element, i: number) => {
			return (
				<span className={cn(styles.star, {
					[styles.filled]: i < currentRating,
					[styles.editable]: isEditable
				})}
					onMouseEnter={() => changeDisplay(i + 1)}
					onMouseLeave={() => changeDisplay(rating)}
					onClick={() => handleClick(i + 1)}>
					<StarIcon
						onKeyDown={(e: KeyboardEvent<SVGElement>) => isEditable && handleSpace(i + 1, e)}
						tabindex={isEditable ? 0 : -1}
					/>
				</span>
			);
		});
		SetRatingArray(updatedArray);
	};
	
	useEffect(() => {
		consturctRating(rating);
	}, [rating]);

	return (
		<div
			{...props}>
			{RatingArray.map((rating, i) => (<span key={i}>{rating}</span>))}
		</div>
	);
};