import styled, { css } from 'styled-components';

interface CheckboxProps {
  onClick: () => void;
  checked: boolean;
  onDelete: () => void;
  label: string;
}
export const Checkbox = (props: CheckboxProps) => (
  <CheckboxWrapper>
    <CheckboxContent
      tabIndex={0}
      role="checkbox"
      aria-checked
      onClick={props.onClick}
    >
      <input
        tabIndex={-1}
        type="checkbox"
        checked={props.checked}
        onChange={props.onClick}
      />
      <Checked checked={props.checked}>{props.label}</Checked>
    </CheckboxContent>
    <CheckboxDelete type="button" onClick={props.onDelete}>
      x
    </CheckboxDelete>
  </CheckboxWrapper>
);

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 400px;
  margin: 0 auto 5px;
  cursor: pointer;
`;

const CheckboxContent = styled.div`
  border-radius: 4px;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  padding: 5px 10px 5px 5px;

  input {
    margin-right: 5px;
  }
  &:hover {
    background: rgb(245, 245, 245);
  }
`;

const Checked = styled.span<{ checked: boolean }>`
  ${(p) =>
    p.checked &&
    css`
      text-decoration: line-through;
    `}
`;

const CheckboxDelete = styled.button`
  background: rgb(200, 200, 200);
  border: none;
  cursor: pointer;
  width: 24px;
  height: 24px;
  flex-shrink: 0;

  &:hover {
    background: rgb(172, 172, 172);
  }
`;
