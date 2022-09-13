import {useRef, useState, ChangeEvent} from 'react';
import {last2CharsNoWhitespace} from '../../util/last2CharsNoWhitespace';
import {HhMmDurationSlot} from '../HhMmDurationSlot/HhMmDurationSlot';
import './HhMmDurationInput.css';

export const HhMmDurationInput = ({ inputId }: { inputId?: string }) => {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [toggleSlot, setToggleSlot] = useState(false);
    
    const hoursRef = useRef<any>();
    const minutesRef = useRef<any>();

    const onHoursChange = ({target:{value}}: ChangeEvent<HTMLInputElement>) => {        
        let substring = last2CharsNoWhitespace(value);
        let newNumber = Number(substring);

        if (Number.isNaN(newNumber)) {
            return;
        }

        setHours(newNumber);

        if (!toggleSlot) {
            setToggleSlot(true);
            
            return;
        }

        focusOnMinutesSlot();
    };

    const onMinutesChange = ({target: {value}}: ChangeEvent<HTMLInputElement>) => {
        let substring = last2CharsNoWhitespace(value);
        let newNumber = Number(substring);

        if (Number.isNaN(newNumber)) {
            return;
        }

        if (newNumber > 59) {
            substring = '0' + substring[1];
            newNumber = Number(substring);
        }

        setMinutes(newNumber);

        if (!toggleSlot) {
            setToggleSlot(true);

            return;
        }

        focusOnHoursSlot();
    };

    const focusOnHoursSlot = () => hoursRef?.current?.focus?.();
    const focusOnMinutesSlot = () => minutesRef?.current?.focus?.();

    return (
        <div title="Duration in hh:mm format" className='hhmm-duration-input'>
            <HhMmDurationSlot
                inputId={inputId}
                value={hours}
                onChange={onHoursChange}
                inputRef={hoursRef}
                resetToggleSlot={() => setToggleSlot(false)}
                onArrowUp={() => setHours(prev => prev === 99 ? 0 : prev + 1)}
                onArrowDown={() => setHours(prev => prev === 0 ? 99 : prev - 1)}
                onMovingRight={async () => {
                    setToggleSlot(false);
                    focusOnMinutesSlot();
                }}
            />
            :
            <HhMmDurationSlot
                value={minutes}
                onChange={onMinutesChange}
                inputRef={minutesRef}
                resetToggleSlot={() => setToggleSlot(false)}
                onArrowUp={() => setMinutes(prev => prev === 59 ? 0 : prev + 1)}
                onArrowDown={() => setMinutes(prev => prev === 0 ? 59 : prev - 1)}
                onMovingLeft={async () => {
                    setToggleSlot(false);
                    focusOnHoursSlot();
                }}
            />
        </div>
    );
};
