import { Minus, Plus, Trash2 } from 'lucide-react';

import { cn } from '@/lib/utils';

import {
  COUNTER_VARIANTS,
  CounterVariantsSizeType,
} from '../../constants/counter.constants';

type CounterProps = {
  value: number;
  onChange?: (value: number) => void;
  onMinimumType?: 'disabled' | 'delete';
  counterMultiplier?: number;
  minimum?: number;
  maximum?: number;
  size?: CounterVariantsSizeType;
};

const Counter = ({
  minimum = 0,
  counterMultiplier = 1,
  onMinimumType = 'disabled',
  size = 'lg',
  ...props
}: CounterProps) => {
  function onAdd() {
    if (!!props.maximum) {
      if (props.value + counterMultiplier <= props.maximum) {
        props.onChange?.(props.value + counterMultiplier);
      }
    } else {
      props.onChange?.(props.value + counterMultiplier);
    }
  }

  function onMinus() {
    if (props.value - counterMultiplier >= minimum) {
      props.onChange?.(props.value - counterMultiplier);
    }
  }

  function onDelete() {
    props.onChange?.(0);
  }

  return (
    <div className={COUNTER_VARIANTS[size].container}>
      {props.value - counterMultiplier < minimum &&
        onMinimumType === 'delete' && (
          <span
            onClick={onDelete}
            className={COUNTER_VARIANTS[size].counterButtons}
          >
            {props.value - counterMultiplier < minimum &&
              onMinimumType === 'delete' && (
                <Trash2 className={COUNTER_VARIANTS[size].delete} />
              )}
          </span>
        )}

      <span
        onClick={onMinus}
        className={cn(
          COUNTER_VARIANTS[size].counterButtons,
          props.value - counterMultiplier < minimum &&
            onMinimumType === 'delete'
            ? 'hidden'
            : '',
        )}
      >
        <Minus
          className={cn(
            COUNTER_VARIANTS[size].icons,
            props.value - counterMultiplier < minimum ? 'text-nature-900' : '',
          )}
        />
      </span>
      <p className={COUNTER_VARIANTS[size].valueText}>{props.value}</p>
      <span onClick={onAdd} className={COUNTER_VARIANTS[size].counterButtons}>
        <Plus
          className={cn(
            COUNTER_VARIANTS[size].icons,
            props.maximum && props.value + counterMultiplier > props?.maximum
              ? 'text-nature-900'
              : '',
          )}
        />
      </span>
    </div>
  );
};

export default Counter;
