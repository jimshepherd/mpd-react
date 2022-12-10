import React, { ReactNode, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { CircularProgress } from '@mui/material';

import {
  UpdateGraphQL,
  UpdateGraphQLPlaceholder,
  UpdateGraphQLProps,
} from '../../graphql/hooks/graphQLHookTypes';
import useErrorMessage from '../../helpers/useErrorMessage';
import useFormValidation, {
  FormErrors, InputEvent, SelectEvent
} from '../../helpers/useFormValidation';
import { Item } from '../../models';
import EditButtons from './EditButtons';


export type DeleteReason = {id?: string, name?: string};
export const DELETE_REASONS: DeleteReason[] = [
  {id: '1', name: 'Duplicate'},
  {id: '2', name: 'Does not exist'},
]
export const INPUT_VARIANT = 'standard';


export const itemEditStyles = {
  form: {
    flexBasis: 700,
    //[theme.breakpoints.down('sm')]: {
    //  paddingLeft: theme.spacing(2),
    //  paddingRight: theme.spacing(2),
    //},
    marginLeft: 10,
    marginRight: 10,
  },
  title: {
    //marginTop: theme.spacing(3)
  },
  formControl: {
    minWidth: 120,
  },
  textField: {
    //marginTop: theme.spacing(2)
  },
  footer: {
  },
  errorText: {
    //color: theme.palette.error.main,
    marginLeft: 10,
  },
  actions: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButton: {
    //margin: theme.spacing(1),
    justifyContent: 'left',
  },
  cancelButton: {
    //margin: theme.spacing(2, 0),
    marginLeft: 20,
  },
  deleteButton: {
    //margin: theme.spacing(2, 0),
    marginRight: 40,
    //color: theme.palette.error.main,
  },
  submitButton: {
    //margin: theme.spacing(2, 0),
    marginLeft: 20,
  },
};

export type FieldRenderer<T> = (
    originalItem: T|null,
    item: T|null,
    errors: FormErrors<T>,
    handleBlur: () => void,
    handleChange: (event: InputEvent|SelectEvent) => void,
    updateProperty: (name: string, value: any) => void,
  ) => ReactNode;

// Props passed into ItemEdit parents
export type ItemEditProps<T> = {
  item?: T | null,
  itemTypeName?: string,
  id?: string | null,
  deleteReason?: DeleteReason|null,
  formId?: string,
  preSubmit?: (item: T) => Promise<T>,
  onCancel?: () => void,
  onComplete?: (item?: T|null) => void,
  onDelete?: () => void,
  onError?: (msg: string) => void,
  hideButtons?: boolean,
  hideCancel?: boolean,
  hideDelete?: boolean,
  hideError?: boolean,
  ignoreParamId?: boolean,
  submitButtonLabel?: string,
  noBack?: boolean,
}

// Props defined by ItemEdit parents
type Props<T extends Item> = ItemEditProps<T> & {
  defaultValue: T;
  fieldRenderer: FieldRenderer<T>;

  useUpdateGraphQL?: UpdateGraphQL<T>,
  useUpdateGraphQLProps?: UpdateGraphQLProps,

  validator: (item: T) => FormErrors<T>;
  propertiesToAlwaysUpdate?: string[],
}

function ItemEdit<T extends Item>(props: Props<T>) {

  const {
    item,
    itemTypeName,
    defaultValue,
    id,
    useUpdateGraphQL= UpdateGraphQLPlaceholder,
    useUpdateGraphQLProps,
    fieldRenderer,
    validator,
    propertiesToAlwaysUpdate,
    deleteReason,
    formId,
    preSubmit,
    onCancel,
    onComplete,
    onDelete,
    onError,
    hideButtons = false,
    hideCancel = false,
    hideDelete = false,
    hideError = false,
    ignoreParamId = false,
    submitButtonLabel,
    noBack = false,
  } = props;

  //console.log('ItemEdit', item);

  const classes = itemEditStyles;
  const navigate = useNavigate();

  const [resolvedId, setResolvedId] = useState<string|undefined>(undefined);
  const {id: paramId} = useParams();
  useEffect(() => {
    if (id != null) {
      setResolvedId(id);
    } else if (!ignoreParamId && paramId != null && paramId !== 'new') {
      setResolvedId(paramId);
    } else if (item?.id != null) {
      setResolvedId(item.id);
    } else {
      setResolvedId(undefined);
    }
  }, [id, paramId, item, ignoreParamId]);

  const [_deleteReason, setDeleteReason] = useState<DeleteReason|null>(null);
  useEffect(() => {
    setDeleteReason(deleteReason || null);
  }, [deleteReason]);

  const {item: graphQLItem, updateItem, deleteItem, updatingItem, updateError} =
    useUpdateGraphQL({currentId: resolvedId, ...useUpdateGraphQLProps});

  const [resolvedItem, setResolvedItem] = useState<T|null>(null);
  useEffect(() => {
    if (graphQLItem != null) {
      setResolvedItem(graphQLItem);
    } else if (item != null) {
      setResolvedItem(item);
    } else {
      setResolvedItem(defaultValue);
    }
  }, [item, graphQLItem, defaultValue]);

  const {
    handleSubmit,
    handleBlur,
    handleChange,
    updateProperty,
    formItem,
    formErrors,
    isSubmitting
  } = useFormValidation<T>(resolvedItem, validator);

  const [errorMessage, setErrorMessage] = useErrorMessage(
    [formErrors, updateError||null]);

  useEffect(() => {
    if (errorMessage && errorMessage.length > 0) {
      onError && onError(errorMessage);
    }
  }, [errorMessage, onError]);

  async function onSubmit() {
    if (formItem == null) {
      setErrorMessage('Form has not been initialized');
      return;
    }
    const itemToSubmit = (preSubmit && await preSubmit(formItem)) || formItem;
    if (itemToSubmit && itemToSubmit.id) {
      console.log('deleting?', _deleteReason, _deleteReason?.name);
      if (_deleteReason?.name != null) {
        try {
          deleteItem && await deleteItem(itemToSubmit, _deleteReason.name);
          onDelete && await onDelete();
          return;
        } catch (e) {
          console.log('onSubmit Delete Error', e);
          return;
        }
      } else {
        console.log('Updating item', resolvedItem);
        try {
          //await updateItemInFirestore(itemToSubmit, _item, propertiesToAlwaysUpdate);
          await updateItem(itemToSubmit);
        } catch (e) {
          console.log('onSubmit Update Error', e);
          return;
        }
      }
    } else {
      console.log('Adding item', item);
      //await addItemToFirestore(itemToSubmit);
      await updateItem(itemToSubmit);
    }
    onComplete && await onComplete(itemToSubmit);
    // Go back if editing from a page
    if (!noBack && item == null && paramId != null) {
      navigate(-1);
    }
  }

  const handleCancel = () => {
    onCancel && onCancel();
    // If canceling edit from a page, go back to previous page
    if (paramId != null) {
      navigate(-1);
    }
  };

  const handleDeleteReason = (reason: DeleteReason) => {
    setDeleteReason(reason);
  };

  if (isSubmitting || updatingItem) {
    return <CircularProgress/>
  }

  const buttonName = itemTypeName == null ? '' : ' '+itemTypeName;
  return (
    <form
      className={JSON.stringify(classes.form)}
      id={formId}
      onSubmit={(e) => handleSubmit(e, onSubmit)}
    >
      {fieldRenderer(
        resolvedItem, formItem, formErrors, handleBlur, handleChange, updateProperty
      )}
      <EditButtons
        errorMessage={errorMessage}
        hideButtons={hideButtons}
        hideCancel={hideCancel}
        hideDelete={hideDelete || resolvedId == null}
        hideError={hideError}
        onCancel={handleCancel}
        onDeleteRequested={handleDeleteReason}
        submitButtonLabel={submitButtonLabel ?? (formItem?.id == null ? 'Add' : 'Update')+buttonName}
      />
    </form>
  );
}

export default ItemEdit;
