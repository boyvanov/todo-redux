import React, { PureComponent } from 'react';
import { func, string, number, bool } from 'prop-types';
import { ItemWrap, Item, CheckBlock, RemoveButton, Label } from './styles';

export class ToDoItem extends PureComponent {
  render() {
    const { value, id, checked, onRemoveClick, onChecked } = this.props;
    console.log('render');
    return (
      <ItemWrap>
        <Item>
          <Label>
            <CheckBlock>
              <input
                type="checkbox"
                checked={checked}
                onChange={() => onChecked(id)}
              />
            </CheckBlock>
            <div>{value}</div>
          </Label>
          <RemoveButton
            className="remove"
            type="button"
            onClick={() => onRemoveClick(id)}
          >
            X
          </RemoveButton>
        </Item>
      </ItemWrap>
    );
  }
}

ToDoItem.propTypes = {
  value: string.isRequired,
  checked: bool.isRequired,
  id: number.isRequired,
  onRemoveClick: func.isRequired,
  onChecked: func.isRequired
};

// function ToDoItem({ value, id, checked, onRemoveClick, onChecked }) {
//   console.log('render');
//   return (
//     <ItemWrap>
//       <Item>
//         <Label>
//           <CheckBlock>
//             <input
//               type="checkbox"
//               checked={checked}
//               onChange={() => onChecked(id)}
//             />
//           </CheckBlock>
//           <div>{value}</div>
//         </Label>
//         <RemoveButton
//           className="remove"
//           type="button"
//           onClick={() => onRemoveClick(id)}
//         >
//           X
//         </RemoveButton>
//       </Item>
//     </ItemWrap>
//   );
// }

// ToDoItem.propTypes = {
//   value: string.isRequired,
//   checked: bool.isRequired,
//   id: number.isRequired,
//   onRemoveClick: func.isRequired,
//   onChecked: func.isRequired
// };

// export const ItemMemo = memo(ToDoItem);
