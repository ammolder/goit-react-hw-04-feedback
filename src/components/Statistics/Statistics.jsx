import { Wrapper, List, Item } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <Wrapper>
      <List>
        <Item>Good: {good}</Item>
        <Item>Neutral: {neutral}</Item>
        <Item>Bad: {bad}</Item>
        <Item>Total: {total}</Item>
        <Item>Positive feedback: {positivePercentage}%</Item>
      </List>
    </Wrapper>
  );
};
