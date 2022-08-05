import { isEqual } from 'lodash';
import React, { ChangeEvent, useEffect, useState } from 'react';

import { Item } from '../models';

export type SubmitEvent = React.FormEvent<HTMLFormElement>;
export type InputEvent = ChangeEvent<HTMLInputElement>;
export type SelectEvent = ChangeEvent<HTMLInputElement>;
export type ButtonEvent = React.MouseEvent<HTMLButtonElement>;

export type FormErrors<T> = Partial<{
  -readonly [K in keyof T]: string;
}>;

function isCheckboxEvent(event: InputEvent|SelectEvent) : event is InputEvent{
   return (event as InputEvent).target.type === 'checkbox';
}


function useFormValidation<T extends Item>(
    item: T|null,
    validate: (item: T) => FormErrors<T>) {

  const [formItem, setFormItem] = useState<T|null>(item);
  const [formErrors, setFormErrors] = useState<FormErrors<T>>({});
  const [isSubmitting, setSubmitting] = useState<boolean>(false);
  const [isValid, setIsValid] = useState<boolean>(false);

  useEffect(() => {
    if (item && !isEqual(item, formItem)) {
      setFormItem(item.clone());
    }
  }, [item]); // Including formItem will result in continual resetting of formItem

  function checkHasErrors(save=true) {
    setIsValid(true);
    if (formItem == null) {
      return false;
    }
    const validationErrors = validate(formItem);
    if (save) {
      setFormErrors(validationErrors);
    }
    const hasNoErrors = Object.entries(validationErrors).length === 0;
    setIsValid(hasNoErrors);
    return !hasNoErrors;
  }

  function handleChange(event: InputEvent|SelectEvent) {
    event.persist();
    if (formItem == null) {
      return;
    }
    let value: any = event.target.value;
    if (isCheckboxEvent(event)) {
      value = event.target.checked;
    }
    const name = event.target.name;
    if (name in formItem) {
      updateProperty(name, value);
    }
  }

  function updateProperty(name: string, value: any) {
    if (formItem && name in formItem) {
      setFormItem(oldFormItem => {
        if (oldFormItem == null) {
          return null;
        }
        const newFormItem = oldFormItem.clone();
        // @ts-ignore
        newFormItem[name] = value;
        return newFormItem;
      });
      checkHasErrors(false);
    }
  }

  function handleBlur() {
    checkHasErrors(false);
  }

  async function handleSubmit(
      event: SubmitEvent | ButtonEvent,
      onSubmit?: () => {}
  ) {
    event.preventDefault();
    setSubmitting(true);
    const hasErrors = checkHasErrors();
    if (!hasErrors) {
      onSubmit && await onSubmit();
    }
    setSubmitting(false);
  }

  return {
    handleSubmit,
    handleBlur,
    handleChange,
    updateProperty,
    formItem,
    formErrors,
    isValid,
    isSubmitting
  };
}

export default useFormValidation;
