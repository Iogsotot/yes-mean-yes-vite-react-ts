import RunawayButton from './RunawayButton';
import './buttons.scss';

const Buttons = () => {
  return (
    <div className="buttons-group">
      <button type="button" className="btn btn--red left-btn">
				<span className="btn__txt">Да</span>
				<i className="btn__bg" aria-hidden="true"></i>
				<i className="btn__bg" aria-hidden="true"></i>
				<i className="btn__bg" aria-hidden="true"></i>
				<i className="btn__bg" aria-hidden="true"></i>
			</button>
      <RunawayButton />
    </div>
  );
};

export default Buttons;