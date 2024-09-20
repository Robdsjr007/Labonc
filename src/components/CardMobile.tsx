import "../pages/Quiz/Quiz.sass";

const CardMobile = () => {
	return (
		<>
			<article className="radio_input">
				<div className="info">
					<span className="question">
						Como você prefere passar seu tempo livre?
					</span>
					<span className="steps">1/10</span>
				</div>
				<input type="radio" id="value-1" name="value-radio" value="value-1" />
				<label htmlFor="value-1">Computer Style Sheets</label>
				<input type="radio" id="value-2" name="value-radio" value="value-2" />
				<label htmlFor="value-2">Cascading Style Sheets</label>
				<input type="radio" id="value-3" name="value-radio" value="value-3" />
				<label htmlFor="value-3">Creative Style Sheets</label>
				<span className="result success">Congratulations!</span>
				<span className="result error">Bad answer</span>
			</article>
		</>
	);
};

export default CardMobile;
