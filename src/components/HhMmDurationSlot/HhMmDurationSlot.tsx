import {MutableRefObject, KeyboardEventHandler, ChangeEventHandler} from 'react';
import {INTERACTION_KEYS} from '../../util/interactionKeys';
import './HhMmDurationSlot.css';

export const HhMmDurationSlot = ({
    inputRef,
    inputId,
    value,
    onChange,
    resetToggleSlot,
    onArrowUp,
    onArrowDown,
    onMovingRight,
    onMovingLeft,
}: {
    inputRef?: MutableRefObject<any>,
    inputId?: string,
    value?: number,
    onChange?: ChangeEventHandler<HTMLInputElement>,
    resetToggleSlot?: () => void,
    onArrowUp?: () => void,
    onArrowDown?: () => void,
    onMovingRight?: () => void,
    onMovingLeft?: () => void,
}) => {
    const onKeyDown: KeyboardEventHandler<HTMLInputElement> = ({ key }) => {
        if (key === INTERACTION_KEYS.ARROW_UP && onArrowUp) {
            onArrowUp();
        }

        if (key === INTERACTION_KEYS.ARROW_DOWN && onArrowDown) {
            onArrowDown();
        }
    };

    const onKeyUp: KeyboardEventHandler<HTMLInputElement> = ({ key, currentTarget: { selectionStart }}) => {
        if (onMovingLeft && key === INTERACTION_KEYS.ARROW_LEFT && selectionStart === 0) {
            resetToggleSlot?.();
            onMovingLeft();
        }

        if (onMovingRight && key === INTERACTION_KEYS.ARROW_RIGHT && selectionStart === 2) {
            resetToggleSlot?.();
            onMovingRight();
        }
    };

    const onFocus = () => {
        resetToggleSlot?.();
        inputRef?.current?.select?.();
    };

    return (
        <input
            ref={inputRef}
            id={inputId}
            className='hhmm-duration-slot'
            type='text'
            value={String(value).padStart(2, '0')}
            onChange={onChange}
            onFocus={onFocus}
            onKeyDown={onKeyDown}
            onKeyUp={onKeyUp}
        />
    );
};
