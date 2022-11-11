import PropTypes from 'prop-types';
import { Button, HoverText } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map((btn, i) => {
        return (
          <Button key={btn} type="button" onClick={onLeaveFeedback}>
            <HoverText>{ucFirst(btn)}</HoverText>
            <span>{ucFirst(btn)}</span>
          </Button>
        );
      })}
    </div>
  );
};

function ucFirst(str) {
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
};
