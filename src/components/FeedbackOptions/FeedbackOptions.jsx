import PropTypes from 'prop-types';
import { Button, HoverText } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(i => {
        return (
          <Button key={i} name={i} type="button" onClick={onLeaveFeedback}>
            <HoverText>{i}</HoverText>
            <span>{i}</span>
          </Button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
};
